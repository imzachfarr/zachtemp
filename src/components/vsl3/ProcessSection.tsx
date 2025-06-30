'use client';

import { useState } from 'react';
import { Rocket, Settings, TrendingUp, ArrowRight } from 'lucide-react';

const steps = [
  {
    number: '01',
    title: 'Clone Your Creator DNA',
    description: 'Our AI analyzes your content, voice, and style to create a perfect digital twin that thinks and creates like you.',
    icon: Settings,
    image: '/api/placeholder/600/400',
    details: [
      'Upload 10-20 pieces of your best content',
      'AI learns your unique voice and style',
      'Creates unlimited content variations',
      'Maintains 100% brand consistency'
    ]
  },
  {
    number: '02',
    title: 'Deploy Your AI Army',
    description: 'Launch your personalized AI system that handles content, funnels, customer support, and operations 24/7.',
    icon: Rocket,
    image: '/api/placeholder/600/400',
    details: [
      'One-click deployment in 60 seconds',
      'Automatic integration with all platforms',
      'AI agents start working immediately',
      'Zero technical knowledge required'
    ]
  },
  {
    number: '03',
    title: 'Scale to 7 Figures',
    description: 'Watch your revenue explode while working just 4-8 hours per week. The AI handles everything else.',
    icon: TrendingUp,
    image: '/api/placeholder/600/400',
    details: [
      'Average 6.3x revenue increase',
      '95% profit margins maintained',
      'Work from anywhere in the world',
      'Unlimited scaling potential'
    ]
  }
];

