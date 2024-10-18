import React from 'react';

const Header = () => {
  return (
    <header className="bg-white border-b border-gray-200">
      <div className="container mx-auto px-4 py-3">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <a href="/" className="text-xl font-bold">Dr.Buddy</a>
          </div>
          <nav className="flex">
            <a href="/" className="hover:text-blue-500 my-5 mx-8">FEATURES</a>
            <a href="/" className="hover:text-blue-500 my-5 mx-8">ABOUT</a>
            <a href="/" className="hover:text-blue-500 my-5 mx-8">BENEFITS</a>
            {/* <a href="/" className="hover:text-blue-500 my-5 mx-8">Vision</a>
            <a href="/" className="hover:text-blue-500 my-5 mx-8">Reviews</a> */}
            <a href="/" className="hover:text-blue-500 my-5 mx-8">TEAM</a>
            <a href="/" className="hover:text-blue-500 my-5 mx-8">CONTACT US</a>
            <a href="/" className="hover:text-blue-500 my-5 mx-8">LOGIN</a>
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;