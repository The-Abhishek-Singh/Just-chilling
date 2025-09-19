import React from 'react';
import { Check } from 'lucide-react';

const MotionNotionDifferences = () => {
  return (
    <div className="bg-white py-16">
      <div className="max-w-6xl mx-auto px-6">
        {/* Grid wrapper to match the previous section */}
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main content taking 2/3 width */}
          <div className="lg:col-span-2">
            {/* Main Differences Section */}
            <section className="mb-16 border border-1 p-10 rounded-2xl ">
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
                <img 
                  src="/difference.png" 
                  alt="Software Interface" 
                  className="w-full h-auto rounded-lg "
                />
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
            <section className="border border-1 p-10 rounded-2xl" >
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
                <img 
                  src="/Compare.png" 
                  alt="Studio Interface" 
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

export default MotionNotionDifferences;