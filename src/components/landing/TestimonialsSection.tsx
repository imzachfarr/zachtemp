'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';

export default function TestimonialsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const testimonials = [
    {
      name: 'Marcus Thompson',
      role: 'Founder, AI Resume Pro',
      image: '/testimonial1.jpg',
      revenue: '$72k/mo',
      time: '4 months',
      quote: "I went from teaching high school to running a $72k/mo AI business. Zephryx didn't just build my app - they built my entire business system. Best investment I've ever made.",
      highlight: 'Quit his job after 3 months'
    },
    {
      name: 'Lisa Chen',
      role: 'CEO, SmartLegal AI',
      image: '/testimonial2.jpg',
      revenue: '$125k/mo',
      time: '6 months',
      quote: "As a lawyer, I saw the AI opportunity but had no tech skills. Zephryx built my legal AI assistant that now serves 500+ law firms. We're on track for $2M this year.",
      highlight: 'Featured in TechCrunch'
    },
    {
      name: 'James Rodriguez',
      role: 'Founder, AI Sales Coach',
      image: '/testimonial3.jpg',
      revenue: '$45k/mo',
      time: '3 months',
      quote: "From zero to $45k/mo in 90 days. The Zephryx team handled everything - development, launch, marketing. I just focused on talking to customers. Incredible ROI.",
      highlight: '300+ paying customers'
    },
    {
      name: 'Sarah Williams',
      role: 'Founder, ContentGenius AI',
      image: '/testimonial4.jpg',
      revenue: '$88k/mo',
      time: '5 months',
      quote: "I was skeptical about the 90-day promise, but they delivered. My AI content platform now has 1,200 active users and growing 40% monthly. Life-changing.",
      highlight: 'Sold for 7-figures'
    },
    {
      name: 'David Park',
      role: 'CEO, AI Recruiter Pro',
      image: '/testimonial5.jpg',
      revenue: '$156k/mo',
      time: '8 months',
      quote: "Zephryx built what would have taken me 2 years and $500k to develop. Now I run a multi-six-figure AI business from my laptop. The support is phenomenal.",
      highlight: 'Raised $2M in funding'
    },
    {
      name: 'Emma Johnson',
      role: 'Founder, HealthBot AI',
      image: '/testimonial6.jpg',
      revenue: '$93k/mo',
      time: '6 months',
      quote: "As a nurse, I knew healthcare needed AI solutions. Zephryx turned my idea into a profitable business serving 200+ clinics. Worth every penny of the investment.",
      highlight: 'FDA approved'
    }
  ];

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
              500+ Success Stories
              <span className="block text-blue-400">Real People, Real Results</span>
            </h2>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              These entrepreneurs had zero coding experience. Now they run profitable AI businesses.
            </p>
          </div>

          {/* Testimonials grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-black/50 rounded-xl p-6 border border-blue-500/20"
              >
                {/* Header */}
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full" />
                  <div>
                    <h4 className="text-white font-semibold">{testimonial.name}</h4>
                    <p className="text-gray-400 text-sm">{testimonial.role}</p>
                  </div>
                </div>

                {/* Stats */}
                <div className="flex gap-4 mb-4">
                  <div className="bg-blue-500/20 rounded-lg px-3 py-1">
                    <p className="text-blue-400 font-bold text-sm">{testimonial.revenue}</p>
                  </div>
                  <div className="bg-blue-500/20 rounded-lg px-3 py-1">
                    <p className="text-blue-400 font-bold text-sm">{testimonial.time}</p>
                  </div>
                </div>

                {/* Quote */}
                <blockquote className="text-gray-300 italic mb-4">
                  "{testimonial.quote}"
                </blockquote>

                {/* Highlight */}
                <div className="border-t border-gray-800 pt-4">
                  <p className="text-yellow-400 text-sm font-semibold">
                    ✓ {testimonial.highlight}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Results summary */}
          <div className="mt-16 bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8">
            <h3 className="text-2xl font-bold text-white text-center mb-8">
              Average Client Results
            </h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
              <div>
                <p className="text-3xl font-bold text-blue-400">$47k/mo</p>
                <p className="text-gray-400 text-sm mt-1">Avg Revenue at 6 Months</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">73 days</p>
                <p className="text-gray-400 text-sm mt-1">Time to First $10k Month</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">92%</p>
                <p className="text-gray-400 text-sm mt-1">Hit $10k/mo in 90 Days</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-blue-400">4.9/5</p>
                <p className="text-gray-400 text-sm mt-1">Client Satisfaction</p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
} 