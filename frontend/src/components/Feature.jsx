import React from "react";
import img1 from "../assets/midic.jpg";
import img2 from "../assets/midic2.jpg";
import img3 from "../assets/midic3.jpg";
import img4 from "../assets/midic4.jpg";
import { useNavigate } from "react-router-dom";

const Features = () => {
  const navigate=useNavigate();
  const redirectToPort = (port) => {
    window.location.href = `http://localhost:${port}`; 
  };

  return (
    <div className="flex flex-col items-center justify-center py-12 bg-blue-400 space-y-8 border-b border-gray-200">
      <h2 className="text-4xl font-bold">FEATURES</h2>
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 px-4 md:px-12">
        <div className="flex flex-col items-center space-y-4 text-center">
          <img src={img1} alt="Medical Imaging Processor" className="rounded-lg"/>
          <h3 className="text-xl font-semibold">Medical Imaging Processor</h3>
          <p className="text-gray-600">
            Experience state-of-the-art imaging analysis with our cutting-edge processor. Whether it's X-rays, 
            MRIs, or CT scans, our AI enhances and interprets images, providing detailed insights to aid your healthcare journey.
          </p>
          <button 
            type="button" 
            className="text-blue-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white"
            onClick={()=>navigate("/available_soon")}
          >
            Try Now
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center">
          <img src={img2} alt="Medicinal Prescription" className="h-[355px] rounded-lg" />
          <h3 className="text-xl font-semibold">Medicinal Prescription</h3>
          <p className="text-gray-600">
            Say goodbye to one-size-fits-all prescriptions! Our innovative platform analyzes your unique health profile
            to suggest personalized medication options. Get the right treatment plan designed just for you.
          </p>
          <button 
            type="button" 
            className="text-blue-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white"
            onClick={()=>navigate("/available_soon")}
          >
            Try Now
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center">
          <img src={img3} alt="Disease Diagnosis" className="h-[355px] rounded-lg" />
          <h3 className="text-xl font-semibold">Disease Diagnosis</h3>
          <p className="text-gray-600">
            Empower yourself with our advanced diagnostic tool. By inputting your symptoms, 
            our AI-driven system analyzes your health condition, offering personalized insights and potential diseases.
          </p>
          <button 
            type="button" 
            className="text-blue-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white"
            onClick={() => redirectToPort(8501)} 
          >
            Try Now
          </button>
        </div>

        <div className="flex flex-col items-center space-y-4 text-center">
          <img src={img4} alt="Medical Report Analyzer" className="h-[355px] rounded-lg" />
          <h3 className="text-xl font-semibold">Medical Report Analyzer</h3>
          <p className="text-gray-600">
            Transform complex medical reports into clear, actionable insights. Our intelligent analyzer
            interprets lab results, medical histories, and diagnostic images, ensuring you understand your health like never before.     
          </p>
          <button 
            type="button" 
            className="text-blue-700 bg-white focus:outline-none focus:ring-4 focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:bg-white"
            onClick={() => redirectToPort(8502)} 
          >
            Try Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Features;
