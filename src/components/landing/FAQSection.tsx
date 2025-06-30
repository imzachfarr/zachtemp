'use client';

import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef, useState } from 'react';

export default function FAQSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "This sounds too good to be true.",
      answer: "Fair—but we've already done it over 300 times. Real people, real apps, real revenue. That's why we show you exactly how it works before we start. We're not selling you a course or coaching program—we're building you an actual AI business that generates real income."
    },
    {
      question: "I'm not techy, how will I manage an AI app?",
      answer: "You don't have to. We build, host, update, and support the app. You focus on growing your income—not the code. Our team handles all the technical aspects while you focus on what matters: running your profitable AI business."
    },
    {
      question: "I suck at marketing. Can this really work?",
      answer: "We give you a proven marketing roadmap tailored exactly to your app. Follow the steps, get results. No guesswork, just execution. Plus, we provide ongoing support to help you implement the marketing strategies that work best for your specific AI business."
    },
    {
      question: "How much does this cost?",
      answer: "The investment varies based on the complexity of your AI app and your specific needs. During your strategy call, we'll discuss pricing that makes sense for your situation. What we can tell you is that our average client sees a 680% ROI within 12 months."
    },
    {
      question: "How long does it take to build my AI app?",
      answer: "Most AI apps are completed within 60-90 days. This includes development, testing, deployment, and initial marketing setup. We'll give you a specific timeline during your strategy call based on your chosen niche and app complexity."
    },
    {
      question: "What if my AI app doesn't make money?",
      answer: "We're so confident in our system that we offer a revenue guarantee. If your AI app doesn't generate at least $10k in revenue within the first 6 months of launch, we'll work with you until it does—at no additional cost."
    }
  ];

  return (
    <section ref={ref} className="py-20 px-4 bg-gradient-to-b from-black via-gray-900/20 to-black">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">
            Crushing Your Objections
            <span className="block text-blue-400">We've Got Answers</span>
          </h2>
          <p className="text-xl text-gray-400 max-w-3xl mx-auto">
            We've heard every concern. Here are the honest answers to the questions you're probably thinking.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: -20 }}
              animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="bg-gray-900/50 rounded-xl border border-blue-500/20 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-6 text-left flex items-center justify-between hover:bg-gray-800/50 transition-colors"
              >
                <h3 className="text-lg font-semibold text-white pr-4">{faq.question}</h3>
                <svg
                  className={`w-5 h-5 text-blue-400 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? 'auto' : 0,
                  opacity: openIndex === index ? 1 : 0
                }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden"
              >
                <div className="px-6 pb-6">
                  <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Still have questions */}
        <div className="mt-12 text-center bg-gradient-to-r from-blue-900/20 to-blue-800/20 rounded-2xl p-8">
          <h3 className="text-xl font-bold text-white mb-2">Still have questions?</h3>
          <p className="text-gray-400 mb-4">
            Get all your questions answered on your free strategy call.
          </p>
          <a
            href="#"
            className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 font-semibold"
          >
            Schedule your free call
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
} 