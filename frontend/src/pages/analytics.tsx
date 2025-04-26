// pages/Analytics.tsx
import React from 'react';
import { useAnalytics } from '../context/leadAnalyticsContext';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import LeadStatsCard from '../components/leadStatsCard';
import MetricCard from '../components/metricCard';
import TeamTable from '../components/teamTable';
import LeadChart from '../components/leadChart';


const ReceptoIcon = () => <div className="text-blue-600">🔵</div>;
const OrgIcon = () => <div className="text-blue-600">📘</div>;
const LikeIcon = () => <div>👍</div>;
const AssignIcon = () => <div>👥</div>;

const AnalyticsContent: React.FC = () => {
  const { receptoLeads, orgLeads } = useAnalytics();
  

  const receptoChartData = [200, 250, 220, 300, 404];
  const orgChartData = [150, 180, 160, 220, 350];
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 gap-4">
        <div className='w-screen flex'>
  
        <LeadStatsCard
          type="receptoNet"
          icon={<ReceptoIcon />}
          title="ReceptoNet Leads"
          color="#4f46e5"
          chartComponent={<LeadChart data={receptoChartData} color="#4f46e5" type='receptoNet' />}
        />
        
       
        <div className="grid grid-cols-2 gap-4 mb-4 px-12">
          <MetricCard
            icon={<LikeIcon />}
            title="Liked Leads"
            value={`${receptoLeads.liked}`}
          />
          <MetricCard
            icon={<AssignIcon />}
            title="Assigned Leads"
            value={`${receptoLeads.assigned}`}
          />
        </div>
        </div>

        <div className='w-screen flex'>
 
        <LeadStatsCard
          type="orgNetwork"
          icon={<OrgIcon />}
          title="Org Network Leads"
          color="#f97316"
          chartComponent={<LeadChart data={orgChartData} color="#f97316" type='orgNetwork' />}
        />
        

        <div className="grid grid-cols-2 gap-4 mb-4 px-12">
          <MetricCard
            icon={<LikeIcon />}
            title="Liked Leads"
            value={`${orgLeads.liked}`}
          />
          <MetricCard
            icon={<AssignIcon />}
            title="Assigned Leads"
            value={`${orgLeads.assigned}`}
          />
        </div>
        </div>
        

        <TeamTable />
      </div>
    </div>
  );
};

const AnalyticsPage: React.FC = () => {
  return (
    
      <div className="flex h-screen">
        <Sidebar />
        <div className="flex-1 flex flex-col overflow-hidden">
          <Header />
          <div className="w-screen flex-1 overflow-y-auto">
            <AnalyticsContent />
          </div>
        </div>
      </div>
    
  );
};

export default AnalyticsPage;