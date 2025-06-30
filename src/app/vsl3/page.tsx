'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function VSL3Page() {
  const router = useRouter();
  const [showCTA, setShowCTA] = useState(false);
  const [timeWatched, setTimeWatched] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  // Track time watched for progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setTimeWatched(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Show CTA after 90 seconds
  useEffect(() => {
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
    router.push('/landing3');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Warning bar */}
      <div className="bg-red-600 text-white text-center py-2 font-medium">
        ⚠️ Limited Time: This Video Will Be Taken Down Soon ⚠️
      </div>

      {/* Header */}
      <div className="bg-[#1A1A1A] border-b border-gray-800 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-[#00D4FF]">ZEPHRYX LABS</h1>
        </div>
      </div>

      {/* Trust bar */}
      <div className="bg-[#0F0F0F] border-b border-gray-800 py-3">
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center justify-center gap-2 text-sm text-gray-400">
            <span className="text-green-500 font-semibold">Excellent</span>
            <div className="flex gap-0.5">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-4 h-4 text-green-500 fill-current" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span>1,100+ reviews on</span>
            <span className="font-semibold text-green-500">Trustpilot</span>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">


        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            "HOW TOP INFLUENCERS ARE
            <br />
            QUIETLY MAKING
            <br />
            <span className="text-[#00D4FF]">
              $50K-$200K/MONTH
            </span>
            <br />
            WITH AI BUSINESSES"
          </h1>
        </div>

        {/* Countdown timer */}
        <div className="mb-8">
          <div className="bg-[#1A1A1A] text-center py-4 rounded-lg border border-gray-800">
            <p className="text-lg font-semibold mb-2 text-gray-300">THIS OFFER EXPIRES IN:</p>
            <div className="text-3xl font-bold text-red-500">
              {String(timeLeft.hours).padStart(2, '0')}:
              {String(timeLeft.minutes).padStart(2, '0')}:
              {String(timeLeft.seconds).padStart(2, '0')}
            </div>
          </div>
        </div>

        {/* Video container */}
        <div className="mb-8">
          <div className="bg-black p-2 rounded-lg border border-gray-800">
            <div className="relative aspect-video bg-[#0A0A0A] rounded">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    ▶ CLICK HERE TO PLAY VIDEO
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg">Video Playing...</p>
                </div>
              )}

              {/* Video progress */}
              {isPlaying && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 p-4">
                  <div className="w-full bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-[#00D4FF] h-2 rounded-full transition-all duration-1000"
                      style={{ width: `${Math.min((timeWatched / 180) * 100, 100)}%` }}
                    />
                  </div>
                  <p className="text-white text-sm mt-2 text-center">
                    {Math.floor(timeWatched / 60)}:{(timeWatched % 60).toString().padStart(2, '0')} / 3:00
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Subheadline */}
        <p className="text-xl text-gray-300 text-center mb-8">
          Watch this short video to see how we build automated AI businesses that generate $50K+ per month for influencers like you.
        </p>

        {/* CTA Button */}
        {showCTA && (
          <div className="text-center mb-8">
            <a
              href="/qualification"
              className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black text-xl font-bold px-12 py-6 rounded-lg shadow-lg transition-colors inline-block"
            >
              Apply for AI Business Partnership →
            </a>
            <p className="text-gray-400 mt-4">
              <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span> Limited to 3 influencers this month – 2 spots left
            </p>
          </div>
        )}

        {/* Social proof ticker */}
        <div className="mb-12">
          <div className="bg-[#1A1A1A] border border-[#00D4FF]/30 rounded-lg px-6 py-3 mx-auto max-w-fit">
            <p className="text-[#00D4FF] text-sm font-medium">
              <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full mr-2"></span>
              <span className="font-bold">@alexcooper</span> just launched her AI dating coach •
              <span className="font-bold"> $127K</span> first month
            </p>
          </div>
        </div>

        {/* Trust indicators */}
        <div className="mb-12">
          {/* As featured in */}
          <div className="text-center mb-8">
            <p className="text-gray-500 text-sm font-semibold mb-4">OUR INFLUENCER CLIENTS HAVE BEEN FEATURED IN</p>
            <div className="flex flex-wrap justify-center items-center gap-8 text-gray-600">
              <span className="text-2xl font-bold">FORBES</span>
              <span className="text-2xl font-bold">TechCrunch</span>
              <span className="text-2xl font-bold">The Verge</span>
              <span className="text-2xl font-bold">Mashable</span>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00D4FF]">127</p>
              <p className="text-gray-400 text-sm">Influencers Scaled</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00D4FF]">$50K+</p>
              <p className="text-gray-400 text-sm">Avg Monthly Revenue</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00D4FF]">30-60</p>
              <p className="text-gray-400 text-sm">Days to Profit</p>
            </div>
            <div className="text-center">
              <p className="text-3xl font-bold text-[#00D4FF]">2-5hrs</p>
              <p className="text-gray-400 text-sm">Per Week Required</p>
            </div>
          </div>
        </div>

        {/* Testimonials */}
        <div className="mb-12">
          <h3 className="text-2xl font-bold text-center mb-6 text-white">
            REAL RESULTS FROM REAL PEOPLE:
          </h3>
          <div className="space-y-4">
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
              <p className="text-lg font-bold mb-2 text-[#00D4FF]">"$127,000 in 60 Days!"</p>
              <p className="text-gray-300">
                "I was skeptical at first, but this system ACTUALLY WORKS! 
                I'm now making more in a month than I used to make in a year!"
              </p>
              <p className="text-gray-500 mt-2">- John D., California</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
              <p className="text-lg font-bold mb-2 text-[#00D4FF]">"From Zero to $50K/Month!"</p>
              <p className="text-gray-300">
                "I had no idea what AI even was 3 months ago. Now I'm running 
                a profitable AI business thanks to this system!"
              </p>
              <p className="text-gray-500 mt-2">- Sarah M., Texas</p>
            </div>
          </div>
        </div>

        {/* Final urgency */}
        <div className="bg-red-900/20 border-2 border-red-600 p-8 text-center rounded-lg">
          <p className="text-2xl font-bold mb-2 text-red-500">
            TIME IS RUNNING OUT
          </p>
          <p className="text-lg text-gray-300">
            This page will be taken down soon.
            <br />
            Don't miss your chance to build your AI empire!
          </p>
        </div>

        {/* Footer disclaimers */}
        <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p className="mb-2">
            Disclaimer: This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
          </p>
          <p className="mb-2">
            Results stated above are our personal and client results. Please understand our results are not typical.
          </p>
          <p>
            © {new Date().getFullYear()} Zephryx Labs. All rights reserved.
          </p>
        </footer>
      </div>


    </div>
  );
} 