"use client";
import React from "react";
import { UserPlus, Mail, Lock, User, Chrome } from "lucide-react";
import { motion } from "framer-motion";

interface SignUpProps {
  onSubmit: (name: string, email: string, password: string) => void;
  onGoogleSignUp: () => void;
}

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const slideUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const SignUp = ({ onSubmit, onGoogleSignUp }: SignUpProps) => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(name, email, password);
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="min-h-screen flex flex-col lg:flex-row items-center justify-start bg-gray-50 "
    > <motion.div
      variants={fadeIn}
      transition={{ duration: 0.5 }}
      className="flex justify-center lg:w-3/4 w-full h-full lg:h-screen"
    >
        <img
          src="/images/signup.jpg" // Replace with your image path
          alt="Sign Up Illustration"
          className="object-cover h-full w-full"
        />
      </motion.div>
      <motion.div
        variants={slideUp}
        className="max-w-md w-full lg:pl-12 lg:pr-6 lg:h-screen p-10 flex flex-col justify-center space-y-8"
      >

        {/* Heading */}
        <motion.div variants={slideUp} transition={{ duration: 0.5 }}>
          <h2 className="mt-6 text-center text-3xl font-extrabold text-blue-900">
            Create your account
          </h2>
        </motion.div>

        {/* Form */}
        <form className="mt-8 space-y-6" onSubmit={handleSubmit}>
          <motion.div
            className="rounded-md shadow-sm space-y-4"
            variants={slideUp}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            {/* Name Field */}
            <div>
              <label htmlFor="name" className="sr-only">
                Full Name
              </label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <User className="h-5 w-5 text-gray-400" />
                </div>
                <motion.input
                  whileFocus={{ scale: 1.01 }}
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="appearance-none rounded-lg relative block w-full pl-10 pr-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-blue-900 focus:border-blue-900 focus:z-10 sm:text-sm"
                  placeholder="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
            </div>

            {/* Email Field */}
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

            {/* Password Field */}
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

          {/* Submit Button */}
          <motion.div variants={slideUp} transition={{ duration: 0.5, delay: 0.4 }}>
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="submit"
              className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-blue-900 hover:bg-blue-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            >
              <span className="absolute left-0 inset-y-0 flex items-center pl-3">
                <UserPlus className="h-5 w-5 text-blue-100 group-hover:text-blue-200" />
              </span>
              Sign up
            </motion.button>
          </motion.div>

          {/* Google Sign-Up Button */}
          <motion.div
            className="mt-6"
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            <motion.button
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              type="button"
              onClick={onGoogleSignUp}
              className="w-full flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-900"
            >
              <Chrome className="h-5 w-5 text-gray-400 mr-2" />
              Sign up with Google
            </motion.button>
          </motion.div>

          {/* Sign-In Section */}
          <motion.div
            variants={fadeIn}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="flex flex-col items-center space-y-4 mt-4"
          >
            <motion.a
              whileHover={{ scale: 1.05, color: "#3b82f6" }}
              whileTap={{ scale: 0.95 }}
              href="/auth/signin"
              className="text-sm font-medium text-blue-900 hover:text-blue-700"
            >
              Already have an account? <span className="font-semibold">Sign In</span>
            </motion.a>
          </motion.div>
        </form>
      </motion.div>
    </motion.div>
  );
};

export default SignUp;
