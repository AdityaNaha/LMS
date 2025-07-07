import React from 'react';
import { motion } from 'framer-motion';

interface TestimonialCardProps {
  quote: string;
  name: string;
  role: string;
  imageUrl: string;
  delay?: number;
}

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, name, role, imageUrl, delay = 0 }) => {
  return (
    <motion.div 
      className="bg-white rounded-lg shadow-md p-6 border border-gray-100"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay }}
    >
      <div className="flex flex-col h-full">
        <div className="mb-4">
          <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg" className="text-blue-600">
            <path d="M14.25 21.75C14.25 25.0637 11.5637 27.75 8.25 27.75C4.93629 27.75 2.25 25.0637 2.25 21.75C2.25 18.4363 4.93629 15.75 8.25 15.75V13.5C3.69365 13.5 0 17.1936 0 21.75C0 26.3064 3.69365 30 8.25 30C12.8064 30 16.5 26.3064 16.5 21.75V13.5H14.25V21.75ZM33.75 15.75V13.5C29.1936 13.5 25.5 17.1936 25.5 21.75C25.5 26.3064 29.1936 30 33.75 30C38.3064 30 42 26.3064 42 21.75C42 17.1936 38.3064 13.5 33.75 13.5V15.75C37.0637 15.75 39.75 18.4363 39.75 21.75C39.75 25.0637 37.0637 27.75 33.75 27.75C30.4363 27.75 27.75 25.0637 27.75 21.75C27.75 18.4363 30.4363 15.75 33.75 15.75Z" fill="currentColor"/>
          </svg>
        </div>
        
        <p className="text-gray-600 italic mb-6 flex-grow">{quote}</p>
        
        <div className="flex items-center">
          <img 
            src={imageUrl} 
            alt={name} 
            className="w-12 h-12 rounded-full object-cover mr-4"
          />
          <div>
            <h4 className="font-semibold text-gray-800">{name}</h4>
            <p className="text-gray-500 text-sm">{role}</p>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default TestimonialCard;