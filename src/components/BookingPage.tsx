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
    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
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
          <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-8">
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-[#F9B233]/20 to-[#FFD700]/20 border border-[#F9B233] rounded-full mb-6 shadow-[0_0_20px_rgba(249,178,51,0.3)]">
            <Check className="w-5 h-5 text-[#F9B233]" />
            <span className="text-[#F9B233] font-black" style={{ fontFamily: 'Poppins, sans-serif' }}>APPLICATION APPROVED</span>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-black text-white mb-4 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
            Congratulations, <span className="text-[#00D4FF]">{applicantData.name}</span>!
          </h1>
          
          <p className="text-xl md:text-2xl text-[#F0F0FF]/90 max-w-4xl mx-auto font-bold" style={{ fontFamily: 'Poppins, sans-serif' }}>
            You've been selected for a <span className="text-[#F9B233] font-black">FREE Strategy Call</span> to discuss 
            how we can help you build your AI-powered creator business.
          </p>
        </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - What to Expect */}
            <div className="space-y-6">
              <div className="bg-[#1D1D27] rounded-2xl p-6 border border-[#00D4FF]/30 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                <h3 className="text-2xl font-black text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  What to Expect on Your Call
                </h3>
                
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <Trophy className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Personalized AI Strategy</h4>
                      <p className="text-gray-300">We'll analyze your {applicantData.niche.toLowerCase()} niche and design a custom AI system for your audience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <Users className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Revenue Optimization Plan</h4>
                      <p className="text-gray-300">Based on your current {applicantData.monthlyIncome} income, we'll show you how to 3-5x your earnings.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] rounded-full flex items-center justify-center flex-shrink-0 mt-1 shadow-lg">
                      <Clock className="w-5 h-5 text-white" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-2 text-lg">Implementation Timeline</h4>
                      <p className="text-gray-300">We'll map out exactly how to launch your AI business in the next 30-60 days.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call Details */}
              <div className="bg-[#1D1D27] rounded-2xl p-6 border border-[#00D4FF]/30 shadow-[0_0_30px_rgba(0,212,255,0.2)]">
                <h3 className="text-xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Call Details
                </h3>
                
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-3 bg-[#2A2A3A] rounded-lg">
                    <span className="text-[#F9B233] font-semibold">Duration:</span>
                    <span className="text-white font-bold">45 minutes</span>
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

              {/* Warning */}
              <div className="bg-gradient-to-r from-[#F9B233]/20 to-[#FFD700]/20 border border-[#F9B233] rounded-xl p-5 shadow-[0_0_20px_rgba(249,178,51,0.3)]">
                <p className="text-[#F9B233] font-bold">
                  <strong>⚠️ Important:</strong> We only accept 3-5 new creators per month. 
                  This spot is reserved for you for the next 48 hours.
                </p>
              </div>

              {/* Back Button */}
              <button
                onClick={onBack}
                className="text-gray-400 hover:text-[#00D4FF] transition-colors font-semibold"
              >
                ← Back to application
              </button>
            </div>

            {/* Right Column - Calendly Widget */}
            <div className="bg-white rounded-2xl overflow-hidden shadow-2xl">
              <div 
                className="calendly-inline-widget" 
                data-url="https://calendly.com/YOUR_CALENDLY_USERNAME_HERE/strategy-call?hide_gdpr_banner=1"
                style={{ minWidth: '320px', height: '700px' }}
                data-processed="true"
              />
              
              {/* Fallback if Calendly doesn't load */}
              <noscript>
                <div className="p-8 text-center">
                  <h3 className="text-xl font-bold mb-4">Schedule Your Strategy Call</h3>
                  <p className="text-gray-600 mb-4">
                    Please enable JavaScript to use our booking system, or contact us directly:
                  </p>
                  <a 
                    href="mailto:support@yourcompany.com" 
                    className="text-blue-600 hover:underline"
                  >
                    support@yourcompany.com
                  </a>
                </div>
              </noscript>
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