import React from 'react';
import RolesSection from '../components/roles/RolesSection';

const UserRolesPage: React.FC = () => {
  return (
    <div>
      <div className="bg-blue-600 py-16">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl font-bold mb-4">User Roles</h1>
          <p className="text-xl max-w-3xl mx-auto">
            Our system supports different user roles with specific privileges and
            responsibilities to ensure efficient library management.
          </p>
        </div>
      </div>
      <RolesSection />
    </div>
  );
};

export default UserRolesPage;