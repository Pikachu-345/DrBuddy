import React from 'react';
import img from "../assets/img.jpg"
import img2 from "../assets/docai.jpg"

const MainDiv = () => {
  return (
    <div className=" mx-auto container  py-8 w-lvw flex  border-b border-gray-200">
      <div className='w-1/2 h-96 flex justify-center flex-col items-center'>
            <div >
                 <div>
                        <span className='font-bold text-4xl'>CONNECTING</span> 
                        <span className='font-bold text-4xl'> CARE,</span>
                        <span className='font-bold text-4xl'> ANYTIME,</span>
                        <span className='font-bold text-4xl'>ANYWHERE.</span>
                 </div>
                 <div className='h-2 w-16 my-3 bg-gradient-to-r from-cyan-300 to-purple-500'></div>
                 <p>AI- driven healthcare solution designed to enhance the medical facility in underserved regions.
                 </p>
            </div>
            <button className="bg-blue-500 text-white px-4 py-2 rounded-full mt-4">LEARN MORE</button>
      </div>
      <div className='w-1/2 h-96 flex items-center justify-center'>
           <img src={img2} className='h-96' />
      </div>
    </div>
  );
};

export default MainDiv;