import React from 'react';

const AvailableSoon = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-gray-800">Coming Soon!</h1>
        <p className="mt-4 text-gray-600">
          We're working hard to bring you something amazing. Stay tuned!
        </p>
        <div className="mt-8">
          <button className="px-6 py-3 text-white bg-blue-600 rounded-lg hover:bg-blue-500">
            Notify Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default AvailableSoon;
