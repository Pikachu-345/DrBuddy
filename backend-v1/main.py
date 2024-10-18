import speech_recognition as sr
import pyttsx3
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification, TextClassificationPipeline
import keyboard  # Make sure to install the keyboard library

# Initialize the TTS engine
engine = pyttsx3.init()

# Function to speak a given text
def speak(text):
    engine.say(text)
    engine.runAndWait()

# Load the model and tokenizer
model_path = './fine_tune_bert'
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = TFAutoModelForSequenceClassification.from_pretrained(model_path)

# Initialize the prediction pipeline
num_classes = 24  # Change this to the actual number of classes in your model
pipe = TextClassificationPipeline(model=model, tokenizer=tokenizer, top_k=num_classes)

# Initialize the recognizer
r = sr.Recognizer()

def record_text():
    while True:
        try:
            with sr.Microphone() as source:
                r.adjust_for_ambient_noise(source, duration=0.2)
                audio = r.listen(source)
                my_text = r.recognize_google(audio)
                return my_text
        except sr.RequestError as e:
            print("Could not request results; {0}".format(e))
        except sr.UnknownValueError:
            print("Unknown error occurred")

def output_text(text):
    with open("output.txt", "a") as f:
        f.write(text)
        f.write("\n")
    
    return

while True:
    # Check if the exit key is pressed
    if keyboard.is_pressed('q'):  # Change 'q' to whatever key you prefer
        print("Exiting...")
        break
    
    speak("I am listening. Please describe your symptoms.")
    text = record_text()
    output_text(text)
    
    print("Wrote text:", text)
    
    # Get prediction from the model
    predictions = pipe(text)

    # Check if predictions are returned
    if predictions and len(predictions) > 0:
        top_prediction = predictions[0][0]  # Access the first prediction from the inner list
        predicted_disease = top_prediction['label']
        predicted_score = top_prediction['score']
        print(f"Predicted disease: {predicted_disease} with score: {predicted_score:.2f}")

        # Speak the predicted disease
        speak(f"The predicted disease is {predicted_disease}.")
    else:
        print("No predictions were returned.")
