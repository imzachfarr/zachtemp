'use client'

import { motion } from 'framer-motion'
import { useInView } from 'framer-motion'
import { useRef } from 'react'

export default function CaseStudiesSection() {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-100px" })

  const caseStudies = [
    {
      name: "John's AI App",
      title: "How John's AI App Reached $15k/month in Just 4 Months",
      niche: "AI Content Creation Tool",
      timeline: "4 months",
      revenue: "$15k/month",
      description: "John had zero coding experience but a passion for content creation. We built him an AI writing assistant that helps bloggers create SEO-optimized articles. Within 4 months, he was generating $15k/month in recurring revenue.",
      results: [
        "500+ paying subscribers",
        "$15k monthly recurring revenue",
        "92% customer retention rate"
      ]
    },
    {
      name: "Mike's AI Asset",
      title: "How Mike Built an AI Asset Worth Over $1 Million in 12 Months",
      niche: "AI Sales Automation",
      timeline: "12 months",
      revenue: "$1M+ valuation",
      description: "Mike was a struggling sales consultant. We developed an AI sales automation platform that helps small businesses qualify leads automatically. His app now processes over 10,000 leads monthly and was recently valued at over $1 million.",
      results: [
        "10,000+ leads processed monthly",
        "$1M+ business valuation",
        "200+ enterprise clients"
      ]
    },
    {
      name: "Chris's Story",
      title: "From Struggling Drop-Shipper to Profitable AI Business Owner in 6 Months",
      niche: "AI E-commerce Optimizer",
      timeline: "6 months",
      revenue: "$25k/month",
      description: "Chris was burned out from failed dropshipping attempts. We built him an AI tool that optimizes product descriptions and pricing for e-commerce stores. He now serves 300+ online retailers and generates $25k/month.",
      results: [
        "300+ e-commerce clients",
        "$25k monthly revenue",
        "40% profit margins"
      ]
    }
  ]

  const socialProof = [
    { message: "Just hit $10k this month! 🚀", author: "Sarah M." },
    { message: "My AI app is changing lives and making bank", author: "David K." },
    { message: "Best investment I've ever made", author: "Lisa R." },
    { message: "From $0 to $18k/mo in 5 months", author: "Marcus T." },
    { message: "Finally quit my 9-5!", author: "Jennifer L." },
    { message: "This actually works... I'm shocked", author: "Ryan P." }
  ]

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-6xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Real Results From
            <span className="block text-blue-400">Real People</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            These aren't fake testimonials. These are actual clients who went from zero to profitable AI businesses.
          </p>
        </motion.div>

        {/* Case Studies */}
        <div className="space-y-16 mb-20">
          {caseStudies.map((study, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8 md:p-12 border border-blue-500/20"
            >
              <div className="grid md:grid-cols-3 gap-8">
                {/* Case study content */}
                <div className="md:col-span-2">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {study.title}
                  </h3>
                  <div className="flex flex-wrap gap-4 mb-6">
                    <span className="px-3 py-1 bg-blue-500/20 text-blue-400 rounded-full text-sm">
                      {study.niche}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                      {study.timeline}
                    </span>
                    <span className="px-3 py-1 bg-yellow-500/20 text-yellow-400 rounded-full text-sm">
                      {study.revenue}
                    </span>
                  </div>
                  <p className="text-gray-300 text-lg leading-relaxed mb-6">
                    {study.description}
                  </p>
                  <div className="space-y-2">
                    {study.results.map((result, resultIndex) => (
                      <div key={resultIndex} className="flex items-center gap-3">
                        <div className="w-2 h-2 bg-blue-400 rounded-full" />
                        <span className="text-gray-300">{result}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Visual element */}
                <div className="flex items-center justify-center">
                  <div className="w-32 h-32 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center">
                    <div className="text-center">
                      <p className="text-white font-bold text-2xl">{study.revenue.split('/')[0]}</p>
                      <p className="text-blue-200 text-sm">{study.timeline}</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Social Proof Wall */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="text-center"
        >
          <h3 className="text-2xl font-bold text-white mb-8">
            What Our Clients Are Saying
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {socialProof.map((proof, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={isInView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.5, delay: 0.8 + index * 0.1 }}
                className="bg-black/50 rounded-xl p-6 border border-blue-500/20"
              >
                <p className="text-gray-300 mb-4 italic">"{proof.message}"</p>
                <p className="text-blue-400 font-semibold">— {proof.author}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
} 