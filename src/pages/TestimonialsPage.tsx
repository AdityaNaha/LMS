import React from 'react';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';

const TestimonialsPage: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">Testimonials</h1>
          <p className="text-xl max-w-3xl mx-auto">
            See what our users are saying about their experience with our Library Management System.
          </p>
        </div>
      </div>
      <TestimonialsSection />
    </div>
  );
};

export default TestimonialsPage;