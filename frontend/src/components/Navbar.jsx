import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className=' navbar flex justify-between items-center bg-orange-600 text-white h-16 shadow-md p-4 sticky'>
      <div className="nav-header text-3xl font-bold bg-white text-orange-600 rounded-md py-2 px-4 transition duration-300 hover:shadow-lg">
        Swiggy
      </div>
      <div className="nav-menu">
        <ul className='flex space-x-8 mx-[20px]'>
          <li>
            <NavLink 
              to="/" 
              aria-label="Home" 
              className="text-lg font-semibold hover:text-orange-200 transition duration-300 ease-in-out transform hover:scale-105">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/about" 
              aria-label="About" 
              className="text-lg font-semibold hover:text-orange-200 transition duration-300 ease-in-out transform hover:scale-105">
              About
            </NavLink>
          </li>
          <li>
            <NavLink 
              to="/contact" 
              aria-label="Contact" 
              className="text-lg font-semibold hover:text-orange-200 transition duration-300 ease-in-out transform hover:scale-105">
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
