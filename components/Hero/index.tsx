"use client"

import React, { useState, useEffect } from 'react';
import { ArrowRight, Shield, Users, LineChart, ChevronRight } from 'lucide-react';
import { motion } from 'framer-motion';

interface StatType {
  value: string;
  label: string;
  prefix?: string;
  suffix?: string;
}

const Hero = () => {
  const [isVisible, setIsVisible] = useState(false);

  const stats: StatType[] = [
    { value: "2.5M", label: "Citizens Engaged", prefix: "+" },
    { value: "94", label: "Counties Covered", suffix: "%" },
    { value: "15K", label: "Cases Resolved", prefix: ">" },
    { value: "850", label: "Active Volunteers", prefix: "+" },
  ];

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="relative bg-white overflow-hidden">
      {/* Background Pattern */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-white" />
        <div className="absolute inset-y-0 right-0 w-1/2 bg-blue-50/30" />
        <div className="absolute bottom-0 right-0 w-full h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
      </div>

      <div className="relative">
        <div className="w-full mx-auto">
          <div className="relative z-10 pb-8  sm:pb-16 md:pb-20 lg:pb-28 xl:pb-32">
            <main className=" mx-auto w-full">
              <div className="grid lg:grid-cols-2 gap-12 items-center">
                {/* Left Column - Text Content */}
                <div className="sm:text-center lg:text-left p-6 lg:pl-20">
                  <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5 }}
                    className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl"
                  >
                    <span className="block">Building a Culture of</span>
                    <span className="block text-blue-900">Integrity & Transparency</span>
                  </motion.h1>

                  <motion.p
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                    className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto lg:mx-0"
                  >
                    Empowering citizens and organizations to promote accountability,
                    prevent corruption, and build stronger communities through
                    transparency and ethical governance.
                  </motion.p>

                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className="mt-8 sm:flex sm:justify-center lg:justify-start space-y-4 sm:space-y-0 sm:space-x-4"
                  >
                    <button
                      type="button"
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-lg text-white bg-blue-900 hover:bg-blue-800 transition duration-150 ease-in-out shadow-sm"
                    >
                      Report Corruption
                      <ArrowRight className="ml-2 h-5 w-5" />
                    </button>
                    <button
                      type="button"
                      className="w-full sm:w-auto flex items-center justify-center px-8 py-3 border border-blue-900 text-base font-medium rounded-lg text-blue-900 bg-white hover:bg-blue-50 transition duration-150 ease-in-out"
                    >
                      Learn More
                      <ChevronRight className="ml-2 h-5 w-5" />
                    </button>
                  </motion.div>
                </div>

                {/* Right Column - Image/Video */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: isVisible ? 1 : 0, x: isVisible ? 0 : 20 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  className="relative h-[50vh]"
                >
                  <div className="absolute inset-0 bg-blue-900/5 rounded-2xl overflow-hidden">
                    <video
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="w-full h-full object-cover mix-blend-overlay opacity-90"
                    >
                      <source src="/video/integrity.mp4" type="video/mp4" />
                    </video>
                    <div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent" />
                  </div>
                </motion.div>

              </div>

              {/* Stats Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 0.8 }}
                className="mt-24 max-w-7xl p-4 mx-auto grid grid-cols-2 gap-6 md:grid-cols-4"
              >
                {stats.map((stat) => (
                  <div
                    key={stat.label}
                    className="px-4 py-6 bg-white shadow-lg rounded-lg text-center"
                  >
                    <div className="text-2xl font-bold text-blue-900">
                      {stat.prefix}{stat.value}{stat.suffix}
                    </div>
                    <div className="mt-1 text-sm text-gray-500">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </motion.div>

              {/* Features Section */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: isVisible ? 1 : 0, y: isVisible ? 0 : 20 }}
                transition={{ duration: 0.5, delay: 1 }}
                className="mt-24 max-w-7xl p-4 mx-auto grid grid-cols-1 md:grid-cols-3 gap-8"
              >
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Shield className="h-8 w-8 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Protected Reporting
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Secure and anonymous channels for reporting corruption.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <Users className="h-8 w-8 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Community Engagement
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Connect with active citizens and organizations.
                    </p>
                  </div>
                </div>

                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0">
                    <LineChart className="h-8 w-8 text-blue-900" />
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900">
                      Impact Tracking
                    </h3>
                    <p className="mt-2 text-gray-500">
                      Monitor progress and measure community impact.
                    </p>
                  </div>
                </div>
              </motion.div>
            </main>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;