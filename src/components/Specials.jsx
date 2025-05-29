import React from 'react';
import menu from '../data/menu.json';
import { Link } from 'react-router-dom';

const Specials = () => {
  const specialsCategory = menu.find(cat => cat.category === "Specials");
  const specials = specialsCategory?.items || [];
  

  return (
    <section className="bg-[#87bd80] p-5">
      <div className="grid gap-4 sm:grid-cols-2 max-w-5xl mx-auto">
        {specials.map((special) => (
          <div key={special.id} className="bg-[#f9f6ef] rounded-xl shadow-lg border border-[#d4e4d0] p-6 text-center mx-auto w-full max-w-sm sm:max-w-md space-y-3">
            <h3 className="font-bold text-2xl font-[Space_Grotesk] text-[#a8513a]">{special.icon} {special.name} {special.icon} </h3>
            <div className={special.name === "All-Day Special" ? "flex flex-col items-center justify-center space-y-5" : ""
            }>
            <p className="text-[#2d2d2d]">{special.time}</p>
            <p className="text-[#2d2d2d]">{special.price}</p>
            <p className="text-[#2d2d2d]">{special.description}</p>
            </div>
            {Array.isArray(special.eligibleRolls) ? (
              <ul className="list-none list-inside text-center mt-3 text-sm grid grid-cols-2 gap-1 max-w-md mx-auto">
              {special.eligibleRolls.map((roll, idx) => (
              <li key={idx}>{roll}</li>
              ))}
              </ul>
        ) : (
          
          <Link to="/menu" className="bg-[#87bd80] hover:bg-green-700 text-white px-6 py-3 rounded-lg font-semibold shadow-lg cursor-pointer mt-4">View Menu</Link>
        )}
        </div>
        ))}
  
      </div>
</section>
  
  )
}

export default Specials
