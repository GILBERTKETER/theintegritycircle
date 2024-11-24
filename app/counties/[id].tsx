"use client";

import { useSearchParams } from "next/navigation";
import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { County } from "@/types";
import components from "@/components";

export default function CountyPage() {
  const {
    ProjectCard,
    FundingOverview,
    EnvironmentalProjectCard,
    PlannedInitiativeCard,
    PublicParticipationSection,
    FilterSection,
    SearchBar,
    sampleCountyData,
    BrowseCounties,
  } = components;

  const searchParams = useSearchParams(); // Access query parameters
  const id = searchParams.get("id"); // Get the `id` parameter from the URL
  const [searchTerm, setSearchTerm] = useState("");
  const [filters, setFilters] = useState({
    category: "",
    status: "",
  });
  const [countyData, setCountyData] = useState<County | null>(null);

  useEffect(() => {
    // Fetch data based on the ID (simulated here with sample data)
    if (id) {
      setCountyData(sampleCountyData); // Replace with real fetch logic
    }
  }, [id]);

  const handleFilterChange = (type: string, value: string) => {
    setFilters((prev) => ({ ...prev, [type]: value }));
  };

  const filteredProjects = countyData?.projects.filter((project) => {
    const matchesSearch =
      project.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      !filters.category || project.category === filters.category;
    const matchesStatus = !filters.status || project.status === filters.status;
    return matchesSearch && matchesCategory && matchesStatus;
  });

  if (!countyData) {
    return (
      <div className="min-h-screen">
      <BrowseCounties/>
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="min-h-screen bg-gray-50"
    >
      <div className="max-w-7xl mx-auto px-4 py-8">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mb-8"
        >
          <h1 className="text-4xl font-bold text-blue-900">
            {countyData.name} County Dashboard
          </h1>
          <p className="mt-2 text-gray-600">
            Tracking development projects and initiatives across the county
          </p>
        </motion.div>

        <div className="space-y-6">
          <SearchBar onSearch={setSearchTerm} />

          <FilterSection
            onFilterChange={handleFilterChange}
            categories={[
              "Infrastructure",
              "Health",
              "Water",
              "Education",
              "Agriculture",
            ]}
            statuses={["Ongoing", "Completed"]}
          />

          <div className="mt-8">
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Projects and Initiatives
            </h2>
            <motion.div
              layout
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
            >
              {filteredProjects?.map((project) => (
                <ProjectCard key={project.id} project={project} />
              ))}
            </motion.div>

            {filteredProjects?.length === 0 && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-8"
              >
                <p className="text-gray-600">
                  No projects found matching your criteria.
                </p>
              </motion.div>
            )}
          </div>

          {/* Planned Initiatives Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Planned Initiatives
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {countyData.plannedInitiatives.map((initiative) => (
                <PlannedInitiativeCard
                  key={initiative.id}
                  initiative={initiative}
                />
              ))}
            </div>
          </motion.div>

          {/* Funding Overview Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Funding Overview
            </h2>
            <FundingOverview funding={countyData.funding} />
          </motion.div>

          {/* Public Participation Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Public Participation
            </h2>
            <PublicParticipationSection
              participation={countyData.publicParticipation}
            />
          </motion.div>

          {/* Environmental Projects Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-12 mb-16"
          >
            <h2 className="text-2xl font-semibold text-blue-900 mb-4">
              Environmental Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {countyData.environmentalProjects.map((project) => (
                <EnvironmentalProjectCard key={project.id} project={project} />
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
