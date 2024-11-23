"use client"
import React, { useState } from 'react';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

interface SignInProps {
    onSubmit: (email: string, password: string) => void;
}

function ForgotPassword({ onSubmit }: SignInProps) {
    const [email, setEmail] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { 
            opacity: 1,
            transition: { 
                duration: 0.5,
                when: "beforeChildren",
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: { 
            y: 0, 
            opacity: 1,
            transition: { type: "spring", stiffness: 300, damping: 24 }
        }
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);
        setError('');

        try {
            await onSubmit(email, '');
            setSuccess(true);
        } catch (error: unknown) {
            console.error('Error sending reset link:', error);
            setError('Failed to send reset link. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <motion.div 
            className="min-h-screen bg-gray-50 flex flex-col justify-center py-12 sm:px-6 lg:px-8"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
        >
            <motion.div 
                className="sm:mx-auto sm:w-full sm:max-w-md"
                variants={itemVariants}
            >
                <div className="text-center">
                    <motion.div
                        initial={{ scale: 0 }}
                        animate={{ scale: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                    >
                        <Mail className="mx-auto h-12 w-12 text-blue-900" />
                    </motion.div>
                    <motion.h2 
                        className="mt-6 text-3xl font-extrabold text-gray-900"
                        variants={itemVariants}
                    >
                        Reset your password
                    </motion.h2>
                    <motion.p 
                        className="mt-2 text-sm text-gray-600"
                        variants={itemVariants}
                    >
                        Enter your email address and we will send you a link to reset your password
                    </motion.p>
                </div>
            </motion.div>

            <motion.div 
                className="mt-8 sm:mx-auto sm:w-full sm:max-w-md"
                variants={itemVariants}
            >
                <motion.div 
                    className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                >
                    {success ? (
                        <motion.div 
                            className="rounded-md bg-green-50 p-4"
                            initial={{ opacity: 0, scale: 0.95 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ type: "spring", stiffness: 300, damping: 25 }}
                        >
                            <div className="flex">
                                <div className="ml-3">
                                    <h3 className="text-sm font-medium text-green-800">
                                        Reset link sent
                                    </h3>
                                    <div className="mt-2 text-sm text-green-700">
                                        Please check your email for instructions to reset your password.
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.form 
                            className="space-y-6" 
                            onSubmit={handleSubmit}
                            variants={itemVariants}
                        >
                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="email"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Email address
                                </label>
                                <div className="mt-1">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm"
                                        placeholder="Enter your email"
                                    />
                                </div>
                            </motion.div>

                            {error && (
                                <motion.div 
                                    className="rounded-md bg-red-50 p-4"
                                    initial={{ opacity: 0, x: -20 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    transition={{ type: "spring", stiffness: 300, damping: 25 }}
                                >
                                    <div className="text-sm text-red-700">{error}</div>
                                </motion.div>
                            )}

                            <motion.div variants={itemVariants}>
                                <button
                                    type="submit"
                                    disabled={isLoading}
                                    className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900 disabled:opacity-50 disabled:cursor-not-allowed"
                                >
                                    {isLoading ? 'Sending...' : 'Send reset link'}
                                </button>
                            </motion.div>

                            <motion.div 
                                className="text-sm text-center"
                                variants={itemVariants}
                            >
                                <a
                                    href="/auth/signin"
                                    className="font-medium text-blue-900 hover:text-blue-800"
                                >
                                    Return to sign in
                                </a>
                            </motion.div>
                        </motion.form>
                    )}
                </motion.div>
            </motion.div>
        </motion.div>
    );
}

export default ForgotPassword;