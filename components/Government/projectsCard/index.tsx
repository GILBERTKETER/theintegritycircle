import React from 'react';
import { Calendar, DollarSign, Flag, MapPin, BarChart } from 'lucide-react';
import { motion } from 'framer-motion';
import { Project } from '@/types/index';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.2 }}
      className="p-4 bg-white rounded-lg shadow-sm border border-gray-100"
    >
      <div className="flex justify-between items-start">
        <h3 className="text-lg font-semibold text-blue-900">{project.name}</h3>
        <span className={`px-2 py-1 rounded-full text-sm ${
          project.status === 'Ongoing' ? 'bg-blue-100 text-blue-900' : 'bg-green-100 text-green-700'
        }`}>
          {project.status}
        </span>
      </div>
      
      <p className="mt-2 text-gray-600">{project.description}</p>
      
      <div className="mt-4 space-y-2">
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <DollarSign size={16} className="text-blue-900" />
            <span className="text-sm">${project.budget.toLocaleString()}</span>
          </div>
          <div className="flex items-center gap-2">
            <Calendar size={16} className="text-blue-900" />
            <span className="text-sm">{project.startDate}</span>
          </div>
        </div>
        
        <div className="flex flex-wrap gap-4">
          <div className="flex items-center gap-2">
            <Flag size={16} className="text-blue-900" />
            <span className="text-sm">{project.category}</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-blue-900" />
            <span className="text-sm">{project.location}</span>
          </div>
        </div>
        
        {project.progress !== undefined && (
          <div className="mt-4">
            <div className="flex items-center gap-2 mb-1">
              <BarChart size={16} className="text-blue-900" />
              <span className="text-sm">Progress: {project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
              <div 
                className="bg-blue-900 rounded-full h-2 transition-all duration-500"
                style={{ width: `${project.progress}%` }}
              />
            </div>
          </div>
        )}
      </div>
    </motion.div>
  );
};