import React from "react";
import img1 from "../assets/drbuddy2.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-12 border-b border-gray-200">
      <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0 md:space-x-8 w-lvw">
        <div className=" h-[600px] w-[600px] mx-auto bg-gradient-to-r from-amber-200 to-red-200 rounded-full flex justify-center items-center border-2 border-black"><img src={img1} alt=""  /></div>
          
        {/* Right: About Text */}
        <div className="flex flex-col text-left w-1/2 pr-16">
          <h2 className="text-4xl font-bold">ABOUT</h2>
          <p className="text-gray-600">
          AI- driven healthcare solution designed to enhance the medical facility in underserved regions.
Levaraging BERT for nuanced classification and better symptom articulation.
Generation of preliminary diagnoses based on symptom input analysis, medical report analysis and medical imaging analysis to provide accurate and precise diagnoses.
          </p>
          <h3 className="text-xl font-semibold mt-4">Why Choose Us?</h3>
          <ul className="list-disc ml-4 text-gray-600">
            <li>Fastest Response</li>
            <li>Doctors 24/7</li>
            <li>Private and Secure Consultation</li>
            <li>Quality and Trust</li>
            <li>Specialist AI Doctors</li>
            <li>256 bit encryption for data handling</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default About;
