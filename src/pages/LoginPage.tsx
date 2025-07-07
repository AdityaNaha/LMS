import React from 'react';
import LoginForm from '../components/auth/LoginForm';

const LoginPage: React.FC = () => {
  return (
    <div className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">Account Access</h1>
          <p className="text-gray-600 max-w-md mx-auto">
            Log in to access your library account and manage your personal dashboard.
          </p>
        </div>
        
        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto">
          <div className="flex-1 flex items-center justify-center">
            <LoginForm />
          </div>
          
          <div className="flex-1 rounded-lg overflow-hidden hidden md:block">
            <img 
              src="https://images.pexels.com/photos/1290141/pexels-photo-1290141.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750" 
              alt="Library interior" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;