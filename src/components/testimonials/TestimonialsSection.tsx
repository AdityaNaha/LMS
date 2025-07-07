import React from 'react';
import TestimonialCard from './TestimonialCard';

const TestimonialsSection: React.FC = () => {
  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">What Our Users Say</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Hear from librarians and administrators who have transformed their library operations with our system.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <TestimonialCard 
            quote="As an administrator of a university library, I needed a robust system that could handle thousands of books and users. This LMS exceeded our expectations with its scalability, security features, and intuitive interface."
            name="Michael Chen"
            role="Administrator, University Library"
            imageUrl="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            delay={0}
          />
          <TestimonialCard 
            quote="The fine calculation and reporting modules have saved our staff countless hours. The system is reliable, fast, and constantly improving with new features. Customer support has been phenomenal throughout our implementation."
            name="Emily Rodriguez"
            role="Library Director, Public Library"
            imageUrl="https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            delay={0.1}
          />
          <TestimonialCard 
            quote="Switching to this Library Management System was the best decision for our school library. The intuitive interface means minimal training for new staff, and students love the modern catalog interface for finding books."
            name="David Johnson"
            role="School Librarian"
            imageUrl="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;