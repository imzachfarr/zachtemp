'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState, useEffect } from 'react';

interface FOMOSectionProps {
  onCTAClick: () => void;
}

export default function FOMOSection({ onCTAClick }: FOMOSectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const [timeLeft, setTimeLeft] = useState({ hours: 47, minutes: 59, seconds: 59 });
  const [spotsLeft, setSpotsLeft] = useState(3);

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
        return prev;
      });
    }, 1000);

    // Simulate spots being taken
    const spotsTimer = setTimeout(() => {
      setSpotsLeft(2);
    }, 30000);

    return () => {
      clearInterval(timer);
      clearTimeout(spotsTimer);
    };
  }, []);

  return (
    <section ref={ref} className="py-20 px-4">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.8 }}
        >
          {/* Urgency banner */}
          <div className="bg-gray-600/20 border border-gray-600/50 rounded-lg p-4 mb-12 text-center">
            <p className="text-gray-400 font-bold text-lg">
              ⚠️ WARNING: Applications Close In {timeLeft.hours}h {timeLeft.minutes}m {timeLeft.seconds}s
            </p>
          </div>

          {/* Section header */}
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
              The Window Is Closing
              <span className="block text-gray-400">Only {spotsLeft} Spots Left This Month</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Every day you wait, someone else is launching their AI business and capturing YOUR market share.
            </p>
          </div>

          {/* Live activity feed */}
          <div className="mb-16">
            <h3 className="text-xl font-bold text-white text-center mb-8">
              🔥 Live Client Activity (Last 24 Hours)
            </h3>
            <div className="space-y-4 max-w-2xl mx-auto">
              {[
                { name: 'Michael R.', location: 'Austin, TX', action: 'Just launched his AI legal assistant', time: '2 hours ago' },
                { name: 'Jennifer L.', location: 'New York, NY', action: 'Hit $15k MRR with her AI content tool', time: '4 hours ago' },
                { name: 'David K.', location: 'San Francisco, CA', action: 'Secured $50k in pre-orders', time: '7 hours ago' },
                { name: 'Amanda S.', location: 'Miami, FL', action: 'Quit her job after hitting $25k/mo', time: '12 hours ago' },
                { name: 'Robert M.', location: 'Chicago, IL', action: 'Just signed his 100th customer', time: '18 hours ago' }
              ].map((activity, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-gray-900/50 rounded-lg p-4 flex items-center justify-between"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                    <div>
                      <p className="text-white font-semibold">{activity.name} • {activity.location}</p>
                      <p className="text-gray-400 text-sm">{activity.action}</p>
                    </div>
                  </div>
                  <p className="text-gray-500 text-sm">{activity.time}</p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Competition is coming */}
          <div className="grid md:grid-cols-2 gap-12 mb-16">
            <div className="bg-gradient-to-r from-red-900/20 to-orange-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                The AI Gold Rush Is NOW
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Google invested $100B in AI this year alone</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Microsoft is pouring $10B into OpenAI</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>Every Fortune 500 is scrambling for AI solutions</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-gray-400">•</span>
                  <span>New AI millionaires are minted every week</span>
                </li>
              </ul>
              <p className="text-orange-400 font-bold mt-4">
                In 12 months, it'll be too late. The winners will already be chosen.
              </p>
            </div>

            <div className="bg-gradient-to-r from-green-900/20 to-blue-900/20 rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-white mb-4">
                Your Unfair Advantage
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Get in before the market saturates</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>We've already built 500+ profitable AI apps</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Skip 2 years of trial and error</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-yellow-400">✓</span>
                  <span>Launch while competitors are still learning</span>
                </li>
              </ul>
              <p className="text-yellow-400 font-bold mt-4">
                This is your chance to be on the winning side of history.
              </p>
            </div>
          </div>

          {/* Social proof numbers */}
          <div className="bg-black/50 rounded-2xl p-8 mb-12">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-4xl font-bold text-blue-400">2,847</p>
                <p className="text-gray-400 text-sm mt-1">People Applied</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-400">500+</p>
                <p className="text-gray-400 text-sm mt-1">Clients Accepted</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-blue-400">82%</p>
                <p className="text-gray-400 text-sm mt-1">Rejection Rate</p>
              </div>
              <div>
                <p className="text-4xl font-bold text-gray-400">{spotsLeft}</p>
                <p className="text-gray-400 text-sm mt-1">Spots Left</p>
              </div>
            </div>
          </div>

          {/* Final urgency */}
          <div className="text-center mb-12">
            <div className="inline-block bg-yellow-500/20 border border-yellow-500/50 rounded-lg px-6 py-3 mb-6">
              <p className="text-yellow-400 font-bold">
                ⏰ Next Price Increase: $10,000 (When These {spotsLeft} Spots Fill)
              </p>
            </div>
            
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              This Opportunity Won't Last Forever
            </h3>
            <p className="text-xl text-gray-400 max-w-2xl mx-auto mb-8">
              We can only take on {spotsLeft} more clients this month. Once they're gone, 
              you'll have to wait until next quarter (if we have space).
            </p>
          </div>

          {/* CTA with urgency */}
          <div className="text-center">
            <motion.button
              onClick={onCTAClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-8 py-5 text-lg font-bold text-white bg-gradient-to-r from-red-600 to-orange-600 rounded-full hover:from-red-700 hover:to-orange-700 shadow-2xl shadow-red-500/25 animate-pulse"
            >
              <span className="relative z-10">Claim Your Spot Before It's Gone</span>
              <svg className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
              </svg>
            </motion.button>
            <p className="text-gray-400 mt-4 font-bold">
              ⚠️ {spotsLeft} spots left • Price increases to $50k when full
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 