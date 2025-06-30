'use client';

import { Shield, CheckCircle2, Award, Sparkles } from 'lucide-react';
import { useEffect, useRef } from 'react';

export default function GuaranteeSection() {
  const sparklesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const container = sparklesRef.current;
    if (!container) return;

    const createSparkle = () => {
      const sparkle = document.createElement('div');
      sparkle.className = 'sparkle';
      sparkle.style.left = Math.random() * 100 + '%';
      sparkle.style.animationDelay = Math.random() * 2 + 's';
      sparkle.style.animationDuration = (2 + Math.random() * 2) + 's';
      container.appendChild(sparkle);

      setTimeout(() => sparkle.remove(), 4000);
    };

    const interval = setInterval(createSparkle, 300);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 px-8 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1180px] mx-auto">
        <div className="relative">
          {/* Golden Glow Background */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F9B233]/20 via-[#FFD700]/20 to-[#F9B233]/20 rounded-3xl blur-3xl" />
          
          {/* Main Container */}
          <div className="relative bg-gradient-to-br from-[#F9B233]/10 to-[#FFD700]/10 rounded-3xl border border-[#F9B233]/30 overflow-hidden">
            {/* Sparkles Container */}
            <div ref={sparklesRef} className="absolute inset-0 pointer-events-none" />
            
            {/* Shimmer Effect */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FFD700]/30 to-transparent animate-shimmer-slow" />
            </div>
            
            {/* Content */}
            <div className="relative z-10 p-12 md:p-16 text-center">
              {/* Badge */}
              <div className="inline-flex items-center justify-center w-20 h-20 bg-gradient-to-r from-[#F9B233] to-[#FFD700] rounded-full mb-8 mx-auto">
                <Shield className="w-10 h-10 text-white" />
              </div>
              
              <h2 className="text-4xl md:text-5xl font-black mb-6" style={{ fontWeight: 900 }}>
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#F9B233] to-[#FFD700]">
                  100% Risk-Free
                </span>
                <br />
                Money-Back Guarantee
              </h2>
              
              <p className="text-xl text-[#F0F0FF]/80 mb-12 max-w-3xl mx-auto font-medium">
                Try Zephryx AI for 30 full days. If you don't see dramatic results, 
                or if you're not completely satisfied for ANY reason, we'll refund 
                every penny. No questions asked.
              </p>
              
              {/* Guarantee Points */}
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {[
                  {
                    icon: CheckCircle2,
                    title: 'No Risk',
                    description: 'Full refund within 30 days'
                  },
                  {
                    icon: Award,
                    title: 'Guaranteed Results',
                    description: 'Or your money back'
                  },
                  {
                    icon: Sparkles,
                    title: 'Instant Access',
                    description: 'Start using AI immediately'
                  }
                ].map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <div key={index} className="relative group">
                      <div className="absolute inset-0 bg-[#F9B233]/10 rounded-xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                      <div className="relative bg-[#1D1D27]/50 backdrop-blur-sm border border-[#F9B233]/20 rounded-xl p-6 hover:border-[#F9B233]/40 transition-colors">
                        <Icon className="w-8 h-8 text-[#F9B233] mb-4 mx-auto" />
                        <h3 className="text-lg font-black mb-2" style={{ fontWeight: 900 }}>{item.title}</h3>
                        <p className="text-sm text-[#F0F0FF]/60 font-medium">{item.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
              
              {/* Trust Statement */}
              <div className="bg-[#1D1D27]/50 backdrop-blur-sm rounded-2xl p-8 border border-[#F9B233]/20 max-w-2xl mx-auto">
                <p className="text-lg text-[#F0F0FF]/80 italic font-medium">
                  "We're so confident in Zephryx AI that we're willing to take all the risk. 
                  You have nothing to lose and everything to gain."
                </p>
                <div className="mt-4">
                  <p className="text-sm text-[#F9B233] font-black" style={{ fontWeight: 800 }}>— Zach Koca, Founder</p>
                </div>
              </div>
              
              {/* CTA */}
              <div className="mt-12">
                <button className="relative group">
                  <div className="absolute inset-0 bg-gradient-to-r from-[#F9B233] to-[#FFD700] rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
                  <div className="relative bg-gradient-to-r from-[#F9B233] to-[#FFD700] text-[#0A0A0F] px-8 py-4 rounded-lg font-black text-lg hover:scale-105 transition-transform duration-300" style={{ fontWeight: 900, letterSpacing: '0.05em' }}>
                    CLAIM YOUR RISK-FREE SPOT NOW
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes shimmer-slow {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        @keyframes sparkle-fall {
          0% {
            transform: translateY(-20px) scale(0);
            opacity: 0;
          }
          20% {
            transform: translateY(0) scale(1);
            opacity: 1;
          }
          100% {
            transform: translateY(100px) scale(0);
            opacity: 0;
          }
        }
        
        .animate-shimmer-slow {
          animation: shimmer-slow 4s linear infinite;
        }
        
        :global(.sparkle) {
          position: absolute;
          width: 4px;
          height: 4px;
          background: #FFD700;
          border-radius: 50%;
          animation: sparkle-fall linear;
          pointer-events: none;
          box-shadow: 0 0 6px #FFD700;
        }
      `}</style>
    </section>
  );
} 