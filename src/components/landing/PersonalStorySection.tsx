'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function PersonalStorySection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center"
        >
          {/* Section header */}
          <div className="mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
              My Story: From Teenage Coder to
              <span className="block text-blue-400">AI Empire Builder</span>
            </h2>
          </div>

          {/* Personal story */}
          <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 md:p-12 border border-blue-500/20">
            <div className="flex items-center justify-center mb-8">
              <div className="w-20 h-20 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                <svg className="w-10 h-10 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                </svg>
              </div>
            </div>
            
            <blockquote className="text-lg md:text-xl text-gray-300 leading-relaxed">
              "I've been building software since I was a teenager—my first bot was pulling $50k/month before I graduated high school. When I saw Iron Man, I knew AI would change everything. As soon as the technology arrived, I dropped multiple successful ecommerce brands to go all-in on AI. Now we've helped over 300 entrepreneurs build profitable AI apps that generate real income. This isn't a side-hustle—it's my life."
            </blockquote>
            
            <div className="mt-8">
              <p className="text-blue-400 font-semibold">— Founder, Zephryx Labs</p>
            </div>
          </div>

          {/* Key stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400">$50k/mo</p>
              <p className="text-gray-400 text-sm mt-1">First Bot Revenue (High School)</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400">300+</p>
              <p className="text-gray-400 text-sm mt-1">AI Businesses Built</p>
            </div>
            <div className="text-center">
              <p className="text-4xl font-bold text-blue-400">100%</p>
              <p className="text-gray-400 text-sm mt-1">All-In on AI</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
} 