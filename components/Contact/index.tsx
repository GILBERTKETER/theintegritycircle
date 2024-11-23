"use client"
import React, { useState, ReactNode } from 'react';
import { motion } from 'framer-motion';
import {
    Mail,
    Phone,
    MapPin,
    Clock,
    Send,
    CheckCircle,
    User,
    AtSign,
    Building,
    MessageSquare
} from 'lucide-react';
interface InputWrapperProps {
    children: ReactNode;
}
const ContactUs = () => {
    const [submitted, setSubmitted] = useState(false);
    const [focused, setFocused] = useState("");

    const offices = [
        {
            city: "Nairobi",
            address: "Integrity House, 4th Floor\n123 Kimathi Street\nNairobi, Kenya",
            phone: "+254 20 1234567",
            email: "nairobi@integritycircle.org",
            hours: "Monday - Friday: 8:00 AM - 5:00 PM"
        },
        {
            city: "Mombasa",
            address: "Coast Plaza, 2nd Floor\n45 Ocean Road\nMombasa, Kenya",
            phone: "+254 41 9876543",
            email: "mombasa@integritycircle.org",
            hours: "Monday - Friday: 8:00 AM - 5:00 PM"
        }
    ];

    const departments = [
        {
            name: "General Inquiries",
            email: "info@integritycircle.org",
            response: "Within 24 hours"
        },
        {
            name: "Complaints Department",
            email: "complaints@integritycircle.org",
            response: "Within 48 hours"
        },
        {
            name: "Media Relations",
            email: "media@integritycircle.org",
            response: "Within 24 hours"
        },
        {
            name: "Partnerships",
            email: "partners@integritycircle.org",
            response: "Within 48 hours"
        }
    ];

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setSubmitted(true);
    };


    const InputWrapper: React.FC<InputWrapperProps> = ({ children }) => (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
        >
            {children}
        </motion.div>
    );

    const renderInput = (name: string, type: string, placeholder: string, icon: React.ReactNode) => (
        <div className="relative">
            <div className={`absolute left-3 top-9 transition-all duration-300 ${focused === name ? "text-blue-600" : "text-gray-400"
                }`}>
                {icon}
            </div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
                {placeholder}
            </label>
            <input
                type={type}
                name={name}
                required
                onFocus={() => setFocused(name)}
                onBlur={() => setFocused("")}
                className={`
                    pl-10 pr-4 py-2 w-full rounded-lg border 
                    transition-all duration-300
                    ${focused === name
                        ? "border-blue-600 ring-2 ring-blue-100"
                        : "border-gray-300 hover:border-gray-400"
                    }
                    focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                    bg-white shadow-sm
                `}
                placeholder={`Enter your ${placeholder.toLowerCase()}`}
            />
        </div>
    );

    const renderSuccessMessage = () => (
        <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-8"
        >
            <motion.div
                className="flex justify-center"
                animate={{ rotate: 360 }}
                transition={{ duration: 0.5 }}
            >
                <CheckCircle className="h-16 w-16 text-green-500" />
            </motion.div>
            <h2 className="mt-4 text-2xl font-bold text-gray-900">Message Sent Successfully</h2>
            <p className="mt-2 text-gray-600">
                We will get back to you within 24 hours.
            </p>
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                onClick={() => setSubmitted(false)}
                className="mt-6 inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800"
            >
                Send Another Message
            </motion.button>
        </motion.div>
    );

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="min-h-screen bg-gray-50"
        >
            {/* Hero Section */}
            <motion.div
                initial={{ y: -50 }}
                animate={{ y: 0 }}
                className="bg-blue-900 text-white py-16"
            >
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
                    <p className="text-xl max-w-2xl mx-auto">
                        We are here to help and answer any questions you might have.
                        Reach out to us through any of the channels below.
                    </p>
                </div>
            </motion.div>

            {/* Quick Contact Cards */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-3 gap-8 -mt-20">
                    {[
                        { icon: <Phone />, title: "Call Us", content: ["Toll-free: 0800 123 456", "Direct: +254 20 123 4567"] },
                        { icon: <Mail />, title: "Email Us", content: ["info@integritycircle.org", "support@integritycircle.org"] },
                        { icon: <Clock />, title: "Working Hours", content: ["Monday - Friday", "8:00 AM - 5:00 PM"] }
                    ].map((card, index) => (
                        <motion.div
                            key={card.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            whileHover={{ y: -5 }}
                            className="bg-white rounded-lg shadow-lg p-6 text-center"
                        >
                            <div className="flex justify-center mb-4">
                                <motion.div
                                    whileHover={{ scale: 1.1 }}
                                    className="bg-blue-100 p-3 rounded-full"
                                >
                                    <div className="h-6 w-6 text-blue-900">
                                        {card.icon}
                                    </div>
                                </motion.div>
                            </div>
                            <h3 className="text-lg font-semibold mb-2">{card.title}</h3>
                            {card.content.map((line, i) => (
                                <p key={i} className="text-gray-600">{line}</p>
                            ))}
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Main Content */}
            <div className="container mx-auto px-4 py-12">
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Form */}
                    <motion.div
                        initial={{ x: -50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                        {!submitted ? (
                            <form onSubmit={handleSubmit} className="space-y-6">
                                <div className="grid md:grid-cols-2 gap-6">

                                    <InputWrapper>
                                        {renderInput("firstName", "text", "First Name", <User className="h-5 w-5" />)}
                                    </InputWrapper>
                                    <InputWrapper>
                                        {renderInput("lastName", "text", "Last Name", <User className="h-5 w-5" />)}
                                    </InputWrapper>
                                </div>

                                <InputWrapper>
                                    {renderInput("email", "email", "Email Address", <AtSign className="h-5 w-5" />)}
                                </InputWrapper>


                                <InputWrapper>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Department
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-2.5 text-gray-400">
                                            <Building className="h-5 w-5" />
                                        </div>
                                        <select
                                            title="Department"
                                            required
                                            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 
                                                     focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                                                     hover:border-gray-400 transition-all duration-300"
                                        >
                                            <option value="">Select Department</option>
                                            {departments.map((dept) => (
                                                <option key={dept.name} value={dept.name}>{dept.name}</option>
                                            ))}
                                        </select>
                                    </div>
                                </InputWrapper>

                                <InputWrapper>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">
                                        Message
                                    </label>
                                    <div className="relative">
                                        <div className="absolute left-3 top-3 text-gray-400">
                                            <MessageSquare className="h-5 w-5" />
                                        </div>
                                        <textarea
                                            required
                                            rows={4}
                                            className="pl-10 pr-4 py-2 w-full rounded-lg border border-gray-300 
                                                     focus:outline-none focus:border-blue-600 focus:ring-2 focus:ring-blue-100
                                                     hover:border-gray-400 transition-all duration-300"
                                            placeholder="Your message here"
                                        />
                                    </div>
                                </InputWrapper>

                                <motion.button
                                    type="submit"
                                    whileHover={{ scale: 1.02 }}
                                    whileTap={{ scale: 0.98 }}
                                    className="w-full flex justify-center py-3 px-4 border border-transparent 
                                             rounded-lg shadow-sm text-sm font-medium text-white bg-blue-900 
                                             hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 
                                             focus:ring-blue-900 transition-all duration-300"
                                >
                                    <Send className="h-4 w-4 mr-2" />
                                    Send Message
                                </motion.button>
                            </form>
                        ) : (
                            renderSuccessMessage()
                        )}
                    </motion.div>

                    {/* Office Locations */}
                    <motion.div
                        initial={{ x: 50, opacity: 0 }}
                        animate={{ x: 0, opacity: 1 }}
                        transition={{ delay: 0.3 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-6">Our Offices</h2>
                        <div className="space-y-6">
                            {offices.map((office, index) => (
                                <motion.div
                                    key={office.city}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ delay: 0.4 + index * 0.1 }}
                                    whileHover={{ y: -5 }}
                                    className="bg-white rounded-lg shadow-md p-6"
                                >
                                    <h3 className="text-xl font-semibold text-blue-900 mb-4">
                                        {office.city} Office
                                    </h3>
                                    <div className="space-y-4">
                                        <div className="flex items-start">
                                            <MapPin className="h-5 w-5 text-blue-900 mt-1 mr-3" />
                                            <p className="text-gray-600 whitespace-pre-line">{office.address}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Phone className="h-5 w-5 text-blue-900 mr-3" />
                                            <p className="text-gray-600">{office.phone}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Mail className="h-5 w-5 text-blue-900 mr-3" />
                                            <p className="text-gray-600">{office.email}</p>
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="h-5 w-5 text-blue-900 mr-3" />
                                            <p className="text-gray-600">{office.hours}</p>
                                        </div>
                                    </div>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>

            {/* Department Directory */}
            <div className="bg-gray-100 py-12">
                <div className="container mx-auto px-4">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Department Directory</h2>
                    <div className="grid md:grid-cols-4 gap-6">
                        {departments.map((dept, index) => (
                            <motion.div
                                key={dept.name}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: 0.5 + index * 0.1 }}
                                whileHover={{ y: -5 }}
                                className="bg-white rounded-lg shadow-sm p-6"
                            >
                                <h3 className="text-lg font-semibold text-blue-900 mb-2">{dept.name}</h3>
                                <div className="space-y-2">
                                    <div className="flex items-center text-gray-600">
                                        <Mail className="h-4 w-4 mr-2" />
                                        <span className="text-sm">{dept.email}</span>
                                    </div>
                                    <div className="flex items-center text-gray-600">
                                        <Clock className="h-4 w-4 mr-2" />
                                        <span className="text-sm">Response: {dept.response}</span>
                                    </div>
                                </div>
                            </motion.div>

                        ))}
                    </div>
                </div>
            </div>
        </motion.div>
    );
};

export default ContactUs;