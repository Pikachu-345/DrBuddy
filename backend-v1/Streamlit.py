import streamlit as st
import speech_recognition as sr
import pyttsx3
from googletrans import Translator
from transformers import AutoTokenizer, TFAutoModelForSequenceClassification, TextClassificationPipeline

st.set_page_config(page_title="Disease Diagnosis")

engine = pyttsx3.init()
translator = Translator()

model_path = './fine_tune_bert'
tokenizer = AutoTokenizer.from_pretrained(model_path)
model = TFAutoModelForSequenceClassification.from_pretrained(model_path)

num_classes = 24  
pipe = TextClassificationPipeline(model=model, tokenizer=tokenizer, top_k=num_classes)

r = sr.Recognizer()

def speak(text):
    import threading
    def tts():
        engine.say(text)
        engine.runAndWait()
    
    threading.Thread(target=tts).start()

def record_audio(language):
    with sr.Microphone() as source:
        r.adjust_for_ambient_noise(source, duration=0.2)
        st.write("Listening...")
        audio_text = ""
        while st.session_state.get('listening', False):  
            audio = r.listen(source)
            try:
                if language == 'Hindi':
                    audio_text = r.recognize_google(audio, language='hi-IN')
                else:
                    audio_text = r.recognize_google(audio, language='en-US')
                return audio_text
            except sr.RequestError as e:
                st.error("Could not request results; {0}".format(e))
            except sr.UnknownValueError:
                st.error("Unknown error occurred")
        return audio_text

st.title("Disease Prediction from Symptoms")
st.write("Choose the language for audio input:")
language = st.selectbox("Select Language:", ["English", "Hindi"])

if st.button("Start Listening"):
    st.session_state['listening'] = True  

    if language == "Hindi":
        st.write("Please speak in Hindi.")
    else:
        st.write("Please speak in English.")
    
    audio_text = record_audio(language)

    if audio_text:
        st.write("Recognized Text:", audio_text)

        if language == "Hindi":
            translated_text = translator.translate(audio_text, src='hi', dest='en').text
        else:
            translated_text = audio_text

        st.write("Translated Text:", translated_text)

        predictions = pipe(translated_text)

        if predictions and len(predictions) > 0:
            top_prediction = predictions[0][0]  
            predicted_disease = top_prediction['label']
            predicted_score = top_prediction['score']
            st.write(f"Predicted Disease: {predicted_disease} with score: {predicted_score:.2f}")
            speak(f"The predicted disease is {predicted_disease}.")
            
            # Save the result to a text file
            with open('result.txt', 'w') as f:
                f.write(f"Predicted Disease: {predicted_disease} with score: {predicted_score:.2f}\n")
        else:
            st.write("No predictions were returned.")

if st.button("Stop Listening"):
    st.session_state['listening'] = False  
    st.write("Stopped listening.")