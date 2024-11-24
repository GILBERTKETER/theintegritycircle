"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import {
  MessageSquare,
  Users,
  Search,
  Clock,
  UserCheck,
  ChevronRight,
  Calendar,
  Star,
  MessageCircle,
  Award
} from 'lucide-react';

// Types
interface Discussion {
  id: string;
  title: string;
  author: string;
  date: string;
  replies: number;
  views: number;
  tags: string[];
}

interface Expert {
  id: string;
  name: string;
  role: string;
  expertise: string[];
  availability: string;
  rating: number;
  totalSessions: number;
}

// Public Discussions Component
const PublicDiscussions: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  
  const discussions: Discussion[] = [
    {
      id: '1',
      title: 'Best practices for maintaining integrity in public service',
      author: 'John Smith',
      date: '2024-03-20',
      replies: 24,
      views: 156,
      tags: ['Public Service', 'Best Practices']
    },
    {
      id: '2',
      title: 'Ethical decision making in challenging situations',
      author: 'Sarah Johnson',
      date: '2024-03-19',
      replies: 18,
      views: 142,
      tags: ['Ethics', 'Decision Making']
    },
    {
      id: '3',
      title: 'Building a culture of integrity in organizations',
      author: 'Michael Chen',
      date: '2024-03-18',
      replies: 31,
      views: 203,
      tags: ['Culture', 'Organizations']
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-6"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <MessageSquare className="text-blue-900" size={24} />
            <h2 className="text-2xl font-bold text-blue-900">Public Discussions</h2>
          </div>
          <div className="flex items-center gap-3">
            <Users className="text-gray-500" size={20} />
            <span className="text-gray-500">485 active users</span>
          </div>
        </div>

        <div className="relative mb-6">
          <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search discussions..."
            className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        <div className="space-y-4">
          {discussions.map((discussion) => (
            <motion.div
              key={discussion.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="p-4 border border-gray-200 rounded-lg hover:border-blue-900 transition-colors cursor-pointer"
            >
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-900">{discussion.title}</h3>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1">
                      <UserCheck size={16} />
                      {discussion.author}
                    </span>
                    <span className="flex items-center gap-1">
                      <Clock size={16} />
                      {discussion.date}
                    </span>
                  </div>
                  <div className="flex gap-2">
                    {discussion.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-1 text-xs bg-blue-50 text-blue-900 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="text-right text-sm text-gray-500">
                  <div>{discussion.replies} replies</div>
                  <div>{discussion.views} views</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

// Expert Q&A Sessions Component
const ExpertQASessions: React.FC = () => {
  const experts: Expert[] = [
    {
      id: '1',
      name: 'Dr. Emily Watson',
      role: 'Ethics Consultant',
      expertise: ['Corporate Ethics', 'Governance'],
      availability: 'Next Session: Tomorrow, 2 PM',
      rating: 4.9,
      totalSessions: 156
    },
    {
      id: '2',
      name: 'Prof. David Martinez',
      role: 'Legal Expert',
      expertise: ['Public Policy', 'Compliance'],
      availability: 'Next Session: Today, 4 PM',
      rating: 4.8,
      totalSessions: 234
    },
    {
      id: '3',
      name: 'Rachel Thompson',
      role: 'Integrity Officer',
      expertise: ['Workplace Ethics', 'Leadership'],
      availability: 'Next Session: Friday, 10 AM',
      rating: 4.7,
      totalSessions: 189
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: 20 },
    visible: { opacity: 1, x: 0 }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-lg">
      <motion.div
        initial="hidden"
        animate="visible"
        variants={containerVariants}
        className="space-y-6"
      >
        <div className="flex items-center justify-between mb-8">
          <div className="flex items-center gap-3">
            <Award className="text-blue-900" size={24} />
            <h2 className="text-2xl font-bold text-blue-900">Expert Q&A Sessions</h2>
          </div>
          <button className="text-blue-900 font-medium hover:text-blue-800 flex items-center gap-1">
            View All Sessions
            <ChevronRight size={20} />
          </button>
        </div>

        <div className="space-y-4">
          {experts.map((expert) => (
            <motion.div
              key={expert.id}
              variants={itemVariants}
              whileHover={{ scale: 1.01 }}
              className="p-6 border border-gray-200 rounded-lg hover:border-blue-900 transition-colors cursor-pointer"
            >
              <div className="grid grid-cols-3 gap-4">
                <div className="space-y-2">
                  <h3 className="text-lg font-semibold text-blue-900">{expert.name}</h3>
                  <p className="text-gray-600">{expert.role}</p>
                  <div className="flex items-center gap-2">
                    <Star className="text-yellow-400" size={16} fill="currentColor" />
                    <span className="font-medium">{expert.rating}</span>
                    <span className="text-gray-500">({expert.totalSessions} sessions)</span>
                  </div>
                </div>

                <div className="space-y-2">
                  <div className="text-sm text-gray-600">Expertise</div>
                  <div className="flex gap-2 flex-wrap">
                    {expert.expertise.map((item) => (
                      <span
                        key={item}
                        className="px-2 py-1 text-xs bg-blue-50 text-blue-900 rounded-full"
                      >
                        {item}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-4">
                  <div className="flex items-center gap-2 text-gray-600">
                    <Calendar size={16} />
                    <span>{expert.availability}</span>
                  </div>
                  <button className="w-full px-4 py-2 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition-colors flex items-center justify-center gap-2">
                    <MessageCircle size={16} />
                    Book Session
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export { PublicDiscussions, ExpertQASessions };