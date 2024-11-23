"use client"
import React from 'react';
import { LogIn, Mail, Lock, Chrome } from 'lucide-react';
import { motion } from 'framer-motion';

interface SignInProps {
  onSubmit: (email: string, password: string) => void;
  onGoogleSignIn: () => void;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 }
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 }
};

const SignIn = ({ onSubmit, onGoogleSignIn }: SignInProps) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(email, password);
  };

  return (
    <motion.div 
      initial="hidden"
      animate="visible"
      className="min-h-screen flex items-center justify-center bg-gray-50 py-12 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-md w-full space-y-8">
        <motion.div
          variants={slideUp}
          transition={{ duration: 0.5 }}
        >
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">
            Sign in to your account
          </h2>
        </motion.div>
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <motion.div 
            className="rounded-md shadow-sm space-y-4"
            variants={slideUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <div>
              <label htmlFor="email" className="sr-only">
                Email address
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Mail className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-900 focus:border-blue-900 focus:z-10 sm:text-sm"
                  placeholder="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Lock className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  id="password"
                  name="password"
                  type="password"
                  required
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-900 focus:border-blue-900 focus:z-10 sm:text-sm"
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </div>
            </div>
          </motion.div>

          <motion.div
            variants={slideUp}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <LogIn className="h-5 w-5 text-blue-100 group-hover:text-blue-200" />
              </span>
              Sign in
            </motion.button>
          </motion.div>

          <motion.div 
            className="mt-6"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300" />
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-gray-50 text-gray-500">
                  Or continue with
                </span>
              </div>
            </div>

            <div className="mt-6">
              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="button"
                onClick={onGoogleSignIn}
                className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
              >
                <Chrome className="h-5 w-5 text-gray-400 mr-2" />
                Sign in with Google
              </motion.button>
            </div>
          </motion.div>
        </form>
      </div>
    </motion.div>
  );
};

export default SignIn;