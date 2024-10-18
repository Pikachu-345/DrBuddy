import React from "react";

const Contact = () => {
  return (
    <div className="flex flex-col items-center justify-center py-12 px-4 md:px-12 bg-gradient-to-r from-blue-400 to-blue-600">
      {/* Contact Form Section */}
      <div className="flex flex-col md:flex-row items-start justify-between w-full max-w-4xl space-y-8 md:space-y-0 md:space-x-8 bg-white p-8 rounded-lg shadow-md">
        {/* Form Section */}
        <div className="flex flex-col w-full md:w-2/3 space-y-4">
          <h2 className="text-3xl font-bold text-gray-800">GET IN TOUCH</h2>
          <p className="text-gray-600">Please fill out the form below to send us an email and we will get back to you as soon as possible.</p>
          <form className="space-y-4">
            <div className="flex space-x-4">
              <input
                type="text"
                placeholder="Name"
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-1/2 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500"
              />
            </div>
            <textarea
              placeholder="Message"
              className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring focus:ring-blue-500 h-32"
            ></textarea>
            <button
              type="submit"
              className="bg-transparent text-blue-500 border border-blue-500 hover:bg-blue-500 hover:text-white rounded-md px-6 py-3 transition-colors"
            >
              SEND MESSAGE
            </button>
          </form>
        </div>

        {/* Contact Info Section */}
        <div className="flex flex-col space-y-4 w-full md:w-1/3 text-white">
          <h3 className="text-xl font-bold">Contact Info</h3>
          <div>
            <p>📍 Address</p>
            <p>5th Floor, R.S Tower, Jamshedpur, IN 831011</p>
          </div>
          <div>
            <p>📞 Phone</p>
            <p>+91 6380823262</p>
          </div>
          <div>
            <p>✉️ Email</p>
            <p>support@doctomist.com</p>
          </div>
        </div>
      </div>

      {/* Social Links Section */}
      <div className="flex space-x-4 mt-8">
        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
          <i className="fab fa-twitter"></i>
        </a>
        <a href="#" className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-blue-500 hover:bg-blue-500 hover:text-white transition-colors">
          <i className="fab fa-youtube"></i>
        </a>
      </div>
    </div>
  );
};

export default Contact;
