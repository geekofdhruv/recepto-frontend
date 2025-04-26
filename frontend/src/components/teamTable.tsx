import React from 'react';
import { useAnalytics } from '../context/leadAnalyticsContext';

const TeamTable: React.FC = () => {
  const { team } = useAnalytics();
  
  return (
    <div className="bg-white rounded-lg shadow-sm p-4">
      <div className="grid grid-cols-5 gap-4 p-4 border-b">
        <div>Team</div>
        <div className="flex items-center">Role</div>
        <div className="flex items-center">Generated</div>
        <div className="flex items-center">Unlocked</div>
        <div className="flex items-center">Assigned</div>
      </div>
      
      {team.map((member) => (
        <div key={member.id} className="grid grid-cols-5 gap-4 p-4 border-b items-center">
          <div className="flex items-center">
            <div className="w-10 h-10 rounded-full bg-gray-200 mr-3"></div>
            <div>
              <div className="font-medium">{member.name}</div>
              <div className="text-sm text-gray-500">Last active {member.lastActive}</div>
            </div>
          </div>
          
          <div>
            <span className="bg-blue-100 text-blue-800 px-2 py-1 rounded-full text-xs">
              {member.role}
            </span>
          </div>
          
          <div>{member.generated}</div>
          <div>{member.unlocked}</div>
          
          <div className="flex items-center">
            <span className={`w-2 h-2 rounded-full mr-2 ${
              member.assigned > 30 ? 'bg-orange-500' : 
              member.assigned > 20 ? 'bg-blue-500' : 'bg-green-500'
            }`}></span>
            {member.assigned}
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamTable;
