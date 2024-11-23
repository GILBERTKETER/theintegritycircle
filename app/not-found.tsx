"use client"

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Home } from 'lucide-react';
import Image from 'next/image';
const NotFound = () => {
  const router = useRouter();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-50">
      <div className="max-w-2xl w-full text-center space-y-8">
        {/* Video/Animation */}
        <div className="relative w-full aspect-video max-w-md mx-auto">
          <Image alt="404 error image" src="/images/404.webp" width={500} height={500} className="w-full h-full object-cover rounded-lg"/>
         
        </div>

        {/* Error Message */}
        <div className="space-y-4">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
            Oops! Page Not Found
          </h1>
          <p className="text-lg text-gray-600 max-w-md mx-auto">
            The page you are looking for seems to have taken a different path. 
            Lets get you back on track.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <button
            onClick={() => router.back()}
            className="px-6 py-3 text-gray-700 bg-white border border-gray-300 rounded-lg hover:bg-gray-50 transition duration-200 w-full sm:w-auto"
            type="button"
          >
            Go Back
          </button>
          
          <Link 
            href="/"
            className="px-6 py-3 bg-blue-900 text-white rounded-lg hover:bg-blue-800 transition duration-200 flex items-center justify-center gap-2 w-full sm:w-auto"
          >
            <Home className="w-5 h-5" />
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;