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
    <div className="min-h-screen py-8 px-4 bg-[#0A0A0A]">
        <div className="max-w-6xl mx-auto">
          {/* Header */}
          <div className="text-center mb-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-green-500/20 border border-green-500 rounded-full mb-6">
              <Check className="w-5 h-5 text-green-500" />
              <span className="text-green-500 font-bold">APPLICATION APPROVED</span>
            </div>
            
            <h1 className="text-4xl md:text-5xl font-black text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Congratulations, {applicantData.name}!
            </h1>
            
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              You've been selected for a <span className="text-[#6039FF] font-bold">FREE Strategy Call</span> to discuss 
              how we can help you build your AI-powered creator business.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-start">
            {/* Left Column - What to Expect */}
            <div className="space-y-6">
              <div className="bg-[#1D1D27] rounded-2xl p-6 border border-[#6039FF]/20">
                <h3 className="text-2xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  What to Expect on Your Call
                </h3>
                
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#6039FF]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Trophy className="w-4 h-4 text-[#6039FF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Personalized AI Strategy</h4>
                      <p className="text-gray-300 text-sm">We'll analyze your {applicantData.niche.toLowerCase()} niche and design a custom AI system for your audience.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#6039FF]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Users className="w-4 h-4 text-[#6039FF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Revenue Optimization Plan</h4>
                      <p className="text-gray-300 text-sm">Based on your current {applicantData.monthlyIncome} income, we'll show you how to 3-5x your earnings.</p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="w-8 h-8 bg-[#6039FF]/20 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                      <Clock className="w-4 h-4 text-[#6039FF]" />
                    </div>
                    <div>
                      <h4 className="font-bold text-white mb-1">Implementation Timeline</h4>
                      <p className="text-gray-300 text-sm">We'll map out exactly how to launch your AI business in the next 30-60 days.</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Call Details */}
              <div className="bg-[#1D1D27] rounded-2xl p-6 border border-[#6039FF]/20">
                <h3 className="text-xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                  Call Details
                </h3>
                
                <div className="space-y-3 text-sm">
                  <div className="flex justify-between">
                    <span className="text-gray-400">Duration:</span>
                    <span className="text-white font-semibold">45 minutes</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Format:</span>
                    <span className="text-white font-semibold">Zoom Video Call</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Cost:</span>
                    <span className="text-green-500 font-semibold">100% FREE</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-400">Your Profile:</span>
                    <span className="text-white font-semibold">{applicantData.followers} followers</span>
                  </div>
                </div>
              </div>

              {/* Warning */}
              <div className="bg-yellow-900/20 border border-yellow-600 rounded-lg p-4">
                <p className="text-yellow-300 text-sm">
                  <strong>⚠️ Important:</strong> We only accept 3-5 new creators per month. 
                  This spot is reserved for you for the next 48 hours.
                </p>
              </div>

              {/* Back Button */}
              <button
                onClick={onBack}
                className="text-gray-400 hover:text-white transition-colors"
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
            <div className="bg-[#1D1D27] rounded-2xl p-8 border border-[#6039FF]/20 max-w-3xl mx-auto">
              <h3 className="text-2xl font-bold text-white mb-4" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Ready to 10X Your Creator Income with AI?
              </h3>
              <p className="text-gray-300 mb-6">
                Join the exclusive group of creators earning $50K-$200K/month with our proven AI system.
              </p>
              <div className="text-[#6039FF] font-bold text-lg">
                👆 Select your preferred time above 👆
              </div>
            </div>
          </div>
        </div>
    </div>
  );
} 