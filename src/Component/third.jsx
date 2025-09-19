import React from 'react';
import { Check } from 'lucide-react';

const MotionNotionDifferences = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Main Differences Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Main Differences</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                Safari only works on Apple devices (so if you're using many different operating systems, 
                Brave is going to be your only option).
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                Looking at the foundation, Safari was built atop WebKit, whereas Brave was built atop 
                the <span className="text-blue-600">Chromium engine</span>, which is the same engine that most of the top browsers on the 
                market also use (e.g. like Chrome, Opera (and many others)). This makes switching 
                between browsers incredibly easy, as extensions and bookmarks can be 
                structured the same.
              </p>
            </div>
          </div>

          {/* Software Interface Image */}
          <div className="my-12">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-2xl">
              {/* Header Bar */}
              <div className="bg-gray-700 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-300 text-sm">Audio Editor Pro</div>
              </div>
              
              {/* Main Interface */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Harness the power of<br />
                    collaborative audio.
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Professional audio editing tools for teams
                  </p>
                </div>
                
                {/* Waveform Visualization */}
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex items-end gap-1 h-24 mb-4">
                    {[...Array(60)].map((_, i) => (
                      <div 
                        key={i}
                        className="bg-blue-500 rounded-sm flex-1"
                        style={{ 
                          height: `${Math.random() * 80 + 20}%`,
                          opacity: Math.random() * 0.8 + 0.2
                        }}
                      ></div>
                    ))}
                  </div>
                  
                  {/* Timeline */}
                  <div className="flex justify-between text-xs text-gray-500">
                    <span>0:00</span>
                    <span>1:30</span>
                    <span>3:00</span>
                    <span>4:30</span>
                    <span>6:00</span>
                  </div>
                </div>
                
                {/* Control Panel */}
                <div className="flex items-center gap-4">
                  <div className="flex gap-2">
                    <button className="w-8 h-8 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-white border-y-2 border-y-transparent ml-0.5"></div>
                    </button>
                    <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="flex gap-0.5">
                        <div className="w-1 h-4 bg-white rounded"></div>
                        <div className="w-1 h-4 bg-white rounded"></div>
                      </div>
                    </button>
                    <button className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="w-3 h-3 bg-white rounded-sm"></div>
                    </button>
                  </div>
                  
                  <div className="flex-1 bg-gray-800 rounded-full h-2">
                    <div className="w-1/3 h-full bg-blue-500 rounded-full"></div>
                  </div>
                  
                  <div className="text-white text-sm">2:15 / 6:00</div>
                </div>
              </div>
              
              {/* Right Sidebar */}
              <div className="absolute top-16 right-4 w-48 bg-gray-800 rounded-lg p-3">
                <div className="text-white text-sm font-medium mb-3">Layers</div>
                <div className="space-y-2">
                  <div className="bg-blue-600 rounded px-2 py-1 text-xs text-white">Vocal Track</div>
                  <div className="bg-gray-700 rounded px-2 py-1 text-xs text-gray-300">Background Music</div>
                  <div className="bg-gray-700 rounded px-2 py-1 text-xs text-gray-300">Sound Effects</div>
                </div>
              </div>
            </div>
          </div>

          {/* Motion Promotion Card */}
          <div className="bg-white border border-gray-200 rounded-xl p-6 shadow-sm">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-blue-600 rounded flex items-center justify-center flex-shrink-0">
                <div className="flex flex-col gap-0.5">
                  <div className="w-4 h-0.5 bg-white rounded"></div>
                  <div className="w-3 h-0.5 bg-white rounded"></div>
                  <div className="w-3.5 h-0.5 bg-white rounded"></div>
                </div>
              </div>
              
              <div className="flex-1">
                <h4 className="font-bold text-gray-900 mb-2">Boost Your Content Output by 10x!</h4>
                <div className="flex items-center gap-4 mb-3">
                  <span className="text-xs bg-blue-100 text-blue-700 px-2 py-1 rounded">ALL IN INBOX</span>
                  <span className="text-xs bg-green-100 text-green-700 px-2 py-1 rounded"># Progress Saved This Visit</span>
                </div>
                <p className="text-sm text-gray-600 mb-4">
                  Built for ambitious teams, unlimited docs, unlimited access to our best tools. Plus advanced security features, best-in-class performance, optimum synchronization and premium technical support across all plans, freeing up teams to focus on innovation and collaboration.
                </p>
                <div className="flex items-center gap-4 mb-4">
                  <span className="text-sm text-gray-600">Starting from as low</span>
                  <span className="font-bold text-green-600 text-lg">$8.00/month</span>
                </div>
                <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                  Download Notion Here
                </button>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison Summary Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Comparison Summary</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                This is the default browser that comes with mac desktop, and has existed for over a 
                decade.
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                With Safari, you're not going to get anything too cutting-edge or innovative, because 
                they like (Apple) Chrome are focused on stability (or their "2 bills form).
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                For a further breakdown in understanding the negatives that come with browsers that 
                have hit mass scale, refer to our <span className="text-blue-600">Chrome vs Safari comparison</span>.
              </p>
            </div>
          </div>

          {/* Second Software Interface */}
          <div className="mb-8">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-2xl">
              {/* Header Bar */}
              <div className="bg-gray-700 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-300 text-sm">Collaborative Studio</div>
              </div>
              
              {/* Main Interface */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Harness the power of<br />
                    collaborative audio.
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Advanced collaboration tools for creative teams
                  </p>
                </div>
                
                {/* Multi-track Interface */}
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="space-y-3 mb-4">
                    {/* Track 1 */}
                    <div className="flex items-center gap-3">
                      <div className="w-16 text-xs text-gray-400">Track 1</div>
                      <div className="flex-1 flex items-end gap-0.5 h-8">
                        {[...Array(80)].map((_, i) => (
                          <div 
                            key={i}
                            className="bg-green-500 rounded-sm flex-1"
                            style={{ height: `${Math.random() * 60 + 20}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Track 2 */}
                    <div className="flex items-center gap-3">
                      <div className="w-16 text-xs text-gray-400">Track 2</div>
                      <div className="flex-1 flex items-end gap-0.5 h-8">
                        {[...Array(80)].map((_, i) => (
                          <div 
                            key={i}
                            className="bg-blue-500 rounded-sm flex-1"
                            style={{ height: `${Math.random() * 80 + 10}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                    
                    {/* Track 3 */}
                    <div className="flex items-center gap-3">
                      <div className="w-16 text-xs text-gray-400">Track 3</div>
                      <div className="flex-1 flex items-end gap-0.5 h-8">
                        {[...Array(80)].map((_, i) => (
                          <div 
                            key={i}
                            className="bg-purple-500 rounded-sm flex-1"
                            style={{ height: `${Math.random() * 70 + 15}%` }}
                          ></div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* Control Panel */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <button className="w-10 h-10 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-4 border-l-white border-y-3 border-y-transparent ml-0.5"></div>
                    </button>
                    <button className="w-10 h-10 bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-1.5 h-5 bg-white rounded"></div>
                        <div className="w-1.5 h-5 bg-white rounded"></div>
                      </div>
                    </button>
                    <button className="w-10 h-10 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 bg-white rounded-sm"></div>
                    </button>
                  </div>
                  
                  <div className="text-white text-sm">3:42 / 8:15</div>
                </div>
              </div>
              
              {/* Right Panel */}
              <div className="absolute top-16 right-4 w-52 bg-gray-800 rounded-lg p-4">
                <div className="text-white text-sm font-medium mb-3">Project Settings</div>
                <div className="space-y-3">
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Sample Rate</span>
                    <span className="text-white">44.1 kHz</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Bit Depth</span>
                    <span className="text-white">24-bit</span>
                  </div>
                  <div className="flex justify-between text-xs">
                    <span className="text-gray-400">Channels</span>
                    <span className="text-white">Stereo</span>
                  </div>
                  <div className="mt-4">
                    <div className="text-xs text-gray-400 mb-2">Collaborators</div>
                    <div className="flex gap-1">
                      <div className="w-6 h-6 bg-blue-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-green-500 rounded-full"></div>
                      <div className="w-6 h-6 bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default MotionNotionDifferences;