'use client';

import { useEffect, useRef, useState } from 'react';
import { Play, Lock } from 'lucide-react';
import RestrictedVideoPlayer from '../RestrictedVideoPlayer';

interface HeroSectionProps {
  showCTA: boolean;
}

export default function HeroSection({ showCTA }: HeroSectionProps) {
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [timeWatched, setTimeWatched] = useState(0);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles: Array<{
      x: number;
      y: number;
      vx: number;
      vy: number;
      size: number;
      opacity: number;
    }> = [];

    // Create particles
    for (let i = 0; i < 50; i++) {
      particles.push({
        x: Math.random() * canvas.width,
        y: Math.random() * canvas.height,
        vx: (Math.random() - 0.5) * 0.5,
        vy: (Math.random() - 0.5) * 0.5,
        size: Math.random() * 2 + 1,
        opacity: Math.random() * 0.5 + 0.1,
      });
    }

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach((particle) => {
        particle.x += particle.vx;
        particle.y += particle.vy;

        if (particle.x < 0 || particle.x > canvas.width) particle.vx *= -1;
        if (particle.y < 0 || particle.y > canvas.height) particle.vy *= -1;

        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(0, 212, 255, ${particle.opacity})`;
        ctx.fill();

        // Draw connections
        particles.forEach((otherParticle) => {
          const distance = Math.sqrt(
            Math.pow(particle.x - otherParticle.x, 2) +
            Math.pow(particle.y - otherParticle.y, 2)
          );

          if (distance < 150) {
            ctx.beginPath();
            ctx.moveTo(particle.x, particle.y);
            ctx.lineTo(otherParticle.x, otherParticle.y);
            ctx.strokeStyle = `rgba(0, 212, 255, ${0.1 * (1 - distance / 150)})`;
            ctx.lineWidth = 0.5;
            ctx.stroke();
          }
        });
      });

      requestAnimationFrame(animate);
    };

    animate();

    const handleResize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* AI Particles Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 pointer-events-none"
      />

      {/* Circuit Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%2300D4FF' fill-opacity='0.2'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
        }} />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto px-8 text-center">
        {/* Warning Badge */}
        <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D1D27] border border-[#00D4FF]/30 rounded-full mb-6 animate-pulse">
          <Lock className="w-4 h-4 text-[#00D4FF]" />
          <span className="text-sm font-black text-[#00D4FF]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, letterSpacing: '0.1em' }}>LIMITED ACCESS</span>
        </div>

        {/* Main Headline */}
        <h1 className="text-5xl md:text-6xl font-black tracking-wider mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, letterSpacing: '0.05em' }}>
          The AI System That's Making
          <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] animate-gradient">
            6-Figure Creators Obsolete
          </span>
        </h1>

        {/* Subheadline */}
        <p className="text-xl md:text-2xl text-[#F0F0FF]/80 mb-8 max-w-3xl mx-auto font-bold" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 700 }}>
          Watch how 237 creators are using military-grade AI to generate
          <span className="text-[#F9B233] font-black"> $50K-$200K/month</span> with
          95% profit margins (no team required)
        </p>

        {/* Video Player */}
        <div className="relative max-w-4xl mx-auto mb-8">
          <div className="relative border-2 border-[#00D4FF]/30 rounded-lg overflow-hidden shadow-[0_0_50px_rgba(0,212,255,0.3)]">
            <RestrictedVideoPlayer
              videoUrl="https://sample-videos.com/zip/10/mp4/SampleVideo_1280x720_1mb.mp4"
              thumbnailUrl="https://via.placeholder.com/1280x720/1d1d27/6039ff?text=VSL+Video"
              allowPause={false}
              allowSeek={false}
              showProgress={true}
              onTimeUpdate={(currentTime: number, duration: number) => {
                setTimeWatched(Math.floor(currentTime));
                // Could trigger CTA at certain time if needed
              }}
              onVideoEnd={() => {
                // Video ended - could trigger CTA here
              }}
              className="aspect-video"
            />
          </div>
        </div>

        {/* CTA Button */}
        {showCTA && (
          <div className="animate-fadeIn">
            <a 
              href="/qualification"
              className="relative group inline-block"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
              <div className="relative bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-105 transition-transform duration-300 shadow-[0_0_30px_rgba(0,212,255,0.5)]" style={{ fontFamily: 'Poppins, sans-serif', fontWeight: 900, letterSpacing: '0.05em' }}>
                APPLY FOR AI SYSTEM ACCESS
                <span className="block text-sm font-bold mt-1 text-white/80" style={{ fontWeight: 600 }}>
                  Only 3 Creator Spots Remaining
                </span>
              </div>
            </a>
          </div>
        )}

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-[#00D4FF]/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-[#00D4FF] rounded-full mt-2 animate-scroll" />
          </div>
        </div>
      </div>

              <style jsx>{`
        @keyframes gradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
        
        .animate-fadeIn {
          animation: fadeIn 0.6s ease-out;
        }
        
        .animate-scroll {
          animation: scroll 1.5s ease-in-out infinite;
        }
      `}</style>


    </section>
  );
} 