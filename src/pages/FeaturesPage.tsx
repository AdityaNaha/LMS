import React from 'react';
import FeaturesSection from '../components/features/FeaturesSection';

const FeaturesPage: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Key Features</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Explore the comprehensive feature set of our Library Management System designed to streamline operations and enhance user experience.
          </p>
        </div>
      </div>
      <FeaturesSection />
    </div>
  );
};

export default FeaturesPage;