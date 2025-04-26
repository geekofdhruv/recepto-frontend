import React, { createContext, useContext, useEffect, useState } from 'react';

interface CreditsContextType {
  credits: number;
  setCredits: (val: number) => void;
  deductCredits: (amount: number) => void;
}

const CreditsContext = createContext<CreditsContextType | undefined>(undefined);

export const CreditsProvider = ({ children }: { children: React.ReactNode }) => {
  const [credits, setCredits] = useState<number>(100);

  

  const deductCredits = (amount: number) => {
    const updated = Math.max(0, credits - amount);
    setCredits(updated);
  };

  useEffect(() => {
    localStorage.setItem('credits', credits.toString());
  }, [credits]);

  return (
    <CreditsContext.Provider value={{ credits, setCredits, deductCredits }}>
      {children}
    </CreditsContext.Provider>
  );
};

export const useCredits = () => {
  const context = useContext(CreditsContext);
  if (!context) throw new Error('useCredits must be used within a CreditsProvider');
  return context;
};
