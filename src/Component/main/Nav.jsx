'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar = () => {
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMobileSaasOpen, setIsMobileSaasOpen] = useState(false);
  const [isMobileMoreOpen, setIsMobileMoreOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdowns when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  // Close mobile menu when window is resized to desktop
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsMobileMenuOpen(false);
        setIsMobileSaasOpen(false);
        setIsMobileMoreOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleDropdownToggle = (dropdown) => {
    setActiveDropdown(activeDropdown === dropdown ? null : dropdown);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setIsMobileSaasOpen(false);
    setIsMobileMoreOpen(false);
  };

  const toggleMobileSaas = () => {
    setIsMobileSaasOpen(!isMobileSaasOpen);
  };

  const toggleMobileMore = () => {
    setIsMobileMoreOpen(!isMobileMoreOpen);
  };

  return (
    <nav className="bg-white border-b border-gray-200 shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Always visible */}
          <div className="flex items-center flex-shrink-0">
            <Link href="/" className="flex items-center space-x-2">
              <img 
                src="/Logo.png" 
                alt="DealYouNeed Logo" 
                className="w-32 h-32 rounded object-contain"
              />

            </Link>
          </div>

          {/* Desktop Navigation - Visible from md (768px) and up */}
          <div className="hidden md:flex items-center space-x-1 lg:space-x-2 xl:space-x-4">
            <Link 
              href="/" 
              className="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            >
              Home
            </Link>

            {/* SaaS Marketplace Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button
                onClick={() => handleDropdownToggle('saas')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                <span className="hidden lg:inline">SaaS Marketplace</span>
                <span className="lg:hidden">SaaS</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === 'saas' ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {activeDropdown === 'saas' && (
                <div className="absolute top-full left-0 mt-1 w-56 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link 
                      href="/saas/productivity" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Productivity Tools
                    </Link>
                    <Link 
                      href="/saas/marketing" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Marketing Tools
                    </Link>
                    <Link 
                      href="/saas/design" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Design Tools
                    </Link>
                    <Link 
                      href="/saas/development" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Development Tools
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/swap-marketplace" 
              className="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            >
              <span className="hidden lg:inline">Swap Marketplace</span>
              <span className="lg:hidden">Swap</span>
            </Link>

            {/* More Dropdown */}
            <div className="relative">
              <button
                onClick={() => handleDropdownToggle('more')}
                className="flex items-center space-x-1 text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                <span>More</span>
                <ChevronDown 
                  className={`w-4 h-4 transition-transform ${
                    activeDropdown === 'more' ? 'rotate-180' : ''
                  }`} 
                />
              </button>

              {activeDropdown === 'more' && (
                <div className="absolute top-full left-0 mt-1 w-48 bg-white border border-gray-200 rounded-md shadow-lg z-50">
                  <div className="py-1">
                    <Link 
                      href="/about" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setActiveDropdown(null)}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/blog" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Contact
                    </Link>
                    <Link 
                      href="/support" 
                      className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 hover:text-blue-600"
                      onClick={() => setActiveDropdown(null)}
                    >
                      Support
                    </Link>
                  </div>
                </div>
              )}
            </div>

            <Link 
              href="/pricing" 
              className="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            >
              Pricing
            </Link>
          </div>

          {/* Auth Buttons - Show from md (768px) up to align with desktop nav */}
          <div className="hidden md:flex items-center space-x-2 lg:space-x-3 flex-shrink-0">
            <Link 
              href="/login" 
              className="text-gray-700 hover:text-blue-600 px-2 lg:px-3 py-2 text-sm font-medium transition-colors whitespace-nowrap"
            >
              Login
            </Link>
            <Link 
              href="/signup" 
              className="bg-blue-500 hover:bg-blue-600 text-white px-3 lg:px-4 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
            >
              <span className="hidden lg:inline">Join For Free</span>
              <span className="lg:hidden">Join</span>
            </Link>
          </div>

          {/* Mobile menu button - Only visible on small screens (below md: 768px) */}
          <div className="md:hidden flex items-center">
            {/* Show auth buttons on sm screens (640px-768px) where desktop nav is hidden */}
            <div className="hidden sm:flex items-center space-x-2 mr-4">
              <Link 
                href="/login" 
                className="text-gray-700 hover:text-blue-600 px-2 py-2 text-sm font-medium transition-colors whitespace-nowrap"
              >
                Login
              </Link>
              <Link 
                href="/signup" 
                className="bg-blue-500 hover:bg-blue-600 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors whitespace-nowrap"
              >
                Join
              </Link>
            </div>
            
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-gray-700 hover:text-blue-600 focus:outline-none p-2 rounded-md hover:bg-gray-100"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Menu - Only shows on screens below md (768px) */}
        {isMobileMenuOpen && (
          <div className="md:hidden border-t border-gray-200 bg-white">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {/* Home */}
              <Link 
                href="/" 
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Home
              </Link>

              {/* SaaS Marketplace Mobile Dropdown */}
              <div className="space-y-1">
                <button 
                  onClick={toggleMobileSaas}
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <span>SaaS Marketplace</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${
                      isMobileSaasOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Mobile SaaS Submenu */}
                {isMobileSaasOpen && (
                  <div className="ml-4 space-y-1">
                    <Link 
                      href="/saas/productivity" 
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Productivity Tools
                    </Link>
                    <Link 
                      href="/saas/marketing" 
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Marketing Tools
                    </Link>
                    <Link 
                      href="/saas/design" 
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Design Tools
                    </Link>
                    <Link 
                      href="/saas/development" 
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Development Tools
                    </Link>
                  </div>
                )}
              </div>

              {/* Swap Marketplace */}
              <Link 
                href="/swap-marketplace" 
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Swap Marketplace
              </Link>

              {/* More Mobile Dropdown */}
              <div className="space-y-1">
                <button 
                  onClick={toggleMobileMore}
                  className="w-full flex items-center justify-between px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                >
                  <span>More</span>
                  <ChevronDown 
                    className={`w-4 h-4 transition-transform ${
                      isMobileMoreOpen ? 'rotate-180' : ''
                    }`} 
                  />
                </button>
                
                {/* Mobile More Submenu */}
                {isMobileMoreOpen && (
                  <div className="ml-4 space-y-1">
                    <Link 
                      href="/about" 
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                    >
                      About Us
                    </Link>
                    <Link 
                      href="/blog" 
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Blog
                    </Link>
                    <Link 
                      href="/contact" 
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Contact
                    </Link>
                    <Link 
                      href="/support" 
                      className="block px-3 py-2 text-sm text-gray-600 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                      onClick={closeMobileMenu}
                    >
                      Support
                    </Link>
                  </div>
                )}
              </div>

              {/* Pricing */}
              <Link 
                href="/pricing" 
                className="block px-3 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md transition-colors"
                onClick={closeMobileMenu}
              >
                Pricing
              </Link>

              {/* Mobile Auth Buttons - Only show on xs screens (below 640px) */}
              <div className="sm:hidden pt-4 pb-2 space-y-3 border-t border-gray-200 mt-4">
                <Link 
                  href="/login" 
                  className="block w-full text-center px-4 py-3 text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50 rounded-md border border-gray-300 transition-colors"
                  onClick={closeMobileMenu}
                >
                  Login
                </Link>
                <Link 
                  href="/signup" 
                  className="block w-full text-center px-4 py-3 text-base font-medium bg-blue-500 text-white hover:bg-blue-600 rounded-md transition-colors"
                  onClick={closeMobileMenu}
                >
                  Join For Free
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;