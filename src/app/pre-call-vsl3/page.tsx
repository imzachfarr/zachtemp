'use client';

import { useState } from 'react';

export default function PreCallVSL3Page() {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <div className="bg-[#1A1A1A] border-b border-gray-800 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-[#00D4FF]">ZEPHRYX LABS</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Success message */}
        <div className="bg-green-900/20 border border-green-500 rounded-lg p-6 mb-8 text-center">
          <h2 className="text-2xl font-bold text-green-400 mb-2">
            ✅ Application Submitted Successfully!
          </h2>
          <p className="text-green-300">
            You're one step closer to your AI business empire
          </p>
        </div>

        {/* Video section */}
        <div className="mb-12">
          <h1 className="text-3xl font-bold text-center mb-6 text-white">
            IMPORTANT: Watch This Before Our Call
          </h1>
          
          <div className="bg-black p-2 rounded-lg mb-6 border border-gray-800">
            <div className="relative aspect-video bg-[#0A0A0A] rounded">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    ▶ Watch Pre-Call Training (5 min)
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg">Video Playing...</p>
                </div>
              )}
            </div>
          </div>

          <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4 text-center">
            <p className="text-yellow-300">
              ⚠️ This video contains critical information for our call - please watch it fully
            </p>
          </div>
        </div>

        {/* What to expect */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            What Happens Next:
          </h2>
          <div className="space-y-4 max-w-2xl mx-auto">
            <div className="flex items-start gap-4">
              <div className="bg-[#00D4FF] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="font-bold mb-1 text-white">Watch the video above</h3>
                <p className="text-gray-400">Learn exactly how we'll build your AI business</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#00D4FF] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="font-bold mb-1 text-white">Book your strategy call below</h3>
                <p className="text-gray-400">We'll design your custom AI product on the call</p>
              </div>
            </div>
            <div className="flex items-start gap-4">
              <div className="bg-[#00D4FF] text-black rounded-full w-8 h-8 flex items-center justify-center font-bold flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="font-bold mb-1 text-white">We build everything for you</h3>
                <p className="text-gray-400">Launch in 30 days and start generating revenue</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar section */}
        <div className="mb-12">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            Book Your Strategy Call
          </h2>
          
          <div className="bg-[#1A1A1A] rounded-lg p-8 text-center border border-gray-800">
            <div className="mb-6">
              <p className="text-gray-300 mb-4">
                Choose a time that works best for you:
              </p>
            </div>
            
            {/* Calendar placeholder */}
            <div className="bg-[#0A0A0A] rounded-lg shadow p-8 mb-6 border border-gray-700">
              <p className="text-gray-500 mb-4">[Calendly Widget Would Go Here]</p>
              <div className="grid grid-cols-3 gap-4 max-w-md mx-auto">
                {['Mon 10am', 'Mon 2pm', 'Tue 11am', 'Tue 3pm', 'Wed 10am', 'Wed 4pm'].map((slot, i) => (
                  <button
                    key={i}
                    className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black py-2 px-4 rounded transition-colors"
                  >
                    {slot}
                  </button>
                ))}
              </div>
            </div>

            <p className="text-sm text-gray-400">
              💡 Tip: Block 45 minutes for this call - we'll be mapping out your entire AI business
            </p>
          </div>
        </div>

        {/* Urgency */}
        <div className="bg-red-900/20 border border-red-600 rounded-lg p-6 text-center">
          <p className="text-red-400 font-bold text-lg mb-2">
            ⏰ Limited Availability
          </p>
          <p className="text-red-300">
            We can only take on 3 new clients this month.
            <br />
            Book your call now before spots fill up.
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p>
            © {new Date().getFullYear()} Zephryx Labs. All rights reserved.
          </p>
        </footer>
      </div>
    </div>
  );
} 