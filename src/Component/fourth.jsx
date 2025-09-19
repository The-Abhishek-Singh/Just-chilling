import React from 'react';
import { Users, Calendar, FileText, Settings, Bell, Search } from 'lucide-react';

const MotionNotionFinal = () => {
  return (
    <div className="bg-gray-50 py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid wrapper to match the previous sections */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content taking 2/3 width */}
          <div className="lg:col-span-2">
            
            {/* Feature Differentiation Section */}
            <section className="mb-20 border border-1 p-10 rounded-2xl">
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

            
              {/* Notion Interface Image */}
              <div className="mb-8">
                <img 
                  src="/your-AI.png" 
                  alt="Notion Interface" 
                  className="w-full h-auto rounded-xl "
                />
              </div>
            </section>

            {/* Final Thought Section */}
            <section className="border border-1 p-10 rounded-2xl">
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
                <img 
                  src="/Thought.png" 
                  alt="Professional Audio Suite Interface" 
                  className="w-full h-auto rounded-lg "
                />
              </div>
            </section>
          </div>

          {/* Invisible div to maintain grid structure and alignment */}
          <div className="hidden lg:block"></div>
        </div>
      </div>
    </div>
  );
};

export default MotionNotionFinal;