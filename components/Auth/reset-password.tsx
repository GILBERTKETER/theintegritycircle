"use client"
import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';
import { motion } from 'framer-motion';

interface ResetPasswordProps {
    onSubmit: (newPassword: string, tokenData?:string) => void;
    token?: string;
}

function ResetPassword({ onSubmit, token }: ResetPasswordProps) {
    const [newPassword, setNewPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const [success, setSuccess] = useState(false);
    const [error, setError] = useState('');
    const [showNewPassword, setShowNewPassword] = useState(false);
    const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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

    const validatePasswords = () => {
        if (newPassword.length < 8) {
            setError('Password must be at least 8 characters long');
            return false;
        }
        if (newPassword !== confirmPassword) {
            setError('Passwords do not match');
            return false;
        }
        return true;
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validatePasswords()) return;

        setIsLoading(true);
        setError('');

        try {
            await onSubmit(newPassword, token);
            setSuccess(true);
        } catch (error: unknown) {
            console.error('Error resetting password:', error);
            setError('Failed to reset password. Please try again.');
        } finally {
            setIsLoading(false);
        }
    };

    const PasswordInput = ({ 
        id, 
        value, 
        onChange, 
        placeholder, 
        showPassword, 
        togglePassword 
    }: {
        id: string;
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        placeholder: string;
        showPassword: boolean;
        togglePassword: () => void;
    }) => (
        <div className="relative mt-1">
            <input
                id={id}
                name={id}
                type={showPassword ? "text" : "password"}
                required
                value={value}
                onChange={onChange}
                className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-blue-900 focus:border-blue-900 sm:text-sm pr-10"
                placeholder={placeholder}
            />
            <div 
                onClick={(e) => {
                    e.preventDefault();
                    togglePassword();
                }}
                className="absolute inset-y-0 right-0 pr-3 flex items-center cursor-pointer"
            >
                <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="text-gray-400 hover:text-gray-500"
                >
                    {showPassword ? 
                        <EyeOff className="h-5 w-5" /> : 
                        <Eye className="h-5 w-5" />
                    }
                </motion.div>
            </div>
        </div>
    );

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
                        <Lock className="mx-auto h-12 w-12 text-blue-900" />
                    </motion.div>
                    <motion.h2 
                        className="mt-6 text-3xl font-extrabold text-gray-900"
                        variants={itemVariants}
                    >
                        Set new password
                    </motion.h2>
                    <motion.p 
                        className="mt-2 text-sm text-gray-600"
                        variants={itemVariants}
                    >
                        Please enter your new password below
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
                                        Password reset successful
                                    </h3>
                                    <div className="mt-2 text-sm text-green-700">
                                        Your password has been successfully reset. You can now sign in with your new password.
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
                                    htmlFor="newPassword"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    New Password
                                </label>
                                <PasswordInput
                                    id="newPassword"
                                    value={newPassword}
                                    onChange={(e) => setNewPassword(e.target.value)}
                                    placeholder="Enter your new password"
                                    showPassword={showNewPassword}
                                    togglePassword={() => setShowNewPassword(!showNewPassword)}
                                />
                            </motion.div>

                            <motion.div variants={itemVariants}>
                                <label
                                    htmlFor="confirmPassword"
                                    className="block text-sm font-medium text-gray-700"
                                >
                                    Confirm Password
                                </label>
                                <PasswordInput
                                    id="confirmPassword"
                                    value={confirmPassword}
                                    onChange={(e) => setConfirmPassword(e.target.value)}
                                    placeholder="Confirm your new password"
                                    showPassword={showConfirmPassword}
                                    togglePassword={() => setShowConfirmPassword(!showConfirmPassword)}
                                />
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
                                    {isLoading ? 'Resetting...' : 'Reset Password'}
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

export default ResetPassword;