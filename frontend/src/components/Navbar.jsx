import logo from '../assets/logo.png'; 
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo and brand */}
          <div className="flex items-center space-x-3">
            <img src={logo} alt="Dust Blowers Logo" className="h-8 w-8" />

            <span className="font-bold text-xl">Dust Blowers</span>
          </div>

          {/* Hamburger for mobile */}
          <div className="flex sm:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              type="button"
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-200 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {/* Hamburger icon */}
              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                aria-hidden="true"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>

          {/* Links for desktop */}
          <div className="hidden sm:flex sm:items-center sm:space-x-6">
            <a href="#home" className="hover:text-gray-300">
              Home
            </a>
            <a href="#about" className="hover:text-gray-300">
              About
            </a>
            <a href="#services" className="hover:text-gray-300">
              Services
            </a>
            <a href="#contact" className="hover:text-gray-300">
              Contact
            </a>
          </div>
        </div>
      </div>

      {/* Links for mobile */}
      {isOpen && (
        <div className="sm:hidden px-2 pt-2 pb-3 space-y-1" id="mobile-menu">
          <a href="#home" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Home
          </a>
          <a href="#about" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            About
          </a>
          <a href="#services" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Services
          </a>
          <a href="#contact" className="block px-3 py-2 rounded-md hover:bg-gray-700">
            Contact
          </a>
        </div>
      )}
    </nav>
  );
}