export default function ProcessSection() {
  const [activeStep, setActiveStep] = useState(0);

  return (
    <section className="py-20 px-8 relative overflow-hidden" style={{ fontFamily: 'Poppins, sans-serif' }}>
      {/* Blueprint Background Pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='100' height='100' viewBox='0 0 100 100' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%236039FF' stroke-width='0.5'%3E%3Cpath d='M0 0h100v100H0z'/%3E%3Cpath d='M0 10h100M0 20h100M0 30h100M0 40h100M0 50h100M0 60h100M0 70h100M0 80h100M0 90h100'/%3E%3Cpath d='M10 0v100M20 0v100M30 0v100M40 0v100M50 0v100M60 0v100M70 0v100M80 0v100M90 0v100'/%3E%3C/g%3E%3C/svg%3E")`,
          backgroundSize: '100px 100px'
        }} />
      </div>

      <div className="relative z-10 max-w-[1180px] mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-[#1D1D27] border border-[#6039FF]/30 rounded-full mb-6">
            <Rocket className="w-4 h-4 text-[#6039FF]" />
            <span className="text-sm font-black text-[#6039FF]" style={{ letterSpacing: '0.1em' }}>SIMPLE 3-STEP PROCESS</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4" style={{ fontWeight: 900 }}>
            From Zero to
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#6039FF] to-[#2726FF]"> $100K/Month</span>
          </h2>
          <p className="text-xl text-[#F0F0FF]/70 font-semibold">
            In 90 days or less (average result: 67 days)
          </p>
        </div>

        {/* Steps Navigation */}
        <div className="flex justify-center mb-12">
          <div className="flex items-center gap-4 bg-[#1D1D27] p-2 rounded-full border border-[#6039FF]/20">
            {steps.map((step, index) => (
              <button
                key={index}
                onClick={() => setActiveStep(index)}
                className={`relative group transition-all duration-300 ${
                  activeStep === index ? 'scale-110' : ''
                }`}
              >
                {/* Floating Number Tag */}
                <div className={`relative w-16 h-16 rounded-full transition-all duration-300 ${
                  activeStep === index 
                    ? 'bg-gradient-to-r from-[#6039FF] to-[#2726FF]' 
                    : 'bg-[#0A0A0F] border border-[#6039FF]/30'
                }`}>
                  <span className={`absolute inset-0 flex items-center justify-center font-black font-mono text-lg ${
                    activeStep === index ? 'text-white' : 'text-[#6039FF]'
                  }`} style={{ fontWeight: 900 }}>
                    {step.number}
                  </span>
                  {activeStep === index && (
                    <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#6039FF] to-[#2726FF] animate-pulse opacity-50" />
                  )}
                </div>
                
                {/* Connection Line */}
                {index < steps.length - 1 && (
                  <div className={`absolute left-full top-1/2 -translate-y-1/2 w-4 h-0.5 transition-all duration-300 ${
                    index < activeStep ? 'bg-[#6039FF]' : 'bg-[#6039FF]/20'
                  }`} />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Active Step Content */}
        <div className="relative">
          {steps.map((step, index) => {
            const Icon = step.icon;
            const isActive = activeStep === index;
            
            return (
              <div
                key={index}
                className={`transition-all duration-500 ${
                  isActive ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'
                }`}
              >
                <div className="grid md:grid-cols-2 gap-12 items-center">
                  {/* Left: Content */}
                  <div className={`transition-all duration-700 ${
                    isActive ? 'transform translate-x-0' : 'transform -translate-x-20'
                  }`}>
                    <div className="relative">
                      {/* Step Card */}
                      <div className="relative bg-[#1D1D27] border border-[#6039FF]/30 rounded-2xl p-8">
                        {/* Icon Badge */}
                        <div className="absolute -top-6 -left-6">
                          <div className="relative">
                            <div className="absolute inset-0 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-xl blur-xl" />
                            <div className="relative w-16 h-16 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-xl flex items-center justify-center">
                              <Icon className="w-8 h-8 text-white" />
                            </div>
                          </div>
                        </div>
                        
                        <div className="mt-6">
                          <h3 className="text-3xl font-black mb-4" style={{ fontWeight: 900 }}>{step.title}</h3>
                          <p className="text-lg text-[#F0F0FF]/70 mb-6 font-semibold">{step.description}</p>
                          
                          {/* Details List */}
                          <ul className="space-y-3">
                            {step.details.map((detail, detailIndex) => (
                              <li key={detailIndex} className="flex items-start gap-3">
                                <div className="w-6 h-6 rounded-full bg-[#6039FF]/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                                  <div className="w-2 h-2 rounded-full bg-[#6039FF]" />
                                </div>
                                <span className="text-[#F0F0FF]/80 font-medium">{detail}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  {/* Right: Image */}
                  <div className={`relative transition-all duration-700 ${
                    isActive ? 'transform translate-x-0' : 'transform translate-x-20'
                  }`}>
                    <div className="relative">
                      {/* Blueprint Grid Overlay */}
                      <div className="absolute inset-0 rounded-2xl overflow-hidden opacity-10">
                        <div className="absolute inset-0" style={{
                          backgroundImage: `url("data:image/svg+xml,%3Csvg width='20' height='20' viewBox='0 0 20 20' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' stroke='%236039FF' stroke-width='0.5'%3E%3Cpath d='M0 0h20v20H0z'/%3E%3C/g%3E%3C/svg%3E")`,
                          backgroundSize: '20px 20px'
                        }} />
                      </div>
                      
                      {/* Image Container */}
                      <div className="relative bg-[#1D1D27] rounded-2xl overflow-hidden border border-[#6039FF]/30">
                        <div className="aspect-video bg-gradient-to-br from-[#6039FF]/20 to-[#2726FF]/20 flex items-center justify-center">
                          <div className="text-center">
                            <div className="w-24 h-24 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-full flex items-center justify-center mx-auto mb-4">
                              <Icon className="w-12 h-12 text-white" />
                            </div>
                            <p className="text-[#F0F0FF]/60 font-medium">System Preview</p>
                          </div>
                        </div>
                      </div>
                      
                      {/* Floating Elements */}
                      <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-full opacity-20 blur-xl animate-pulse" />
                      <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-r from-[#2726FF] to-[#6039FF] rounded-full opacity-20 blur-xl animate-pulse animation-delay-1000" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom CTA */}
        <div className="text-center mt-16">
          <button className="relative group inline-flex items-center gap-3">
            <div className="absolute inset-0 bg-gradient-to-r from-[#6039FF] to-[#2726FF] rounded-lg blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
            <div className="relative bg-gradient-to-r from-[#6039FF] to-[#2726FF] text-white px-8 py-4 rounded-lg font-black text-lg hover:scale-105 transition-transform duration-300 flex items-center gap-3" style={{ fontWeight: 900, letterSpacing: '0.05em' }}>
              START YOUR TRANSFORMATION
              <ArrowRight className="w-5 h-5" />
            </div>
          </button>
        </div>
      </div>

      <style jsx>{`
        @keyframes pulse {
          0%, 100% { opacity: 0.2; }
          50% { opacity: 0.4; }
        }
        
        .animation-delay-1000 {
          animation-delay: 1s;
        }
      `}</style>
    </section>
  );
} 