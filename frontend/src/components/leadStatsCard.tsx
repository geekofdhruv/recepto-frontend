// components/analytics/LeadStatsCard.tsx
import React from 'react';
import { useAnalytics } from '../context/leadAnalyticsContext';

interface LeadStatsCardProps {
  type: 'receptoNet' | 'orgNetwork'; // Type to differentiate between lead types
  icon: React.ReactNode;
  title: string;
  color: string;
  chartComponent: React.ReactNode;
}

const LeadStatsCard: React.FC<LeadStatsCardProps> = ({
  type,
  icon,
  title,
  color,
  chartComponent,
}) => {
  const { receptoLeads, orgLeads } = useAnalytics();
 
  

  // Determine which lead stats to use based on the type
  const leadStats = type === 'receptoNet' ? receptoLeads : orgLeads;

  return (
    <div className="bg-white rounded-lg p-6 shadow-sm mb-4">
      <div className="flex justify-between">
        <div>
          <div className="flex items-center gap-2 mb-2">
            {icon}
            <h3 className="text-gray-700 font-medium">{title}</h3>
            <span className="text-gray-400 cursor-pointer">ⓘ</span>
          </div>

          <div className="mb-4">
            <h2 className="text-3xl font-bold">{leadStats.total}</h2>
            <span className="text-gray-500 text-sm">Total</span>
          </div>

          <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
            <div
              className="h-2 rounded-full"
              style={{
                width: `${(leadStats.unlocked / leadStats.total) * 100}%`,
                backgroundColor: color,
              }}
            ></div>
          </div>

          <div className="flex justify-between text-sm">
            <div>
              <div className="flex items-center">
                <div
                  className={`w-3 h-3 rounded-full mr-2`}
                  style={{ backgroundColor: color }}
                ></div>
                <span>Unlocked</span>
              </div>
              <div className="font-medium">{leadStats.unlocked} users</div>
            </div>

            <div>
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full mr-2 bg-gray-200`}></div>
                <span>Yet to Unlock</span>
              </div>
              <div className="font-medium">{leadStats.yetToUnlock} users</div>
            </div>
          </div>
        </div>

        <div className="w-1/2">{chartComponent}</div>
      </div>
    </div>
  );
};

export default LeadStatsCard;