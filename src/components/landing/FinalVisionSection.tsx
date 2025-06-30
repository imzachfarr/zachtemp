'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface FinalVisionSectionProps {
  onCTAClick: () => void
}

export default function FinalVisionSection({ onCTAClick }: FinalVisionSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-black via-blue-950/20 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Vision headline */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              What Does Your Life Look Like
              <span className="block text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-500 bg-clip-text">
                After You Own an AI Asset?
              </span>
            </h2>
          </div>

          {/* Vision content */}
          <div className="bg-gradient-to-r from-blue-900/30 to-blue-800/30 rounded-2xl p-8 md:p-12 border border-blue-500/30 mb-12">
            <div className="grid md:grid-cols-3 gap-8 mb-12">
              {/* Vision points */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-green-500 to-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M4 4a2 2 0 00-2 2v1h16V6a2 2 0 00-2-2H4zM18 9H2v5a2 2 0 002 2h12a2 2 0 002-2V9zM4 13a1 1 0 011-1h1a1 1 0 110 2H5a1 1 0 01-1-1zm5-1a1 1 0 100 2h1a1 1 0 100-2H9z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Predictable Income</h3>
                <p className="text-gray-300">Wake up to automated revenue flowing into your account</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Work You Love</h3>
                <p className="text-gray-300">Build something you genuinely enjoy instead of chasing trends</p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.8, delay: 0.6 }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-gradient-to-r from-yellow-500 to-yellow-600 rounded-full flex items-center justify-center mx-auto mb-4">
                  <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Life-Changing Exit</h3>
                <p className="text-gray-300">Build something you can sell for life-changing money someday</p>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center"
            >
              <blockquote className="text-xl md:text-2xl text-gray-300 leading-relaxed italic mb-8">
                "Imagine waking up with predictable, automated income. Imagine working on something you genuinely enjoy, instead of chasing trends or grinding in a job you hate. And imagine building something you can sell for life-changing money someday. That's your future with Zephryx Labs."
              </blockquote>
              
              <p className="text-2xl font-bold text-blue-400 mb-8">
                All you need to do—is book your call.
              </p>
            </motion.div>
          </div>

          {/* Final CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 1.0 }}
            className="text-center"
          >
            <motion.button
              onClick={onCTAClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative inline-flex items-center justify-center px-12 md:px-16 py-6 md:py-8 text-2xl md:text-3xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 shadow-2xl shadow-blue-500/25"
            >
              <span className="relative z-10">Book Your AI Asset Strategy Call</span>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.button>
            
            <div className="mt-8 flex items-center justify-center gap-8 text-sm text-gray-400">
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Free Strategy Call</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>No Credit Card Required</span>
              </div>
              <div className="flex items-center gap-2">
                <svg className="w-5 h-5 text-yellow-400" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Limited Spots</span>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 