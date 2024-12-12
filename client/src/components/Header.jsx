import React from 'react';
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="bg-gray-900 text-white py-4">
      <nav className="container mx-auto flex justify-between items-center">
        <div className="text-2xl font-bold">Study Sphere</div>

        <ul className="flex space-x-6">
          <li>
            <Link 
              to="/" 
              className="hover:text-blue-400 transition duration-300"
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/cart" 
              className="hover:text-blue-400 transition duration-300"
            >
              Cart
            </Link>
          </li>
          <li>
            <Link 
              to="/addcourses" 
              className="hover:text-blue-400 transition duration-300"
            >
              Add Course
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Header;
