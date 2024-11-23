import React from 'react';
import { motion } from 'framer-motion';
import { Users, Target, Globe, MapPin, Building, Newspaper, Sparkles, Activity } from 'lucide-react';

// Animation variants
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp = {
  hidden: { y: 30, opacity: 0 },
  visible: { y: 0, opacity: 1 }
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.2
    }
  }
};

const scaleIn = {
  hidden: { scale: 0.9, opacity: 0 },
  visible: { scale: 1, opacity: 1 }
};

const AboutUsSection = () => {
  // Your existing data objects remain the same
  const founders = [
    {
      name: "John Smith",
      role: "CEO & Co-founder",
      description: "20+ years experience in governance and integrity management"
    },
    {
      name: "Sarah Johnson",
      role: "COO & Co-founder",
      description: "Expert in organizational ethics and compliance"
    }
  ];

  const projects = [
    {
      title: "Transparency Initiative",
      county: "Nairobi",
      description: "Implementing digital tracking systems for public resource management",
      status: "Ongoing",
      impact: "Over 500,000 citizens benefiting"
    },
    {
      title: "Youth Integrity Program",
      county: "Mombasa",
      description: "Engaging youth in anti-corruption initiatives",
      status: "Completed",
      impact: "10,000 youth trained"
    },
    {
      title: "Public Sector Reform",
      county: "Kisumu",
      description: "Strengthening institutional frameworks",
      status: "Starting",
      impact: "Expected to reach 300,000 citizens"
    }
  ];

  const news = [
    {
      title: "IntegrityCircle Launches New County Partnership",
      date: "March 15, 2024",
      summary: "Expanding our reach to enhance governance structures",
      county: "Nakuru"
    },
    {
      title: "Success Story: Digital Transformation",
      date: "March 1, 2024",
      summary: "Revolutionary changes in public service delivery",
      county: "Eldoret"
    }
  ];

  const countyHighlights = [
    {
      county: "Nairobi",
      achievements: [
        "Implemented e-governance systems",
        "Trained 1000+ public servants",
        "Reduced processing time by 60%"
      ],
      ongoingProjects: 5,
      beneficiaries: "2M+ citizens"
    },
    {
      county: "Mombasa",
      achievements: [
        "Launched integrity monitoring system",
        "Established youth advisory board",
        "Created transparency portals"
      ],
      ongoingProjects: 3,
      beneficiaries: "1M+ citizens"
    }
  ];

  const counties = ["Nairobi", "Mombasa", "Kisumu", "Nakuru", "Eldoret"];
  const countries = ["Kenya", "Uganda", "Tanzania", "Rwanda", "Ethiopia"];

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <motion.div 
        className="bg-blue-900 text-white py-16"
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <motion.h1 
            className="text-4xl font-bold mb-4"
            variants={slideUp}
            transition={{ delay: 0.2 }}
          >
            Who We Are
          </motion.h1>
          <motion.p 
            className="text-xl max-w-3xl"
            variants={slideUp}
            transition={{ delay: 0.4 }}
          >
            IntegrityCircle is a pioneering organization dedicated to promoting transparency,
            accountability, and ethical practices across East Africa.
          </motion.p>
        </div>
      </motion.div>

      {/* Mission Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          <motion.div variants={slideUp}>
            <div className="flex items-center gap-3 mb-4">
              <Target className="text-blue-900 w-8 h-8" />
              <h2 className="text-3xl font-bold text-blue-900">Our Mission</h2>
            </div>
            <p className="text-gray-700 text-lg">
              To establish and maintain the highest standards of integrity in organizational
              practices, fostering a culture of transparency and accountability throughout
              East Africa.
            </p>
          </motion.div>
          <motion.div variants={slideUp}>
            <div className="flex items-center gap-3 mb-4">
              <Building className="text-blue-900 w-8 h-8" />
              <h2 className="text-3xl font-bold text-blue-900">About IntegrityCircle</h2>
            </div>
            <p className="text-gray-700 text-lg">
              Founded in 2022, IntegrityCircle represents a collective commitment to
              transforming organizational ethics and governance across the region.
            </p>
          </motion.div>
        </motion.div>
      </div>

      {/* Project Highlights Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Sparkles className="text-blue-900 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900">Project Highlights</h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-3 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {projects.map((project, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={scaleIn}
                transition={{ duration: 0.3 }}
              >
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-xl font-bold text-blue-900">{project.title}</h3>
                  <span className={`px-3 py-1 rounded-full text-sm ${
                    project.status === 'Ongoing' ? 'bg-green-100 text-green-800' :
                    project.status === 'Completed' ? 'bg-blue-100 text-blue-800' :
                    'bg-yellow-100 text-yellow-800'
                  }`}>
                    {project.status}
                  </span>
                </div>
                <p className="text-gray-600 mb-3">{project.description}</p>
                <div className="text-sm text-gray-500">
                  <p className="mb-2">📍 {project.county}</p>
                  <p>👥 {project.impact}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* News Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="flex items-center gap-3 mb-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <Newspaper className="text-blue-900 w-8 h-8" />
          <h2 className="text-3xl font-bold text-blue-900">Latest News</h2>
        </motion.div>
        <motion.div 
          className="grid md:grid-cols-2 gap-8"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {news.map((item, index) => (
            <motion.div 
              key={index} 
              className="border-l-4 border-blue-900 pl-4"
              variants={slideUp}
            >
              <h3 className="text-xl font-bold text-blue-900 mb-2">{item.title}</h3>
              <p className="text-gray-600 mb-2">{item.summary}</p>
              <div className="flex justify-between text-sm text-gray-500">
                <span>📍 {item.county}</span>
                <span>{item.date}</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* County Impact Section */}
      <div className="bg-blue-900 text-white py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Activity className="w-8 h-8" />
            <h2 className="text-3xl font-bold">County Impact</h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {countyHighlights.map((county, index) => (
              <motion.div 
                key={index} 
                className="bg-blue-800 p-6 rounded-lg"
                variants={scaleIn}
              >
                <h3 className="text-xl font-bold mb-4">{county.county} County</h3>
                <ul className="space-y-2 mb-4">
                  {county.achievements.map((achievement, idx) => (
                    <motion.li 
                      key={idx} 
                      className="flex items-start gap-2"
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: idx * 0.1 }}
                    >
                      <span className="text-blue-300">✓</span>
                      {achievement}
                    </motion.li>
                  ))}
                </ul>
                <div className="flex justify-between text-blue-300 text-sm mt-4">
                  <span>{county.ongoingProjects} Active Projects</span>
                  <span>{county.beneficiaries}</span>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Founders Section */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-4">
          <motion.div 
            className="flex items-center gap-3 mb-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
          >
            <Users className="text-blue-900 w-8 h-8" />
            <h2 className="text-3xl font-bold text-blue-900">Our Leadership</h2>
          </motion.div>
          <motion.div 
            className="grid md:grid-cols-2 gap-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={stagger}
          >
            {founders.map((founder, index) => (
              <motion.div 
                key={index} 
                className="bg-white p-6 rounded-lg shadow-md"
                variants={scaleIn}
              >
                <h3 className="text-xl font-bold text-blue-900 mb-2">{founder.name}</h3>
                <p className="text-blue-900 font-medium mb-3">{founder.role}</p>
                <p className="text-gray-600">{founder.description}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Coverage Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="grid md:grid-cols-2 gap-12"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
        >
          {/* Countries */}
          <motion.div variants={slideUp}>
            <div className="flex items-center gap-3 mb-6">
              <Globe className="text-blue-900 w-8 h-8" />
              <h2 className="text-3xl font-bold text-blue-900">Countries</h2>
            </div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={stagger}
            >
              {countries.map((country, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 text-gray-700"
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <MapPin className="w-4 h-4 text-blue-900" />
                  <span>{country}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
          
          {/* Counties */}
          <motion.div variants={slideUp}>
            <div className="flex items-center gap-3 mb-6">
              <MapPin className="text-blue-900 w-8 h-8" />
              <h2 className="text-3xl font-bold text-blue-900">Counties</h2>
            </div>
            <motion.div 
              className="grid grid-cols-2 gap-4"
              variants={stagger}
            >
              {counties.map((county, index) => (
                <motion.div 
                  key={index} 
                  className="flex items-center gap-2 text-gray-700"
                  variants={fadeIn}
                  transition={{ delay: index * 0.1 }}
                >
                  <MapPin className="w-4 h-4 text-blue-900" />
                  <span>{county}</span>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default AboutUsSection;