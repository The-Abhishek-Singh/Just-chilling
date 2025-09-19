import React from 'react';
import { Twitter, Instagram, Linkedin, Link2 } from 'lucide-react';

const MotionNotionHero = () => {
  return (
    <div className="min-h-screen bg-[#EEF2FC] flex flex-col">
      {/* Main Hero Content */}
      <div className="flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 py-8 lg:py-12">
        {/* Navigation Breadcrumb - moved inside main content */}
        <div className="max-w-7xl mx-auto w-full mb-8 lg:mb-12">
          <div className="flex items-center text-sm text-gray-600">
            <span className="hover:text-blue-600 cursor-pointer transition-colors">All Blogs</span>
            <span className="mx-2 text-gray-400">›</span>
            <span className="text-blue-600 font-medium">Motion vs Notion Comparison</span>
          </div>
        </div>
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Left Content */}
            <div className="space-y-6 order-2 lg:order-1">
              <div className="space-y-4">
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
                  Motion Vs Notion
                </h1>
                
                <h2 className="text-lg sm:text-xl lg:text-2xl text-gray-700 font-medium">
                  Which is the best productivity tool for you?
                </h2>
                
                <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-xl">
                  Compare two of the most popular productivity apps to see which suits your workflow. From task management to team collaboration, see which tool comes out on top.
                </p>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-4">
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                  Get Motion
                </button>
                <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
                  Get Notion
                </button>
              </div>
              
              {/* Meta Information */}
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-6 pt-6 text-sm text-gray-500">
                <span className="font-medium">Thursday 15 June 2023</span>
                <span className="hidden sm:inline">•</span>
                <span>8 Minute Read</span>
              </div>
              
              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <button className="p-2 text-gray-500 hover:text-blue-500 transition-colors">
                  <Twitter size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-pink-500 transition-colors">
                  <Instagram size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-blue-600 transition-colors">
                  <Linkedin size={20} />
                </button>
                <button className="p-2 text-gray-500 hover:text-gray-700 transition-colors">
                  <Link2 size={20} />
                </button>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative order-1 lg:order-2">
              {/* Hero Image - Your original image with responsive sizing */}
              <div className="w-full h-64 sm:h-72 md:h-80 lg:h-96 overflow-hidden rounded-2xl">
                <img 
                  src="/hero.png" 
                  alt="Motion vs Notion Comparison" 
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
            
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionNotionHero;