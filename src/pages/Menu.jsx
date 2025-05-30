import React, { useState, useEffect } from 'react';
import menu from '../../src/data/menu.json';

const useIsMobile = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth < 640);
    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth < 640);
        window.addEventListener("resize", handleResize);
        return () => window.removeEventListener("resize", handleResize);
    }, []);
    return isMobile;
};

const MobileAccordion = ({ menu }) => {
    const [openIndex, setOpenIndex] = useState(null);

    return (
        <div className="space-y-2">
          {menu.map((cat, index) => (
            <div key={cat.category} className="rounded-lg">
              <button onClick={() => setOpenIndex(openIndex === index ? null : index)}
              className="w-full px-4 py-3 text-left font-semibold bg-[#87bd80] text-white rounded-t-lg cursor-pointer">
                {cat.category}
              </button>
              {openIndex === index && (
                <div className="p-4 bg-white">
                  {cat.items.map((item) => (
                    <div key={item.id} className="mb-4">
                      <h4 className="font-bold">{item.name}</h4>
                      <p>{item.description}</p>
                      <p className="font-semibold">
                        {typeof item.price === 'number' ? `$${item.price.toFixed(2)}` : item.price}
                      </p>

                      {item.eligibleRolls && Array.isArray(item.eligibleRolls) && (
                      <ul className="list-none list-inside text-gray-700 mt-2 max-w-md grid grid-cols-2 gap-x-4">
                      {item.eligibleRolls.map((roll, i) => (
                        <li key={i}>{roll}</li>
                        ))}
                      </ul>
                      )}
                    </div>
                    ))}
                  </div>
              )}
              </div>
          ) )}
        </div>
    );
};

const DesktopTabs = ({ menu }) => {
  const categories = menu.map((cat) => cat.category);
  const [activeTab, setActiveTab] = useState(categories[0]);
  const activeItems = menu.find((cat) => cat.category === activeTab)?.items || [];
  const activeCategory = menu.find((cat) => cat.category === activeTab);
  const categoryDescription = activeCategory?.description || "";

  return (
    <div>
      <div className="flex flex-wrap justify-center gap-2 mb-8">
        {categories.map((cat) => (
          <button key={cat} onClick={() => setActiveTab(cat)}
          className={`px-4 py-2 rounded-lg font-semibold transition-colors cursor-pointer
            ${
              cat === activeTab
                ? "bg-[#87bd80] text-white"
                : "bg-gray-200 text-gray-700 hover:bg-green-400 hover:text-white"
            }`}
            >
              {cat}
            </button>
        ))}
      </div>

      {categoryDescription && (
        <p className="max-w-3xl mx-auto mb-6 text-center text-gray-700 italic">
          {categoryDescription}
        </p>
      )}

      <div>
  <ul className="space-y-4 max-w-3xl mx-auto">
    {activeItems.map(item => (
  <li key={item.id} className="border-b border-gray-300 pb-4 mb-4">
    <div className="flex justify-between items-center">
      <h3 className="font-semibold text-lg">{item.name}</h3>
      <span className="font-semibold text-green-700">
        {typeof item.price === 'number'
        ? `$${item.price.toFixed(2)}`
        : item.price
        }
      </span>
    </div>
    <p className="text-gray-600 text-sm mb-2">{item.description}</p>

    {item.eligibleRolls && Array.isArray(item.eligibleRolls) && (
      <ul className="list-none list-inside text-gray-700 text-sm max-w-md grid grid-cols-2">
        {item.eligibleRolls.map((roll, i) => (
          <li key={i}>{roll}</li>
        ))}
      </ul>
    )}

 
    {item.eligibleRolls && typeof item.eligibleRolls === 'string' && (
      <p className="italic text-gray-700">{item.eligibleRolls}</p>
    )}
  </li>
))}

  </ul>
</div>
    </div>
  );
};

const Menu = () => {
  const isMobile = useIsMobile();

  return (
    <div className="max-w-5xl mx-auto p-5 bg-[#f9f6ef] rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6">Menu</h1>
      {isMobile ? <MobileAccordion menu={menu} /> : <DesktopTabs menu={menu} />}
      <p className="text-center">Delivery available:</p>
      <div className="flex justify-center gap-10">
      <a
      href="https://www.doordash.com/store/wasabi-fayetteville-606913/32751361/"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-red-600 hover:bg-red-700 text-white font-semibold py-2 px-4 rounded"
    >
      Order on DoorDash
    </a>

     <a
      href="https://www.grubhub.com/restaurant/wasabi-144-owen-dr-fayetteville/1682370"
      target="_blank"
      rel="noopener noreferrer"
      className="bg-orange-600 hover:bg-orange-700 text-white font-semibold py-2 px-4 rounded"
    >
      Order on Grubhub
    </a>
    </div>
    <div className="flex flex-col items-center">
      <p className="mt-4">Or call us for pickup!</p>
      <a href="tel:9102293498" className="text-center w-35 px-2 py-1 bg-green-700 text-white rounded-lg hover:bg-green-600 transition-colors duration-300">
                910-229-3498</a>
    </div>
    </div>
  );
};

export default Menu
