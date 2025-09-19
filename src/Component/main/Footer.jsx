import React from 'react';
import { Heart, Twitter, Instagram, Github, Linkedin } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="text-white py-12" style={{ background: 'linear-gradient(to right, #00061B, #001E81, #00061B)' }}>
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-6 gap-8 mb-8">
          
          {/* Brand Section */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-8 h-8 bg-white rounded flex items-center justify-center">
                <span className="text-gray-900 font-bold text-sm">D</span>
              </div>
              <span className="text-xl font-bold">DevTechHead</span>
            </div>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Working software is subscription development and work business to best productivity in your process or team.
            </p>
            
            {/* Social Media Icons */}
            <div className="flex gap-3">
              <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Twitter size={16} className="text-gray-400" />
              </button>
              <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Instagram size={16} className="text-gray-400" />
              </button>
              <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Github size={16} className="text-gray-400" />
              </button>
              <button className="w-8 h-8 bg-gray-800 hover:bg-gray-700 rounded flex items-center justify-center transition-colors">
                <Linkedin size={16} className="text-gray-400" />
              </button>
            </div>
          </div>

          {/* Deals Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Deals</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Design Deals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Dev Stack</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Marketing Stack</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Al Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Book Writing Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Productivity Tools</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Project Management</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Communication</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Audits</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Others</a></li>
            </ul>
          </div>

          {/* Solutions Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Solutions</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Startup Founders</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Business Owners</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Agencies</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Freelancers</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Solopreneurs</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Makers & Influencers</a></li>
            </ul>
          </div>

          {/* Quick Links Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Home Page</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Features bundle</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Best Marketplace</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Free Al World</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Upgrades</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Pricing</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Audit</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Deals</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white text-sm transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div>
            <h4 className="font-semibold text-white mb-4">Newsletter</h4>
            <p className="text-gray-400 text-sm mb-4">
              Stay updated with latest deals & offers
            </p>
            
            <div className="flex gap-2 mb-4">
              <input
                type="email"
                placeholder="yourname@email.com"
                className="flex-1 px-3 py-2 bg-gray-800 border border-gray-700 rounded text-sm text-white placeholder-gray-400 focus:outline-none focus:border-blue-500"
              />
              <button className="bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded text-sm font-medium transition-colors">
                Submit
              </button>
            </div>
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="border-t border-gray-800 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            
            {/* Copyright */}
            <div className="flex items-center gap-1 text-sm text-gray-400">
              <span>Design with Love</span>
              <Heart size={14} className="text-red-500 fill-red-500" />
              <span>for startup enthusiasts</span>
            </div>

            {/* Copyright Notice */}
            <div className="text-sm text-gray-400">
              © 2024 DevTechHead. All Rights Reserved.
            </div>

            {/* Footer Links */}
            <div className="flex gap-6">
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Terms of Service ↗
              </a>
              <a href="#" className="text-sm text-gray-400 hover:text-white transition-colors">
                Privacy Policy ↗
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;