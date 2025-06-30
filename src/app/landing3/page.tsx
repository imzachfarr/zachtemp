'use client';

import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react';

export default function Landing3Page() {
  const router = useRouter();
  const [isPlaying, setIsPlaying] = useState(false);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  // Countdown timer
  useEffect(() => {
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

    return () => clearInterval(countdown);
  }, []);

  const handleCTAClick = () => {
    router.push('/application3');
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Urgency bar */}
      <div className="bg-red-600 text-white text-center py-2 font-medium sticky top-0 z-50">
        ⚠️ WARNING: This Offer Expires In {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')} ⚠️
      </div>

      {/* Header */}
      <div className="bg-[#1A1A1A] border-b border-gray-800 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-[#00D4FF]">ZEPHRYX LABS</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Headline */}
        <div className="text-center mb-8">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
            We Build Your <span className="text-[#00D4FF]">$50K+/Month</span>
            <br />
            AI Business In <span className="text-[#00D4FF]">30 Days</span>
            <br />
            (Or You Don't Pay)
          </h1>
          <p className="text-xl text-gray-300 mt-4">
            The same system that helped @alexcooper generate $127K
            <br />
            in her first 60 days with AI
          </p>
        </div>

        {/* Video placeholder */}
        <div className="mb-8">
          <div className="bg-black p-2 rounded-lg border border-gray-800">
            <div className="relative aspect-video bg-[#0A0A0A] rounded">
              {!isPlaying ? (
                <div className="absolute inset-0 flex items-center justify-center">
                  <button
                    onClick={() => setIsPlaying(true)}
                    className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black px-8 py-4 rounded-lg font-semibold text-lg transition-colors"
                  >
                    ▶ See How It Works (2 min)
                  </button>
                </div>
              ) : (
                <div className="absolute inset-0 flex items-center justify-center">
                  <p className="text-white text-lg">Video Playing...</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* CTA Button */}
        <div className="text-center mb-12">
          <button
            onClick={handleCTAClick}
            className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black text-xl font-bold px-12 py-6 rounded-lg shadow-lg transition-colors"
          >
            Yes! Build My AI Business →
          </button>
          <p className="text-gray-400 mt-4">
            <span className="inline-block w-2 h-2 bg-yellow-500 rounded-full"></span> Limited to 3 influencers this month
          </p>
        </div>

        {/* Trust badges */}
        <div className="bg-[#1A1A1A] p-6 rounded-lg mb-12 border border-gray-800">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
            <div>
              <p className="text-3xl font-bold text-[#00D4FF]">127</p>
              <p className="text-sm text-gray-400">Influencers Scaled</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#00D4FF]">$50K+</p>
              <p className="text-sm text-gray-400">Avg Monthly Revenue</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#00D4FF]">30-60</p>
              <p className="text-sm text-gray-400">Days to Profit</p>
            </div>
            <div>
              <p className="text-3xl font-bold text-[#00D4FF]">100%</p>
              <p className="text-sm text-gray-400">Money Back Guarantee</p>
            </div>
          </div>
        </div>

        {/* What we do section */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Here's What We Do For You:
          </h2>
          <div className="space-y-4">
            <div className="bg-[#1A1A1A] p-6 rounded-lg border-l-4 border-[#00D4FF]">
              <h3 className="font-bold text-lg mb-2 text-white">1. Build Your Custom AI Product</h3>
              <p className="text-gray-300">We create a unique AI tool/app specifically for your audience that solves their biggest problem</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg border-l-4 border-[#00D4FF]">
              <h3 className="font-bold text-lg mb-2 text-white">2. Set Up Automated Sales Funnels</h3>
              <p className="text-gray-300">Complete sales system that converts your followers into paying customers 24/7</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg border-l-4 border-[#00D4FF]">
              <h3 className="font-bold text-lg mb-2 text-white">3. Handle All Tech & Operations</h3>
              <p className="text-gray-300">We manage everything technical so you can focus on what you do best - creating content</p>
            </div>
          </div>
        </div>

        {/* Case studies */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-center mb-8 text-white">
            Recent Client Results:
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
              <p className="text-2xl font-bold text-[#00D4FF] mb-2">$127,000</p>
              <p className="font-semibold mb-1 text-white">@alexcooper</p>
              <p className="text-gray-400 text-sm">AI Dating Coach - First 60 days</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
              <p className="text-2xl font-bold text-[#00D4FF] mb-2">$89,000</p>
              <p className="font-semibold mb-1 text-white">@daviddobrik</p>
              <p className="text-gray-400 text-sm">AI Video Editor - First month</p>
            </div>
            <div className="bg-[#1A1A1A] p-6 rounded-lg border border-gray-800">
              <p className="text-2xl font-bold text-[#00D4FF] mb-2">$156,000</p>
              <p className="font-semibold mb-1 text-white">@emmaChamberlain</p>
              <p className="text-gray-400 text-sm">AI Style Assistant - 90 days</p>
            </div>
          </div>
        </div>

        {/* Who this is for */}
        <div className="bg-[#1A1A1A] p-8 rounded-lg mb-12 border border-[#00D4FF]/30">
          <h2 className="text-2xl font-bold text-center mb-6 text-white">
            This Is Perfect For You If:
          </h2>
          <ul className="space-y-3 max-w-2xl mx-auto">
            <li className="flex items-start gap-3">
              <span className="text-[#00D4FF] font-bold text-xl">✓</span>
              <span className="text-gray-300">You have 10K+ engaged followers on any platform</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00D4FF] font-bold text-xl">✓</span>
              <span className="text-gray-300">You want to monetize beyond sponsorships & merch</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00D4FF] font-bold text-xl">✓</span>
              <span className="text-gray-300">You're ready to build a real business asset</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#00D4FF] font-bold text-xl">✓</span>
              <span className="text-gray-300">You can dedicate 2-5 hours per week</span>
            </li>
          </ul>
        </div>

        {/* Guarantee */}
        <div className="bg-gradient-to-r from-[#00D4FF]/20 to-[#00B8E6]/20 border border-[#00D4FF] p-8 rounded-lg text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-white">Our Guarantee:</h2>
          <p className="text-xl mb-6 text-gray-200">
            If we don't get you to $50K/month within 90 days,
            <br />
            we'll work for FREE until you do.
          </p>
          <p className="text-gray-400">
            Plus, you keep everything we build - no questions asked.
          </p>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <button
            onClick={handleCTAClick}
            className="bg-[#00D4FF] hover:bg-[#00B8E6] text-black text-xl font-bold px-12 py-6 rounded-lg shadow-lg transition-colors mb-4"
          >
            Apply Now - Only 2 Spots Left →
          </button>
          <p className="text-gray-400">
            Next price increase in {String(timeLeft.hours).padStart(2, '0')}:{String(timeLeft.minutes).padStart(2, '0')}:{String(timeLeft.seconds).padStart(2, '0')}
          </p>
        </div>

        {/* Footer */}
        <footer className="mt-16 pt-8 border-t border-gray-800 text-center text-xs text-gray-500">
          <p className="mb-2">
            © {new Date().getFullYear()} Zephryx Labs. All rights reserved.
          </p>
          <p>
            Results shown are not typical. Your results will vary based on many factors.
          </p>
        </footer>
      </div>
    </div>
  );
} 