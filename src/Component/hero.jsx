import React from 'react';
import { Twitter, Instagram, Linkedin, Link2 } from 'lucide-react';

const MotionNotionHero = () => {
  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Navigation Breadcrumb */}
      <div className="max-w-6xl mx-auto mb-8">
        <div className="flex items-center text-sm text-gray-600 mb-8">
          <span>All Blogs</span>
          <span className="mx-2">›</span>
          <span className="text-blue-600">Motion vs Notion Comparison</span>
        </div>
      </div>

      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
        {/* Left Content */}
        <div className="space-y-6">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Motion Vs Notion
          </h1>
          
          <h2 className="text-xl text-gray-700 font-medium">
            Which is the best productivity tool for you?
          </h2>
          
          <p className="text-gray-600 leading-relaxed">
            Compare two of the most popular productivity apps to see which suits your workflow. From task management to team collaboration, see which tool comes out on top.
          </p>
          
          {/* CTA Buttons */}
          <div className="flex gap-4 pt-4">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium transition-colors">
              Get Motion
            </button>
            <button className="border border-gray-300 hover:border-gray-400 text-gray-700 px-6 py-3 rounded-lg font-medium transition-colors">
              Get Notion
            </button>
          </div>
          
          {/* Meta Information */}
          <div className="flex items-center gap-6 pt-6 text-sm text-gray-500">
            <span>Thursday 15 June 2023</span>
            <span>•</span>
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
        <div className="relative">
          {/* Main Blue Container */}
          <div className="relative bg-blue-600 rounded-2xl p-8 h-80 overflow-hidden">
            {/* Wavy Pattern Background */}
            <div className="absolute inset-0">
              <svg
                viewBox="0 0 400 300"
                className="w-full h-full opacity-30"
                preserveAspectRatio="none"
              >
                <path
                  d="M0,150 Q50,100 100,120 T200,140 T300,120 T400,140 L400,300 L0,300 Z"
                  fill="white"
                  opacity="0.1"
                />
                <path
                  d="M0,180 Q60,130 120,150 T240,170 T360,150 T480,170 L480,300 L0,300 Z"
                  fill="white"
                  opacity="0.1"
                />
                <path
                  d="M0,210 Q70,160 140,180 T280,200 T420,180 T560,200 L560,300 L0,300 Z"
                  fill="white"
                  opacity="0.15"
                />
              </svg>
            </div>
            
            {/* Motion Logo (Lines) */}
            <div className="absolute top-6 right-6 w-12 h-12 bg-white rounded-full flex items-center justify-center">
              <div className="flex flex-col gap-1">
                <div className="w-6 h-1 bg-blue-600 rounded"></div>
                <div className="w-4 h-1 bg-blue-600 rounded"></div>
                <div className="w-5 h-1 bg-blue-600 rounded"></div>
              </div>
            </div>
            
            {/* Notion Logo (N) */}
            <div className="absolute bottom-6 right-6 w-12 h-12 bg-white rounded-lg flex items-center justify-center border-2 border-gray-200">
              <span className="text-xl font-bold text-gray-800">N</span>
            </div>
            
         
          
          </div>
          
          {/* Bottom Stats */}
          <div className="absolute -bottom-4 -right-4 flex gap-2">
            <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
              628
            </div>
            <div className="bg-blue-400 text-white px-4 py-2 rounded-lg font-bold text-sm">
              428
            </div>
          </div>
          
      
        </div>
      </div>
    </div>
  );
};

export default MotionNotionHero;