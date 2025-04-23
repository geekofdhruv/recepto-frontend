import { useState } from "react";
import { Lead } from "../types/lead";
import { useCredits } from "../context/credits";
import { AssignDropdown } from "./assignDropdown";

export const LeadCard = ({ lead }: { lead: Lead }) => {
  const { credits, deductCredits } = useCredits();

  const [showAssign, setShowAssign] = useState(false);
  const [assignedTo, setAssignedTo] = useState<string | null>(null);
  

  const handleUnlock = () => {
    if (lead.unlockCredits && credits >= lead.unlockCredits) {
      deductCredits(lead.unlockCredits);
      lead.isLocked = false;
    } else {
      alert("Not enough credits!");
    }
  };

  const people = ["Olivia Rhye", "James Doe", "Emily Zhang", "Arjun Mehta", "Ayesha Khan"];

  return (
    <div className="rounded-lg p-5 my-4 shadow-md bg-white hover:shadow-lg transition-shadow">
      <div className="items-start">
        <div className="flex justify-between">
          <div className="font-medium text-md">{lead.name}</div>
          <div className="flex items-end gap-4">
            {lead.isLocked ? (
              <button className="bg-blue-500 text-white px-10 py-1 rounded-2xl flex" onClick={handleUnlock}>
                Unlock <span className="ml-1">{lead.unlockCredits || 0}</span>
              </button>
            ) : (
              <div className="flex gap-2 relative">
                {assignedTo ? (
                  <div className="text-green-600 border border-green-500 px-4 py-1 rounded-full text-sm">
                    Assigned to {assignedTo}
                  </div>
                ) : (
                  <>
                    <button
                      className="border border-yellow-500 text-yellow-600 px-4 py-1 rounded-full"
                      onClick={() => setShowAssign((prev) => !prev)}
                    >
                      Assign
                    </button>
                    {showAssign && (
                      <AssignDropdown
                        people={people}
                        onAssign={(name) => {
                          setAssignedTo(name);
                          setShowAssign(false);
                        }}
                      />
                    )}
                  </>
                )}
                <button className="border border-gray-400 text-gray-600 px-4 py-1 rounded-full">View Details</button>
              </div>
            )}
            <div
              className={`text-white text-center text-sm px-2 py-1.5 rounded-lg ${
                lead.score >= 80 ? "bg-green-500" : "bg-yellow-500"
              }`}
            >
              {lead.score}
            </div>
            <div className="flex gap-2 mt-1">
              <button>👍</button>
              <button>👎</button>
            </div>
          </div>
        </div>

        <div>
          <div className="text-sm text-gray-500">{lead.location}</div>
          <div className="mt-2 text-gray-700 text-sm">"{lead.message}"</div>
          <div className="flex gap-2 text-xs mt-2 text-gray-500">
            <span>{lead.updatedTime || "2h ago"}</span>
            {lead.type && <span className="text-orange-500">{lead.type}</span>}
            {lead.groupName && <span className="text-green-600">{lead.groupName}</span>}
          </div>
        </div>
      </div>
    </div>
  );
};
