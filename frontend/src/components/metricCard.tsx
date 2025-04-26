// components/analytics/MetricCard.tsx
import React from 'react';

interface MetricCardProps {
  icon: React.ReactNode;
  title: string;
  value: string | number;
}

const MetricCard: React.FC<MetricCardProps> = ({ icon, title, value }) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex flex-col items-center gap-4">
        <div className="text-blue-600 mb-2">
          {icon}
        </div>
        <h3 className="text-gray-600 mb-2">{title}</h3>
        <p className="text-2xl font-bold">{value}</p>
      </div>
    </div>
  );
};

export default MetricCard;
