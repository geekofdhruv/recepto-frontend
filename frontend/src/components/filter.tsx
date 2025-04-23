import { useState } from "react";

const LOCATIONS = [
  "India",
  "United States of America",
  "United Kingdom",
  "France",
  "Taiwan",
  "Saudi Arabia",
  "Germany",
  "Singapore",
  "China"
];
interface FilterPanelProps {
    open: boolean;
    onClose: () => void;
  }

export default function FilterPanel({ open, onClose }:FilterPanelProps) {
  // Example: manage selected filters in state
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const handleLocationToggle = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  if (!open) return null;

  return (
    <div className="w-[688px] bg-white rounded-2xl shadow-lg flex flex-col overflow-hidden mt-4 mx-auto">

      <div className="px-6 pt-6 flex items-center gap-4">
        <div className="text-gray-900 text-sm font-semibold">Filters</div>
        <div className="pl-1.5 pr-2 py-0.5 bg-blue-600/10 rounded-2xl flex items-center gap-1">
          <div className="text-blue-600 text-xs font-semibold">{selectedLocations.length} applied</div>
          <div className="w-2 h-2 bg-blue-600 rounded-full" />
        </div>
      </div>
      <div className="px-6 text-gray-600 text-sm mt-1 mb-4">
        See results in your view based on the filters you select here.
      </div>
      <div className="h-px bg-gray-200" />


      <div className="flex px-6 py-5 gap-6">
        
        <div className="w-40 flex flex-col gap-3">
          <div className="px-2.5 py-2 bg-white rounded-lg shadow outline outline-1 outline-blue-600 flex items-center gap-2">
            <span className="text-blue-600 text-sm font-medium">Location</span>
            <span className="px-1.5 py-0.5 bg-blue-600/10 rounded-2xl text-blue-600 text-xs font-semibold">
              {selectedLocations.length}
            </span>
          </div>
        </div>
        
        <div className="flex-1 flex flex-col gap-4">
          <div>
            <div className="text-gray-900 text-sm font-semibold mb-2">Location</div>
            <div className="flex flex-wrap gap-2">
              {LOCATIONS.map((loc) => (
                <label
                  key={loc}
                  className={`flex items-center gap-2 px-3 py-2 rounded-md border cursor-pointer ${
                    selectedLocations.includes(loc)
                      ? "bg-blue-50 border-blue-600"
                      : "bg-neutral-50 border-gray-300"
                  }`}
                >
                  <input
                    type="checkbox"
                    checked={selectedLocations.includes(loc)}
                    onChange={() => handleLocationToggle(loc)}
                    className="accent-blue-600"
                  />
                  <span className="text-gray-600 text-xs font-semibold">{loc}</span>
                </label>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end px-6 pb-6">
        <button
          className="px-4 py-2.5 bg-white rounded-lg shadow border border-gray-300 text-gray-700 text-sm font-semibold"
          onClick={onClose}
        >
          Cancel
        </button>
        <button
          className="px-4 py-2.5 bg-blue-600 rounded-lg shadow text-white text-sm font-semibold"
          onClick={onClose}
        >
          Apply Filters
        </button>
      </div>
    </div>
  );
}
