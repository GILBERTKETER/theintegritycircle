"use client"
import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Shield, AlertCircle, Upload, Lock, CheckCircle } from 'lucide-react';

// Animation variants
const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { duration: 0.5 } }
};

const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
        opacity: 1,
        transition: {
            staggerChildren: 0.1
        }
    }
};

interface ComplaintCategory {
    id: string;
    name: string;
    description: string;
}

const ComplaintForm = () => {
    const [submitted, setSubmitted] = useState(false);
    const [currentStep, setCurrentStep] = useState(1);

    const categories: ComplaintCategory[] = [
        {
            id: "corruption",
            name: "Corruption",
            description: "Misuse of public resources or position for private gain"
        },
        {
            id: "misconduct",
            name: "Professional Misconduct",
            description: "Violations of professional ethics and standards"
        },
        {
            id: "fraud",
            name: "Fraud",
            description: "Deliberate deception for financial or personal gain"
        },
        {
            id: "harassment",
            name: "Harassment",
            description: "Unwanted behavior affecting dignity or creating hostile environment"
        }
    ];

    const renderStep1 = () => (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={fadeIn}>
                <div className="flex items-center gap-2 p-4 bg-yellow-50 border border-yellow-200 rounded-lg text-yellow-800">
                    <AlertCircle className="h-4 w-4" />
                    <p className="text-sm">
                        Please ensure your complaint is factual and supported by evidence where possible.
                        False complaints may have legal consequences.
                    </p>
                </div>
            </motion.div>

            <motion.div className="space-y-4" variants={containerVariants}>
                <motion.div variants={slideUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Complaint Category*
                    </label>
                    <select
                        required
                        title='Category'
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select a category</option>
                        {categories.map((category) => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </select>
                </motion.div>

                <motion.div variants={slideUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        County/Region*
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter county or region"
                    />
                </motion.div>

                <motion.div variants={slideUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Institution/Organization Involved*
                    </label>
                    <input
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                        placeholder="Enter institution name"
                    />
                </motion.div>
            </motion.div>
        </motion.div>
    );

    const renderStep2 = () => (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={slideUp}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Complaint Details*
                </label>
                <textarea
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    rows={6}
                    placeholder="Provide detailed information about your complaint..."
                />
            </motion.div>

            <motion.div variants={slideUp}>
                <label className="block text-sm font-medium text-gray-700 mb-1">
                    Date of Incident*
                </label>
                <input
                    required
                    placeholder='Date'
                    type="date"
                    className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </motion.div>

            <motion.div variants={slideUp} className="space-y-2">
                <label className="block text-sm font-medium text-gray-700">
                    Supporting Documents
                </label>
                <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-blue-500 transition-colors cursor-pointer">
                    <Upload className="mx-auto h-12 w-12 text-gray-400" />
                    <p className="mt-2 text-sm text-gray-600">
                        Drag and drop files here, or click to select files
                    </p>
                    <p className="mt-1 text-xs text-gray-500">
                        Supports: PDF, DOC, DOCX, JPG, PNG (Max 10MB each)
                    </p>
                </div>
            </motion.div>
        </motion.div>
    );

    const renderStep3 = () => (
        <motion.div
            className="space-y-6"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div variants={fadeIn}>
                <div className="flex items-center gap-2 p-4 bg-blue-50 border border-blue-200 rounded-lg text-blue-800">
                    <Lock className="h-4 w-4" />
                    <p className="text-sm">
                        Your personal information will be kept confidential and only used for complaint processing purposes.
                    </p>
                </div>
            </motion.div>

            <motion.div variants={containerVariants} className="grid md:grid-cols-2 gap-6">
                <motion.div variants={slideUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Full Name*
                    </label>
                    <input
                        required
                        placeholder='Full Name'
                        type="text"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </motion.div>

                <motion.div variants={slideUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Email Address*
                    </label>
                    <input
                        required
                        placeholder='Email Address'
                        type="email"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </motion.div>

                <motion.div variants={slideUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Phone Number
                    </label>
                    <input
                        required
                        placeholder='Phone number'
                        type="tel"
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    />
                </motion.div>

                <motion.div variants={slideUp}>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        Preferred Contact Method*
                    </label>
                    <select
                        title='Department'
                        className="w-full p-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                    >
                        <option value="">Select contact method</option>
                        <option value="email">Email</option>
                        <option value="phone">Phone</option>
                    </select>
                </motion.div>
            </motion.div>

            <motion.div variants={slideUp} className="mt-4">
                <div className="flex items-start space-x-2">
                    <input
                        required
                        placeholder='Declare'
                        type="checkbox"
                        className="mt-1"
                    />
                    <label className="text-sm text-gray-600 leading-normal">
                        I declare that the information provided is true and accurate to the best of my knowledge.
                        I understand that submitting false information may lead to legal consequences.
                    </label>
                </div>
            </motion.div>
        </motion.div>
    );

    const renderSuccessMessage = () => (
        <motion.div
            className="text-center py-12"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div
                className="flex justify-center"
                variants={fadeIn}
            >
                <CheckCircle className="h-16 w-16 text-green-500" />
            </motion.div>
            <motion.h2
                variants={slideUp}
                className="mt-4 text-2xl font-bold text-gray-900"
            >
                Complaint Submitted Successfully
            </motion.h2>
            <motion.p
                variants={slideUp}
                className="mt-2 text-gray-600"
            >
                Your complaint reference number is: <span className="font-bold">IC-2024-0123</span>
            </motion.p>
            <motion.p
                variants={slideUp}
                className="mt-4 text-gray-600"
            >
                We will review your complaint and contact you within 48 hours through your preferred contact method.
            </motion.p>
            <motion.button
                variants={slideUp}
                onClick={() => {
                    setSubmitted(false);
                    setCurrentStep(1);
                }}
                className="mt-8 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
            >
                Submit Another Complaint
            </motion.button>
        </motion.div>
    );

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                {!submitted ? (
                    <>
                        <motion.div
                            className="max-w-3xl mx-auto text-center mb-12"
                            initial="hidden"
                            animate="visible"
                            variants={containerVariants}
                        >
                            <motion.div
                                className="flex justify-center mb-4"
                                variants={fadeIn}
                            >
                                <Shield className="h-12 w-12 text-blue-900" />
                            </motion.div>
                            <motion.h1
                                variants={slideUp}
                                className="text-3xl font-bold text-gray-900 mb-4"
                            >
                                File a Complaint
                            </motion.h1>
                            <motion.p
                                variants={slideUp}
                                className="text-gray-600 max-w-2xl mx-auto"
                            >
                                Your voice matters in maintaining integrity. Submit your complaint using the form below.
                                All submissions are confidential and will be handled with utmost discretion.
                            </motion.p>
                        </motion.div>

                        <motion.div
                            className="max-w-3xl mx-auto mb-8"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <div className="flex justify-between">
                                {[1, 2, 3].map((step) => (
                                    <motion.div
                                        key={step}
                                        className={`flex-1 ${step !== 3 ? 'border-b-2' : ''} ${step <= currentStep ? 'border-blue-900' : 'border-gray-200'
                                            }`}
                                        whileHover={{ scale: 1.02 }}
                                    >
                                        <div className="flex items-center">
                                            <div className={`w-8 h-8 rounded-full flex items-center justify-center ${step <= currentStep ? 'bg-blue-900 text-white' : 'bg-gray-200'
                                                }`}>
                                                {step}
                                            </div>
                                            <div className="ml-2">
                                                <p className={`text-sm ${step <= currentStep ? 'text-blue-900' : 'text-gray-500'
                                                    }`}>
                                                    {step === 1 ? 'Basic Info' :
                                                        step === 2 ? 'Complaint Details' :
                                                            'Contact Info'}
                                                </p>
                                            </div>
                                        </div>
                                    </motion.div>
                                ))}
                            </div>
                        </motion.div>

                        <motion.div
                            className="max-w-3xl mx-auto"
                            initial="hidden"
                            animate="visible"
                            variants={fadeIn}
                        >
                            <form onSubmit={handleSubmit} className="bg-white shadow-md rounded-lg p-8">
                                {currentStep === 1 && renderStep1()}
                                {currentStep === 2 && renderStep2()}
                                {currentStep === 3 && renderStep3()}

                                <motion.div
                                    className="mt-8 flex justify-between"
                                    variants={slideUp}
                                >
                                    {currentStep > 1 && (
                                        <motion.button
                                            type="button"
                                            onClick={() => setCurrentStep(currentStep - 1)}
                                            className="inline-flex items-center px-4 py-2 border border-gray-300 text-sm font-medium rounded-md text-gray-700 bg-white hover:bg-gray-50"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Previous
                                        </motion.button>
                                    )}
                                    {currentStep < 3 ? (
                                        <motion.button
                                            type="button"
                                            onClick={() => setCurrentStep(currentStep + 1)}
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Next
                                        </motion.button>
                                    ) : (
                                        <motion.button
                                            type="submit"
                                            className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
                                            whileHover={{ scale: 1.02 }}
                                            whileTap={{ scale: 0.98 }}
                                        >
                                            Submit Complaint
                                        </motion.button>
                                    )}
                                </motion.div>
                            </form>
                        </motion.div>
                    </>
                ) : (
                    renderSuccessMessage()
                )}
            </div>
        </div>
    );
};

export default ComplaintForm;