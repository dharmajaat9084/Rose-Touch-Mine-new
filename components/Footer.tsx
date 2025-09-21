
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-800 text-white">
      <div className="container mx-auto py-8 px-6 text-center">
        <h2 className="text-2xl font-bold font-display">Rose Touch®</h2>
        <p className="mt-2 text-gray-400">FEEL THE TOUCH</p>
        <p className="mt-4 text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} Rose Touch. All Rights Reserved.
        </p>
        <div className="mt-4 flex justify-center space-x-6">
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Facebook</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Instagram</a>
          <a href="#" className="text-gray-400 hover:text-white transition duration-300">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
