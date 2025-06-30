'use client';

import { useState } from 'react';
import { 
  Zap, Brain, Users, TrendingUp, Shield, Sparkles,
  MessageSquare, Video, PenTool, BarChart3, Megaphone, Clock
} from 'lucide-react';

const features = [
  {
    icon: Brain,
    title: 'AI Content Engine',
    description: 'Generate unlimited viral content in your exact voice and style',
    color: 'from-[#6039FF] to-[#2726FF]',
    glow: '#6039FF'
  },
  {
    icon: Users,
    title: 'Auto Support System',
    description: 'Handle 10,000+ customer conversations simultaneously',
    color: 'from-[#2726FF] to-[#6039FF]',
    glow: '#2726FF'
  },
  {
    icon: TrendingUp,
    title: '95% Profit Margins',
    description: 'Keep almost everything you earn with zero overhead',
    color: 'from-[#F9B233] to-[#FF8C00]',
    glow: '#F9B233'
  },
  {
    icon: Zap,
    title: 'Instant Deployment',
    description: 'Launch complete funnels and campaigns in 60 seconds',
    color: 'from-[#28FFB4] to-[#00D9FF]',
    glow: '#28FFB4'
  },
  {
    icon: Shield,
    title: 'Military-Grade Security',
    description: 'Bank-level encryption protects your entire operation',
    color: 'from-[#FF4040] to-[#FF8080]',
    glow: '#FF4040'
  },
  {
    icon: Sparkles,
    title: 'Smart Optimization',
    description: 'AI continuously improves your conversions 24/7',
    color: 'from-[#A855F7] to-[#EC4899]',
    glow: '#A855F7'
  },
  {
    icon: MessageSquare,
    title: 'Omnichannel Presence',
    description: 'Manage all platforms from one unified dashboard',
    color: 'from-[#10B981] to-[#34D399]',
    glow: '#10B981'
  },
  {
    icon: Video,
    title: 'Video Automation',
    description: 'Create and edit professional videos without filming',
    color: 'from-[#F59E0B] to-[#FCD34D]',
    glow: '#F59E0B'
  },
  {
    icon: PenTool,
    title: 'Brand Consistency',
    description: 'Maintain perfect brand voice across all content',
    color: 'from-[#8B5CF6] to-[#A78BFA]',
    glow: '#8B5CF6'
  },
  {
    icon: BarChart3,
    title: 'Real-Time Analytics',
    description: 'Track every metric that matters in one place',
    color: 'from-[#06B6D4] to-[#67E8F9]',
    glow: '#06B6D4'
  },
  {
    icon: Megaphone,
    title: 'Viral Distribution',
    description: 'Automatically post to all platforms at optimal times',
    color: 'from-[#EF4444] to-[#F87171]',
    glow: '#EF4444'
  },
  {
    icon: Clock,
    title: '4-Hour Workweek',
    description: 'Achieve 10x results with 90% less effort',
    color: 'from-[#84CC16] to-[#BEF264]',
    glow: '#84CC16'
  }
];

export default function FeaturesSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="py-20 px-8 relative" style={{ fontFamily: 'Poppins, sans-serif' }}>
      <div className="max-w-[1180px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D1D27] border border-[#6039FF]/30 rounded-full mb-6">
            <Sparkles className="w-4 h-4 text-[#6039FF]" />
            <span className="text-sm font-black text-[#6039FF]" style={{ letterSpacing: '0.1em' }}>MILITARY-GRADE AI FEATURES</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ fontWeight: 900 }}>
            Everything You Need to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6039FF] to-[#2726FF]"> Dominate</span>
          </h2>
          <p className="text-xl text-[#F0F0FF]/70 font-semibold">
            One system. Infinite possibilities. Zero complexity.
          </p>
        </div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-3 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            const isHovered = hoveredIndex === index;
            
            return (
              <div
                key={index}
                className="relative group"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Glow Effect */}
                <div 
                  className={`absolute inset-0 rounded-xl blur-xl transition-opacity duration-300 ${
                    isHovered ? 'opacity-40' : 'opacity-0'
                  }`}
                  style={{ backgroundColor: feature.glow }}
                />
                
                {/* Card */}
                <div className={`relative bg-[#1D1D27] border border-[#6039FF]/20 rounded-xl p-6 h-full transition-all duration-300 ${
                  isHovered ? 'transform -translate-y-2 border-[#6039FF]/40' : ''
                }`}>
                  {/* Icon */}
                  <div className={`relative mb-4 ${isHovered ? 'animate-pulse' : ''}`}>
                    <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} rounded-lg blur-lg opacity-50`} />
                    <div className={`relative w-12 h-12 bg-gradient-to-r ${feature.color} rounded-lg flex items-center justify-center`}>
                      <Icon className="w-6 h-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <h3 className="text-lg font-black mb-2" style={{ fontWeight: 900 }}>{feature.title}</h3>
                  <p className={`text-sm text-[#F0F0FF]/60 transition-all duration-300 font-medium ${
                    isHovered ? 'text-[#F0F0FF]/80' : ''
                  }`}>
                    {feature.description}
                  </p>
                  
                  {/* Hover Indicator */}
                  <div className={`absolute bottom-4 right-4 transition-all duration-300 ${
                    isHovered ? 'opacity-100 transform translate-x-0' : 'opacity-0 transform translate-x-2'
                  }`}>
                    <div className="w-2 h-2 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-full animate-pulse" />
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <p className="text-lg text-[#F0F0FF]/70 mb-6 font-semibold">
            And this is just the beginning...
          </p>
          <button className="relative group">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
            <div className="relative bg-gradient-to-r from-[#6039FF] to-[#2726FF] text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-105 transition-transform duration-300" style={{ fontWeight: 900, letterSpacing: '0.05em' }}>
              SEE ALL 47+ FEATURES
            </div>
          </button>
        </div>
      </div>
    </section>
  );
} 