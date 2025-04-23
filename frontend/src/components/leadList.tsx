import { LeadCard } from './leadCard';
import { Lead } from '../types/lead';


export const LeadList = ({ leads }: { leads: Lead[] }) => {
 
  return (
    <div className="px-6 py-2 mx-auto">
      {leads.map((lead) => (
        <LeadCard key={lead.id} lead={lead} />
      ))}
    </div>
  );
};