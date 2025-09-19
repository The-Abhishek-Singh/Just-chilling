import React from 'react';
import { Users, Calendar, FileText, Settings, Bell, Search } from 'lucide-react';

const MotionNotionFinal = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-4xl mx-auto px-6">
        
        {/* Feature Differentiation Section */}
        <section className="mb-20">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Feature Differentiation</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                Since Apple is a hardware company at the end of the day, the whole point of Safari is 
                that you're going to get a great cohesive experience if you're using all Apple products 
                (Mac, iPad, iPhone).
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                The biggest benefit to be had here, in our eyes, comes from Apple owning both the 
                hardware and software layers. This allows them to go above and beyond with 
                optimization, and it certainly shows.
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                We don't really see much major innovation or differentiation coming to Safari though. 
                Why? Because this browser is built for the status quo, not the future, but Apple has zero need 
                in going after the fast and collaborative browser space, given companies like Browser vs 
                Browser can hold front the fact that they has a lot more experience and differentiation service as they ultimately want to be the browser for teams and 
                collaboration.
              </p>
            </div>
          </div>

          {/* Tagline */}
          <div className="text-center mb-12">
            <p className="text-lg text-gray-600 italic">
              "Your AI everything app."
            </p>
            <p className="text-sm text-gray-500 mt-2">- Notion</p>
          </div>

          {/* Notion Interface Mockup */}
          <div className="bg-white rounded-xl shadow-lg overflow-hidden border mb-8">
            {/* Header */}
            <div className="bg-gray-50 border-b px-6 py-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-8 h-8 bg-white border-2 border-gray-200 rounded flex items-center justify-center">
                    <span className="text-sm font-bold text-gray-800">N</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-900">One space for every team.</h3>
                </div>
                <div className="flex items-center gap-2">
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Search size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Bell size={18} />
                  </button>
                  <button className="p-2 text-gray-400 hover:text-gray-600">
                    <Settings size={18} />
                  </button>
                </div>
              </div>
            </div>

            {/* Main Content */}
            <div className="flex">
              {/* Sidebar */}
              <div className="w-64 bg-gray-50 border-r p-4">
                <div className="space-y-2">
                  <div className="flex items-center gap-3 p-2 bg-blue-100 rounded-lg">
                    <Users size={16} className="text-blue-600" />
                    <span className="text-sm font-medium text-blue-900">Team Hub</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                    <Calendar size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Calendar</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                    <FileText size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Documents</span>
                  </div>
                  <div className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg">
                    <Settings size={16} className="text-gray-600" />
                    <span className="text-sm text-gray-700">Settings</span>
                  </div>
                </div>
                
                <div className="mt-6">
                  <div className="text-xs font-medium text-gray-500 mb-2 uppercase">Recent</div>
                  <div className="space-y-1">
                    <div className="text-sm text-gray-600 p-1 hover:bg-gray-100 rounded">Project Alpha</div>
                    <div className="text-sm text-gray-600 p-1 hover:bg-gray-100 rounded">Meeting Notes</div>
                    <div className="text-sm text-gray-600 p-1 hover:bg-gray-100 rounded">Design System</div>
                  </div>
                </div>
              </div>

              {/* Main Area */}
              <div className="flex-1 p-6">
                <div className="text-center py-12">
                  <div className="w-20 h-20 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Users size={32} className="text-blue-600" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Welcome to your workspace</h4>
                  <p className="text-gray-600 mb-6">Create pages, databases, and collaborate with your team</p>
                  <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium transition-colors">
                    Get Started
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Final Thought Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Final Thought</h2>
          
          <div className="space-y-6 text-gray-700 leading-relaxed mb-12">
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                Brave often competes most with heavily privacy-focused individuals, for whom one 
                probably mean a few crypto space, for example, as Coinbase 2022, most people I 
                talked to were using, or at least familiar with Brave.
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                Privacy comes with using a traditional database, and user accounts, like most other modern 
                standard privacy support, for example, they don't know you know what I'm bookmarking 
                password, based on my usage-based, for example, so Coinbase 2022, most people I've 
                re-activated with my unique token - no email address/identification required.
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                Facebook, I said, is it increasingly less likely that we automatically bag from and deliver some 
                of this information without trying to to identify, but personally for me, I'd take the benefits 
                that come with using a traditional database and user account, like most other modern 
                browsers like Arc and Chrome rely on for storing and syncing your data between 
                devices.
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                If you'd this privacy is important enough to not want to use Chrome though, there are 
                genuinely other privacy-focused alternatives to that they select trying to sell your data. 
                Unlike Google with Chrome (*), say Arc Browser. If you're on MacOS (Windows coming 
                soon), I'd definitely recommend giving that a shot.
              </p>
            </div>
            
            <div className="flex gap-3">
              <div className="w-2 h-2 bg-gray-900 rounded-full mt-3 flex-shrink-0"></div>
              <p>
                If you're considering Brave, I genuinely think you already know yourself, but if you're not 
                quite obsessed with privacy, or the level at all times potentially recommending yourself 
                (e.g. you forgot your unique from/key, you lose your history and settings—there's no 
                "forgot password" per say).
              </p>
            </div>
          </div>

          {/* Final Software Interface */}
          <div className="mb-8">
            <div className="relative bg-gradient-to-br from-gray-800 to-gray-900 rounded-lg overflow-hidden shadow-2xl">
              {/* Header Bar */}
              <div className="bg-gray-700 px-4 py-3 flex items-center gap-3">
                <div className="flex gap-2">
                  <div className="w-3 h-3 bg-red-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                </div>
                <div className="text-gray-300 text-sm">Professional Audio Suite</div>
              </div>
              
              {/* Main Interface */}
              <div className="p-6">
                <div className="mb-6">
                  <h3 className="text-white text-2xl font-bold mb-2">
                    Harness the power of<br />
                    collaborative audio.
                  </h3>
                  <p className="text-gray-300 text-sm">
                    Enterprise-grade audio collaboration platform
                  </p>
                </div>
                
                {/* Advanced Multi-track Interface */}
                <div className="bg-gray-900 rounded-lg p-4 mb-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-4">
                      <button className="text-xs bg-blue-600 text-white px-3 py-1 rounded">MASTER</button>
                      <button className="text-xs bg-gray-600 text-gray-300 px-3 py-1 rounded">SOLO</button>
                      <button className="text-xs bg-gray-600 text-gray-300 px-3 py-1 rounded">MUTE</button>
                    </div>
                    <div className="text-xs text-gray-400">48kHz • 24bit • Stereo</div>
                  </div>
                  
                  <div className="space-y-3 mb-4">
                    {/* Master Track */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-xs text-gray-400 flex flex-col">
                        <span>Master</span>
                        <div className="flex gap-1 mt-1">
                          <div className="w-2 h-1 bg-green-500 rounded"></div>
                          <div className="w-2 h-1 bg-yellow-500 rounded"></div>
                          <div className="w-2 h-1 bg-red-500 rounded"></div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end gap-0.5 h-10">
                        {[...Array(100)].map((_, i) => (
                          <div 
                            key={i}
                            className="bg-blue-500 rounded-sm flex-1"
                            style={{ height: `${Math.random() * 80 + 20}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="w-12 text-xs text-white text-right">-12dB</div>
                    </div>
                    
                    {/* Vocal Track */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-xs text-gray-400 flex flex-col">
                        <span>Vocals</span>
                        <div className="flex gap-1 mt-1">
                          <div className="w-2 h-1 bg-green-500 rounded"></div>
                          <div className="w-2 h-1 bg-green-500 rounded"></div>
                          <div className="w-2 h-1 bg-yellow-500 rounded"></div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end gap-0.5 h-10">
                        {[...Array(100)].map((_, i) => (
                          <div 
                            key={i}
                            className="bg-green-500 rounded-sm flex-1"
                            style={{ height: `${Math.random() * 90 + 10}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="w-12 text-xs text-white text-right">-8dB</div>
                    </div>
                    
                    {/* Instruments */}
                    <div className="flex items-center gap-3">
                      <div className="w-20 text-xs text-gray-400 flex flex-col">
                        <span>Instruments</span>
                        <div className="flex gap-1 mt-1">
                          <div className="w-2 h-1 bg-green-500 rounded"></div>
                          <div className="w-2 h-1 bg-green-500 rounded"></div>
                          <div className="w-2 h-1 bg-green-500 rounded"></div>
                        </div>
                      </div>
                      <div className="flex-1 flex items-end gap-0.5 h-10">
                        {[...Array(100)].map((_, i) => (
                          <div 
                            key={i}
                            className="bg-purple-500 rounded-sm flex-1"
                            style={{ height: `${Math.random() * 70 + 15}%` }}
                          ></div>
                        ))}
                      </div>
                      <div className="w-12 text-xs text-white text-right">-15dB</div>
                    </div>
                  </div>
                  
                  {/* Timeline */}
                  <div className="flex justify-between text-xs text-gray-500 border-t border-gray-700 pt-2">
                    <span>0:00</span>
                    <span>2:30</span>
                    <span>5:00</span>
                    <span>7:30</span>
                    <span>10:00</span>
                  </div>
                </div>
                
                {/* Professional Control Panel */}
                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <button className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center">
                      <div className="w-0 h-0 border-l-5 border-l-white border-y-4 border-y-transparent ml-1"></div>
                    </button>
                    <button className="w-12 h-12 bg-gray-700 rounded-full flex items-center justify-center">
                      <div className="flex gap-1">
                        <div className="w-2 h-6 bg-white rounded"></div>
                        <div className="w-2 h-6 bg-white rounded"></div>
                      </div>
                    </button>
                    <button className="w-12 h-12 bg-red-600 rounded-full flex items-center justify-center">
                      <div className="w-5 h-5 bg-white rounded"></div>
                    </button>
                    <button className="w-12 h-12 bg-yellow-600 rounded-full flex items-center justify-center">
                      <div className="w-4 h-4 border-2 border-white rounded-full"></div>
                    </button>
                  </div>
                  
                  <div className="flex items-center gap-4">
                    <div className="text-white text-sm">5:23 / 10:00</div>
                    <div className="flex items-center gap-2">
                      <span className="text-xs text-gray-400">BPM</span>
                      <span className="text-white text-sm font-mono">120</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Professional Right Panel */}
              <div className="absolute top-16 right-4 w-56 bg-gray-800 rounded-lg p-4">
                <div className="text-white text-sm font-medium mb-4">Mix Console</div>
                <div className="space-y-4">
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-400">Master Volume</span>
                      <span className="text-white">-12dB</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="w-3/4 h-full bg-blue-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-400">Reverb</span>
                      <span className="text-white">35%</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="w-1/3 h-full bg-green-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div>
                    <div className="flex justify-between text-xs mb-2">
                      <span className="text-gray-400">Compression</span>
                      <span className="text-white">2.5:1</span>
                    </div>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <div className="w-1/2 h-full bg-purple-500 rounded-full"></div>
                    </div>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-gray-700">
                    <div className="text-xs text-gray-400 mb-3">Active Sessions</div>
                    <div className="flex gap-2">
                      <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-xs text-white">JD</div>
                      <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center text-xs text-white">SM</div>
                      <div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center text-xs text-white">AL</div>
                      <div className="w-8 h-8 bg-gray-600 rounded-full flex items-center justify-center text-xs text-gray-400">+2</div>
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

export default MotionNotionFinal;