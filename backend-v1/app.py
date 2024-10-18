from flask import Flask, request, jsonify
from flask_cors import CORS
import os
from our_model import convert_to_text, predict_model

app = Flask(__name__)
CORS(app)  # Allow cross-origin requests from the frontend

# Define a directory to save uploaded files
UPLOAD_FOLDER = 'uploads'
if not os.path.exists(UPLOAD_FOLDER):
    os.makedirs(UPLOAD_FOLDER)

@app.route('/upload-audio', methods=['POST'])
def upload_audio():
    if 'audio' not in request.files:
        return jsonify({'error': 'No audio file in the request'}), 400

    audio_file = request.files['audio']  # Get the uploaded audio file

    if audio_file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    # Save the uploaded audio file to the uploads directory
    audio_path = os.path.join(UPLOAD_FOLDER, audio_file.filename)
    audio_file.save(audio_path)  # Save the file to the specified path

    # Pass the audio file path to the convert_to_text function
    text = convert_to_text(audio_path)

    if "Error" in text:
        return jsonify({'error': text}), 400

    # Pass the extracted text to the model for prediction
    preds = predict_model(text)

    return jsonify({'message': preds})

if __name__ == '__main__':
    app.run(debug=True)
