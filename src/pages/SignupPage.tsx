import React from 'react';
import SignupForm from '../components/auth/SignupForm';

const SignupPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Create a New Account</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Join our library management system to access books, manage your borrowings, and more.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="flex-1 rounded-lg overflow-hidden hidden md:block">
            <img 
              src="https://images.pexels.com/photos/256431/pexels-photo-256431.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Library books" 
              className="w-full h-full object-cover"
            />
          </div>
          
          <div className="flex-1 flex items-center justify-center">
            <SignupForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;