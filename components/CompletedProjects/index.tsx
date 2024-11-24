"use client"
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, Filter, ArrowUpRight, Tag, MapPin, X, ChevronDown, Check } from 'lucide-react';

interface Project {
    id: number;
    title: string;
    category: string;
    description: string;
    completionDate: string;
    location: {
        country: string;
        county: string;
    };
    metrics: {
        completionRate: number;
        clientSatisfaction: number;
        teamSize: number;
    };
    tags: string[];
}

interface FilterState {
    countries: string[];
    counties: string[];
    categories: string[];
}

const CompletedProjects = () => {
    const [selectedFilters, setSelectedFilters] = useState<FilterState>({
        countries: [],
        counties: [],
        categories: []
    });
    const [searchQuery, setSearchQuery] = useState('');
    const [isFilterOpen, setIsFilterOpen] = useState(false);
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [availableCounties, setAvailableCounties] = useState<string[]>([]);

    // Sample expanded project data
    const projects: Project[] = [
        {
            id: 1,
            title: "Enterprise Data Platform",
            category: "Data Engineering",
            description: "Advanced data pipeline implementation with real-time analytics",
            completionDate: "2024-02-15",
            location: {
                country: "United Kingdom",
                county: "Greater London"
            },
            metrics: {
                completionRate: 100,
                clientSatisfaction: 98,
                teamSize: 12
            },
            tags: ["AWS", "Python", "Kafka", "Spark"]
        },
        {
            id: 2,
            title: "AI-Powered Healthcare System",
            category: "Healthcare",
            description: "Intelligent patient monitoring and diagnosis assistance platform",
            completionDate: "2024-01-20",
            location: {
                country: "United States",
                county: "California"
            },
            metrics: {
                completionRate: 100,
                clientSatisfaction: 95,
                teamSize: 8
            },
            tags: ["Machine Learning", "React", "Node.js", "MongoDB"]
        }
    ];

    // Get unique values for filters
    const countries = Array.from(new Set(projects.map(p => p.location.country)));
    const allCounties = Array.from(new Set(projects.map(p => p.location.county)));
    const categories = Array.from(new Set(projects.map(p => p.category)));

    useEffect(() => {
        if (selectedFilters.countries.length === 0) {
            setAvailableCounties(allCounties);
        } else {
            const filteredCounties = projects
                .filter(p => selectedFilters.countries.includes(p.location.country))
                .map(p => p.location.county);
            setAvailableCounties(Array.from(new Set(filteredCounties)));
        }
    }, [selectedFilters.countries]);

    const filteredProjects = projects.filter(project => {
        const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
            project.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()));

        const matchesCountry = selectedFilters.countries.length === 0 ||
            selectedFilters.countries.includes(project.location.country);

        const matchesCounty = selectedFilters.counties.length === 0 ||
            selectedFilters.counties.includes(project.location.county);

        const matchesCategory = selectedFilters.categories.length === 0 ||
            selectedFilters.categories.includes(project.category);

        return matchesSearch && matchesCountry && matchesCounty && matchesCategory;
    });

    const CustomDropdown = ({
        label,
        options,
        selected,
        onSelect,
        disabled = false
    }: {
        label: string;
        options: string[];
        selected: string[];
        onSelect: (value: string) => void;
        disabled?: boolean;
    }) => (
        <div className="relative">
            <motion.button
                className={`w-full px-4 py-2 rounded-lg border border-gray-200 flex items-center justify-between ${disabled ? 'bg-gray-100 cursor-not-allowed' : 'hover:border-blue-900'
                    }`}
                onClick={() => !disabled && setOpenDropdown(openDropdown === label ? null : label)}
                whileHover={!disabled ? { scale: 1.01 } : {}}
                whileTap={!disabled ? { scale: 0.99 } : {}}
            >
                <span className={`${disabled ? 'text-gray-400' : 'text-gray-700'}`}>
                    {selected.length ? `${label} (${selected.length})` : label}
                </span>
                <ChevronDown className={`w-4 h-4 transform transition-transform ${openDropdown === label ? 'rotate-180' : ''
                    }`} />
            </motion.button>

            <AnimatePresence>
                {openDropdown === label && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-10 w-full mt-1 bg-white rounded-lg shadow-lg border border-gray-200 max-h-60 overflow-auto"
                    >
                        {options.map((option) => (
                            <motion.button
                                key={option}
                                className="w-full px-4 py-2 flex items-center justify-between hover:bg-blue-50 text-left"
                                onClick={() => onSelect(option)}
                                whileHover={{ backgroundColor: 'rgba(59, 130, 246, 0.1)' }}
                            >
                                <span>{option}</span>
                                {selected.includes(option) && <Check className="w-4 h-4 text-blue-900" />}
                            </motion.button>
                        ))}
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );

    const handleFilterChange = (type: keyof FilterState, value: string) => {
        setSelectedFilters(prev => ({
            ...prev,
            [type]: prev[type].includes(value)
                ? prev[type].filter(item => item !== value)
                : [...prev[type], value]
        }));
    };

    const clearFilters = () => {
        setSelectedFilters({
            countries: [],
            counties: [],
            categories: []
        });
        setSearchQuery('');
    };

    return (
        <div className="min-h-screen bg-white">
            {/* Header Section */}
            <motion.div
                className="bg-blue-900 text-white py-16"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.8 }}
            >
                <div className="container mx-auto px-4">
                    <motion.h1
                        className="text-5xl font-bold mb-4"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Completed Projects
                    </motion.h1>
                    <motion.p
                        className="text-xl opacity-90"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                    >
                        Showcasing our successful implementations and achievements
                    </motion.p>
                </div>
            </motion.div>

            {/* Filter Section */}
            <div className="container mx-auto px-4 py-8">
                <motion.div
                    className="bg-white rounded-xl shadow-lg p-6 mb-8"
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                >
                    {/* Search and Filter Toggle */}
                    <div className="flex flex-col md:flex-row gap-4 mb-6">
                        <div className="relative flex-1">
                            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="w-full pl-10 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                        <motion.button
                            className="flex items-center gap-2 px-4 py-2 bg-blue-900 text-white rounded-lg"
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            whileHover={{ scale: 1.02 }}
                            whileTap={{ scale: 0.98 }}
                        >
                            <Filter className="w-5 h-5" />
                            Advanced Filters
                            <ChevronDown className={`w-4 h-4 transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`} />
                        </motion.button>
                    </div>

                    {/* Advanced Filter Panel */}
                    <AnimatePresence>
                        {isFilterOpen && (
                            <motion.div
                                initial={{ height: 0, opacity: 0 }}
                                animate={{ height: 'auto', opacity: 1 }}
                                exit={{ height: 0, opacity: 0 }}
                                transition={{ duration: 0.3 }}
                                className="overflow-hidden"
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
                                    <CustomDropdown
                                        label="Select Country"
                                        options={countries}
                                        selected={selectedFilters.countries}
                                        onSelect={(value) => handleFilterChange('countries', value)}
                                    />
                                    <CustomDropdown
                                        label="Select County"
                                        options={availableCounties}
                                        selected={selectedFilters.counties}
                                        onSelect={(value) => handleFilterChange('counties', value)}
                                        disabled={selectedFilters.countries.length === 0}
                                    />
                                    <CustomDropdown
                                        label="Select Category"
                                        options={categories}
                                        selected={selectedFilters.categories}
                                        onSelect={(value) => handleFilterChange('categories', value)}
                                    />
                                </div>

                                {/* Active Filters */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {Object.entries(selectedFilters).map(([key, values]) =>
                                        values.map((value: string) => (
                                            <motion.span
                                                key={`${key}-${value}`}
                                                className="inline-flex items-center gap-1 px-3 py-1 bg-blue-100 text-blue-900 rounded-full text-sm"
                                                initial={{ scale: 0 }}
                                                animate={{ scale: 1 }}
                                                exit={{ scale: 0 }}
                                            >
                                                {value}
                                                <button
                                                    type="button"
                                                    onClick={() => handleFilterChange(key as keyof FilterState, value)}
                                                    className="hover:text-blue-700"
                                                >{" "}
                                                    <X className="w-4 h-4" />
                                                </button>
                                            </motion.span>
                                        ))
                                    )}

                                    {(Object.values(selectedFilters).some(v => v.length > 0) || searchQuery) && (
                                        <motion.button
                                            className="text-blue-900 text-sm hover:underline"
                                            onClick={clearFilters}
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            Clear all filters
                                        </motion.button>
                                    )}
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>

                {/* Projects Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                    layout
                >
                    {filteredProjects.map((project) => (
                        <motion.div
                            key={project.id}
                            className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            whileHover={{ y: -5 }}
                        >
                            <div className="p-6">
                                <div className="flex justify-between items-start mb-4">
                                    <h3 className="text-xl font-semibold text-gray-900">{project.title}</h3>
                                    <motion.button
                                        whileHover={{ scale: 1.1, rotate: 45 }}
                                        whileTap={{ scale: 0.9 }}
                                    >
                                        <ArrowUpRight className="text-blue-900" />
                                    </motion.button>
                                </div>
                                <p className="text-gray-600 mb-4">{project.description}</p>

                                {/* Location */}
                                <div className="flex items-center gap-2 text-gray-500 mb-4">
                                    <MapPin className="w-4 h-4" />
                                    <span>{project.location.county}, {project.location.country}</span>
                                </div>

                                {/* Metrics */}
                                <div className="grid grid-cols-3 gap-4 mb-4">
                                    {Object.entries(project.metrics).map(([key, value]) => (
                                        <motion.div
                                            key={key}
                                            className="text-center"
                                            whileHover={{ scale: 1.05 }}
                                        >
                                            <div className="text-2xl font-bold text-blue-900">{value}</div>
                                            <div className="text-sm text-gray-500">{key.replace(/([A-Z])/g, ' $1').trim()}</div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <motion.span
                                            key={tag}
                                            className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-blue-100 text-blue-900"
                                            whileHover={{ scale: 1.05 }}
                                            whileTap={{ scale: 0.95 }}
                                        >
                                            <Tag className="w-3 h-3 mr-1" />
                                            {tag}
                                        </motion.span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>

                {/* No Results Message */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
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
                            <motion.button
                                onClick={clearFilters}
                                className="text-blue-900 hover:bg-blue-50 px-4 py-2 rounded-lg transition-colors"
                                whileHover={{ scale: 1.05 }}
                                whileTap={{ scale: 0.95 }}
                            >
                                Clear all filters
                            </motion.button>
                        </div>
                    </motion.div>
                )}

                {/* Loading State - Can be controlled by a loading state if needed */}
                {false && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        className="text-center py-12"
                    >
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-900 mx-auto" />
                    </motion.div>
                )}
            </div>

            {/* Click Outside Handler for Dropdowns */}
            {openDropdown && (
                <div
                    className="fixed inset-0 z-0"
                    onClick={() => setOpenDropdown(null)}
                />
            )}
        </div>
    );
};

export default CompletedProjects;