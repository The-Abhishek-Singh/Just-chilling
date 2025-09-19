import React from 'react';
import { Star, Check, Users, Calendar, BarChart3, Shield, Headphones, Zap } from 'lucide-react';

const MotionNotionBody = () => {
  return (
    <div className="bg-gray-50 py-12 ">
      <div className="max-w-6xl mx-auto px-6">
        {/* Top Stats Section */}
        <div className="mb-12">
          <div className="flex justify-between items-center mb-8">
            <div className="flex items-center gap-4">
              <span className="text-sm text-gray-600">Tools Mentioned</span>
              <span className="text-sm text-blue-600">Essential Productive Tools to Enhance Your Workflow</span>
            </div>
            <div className="flex gap-2">
              <div className="bg-blue-500 text-white px-4 py-2 rounded-lg font-bold text-sm">
                628
              </div>
              <div className="bg-blue-400 text-white px-4 py-2 rounded-lg font-bold text-sm">
                428
              </div>
            </div>
          </div>
          
          {/* Tool Cards Row */}
          <div className="grid grid-cols-4 gap-6 mb-12">
            {/* Motion Card */}
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-blue-600 rounded flex items-center justify-center">
                  <div className="flex flex-col gap-0.5">
                    <div className="w-3 h-0.5 bg-white rounded"></div>
                    <div className="w-2 h-0.5 bg-white rounded"></div>
                    <div className="w-2.5 h-0.5 bg-white rounded"></div>
                  </div>
                </div>
                <span className="font-medium text-gray-900">Motion</span>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-xs text-gray-600">AI-Cal for Intelligent Scheduling</p>
              <button className="text-xs text-blue-600 hover:underline mt-1">View Details</button>
            </div>

            {/* Notion Card */}
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded flex items-center justify-center">
                  <span className="text-sm font-bold text-gray-800">N</span>
                </div>
                <span className="font-medium text-gray-900">Notion</span>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
                <Star size={12} className="text-gray-300" />
              </div>
              <p className="text-xs text-gray-600">All-in-One Workspace</p>
              <button className="text-xs text-blue-600 hover:underline mt-1">View Details</button>
            </div>

            {/* ClickUp Card */}
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-purple-600 rounded flex items-center justify-center">
                  <div className="w-4 h-4 bg-white rounded-sm"></div>
                </div>
                <span className="font-medium text-gray-900">ClickUp</span>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
                <Star size={12} className="text-gray-300" />
              </div>
              <p className="text-xs text-gray-600">Project Management</p>
              <button className="text-xs text-blue-600 hover:underline mt-1">View Details</button>
            </div>

            {/* Todoist Card */}
            <div className="bg-white rounded-lg p-4 shadow-sm border">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-8 h-8 bg-red-600 rounded-full flex items-center justify-center">
                  <Check size={16} className="text-white" />
                </div>
                <span className="font-medium text-gray-900">Todoist</span>
              </div>
              <div className="flex items-center gap-1 mb-1">
                {[...Array(4)].map((_, i) => (
                  <Star key={i} size={12} className="fill-yellow-400 text-yellow-400" />
                ))}
                <Star size={12} className="text-gray-300" />
              </div>
              <p className="text-xs text-gray-600">Task Management</p>
              <button className="text-xs text-blue-600 hover:underline mt-1">View Details</button>
            </div>
          </div>
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Content - Which is Better Section */}
          <div className="lg:col-span-2">
            <div className="bg-white rounded-xl p-8 shadow-sm border-2 border-blue-200">
              <h2 className="text-2xl font-bold text-gray-900 mb-4">Which Is Better</h2>
              
              <p className="text-gray-600 mb-6 leading-relaxed">
                If you're looking to increase your teams productivity then of a priority, focused individual or small team seeking streamlined task management, Motion's AI-driven approach might be more suitable. With both of these work-focussed apps getting to see ethority at the forefront.
              </p>
              
              <p className="text-gray-600 mb-8 leading-relaxed">
                After weighing the criteria, our all time favorite choice tool to use turns out to be Notion.
              </p>

              <div className="bg-gray-50 rounded-lg p-6 mb-6">
                <h3 className="text-xl font-bold text-gray-900 mb-4">
                  The AI workspace that works for you.
                </h3>
                
                {/* Motion Interface Image */}
                <img 
                  src="/workplace.png" 
                  alt="Motion AI Workspace Interface" 
                  className="w-full h-auto rounded-lg border mb-4"
                />

                <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium transition-colors">
                  Get Started Now
                </button>
              </div>

              {/* Get Your Content Output Section */}
              <div className="border-t-2 border-dashed border-gray-200 pt-6">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-800">N</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-900">Get Your Content Output by 10x</h4>
                    <p className="text-sm text-gray-600">Notion Inc.</p>
                  </div>
                </div>
                
                <div className="flex gap-4 mb-4">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">All in Inbox</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"># Progress Saved This Visit</span>
                </div>
                
                <p className="text-sm text-gray-600 mb-4">
                  Built for ambitious teams, unlimited docs, unlimited access to our best tools. Plus advanced security features and priority customer support throughout the website and gives users multiple use cases.
                </p>
                
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>Starting from as low</span>
                  <span className="font-bold text-green-600">$8.00/month</span>
                </div>
                
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Download Notion Here
                </button>
              </div>
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="space-y-6">
            {/* Get ClickFunnels 2.0 Card */}
            <div className="bg-gradient-to-bl from-[#111827] via-[#182C6B] to-[#111827] text-white rounded-xl p-6">
              <h3 className="font-bold mb-4">Get ClickFunnels 2.0 Today!</h3>
              <ul className="space-y-3 mb-6">
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-green-400" />
                  <span className="text-sm">Premium Layout ( All 500 Of )</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-green-400" />
                  <span className="text-sm">Build Unlimited on One Price</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-green-400" />
                  <span className="text-sm">15 Integrations</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-green-400" />
                  <span className="text-sm">Up to 5000 Visitors</span>
                </li>
                <li className="flex items-center gap-3">
                  <Check size={16} className="text-green-400" />
                  <span className="text-sm">SSL and Chat Support</span>
                </li>
              </ul>
              <button className="w-full bg-white text-blue-900 py-3 rounded-lg font-bold hover:bg-gray-100 transition-colors">
                Get Started
              </button>
            </div>

            {/* Feature vs Workflow Comparison */}
            <div className="bg-white rounded-xl p-6 shadow-sm border">
              <h3 className="font-bold text-gray-900 mb-4">Feature vs Workflow</h3>
              
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Motion is better</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-yellow-400 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Notion is better</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Customization Summary</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-500 rounded-full"></div>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">On Initial Impression</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-purple-500 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Daily Workflow ( A+ )</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-blue-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">50% to Smooth OP</span>
                  <div className="flex gap-1">
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    ))}
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Design Experience</span>
                  <div className="flex gap-1">
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-pink-500 rounded-full"></div>
                    ))}
                    <div className="w-2 h-2 bg-gray-200 rounded-full"></div>
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Best Features</span>
                  <div className="flex gap-1">
                    {[...Array(5)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-green-400 rounded-full"></div>
                    ))}
                  </div>
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Heat Manager</span>
                  <div className="flex gap-1">
                    {[...Array(3)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-red-500 rounded-full"></div>
                    ))}
                    {[...Array(2)].map((_, i) => (
                      <div key={i} className="w-2 h-2 bg-gray-200 rounded-full"></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MotionNotionBody;