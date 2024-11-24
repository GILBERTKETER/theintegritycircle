import React from 'react';
import { Calendar, DollarSign, Target } from 'lucide-react';
import { motion } from 'framer-motion';
import { PlannedInitiative } from '@/types';

interface PlannedInitiativeCardProps {
  initiative: PlannedInitiative;
}

export const PlannedInitiativeCard: React.FC<PlannedInitiativeCardProps> = ({ initiative }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
    >
      <h3 className="text-lg font-semibold text-blue-900">{initiative.name}</h3>
      <p className="mt-2 text-gray-600">{initiative.description}</p>
      
      <div className="mt-4 space-y-4">
        <div className="flex items-center gap-2">
          <DollarSign size={16} className="text-blue-900" />
          <span>Budget: ${initiative.budget.toLocaleString()}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-blue-900" />
          <span>Expected Completion: {initiative.expectedCompletion}</span>
        </div>
        
        <div className="space-y-2">
          <div className="flex items-center gap-2">
            <Target size={16} className="text-blue-900" />
            <span className="font-medium">Goals:</span>
          </div>
          <ul className="ml-6 space-y-1">
            {initiative.goals.map((goal, index) => (
              <li key={index} className="text-gray-600">{goal}</li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
};
