import React from 'react';
import logo from '/src/assets/wasabi-logo.png';
import { Link } from 'react-router-dom';
import { Phone } from 'lucide-react';


const Navbar = ({toggle}) => {
  return (
    <header className="bg-gradient-to-r from-[#eaf7ea] to-[#c2e7c4] border-b border-green-200 py-4 px-6 shadow-sm flex flex-col items-center gap-3">
        <Link to="/"><img src={logo} alt="Wasabi Logo" className="mx-auto h-25" /></Link>
        <p className="text-[#355E3B] text-sm">144 Owen Dr. Fayetteville, NC</p>
        <p className="text-[#355E3B] text-sm">Tuesday - Saturday 12pm-9pm</p>

        <nav className="flex flex-col items-center sm:flex-row justify-center space-y-2 sm:space-y-0 sm:space-x-8 text-gray-900">
            <a
              href="tel:9102293498"
              className="tracking-wider px-4 py-2 flex items-center gap-2 bg-green-700 text-white rounded-full hover:bg-green-600 transition-colors duration-300"
              >
                <Phone className="w-4 h-4" />
                910-229-3498
            </a>
            <Link to="/menu" className="px-2 md:text-lg tracking-wider underline text-[#355E3B] hover:text-[#87bd80] transition-colors duration-300">Menu</Link>
        </nav>
    </header>
   
  )
}

export default Navbar