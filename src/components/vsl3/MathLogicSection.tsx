'use client';

import { useEffect, useRef, useState } from 'react';
import { TrendingDown, TrendingUp, AlertCircle, CheckCircle2 } from 'lucide-react';

export default function MathLogicSection() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const oldModel = [
    { label: 'Revenue', value: '$15K/mo', trend: 'down' },
    { label: 'Team Size', value: '8-12 people', trend: 'up' },
    { label: 'Profit Margin', value: '15-25%', trend: 'down' },
    { label: 'Work Hours', value: '60-80/week', trend: 'up' },
    { label: 'Overhead', value: '$11K/mo', trend: 'up' },
  ];

  const newModel = [
    { label: 'Revenue', value: '$95K/mo', trend: 'up' },
    { label: 'Team Size', value: '0 people', trend: 'down' },
    { label: 'Profit Margin', value: '95%', trend: 'up' },
    { label: 'Work Hours', value: '4-8/week', trend: 'down' },
    { label: 'Overhead', value: '$500/mo', trend: 'down' },
  ];

  return (
    <section ref={sectionRef} className="py-20 px-8 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1180px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black mb-4 tracking-tight" style={{ fontWeight: 900 }}>
            The Math Doesn't
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF4040] to-[#FF8080]"> Lie</span>
          </h2>
          <p className="text-xl text-[#F0F0FF]/70 font-semibold">
            Traditional creator business vs. AI-powered operation
          </p>
        </div>

        {/* Comparison Grid */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {/* Old Model */}
          <div className={`relative group ${isVisible ? 'animate-slideInLeft' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#FF4040]/20 to-transparent rounded-lg blur-xl" />
            <div className="relative bg-[#1D1D27] border border-[#FF4040]/30 rounded-lg p-8 hover:border-[#FF4040]/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <AlertCircle className="w-6 h-6 text-[#FF4040]" />
                <h3 className="text-2xl font-black" style={{ fontWeight: 900 }}>Old Model</h3>
                <span className="text-sm text-[#FF4040] font-black" style={{ fontWeight: 800 }}>(DYING)</span>
              </div>
              
              <div className="space-y-4">
                {oldModel.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-[#FF4040]/10">
                    <span className="text-[#F0F0FF]/70 font-medium">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold">{item.value}</span>
                      {item.trend === 'down' ? (
                        <TrendingDown className="w-4 h-4 text-[#FF4040]" />
                      ) : (
                        <TrendingUp className="w-4 h-4 text-[#FF4040]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* New Model */}
          <div className={`relative group ${isVisible ? 'animate-slideInRight' : 'opacity-0'}`}>
            <div className="absolute inset-0 bg-gradient-to-r from-[#28FFB4]/20 to-transparent rounded-lg blur-xl" />
            <div className="relative bg-[#1D1D27] border border-[#28FFB4]/30 rounded-lg p-8 hover:border-[#28FFB4]/50 transition-colors">
              <div className="flex items-center gap-3 mb-6">
                <CheckCircle2 className="w-6 h-6 text-[#28FFB4]" />
                <h3 className="text-2xl font-black" style={{ fontWeight: 900 }}>Zephryx AI Model</h3>
                <span className="text-sm text-[#28FFB4] font-black" style={{ fontWeight: 800 }}>(FUTURE)</span>
              </div>
              
              <div className="space-y-4">
                {newModel.map((item, index) => (
                  <div key={index} className="flex items-center justify-between py-3 border-b border-[#28FFB4]/10">
                    <span className="text-[#F0F0FF]/70 font-medium">{item.label}</span>
                    <div className="flex items-center gap-2">
                      <span className="font-mono text-lg font-bold">{item.value}</span>
                      {item.trend === 'up' ? (
                        <TrendingUp className="w-4 h-4 text-[#28FFB4]" />
                      ) : (
                        <TrendingDown className="w-4 h-4 text-[#28FFB4]" />
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Animated Stats Bar */}
        <div className={`relative ${isVisible ? 'animate-fadeIn' : 'opacity-0'}`}>
          <div className="bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-lg p-8 text-center overflow-hidden">
            <div className="relative z-10">
              <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                <div className="text-center">
                  <div className="text-5xl font-black font-mono text-white mb-2" style={{ fontWeight: 900 }}>6.3X</div>
                  <div className="text-white/80 uppercase tracking-wide text-sm font-bold">More Income</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/20" />
                <div className="text-center">
                  <div className="text-5xl font-black font-mono text-white mb-2" style={{ fontWeight: 900 }}>90%</div>
                  <div className="text-white/80 uppercase tracking-wide text-sm font-bold">Less Work</div>
                </div>
                <div className="hidden md:block w-px h-16 bg-white/20" />
                <div className="text-center">
                  <div className="text-5xl font-black font-mono text-white mb-2" style={{ fontWeight: 900 }}>95%</div>
                  <div className="text-white/80 uppercase tracking-wide text-sm font-bold">Profit Margin</div>
                </div>
              </div>
            </div>
            
            {/* Animated Background */}
            <div className="absolute inset-0 opacity-20">
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white to-transparent animate-shimmer" />
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes slideInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes slideInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }
        
        @keyframes fadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        
        .animate-slideInLeft {
          animation: slideInLeft 0.8s ease-out;
        }
        
        .animate-slideInRight {
          animation: slideInRight 0.8s ease-out;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.8s ease-out 0.4s both;
        }
        
        .animate-shimmer {
          animation: shimmer 2s linear infinite;
        }
      `}</style>
    </section>
  );
} 