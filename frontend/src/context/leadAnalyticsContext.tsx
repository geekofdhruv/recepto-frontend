import React, { createContext, useContext, useState, useEffect } from 'react';
import { teamMembers } from '../data/team';
import { TeamMember } from '../types/teamMember';

interface LeadStats {
  total: number;
  unlocked: number;
  yetToUnlock: number;
  liked: number;
  assigned: number;
}

interface AnalyticsContextType {
  receptoLeads: LeadStats;
  orgLeads: LeadStats;
  team: TeamMember[];
  unlockLead: (type: string) => void;
  assignLead: (type: string, teamMemberId: number) => void;
  likeLead: (type: string) => void;
}

const AnalyticsContext = createContext<AnalyticsContextType | undefined>(undefined);

export const AnalyticsProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {

  const [receptoLeads, setReceptoLeads] = useState<LeadStats>({
    total: 404,
    unlocked: 179,
    yetToUnlock: 394,
    liked: 20,
    assigned: 20,
  });

  const [orgLeads, setOrgLeads] = useState<LeadStats>({
    total: 594,
    unlocked: 179,
    yetToUnlock: 394,
    liked: 20,
    assigned: 20,
  });

 
  const [team, setTeam] = useState<TeamMember[]>(teamMembers);


  const unlockLead = (type: string) => {
    if (type === 'receptoNet') {
      setReceptoLeads((prev) => ({
        ...prev,
        unlocked: prev.unlocked + 1,
        yetToUnlock: prev.yetToUnlock - 1,
      }));
    } else {
      setOrgLeads((prev) => ({
        ...prev,
        unlocked: prev.unlocked + 1,
        yetToUnlock: prev.yetToUnlock - 1,
      }));
    }
  };

  
  const assignLead = (type: string, teamMemberId: number) => {
   
    if (type === 'receptoNet') {
      setReceptoLeads((prev) => ({
        ...prev,
        assigned: prev.assigned + 1,
      }));
    } else {
      setOrgLeads((prev) => ({
        ...prev,
        assigned: prev.assigned + 1,
      }));
    }

    setTeam((prev) =>
      prev.map((member) =>
        member.id === teamMemberId
          ? { ...member, assigned: member.assigned + 1 }
          : member
      )
    );
  };


  const likeLead = (type: string) => {
    if (type === 'receptoNet') {
      setReceptoLeads((prev) => ({
        ...prev,
        liked: prev.liked + 1,
      }));
    } else {
      setOrgLeads((prev) => ({
        ...prev,
        liked: prev.liked + 1,
      }));
    }
    
  };


  useEffect(() => {
    console.log('Recepto Leads Updated:', receptoLeads);
  }, [receptoLeads]);

  useEffect(() => {
    console.log('Org Leads Updated:', orgLeads);
  }, [orgLeads]);

  useEffect(() => {
    console.log('Team Updated:', team);
  }, [team]);

  return (
    <AnalyticsContext.Provider
      value={{
        receptoLeads,
        orgLeads,
        team,
        unlockLead,
        assignLead,
        likeLead,
      }}
    >
      {children}
    </AnalyticsContext.Provider>
  );
};

export const useAnalytics = () => {
  const context = useContext(AnalyticsContext);
  if (context === undefined) {
    throw new Error('useAnalytics must be used within an AnalyticsProvider');
  }
  return context;
};