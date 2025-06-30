'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

interface LogicalSectionProps {
  onCTAClick: () => void;
}

export default function LogicalSection({ onCTAClick }: LogicalSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="py-20 px-4 bg-gray-900/50">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The Numbers Don't Lie:
              <span className="block text-blue-400">AI Is The Biggest Opportunity Of Our Lifetime</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Here's the data-driven breakdown of how we turn your investment into a 
              profitable AI business in 90 days or less.
            </p>
          </div>

          {/* Market opportunity */}
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <div className="bg-black/50 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">$15.7T</h3>
              <p className="text-white font-semibold mb-2">AI Market by 2030</p>
              <p className="text-gray-400 text-sm">Growing at 38.1% CAGR - faster than crypto, e-commerce, or any other tech sector</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">87%</h3>
              <p className="text-white font-semibold mb-2">Business AI Adoption</p>
              <p className="text-gray-400 text-sm">Companies desperately need AI solutions - the demand far exceeds supply</p>
            </div>
            <div className="bg-black/50 rounded-xl p-6 border border-blue-500/20">
              <h3 className="text-4xl font-bold text-blue-400 mb-2">$312k</h3>
              <p className="text-white font-semibold mb-2">Avg AI App Revenue</p>
              <p className="text-gray-400 text-sm">In first 12 months for our client businesses (verified by third-party audit)</p>
            </div>
          </div>

          {/* The process */}
          <div className="mb-16">
            <h3 className="text-2xl md:text-3xl font-bold text-white text-center mb-12">
              Our Proven 90-Day Process
            </h3>
            <div className="space-y-8">
              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  1
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">Days 1-30: AI Asset Blueprint</h4>
                  <p className="text-gray-400 mb-3">We analyze 50+ profitable AI niches, validate your market, and design your million-dollar AI app architecture.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Market Research</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Competitor Analysis</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Tech Stack Selection</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  2
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">Days 31-60: Development & Launch</h4>
                  <p className="text-gray-400 mb-3">Our elite dev team builds your AI app using cutting-edge tech. Full MVP ready with payment processing, user auth, and AI integration.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">GPT-4 Integration</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Stripe Payments</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Cloud Deployment</span>
                  </div>
                </div>
              </div>

              <div className="flex gap-6 items-start">
                <div className="flex-shrink-0 w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold">
                  3
                </div>
                <div className="flex-1">
                  <h4 className="text-xl font-semibold text-white mb-2">Days 61-90: Scale to $10k/mo</h4>
                  <p className="text-gray-400 mb-3">Launch with our proven marketing playbooks, get your first 100 paying customers, and optimize for profitability.</p>
                  <div className="flex flex-wrap gap-2">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Growth Hacking</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">Paid Ads Setup</span>
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">SEO Optimization</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ROI breakdown */}
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 md:p-12 mb-12">
            <h3 className="text-2xl font-bold text-white mb-8 text-center">Your ROI Breakdown</h3>
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Your Investment</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between text-gray-300">
                    <span>AI Asset Development</span>
                    <span>$25,000</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>90-Day Launch Support</span>
                    <span>$10,000</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>Marketing & Growth</span>
                    <span>$5,000</span>
                  </li>
                  <li className="flex justify-between font-bold text-yellow-400 border-t border-gray-700 pt-3">
                    <span>Total Investment</span>
                    <span>$40,000</span>
                  </li>
                </ul>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-white mb-4">Expected Returns (Year 1)</h4>
                <ul className="space-y-3">
                  <li className="flex justify-between text-gray-300">
                    <span>Month 3 Revenue</span>
                    <span>$10,000/mo</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>Month 6 Revenue</span>
                    <span>$25,000/mo</span>
                  </li>
                  <li className="flex justify-between text-gray-300">
                    <span>Month 12 Revenue</span>
                    <span>$50,000/mo</span>
                  </li>
                  <li className="flex justify-between font-bold text-green-400 border-t border-gray-700 pt-3">
                    <span>Year 1 Total</span>
                    <span>$312,000</span>
                  </li>
                </ul>
              </div>
            </div>
            <p className="text-center text-blue-400 font-bold text-xl mt-8">
              680% ROI in 12 Months (Average Client Result)
            </p>
          </div>

          {/* What's included */}
          <div className="mb-12">
            <h3 className="text-2xl font-bold text-white text-center mb-8">Everything You Get</h3>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                'Custom AI SaaS Application (You Own 100%)',
                'Complete Source Code & Documentation',
                'Cloud Infrastructure Setup & Deployment',
                'Payment Processing & Subscription Management',
                'User Authentication & Security',
                'AI Model Integration (GPT-4, Claude, etc.)',
                '90 Days of Technical Support',
                'Marketing Website & Landing Pages',
                'Email Marketing Automation',
                'Customer Support System',
                'Analytics & Tracking Dashboard',
                'Growth Hacking Playbook',
                'Paid Ads Templates & Strategy',
                'SEO Optimization Guide',
                'Weekly Strategy Calls',
                'Private Mastermind Access'
              ].map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <svg className="w-5 h-5 text-yellow-500 flex-shrink-0 mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-gray-300">{item}</span>
                </div>
              ))}
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
              <span className="relative z-10">Book Your AI Asset Strategy Call Now</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            <p className="text-gray-500 mt-4 text-sm">
              100% Risk-Free • 90-Day Money-Back Guarantee
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 