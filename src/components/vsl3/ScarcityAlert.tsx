'use client';

import { AlertTriangle, Clock, Users } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function ScarcityAlert() {
  const [spotsLeft, setSpotsLeft] = useState(3);
  const [timeLeft, setTimeLeft] = useState({ hours: 23, minutes: 59, seconds: 59 });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(prev => {
        if (prev.seconds > 0) {
          return { ...prev, seconds: prev.seconds - 1 };
        } else if (prev.minutes > 0) {
          return { ...prev, minutes: prev.minutes - 1, seconds: 59 };
        } else if (prev.hours > 0) {
          return { hours: prev.hours - 1, minutes: 59, seconds: 59 };
        }
        return { hours: 23, minutes: 59, seconds: 59 };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <section className="relative py-0" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Main Alert Bar */}
      <div className="relative overflow-hidden">
        {/* Animated Background */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#FF9900] via-[#FFC94A] to-[#FF9900] animate-gradient-x" />
        
        {/* Hazard Pattern Overlay */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute inset-0" style={{
            backgroundImage: `repeating-linear-gradient(
              45deg,
              transparent,
              transparent 10px,
              rgba(0,0,0,0.1) 10px,
              rgba(0,0,0,0.1) 20px
            )`
          }} />
        </div>
        
        {/* Content */}
        <div className="relative z-10 px-8 py-8">
          <div className="max-w-[1180px] mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-center gap-6 md:gap-12">
              {/* Warning Icon */}
              <div className="relative">
                <div className="absolute inset-0 bg-white rounded-full blur-xl opacity-30 animate-pulse" />
                <div className="relative bg-white/20 backdrop-blur-sm p-4 rounded-full">
                  <AlertTriangle className="w-8 h-8 text-white animate-bounce" />
                </div>
              </div>
              
              {/* Main Message */}
              <div className="text-center md:text-left">
                <h3 className="text-2xl md:text-3xl font-black text-white mb-2 flex items-center justify-center md:justify-start gap-3" style={{ fontWeight: 900 }}>
                  <span className="animate-pulse">🔥</span>
                  Only {spotsLeft} Creator Spots Left This Month
                </h3>
                <p className="text-white/90 text-lg font-semibold">
                  Next Open Enrollment: <span className="font-black">February 2025</span> (if we have space)
                </p>
              </div>
              
              {/* Timer */}
              <div className="bg-black/20 backdrop-blur-sm rounded-lg p-4 border border-white/20">
                <div className="flex items-center gap-4">
                  <Clock className="w-5 h-5 text-white/80" />
                  <div className="flex gap-2 font-mono">
                    <div className="text-center">
                      <div className="text-2xl font-black text-white" style={{ fontWeight: 900 }}>{String(timeLeft.hours).padStart(2, '0')}</div>
                      <div className="text-xs text-white/70 font-bold">HRS</div>
                    </div>
                    <div className="text-2xl font-black text-white">:</div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-white" style={{ fontWeight: 900 }}>{String(timeLeft.minutes).padStart(2, '0')}</div>
                      <div className="text-xs text-white/70 font-bold">MIN</div>
                    </div>
                    <div className="text-2xl font-black text-white">:</div>
                    <div className="text-center">
                      <div className="text-2xl font-black text-white" style={{ fontWeight: 900 }}>{String(timeLeft.seconds).padStart(2, '0')}</div>
                      <div className="text-xs text-white/70 font-bold">SEC</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Secondary Alert */}
      <div className="bg-[#1D1D27] border-y border-[#F9B233]/30 px-8 py-4">
        <div className="max-w-[1180px] mx-auto">
          <div className="flex items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-2">
              <Users className="w-5 h-5 text-[#F9B233]" />
              <span className="text-[#F0F0FF]/80 font-medium">
                <span className="font-black text-[#F9B233]" style={{ fontWeight: 900 }}>2,847</span> creators on waitlist
              </span>
            </div>
            <div className="hidden md:block w-px h-6 bg-[#F9B233]/30" />
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-[#28FFB4] rounded-full animate-pulse" />
              <span className="text-[#F0F0FF]/80 font-medium">
                <span className="font-black text-[#28FFB4]" style={{ fontWeight: 900 }}>14</span> joined in last hour
              </span>
            </div>
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes gradient-x {
          0%, 100% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
        }
        
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 3s ease infinite;
        }
      `}</style>
    </section>
  );
} 