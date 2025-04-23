// components/AssignDropdown.tsx
import { useState } from "react";

interface AssignDropdownProps {
  onAssign: (name: string) => void;
  people: string[];
}

export const AssignDropdown = ({ onAssign, people }: AssignDropdownProps) => {
  const [search, setSearch] = useState("");

  const filteredPeople = people.filter((person) =>
    person.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="absolute z-10 mt-2 bg-white shadow-lg rounded-lg p-3 w-60">
      <input
        type="text"
        placeholder="Search people..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full mb-2 px-2 py-1 border border-gray-300 rounded"
      />
      <div className="max-h-40 overflow-y-auto">
        {filteredPeople.map((person, index) => (
          <div
            key={index}
            onClick={() => onAssign(person)}
            className="px-2 py-1 cursor-pointer hover:bg-gray-100 rounded"
          >
            {person}
          </div>
        ))}
        {filteredPeople.length === 0 && (
          <div className="text-gray-400 px-2 py-1">No match found</div>
        )}
      </div>
    </div>
  );
};
