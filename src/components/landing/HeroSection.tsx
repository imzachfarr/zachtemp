'use client';

import { motion } from 'framer-motion';

interface HeroSectionProps {
  onCTAClick: () => void;
}

export default function HeroSection({ onCTAClick }: HeroSectionProps) {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center px-4 py-20"
      style={{ backgroundImage: "url('/network-bg.jpg')", backgroundSize: 'cover', backgroundPosition: 'center' }}
    >
      {/* Dark overlay to ensure readability while still letting lights shine through */}
      <div className="absolute inset-0 bg-black/10" />
      <div className="relative z-10 max-w-6xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          {/* Pre-headline */}
          <p className="text-blue-400 text-sm md:text-base font-semibold uppercase tracking-wider mb-4">
            Zephryx Lab's AI Asset Accelerator
          </p>

          {/* Main headline */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Own Your Own
            <span className="block bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">
              Million-Dollar AI Business
            </span>
            In 90 Days or Less
          </h1>

          {/* Sub-headline */}
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We build, launch, and scale your AI startup from zero to profitable. 
            You get 100% ownership. We handle everything.
          </p>

          {/* Value props */}
          <div className="flex flex-wrap justify-center gap-4 mb-10">
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>Done-For-You AI App</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>100% Your Business</span>
            </div>
            <div className="flex items-center gap-2 text-gray-400">
              <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              <span>$10k-$100k/mo Potential</span>
            </div>
          </div>

          {/* CTA Button */}
          <motion.button
            onClick={onCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 shadow-2xl shadow-blue-500/25"
          >
            <span className="relative z-10">Book Your AI Asset Strategy Call Now</span>
            <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
            </svg>
          </motion.button>

          {/* Urgency text */}
          <p className="text-gray-500 mt-4 text-sm">
            Only 3 spots left this month • Applications close in 48 hours
          </p>
        </motion.div>

        {/* Social proof */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">$50M+</p>
            <p className="text-gray-400 text-sm mt-1">AI Assets Built</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">500+</p>
            <p className="text-gray-400 text-sm mt-1">Success Stories</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">90%</p>
            <p className="text-gray-400 text-sm mt-1">Success Rate</p>
          </div>
          <div className="text-center">
            <p className="text-3xl md:text-4xl font-bold text-white">4.9/5</p>
            <p className="text-gray-400 text-sm mt-1">Client Rating</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 