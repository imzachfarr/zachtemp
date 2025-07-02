'use client';

import { useEffect } from 'react';
import { Check, Clock, Users, Trophy } from 'lucide-react';

interface BookingPageProps {
  applicantData: {
    name: string;
    email: string;
    phone: string;
    followers: string;
    niche: string;
    monthlyIncome: string;
  };
  onBack: () => void;
}

export default function BookingPage({ applicantData, onBack }: BookingPageProps) {
  useEffect(() => {
    // Load Calendly widget
    const script = document.createElement('script');
    script.src = 'https://assets.calendly.com/assets/external/widget.js';
    script.async = true;
    script.onload = () => {
      console.log('Calendly script loaded successfully');
    };
    script.onerror = () => {
      console.error('Failed to load Calendly script');
      showFallback();
    };
    
    // Check if script already exists
    const existingScript = document.querySelector('script[src="https://assets.calendly.com/assets/external/widget.js"]');
    if (!existingScript) {
      document.head.appendChild(script);
    }

    // Fallback timeout - show fallback if Calendly doesn't load in 10 seconds
    const fallbackTimeout = setTimeout(() => {
      const calendlyWidget = document.querySelector('.calendly-inline-widget iframe');
      if (!calendlyWidget) {
        console.warn('Calendly widget not found after 10 seconds, showing fallback');
        showFallback();
      }
    }, 10000);

    const showFallback = () => {
      const fallback = document.getElementById('calendly-fallback');
      const widget = document.querySelector('.calendly-inline-widget')?.parentElement;
      if (fallback && widget) {
        widget.style.display = 'none';
        fallback.classList.remove('hidden');
      }
    };

    return () => {
      clearTimeout(fallbackTimeout);
      // Cleanup - but only remove if we added it
      if (document.head.contains(script)) {
        document.head.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="relative min-h-screen">
      {/* Network/tech background with blue lines and nodes */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/network-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.4) 1px, transparent 1px),
            linear-gradient(rgba(0,212,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}
      />
      
      {/* Main content container */}
      <div className="relative z-10">
        {/* Top bar with Zephryx Labs */}
        <div className="py-2 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <img 
                src="/zephryx-logo-full.png.PNG" 
                alt="Zephryx Labs" 
                className="h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1"
              />
              <p className="text-[#00D4FF] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em]">AI ASSET ACCELERATOR</p>
              <div className="mt-2 sm:mt-3 w-full max-w-xs mx-auto border-b border-[#00D4FF]/30"></div>
            </div>
          </div>
        </div>

        <div className="py-8 px-4">
          <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            You're Almost There — <span className="text-[#00D4FF]">Lock In Your Call Below</span>
          </h1>
        </div>

          {/* Calendly Widget */}
          <div className="mb-8">
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/zach-zephryxlabs/30min?hide_gdpr_banner=1&background_color=0a0a0a&text_color=ffffff&primary_color=00cbff"
                style={{ minWidth: '320px', height: '700px' }}
              />
            </div>
            
            {/* Fallback if Calendly doesn't load */}
            <div id="calendly-fallback" className="hidden">
              <div className="bg-[#1D1D27] rounded-2xl p-8 text-center border border-[#00D4FF]/30">
                <h3 className="text-xl font-bold text-white mb-4">Schedule Your Strategy Call</h3>
                <p className="text-gray-300 mb-6">
                  Click the link below to book your 30-minute strategy session:
                </p>
                <a 
                  href="https://calendly.com/zach-zephryxlabs/30min"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block bg-[#00D4FF] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#00B8E6] transition-colors"
                >
                  Book Your Call Now →
                </a>
              </div>
            </div>
          </div>

          {/* Scarcity Message */}
          <div className="text-center mb-8">
            <div className="bg-gradient-to-r from-[#F9B233]/20 to-[#FFD700]/20 border border-[#F9B233] rounded-xl p-6 max-w-3xl mx-auto shadow-[0_0_20px_rgba(249,178,51,0.3)]">
              <p className="text-[#F9B233] font-bold text-lg md:text-xl" style={{ fontFamily: 'Poppins, sans-serif' }}>
                ⚠️ Spots fill fast. We only build a few AI businesses per month — secure your session now before the calendar closes.
              </p>
            </div>
          </div>

          {/* Call Details */}
          <div className="bg-[#1D1D27] rounded-2xl p-6 border border-[#00D4FF]/30 shadow-[0_0_30px_rgba(0,212,255,0.2)] max-w-2xl mx-auto">
            <h3 className="text-xl font-black text-white mb-4 text-center" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Call Details
            </h3>
            
            <div className="space-y-4">
              <div className="flex justify-between items-center p-3 bg-[#2A2A3A] rounded-lg">
                <span className="text-[#F9B233] font-semibold">Duration:</span>
                <span className="text-white font-bold">30 minutes</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#2A2A3A] rounded-lg">
                <span className="text-[#F9B233] font-semibold">Format:</span>
                <span className="text-white font-bold">Zoom Video Call</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#2A2A3A] rounded-lg">
                <span className="text-[#F9B233] font-semibold">Cost:</span>
                <span className="text-[#F9B233] font-black text-lg">100% FREE</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-[#2A2A3A] rounded-lg">
                <span className="text-[#F9B233] font-semibold">Your Profile:</span>
                <span className="text-white font-bold">{applicantData.followers} followers</span>
              </div>
            </div>
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-12">
            <div className="bg-[#1D1D27] rounded-2xl p-8 border border-[#00D4FF]/30 max-w-3xl mx-auto shadow-[0_0_40px_rgba(0,212,255,0.3)] relative overflow-hidden">
              {/* Subtle background glow */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/10 via-transparent to-[#00B8E6]/10 rounded-2xl" />
              
              <div className="relative z-10">
                <h3 className="text-3xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Ready to <span className="text-[#00D4FF]">10X</span> Your Creator Income with AI?
                </h3>
                <p className="text-[#F0F0FF]/90 mb-6 text-lg font-semibold">
                  Join the exclusive group of creators earning <span className="text-[#F9B233] font-black">$50K-$200K/month</span> with our proven AI system.
                </p>
                <div className="text-[#F9B233] font-black text-xl animate-pulse">
                  👆 Select your preferred time above 👆
                </div>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>
    </div>
  );
} 