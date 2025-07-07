import React from 'react';
import RoleCard from './RoleCard';

const RolesSection: React.FC = () => {
  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-800 mb-4">User Roles</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Our system supports different user roles with specific privileges and
            responsibilities to ensure efficient library management.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <RoleCard 
            title="Administrator"
            features={[
              "Manage system settings and configurations",
              "Create and manage user accounts",
              "Access to all system modules and reports",
              "Configure system parameters and rules",
              "Monitor system performance and security"
            ]}
            imageSrc="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            accessButtonText="Administrator Access"
            delay={0}
          />
          
          <RoleCard 
            title="Librarian"
            features={[
              "Manage book inventory and catalog",
              "Process book borrowing and returns",
              "Handle member inquiries and support",
              "Generate operational reports",
              "Manage reservations and waiting lists"
            ]}
            imageSrc="https://images.pexels.com/photos/590493/pexels-photo-590493.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            accessButtonText="Librarian Access"
            delay={0.1}
          />
          
          <RoleCard 
            title="Member"
            features={[
              "Search and browse book catalog",
              "View book availability status",
              "Request book borrowing and returns",
              "Track personal borrowing history",
              "Receive notifications about due dates"
            ]}
            imageSrc="https://images.pexels.com/photos/7103/writing-notes-idea-conference.jpg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            accessButtonText="Member Access"
            delay={0.2}
          />
        </div>
      </div>
    </section>
  );
};

export default RolesSection;