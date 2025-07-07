import React from 'react';
import { Link } from 'react-router-dom';

const Hero: React.FC = () => {
  return (
    <div className="relative bg-cover bg-center h-[500px] flex items-center" style={{ 
      backgroundImage: "url('https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750')",
      backgroundPosition: 'center 30%'
    }}>
      <div className="absolute inset-0 bg-black bg-opacity-60"></div>
      
      <div className="container mx-auto px-4 relative z-10 text-white text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
          Modern Library Management System
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto mb-8">
          Streamline your library operations with our comprehensive solution for book management, user tracking, and efficient transaction processing.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/features" className="bg-blue-600 hover:bg-blue-700 text-white font-medium px-6 py-3 rounded-md transition duration-300 text-center">
            Explore Features
          </Link>
          <Link to="/signup" className="bg-white hover:bg-gray-100 text-blue-600 font-medium px-6 py-3 rounded-md transition duration-300 text-center">
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;