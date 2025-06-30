'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

interface HowItWorksSectionProps {
  onCTAClick: () => void
}

export default function HowItWorksSection({ onCTAClick }: HowItWorksSectionProps) {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const steps = [
    {
      number: 1,
      title: "AI Asset Strategy Call",
      description: "We help you pick the perfect niche based on your hobbies, passions, and our data on what scales fastest.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
        </svg>
      )
    },
    {
      number: 2,
      title: "Full Done-For-You AI App Build",
      description: "We build your AI business from scratch—no tech skills or hiring devs required. Fully functional, launch-ready software.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M3 4a1 1 0 011-1h4a1 1 0 010 2H6.414l2.293 2.293a1 1 0 01-1.414 1.414L5 6.414V8a1 1 0 01-2 0V4zm9 1a1 1 0 010-2h4a1 1 0 011 1v4a1 1 0 01-2 0V6.414l-2.293 2.293a1 1 0 11-1.414-1.414L13.586 5H12zm-9 7a1 1 0 012 0v1.586l2.293-2.293a1 1 0 111.414 1.414L6.414 15H8a1 1 0 010 2H4a1 1 0 01-1-1v-4zm13-1a1 1 0 011 1v4a1 1 0 01-1 1h-4a1 1 0 010-2h1.586l-2.293-2.293a1 1 0 111.414-1.414L15 13.586V12a1 1 0 011-1z" clipRule="evenodd" />
        </svg>
      )
    },
    {
      number: 3,
      title: "Bulletproof Marketing Roadmap",
      description: "You get step-by-step, proven marketing training—exactly how to land your first customers and scale aggressively.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      )
    },
    {
      number: 4,
      title: "Ongoing Support & Updates",
      description: "Our team keeps your app running smoothly with updates and support so you can scale confidently.",
      icon: (
        <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
        </svg>
      )
    }
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-black via-blue-950/10 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            How We Build Your
            <span className="block text-blue-400">Million-Dollar AI Asset</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            Our proven 4-step system takes you from idea to profitable AI business—completely done for you.
          </p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-12 mb-16">
          {steps.map((step, index) => (
            <motion.div
              key={step.number}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className={`flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}
            >
              {/* Step content */}
              <div className="flex-1">
                <div className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 border border-blue-500/20">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl">
                      {step.number}
                    </div>
                    <h3 className="text-2xl font-bold text-white">{step.title}</h3>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>

              {/* Step icon */}
              <div className="flex-shrink-0">
                <div className="w-24 h-24 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center text-white">
                  {step.icon}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="text-center"
        >
          <motion.button
            onClick={onCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="inline-flex items-center gap-3 px-8 md:px-10 py-4 md:py-5 text-lg md:text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-blue-700 rounded-full hover:from-blue-700 hover:to-blue-800 shadow-2xl shadow-blue-500/25"
          >
            <span>Book Your AI Asset Strategy Call</span>
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
} 