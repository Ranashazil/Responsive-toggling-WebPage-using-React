import React, { useState } from "react";
import { FaFacebook, FaYoutube, FaInstagram } from "react-icons/fa";
import { IoMdMenu, IoMdClose } from "react-icons/io";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="relative bg-gray-900 text-white overflow-hidden">
      <div className="container mx-auto px-4 py-8 lg:py-16 flex flex-col items-center text-center">
        
        {/* Full-width Navbar */}
        <div className="w-full bg-gray-800 py-4 px-6 flex items-center justify-between md:justify-center">
          {/* Toggle Button for Mobile */}
          <div className="text-2xl text-white cursor-pointer md:hidden" onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <IoMdClose /> : <IoMdMenu />}
          </div>

          {/* Desktop Menu */}
          <ul className="hidden md:flex space-x-6 text-sm md:text-lg">
            <li><a href="/add" className="hover:text-blue-400 px-4 py-2">Home</a></li>
            <li><a href="/add" className="hover:text-blue-400 px-4 py-2">About</a></li>
            <li><a href="/add" className="hover:text-blue-400 px-4 py-2">Contact</a></li>
            <li><a href="/add" className="hover:text-blue-400 px-4 py-2">Music</a></li>
          </ul>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <ul className="flex flex-col w-full bg-gray-800 py-4 px-6 space-y-4 text-lg md:hidden">
            <li><a href="/add" className="hover:text-blue-400 px-4 py-2">Home</a></li>
            <li><a href="/add" className="hover:text-blue-400 px-4 py-2">About</a></li>
            <li><a href="/add" className="hover:text-blue-400 px-4 py-2">Contact</a></li>
            <li><a href="/add" className="hover:text-blue-400 px-4 py-2">Music</a></li>
          </ul>
        )}

        {/* Search Bar */}
        <div className="w-full max-w-md mb-8 mt-4">
          <input
            type="text"
            placeholder="Search Your Music ...."
            className="w-full p-3 text-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"
          />
        </div>

        {/* Header Content */}
        <div className="max-w-2xl">
          <h5 className="text-lg font-light mb-2">Feel Me</h5>
          <h1 className="text-4xl md:text-5xl font-bold leading-tight mb-4">Maximum Volume</h1>
          <p className="text-gray-400 text-sm md:text-base mb-8">
            Lorem ipsum text is dummy text <br />
            to show header content. It will help <br />
            in doing what you need.
          </p>

          {/* Social Links */}
          <div className="flex justify-center space-x-6 text-2xl">
            <a href="" className="hover:text-blue-400"><FaFacebook /></a>
            <a href="" className="hover:text-red-500"><FaYoutube /></a>
            <a href="" className="hover:text-pink-400"><FaInstagram /></a>
          </div>
        </div>
      </div>

      {/* Floating Circles */}
      <div className="absolute bottom-8 right-1/4 w-16 h-16 bg-blue-500 rounded-full opacity-60 animate-float"></div>
      <div className="absolute bottom-8 left-1/6 w-24 h-24 bg-purple-500 rounded-full opacity-60 animate-float delay-200"></div>
    </header>
  );
}

export default Header;
