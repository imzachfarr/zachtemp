'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface FinalCTAProps {
  onCTAClick: () => void;
}

export default function FinalCTA({ onCTAClick }: FinalCTAProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-transparent via-blue-900/10 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Final headline */}
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Your AI Empire Starts With
            <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text">
              One Simple Decision
            </span>
          </h2>

          {/* The choice */}
          <div className="grid md:grid-cols-2 gap-8 mb-12 max-w-3xl mx-auto">
            <div className="bg-gray-900/20 rounded-xl p-6 border border-gray-500/20">
              <h3 className="text-xl font-bold text-gray-400 mb-3">Option 1: Do Nothing</h3>
              <ul className="text-gray-400 text-left space-y-2">
                <li>• Stay stuck in the same place</li>
                <li>• Watch others build AI fortunes</li>
                <li>• Wonder "what if" forever</li>
                <li>• Miss the biggest opportunity of our lifetime</li>
              </ul>
            </div>
            <div className="bg-yellow-900/20 rounded-xl p-6 border border-yellow-500/20">
              <h3 className="text-xl font-bold text-yellow-400 mb-3">Option 2: Take Action</h3>
              <ul className="text-gray-300 text-left space-y-2">
                <li>• Own a profitable AI business in 90 days</li>
                <li>• Join the new class of AI entrepreneurs</li>
                <li>• Build generational wealth</li>
                <li>• Live life on your terms</li>
              </ul>
            </div>
          </div>

          {/* Guarantee box */}
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-2xl p-8 mb-12 border border-blue-500/30">
            <h3 className="text-2xl font-bold text-white mb-4">
              Our Iron-Clad Guarantee
            </h3>
            <p className="text-lg text-gray-300 mb-4">
              If you don't have a profitable AI business generating at least $10,000/month 
              within 90 days, we'll work with you for FREE until you do, or give you a 
              full refund. That's how confident we are.
            </p>
            <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                90-Day Guarantee
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                100% Risk-Free
              </span>
              <span className="flex items-center gap-1">
                <svg className="w-4 h-4 text-green-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Questions Asked
              </span>
            </div>
          </div>

          {/* Final message */}
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            In 5 years, everyone will have an AI business. The question is: 
            will you be one of the pioneers who got in early and built an empire, 
            or will you be buying from them?
          </p>

          {/* CTA buttons */}
          <div className="space-y-4">
            <motion.button
              onClick={onCTAClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-10 py-6 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 shadow-2xl shadow-blue-500/25"
            >
              <span className="relative z-10">Book Your AI Asset Strategy Call Now</span>
              <svg className="w-6 h-6 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            
            <p className="text-gray-500 text-sm">
              🔒 Your information is 100% secure. We respect your privacy.
            </p>
          </div>

          {/* PS section */}
          <div className="mt-16 text-left max-w-2xl mx-auto">
            <p className="text-gray-400 italic">
              <span className="font-bold text-white">P.S.</span> - Every day you wait, 
              someone else is launching their AI business in YOUR market. The AI revolution 
              won't wait for you. This page might not be here tomorrow - we can only work 
              with a limited number of clients. If you're seeing this, you still have a chance. 
              Don't let it slip away.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 