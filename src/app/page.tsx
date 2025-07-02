'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import SimpleBunnyPlayer from '../components/SimpleBunnyPlayer';
import QualificationQuiz from '../components/QualificationQuiz';
import BookingPage from '../components/BookingPage';

export default function VSLPage() {
  const router = useRouter();
  const [showCTA, setShowCTA] = useState(false);
  const [timeWatched, setTimeWatched] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bgHeight, setBgHeight] = useState('100vh');
  const [showQuiz, setShowQuiz] = useState(false);
  const [showBooking, setShowBooking] = useState(false);
  const [applicantData, setApplicantData] = useState<any>(null);

  // Track time watched for progress bar
  useEffect(() => {
    const interval = setInterval(() => {
      if (isPlaying) {
        setTimeWatched(prev => prev + 1);
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [isPlaying]);

  // Calculate background height based on first CTA position
  useEffect(() => {
    const calculateBgHeight = () => {
      const ctaButton = document.getElementById('first-cta-button');
      if (ctaButton) {
        const rect = ctaButton.getBoundingClientRect();
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
        const elementBottom = rect.bottom + scrollTop;
        setBgHeight(`${elementBottom}px`);
      }
    };

    // Calculate on mount and resize
    calculateBgHeight();
    window.addEventListener('resize', calculateBgHeight);
    
    // Small delay to ensure everything is rendered
    setTimeout(calculateBgHeight, 100);

    return () => window.removeEventListener('resize', calculateBgHeight);
  }, []);

  const handleCTAClick = () => {
    router.push('/landing');
  };

  return (
    <div className="relative min-h-screen">
      {/* Network/tech background with blue lines and nodes */}
      <div 
        className="absolute inset-0"
        style={{
          backgroundImage: "url('/network-bg.jpg')",
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/30" />
      </div>
      
      {/* Blueprint grid overlay */}
      <div 
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `
            linear-gradient(rgba(0,212,255,0.4) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.4) 1px, transparent 1px),
            linear-gradient(rgba(0,212,255,0.2) 1px, transparent 1px),
            linear-gradient(90deg, rgba(0,212,255,0.2) 1px, transparent 1px)
          `,
          backgroundSize: '100px 100px, 100px 100px, 20px 20px, 20px 20px'
        }}
      />
      
      {/* Main content container */}
      <div className="relative z-10">
        {/* Top bar with Zephryx Labs - Mobile optimized */}
        <div className="py-2 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center">
              <img 
                src="/zephryx-logo-full.png.PNG" 
                alt="Zephryx Labs" 
                className="h-6 sm:h-8 md:h-10 lg:h-12 mx-auto mb-1"
              />
              <p className="text-[#00D4FF] text-[10px] sm:text-xs md:text-sm lg:text-base font-semibold tracking-[0.1em] sm:tracking-[0.15em] md:tracking-[0.2em]">AI ASSET ACCELERATOR</p>
              <div className="mt-2 sm:mt-3 w-full max-w-xs mx-auto border-b border-[#00D4FF]/30"></div>
            </div>
          </div>
        </div>

        {/* Main content - Mobile optimized padding */}
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 sm:py-6 md:py-8">

          {/* Headline - Original format with quotes */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4 sm:mb-6 md:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2 sm:px-0">
              THE NEW SYSTEM 
              <br />
              HELPING CONTENT CREATORS
              <br />
              <span className="text-[#00D4FF]">
                GENERATE $10-$100K/MONTH
              </span>
            </h1>
          </motion.div>

          {/* Video container - Enhanced with compelling elements */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative max-w-sm sm:max-w-3xl md:max-w-4xl lg:max-w-5xl mx-auto mt-4 sm:mt-6 md:mt-8"
          >
            {/* Pulsing glow effect around video */}
            <motion.div
              animate={{ 
                boxShadow: [
                  "0 0 20px rgba(0, 212, 255, 0.3)",
                  "0 0 40px rgba(0, 212, 255, 0.6)",
                  "0 0 20px rgba(0, 212, 255, 0.3)"
                ]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              className="absolute inset-0 rounded-lg"
            />
            
            {/* Video wrapper */}
            <div className="relative bg-[#00D4FF] p-0.5 sm:p-1 shadow-2xl rounded-lg">
                                            <SimpleBunnyPlayer
                  libraryId="vz-5acb9f11-309"
                  videoId="9e43665f-17dd-4142-b99b-59724ac2538d"
                  onTimeUpdate={(currentTime: number, duration: number) => {
                    setTimeWatched(Math.floor(currentTime));
                    // Show CTA after video ends or at specific time
                    if (currentTime >= duration * 0.9) { // Show at 90% completion
                      setShowCTA(true);
                    }
                  }}
                  onVideoEnd={() => {
                    setShowCTA(true);
                  }}
                  className="aspect-video rounded-lg"
                />
            </div>
          </motion.div>

          {/* WITHOUT A MASSIVE FOLLOWING - Mobile optimized and closer to video */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-center mt-3 sm:mt-4 md:mt-6"
          >
            <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-[#00D4FF] px-4 sm:px-0">
              WITHOUT A MASSIVE FOLLOWING
            </h2>
          </motion.div>

          {/* Immediate CTA Button - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-6 sm:mt-8 text-center"
            id="first-cta-button"
          >
            <a
              href="/qualification"
              className="group relative inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl font-bold text-black bg-[#00D4FF] rounded-full hover:bg-[#00B8E6] transform hover:scale-105 transition-all shadow-2xl w-[90%] sm:w-auto max-w-md"
            >
              <span className="relative z-10">Apply Now</span>
            </a>
          </motion.div>

          {/* Captivating Headline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 sm:mt-16"
          >
            <div className="text-center max-w-4xl mx-auto px-4">
              {/* Main captivating headline */}
              <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-4 sm:mb-6 leading-tight">
                While You're Making <span className="text-red-400">$2,000</span> Per Post...
                <br />
                <span className="text-green-400">Smart Creators Are Making $50K+/Month</span>
                <br />
                From The Same Audience
              </h2>
              
              {/* Supporting text */}
              <p className="text-lg sm:text-xl md:text-2xl text-gray-300 font-medium italic mb-6">
                "The biggest money isn't in the content... it's in what happens after they watch it."
              </p>
              
              {/* Visual separator */}
              <div className="w-32 h-1 bg-gradient-to-r from-transparent via-[#00D4FF] to-transparent mx-auto"></div>
            </div>
          </motion.div>

          {/* The Secret Behind Creators Making $50K+/Month Section - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.2 }}
            className="mt-16 sm:mt-20 md:mt-24 max-w-4xl mx-auto"
          >
            {/* Content wrapper with background */}
            <div className="relative">
              {/* Background border effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/20 via-transparent to-[#00D4FF]/20 opacity-50 blur-xl" />
              
              {/* Main content container - Mobile optimized padding */}
              <div className="relative bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl px-4 py-8 sm:px-6 sm:py-10 md:px-8 md:py-12 lg:px-12 shadow-2xl">
                <h2 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-black text-white mb-6 sm:mb-8 text-center px-2">
                  The Secret Behind Creators Making <span className="text-[#00D4FF]">$50K+/Month</span> Without Posting Daily
                </h2>

                <div className="space-y-4 sm:space-y-5 md:space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
              <p>
                After investing over half a million dollars into online marketing and software businesses, one thing stuck out to me more than anything else:
              </p>

              <p className="pl-3 sm:pl-4 border-l-2 sm:border-l-4 border-[#00D4FF] italic">
                I&apos;ve built a software company from zero to $50,000 per month, purely off influencer-driven traffic. And I&apos;ve used the same strategy to build countless eCommerce brands into overnight successes.
              </p>

              <p className="font-semibold text-lg sm:text-xl text-white">
                But here's the catch:
              </p>

              <p>
                Creators are missing out on the biggest wealth shift since the industrial revolution and wasting their time with merch and sponsorship deals, leaving massive profits on the table. Rather than getting paid 5-10% of what a company makes from a brand deal or selling a handful of hoodies, they should have their own product that improves someone's life, happily paying month after month after month.
              </p>

              <p>
                That's when it hit me: What if I could leverage my proven system to create niche-specific AI software tailored exactly to an influencer's audience? The kind of app that doesn't just get downloaded and forgotten—it solves real problems, creates genuine value, and turns followers into loyal, recurring customers.
              </p>

              <div className="bg-[#00D4FF]/10 border border-[#00D4FF]/30 rounded-xl p-4 sm:p-5 md:p-6 my-6 sm:my-8">
                <p className="text-[#00D4FF] font-semibold text-sm sm:text-base">
                  AI is rapidly changing the way we live. And the truth is, when your AI product effortlessly improves someone's life or business, you've locked in a customer for life, happily paying month after month after month.
                </p>
              </div>

              <p>
                This is your chance to tap into something massive, engineered by my team, fully built for you, with every piece of tech handled—to launch your own AI software and turn your influence into a high-margin, recurring revenue machine. Seriously... hundreds of thousands in predictable monthly income, built around actually helping your audience in a meaningful, lasting way.
              </p>

              <div className="flex items-center gap-2 sm:gap-3 text-lg sm:text-xl font-bold text-yellow-400">
                <span className="text-xl sm:text-2xl">⏰</span>
                <p>And timing has never been more critical.</p>
              </div>

              <p>
                AI is moving at warp speed. Every day you wait, the window narrows. We're not just watching a shift—we're standing inside the biggest digital gold rush of our generation. You could get paid a couple thousand bucks to promote someone else's product... or you could make hundreds of thousands of dollars with your own.
              </p>

              <h3 className="text-xl sm:text-2xl font-bold text-white mt-8 sm:mt-10 md:mt-12 mb-4 sm:mb-6">
                Now, let's break down the logic:
              </h3>

              <p>
                Mid-size content creators typically earn between $500 and $10,000 per marketing campaign. While that might sound decent, consider this: companies running these campaigns frequently generate returns of 10x, 30x, or even 50x their ad spend. This means creators are earning pennies compared to the massive profits they're generating for these brands.
              </p>

              <div className="bg-gradient-to-r from-[#00D4FF]/20 to-transparent border-l-2 sm:border-l-4 border-[#00D4FF] pl-4 sm:pl-6 py-3 sm:py-4 my-6 sm:my-8">
                <p className="text-base sm:text-lg md:text-xl font-semibold text-white">
                  But here's the wild part: A product branded to someone the user already trusts converts 387% higher than a product with no personal brand. I've witnessed this firsthand across hundreds of content creators.
                </p>
              </div>

              <p className="text-lg sm:text-xl font-semibold text-white">
                And look, it makes sense
              </p>

              <p>
                When you promote someone else's product, you might get a flat fee. But when the product is yours—branded with your name, designed for your audience, and solving a problem they already have—you're no longer an ad slot. You're the solution. And your income reflects that.
              </p>

              <p>
                I've seen creators with less than a million followers turn that trust into six figures in pure profit. Not once. Consistently. Because a tool that improves someone's workflow, health, business, or lifestyle becomes part of their routine. They don't just buy it once. They keep paying for it. Forever.
              </p>

              <p className="text-base sm:text-lg md:text-xl italic text-[#00D4FF]">
                So while others are busy negotiating their next $2,000 shoutout… you're building a product that makes $20,000 in the same week—and keeps going long after the post disappears.
              </p>
            </div>
              </div> {/* Close main content container */}
            </div> {/* Close content wrapper */}

            {/* Tyler's Success Story - Single Testimonial */}
            <div className="mt-12 sm:mt-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center px-4">
                And this isn't theory. It's already happening:
              </h3>

              {/* Tyler's Story - Simplified with single image */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:shadow-[#00D4FF]/10 transition-all duration-300 max-w-4xl mx-auto"
              >
                <div className="flex flex-col items-center gap-4 sm:gap-6 text-center">
                  <div className="w-full max-w-xs">
                    <img 
                      src="/tyler-app.png" 
                      alt="Tyler's AI App Dashboard"
                      className="w-full h-auto rounded-lg shadow-lg"
                    />
                  </div>
                  
                  <div>
                    <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">Tyler</h4>
                    <p className="text-[#00D4FF] text-base sm:text-lg mb-1">Fitness Creator</p>
                    <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">53.1k followers</p>
                    <p className="text-gray-300 italic text-sm sm:text-base mb-3 sm:mb-4">"I just want to help people get fit without all the BS."</p>
                    <p className="text-2xl sm:text-3xl font-bold text-[#00D4FF]">$47K in his first month</p>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Additional Success Stories - Vertical Layout - HIDDEN */}
            <div className="hidden mt-16 sm:mt-20 max-w-sm mx-auto">
              <h3 className="text-lg font-semibold text-[#00D4FF] text-center mb-8 uppercase tracking-wide">
                WORKED WITH
              </h3>
              
              <div className="space-y-6">
                {/* Chase Dalton */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg border border-gray-700">
                    <span className="text-4xl">👨‍💼</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Chase Dalton</h4>
                  <p className="text-sm text-gray-400">$78,000/mo software owner</p>
                </div>

                {/* Reed Walker */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg border border-gray-700">
                    <span className="text-4xl">🚀</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Reed Walker</h4>
                  <p className="text-sm text-gray-400">$64,000/mo software owner</p>
                </div>

                {/* Grant Maddox */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg border border-gray-700">
                    <span className="text-4xl">💎</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Grant Maddox</h4>
                  <p className="text-sm text-gray-400">$103,000/mo software owner</p>
                </div>

                {/* Nate Colburn */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg border border-gray-700">
                    <span className="text-4xl">⚡</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Nate Colburn</h4>
                  <p className="text-sm text-gray-400">$56,000/mo software owner</p>
                </div>

                {/* Jaxon Hart */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg border border-gray-700">
                    <span className="text-4xl">🔥</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Jaxon Hart</h4>
                  <p className="text-sm text-gray-400">$92,000/mo software owner</p>
                </div>

                {/* Blake Rowan */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg border border-gray-700">
                    <span className="text-4xl">💰</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Blake Rowan</h4>
                  <p className="text-sm text-gray-400">$84,000/mo software owner</p>
                </div>

                {/* Cody Reaves */}
                <div className="text-center">
                  <div className="w-32 h-32 mx-auto mb-3 rounded-xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg border border-gray-700">
                    <span className="text-4xl">🏆</span>
                  </div>
                  <h4 className="text-lg font-bold text-white mb-1">Cody Reaves</h4>
                  <p className="text-sm text-gray-400">$116,000/mo software owner</p>
                </div>
              </div>
            </div>

            {/* Final CTA - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 sm:mt-16 text-center"
            >
              <a
                href="/qualification"
                className="group relative inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl font-bold text-black bg-[#00D4FF] rounded-full hover:bg-[#00B8E6] transform hover:scale-105 transition-all shadow-2xl w-[90%] sm:w-auto max-w-md"
              >
                <span className="relative z-10">Apply Now</span>
              </a>
              <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
                <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></span> Only accepting 3 creators this month
              </p>
            </motion.div>

            {/* Urgency Section */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-20 sm:mt-24 max-w-4xl mx-auto"
            >
              <div className="relative">
                {/* Background accent */}
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF]/5 to-transparent rounded-3xl"></div>
                
                <div className="relative z-10 p-6 sm:p-8 md:p-12">
                  <div className="text-center mb-8 sm:mb-12">
                    <div className="inline-flex items-center gap-2 mb-4">
                      <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse"></div>
                      <span className="text-[#00D4FF] text-sm sm:text-base font-semibold uppercase tracking-wider">Critical Timing</span>
                      <div className="w-2 h-2 bg-[#00D4FF] rounded-full animate-pulse"></div>
                    </div>
                    
                    <h2 className="text-2xl sm:text-3xl md:text-4xl font-black text-white mb-4">
                      Some moments don't come twice.
                    </h2>
                    
                    <div className="w-24 h-1 bg-gradient-to-r from-[#00D4FF] to-transparent mx-auto"></div>
                  </div>
                  
                  <div className="space-y-6 text-base sm:text-lg text-gray-300 leading-relaxed">
                    <div className="bg-gray-900/30 border-l-4 border-[#00D4FF] pl-6 py-4 rounded-r-lg">
                      <p className="text-white font-medium">
                        Every industry has a moment where leverage quietly shifts — not to the loudest, not to the most skilled, but to the ones who moved early with clarity.
                      </p>
                    </div>

                    <p>
                      That's what this is. Right now, AI still feels "new" to most creators. But the ones making the real money? They're not the ones using AI to write captions or brainstorm video ideas — they're the ones who own the tool their audience uses every day.
                    </p>

                    <div className="text-center py-6">
                      <p className="font-bold text-white text-xl sm:text-2xl">
                        And once that shift locks in, it doesn't reset.
                      </p>
                    </div>

                    <p>
                      The names getting mentioned in 6 months will be the ones that planted the flag now. You don't get to "jump in later" and lead the space. You show up late, you play catch-up. This isn't about FOMO or hype — it's about positioning.
                    </p>
                    
                    <div className="bg-gradient-to-r from-[#00D4FF]/10 to-transparent border border-[#00D4FF]/20 rounded-xl p-4 sm:p-6">
                      <p className="text-[#00D4FF] font-semibold italic">
                        The opportunity doesn't vanish… it just changes hands. And by then, you'll be the case study. Or the cautionary tale.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* AI Dashboard Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="mt-16 sm:mt-20 max-w-6xl mx-auto"
            >
              <div className="overflow-hidden">
                <div className="flex animate-scroll gap-6 pb-4">
                  {/* First set of dashboards */}
                  <div className="flex-shrink-0">
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src="/dashboard-1.png" 
                        alt="AI Dashboard Analytics & Performance"
                        className="w-48 sm:w-64 md:w-80 h-auto"
                      />
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src="/dashboard-2.png" 
                        alt="AI Dashboard Revenue Tracking"
                        className="w-48 sm:w-64 md:w-80 h-auto"
                      />
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src="/dashboard-3.png" 
                        alt="AI Dashboard User Management"
                        className="w-48 sm:w-64 md:w-80 h-auto"
                      />
                    </div>
                  </div>

                  {/* Duplicate set for infinite scroll */}
                  <div className="flex-shrink-0">
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src="/dashboard-1.png" 
                        alt="AI Dashboard Analytics & Performance"
                        className="w-48 sm:w-64 md:w-80 h-auto"
                      />
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src="/dashboard-2.png" 
                        alt="AI Dashboard Revenue Tracking"
                        className="w-48 sm:w-64 md:w-80 h-auto"
                      />
                    </div>
                  </div>

                  <div className="flex-shrink-0">
                    <div className="rounded-xl overflow-hidden shadow-2xl">
                      <img 
                        src="/dashboard-3.png" 
                        alt="AI Dashboard User Management"
                        className="w-48 sm:w-64 md:w-80 h-auto"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Final Urgent CTA */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-16 sm:mt-20"
            >
              <div className="bg-gray-900/50 backdrop-blur-sm border border-gray-700/50 rounded-2xl p-8 sm:p-12 max-w-lg mx-auto text-center">
                <h3 className="text-2xl sm:text-3xl font-black text-white mb-3">
                  Only 3 Spots Available
                </h3>
                <p className="text-gray-300 text-base sm:text-lg mb-8">
                  This month's cohort is almost full
                </p>
                
                <a
                  href="/qualification"
                  className="group relative inline-flex items-center justify-center px-8 py-5 sm:px-12 sm:py-6 text-xl sm:text-2xl font-black text-black bg-[#00D4FF] rounded-full hover:bg-[#00B8E6] transform hover:scale-105 transition-all shadow-2xl w-full"
                >
                  <span className="relative z-10">Apply Now</span>
                </a>
              </div>
            </motion.div>

            {/* Client Wins Screenshots */}
            <motion.div
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              className="mt-16 sm:mt-20 max-w-md mx-auto space-y-4"
            >
              {/* Screenshot images - 7 stacked images at true size */}
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/IMG_0652.PNG" 
                  alt="Client Revenue Screenshot 1"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/IMG_0654.PNG" 
                  alt="Client Revenue Screenshot 2"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/IMG_0655.PNG" 
                  alt="Client Revenue Screenshot 3"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/IMG_0657.PNG" 
                  alt="Client Revenue Screenshot 4"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/IMG_0658.PNG" 
                  alt="Client Revenue Screenshot 5"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/IMG_0659.PNG" 
                  alt="Client Revenue Screenshot 6"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full rounded-lg overflow-hidden shadow-lg">
                <img 
                  src="/IMG_0661.PNG" 
                  alt="Client Revenue Screenshot 7"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </motion.div>

          {/* Footer disclaimers - Comprehensive Legal */}
          <footer className="mt-16 sm:mt-20 md:mt-24 border-t border-gray-800 pt-8 sm:pt-12 text-center text-[8px] sm:text-[10px] md:text-xs text-gray-500 max-w-6xl mx-auto px-4">
            
            {/* Main Disclaimers */}
            <div className="space-y-4 mb-8">
              <h3 className="text-sm font-bold text-gray-400 mb-4">IMPORTANT DISCLAIMERS</h3>
              
              <p className="mb-4 leading-relaxed">
                <strong>INCOME DISCLAIMER:</strong> The income figures and success stories presented on this website represent exceptional results and are not typical. These testimonials are not representative of all participants and should not be considered as guarantees or promises of similar results. Individual results will vary based on numerous factors including but not limited to: your skills, experience, dedication, business acumen, market conditions, economic factors, and the time and effort you invest. There is no guarantee that you will earn any money using the techniques and ideas presented. Success in business requires hard work, dedication, and commitment.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong>NO GUARANTEE OF RESULTS:</strong> Zephryx Labs makes no warranty, guarantee, or other promise as to any results that may be obtained from using our service. While we provide examples of past results, testimonials, and case studies, we cannot and do not guarantee that you will achieve similar results. Your level of success depends on the time you devote to the program, your finances, knowledge, and various skills. Since these factors differ according to individuals, we cannot guarantee your success or income level.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong>BUSINESS RISKS:</strong> Any business endeavor has inherent risk for loss of capital. Past performance does not guarantee future results. You should not risk money that you cannot afford to lose. All investments and business ventures carry risk of loss. You acknowledge that we make no representations, warranties, or guarantees regarding future earnings, business performance, or success.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong>EARNINGS CLAIMS:</strong> We have made every effort to accurately represent our services and their potential. The testimonials and examples used are exceptional results, do not apply to the average person, and are not intended to represent or guarantee that anyone will achieve the same or similar results. Each individual's success depends on his or her background, dedication, desire, and motivation.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong>FORWARD-LOOKING STATEMENTS:</strong> This website contains forward-looking statements that involve risks and uncertainties. These statements are based on current expectations and assumptions that are subject to risks and uncertainties. Actual results may differ materially from those described in forward-looking statements.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong>PROFESSIONAL ADVICE:</strong> The information provided on this website is for educational and informational purposes only and should not be considered as professional financial, legal, or business advice. You should consult with appropriate professionals for specific advice tailored to your situation.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong>AI TECHNOLOGY DISCLAIMER:</strong> The AI tools and software mentioned are subject to technological limitations, updates, and changes beyond our control. Performance of AI systems may vary and cannot be guaranteed. Results from AI implementations depend on numerous factors including data quality, implementation, and market conditions.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong>REFUND POLICY:</strong> Due to the nature of digital products and services, all sales are final. We do not offer refunds except where required by law. Please review all materials and ask questions before purchasing.
              </p>

              <p className="mb-4 leading-relaxed">
                <strong>LIMITATION OF LIABILITY:</strong> In no event shall Zephryx Labs be liable for any direct, indirect, punitive, incidental, special, or consequential damages arising out of or in any way connected with the use of this website or with the delay or inability to use this website, or for any information obtained through this website, or otherwise arising out of the use of this website, whether based on contract, tort, negligence, strict liability, or otherwise, even if Zephryx Labs has been advised of the possibility of damages.
              </p>
            </div>

            {/* Trademark Disclaimers */}
            <div className="space-y-3 mb-8">
              <h3 className="text-sm font-bold text-gray-400 mb-4">TRADEMARK DISCLAIMERS</h3>
              
              <p className="mb-2">
                This site is not a part of Facebook™, Google™, YouTube™, TikTok™, Instagram™, Twitter™, LinkedIn™, or any other social media platform and is NOT endorsed by any of these companies in any way. All trademarks are the property of their respective owners.
              </p>
              
              <p className="mb-2">
                FACEBOOK™ is a trademark of Meta Platforms, Inc. GOOGLE™ and YOUTUBE™ are trademarks of Google LLC. TIKTOK™ is a trademark of ByteDance Ltd. INSTAGRAM™ is a trademark of Meta Platforms, Inc. TWITTER™ is a trademark of Twitter, Inc. LINKEDIN™ is a trademark of LinkedIn Corporation.
              </p>
            </div>

            {/* GDPR and Privacy */}
            <div className="space-y-3 mb-8">
              <h3 className="text-sm font-bold text-gray-400 mb-4">PRIVACY AND DATA PROTECTION</h3>
              
              <p className="mb-2">
                We are committed to protecting your privacy and personal data in accordance with applicable data protection laws, including GDPR for EU residents and CCPA for California residents. By using this website, you consent to our collection and use of personal information as outlined in our Privacy Policy.
              </p>
              
              <p className="mb-2">
                We use cookies and similar tracking technologies to improve your browsing experience, analyze website traffic, and understand where our visitors are coming from. You can control cookie settings through your browser preferences.
              </p>
            </div>

            {/* Medical and Health Disclaimers */}
            <div className="space-y-3 mb-8">
              <h3 className="text-sm font-bold text-gray-400 mb-4">ADDITIONAL DISCLAIMERS</h3>
              
              <p className="mb-2">
                <strong>HEALTH DISCLAIMER:</strong> If any health, fitness, or wellness content is referenced, it is for informational purposes only and is not intended as medical advice. Always consult with a healthcare professional before making changes to your health regimen.
              </p>
              
              <p className="mb-2">
                <strong>INVESTMENT DISCLAIMER:</strong> Nothing on this website should be considered as investment advice. All business investments carry risk of loss. Past performance does not guarantee future results.
              </p>
              
              <p className="mb-2">
                <strong>AFFILIATE DISCLOSURE:</strong> This website may contain affiliate links. We may receive compensation if you purchase products or services through our links, at no additional cost to you.
              </p>
            </div>

            {/* Anti-Spam and Legal Compliance */}
            <div className="space-y-3 mb-8">
              <h3 className="text-sm font-bold text-gray-400 mb-4">LEGAL COMPLIANCE</h3>
              
              <p className="mb-2">
                <strong>CAN-SPAM COMPLIANCE:</strong> By providing your email address, you agree to receive communications from us. You can unsubscribe at any time by clicking the unsubscribe link in our emails. We comply with the CAN-SPAM Act and all applicable email marketing laws.
              </p>
              
              <p className="mb-2">
                <strong>TCPA COMPLIANCE:</strong> By providing your phone number, you consent to receive text messages and calls from us regarding our services. Message and data rates may apply. You can opt out at any time by replying STOP.
              </p>
              
              <p className="mb-2">
                <strong>JURISDICTION:</strong> This website is operated from the United States. These terms are governed by the laws of [Your State/Country]. Any disputes arising from the use of this website will be subject to the jurisdiction of the courts in [Your State/Country].
              </p>
            </div>

            {/* Contact and Support */}
            <div className="space-y-3 mb-8">
              <h3 className="text-sm font-bold text-gray-400 mb-4">CONTACT INFORMATION</h3>
              
              <p className="mb-2">
                For questions about these disclaimers, our services, or to exercise your data protection rights, please contact us at: support@zephryxlabs.com
              </p>
              
              <p className="mb-2">
                <strong>UPDATES TO DISCLAIMERS:</strong> We reserve the right to update these disclaimers at any time. Changes will be posted on this page with the date of last revision.
              </p>
            </div>



            {/* Copyright */}
            <div className="flex items-center justify-center gap-2 pt-6 border-t border-gray-800">
              <img 
                src="/zephryx-logo-icon.PNG" 
                alt="Zephryx Labs Icon" 
                className="h-6 sm:h-8"
              />
              <p>
                © {new Date().getFullYear()} Zephryx Labs. All rights reserved. Last updated: {new Date().toLocaleDateString()}
              </p>
            </div>
          </footer>
        </div>
      </div>

      {/* Quiz Modal */}
      {showQuiz && (
        <QualificationQuiz
          onComplete={(data) => {
            setApplicantData(data);
            setShowQuiz(false);
            setShowBooking(true);
          }}
          onClose={() => setShowQuiz(false)}
        />
      )}

      {/* Booking Modal */}
      {showBooking && applicantData && (
        <BookingPage
          applicantData={applicantData}
          onBack={() => {
            setShowBooking(false);
            setShowQuiz(true);
          }}
        />
      )}
    </div>
  );
} 