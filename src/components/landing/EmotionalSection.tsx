'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface EmotionalSectionProps {
  onCTAClick: () => void;
}

export default function EmotionalSection({ onCTAClick }: EmotionalSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              Stop Watching Others Build
              <span className="block text-blue-400">The Future You Dream Of</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              While you're stuck in your 9-5, others are building AI empires. 
              It's time to claim your piece of the $15.7 trillion AI revolution.
            </p>
          </div>

          {/* Pain points */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">You're Tired Of...</h3>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Trading Time for Money</h4>
                  <p className="text-gray-400">Working harder but never getting ahead, watching inflation eat your savings while your boss gets richer.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Missing the AI Gold Rush</h4>
                  <p className="text-gray-400">Seeing 22-year-olds make millions with AI while you're stuck googling "how to start an AI business".</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-gray-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">The Technical Overwhelm</h4>
                  <p className="text-gray-400">Drowning in tutorials, courses, and contradicting advice. Analysis paralysis is killing your dreams.</p>
                </div>
              </div>
            </div>

            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-white mb-6">You Dream Of...</h3>
              
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">True Financial Freedom</h4>
                  <p className="text-gray-400">Waking up to $10k+ days. Taking vacations without asking permission. Being the boss of your life.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Building Something That Matters</h4>
                  <p className="text-gray-400">Creating AI that changes lives, solves real problems, and leaves a legacy your kids will be proud of.</p>
                </div>
              </div>

              <div className="flex gap-4">
                <div className="flex-shrink-0 w-12 h-12 bg-yellow-500/20 rounded-full flex items-center justify-center">
                  <svg className="w-6 h-6 text-yellow-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">The Entrepreneur Lifestyle</h4>
                  <p className="text-gray-400">Working from anywhere, scaling without limits, and finally having the time freedom you deserve.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Emotional story */}
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 md:p-12 mb-12">
            <blockquote className="text-lg md:text-xl text-gray-300 italic mb-4">
              "6 months ago, I was a burned-out consultant watching my friends get rich with AI. 
              I had zero coding skills and $5k in savings. Today, my AI SaaS does $47k/month 
              and I work 4 hours a day from Bali. Zephryx didn't just build my app - they 
              built my dream life."
            </blockquote>
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
              <div>
                <p className="text-white font-semibold">Sarah Chen</p>
                <p className="text-gray-400">Founder, AIContentPro</p>
              </div>
            </div>
          </div>

          {/* CTA */}
          <div className="text-center">
            <motion.button
              onClick={onCTAClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 shadow-2xl shadow-blue-500/25"
            >
              <span className="relative z-10">Yes, I Want My AI Business Built For Me</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            <p className="text-gray-500 mt-4 text-sm">
              Join 500+ entrepreneurs who chose freedom over fear
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 