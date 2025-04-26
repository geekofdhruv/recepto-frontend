import { LeadCard } from './leadCard';
import { Lead } from '../types/lead';
import { useFilter } from '../context/filterContext';


export const LeadList = ({ leads }: { leads: Lead[] }) => {
  const { selectedLocations } = useFilter();

  const filteredLeads = selectedLocations.length
    ? leads.filter((lead) =>
        selectedLocations.some((location) =>
          lead.location.toLowerCase().includes(location.toLowerCase())
        )
      )
    : leads;
 
  return (
    <div className="px-6 py-2 mx-auto">
      
      {filteredLeads.map((lead) => (
      <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
};