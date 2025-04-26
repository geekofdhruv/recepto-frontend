import { createContext, useContext, useState, ReactNode } from "react";


interface FilterContextType {
  selectedLocations: string[];
  toggleLocation: (location: string) => void;
  resetLocations: () => void;
}

const FilterContext = createContext<FilterContextType | undefined>(undefined);

export function FilterProvider({ children }: { children: ReactNode }) {
  const [selectedLocations, setSelectedLocations] = useState<string[]>([]);

  const toggleLocation = (location: string) => {
    setSelectedLocations((prev) =>
      prev.includes(location)
        ? prev.filter((l) => l !== location)
        : [...prev, location]
    );
  };

  const resetLocations = () => {
    setSelectedLocations([]);
  };

  return (
    <FilterContext.Provider value={{ selectedLocations, toggleLocation, resetLocations }}>
      {children}
    </FilterContext.Provider>
  );
}

export function useFilter() {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilter must be used within a FilterProvider");
  }
  return context;
}
