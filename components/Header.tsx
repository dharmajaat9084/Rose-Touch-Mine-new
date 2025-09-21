
import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        <div className="flex flex-col">
          <h1 className="text-3xl font-bold text-gray-800 font-display tracking-wider">Rose Touch®</h1>
          <p className="text-sm text-gray-500 tracking-widest">FEEL THE TOUCH</p>
        </div>
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="text-gray-600 hover:text-[#004d40] transition duration-300">Home</a>
          <a href="#about" className="text-gray-600 hover:text-[#004d40] transition duration-300">About</a>
          <a href="#products" className="text-gray-600 hover:text-[#004d40] transition duration-300">Products</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
