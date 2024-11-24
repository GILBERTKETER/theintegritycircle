import React from 'react';
import { Leaf, Calendar, Activity } from 'lucide-react';
import { motion } from 'framer-motion';
import { EnvironmentalProject } from '../types';

interface EnvironmentalProjectCardProps {
  project: EnvironmentalProject;
}

export const EnvironmentalProjectCard: React.FC<EnvironmentalProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
    >
      <div className="flex items-center gap-2 mb-2">
        <Leaf className="text-green-600" size={20} />
        <h3 className="text-lg font-semibold text-blue-900">{project.name}</h3>
      </div>
      
      <p className="text-gray-600 mb-4">{project.description}</p>
      
      <div className="space-y-2">
        <div className="flex items-center gap-2">
          <Activity size={16} className="text-blue-900" />
          <span>Status: {project.status}</span>
        </div>
        
        <div className="flex items-center gap-2">
          <Calendar size={16} className="text-blue-900" />
          <span>Started: {project.startDate}</span>
        </div>
        
        <div className="mt-2 inline-block px-2 py-1 bg-green-100 text-green-800 rounded-full text-sm">
          Impact: {project.impact}
        </div>
      </div>
    </motion.div>
  );
};