
import React from 'react';
import { Filter } from 'lucide-react';
import { motion } from 'framer-motion';

interface FilterSectionProps {
  onFilterChange: (type: string, value: string) => void;
  categories: string[];
  statuses: string[];
}

export const FilterSection: React.FC<FilterSectionProps> = ({
  onFilterChange,
  categories,
  statuses
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.3 }}
      className="flex flex-wrap gap-4 p-4 bg-white rounded-lg shadow-sm"
    >
      <div className="flex items-center gap-2">
        <Filter size={20} className="text-blue-900" />
        <span className="font-medium text-blue-900">Filters:</span>
      </div>
      
      <select
      title='Category'
        onChange={(e) => onFilterChange('category', e.target.value)}
        className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
      >
        <option value="">All Categories</option>
        {categories.map(category => (
          <option key={category} value={category}>{category}</option>
        ))}
      </select>
      
      <select
      title='Status'
        onChange={(e) => onFilterChange('status', e.target.value)}
        className="px-3 py-1 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-900"
      >
        <option value="">All Statuses</option>
        {statuses.map(status => (
          <option key={status} value={status}>{status}</option>
        ))}
      </select>
    </motion.div>
  );
};