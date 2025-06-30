'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight, Quote, TrendingUp } from 'lucide-react';

const testimonials = [
  {
    id: 1,
    name: 'Sarah Chen',
    role: 'Fitness Creator',
    image: '/api/placeholder/150/150',
    quote: 'I went from managing 12 contractors to running everything with AI. My revenue jumped from $22K to $147K/month in 90 days.',
    stats: {
      before: '$22K/mo',
      after: '$147K/mo',
      growth: '6.7x Growth'
    },
    highlight: 'Zero employees, 95% margins'
  },
  {
    id: 2,
    name: 'Marcus Rodriguez',
    role: 'Business Coach',
    image: '/api/placeholder/150/150',
    quote: 'The AI handles all my content, funnels, and customer support. I work 4 hours a week and make more than I did working 60.',
    stats: {
      before: '$35K/mo',
      after: '$198K/mo',
      growth: '5.6x Growth'
    },
    highlight: '4 hours/week workload'
  },
  {
    id: 3,
    name: 'Emma Thompson',
    role: 'Lifestyle Influencer',
    image: '/api/placeholder/150/150',
    quote: 'Zephryx AI replaced my entire team. Now I focus only on what I love while the system handles everything else.',
    stats: {
      before: '$18K/mo',
      after: '$112K/mo',
      growth: '6.2x Growth'
    },
    highlight: '100% automated operations'
  },
  {
    id: 4,
    name: 'David Kim',
    role: 'Tech Educator',
    image: '/api/placeholder/150/150',
    quote: 'From $45K with a team of 8 to $285K solo. The AI system is like having a Fortune 500 operations team.',
    stats: {
      before: '$45K/mo',
      after: '$285K/mo',
      growth: '6.3x Growth'
    },
    highlight: 'Solo operation at scale'
  }
];

export default function TestimonialsSection() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying]);

  const handlePrevious = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  return (
    <section className="py-20 px-8 relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1180px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D1D27] border border-[#6039FF]/30 rounded-full mb-6">
            <Quote className="w-4 h-4 text-[#6039FF]" />
            <span className="text-sm font-black text-[#6039FF]" style={{ letterSpacing: '0.1em' }}>REAL CREATORS. REAL RESULTS.</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight" style={{ fontWeight: 900 }}>
            237 Creators Can't Be
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6039FF] to-[#2726FF]"> Wrong</span>
          </h2>
        </div>

        {/* Testimonials Carousel */}
        <div className="relative">
          <div className="overflow-hidden rounded-2xl">
            <div 
              className="flex transition-transform duration-500 ease-out"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="w-full flex-shrink-0 px-4">
                  <div className="relative group">
                    {/* Card Background with Glow */}
                    <div className="absolute inset-0 bg-gradient-to-r from-[#6039FF]/20 to-[#2726FF]/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative bg-[#1D1D27] border border-[#6039FF]/20 rounded-2xl p-8 md:p-12 hover:border-[#6039FF]/40 transition-all duration-300">
                      <div className="grid md:grid-cols-2 gap-8 items-center">
                        {/* Left: Profile and Quote */}
                        <div>
                          <div className="flex items-start gap-6 mb-6">
                            {/* Profile Image with Spotlight Effect */}
                            <div className="relative group/image">
                              <div className="absolute inset-0 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-full blur-xl opacity-0 group-hover/image:opacity-50 transition-opacity duration-300" />
                              <div className="relative w-24 h-24 rounded-full overflow-hidden grayscale group-hover/image:grayscale-0 transition-all duration-300">
                                <Image
                                  src={testimonial.image}
                                  alt={testimonial.name}
                                  fill
                                  className="object-cover"
                                />
                              </div>
                            </div>
                            
                            <div>
                              <h3 className="text-2xl font-black mb-1" style={{ fontWeight: 900 }}>{testimonial.name}</h3>
                              <p className="text-[#6039FF] font-semibold">{testimonial.role}</p>
                            </div>
                          </div>
                          
                          <blockquote className="text-lg text-[#F0F0FF]/80 italic mb-6 font-medium">
                            "{testimonial.quote}"
                          </blockquote>
                          
                          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#F9B233]/10 border border-[#F9B233]/30 rounded-full">
                            <TrendingUp className="w-4 h-4 text-[#F9B233]" />
                            <span className="text-sm font-black text-[#F9B233]" style={{ fontWeight: 800 }}>{testimonial.highlight}</span>
                          </div>
                        </div>
                        
                        {/* Right: Stats */}
                        <div className="bg-[#0A0A0F] rounded-xl p-8 border border-[#6039FF]/10">
                          <div className="space-y-6">
                            <div>
                              <p className="text-sm text-[#F0F0FF]/50 mb-2 font-medium">Before Zephryx</p>
                              <p className="text-3xl font-black font-mono text-[#FF4040]" style={{ fontWeight: 900 }}>{testimonial.stats.before}</p>
                            </div>
                            
                            <div className="relative">
                              <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                                <div className="w-12 h-12 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-full flex items-center justify-center">
                                  <TrendingUp className="w-6 h-6 text-white" />
                                </div>
                              </div>
                              <div className="h-px bg-gradient-to-r from-transparent via-[#6039FF] to-transparent" />
                            </div>
                            
                            <div>
                              <p className="text-sm text-[#F0F0FF]/50 mb-2 font-medium">After Zephryx</p>
                              <p className="text-3xl font-black font-mono text-[#28FFB4]" style={{ fontWeight: 900 }}>{testimonial.stats.after}</p>
                            </div>
                            
                            <div className="pt-4 border-t border-[#6039FF]/20">
                              <p className="text-2xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[#6039FF] to-[#2726FF]" style={{ fontWeight: 900 }}>
                                {testimonial.stats.growth}
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={handlePrevious}
              className="p-3 bg-[#1D1D27] border border-[#6039FF]/30 rounded-lg hover:border-[#6039FF]/50 transition-colors"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
            
            <div className="flex gap-2">
              {testimonials.map((_, index) => (
                <button
                  key={index}
                  onClick={() => {
                    setIsAutoPlaying(false);
                    setCurrentIndex(index);
                  }}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    index === currentIndex
                      ? 'w-8 bg-gradient-to-r from-[#6039FF] to-[#2726FF]'
                      : 'w-2 bg-[#6039FF]/30 hover:bg-[#6039FF]/50'
                  }`}
                />
              ))}
            </div>
            
            <button
              onClick={handleNext}
              className="p-3 bg-[#1D1D27] border border-[#6039FF]/30 rounded-lg hover:border-[#6039FF]/50 transition-colors"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
} 