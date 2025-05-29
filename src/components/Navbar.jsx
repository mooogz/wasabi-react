import React from 'react';
import logo from '/src/assets/wasabi-logo.png';
import { Link } from 'react-router-dom';

const Navbar = ({toggle}) => {
  return (
    <header className="bg-[#87bd80] py-4 px-6">
        <Link to="/"><img src={logo} alt="Wasabi Logo" className="mx-auto h-25" /></Link>

        <nav className="mt-4 flex flex-col items-center sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-900">
            <Link to="/" className="px-2 py-1 hover:text-[#4c7a42] transition-colors duration-300">Home</Link>
            <Link to="/menu" className="px-2 py-1 hover:text-[#4c7a42] transition-colors duration-300">Menu</Link>
            <a href="tel:9102293498" className="px-2 py-1 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">
                910-229-3498</a>
        </nav>
    </header>
   
  )
}

export default Navbar