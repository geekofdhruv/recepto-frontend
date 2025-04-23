import { useCredits } from "../context/credits";
import { useState } from "react";
import FilterPanel from "./filter";

function Header() {
  const { credits } = useCredits();
  const [showFilters, setShowFilters] = useState(false);

  return (
    <>
      <header className=" bg-white px-6 py-4 shadow-sm">
        <div className="flex justify-between items-center">
        <div className="text-lg font-normal text-gray-800">Company Name</div>

        <div className="flex items-center space-x-6">
          <input
            className="border border-gray-300 rounded px-4 py-2 w-80 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="What is the best tool for XYZ..."
          />

          {/* Credits Button */}
          <button className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm">
            {credits} credits
          </button>

          {/* User Info */}
          <div className="text-right">
            <div className="font-medium text-gray-800">Anand Kumar</div>
            <div className="text-sm text-green-500">Admin</div>
          </div>
        </div>
        </div>

        <button className="px-3 mt-4 py-2 bg-white rounded-sm shadow-md outline-gray-300 flex items-center gap-2 border border-gray-300 hover:shadow-lg transition ml-240" onClick={() => setShowFilters((prev) => !prev)}>
          <span className="text-slate-700 text-sm font-semibold">Filters</span>
          <span className="px-1.5 py-0.5 bg-blue-600/10 rounded-2xl text-blue-600 text-xs font-semibold">2</span>
        </button>
        <FilterPanel open={showFilters} onClose={() => setShowFilters(false)} />
        
      </header>
      
      
        
      
    </>
  );
}

export default Header;
