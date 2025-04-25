// pages/Analytics.tsx
import React from 'react';
import { AnalyticsProvider, useAnalytics } from '../context/leadAnalyticsContext';
import Header from '../components/header';
import Sidebar from '../components/sidebar';
import LeadStatsCard from '../components/leadStatsCard';
import MetricCard from '../components/metricCard';
import TeamTable from '../components/teamTable';
import LeadChart from '../components/leadChart';

// Icons (simplified for this example)
const ReceptoIcon = () => <div className="text-blue-600">🔵</div>;
const OrgIcon = () => <div className="text-blue-600">📘</div>;
const LikeIcon = () => <div>👍</div>;
const AssignIcon = () => <div>👥</div>;

const AnalyticsContent: React.FC = () => {
  const { receptoLeads, orgLeads } = useAnalytics();
  
  // Sample chart data (in a real app, you'd use actual data)
  const receptoChartData = [200, 250, 300, 350, 404];
  const orgChartData = [300, 350, 400, 500, 594];
  
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="grid grid-cols-1 gap-4">
        {/* ReceptoNet Leads Card */}
        <LeadStatsCard
          type="receptoNet"
          icon={<ReceptoIcon />}
          title="ReceptoNet Leads"
          color="#4f46e5"
          chartComponent={<LeadChart data={receptoChartData} color="#4f46e5" />}
        />
        
        {/* Metrics for ReceptoNet */}
        <div className="grid grid-cols-2 gap-4 mb-4">
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
        
        {/* Org Network Leads Card */}
        <LeadStatsCard
          type="orgNetwork"
          icon={<OrgIcon />}
          title="Org Network Leads"
          color="#f97316"
          chartComponent={<LeadChart data={orgChartData} color="#f97316" />}
        />
        
        {/* Metrics for Org Network */}
        <div className="grid grid-cols-2 gap-4 mb-4">
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
        
        {/* Team Table */}
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
          <div className="flex-1 overflow-y-auto">
            <AnalyticsContent />
          </div>
        </div>
      </div>
    
  );
};

export default AnalyticsPage;