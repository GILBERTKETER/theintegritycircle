"use client"
import React, { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Search, Users, BarChart2, MapPin, Wallet, Target,
    ArrowUpRight,
    TrendingUp,
    ChevronDown
} from 'lucide-react';

// Updated interfaces for government projects
interface Location {
    country: string;
    county: string;
    constituency?: string;
    ward?: string;
}

interface Budget {
    allocated: number;
    disbursed: number;
    spent: number;
    currency: string;
}

interface ProjectTimeline {
    plannedStart: string;
    plannedEnd: string;
    actualStart?: string;
    actualEnd?: string;
    lastUpdate: string;
}

export interface GovProject {
    id: number;
    title: string;
    description: string;
    progress: number;
    priority: 'High' | 'Medium' | 'Low';
    status: 'On Track' | 'At Risk' | 'Delayed' | 'Completed' | 'Suspended';
    location: Location;
    budget: Budget;
    timeline: ProjectTimeline;
    ministry: string;
    department: string;
    implementingAgency: string;
    beneficiaries: number;
    tags: string[];
    risks: {
        count: number;
        critical: number;
    };
    tasks: {
        completed: number;
        total: number;
    };
    documents: {
        title: string;
        url: string;
        type: 'tender' | 'report' | 'assessment' | 'other';
    }[];
    leadBy: string;
    contractors: string[];
}

export interface FilterState {
    country: string;
    county: string;
    constituency: string;
    ward: string;
    status: string;
    priority: string;
    ministry: string;
    department: string;
    dateRange: {
        start: string;
        end: string;
    };
}

export interface MetricCardProps {
    icon: React.ComponentType<{ className?: string }>;
    label: string;
    value: string;
    subValue?: string;
    change?: number;
}

export interface ProjectCardProps {
    project: GovProject;
    onSelect: (project: GovProject) => void;
}

export interface FilterDropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

// Sample data with government project structure
const PROJECTS: GovProject[] = [
    {
        id: 1,
        title: "County Road Infrastructure Development",
        description: "Construction and rehabilitation of major road networks connecting agricultural zones to markets.",
        progress: 75,
        priority: "High",
        status: "On Track",
        location: {
            country: "Kenya",
            county: "Nakuru",
            constituency: "Njoro",
            ward: "Mau Narok"
        },
        budget: {
            allocated: 250000000,
            disbursed: 175000000,
            spent: 150000000,
            currency: "KES"
        },
        timeline: {
            plannedStart: "2024-01-15",
            plannedEnd: "2024-12-30",
            actualStart: "2024-01-20",
            lastUpdate: "2024-03-20"
        },
        ministry: "Infrastructure",
        department: "Roads and Public Works",
        implementingAgency: "Kenya Rural Roads Authority",
        beneficiaries: 50000,
        tags: ["Infrastructure", "Roads", "Rural Development"],
        risks: {
            count: 3,
            critical: 1
        },
        tasks: {
            completed: 45,
            total: 72
        },
        documents: [
            {
                title: "Environmental Impact Assessment",
                url: "/documents/eia-report",
                type: "assessment"
            },
            {
                title: "Tender Document",
                url: "/documents/tender",
                type: "tender"
            }
        ],
        leadBy: "Eng. Sarah Kamau",
        contractors: ["ABC Construction Ltd", "XYZ Engineering Services"]
    }
];
export interface FilterDropdownProps {
    label: string;
    options: string[];
    value: string;
    onChange: (value: string) => void;
}

