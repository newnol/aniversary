import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Heart, Clock, Image, Map, BrainCircuit, PawPrint, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white shadow-lg relative z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <Heart className="h-6 w-6 text-pink-500" />
            <span className="text-xl font-semibold text-gray-800">Our Love Story</span>
          </Link>
          
          <button
            onClick={toggleMenu}
            className="p-2 rounded-md text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Dropdown Menu */}
      <div
        className={`absolute top-full left-0 right-0 bg-white shadow-lg transform transition-all duration-300 ease-in-out ${
          isMenuOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2 pointer-events-none'
        }`}
      >
        <div className="container mx-auto px-4 py-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <NavLink to="/timeline" icon={<Clock className="h-4 w-4" />} text="Timeline" onClick={toggleMenu} />
            <NavLink to="/gallery" icon={<Image className="h-4 w-4" />} text="Gallery" onClick={toggleMenu} />
            <NavLink to="/pets" icon={<PawPrint className="h-4 w-4" />} text="Pets" onClick={toggleMenu} />
            <NavLink to="/journey" icon={<Map className="h-4 w-4" />} text="Journey" onClick={toggleMenu} />
            <NavLink to="/quiz" icon={<BrainCircuit className="h-4 w-4" />} text="Quiz" onClick={toggleMenu} />
          </div>
        </div>
      </div>
    </nav>
  );
};

const NavLink = ({ to, icon, text, onClick }: { to: string; icon: React.ReactNode; text: string; onClick?: () => void }) => (
  <Link
    to={to}
    onClick={onClick}
    className="flex items-center space-x-2 p-3 rounded-md text-sm font-medium text-gray-700 hover:text-pink-500 hover:bg-pink-50 transition-colors"
  >
    {icon}
    <span>{text}</span>
  </Link>
);

export default Navbar;