import { useReactMediaRecorder } from "react-media-recorder";
import React, { useState } from "react";
import axios from 'axios';

export function AudioPage() {
  const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: false });
  const [error, setError] = useState('');

  const handleSubmit = async () => {
    
      try {
        let response ;
        if(mediaBlobUrl) response=await fetch(mediaBlobUrl);
        const blob = await response.blob(); 
        const file = new File([blob], 'recording.wav', { type: 'audio/wav' });
    
        const formData = new FormData();
        formData.append('audio', file);
    
        const res = await axios.post(`http://localhost:5000/upload-audio`, formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
    
        console.log('Response:', res.data);
      } catch (error) {
        setError('Error sending audio: ' + error.message);
      }
    };
    

  return (
    <div>
      <p>{status}</p>
      <button onClick={startRecording} className="border border-black p-2 rounded-lg">Start Recording</button>
      <button onClick={stopRecording} className="border border-black p-2 rounded-lg">Stop Recording</button>
      <audio src={mediaBlobUrl} controls autoPlay loop />
      <div className="mt-4">
        <button
          onClick={handleSubmit}
          className="ml-2 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
        >
          Send Audio
        </button>
      </div>
      {error && <p className="text-red-500 mt-2">{error}</p>}
    </div>
  );
};