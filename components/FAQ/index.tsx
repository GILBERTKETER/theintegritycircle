"use client"
import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ChevronDown, 
  HelpCircle, 
  Search, 
  MessageCircle,
  Phone,
  Mail,
  ExternalLink,
  Coffee
} from 'lucide-react';

const FAQSection = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [expandedId, setExpandedId] = useState<number | null>(null);

  const faqs = [
    {
      id: 1,
      category: "General",
      question: "What services do you provide?",
      answer: "We offer a comprehensive suite of services including software development, cloud solutions, cybersecurity consulting, and digital transformation strategies. Our team specializes in creating custom solutions tailored to your specific business needs."
    },
    {
      id: 2,
      category: "Pricing",
      question: "How is your pricing structured?",
      answer: "Our pricing is transparent and project-based, determined by factors such as scope, complexity, and timeline. We provide detailed quotes after initial consultations to ensure you have a clear understanding of the investment required."
    },
    {
      id: 3,
      category: "Support",
      question: "What kind of support do you offer after project completion?",
      answer: "We provide comprehensive post-project support including 24/7 technical assistance, regular maintenance updates, and dedicated customer success managers to ensure your solution continues to perform optimally."
    },
    {
      id: 4,
      category: "Technical",
      question: "Which technologies do you work with?",
      answer: "We work with a wide range of modern technologies including React, Node.js, Python, AWS, Azure, and more. Our team stays current with the latest technological advances to provide cutting-edge solutions."
    },
    {
      id: 5,
      category: "Process",
      question: "What is your development process?",
      answer: "We follow an agile development methodology with regular client check-ins and iterations. This includes requirements gathering, design sprints, development phases, testing, and deployment, all while maintaining clear communication."
    }
  ];

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
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  const contentVariants = {
    hidden: { height: 0, opacity: 0 },
    visible: { 
      height: "auto",
      opacity: 1,
      transition: { duration: 0.3 }
    }
  };

  const filteredFaqs = faqs.filter(faq =>
    faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
    faq.answer.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <motion.div 
        className="bg-blue-900 text-white py-20"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5 }}
              className="flex justify-center mb-6"
            >
              <HelpCircle className="w-16 h-16" />
            </motion.div>
            <motion.h1 
              className="text-4xl md:text-5xl font-bold mb-6"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              Frequently Asked Questions
            </motion.h1>
            <motion.p 
              className="text-lg md:text-xl text-blue-100 mb-12"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Find answers to common questions about our services and solutions
            </motion.p>
            
            {/* Search Bar */}
            <motion.div 
              className="relative max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" />
              <input
                type="text"
                placeholder="Search your question..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* FAQs Section */}
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          className="max-w-3xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {filteredFaqs.map((faq) => (
            <motion.div
              key={faq.id}
              variants={itemVariants}
              className="mb-4"
            >
              <motion.button
                className={`w-full text-left p-6 rounded-lg bg-white shadow-md hover:shadow-lg transition-shadow duration-200 ${
                  expandedId === faq.id ? 'bg-blue-50' : ''
                }`}
                onClick={() => setExpandedId(expandedId === faq.id ? null : faq.id)}
                whileHover={{ scale: 1.01 }}
                whileTap={{ scale: 0.99 }}
              >
                <div className="flex justify-between items-center">
                  <div className="flex items-center space-x-3">
                    <span className="text-blue-900 text-sm font-medium">
                      {faq.category}
                    </span>
                    <h3 className="text-lg font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expandedId === faq.id ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <ChevronDown className="w-5 h-5 text-blue-900" />
                  </motion.div>
                </div>
                <AnimatePresence>
                  {expandedId === faq.id && (
                    <motion.div
                      variants={contentVariants}
                      initial="hidden"
                      animate="visible"
                      exit="hidden"
                      className="mt-4 text-gray-600 leading-relaxed"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.button>
            </motion.div>
          ))}
        </motion.div>

        {/* Contact Section */}
        <motion.div 
          className="max-w-3xl mx-auto mt-16 text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <div className="p-8 rounded-2xl bg-blue-900 text-white">
            <Coffee className="w-12 h-12 mx-auto mb-6" />
            <h2 className="text-2xl font-bold mb-4">
              Still have questions?
            </h2>
            <p className="text-blue-100 mb-8">
              Cant find what you are looking for? Please contact our support team.
            </p>
            <div className="grid md:grid-cols-3 gap-6">
              <motion.a
                href="#"
                className="flex flex-col items-center p-4 rounded-lg bg-blue-800 hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <MessageCircle className="w-6 h-6 mb-2" />
                <span>Live Chat</span>
              </motion.a>
              <motion.a
                href="#"
                className="flex flex-col items-center p-4 rounded-lg bg-blue-800 hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Phone className="w-6 h-6 mb-2" />
                <span>Call Us</span>
              </motion.a>
              <motion.a
                href="#"
                className="flex flex-col items-center p-4 rounded-lg bg-blue-800 hover:bg-blue-700 transition-colors"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Mail className="w-6 h-6 mb-2" />
                <span>Email</span>
              </motion.a>
            </div>
          </div>
        </motion.div>

        {/* Support Links */}
        <motion.div 
          className="max-w-3xl mx-auto mt-12 flex justify-center space-x-8 text-sm text-gray-600"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.a 
            href="#" 
            className="flex items-center hover:text-blue-900 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Documentation <ExternalLink className="w-4 h-4 ml-1" />
          </motion.a>
          <motion.a 
            href="#" 
            className="flex items-center hover:text-blue-900 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            API Reference <ExternalLink className="w-4 h-4 ml-1" />
          </motion.a>
          <motion.a 
            href="#" 
            className="flex items-center hover:text-blue-900 transition-colors"
            whileHover={{ scale: 1.05 }}
          >
            Status Page <ExternalLink className="w-4 h-4 ml-1" />
          </motion.a>
        </motion.div>
      </div>
    </div>
  );
};

export default FAQSection;