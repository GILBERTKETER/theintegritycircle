// components/FundingOverview.tsx
import React from 'react';
import { DollarSign, PieChart, Building, Users, Handshake } from 'lucide-react';
import { FundingSource } from '@/types';

interface FundingOverviewProps {
  funding: FundingSource;
}

export const FundingOverview: React.FC<FundingOverviewProps> = ({ funding }) => {
  const total = funding.governmentGrants + funding.ngoFunding + funding.pppFunding;
  
  const data = [
    { 
      name: 'Government Grants', 
      value: funding.governmentGrants,
      percentage: (funding.governmentGrants / total) * 100,
      color: '#1E3A8A',
      icon: Building
    },
    { 
      name: 'NGO Funding', 
      value: funding.ngoFunding,
      percentage: (funding.ngoFunding / total) * 100,
      color: '#3B82F6',
      icon: Users
    },
    { 
      name: 'PPP Funding', 
      value: funding.pppFunding,
      percentage: (funding.pppFunding / total) * 100,
      color: '#93C5FD',
      icon: Handshake
    }
  ];

  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Total Funding Overview */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <DollarSign className="text-blue-900" size={24} />
            <h3 className="text-xl font-semibold text-blue-900">Total Funding</h3>
          </div>
          <div className="text-3xl font-bold text-blue-900">
            ${total.toLocaleString()}
          </div>
          
          {/* Funding Bars */}
          <div className="space-y-4 mt-6">
            {data.map((item, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <item.icon size={16} style={{ color: item.color }} />
                    <span className="font-medium">{item.name}</span>
                  </div>
                  <span className="text-sm font-medium">
                    {item.percentage.toFixed(1)}%
                  </span>
                </div>
                <div className="w-full bg-gray-100 rounded-full h-2">
                  <div
                    className="h-2 rounded-full transition-all duration-500"
                    style={{
                      width: `${item.percentage}%`,
                      backgroundColor: item.color
                    }}
                  />
                </div>
                <div className="text-sm text-gray-600">
                  ${item.value.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Funding Details */}
        <div className="space-y-4">
          <div className="flex items-center gap-2">
            <PieChart className="text-blue-900" size={24} />
            <h3 className="text-xl font-semibold text-blue-900">Funding Details</h3>
          </div>
          <div className="space-y-4">
            {funding.details.map((detail, index) => (
              <div 
                key={index}
                className="p-4 rounded-lg border border-gray-100 hover:border-blue-200 transition-colors"
              >
                <div className="font-medium text-blue-900">{detail.source}</div>
                <div className="text-gray-600 mt-1">{detail.purpose}</div>
                <div className="text-lg font-semibold mt-2">
                  ${detail.amount.toLocaleString()}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};