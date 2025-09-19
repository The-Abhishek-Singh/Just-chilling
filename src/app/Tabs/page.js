"use client";
import React, { useState } from 'react';
import { 
  Search, 
  Bell, 
  User, 
  ChevronDown, 
  ArrowLeft, 
  Upload, 
  X,
  Grid3X3,
  BarChart3,
  ChevronRight
} from 'lucide-react';

const DashboardBlogComponent = () => {
  const [lightMode, setLightMode] = useState(true);
  const [activeTab, setActiveTab] = useState('comparison');
  const [uploadedFiles, setUploadedFiles] = useState({});
  const [uploadProgress, setUploadProgress] = useState({});

  const handleFileUpload = (sectionId, event) => {
    const file = event.target.files[0];
    if (file) {
      // Simulate upload progress
      setUploadProgress(prev => ({ ...prev, [sectionId]: 0 }));
      
      // Simulate file upload with progress
      const interval = setInterval(() => {
        setUploadProgress(prev => {
          const currentProgress = prev[sectionId] || 0;
          if (currentProgress >= 100) {
            clearInterval(interval);
            setUploadedFiles(prev => ({
              ...prev,
              [sectionId]: {
                name: file.name,
                size: (file.size / (1024 * 1024)).toFixed(1) + ' MB'
              }
            }));
            return prev;
          }
          return { ...prev, [sectionId]: currentProgress + 10 };
        });
      }, 200);
    }
  };

  const removeFile = (sectionId) => {
    setUploadedFiles(prev => {
      const updated = { ...prev };
      delete updated[sectionId];
      return updated;
    });
    setUploadProgress(prev => {
      const updated = { ...prev };
      delete updated[sectionId];
      return updated;
    });
  };

  const sidebarItems = [
    { icon: BarChart3, label: 'Dashboard', active: false },
    { icon: Grid3X3, label: 'Deals', active: false },
    { icon: User, label: 'Partners', active: false },
    { icon: User, label: 'Users', active: false },
    { icon: BarChart3, label: 'SaaS Swap', active: true },
    { 
      icon: User, 
      label: 'Founder\'s Choice', 
      active: false,
      submenu: [
        { label: 'Home Page Update', active: false },
        { label: 'SaaS Marketplace Update', active: false },
        { label: 'Create New Tools Comparison Blog', active: true },
        { label: 'Swap marketplace Update', active: false }
      ]
    },
    { icon: BarChart3, label: 'Settings', active: false },
    { icon: User, label: 'Support', active: false },
    { icon: User, label: 'Admin Management', active: false }
  ];

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Sidebar */}
      <div className="w-64 bg-gradient-to-b from-indigo-900 via-indigo-800 to-indigo-900 text-white relative">
        {/* Decorative gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 via-transparent to-pink-600/20"></div>
        <div className="relative z-10">
          {/* Logo */}
          <div className="p-4 border-b border-indigo-800">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-blue-500 rounded flex items-center justify-center">
                <span className="text-white font-bold text-sm">D</span>
              </div>
              <span className="font-semibold">DealToAhead</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="p-4 space-y-2">
            <div className="text-gray-300 text-sm mb-4">NAVIGATION ITEMS</div>
            
            {sidebarItems.map((item, index) => (
              <div key={index}>
                <div className={`flex items-center space-x-3 p-2 rounded cursor-pointer transition-colors ${
                  item.active ? 'bg-indigo-800' : 'hover:bg-indigo-800'
                }`}>
                  <item.icon className="w-5 h-5" />
                  <span className="flex-1">{item.label}</span>
                  {item.submenu && <ChevronRight className="w-4 h-4" />}
                </div>
                
                {/* Submenu */}
                {item.submenu && item.active && (
                  <div className="ml-8 mt-2 space-y-1">
                    {item.submenu.map((subItem, subIndex) => (
                      <div key={subIndex} className={`p-2 text-sm rounded cursor-pointer transition-colors ${
                        subItem.active ? 'bg-indigo-700 text-blue-300' : 'text-gray-300 hover:bg-indigo-800'
                      }`}>
                        {subItem.label}
                      </div>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Light Mode Toggle */}
          <div className="absolute bottom-4 left-4 flex items-center space-x-3">
            <span className="text-gray-300">Light Mode</span>
            <div className="relative">
              <input
                type="checkbox"
                checked={lightMode}
                onChange={() => setLightMode(!lightMode)}
                className="sr-only"
              />
              <div className={`w-12 h-6 rounded-full transition-colors ${
                lightMode ? 'bg-blue-500' : 'bg-gray-600'
              }`}>
                <div className={`w-5 h-5 bg-white rounded-full shadow transform transition-transform ${
                  lightMode ? 'translate-x-6' : 'translate-x-1'
                } mt-0.5`}></div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-white border-b border-gray-200 px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <h1 className="text-2xl font-semibold text-gray-800">Good Morning! 👋</h1>
            </div>
            
            <div className="flex items-center space-x-4">
              {/* Search */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Search"
                  className="pl-10 pr-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              
              {/* Notifications */}
              <Bell className="w-5 h-5 text-gray-500 cursor-pointer hover:text-gray-700" />
              
              {/* User Profile */}
              <div className="flex items-center space-x-2 cursor-pointer">
                <div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
                  <span className="text-white text-sm font-medium">A</span>
                </div>
                <span className="text-gray-700">Admin</span>
                <ChevronDown className="w-4 h-4 text-gray-500" />
              </div>
            </div>
          </div>
        </header>

        {/* Page Content */}
        <div className="flex-1 p-6 overflow-auto">
          {/* Page Header */}
          <div className="flex items-center justify-between mb-6">
            <div className="flex items-center space-x-3">
              <ArrowLeft className="w-5 h-5 text-gray-500 cursor-pointer" />
              <h2 className="text-xl font-semibold text-gray-800">Create New Tools Comparison Blog</h2>
            </div>
            
            <div className="flex space-x-3">
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'comparison' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('comparison')}
              >
                Comparison Blog
              </button>
              <button 
                className={`px-4 py-2 rounded-lg font-medium transition-colors ${
                  activeTab === 'normal' 
                    ? 'bg-blue-500 text-white' 
                    : 'bg-white text-gray-600 border border-gray-300 hover:bg-gray-50'
                }`}
                onClick={() => setActiveTab('normal')}
              >
                Normal Blog
              </button>
            </div>
          </div>

          {/* Blog Hero Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Blog Hero Section</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Heading</label>
                <input
                  type="text"
                  placeholder="Hero Heading"
                  className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Hero Body</label>
                <input
                  type="text"
                  placeholder="Hero Body"
                  className="w-full p-3 border border-red-300 rounded-lg focus:outline-none focus:border-red-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary CTA Button Text</label>
                <input
                  type="text"
                  placeholder="e.g. Get Motion"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">The main button CTA used to proceed with the tool</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Primary CTA Button Link</label>
                <input
                  type="text"
                  placeholder="https://..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Secondary CTA Button Text</label>
                <input
                  type="text"
                  placeholder="e.g. Get Motion"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
                <p className="text-sm text-gray-500 mt-1">The main button CTA used to proceed with the tool</p>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Secondary CTA Button Link</label>
                <input
                  type="text"
                  placeholder="https://..."
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Comparison Image Icons Upload */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-4">Comparison Image Icons Update</label>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('icon1', e)}
                    className="hidden"
                    id="file-upload-icon1"
                  />
                  <label
                    htmlFor="file-upload-icon1"
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors block"
                  >
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-blue-500 cursor-pointer hover:text-blue-600">Upload User Card Icon</p>
                  </label>
                  {uploadProgress.icon1 !== undefined && uploadProgress.icon1 < 100 && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${uploadProgress.icon1}%`}}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-right">{uploadProgress.icon1}%</p>
                    </div>
                  )}
                </div>
                <div>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('icon2', e)}
                    className="hidden"
                    id="file-upload-icon2"
                  />
                  <label
                    htmlFor="file-upload-icon2"
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors block"
                  >
                    <Upload className="mx-auto h-8 w-8 text-gray-400 mb-2" />
                    <p className="text-blue-500 cursor-pointer hover:text-blue-600">Upload User Card Icon</p>
                  </label>
                  {uploadProgress.icon2 !== undefined && uploadProgress.icon2 < 100 && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${uploadProgress.icon2}%`}}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-right">{uploadProgress.icon2}%</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>

          {/* Tools Mentioned Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-4">Tools Mentioned</h3>
            
            <div className="grid grid-cols-2 gap-6 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Section Headline</label>
                <input
                  type="text"
                  placeholder="e.g. Essential Productive Tools To Enhance Your Workflow"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Tag Bulk Text</label>
                <input
                  type="text"
                  placeholder="Tools with exclusive discounts & cashbacks"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>

            {/* Search & Add Deals */}
            <div className="relative mb-6">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search & Add Deals"
                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
              />
            </div>

            {/* Tool Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Motion Card */}
              <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="flex space-x-1">
                    <div className="w-1 h-6 bg-blue-500 rounded"></div>
                    <div className="w-1 h-6 bg-blue-300 rounded"></div>
                    <div className="w-1 h-6 bg-blue-200 rounded"></div>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Motion</h4>
                    <p className="text-sm text-gray-500">Productive Tool</p>
                  </div>
                </div>
                <X className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>

              {/* Notion Card */}
              <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div className="w-6 h-6 bg-gray-800 rounded flex items-center justify-center">
                    <span className="text-white text-xs font-bold">N</span>
                  </div>
                  <div>
                    <h4 className="font-semibold text-gray-800">Notion</h4>
                    <p className="text-sm text-gray-500">Productive Tool</p>
                  </div>
                </div>
                <X className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
              </div>
            </div>
          </div>

          {/* Sticky Banner Offer Card Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6 mb-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-800">Sticky Banner Offer Card</h3>
              <button className="text-blue-500 hover:text-blue-600 flex items-center space-x-1 text-sm">
                <span>Add More Benefits</span>
                <span className="text-lg">+</span>
              </button>
            </div>

            {/* Drag Handle and Title */}
            <div className="flex items-center space-x-3 mb-4">
              <div className="cursor-move">
                <div className="grid grid-cols-2 gap-1">
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                  <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                </div>
              </div>
              <span className="text-sm text-gray-600">Join DealToAhead Today!</span>
            </div>

            {/* Form Fields */}
            <div className="space-y-4">
              {/* Title */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Title</label>
                <input
                  type="text"
                  placeholder="Title"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Benefit One */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Benefit One</label>
                <input
                  type="text"
                  placeholder="Benefit"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Benefit Two */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Benefit Two</label>
                <input
                  type="text"
                  placeholder="Benefit"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Benefit Three */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Benefit Three</label>
                <input
                  type="text"
                  placeholder="Benefit"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Benefit Four */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Benefit Four</label>
                <input
                  type="text"
                  placeholder="Benefit"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>

              {/* Benefit Five */}
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Benefit Five</label>
                <input
                  type="text"
                  placeholder="Benefit"
                  className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                />
              </div>
            </div>
          </div>

          {/* Tool Blog Cards Section */}
          <div className="bg-white rounded-lg border border-gray-200 p-6">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-semibold text-gray-800">Tool Blog Cards</h3>
              <button className="text-blue-500 hover:text-blue-600 flex items-center space-x-1 text-sm">
                <span>Add More Tool Blog Card</span>
                <span className="text-lg">+</span>
              </button>
            </div>

            {/* Blog Section One */}
            <div className="border border-gray-200 rounded-lg p-6 mb-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="cursor-move">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Blog Section One</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-red-500 hover:text-red-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {/* Blog Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blog Title</label>
                  <input
                    type="text"
                    placeholder="Blog Heading"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Blog Body Text Editor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blog Body Text Editor</label>
                  <textarea
                    placeholder="Blog Body Message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-vertical"
                  />
                </div>

                {/* Search & Add Deal */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search & Add Deal Mentioned in this blog"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Slack Tool Card */}
                <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="cursor-move">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Slack</h4>
                      <p className="text-sm text-gray-500">Communication</p>
                    </div>
                  </div>
                  <X className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>

                {/* Image Upload Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('section1', e)}
                    className="hidden"
                    id="file-upload-section1"
                  />
                  <label
                    htmlFor="file-upload-section1"
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors block"
                  >
                    <Upload className="mx-auto h-6 w-6 text-blue-500 mb-2" />
                    <p className="text-blue-500 hover:text-blue-600 text-sm">Upload</p>
                  </label>
                  
                  {/* Uploaded File Display */}
                  {uploadedFiles.section1 && (
                    <div className="mt-4 flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{uploadedFiles.section1.name}</p>
                        <p className="text-sm text-gray-500">{uploadedFiles.section1.size}</p>
                      </div>
                      <button 
                        onClick={() => removeFile('section1')}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  
                  {/* Progress Bar */}
                  {uploadProgress.section1 !== undefined && uploadProgress.section1 < 100 && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${uploadProgress.section1}%`}}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-right">{uploadProgress.section1}%</p>
                    </div>
                  )}
                </div>
              </div>
            </div>

            {/* Blog Section Two */}
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center space-x-3">
                  <div className="cursor-move">
                    <div className="grid grid-cols-2 gap-1">
                      <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                      <div className="w-2 h-2 bg-gray-400 rounded-sm"></div>
                    </div>
                  </div>
                  <span className="font-medium text-gray-800">Blog Section Two</span>
                </div>
                <div className="flex items-center space-x-2">
                  <button className="text-red-500 hover:text-red-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                    </svg>
                  </button>
                  <button className="text-gray-400 hover:text-gray-600">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 15l7-7 7 7"></path>
                    </svg>
                  </button>
                </div>
              </div>

              <div className="space-y-4">
                {/* Blog Title */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blog Title</label>
                  <input
                    type="text"
                    placeholder="Blog Heading"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Blog Body Text Editor */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Blog Body Text Editor</label>
                  <textarea
                    placeholder="Blog Body Message"
                    rows={4}
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 resize-vertical"
                  />
                </div>

                {/* Search & Add Deal */}
                <div className="relative">
                  <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                  <input
                    type="text"
                    placeholder="Search & Add Deal Mentioned in this blog"
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500"
                  />
                </div>

                {/* Slack Tool Card */}
                <div className="border border-gray-200 rounded-lg p-4 flex items-center justify-between">
                  <div className="flex items-center space-x-3">
                    <div className="cursor-move">
                      <div className="grid grid-cols-2 gap-1">
                        <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                        <div className="w-1 h-1 bg-gray-400 rounded-sm"></div>
                      </div>
                    </div>
                    <div className="w-6 h-6 bg-gradient-to-br from-purple-500 to-pink-500 rounded flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </div>
                    <div>
                      <h4 className="font-semibold text-gray-800">Slack</h4>
                      <p className="text-sm text-gray-500">Communication</p>
                    </div>
                  </div>
                  <X className="w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" />
                </div>

                {/* Image Upload Section */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image</label>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={(e) => handleFileUpload('section2', e)}
                    className="hidden"
                    id="file-upload-section2"
                  />
                  <label
                    htmlFor="file-upload-section2"
                    className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:border-blue-400 transition-colors block"
                  >
                    <Upload className="mx-auto h-6 w-6 text-blue-500 mb-2" />
                    <p className="text-blue-500 cursor-pointer hover:text-blue-600 text-sm">Upload</p>
                  </label>
                  
                  {/* Uploaded File Display */}
                  {uploadedFiles.section2 && (
                    <div className="mt-4 flex items-center space-x-3 p-3 bg-gray-50 rounded-lg">
                      <div className="flex-shrink-0">
                        <svg className="w-8 h-8 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                        </svg>
                      </div>
                      <div className="flex-1 min-w-0">
                        <p className="text-sm font-medium text-gray-900">{uploadedFiles.section2.name}</p>
                        <p className="text-sm text-gray-500">{uploadedFiles.section2.size}</p>
                      </div>
                      <button 
                        onClick={() => removeFile('section2')}
                        className="text-gray-400 hover:text-gray-600"
                      >
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                  
                  {/* Progress Bar */}
                  {uploadProgress.section2 !== undefined && uploadProgress.section2 < 100 && (
                    <div className="mt-2">
                      <div className="w-full bg-gray-200 rounded-full h-2">
                        <div 
                          className="bg-blue-500 h-2 rounded-full transition-all duration-300" 
                          style={{width: `${uploadProgress.section2}%`}}
                        ></div>
                      </div>
                      <p className="text-xs text-gray-500 mt-1 text-right">{uploadProgress.section2}%</p>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardBlogComponent;