import streamlit as st
import numpy as np
import tensorflow as tf
from tensorflow.keras.preprocessing import image
from tensorflow.keras.models import load_model
import matplotlib.pyplot as plt

# Load the trained model
model = load_model('modelFracture.h5')  # Make sure this is the correct model path

# Function to preprocess the uploaded image
def preprocess_image(img):
    img = img.resize((224, 224))  # Resize image to match model input
    img_array = image.img_to_array(img)  # Convert to array
    img_array = np.expand_dims(img_array, axis=0)  # Expand dimensions
    return img_array / 255.0  # Normalize the image

# Streamlit app layout
st.title("Bone Fracture Detection")
st.write("Upload an X-ray image to check for fractures.")

# Image upload
uploaded_file = st.file_uploader("Choose an X-ray image...", type=["jpg", "jpeg", "png"])

if uploaded_file is not None:
    # Load and preprocess the image
    img = image.load_img(uploaded_file, target_size=(224, 224))
    processed_img = preprocess_image(img)

    # Make prediction
    prediction = model.predict(processed_img)
    class_label = "Fracture" if prediction[0] < 0.5 else "Normal"

    # Display results
    st.image(img, caption='Uploaded Image', use_column_width=True)
    st.write(f"Prediction: {class_label}")
    st.write(f"Confidence: {prediction[0][0]:.2f}")

    # Optional: Display the prediction confidence as a bar chart
    st.bar_chart([1 - prediction[0][0], prediction[0][0]], width=700, height=300, use_container_width=True, 
                  labels=["Normal", "Fracture"])
