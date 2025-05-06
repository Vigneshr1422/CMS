import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <header className="bg-blue-600 text-white py-4 shadow-md fixed top-0 left-0 w-full z-50">
  <div className="container mx-auto flex justify-between items-center px-6">
    <h1 className="text-2xl font-semibold text-white tracking-tight">My Project</h1>
    <nav className="fixed top-0 left-0 w-full z-50 bg-blue-600 text-white shadow-md h-16 flex items-center px-8">
  <h1 className="text-2xl font-bold">My Project</h1>
  <div className="ml-auto flex space-x-4">
    <a href="/" className="hover:underline">Home</a>  
      <a href="/contact" className="hover:underline">Contact</a>
    <a href="/" className="hover:underline">Feature</a>
    <a href="#" className="hover:underline">Login</a>
    <a href="#" className="hover:underline">Register</a>
  </div>
</nav>

  </div>
</header>

  );
};

export default Header;
