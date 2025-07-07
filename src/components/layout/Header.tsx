import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Menu, X } from 'lucide-react';

const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="bg-white shadow-sm py-4 sticky top-0 z-50">
      <div className="container mx-auto px-4 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2 text-blue-600">
          <div className="relative w-10 h-10">
            <div className="absolute w-10 h-10 bg-yellow-400 rounded-md transform -rotate-6"></div>
            <div className="absolute w-10 h-10 bg-blue-400 rounded-md transform rotate-6"></div>
            <div className="absolute w-10 h-10 bg-green-400 rounded-md transform rotate-3"></div>
            <BookOpen className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-blue-600" size={20} />
          </div>
          <span className="text-xl font-bold">Library Management System</span>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-4">
          <NavLinks />
          <div className="ml-4 flex items-center gap-2">
            <Link to="/login" className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md transition duration-300 hover:bg-blue-50">
              Login
            </Link>
            <Link to="/signup" className="bg-blue-600 text-white px-4 py-2 rounded-md transition duration-300 hover:bg-blue-700">
              Sign Up
            </Link>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button className="md:hidden text-blue-600" onClick={toggleMobileMenu}>
          {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 py-4 px-4 absolute w-full">
          <nav className="flex flex-col gap-4">
            <MobileNavLinks closeMenu={() => setMobileMenuOpen(false)} />
            <div className="flex flex-col gap-2 mt-4">
              <Link 
                to="/login" 
                className="border border-blue-600 text-blue-600 px-4 py-2 rounded-md text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Login
              </Link>
              <Link 
                to="/signup" 
                className="bg-blue-600 text-white px-4 py-2 rounded-md text-center"
                onClick={() => setMobileMenuOpen(false)}
              >
                Sign Up
              </Link>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

interface MobileNavLinksProps {
  closeMenu: () => void;
}

const MobileNavLinks: React.FC<MobileNavLinksProps> = ({ closeMenu }) => {
  return (
    <>
      <Link to="/\" className="py-2 hover:text-blue-600\" onClick={closeMenu}>
        Home
      </Link>
      <Link to="/features" className="py-2 hover:text-blue-600" onClick={closeMenu}>
        Features
      </Link>
      <Link to="/user-roles" className="py-2 hover:text-blue-600" onClick={closeMenu}>
        User Roles
      </Link>
      <Link to="/testimonials" className="py-2 hover:text-blue-600" onClick={closeMenu}>
        Testimonials
      </Link>
    </>
  );
};

const NavLinks: React.FC = () => {
  return (
    <>
      <Link to="/" className="py-2 px-3 hover:text-blue-600 font-medium flex items-center gap-1">
        <span>Home</span>
      </Link>
      <Link to="/features" className="py-2 px-3 hover:text-blue-600 font-medium flex items-center gap-1">
        <span>Features</span>
      </Link>
      <Link to="/user-roles" className="py-2 px-3 hover:text-blue-600 font-medium flex items-center gap-1">
        <span>User Roles</span>
      </Link>
      <Link to="/testimonials" className="py-2 px-3 hover:text-blue-600 font-medium flex items-center gap-1">
        <span>Testimonials</span>
      </Link>
    </>
  );
};

export default Header;