import React from 'react';
import FeatureCard from './FeatureCard';
import { BookOpen, Users, RefreshCw, Search, DollarSign, BarChart2 } from 'lucide-react';

const FeaturesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">Key Features</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our Library Management System offers a comprehensive set of features
            designed to streamline library operations and enhance user experience.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <FeatureCard 
            icon={BookOpen}
            title="Book Management"
            description="Efficiently manage your book inventory with detailed cataloging, categorization, and status tracking. Add, update, and remove books with ease while maintaining comprehensive metadata."
            delay={0}
          />
          <FeatureCard 
            icon={Users}
            title="User Management"
            description="Create and manage user accounts with different access levels. Track member activities, manage permissions, and ensure secure authentication for all users."
            delay={0.1}
          />
          <FeatureCard 
            icon={RefreshCw}
            title="Borrowing & Returns"
            description="Streamline the process of borrowing and returning books with automated due date calculations and status updates. Handle reservations and manage waiting lists efficiently."
            delay={0.2}
          />
          <FeatureCard 
            icon={Search}
            title="Advanced Search"
            description="Powerful search functionality allows users to find books by title, author, category, ISBN, or availability status. Implement filters and sorting options for better results."
            delay={0.3}
          />
          <FeatureCard 
            icon={DollarSign}
            title="Fine Calculation"
            description="Automatically calculate fines for overdue books based on customizable rules. Generate invoices and track payment status for all transactions."
            delay={0.4}
          />
          <FeatureCard 
            icon={BarChart2}
            title="Reports & Analytics"
            description="Generate comprehensive reports on book circulation, user activity, and inventory status. Gain insights into library usage patterns with visual analytics dashboards."
            delay={0.5}
          />
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;