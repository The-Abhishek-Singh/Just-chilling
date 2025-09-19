import React from 'react';
import { Twitter, Instagram, Linkedin, Link2 } from 'lucide-react';

const MotionNotionHero = () => {
  return (
    <div className="min-h-screen bg-[#EEF2FC] p-6 lg:pt-12 ">
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
          {/* Hero Image */}
          <img 
            src="/hero.png" 
            alt="Motion vs Notion Comparison" 
            className="w-full h-80 rounded-2xl object-cover"
          />
          
        
          
      
        </div>
      </div>
    </div>
  );
};

export default MotionNotionHero;