"use client";
import React, { useState } from 'react';
import { ChevronDown, ChevronRight, MessageSquare, Users, Zap } from 'lucide-react';

const MotionNotionCTA = () => {
  const [openFAQ, setOpenFAQ] = useState(0);

  const faqData = [
    {
      question: "Which tool is best Notion or Motion?",
      answer: "You have to decide where best suits to meet your requirements and need and we provide discount on that deals to buy you with those more money."
    },
    {
      question: "Can I buy both?",
      answer: "Yes, you can purchase both tools. Many users find value in using both platforms for different purposes - Motion for AI-powered scheduling and Notion for comprehensive workspace management."
    },
    {
      question: "What is Notion?",
      answer: "Notion is an all-in-one workspace that combines notes, tasks, wikis, and databases. It's designed to help individuals and teams organize their work and collaborate effectively."
    },
    {
      question: "What is Motion?",
      answer: "Motion is an AI-powered productivity app that automatically schedules your tasks, meetings, and projects. It uses intelligent algorithms to optimize your calendar and help you focus on what matters most."
    }
  ];

  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* FAQ Section */}
        <section className="mb-16">
          <div className="bg-white rounded-xl shadow-sm border p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h2>
            
            <div className="space-y-4">
              {faqData.map((faq, index) => (
                <div key={index} className="border-b border-gray-200 last:border-b-0">
                  <button
                    className="w-full flex items-center justify-between py-4 text-left"
                    onClick={() => setOpenFAQ(openFAQ === index ? -1 : index)}
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-6 h-6 bg-orange-100 rounded-full flex items-center justify-center flex-shrink-0">
                        <span className="text-orange-600 text-sm font-bold">Q</span>
                      </div>
                      <span className="text-gray-900 font-medium">{faq.question}</span>
                    </div>
                    {openFAQ === index ? (
                      <ChevronDown size={20} className="text-gray-400" />
                    ) : (
                      <ChevronRight size={20} className="text-gray-400" />
                    )}
                  </button>
                  
                  {openFAQ === index && (
                    <div className="pb-4 pl-9">
                      <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Tools Face-Off Section */}
        <section>
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Tools Face-Off: Which SaaS Reigns Supreme?
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Cut through different solutions from these you can now book the best solutions to your business. Our detailed 
              comparisons explore features, pricing, and user experience.
            </p>
          </div>

          {/* Comparison Cards */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            
            {/* Framer vs Webflow */}
            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-black rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">F</span>
                  </div>
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">W</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">Framer Vs Webflow</h3>
              <p className="text-sm text-gray-600 mb-4">
                Best solution designer tool for best comprehensive service in your company
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded">✓ Web design tool</span>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors text-sm">
                View Full Comparison
              </button>
            </div>

            {/* Slack vs Google Chat */}
            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-purple-600 rounded-lg flex items-center justify-center">
                    <MessageSquare size={16} className="text-white" />
                  </div>
                  <div className="w-10 h-10 bg-white border-2 border-gray-200 rounded-lg flex items-center justify-center">
                    <span className="text-blue-500 font-bold text-sm">G</span>
                  </div>
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <Users size={16} className="text-white" />
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">Slack Vs Google Chat</h3>
              <p className="text-sm text-gray-600 mb-4">
                Best solution team communication tool comprehensive service to boost team your workforce
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">✓ Communication Tool</span>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors text-sm">
                View Full Comparison
              </button>
            </div>

            {/* Gemini vs ChatGPT */}
            <div className="bg-white rounded-xl p-6 shadow-sm border hover:shadow-md transition-shadow">
              <div className="flex items-center gap-4 mb-4">
                <div className="flex gap-2">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">G</span>
                  </div>
                  <div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center">
                    <Zap size={16} className="text-white" />
                  </div>
                  <div className="w-10 h-10 bg-green-600 rounded-lg flex items-center justify-center">
                    <span className="text-white font-bold text-sm">AI</span>
                  </div>
                </div>
              </div>
              
              <h3 className="text-lg font-bold text-gray-900 mb-2">Gemini Vs ChatGPT</h3>
              <p className="text-sm text-gray-600 mb-4">
                Comprehensive AI solution and service comprehensive solution to boost up your workforce
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xs bg-purple-100 text-purple-700 px-2 py-1 rounded">✓ AI Assistant</span>
              </div>
              
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white py-2 rounded-lg font-medium transition-colors text-sm">
                View Full Comparison
              </button>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center">
            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-lg font-medium transition-colors">
              Explore More Comparisons
            </button>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MotionNotionCTA;