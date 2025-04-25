import { createContext, useContext, useState, useEffect } from "react";


// Context Type
type LeadContextType = {
  unlockedLeads: Set<number>;
  assignedLeads: Record<number, string>; // leadId → member name
  unlockLead: (leadId: number) => void;
  assignLead: (leadId: number, name: string) => void;
};

const LeadContext = createContext<LeadContextType | undefined>(undefined);

export const LeadProvider = ({ children }: { children: React.ReactNode }) => {
  const [unlockedLeads, setUnlockedLeads] = useState<Set<number>>(new Set());
  const [assignedLeads, setAssignedLeads] = useState<Record<number, string>>({});

  useEffect(() => {
    // Optional: Persist unlocks in localStorage
    const saved = localStorage.getItem("unlockedLeads");
    if (saved) {
      setUnlockedLeads(new Set(JSON.parse(saved)));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("unlockedLeads", JSON.stringify(Array.from(unlockedLeads)));
  }, [unlockedLeads]);

  const unlockLead = (leadId: number) => {
    setUnlockedLeads((prev) => new Set(prev).add(leadId));
  };

  const assignLead = (leadId: number, name: string) => {
    setAssignedLeads((prev) => ({ ...prev, [leadId]: name }));
  };

  return (
    <LeadContext.Provider
      value={{ unlockedLeads, assignedLeads, unlockLead, assignLead }}
    >
      {children}
    </LeadContext.Provider>
  );
};

export const useLeads = () => {
  const context = useContext(LeadContext);
  if (!context) throw new Error("useLeads must be used within a LeadProvider");
  return context;
};
