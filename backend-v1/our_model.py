from transformers import AutoTokenizer, TFAutoModelForSequenceClassification, TextClassificationPipeline
import speech_recognition as sr

from pydub import AudioSegment
import io

def convert_to_text(audio_path):
      try:
            r = sr.Recognizer()

            # Convert audio file to WAV using pydub if it's not already in WAV format
            if not audio_path.endswith('.wav'):
                  # Load the audio file using pydub
                  audio_segment = AudioSegment.from_file(audio_path)
                  # Define the path for the converted WAV file
                  wav_path = audio_path.rsplit('.', 1)[0] + '.wav'
                  # Export the audio segment to WAV format
                  audio_segment.export(wav_path, format="wav")
                  audio_path = wav_path  # Update audio_path to point to the new WAV file

            # Use `AudioFile` to handle the WAV file for speech recognition
            with sr.AudioFile(audio_path) as source:
                  audio = r.record(source)  # Read the entire audio file
                  my_text = r.recognize_google(audio)  # Convert speech to text using Google API
                  return my_text

      except sr.RequestError as e:
            print(f"Could not request results; {e}")
            return "Error: Could not request results"
      except sr.UnknownValueError:
            print("Speech recognition could not understand the audio")
            return "Error: Could not understand audio"
      except Exception as e:
            print(f"An error occurred: {e}")
            return f"Error: {e}"


def predict_model(text):
      num_classes = 24

      model_path = './fine_tune_bert'
      tokenizer = AutoTokenizer.from_pretrained(model_path)
      model = TFAutoModelForSequenceClassification.from_pretrained(model_path)

      pipe = TextClassificationPipeline(model=model, tokenizer=tokenizer, top_k=num_classes)

      predictions = pipe(text)
      if predictions and len(predictions) > 0:
            top_prediction = predictions[0][0]
            predicted_disease = top_prediction['label']
            predicted_score = top_prediction['score']
            return f"Predicted disease: {predicted_disease} with score: {predicted_score:.2f}"
      else:
            return "No predictions were returned."

text=convert_to_text("D:\Code Playground\web d\projects\DrBuddy\backend-v1\uploads\recording.wav")
print(text)