const FilterDropdown: React.FC<FilterDropdownProps> = ({ label, options, value, onChange }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="relative">
            <motion.button
                whileTap={{ scale: 0.98 }}
                onClick={() => setIsOpen(!isOpen)}
                className="w-full px-4 py-2 bg-white border border-gray-200 rounded-lg flex items-center justify-between gap-2 text-sm text-gray-700 hover:border-blue-900"
            >
                <span>{value === 'all' ? label : value}</span>
                <ChevronDown className={`w-4 h-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </motion.button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="absolute z-50 w-full mt-1 bg-white border border-gray-200 rounded-lg shadow-lg overflow-hidden"
                    >
                        <div className="max-h-60 overflow-y-auto">
                            {options.map((option) => (
                                <button
                                    key={option}
                                    onClick={() => {
                                        onChange(option.toLowerCase());
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-4 py-2 text-left text-sm hover:bg-blue-50 transition-colors
                                        ${value === option.toLowerCase() ? 'bg-blue-50 text-blue-900' : 'text-gray-700'}`}
                                >
                                    {option}
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
            
            {/* Backdrop to close dropdown when clicking outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </div>
    );
};

const ProjectMetricCard: React.FC<MetricCardProps> = ({
    icon: Icon,
    label,
    value,
    subValue,
    change
}) => (
    <motion.div
        className="bg-white rounded-xl p-4 shadow-md"
        whileHover={{ y: -4 }}
    >
        <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
                <div className="p-2 bg-blue-100 rounded-lg">
                    <Icon className="w-5 h-5 text-blue-900" />
                </div>
                <span className="text-gray-600 text-sm">{label}</span>
            </div>
            {change !== undefined && (
                <div className={`text-xs px-2 py-1 rounded-full ${change > 0 ? 'bg-green-100 text-green-800' : 'bg-red-100 text-red-800'
                    }`}>
                    {change > 0 ? '+' : ''}{change}%
                </div>
            )}
        </div>
        <p className="text-2xl font-bold text-gray-900 mt-2">{value}</p>
        {subValue && (
            <p className="text-sm text-gray-600 mt-1">{subValue}</p>
        )}
    </motion.div>
);

const ProjectCard: React.FC<ProjectCardProps> = ({ project, onSelect }) => (
    <motion.div
        layout
        className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow"
        whileHover={{ y: -4 }}
    >
        <div className="flex justify-between items-start mb-4">
            <div>
                <h3 className="text-xl font-bold text-gray-900">{project.title}</h3>
                <div className="flex items-center gap-2 mt-2">
                    <MapPin className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">
                        {project.location.ward}, {project.location.constituency}, {project.location.county}
                    </span>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{project.description}</p>
            </div>
            <motion.button
                whileHover={{ scale: 1.1 }}
                onClick={() => onSelect(project)}
                className="p-2 hover:bg-blue-50 rounded-full"
            >
                <ArrowUpRight className="w-5 h-5 text-blue-900" />
            </motion.button>
        </div>

        <div className="mt-4">
            <div className="flex justify-between items-center mb-2">
                <span className="text-sm text-gray-600">Progress</span>
                <span className="text-sm font-medium text-blue-900">{project.progress}%</span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2">
                <motion.div
                    className="bg-blue-900 h-2 rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${project.progress}%` }}
                    transition={{ duration: 1 }}
                />
            </div>
        </div>

        <div className="mt-4 grid grid-cols-2 gap-4">
            <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                    <Wallet className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Budget</span>
                </div>
                <p className="text-sm font-medium mt-1">
                    {(project.budget.spent / 1000000).toFixed(1)}M {project.budget.currency}
                    <span className="text-xs text-gray-500 ml-1">
                        of {(project.budget.allocated / 1000000).toFixed(1)}M
                    </span>
                </p>
            </div>
            <div className="bg-gray-50 p-3 rounded-lg">
                <div className="flex items-center gap-2">
                    <Target className="w-4 h-4 text-gray-500" />
                    <span className="text-sm text-gray-600">Beneficiaries</span>
                </div>
                <p className="text-sm font-medium mt-1">
                    {project.beneficiaries.toLocaleString()}
                </p>
            </div>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag, index) => (
                <span
                    key={index}
                    className="px-3 py-1 bg-blue-50 text-blue-900 rounded-full text-xs"
                >
                    {tag}
                </span>
            ))}
        </div>

        <div className="mt-4 pt-4 border-t border-gray-100">
            <div className="flex justify-between items-center">
                <div className="flex items-center gap-2">
                    <span className={`w-2 h-2 rounded-full ${project.status === 'On Track' ? 'bg-green-500' :
                            project.status === 'At Risk' ? 'bg-yellow-500' :
                                project.status === 'Delayed' ? 'bg-red-500' :
                                    project.status === 'Completed' ? 'bg-blue-500' : 'bg-gray-500'
                        }`} />
                    <span className="text-sm text-gray-600">{project.status}</span>
                </div>
                <span className="text-sm text-gray-500">
                    Updated {new Date(project.timeline.lastUpdate).toLocaleDateString()}
                </span>
            </div>
        </div>
    </motion.div>
);

const GovProjectsDashboard: React.FC = () => {
    const [searchQuery, setSearchQuery] = useState<string>('');
    const [selectedProject, setSelectedProject] = useState<GovProject | null>(null);
    const [filters, setFilters] = useState<FilterState>({
        country: 'Kenya',
        county: 'all',
        constituency: 'all',
        ward: 'all',
        status: 'all',
        priority: 'all',
        ministry: 'all',
        department: 'all',
        dateRange: {
            start: '',
            end: ''
        }
    });

    const filteredProjects = useMemo(() => {
        return PROJECTS.filter(project => {
            const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                project.description.toLowerCase().includes(searchQuery.toLowerCase());

            const matchesLocation = (filters.county === 'all' || project.location.county === filters.county) &&
                (filters.constituency === 'all' || project.location.constituency === filters.constituency) &&
                (filters.ward === 'all' || project.location.ward === filters.ward);

            const matchesFilters = (filters.status === 'all' || project.status === filters.status) &&
                (filters.priority === 'all' || project.priority === filters.priority) &&
                (filters.ministry === 'all' || project.ministry === filters.ministry) &&
                (filters.department === 'all' || project.department === filters.department);

            return matchesSearch && matchesLocation && matchesFilters;
        });
    }, [searchQuery, filters]);

    const calculateMetrics = (projects: GovProject[]) => {
        const totalBudget = projects.reduce((sum, p) => sum + p.budget.allocated, 0);
        const totalSpent = projects.reduce((sum, p) => sum + p.budget.spent, 0);
        const totalBeneficiaries = projects.reduce((sum, p) => sum + p.beneficiaries, 0);

        return {
            totalBudget,
            totalSpent,
            totalBeneficiaries,
            projectsOnTrack: projects.filter(p => p.status === 'On Track').length,
            projectsAtRisk: projects.filter(p => p.status === 'At Risk').length
        };
    };

    const metrics = calculateMetrics(filteredProjects);

    return (
        <div className="min-h-screen bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 py-8">
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="mb-8"
                >
                    <h1 className="text-4xl font-bold text-blue-900">Government Projects</h1>
                    <p className="text-gray-600 mt-2">Track and monitor public sector initiatives</p>
                </motion.div>

                {/* Location Filters */}
                <div className="bg-white p-4 rounded-xl shadow-md mb-6">
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
                        <FilterDropdown
                            label="County"
                            options={['All', 'Nakuru', 'Nairobi', 'Mombasa', 'Kisumu']}
                            value={filters.county}
                            onChange={(value) => setFilters(prev => ({ ...prev, county: value }))}
                        />
                        <FilterDropdown
                            label="Constituency"
                            options={['All', 'Njoro', 'Molo', 'Rongai']}
                            value={filters.constituency}
                            onChange={(value) => setFilters(prev => ({ ...prev, constituency: value }))}
                        />
                        <FilterDropdown
                            label="Ward"
                            options={['All', 'Mau Narok', 'Kihingo', 'Mosop']}
                            value={filters.ward}
                            onChange={(value) => setFilters(prev => ({ ...prev, ward: value }))}
                        />
                        <div className="relative flex-1">
                            <Search className="w-5 h-5 text-gray-400 absolute left-3 top-1/2 transform -translate-y-1/2" />
                            <input
                                type="text"
                                placeholder="Search projects..."
                                className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-900 focus:border-transparent"
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                            />
                        </div>
                    </div>
                </div>

                {/* Metrics Overview */}
                <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
                    <ProjectMetricCard
                        icon={Wallet}
                        label="Total Budget"
                        value={`${(metrics.totalBudget / 1000000000).toFixed(2)}B`}
                        subValue={`${((metrics.totalSpent / metrics.totalBudget) * 100).toFixed(1)}% utilized`}
                        change={5}
                    />
                    <ProjectMetricCard
                        icon={BarChart2}
                        label="Active Projects"
                        value={filteredProjects.length.toString()}
                        subValue="Across all regions"
                        change={3}
                    />
                    <ProjectMetricCard
                        icon={TrendingUp}
                        label="On Track"
                        value={metrics.projectsOnTrack.toString()}
                        subValue={`${((metrics.projectsOnTrack / filteredProjects.length) * 100).toFixed(1)}% of total`}
                        change={2}
                    />
                    <ProjectMetricCard
                        icon={Users}
                        label="Beneficiaries"
                        value={`${(metrics.totalBeneficiaries / 1000).toFixed(1)}K`}
                        subValue="Direct beneficiaries"
                        change={8}
                    />
                </div>

                {/* Advanced Filters */}
                <div className="bg-white p-4 rounded-xl shadow-md mb-8">
                    <div className="flex flex-wrap gap-4">
                        <FilterDropdown
                            label="Ministry"
                            options={['All', 'Infrastructure', 'Education', 'Health', 'Agriculture']}
                            value={filters.ministry}
                            onChange={(value) => setFilters(prev => ({ ...prev, ministry: value }))}
                        />
                        <FilterDropdown
                            label="Department"
                            options={['All', 'Roads and Public Works', 'Primary Education', 'Public Health']}
                            value={filters.department}
                            onChange={(value) => setFilters(prev => ({ ...prev, department: value }))}
                        />
                        <FilterDropdown
                            label="Status"
                            options={['All', 'On Track', 'At Risk', 'Delayed', 'Completed', 'Suspended']}
                            value={filters.status}
                            onChange={(value) => setFilters(prev => ({ ...prev, status: value }))}
                        />
                        <FilterDropdown
                            label="Priority"
                            options={['All', 'High', 'Medium', 'Low']}
                            value={filters.priority}
                            onChange={(value) => setFilters(prev => ({ ...prev, priority: value }))}
                        />
                        <div className="flex gap-4 flex-col lg:flex-row">
                            <input
                                placeholder='Date'
                                type="date"
                                className="px-4 py-2 border border-gray-200 rounded-lg"
                                value={filters.dateRange.start}
                                onChange={(e) => setFilters(prev => ({
                                    ...prev,
                                    dateRange: { ...prev.dateRange, start: e.target.value }
                                }))}
                            />
                            <input
                                placeholder='Date'
                                type="date"
                                className="px-4 py-2 border border-gray-200 rounded-lg"
                                value={filters.dateRange.end}
                                onChange={(e) => setFilters(prev => ({
                                    ...prev,
                                    dateRange: { ...prev.dateRange, end: e.target.value }
                                }))}
                            />
                        </div>
                    </div>
                </div>

                {/* Summary Stats */}
                <div className="bg-blue-50 p-4 rounded-xl mb-8">
                    <div className="flex flex-wrap gap-8 justify-between">
                        <div>
                            <h3 className="text-sm font-medium text-blue-900">Project Distribution</h3>
                            <p className="text-2xl font-bold text-blue-900 mt-1">
                                {filteredProjects.length} Projects
                            </p>
                            <p className="text-sm text-blue-700">
                                in {Array.from(new Set(filteredProjects.map(p => p.location.county))).length} Counties
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-blue-900">Total Investment</h3>
                            <p className="text-2xl font-bold text-blue-900 mt-1">
                                {(metrics.totalBudget / 1000000000).toFixed(2)}B KES
                            </p>
                            <p className="text-sm text-blue-700">
                                {((metrics.totalSpent / metrics.totalBudget) * 100).toFixed(1)}% Utilized
                            </p>
                        </div>
                        <div>
                            <h3 className="text-sm font-medium text-blue-900">Implementation Status</h3>
                            <p className="text-2xl font-bold text-blue-900 mt-1">
                                {((metrics.projectsOnTrack / filteredProjects.length) * 100).toFixed(1)}%
                            </p>
                            <p className="text-sm text-blue-700">
                                Projects On Track
                            </p>
                        </div>
                    </div>
                </div>

                {/* Projects Grid */}
                <AnimatePresence>
                    <motion.div
                        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
                        layout
                    >
                        {filteredProjects.map((project) => (
                            <ProjectCard
                                key={project.id}
                                project={project}
                                onSelect={setSelectedProject}
                            />
                        ))}
                    </motion.div>
                </AnimatePresence>

                {/* Empty State */}
                {filteredProjects.length === 0 && (
                    <motion.div
                        className="text-center py-12"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                    >
                        <Search className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                        <h3 className="text-lg font-medium text-gray-900">No projects found</h3>
                        <p className="text-gray-600">Try adjusting your search or filters</p>
                    </motion.div>
                )}

                {/* Project Details Modal */}
                {selectedProject && (
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
                        onClick={() => setSelectedProject(null)}
                    >
                        <motion.div
                            className="bg-white rounded-xl p-6 max-w-2xl w-full mx-4 max-h-[90vh] overflow-y-auto"
                            onClick={e => e.stopPropagation()}
                            initial={{ scale: 0.9 }}
                            animate={{ scale: 1 }}
                        >
                            <div className="flex justify-between items-start mb-4">
                                <div>
                                    <h2 className="text-2xl font-bold text-gray-900">{selectedProject.title}</h2>
                                    <div className="flex items-center gap-2 mt-2">
                                        <MapPin className="w-4 h-4 text-gray-500" />
                                        <span className="text-gray-600">
                                            {selectedProject.location.ward}, {selectedProject.location.constituency}, {selectedProject.location.county}
                                        </span>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedProject(null)}
                                    className="p-2 hover:bg-gray-100 rounded-full"
                                >{" "}
                                    <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                    </svg>
                                </button>
                            </div>

                            <div className="mt-4">
                                <h3 className="font-medium text-gray-900">Project Details</h3>
                                <p className="mt-2 text-gray-600">{selectedProject.description}</p>
                            </div>

                            <div className="mt-6 grid grid-cols-2 gap-4">
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Budget</h4>
                                    <p className="mt-1 text-gray-600">
                                        {selectedProject.budget.allocated.toLocaleString()} {selectedProject.budget.currency}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Timeline</h4>
                                    <p className="mt-1 text-gray-600">
                                        {new Date(selectedProject.timeline.plannedStart).toLocaleDateString()} -
                                        {new Date(selectedProject.timeline.plannedEnd).toLocaleDateString()}
                                    </p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Implementing Agency</h4>
                                    <p className="mt-1 text-gray-600">{selectedProject.implementingAgency}</p>
                                </div>
                                <div>
                                    <h4 className="text-sm font-medium text-gray-900">Project Lead</h4>
                                    <p className="mt-1 text-gray-600">{selectedProject.leadBy}</p>
                                </div>
                            </div>

                            <div className="mt-6">
                                <h3 className="font-medium text-gray-900">Documents</h3>
                                <div className="mt-2 space-y-2">
                                    {selectedProject.documents.map((doc, index) => (
                                        <a
                                            key={index}
                                            href={doc.url}
                                            className="block p-3 bg-gray-50 rounded-lg hover:bg-gray-100"
                                        >
                                            <div className="flex items-center justify-between">
                                                <span className="text-blue-900">{doc.title}</span>
                                                <span className="text-xs text-gray-500 capitalize">{doc.type}</span>
                                            </div>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </div>
        </div>
    );
};

export default GovProjectsDashboard;