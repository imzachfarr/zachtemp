'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface UrgencySectionProps {
  onCTAClick: () => void
}

export default function UrgencySection({ onCTAClick }: UrgencySectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-black via-gray-950/10 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Urgency headline */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              Spots are Limited—
              <span className="block text-gray-400">Quality Matters More Than Quantity</span>
            </h2>
          </div>

          {/* Urgency content */}
          <div className="bg-gradient-to-r from-gray-900/20 to-blue-900/20 rounded-2xl p-8 md:p-12 border border-gray-500/30 mb-12">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-gray-500 to-gray-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-12a1 1 0 10-2 0v4a1 1 0 00.293.707l2.828 2.829a1 1 0 101.415-1.415L11 9.586V6z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed mb-8">
              Because we build every AI app from scratch and provide ongoing support, we can only accept a small number of entrepreneurs each month. Once full, this offer closes.
            </p>

            {/* Stats */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
              <div className="text-center">
                <p className="text-3xl font-bold text-gray-400">12</p>
                <p className="text-gray-400 text-sm mt-1">Spots Available This Month</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-blue-400">300+</p>
                <p className="text-gray-400 text-sm mt-1">Applications Received</p>
              </div>
              <div className="text-center">
                <p className="text-3xl font-bold text-yellow-400">4%</p>
                <p className="text-gray-400 text-sm mt-1">Acceptance Rate</p>
              </div>
            </div>

            <div className="bg-black/50 rounded-xl p-6 border border-yellow-500/30">
              <p className="text-yellow-400 font-bold text-lg mb-2">
                ⚠️ CTA Reinforcement
              </p>
              <p className="text-gray-300">
                Don't miss your window—your chance to own a profitable AI asset closes when spots fill.
              </p>
            </div>
          </div>

          {/* CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <motion.button
              onClick={onCTAClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="inline-flex items-center gap-3 px-10 md:px-12 py-5 md:py-6 text-xl md:text-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 shadow-2xl shadow-blue-500/25 animate-pulse"
            >
              <span>Book Your AI Asset Strategy Call</span>
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </motion.button>
            <p className="text-gray-400 text-sm mt-4">
              Limited spots available • No credit card required
            </p>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 