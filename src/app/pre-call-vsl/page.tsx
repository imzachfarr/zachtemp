'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

export default function PreCallVSLPage() {
  const [showCalendar, setShowCalendar] = useState(false);

  useEffect(() => {
    // Show calendar after 2 minutes
    const timer = setTimeout(() => {
      setShowCalendar(true);
    }, 120000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black">
      {/* Header */}
      <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 border-b border-blue-500/20">
        <div className="max-w-6xl mx-auto px-4 py-6">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-2xl md:text-3xl font-bold text-white mb-2">
              Congratulations! You've Been Pre-Approved
            </h1>
            <p className="text-blue-400">
              Watch this important video before your strategy call
            </p>
          </motion.div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid lg:grid-cols-3 gap-12">
          {/* Video section */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
            >
              {/* Video container */}
              <div className="relative aspect-video bg-gray-900 rounded-lg overflow-hidden shadow-2xl mb-8">
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center mb-4 mx-auto">
                      <svg className="w-10 h-10 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                        <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                      </svg>
                    </div>
                    <p className="text-white text-lg">Pre-Call Training Video</p>
                    <p className="text-gray-400 text-sm mt-2">Replace with actual video embed</p>
                  </div>
                </div>
              </div>

              {/* Video description */}
              <div className="bg-gray-900/50 rounded-lg p-6">
                <h2 className="text-xl font-bold text-white mb-4">
                  What You'll Learn In This Video:
                </h2>
                <ul className="space-y-3 text-gray-300">
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>The exact 90-day roadmap we'll use to build your AI business</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>3 case studies of clients who went from $0 to $50k/mo</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>The #1 mistake that kills 90% of AI startups (and how to avoid it)</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <span>How to prepare for your strategy call to maximize results</span>
                  </li>
                </ul>
              </div>
            </motion.div>
          </div>

          {/* Calendar section */}
          <div className="lg:col-span-1">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="sticky top-8"
            >
              {/* Urgency message */}
              <div className="bg-gray-600/20 border border-gray-600/50 rounded-lg p-4 mb-6 text-center">
                <p className="text-gray-400 font-bold">
                  ⚠️ Limited Availability
                </p>
                <p className="text-gray-300 text-sm mt-1">
                  Only 3 strategy calls available this week
                </p>
              </div>

              {/* Calendar embed */}
              <div className="bg-gray-900/50 rounded-lg p-6 border border-blue-500/20">
                <h3 className="text-xl font-bold text-white mb-4 text-center">
                  Book Your Strategy Call
                </h3>
                
                {showCalendar ? (
                  <div className="bg-gray-800 rounded-lg p-8 text-center">
                    <p className="text-gray-400 mb-4">Calendar widget would go here</p>
                    <p className="text-sm text-gray-500">
                      Integrate with Calendly, Cal.com, or similar
                    </p>
                  </div>
                ) : (
                  <div className="text-center">
                    <div className="animate-pulse bg-gray-800 rounded-lg h-64 mb-4" />
                    <p className="text-gray-400 text-sm">
                      Calendar will appear after watching the video
                    </p>
                  </div>
                )}

                {/* What to expect */}
                <div className="mt-6 space-y-3">
                  <h4 className="text-white font-semibold">On Your Call, We'll:</h4>
                  <ul className="text-sm text-gray-300 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Analyze your perfect AI niche</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Create your 90-day launch plan</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Show you exactly how we'll build it</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-400">•</span>
                      <span>Answer all your questions</span>
                    </li>
                  </ul>
                </div>

                {/* Call duration */}
                <div className="mt-6 text-center text-sm text-gray-400">
                  <p>Call Duration: 45 minutes</p>
                  <p>100% Free • No obligation</p>
                </div>
              </div>

              {/* Testimonial */}
              <div className="mt-6 bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-lg p-4">
                <blockquote className="text-sm text-gray-300 italic mb-2">
                  "The strategy call alone was worth $10k. They showed me opportunities 
                  I never would have found myself."
                </blockquote>
                <p className="text-xs text-gray-400">- Mark T., $62k/mo AI Founder</p>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Bottom section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 text-center"
        >
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 max-w-3xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              You're One Call Away From Your AI Empire
            </h3>
            <p className="text-gray-300 mb-6">
              This is your chance to get direct access to the team that's built 
              500+ profitable AI businesses. Don't let this opportunity slip away.
            </p>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                Free Strategy Call
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                No Obligation
              </span>
              <span className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                $10k+ Value
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 