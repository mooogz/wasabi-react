import React from 'react';
import { Link } from 'react-router-dom';


const Hero = () => {
  return (
    <div className="hero h-[500px] flex items-center justify-center px-6">
        <div className="max-w-3xl text-center animate-slideUp">
        <h1 className="text-[#F5F5F4] text-4xl md:text-6xl font-bold mb-4">Wasabi Japanese Restaurant</h1>
        <p className="text-[#F5F5F4] text-xl md:text-3xl mb-4">144 Owen Dr. Fayetteville, NC</p>
        <p className="text-[#F5F5F4] text-xl mb-4">Tuesday - Saturday 12pm-9pm</p>
        <Link to="/menu" className="bg-[#87bd80] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg cursor-pointer">
          View Menu
        </Link>
        </div>
      
    </div>
  )
}

export default Hero
