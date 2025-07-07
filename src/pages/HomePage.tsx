import React from 'react';
import Hero from '../components/home/Hero';
import Stats from '../components/home/Stats';
import FeaturesSection from '../components/features/FeaturesSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';

const HomePage: React.FC = () => {
  return (
    <div>
      <Hero />
      <Stats />
      <FeaturesSection />
      <TestimonialsSection />
    </div>
  );
};

export default HomePage;