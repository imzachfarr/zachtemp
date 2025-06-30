'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function VSL2Page() {
  const router = useRouter();
  const [showCTA, setShowCTA] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    // Show CTA after 90 seconds
    const timer = setTimeout(() => {
      setShowCTA(true);
    }, 90000);

    // Countdown timer
    const countdown = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return prev;
      });
    }, 1000);

    return () => {
      clearTimeout(timer);
      clearInterval(countdown);
    };
  }, []);

  const handleCTAClick = () => {
    router.push('/landing2');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Warning bar */}
      <div className="bg-blue-600 text-white text-center py-2 font-bold">
        ⚠️ Limited Time: This Video Will Be Taken Down Soon ⚠️
      </div>

      {/* Header */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white">ZEPHRYX LABS</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Headline */}
        <div className="text-center mb-8">
          <h2 className="text-5xl font-bold text-black mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            "WATCH THIS FREE VIDEO TO DISCOVER..."
          </h2>
          <div className="bg-blue-100 inline-block px-4 py-2 mb-6 border-2 border-blue-200">
            <h3 className="text-4xl font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
              How To Build A $1,000,000 AI Business
              <br />
              In The Next 90 Days (GUARANTEED!)
            </h3>
          </div>
          <p className="text-2xl text-gray-800 font-bold">
            Even If You Have ZERO Tech Skills, ZERO Business Experience, 
            <br />
            And ZERO Money To Start!
          </p>
        </div>

        {/* Countdown timer */}
        <div className="bg-gray-800 text-white text-center py-4 mb-8 rounded">
          <p className="text-xl font-bold mb-2">THIS OFFER EXPIRES IN:</p>
          <div className="text-4xl font-bold text-blue-400">
            {String(timeLeft.hours).padStart(2, '0')}:
            {String(timeLeft.minutes).padStart(2, '0')}:
            {String(timeLeft.seconds).padStart(2, '0')}
          </div>
        </div>

        {/* Video container */}
        <div className="bg-black p-2 mb-8">
          <div className="relative aspect-video bg-gray-900">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-12 py-6 rounded"
                >
                  ▶ CLICK HERE TO PLAY VIDEO
                </button>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-xl">Video Playing...</p>
              </div>
            )}
          </div>
        </div>

        {/* CTA Button */}
        {showCTA && (
          <div className="text-center animate-pulse">
            <button
              onClick={handleCTAClick}
              className="bg-blue-600 hover:bg-blue-700 text-white text-3xl font-bold px-12 py-6 rounded shadow-lg transform hover:scale-105 transition-transform"
              style={{ fontFamily: 'Arial, sans-serif' }}
            >
              YES! BUILD MY AI BUSINESS NOW! →
            </button>
            <p className="text-blue-600 text-xl font-bold mt-4">
              ⬆️ CLICK THE BUTTON ABOVE TO GET STARTED ⬆️
            </p>
            <p className="text-gray-700 text-lg mt-2">
              <span className="font-bold text-gray-900">Note:</span> Only 3 Spots Left At This Price
            </p>
          </div>
        )}

        {/* Trust badges */}
        <div className="mt-12 text-center">
          <div className="bg-gray-100 py-8 px-4 border-4 border-gray-300">
            <p className="text-xl font-bold mb-4">AS SEEN ON:</p>
            <div className="flex flex-wrap justify-center gap-8 text-2xl font-bold text-gray-600">
              <span>CNN</span>
              <span>FOX</span>
              <span>NBC</span>
              <span>ABC</span>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mt-12">
          <h3 className="text-3xl font-bold text-center mb-8 text-gray-900">
            REAL RESULTS FROM REAL PEOPLE:
          </h3>
          <div className="space-y-6">
            <div className="bg-gray-100 p-6 border-2 border-gray-300">
              <p className="text-xl font-bold mb-2">"$127,000 in 60 Days!"</p>
              <p className="text-lg">
                "I was skeptical at first, but this system ACTUALLY WORKS! 
                I'm now making more in a month than I used to make in a year!"
              </p>
              <p className="text-gray-600 mt-2">- John D., California</p>
            </div>
            <div className="bg-gray-100 p-6 border-2 border-gray-300">
              <p className="text-xl font-bold mb-2">"From Zero to $50K/Month!"</p>
              <p className="text-lg">
                "I had no idea what AI even was 3 months ago. Now I'm running 
                a profitable AI business thanks to this system!"
              </p>
              <p className="text-gray-600 mt-2">- Sarah M., Texas</p>
            </div>
          </div>
        </div>

        {/* Final urgency */}
        <div className="mt-12 bg-gray-800 text-white p-8 text-center rounded">
          <p className="text-2xl font-bold mb-4">
            TIME IS RUNNING OUT
          </p>
          <p className="text-xl">
            This page will be taken down soon.
            <br />
            Don't miss your chance to build your AI empire!
          </p>
        </div>


      </div>
    </div>
  );
} 