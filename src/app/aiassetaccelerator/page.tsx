'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function VSLPage() {
  const router = useRouter();
  const [showCTA, setShowCTA] = useState(false);
  const [timeWatched, setTimeWatched] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [bgHeight, setBgHeight] = useState('100vh');

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
      {/* Background that ends at first CTA */}
      <div 
        className="absolute inset-x-0 top-0 transition-all duration-300"
        style={{ 
          backgroundImage: "url('/network-bg.jpg')", 
          backgroundSize: 'cover', 
          backgroundPosition: 'center',
          height: bgHeight 
        }}
      >
        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-black/10" />
      </div>
      
      {/* Solid background for content below the fold */}
      <div 
        className="absolute inset-x-0 bottom-0 bg-[#1C1C1C]" 
        style={{ top: bgHeight }}
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


          {/* Headline - Mobile optimized text sizes */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-4 sm:mb-6 md:mb-8"
          >
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 md:mb-6 leading-tight px-2 sm:px-0">
              &quot;THE NEW SYSTEM 
              <br />
              HELPING CONTENT CREATORS
              <br />
              <span className="text-[#00D4FF]">
                GENERATE $10-$100K/MONTH
              </span>
            </h1>
          </motion.div>

          {/* Video container - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.15 }}
            className="relative max-w-5xl mx-auto mt-4 sm:mt-6 md:mt-8"
          >
            {/* Video wrapper */}
            <div className="relative bg-[#00D4FF] p-0.5 sm:p-1 rounded-2xl shadow-2xl">
              <div className="relative aspect-video bg-[#0A0A0A] rounded-xl overflow-hidden">
                {/* Video placeholder */}
                <div className="absolute inset-0 flex items-center justify-center bg-gray-900">
                  {!isPlaying ? (
                    <button
                      onClick={() => setIsPlaying(true)}
                      className="group relative"
                    >
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all" />
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-[#00D4FF] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                        <svg className="w-6 h-6 sm:w-8 sm:h-8 md:w-10 md:h-10 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </button>
                  ) : (
                    <div className="text-center p-4">
                      <p className="text-white text-sm sm:text-base md:text-lg mb-2">Video Player Active</p>
                      <p className="text-gray-400 text-xs sm:text-sm">Replace with YouTube/Vimeo embed</p>
                    </div>
                  )}
                </div>

                {/* Video overlay with progress */}
                {isPlaying && (
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-2 sm:p-3 md:p-4">
                    <div className="w-full bg-gray-700 rounded-full h-1.5 sm:h-2">
                      <div 
                        className="bg-[#00D4FF] h-1.5 sm:h-2 rounded-full transition-all duration-1000"
                        style={{ width: `${Math.min((timeWatched / 180) * 100, 100)}%` }}
                      />
                    </div>
                    <p className="text-white text-xs sm:text-sm mt-1 sm:mt-2 text-center">
                      {Math.floor(timeWatched / 60)}:{(timeWatched % 60).toString().padStart(2, '0')} / 3:00
                    </p>
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {/* WITHOUT A MASSIVE FOLLOWING - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.45 }}
            className="text-center mt-4 sm:mt-6"
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
            <button
              onClick={handleCTAClick}
              className="group relative inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl font-bold text-black bg-[#00D4FF] rounded-full hover:bg-[#00B8E6] transform hover:scale-105 transition-all shadow-2xl w-[90%] sm:w-auto max-w-md"
            >
              <span className="relative z-10">Yes – Build My AI Business For Me →</span>
            </button>
          </motion.div>

          {/* Trust indicators - Mobile optimized */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 1 }}
            className="mt-12 sm:mt-16"
          >
            {/* As featured in - Mobile responsive */}
            <div className="text-center mb-6 sm:mb-8">
              <p className="text-gray-500 text-xs sm:text-sm font-semibold mb-3 sm:mb-4">OUR INFLUENCER CLIENTS HAVE BEEN FEATURED IN</p>
              <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 md:gap-8 opacity-60 px-4">
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">FORBES</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">TechCrunch</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">The Verge</span>
                <span className="text-lg sm:text-xl md:text-2xl font-bold text-gray-400">Mashable</span>
              </div>
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

            {/* Success Stories Section - Mobile optimized */}
            <div className="mt-12 sm:mt-16">
              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-8 sm:mb-12 text-center px-4">
                And this isn't theory. It's already happening:
              </h3>

              <div className="space-y-8 sm:space-y-12">
                {/* Tyler's Story - Mobile responsive layout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:shadow-[#00D4FF]/10 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#00D4FF]/30 to-[#00D4FF]/10 flex items-center justify-center shadow-lg">
                        <span className="text-4xl sm:text-5xl">💪</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">Tyler</h4>
                      <p className="text-[#00D4FF] text-base sm:text-lg mb-1">Fitness Creator</p>
                      <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">53.1k followers</p>
                      <p className="text-gray-300 italic text-sm sm:text-base mb-3 sm:mb-4">"I just want to help people get fit without all the BS."</p>
                      <p className="text-2xl sm:text-3xl font-bold text-[#00D4FF]">$8,700 in 11 days</p>
                    </div>
                    
                    <div className="flex-shrink-0 mt-4 sm:mt-0">
                      <div className="w-40 h-28 sm:w-44 sm:h-30 md:w-48 md:h-32 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg">
                        <div className="text-center p-2">
                          <div className="text-[#00D4FF] text-xs sm:text-sm font-semibold mb-1">AI Fitness Coach</div>
                          <div className="text-gray-400 text-xs">Personalized workouts</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Maya's Story - Mobile responsive layout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.1 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:shadow-[#00D4FF]/10 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#00D4FF]/30 to-[#00D4FF]/10 flex items-center justify-center shadow-lg">
                        <span className="text-4xl sm:text-5xl">👗</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">Maya</h4>
                      <p className="text-[#00D4FF] text-base sm:text-lg mb-1">Fashion Creator</p>
                      <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">87.4k followers</p>
                      <p className="text-gray-300 italic text-sm sm:text-base mb-3 sm:mb-4">"I wish I could just style everyone personally."</p>
                      <p className="text-2xl sm:text-3xl font-bold text-[#00D4FF]">1,500 users in week one</p>
                    </div>
                    
                    <div className="flex-shrink-0 mt-4 sm:mt-0">
                      <div className="w-40 h-28 sm:w-44 sm:h-30 md:w-48 md:h-32 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg">
                        <div className="text-center p-2">
                          <div className="text-[#00D4FF] text-xs sm:text-sm font-semibold mb-1">AI Stylist</div>
                          <div className="text-gray-400 text-xs">Personal fashion advisor</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>

                {/* Jake's Story - Mobile responsive layout */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                  className="bg-gray-900/50 backdrop-blur-sm rounded-2xl p-4 sm:p-6 md:p-8 hover:shadow-2xl hover:shadow-[#00D4FF]/10 transition-all duration-300"
                >
                  <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6 md:gap-8">
                    <div className="flex-shrink-0">
                      <div className="w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 rounded-full bg-gradient-to-br from-[#00D4FF]/30 to-[#00D4FF]/10 flex items-center justify-center shadow-lg">
                        <span className="text-4xl sm:text-5xl">🎮</span>
                      </div>
                    </div>
                    
                    <div className="flex-1 text-center">
                      <h4 className="text-xl sm:text-2xl font-bold text-white mb-1">Jake</h4>
                      <p className="text-[#00D4FF] text-base sm:text-lg mb-1">Gaming Creator</p>
                      <p className="text-gray-400 text-sm sm:text-base mb-3 sm:mb-4">61.7k followers</p>
                      <p className="text-gray-300 italic text-sm sm:text-base mb-3 sm:mb-4">"I wish I could just play games all day."</p>
                      <p className="text-2xl sm:text-3xl font-bold text-[#00D4FF]">$12K in three weeks</p>
                    </div>
                    
                    <div className="flex-shrink-0 mt-4 sm:mt-0">
                      <div className="w-40 h-28 sm:w-44 sm:h-30 md:w-48 md:h-32 rounded-lg bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center shadow-lg">
                        <div className="text-center p-2">
                          <div className="text-[#00D4FF] text-xs sm:text-sm font-semibold mb-1">AI Gaming Coach</div>
                          <div className="text-gray-400 text-xs">Strategy & analysis</div>
                        </div>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>

            {/* Final CTA - Mobile optimized */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="mt-12 sm:mt-16 text-center"
            >
              <button
                onClick={handleCTAClick}
                className="group relative inline-flex items-center justify-center px-6 py-4 sm:px-8 sm:py-5 md:px-12 md:py-6 text-base sm:text-lg md:text-xl font-bold text-black bg-[#00D4FF] rounded-full hover:bg-[#00B8E6] transform hover:scale-105 transition-all shadow-2xl w-[90%] sm:w-auto max-w-md"
              >
                <span className="relative z-10">Start Building My AI Business →</span>
              </button>
              <p className="text-gray-400 mt-3 sm:mt-4 text-sm sm:text-base">
                <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 bg-red-500 rounded-full animate-pulse"></span> Only accepting 3 creators this month
              </p>
            </motion.div>
          </motion.div>

          {/* Footer disclaimers - Mobile optimized */}
          <footer className="mt-16 sm:mt-20 md:mt-24 border-t border-gray-800 pt-6 sm:pt-8 text-center text-[10px] sm:text-xs text-gray-500 max-w-4xl mx-auto px-4">
            <p className="mb-2">
              Disclaimer: This site is not a part of the Facebook™ website or Facebook™ Inc. Additionally, this site is NOT endorsed by Facebook™ in any way. FACEBOOK™ is a trademark of FACEBOOK™, Inc.
            </p>
            <p className="mb-2">
              Google, YouTube, TikTok, Instagram, and Twitter are trademarks of their respective owners. Results stated above are our personal and client results. Please understand our results are not typical, we are not implying you will achieve similar results, or that you will make any money at all.
            </p>
            <p className="mb-2">
              Any success shown is based on hard work, dedication, and skills. This is not a get-rich-quick scheme. Your results may vary based on many factors including effort, experience, and market conditions.
            </p>
            <div className="flex items-center justify-center gap-2 mt-4">
              <img 
                src="/zephryx-logo-icon.PNG" 
                alt="Zephryx Labs Icon" 
                className="h-6 sm:h-8"
              />
              <p>
                © {new Date().getFullYear()} Zephryx Labs. All rights reserved.
              </p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
} 