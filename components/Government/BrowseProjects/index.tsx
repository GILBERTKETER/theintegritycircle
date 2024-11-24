"use client"
import React, { useState, useEffect } from 'react';
import { Search, Filter, MapPin, Calendar, ArrowUpRight } from 'lucide-react';
import { motion } from 'framer-motion';

const projects = [
  {
    id: 1,
    title: "Community Health Initiative",
    country: "Kenya",
    category: "Healthcare",
    description: "Improving access to healthcare in rural communities through mobile clinics and telemedicine.",
    url: "/projects/health-initiative",
    date: "2024",
    imageUrl: "https://kenyaluxurysafari.co.uk/wp-content/uploads/image9-17.webp"
  },
  {
    id: 2,
    title: "Education Technology Program",
    country: "Uganda",
    category: "Education",
    description: "Implementing digital learning solutions in underserved schools to bridge the educational gap.",
    url: "/projects/ed-tech",
    date: "2024",
    imageUrl: "https://kenyaluxurysafari.co.uk/wp-content/uploads/image9-17.webp"
  },
  {
    id: 3,
    title: "Clean Water Access Project",
    country: "Tanzania",
    category: "Infrastructure",
    description: "Building sustainable water systems for communities lacking access to clean water.",
    url: "/projects/clean-water",
    date: "2024",
    imageUrl: "https://kenyaluxurysafari.co.uk/wp-content/uploads/image9-17.webp"
  }
];

const categories = ["All", "Healthcare", "Education", "Infrastructure", "Technology"];
const countries = ["All", "Kenya", "Uganda", "Tanzania", "Rwanda", "Ethiopia"];

const ProjectsBrowser = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedCountry, setSelectedCountry] = useState("All");
  const [filteredProjects, setFilteredProjects] = useState(projects);

  const clearFilters = () => {
    setSearchTerm("");
    setSelectedCategory("All");
    setSelectedCountry("All");
  };

  useEffect(() => {
    const filtered = projects.filter(project => {
      const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                          project.description.toLowerCase().includes(searchTerm.toLowerCase());
      const matchesCategory = selectedCategory === "All" || project.category === selectedCategory;
      const matchesCountry = selectedCountry === "All" || project.country === selectedCountry;
      
      return matchesSearch && matchesCategory && matchesCountry;
    });
    setFilteredProjects(filtered);
  }, [searchTerm, selectedCategory, selectedCountry]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  const hasActiveFilters = searchTerm || selectedCategory !== "All" || selectedCountry !== "All";

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-blue-900 text-white py-16 px-4"
      >
        <div className="max-w-7xl mx-auto">
          <h1 className="text-4xl font-bold mb-4">Our Projects</h1>
          <p className="text-xl text-blue-100">Discover our initiatives across Africa</p>
        </div>
      </motion.div>

      {/* Filters Section */}
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-4 mb-8">
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex-1"
          >
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="flex gap-4"
          >
            <select
            title='Category'
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
            >
              {categories.map(category => (
                <option key={category} value={category}>{category}</option>
              ))}
            </select>

            <select
            title='Country'
              className="px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-900 focus:border-transparent"
              value={selectedCountry}
              onChange={(e) => setSelectedCountry(e.target.value)}
            >
              {countries.map(country => (
                <option key={country} value={country}>{country}</option>
              ))}
            </select>
          </motion.div>
        </div>

        {/* Projects Grid or Empty State */}
        {filteredProjects.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-12"
          >
            <div className="max-w-md mx-auto">
              <motion.div
                initial={{ scale: 0.9 }}
                animate={{ scale: 1 }}
                className="mb-4"
              >
                <Filter className="w-16 h-16 text-gray-300 mx-auto" />
              </motion.div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">
                No projects found
              </h3>
              <p className="text-gray-500 mb-4">
                Try adjusting your search or filter criteria to find what you are looking for.
              </p>
              {hasActiveFilters && (
                <motion.button
                  onClick={clearFilters}
                  className="text-blue-900 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Clear all filters
                </motion.button>
              )}
            </div>
          </motion.div>
        ) : (
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map(project => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-100 hover:border-blue-900 transition-all"
              >
                <img 
                  src={project.imageUrl} 
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <div className="flex items-center gap-2 text-sm text-gray-600 mb-3">
                    <MapPin size={16} />
                    <span>{project.country}</span>
                    <Calendar size={16} className="ml-2" />
                    <span>{project.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 mb-4">{project.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm">
                      {project.category}
                    </span>
                    <a 
                      href={project.url}
                      className="flex items-center text-blue-900 hover:text-blue-700 transition-colors"
                    >
                      Learn More
                      <ArrowUpRight size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        )}
      </div>
    </div>
  );
};

export default ProjectsBrowser;