// app/browse-counties/page.tsx
'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Search, MapPin, Users, Filter, ChevronDown, Globe2, Building2 } from 'lucide-react';
import Link from 'next/link';

interface County {
    id: string;
    name: string;
    region: string;
    population: number;
    area: number;
    capital: string;
    imageUrl: string;
    subCounties: number;
}

const BrowseCounties = () => {
    const [counties, setCounties] = useState<County[]>([]);
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedRegion, setSelectedRegion] = useState('');
    const [sortBy, setSortBy] = useState('name');
    const [isFilterOpen, setIsFilterOpen] = useState(true);

    useEffect(() => {
        const fetchCounties = async () => {
            const mockCounties: County[] = [
                {
                    id: '1',
                    name: 'Nairobi',
                    region: 'Nairobi Metropolitan',
                    population: 4397073,
                    area: 696,
                    capital: 'Nairobi City',
                    imageUrl: 'https://kenyaluxurysafari.co.uk/wp-content/uploads/image9-17.webp',
                    subCounties: 17
                },
            ];
            setCounties(mockCounties);
        };
        fetchCounties();
    }, []);

    const filteredCounties = counties.filter(county => {
        const matchesSearch = county.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
            county.region.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesRegion = !selectedRegion || county.region === selectedRegion;
        return matchesSearch && matchesRegion;
    });

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5
            }
        }
    };
    const clearFilters = () => {
        setSearchTerm('');
        setSelectedRegion('');
        setSortBy('');
    };
    return (
        <div className="min-h-screen bg-white">
            <div className="max-w-7xl mx-auto px-4 py-12">
                {/* Header Section */}
                <div className="mb-12">
                    <motion.h1
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="text-4xl font-bold mb-4 text-blue-900"
                    >
                        Counties of Kenya
                    </motion.h1>
                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.2 }}
                        className="text-gray-600"
                    >
                        Explore the 47 counties that make up our nation
                    </motion.p>
                </div>

                {/* Search and Filter Section */}
                <div className="mb-8 space-y-4">
                    <div className="flex gap-4 flex-wrap">
                        <div className="relative flex-1 min-w-[300px]">
                            <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search counties..."
                                className="w-full pl-12 pr-4 py-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                            />
                        </div>

                        <motion.button
                            whileTap={{ scale: 0.95 }}
                            onClick={() => setIsFilterOpen(!isFilterOpen)}
                            className="flex items-center gap-2 px-6 py-3 bg-white border border-gray-200 rounded-lg hover:border-blue-900 text-blue-900"
                        >
                            <Filter size={20} />
                            <span>Filters</span>
                            <ChevronDown
                                size={20}
                                className={`transform transition-transform ${isFilterOpen ? 'rotate-180' : ''}`}
                            />
                        </motion.button>
                    </div>

                    {/* Filter Panel */}
                    {isFilterOpen ?
                        <motion.div
                            variants={containerVariants}
                            initial="hidden"
                            animate="visible"
                            className="overflow-hidden"
                        >
                            <div className="p-6 border border-gray-200 rounded-lg space-y-4">
                                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-600">Region</label>
                                        <select
                                            title="Region"
                                            value={selectedRegion}
                                            onChange={(e) => setSelectedRegion(e.target.value)}
                                            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
                                        >
                                            <option value="">All Regions</option>
                                            <option value="Nairobi Metropolitan">Nairobi Metropolitan</option>
                                            <option value="Central">Central</option>
                                            <option value="Coast">Coast</option>
                                            <option value="Eastern">Eastern</option>
                                            <option value="North Eastern">North Eastern</option>
                                            <option value="Nyanza">Nyanza</option>
                                            <option value="Rift Valley">Rift Valley</option>
                                            <option value="Western">Western</option>
                                        </select>
                                    </div>
                                    <div>
                                        <label className="block text-sm font-medium mb-2 text-gray-600">Sort By</label>
                                        <select
                                            title='Sort'
                                            value={sortBy}
                                            onChange={(e) => setSortBy(e.target.value)}
                                            className="w-full p-3 rounded-lg border border-gray-200 focus:ring-2 focus:ring-blue-900 focus:border-blue-900 outline-none"
                                        >
                                            <option value="name">Name</option>
                                            <option value="population">Population</option>
                                            <option value="area">Area</option>
                                        </select>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                        : ''

                    }
                </div>

                {/* Counties Grid */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                >
                    {filteredCounties.map((county) => (
                        <motion.div
                            key={county.id}
                            variants={cardVariants}
                            whileHover={{ y: -5 }}
                            className="bg-white border border-gray-200 rounded-lg overflow-hidden hover:border-blue-900 transition-colors"
                        >
                            <Link href={`/counties/?id=${county.id}`}>
                                <div className="relative">
                                    <img
                                        src={county.imageUrl}
                                        alt={county.name}
                                        className="w-full h-48 object-cover"
                                    />
                                    <div className="absolute inset-0 bg-black/40" />
                                    <div className="absolute bottom-0 p-4 text-white">
                                        <h3 className="text-xl font-bold mb-1">{county.name}</h3>
                                        <div className="flex items-center gap-2">
                                            <MapPin size={16} />
                                            <span>{county.region}</span>
                                        </div>
                                    </div>
                                </div>
                                <div className="p-4 space-y-3">
                                    <div className="grid grid-cols-2 gap-4">
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Users size={18} />
                                            <span>{county.population.toLocaleString()}</span>
                                        </div>
                                        <div className="flex items-center gap-2 text-gray-600">
                                            <Globe2 size={18} />
                                            <span>{county.area} km²</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-2 text-gray-600">
                                        <Building2 size={18} />
                                        <span>Capital: {county.capital}</span>
                                    </div>
                                    <div className="mt-4 text-center">
                                        <span className="text-blue-900 font-medium hover:text-blue-800">
                                            View County Dashboard →
                                        </span>
                                    </div>
                                </div>
                            </Link>
                        </motion.div>
                    ))}
                </motion.div>

                {/* Empty State */}
                {filteredCounties.length === 0 && (
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
            </div>
        </div>
    );
};

export default BrowseCounties;