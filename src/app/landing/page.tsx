'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function LandingPage() {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleCTAClick = () => {
    setIsLoading(true);
    setTimeout(() => {
      router.push('/application');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-black relative overflow-hidden">
      {/* Animated gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-blue-950/20 via-purple-950/20 to-black">
        <div className="absolute inset-0 opacity-20" style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%239C92AC' fill-opacity='0.03'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`
        }}></div>
      </div>
      
      {/* Floating orbs */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{
            x: [0, 100, 0],
            y: [0, -100, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute top-20 left-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
        <motion.div
          animate={{
            x: [0, -100, 0],
            y: [0, 100, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "linear"
          }}
          className="absolute bottom-20 right-20 w-96 h-96 bg-blue-500/30 rounded-full blur-3xl"
        />
      </div>

      {/* Loading overlay */}
      {isLoading && (
        <div className="fixed inset-0 bg-black/90 backdrop-blur-sm flex items-center justify-center z-50">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-center"
          >
            <div className="relative">
              <div className="absolute inset-0 bg-blue-500 rounded-full blur-xl animate-pulse" />
              <div className="relative animate-spin rounded-full h-20 w-20 border-t-2 border-b-2 border-blue-500 mx-auto mb-4" />
            </div>
            <p className="text-white text-xl font-light">Preparing your application...</p>
          </motion.div>
        </div>
      )}

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-12 relative z-10">
        {/* Headline Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-12"
        >
          <motion.div
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ duration: 1, ease: "easeOut" }}
          >
                          <h1 className="text-5xl md:text-7xl font-black text-white mb-8 leading-tight">
                How <span className="underline decoration-2 decoration-yellow-400">Content Creators</span> are Making{' '}
                <span className="relative inline-block">
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 blur-lg opacity-75 animate-pulse"></span>
                  <span className="relative bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent">
                    $100K+ Per Month
                  </span>
                </span>{' '}
                Using <span className="bg-yellow-400/20 px-3 py-1 border-2 border-yellow-400/50">AI</span>
              </h1>
          </motion.div>
          
          {/* Video Placeholder */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-2xl blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative bg-black p-1 rounded-2xl shadow-2xl mb-8 max-w-3xl mx-auto">
              <div className="relative aspect-video bg-gradient-to-br from-gray-900 to-black rounded-xl overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                  >
                    <div className="relative">
                      <div className="absolute inset-0 bg-white/20 rounded-full blur-xl" />
                      <div className="relative w-20 h-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl">
                        <svg className="w-8 h-8 text-white ml-1" fill="currentColor" viewBox="0 0 20 20">
                          <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                        </svg>
                      </div>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="text-2xl md:text-3xl text-gray-300 font-light"
          >
            <span className="line-through decoration-red-500 decoration-2">Without More Content</span>, <span className="line-through decoration-red-500 decoration-2">AI Content</span>, or <span className="line-through decoration-red-500 decoration-2">Inconsistent Brand Deals & Merch</span>
          </motion.p>
        </motion.div>

        {/* What No One's Telling Section */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="mb-16 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-red-600/10 to-orange-600/10 blur-3xl rounded-3xl"></div>
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            >
              Here's What <span className="bg-yellow-500/20 px-4 py-2 border-b-4 border-yellow-500">No One's Telling</span> Creators About Monetization in 2025
            </motion.h2>
            
            <div className="prose prose-lg prose-invert max-w-none space-y-4">
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                className="text-gray-300"
              >
                Everyone's focused on <span className="font-bold text-white bg-gray-800/50 px-2 py-1 rounded">content volume</span>.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.1 }}
                className="text-gray-300"
              >
                Post more. Go live. Keep up with trends. Push merch. Chase brand deals. Or maybe trading all of their time for money with coaching.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-black text-white bg-gradient-to-r from-yellow-400/20 to-orange-400/20 p-4 border-l-4 border-yellow-400"
              >
                The creators who are <span className="underline decoration-yellow-400 decoration-2">printing money</span> right now?
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="text-gray-300 text-xl font-semibold"
              >
                They <span className="text-gray-400 font-black">aren't</span> making more content.
              </motion.p>
              
              <motion.p
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="text-gray-300"
              >
                They're using <span className="text-yellow-400 font-bold">AI-powered products</span> that <span className="underline decoration-yellow-400 decoration-2">their audiences can't refuse</span>—and making <span className="text-yellow-400 font-bold">hundreds of thousands of dollars per month</span>… all because of these few things..
              </motion.p>
            </div>
          </div>
        </motion.div>

        {/* 5 Key Points */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mb-16"
        >
          <div className="space-y-8">
            {[
              {
                icon: "🚀",
                title: "AI Products Are the Shift.",
                description: "This isn't merch. This isn't a coaching offer. AI tools solve real problems in real time—and your audience will actually use them. That's why retention is off the charts.",
                color: "from-blue-500 to-cyan-500",
                bgColor: "bg-blue-500/80",
                borderColor: "border-blue-400"
              },
              {
                icon: "⚡",
                title: "They're Branded to You.",
                description: "A product with your name, your vibe, and your audience in mind? Converts 387% higher than some random SaaS. People don't want \"the best app\"—they want the one their favorite creator stands behind.",
                color: "from-purple-500 to-pink-500",
                bgColor: "bg-purple-500/80",
                borderColor: "border-purple-400"
              },
              {
                icon: "💰",
                title: "They Print Recurring Income.",
                description: "You're not chasing sponsorships. You're building a product that pays you every single month, even if you don't post. One follower = one customer = one predictable monthly paycheck.",
                color: "from-yellow-500 to-yellow-600",
                bgColor: "bg-yellow-500/80",
                borderColor: "border-yellow-400"
              },
              {
                icon: "🔥",
                title: "They Work Without You.",
                description: "No more burnout. No more hamster wheel. Once it's live, the app handles everything. It sells, delivers, and supports—all without you lifting a finger.",
                color: "from-orange-500 to-red-500",
                bgColor: "bg-orange-500/80",
                borderColor: "border-orange-400"
              },
              {
                icon: "📈",
                title: "They Scale Fast.",
                description: "We've seen creators go from $0 to $100K/month in under 90 days with the right product and positioning. Why? Because AI is hot. Personalized AI is irresistible.",
                color: "from-indigo-500 to-blue-500",
                bgColor: "bg-indigo-500/80",
                borderColor: "border-indigo-400"
              }
            ].map((point, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 * index }}
                className="group"
              >
                <div className={`relative overflow-hidden`}>
                  <div className={`absolute inset-0 bg-gradient-to-r ${point.color} opacity-20`}></div>
                  <div className={`flex gap-6 items-start p-8 ${point.bgColor} backdrop-blur-sm border ${point.borderColor} transition-all duration-300 hover:shadow-2xl relative`}>
                    <div className="relative flex-shrink-0">
                      <motion.div
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 4, repeat: Infinity, delay: index * 0.2 }}
                        className="text-6xl"
                      >
                        {point.icon}
                      </motion.div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-black text-white mb-3 group-hover:text-transparent group-hover:bg-gradient-to-r group-hover:bg-clip-text group-hover:from-blue-400 group-hover:to-purple-400 transition-all">
                        {point.title}
                      </h3>
                      <p className="text-gray-300 text-lg leading-relaxed">
                        {index === 1 && (
                          <>
                            A product with your name, your vibe, and your audience in mind? Converts <span className="bg-yellow-400/30 text-yellow-300 font-black text-xl px-2 py-1 rounded">387% higher</span> than some random SaaS. People don't want "the best app"—they want the one their favorite creator stands behind.
                          </>
                        )}
                        {index === 2 && (
                          <>
                            You're not chasing sponsorships. You're building a product that pays you every single month, even if you don't post. One follower = one customer = one predictable monthly paycheck.
                          </>
                        )}
                        {index !== 1 && index !== 2 && point.description}
                      </p>
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Button */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <motion.button
            onClick={handleCTAClick}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="relative group"
          >
            <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
            <div className="relative inline-flex items-center justify-center px-12 py-6 text-xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl">
              Yes, I Want My Own AI Product →
            </div>
          </motion.button>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="text-gray-400 mt-4"
          >
            <span className="text-yellow-400 animate-pulse">⚡</span> Limited to 3 creators this month
          </motion.p>
        </motion.div>

        {/* Secret Behind Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/5 to-purple-600/5 blur-3xl rounded-3xl"></div>
          <div className="relative">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
            >
              The <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-black px-4 py-2 rounded-lg font-black">Secret</span> Behind Creators Making $50K+/Month Without Posting Daily
            </motion.h2>
            
            <div className="prose prose-lg prose-invert max-w-none space-y-6">
              <p className="text-gray-300">
                After investing over <span className="text-white font-bold bg-yellow-500/20 px-2 py-1 rounded">half a million dollars</span> into online marketing and software businesses, one thing stuck out to me more than anything else:
              </p>
              
              <p className="text-gray-300">
                I've built a software company from zero to <span className="text-yellow-400 font-bold">$50,000 per month</span>, purely off influencer-driven traffic. And I've used the same strategy to build countless eCommerce brands into overnight successes.
              </p>
              
              <p className="text-gray-300">
                <strong className="text-white text-2xl">But here's the catch:</strong>
              </p>
              
              <div className="bg-gradient-to-r from-gray-500/10 to-gray-600/10 border-l-4 border-gray-500 p-6 rounded-r-lg">
                <p className="text-gray-300 text-lg">
                  Creators are <span className="font-black text-gray-400 text-xl">missing out</span> on the biggest wealth shift since the industrial revolution and wasting their time with merch and sponsorship deals, leaving <span className="underline decoration-gray-400 decoration-2">massive profits on the table</span>. Rather than getting paid 5-10% of what a company makes from a brand deal or selling a handful of hoodies, they should have their own product that improves someone's life, happily paying <span className="bg-yellow-500/20 text-yellow-300 font-bold px-2 py-1 rounded animate-pulse">month after month after month</span>.
                </p>
              </div>
              
              <p className="text-gray-300">
                That's when it hit me: What if I could leverage my proven system to create <span className="font-bold text-white">niche-specific AI software</span> tailored exactly to an influencer's audience? The kind of app that doesn't just get downloaded and forgotten—it <span className="underline decoration-blue-400 decoration-2">solves real problems</span>, creates genuine value, and turns followers into loyal, recurring customers.
              </p>
              
              <p className="text-gray-300">
                AI is rapidly changing the way we live. And the truth is, when your AI product effortlessly improves someone's life or business, you've locked in a customer for life, happily paying <span className="bg-yellow-500/20 text-yellow-300 font-bold px-2 py-1 rounded animate-pulse">month after month after month</span>.
              </p>
              
              <p className="text-gray-300">
                This is your chance to tap into something massive, engineered by my team, fully built for you, with every piece of tech handled—to launch your own AI software and turn your influence into a high-margin, recurring revenue machine. Seriously... <span className="text-2xl font-black text-transparent bg-gradient-to-r from-yellow-400 to-orange-400 bg-clip-text">hundreds of thousands in predictable monthly income</span>, built around actually helping your audience in a meaningful, lasting way.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-red-600 to-orange-600 rounded-lg blur opacity-25 animate-pulse"></div>
                <div className="relative bg-red-950/50 backdrop-blur-sm border-2 border-red-500/50 rounded-lg p-8 my-8">
                  <p className="text-red-400 font-black text-2xl mb-4">
                    ⏰ And timing has never been more critical.
                  </p>
                  <p className="text-gray-300 text-lg">
                    AI is moving at <span className="font-bold text-white">warp speed</span>. Every day you wait, the window narrows. We're not just watching a shift—we're standing inside the <span className="bg-yellow-400/20 text-yellow-300 font-bold px-2 py-1 rounded">biggest digital gold rush</span> of our generation. You could get paid a couple thousand bucks to promote someone else's product... or you could make <span className="text-yellow-400 font-black text-xl">hundreds of thousands of dollars</span> with your own.
                  </p>
                </div>
              </motion.div>
              
              <p className="text-gray-300">
                <strong className="text-white text-xl">Now, let's break down the logic:</strong>
              </p>
              
              <p className="text-gray-300">
                Mid-size content creators typically earn between <span className="line-through decoration-gray-500">$500 and $10,000</span> per marketing campaign. While that might sound decent, consider this: companies running these campaigns frequently generate returns of <span className="text-yellow-400 font-bold">10x, 30x, or even 50x</span> their ad spend. This means creators are earning <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded">pennies</span> compared to the massive profits they're generating for these brands.
              </p>
              
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-25 animate-pulse"></div>
                <div className="relative bg-blue-950/50 backdrop-blur-sm border-2 border-blue-500/50 rounded-lg p-8 my-8">
                                      <p className="text-blue-400 font-black text-2xl">
                      But here's the wild part: A product branded to someone the user already trusts converts <span className="text-4xl text-yellow-400 font-black">387% higher</span> than a product with no personal brand. I've witnessed this firsthand across hundreds of content creators.
                  </p>
                </div>
              </motion.div>
              
              <p className="text-gray-300 text-xl font-semibold">
                And look, it makes sense
              </p>
              
              <p className="text-gray-300">
                When you promote someone else's product, you might get a flat fee. But when the product is <span className="bg-gradient-to-r from-blue-500 to-purple-500 text-white font-bold px-3 py-1 rounded-full">yours</span>—branded with your name, designed for your audience, and solving a problem they already have—you're no longer an ad slot. <span className="text-2xl font-black text-white">You're the solution.</span> And your income reflects that.
              </p>
              
              <p className="text-gray-300">
                I've seen creators with less than a million followers turn that trust into <span className="bg-yellow-500/20 text-yellow-300 font-bold text-xl px-3 py-1 rounded">six figures in pure profit</span>. Not once. <span className="underline decoration-yellow-400 decoration-4">Consistently</span>. Because a tool that improves someone's workflow, health, business, or lifestyle becomes part of their routine. They don't just buy it once. They keep paying for it. <span className="font-black text-2xl">Forever</span>.
              </p>
              
              <p className="text-gray-300 text-lg">
                So while others are busy negotiating their next <span className="line-through decoration-gray-500">$2,000 shoutout</span>… you're building a product that makes <span className="text-yellow-400 font-black text-2xl">$20,000 in the same week</span>—and keeps going long after the post disappears.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Case Studies */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-16"
        >
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-8 text-center"
          >
            And this isn't theory. <span className="bg-gradient-to-r from-yellow-400 to-orange-400 text-transparent bg-clip-text">It's already happening:</span>
          </motion.h2>
          
          <div className="space-y-12">
            {/* Tyler's Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-green-600 to-emerald-600 blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800/80 p-8 hover:border-green-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full blur-lg opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                        💪
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Tyler</h3>
                      <p className="text-gray-400">53.1k Fitness Followers</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Fitness creator. 1.2M followers. Solid views. Loyal fans, but <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded">no real income</span> beyond a couple affiliate links and some coaching clients. He didn't want to sell a workout program or start the millionth pre workout brand.
                  </p>
                  <p className="text-yellow-400 italic mb-4 text-lg font-semibold">
                    "I just want to help people get fit without all the BS."
                  </p>
                  <p className="text-gray-300 mb-4">
                    We built him an AI fitness coach. Personalized workouts, meal plans, form checks—all powered by his training philosophy. He launched it with <span className="underline decoration-yellow-400 decoration-2">one pinned comment</span> and an IG story.
                  </p>
                  <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-6">
                    <p className="text-yellow-400 font-black text-2xl">
                      It made $8,700 in 11 days.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Maya's Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800/80 p-8 hover:border-purple-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full blur-lg opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                        👗
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Maya</h3>
                      <p className="text-gray-400">87.4k Fashion Followers</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Maya had 87.4k followers. All fans of her sense of style. She has the look, the engagement—but <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded">brand deals were inconsistent</span>, and none of them felt right. She didn't want to launch a clothing line. She wanted <span className="font-bold text-white">control</span>.
                  </p>
                  <p className="text-blue-400 italic mb-4 text-lg font-semibold">
                    "I wish I could just style everyone personally."
                  </p>
                  <p className="text-gray-300 mb-4">
                    So we did exactly that. An AI stylist trained on Maya's aesthetic. Upload a photo, get curated outfits. Think: <span className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded">Maya in app form</span>. She mentioned it once in a try-on video.
                  </p>
                  <div className="bg-blue-500/10 border-2 border-blue-500/30 rounded-lg p-6">
                    <p className="text-blue-400 font-black text-2xl">
                      200K views. Over 1,500 users in week one.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Jake's Story */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="group"
            >
              <div className="relative">
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 blur opacity-25 group-hover:opacity-50 transition duration-300"></div>
                <div className="relative bg-gray-900/90 backdrop-blur-sm border border-gray-800/80 p-8 hover:border-blue-400 transition-all duration-300">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="relative">
                      <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full blur-lg opacity-50"></div>
                      <div className="relative w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center text-white font-bold text-2xl shadow-xl">
                        ⛳
                      </div>
                    </div>
                    <div>
                      <h3 className="text-2xl font-bold text-white">Jake</h3>
                      <p className="text-gray-400">61.7k Golf Followers</p>
                    </div>
                  </div>
                  <p className="text-gray-300 mb-4">
                    Jake. 312k followers. Gaming content. Crushing the algorithm game. But monetizing? <span className="bg-gray-500/20 text-gray-300 px-2 py-1 rounded">Rough</span>. Affiliate codes weren't cutting it.
                  </p>
                  <p className="text-blue-400 italic mb-4 text-lg font-semibold">
                    "I wish I could just play golf all day."
                  </p>
                  <p className="text-gray-300 mb-4">
                    We built him an AI gaming coach. Strategy tips, loadout optimizer, real-time analysis. He sold lifetime access for <span className="bg-yellow-500/20 text-yellow-300 font-bold px-2 py-1 rounded">$27</span>.
                  </p>
                  <div className="bg-yellow-500/10 border-2 border-yellow-500/30 rounded-lg p-6">
                    <p className="text-yellow-400 font-black text-2xl">
                      It made $12K in three weeks.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </motion.div>

        {/* Final CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center py-16 relative"
        >
          <div className="absolute -inset-4 bg-gradient-to-r from-blue-600/10 via-purple-600/10 to-blue-600/10 blur-3xl rounded-3xl"></div>
          <div className="relative">
            <motion.h2
              initial={{ scale: 0.9 }}
              whileInView={{ scale: 1 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-black text-white mb-6"
            >
              This is what happens when creators <span className="line-through decoration-gray-500 decoration-4">stop just posting</span>—and <span className="underline decoration-yellow-400 decoration-4">start owning</span>.
            </motion.h2>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-2xl text-gray-300 mb-4"
            >
              The tools are <span className="text-yellow-400 font-bold">ready</span>. The market is <span className="text-yellow-400 font-bold">starving</span>.
            </motion.p>
            <motion.p
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-3xl font-black bg-gradient-to-r from-blue-400 via-purple-400 to-blue-600 bg-clip-text text-transparent mb-12"
            >
              And the opportunity is RIGHT NOW.
            </motion.p>
            
            <motion.button
              onClick={handleCTAClick}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="relative group"
            >
              <div className="absolute -inset-2 bg-gradient-to-r from-blue-600 via-purple-600 to-blue-600 rounded-full blur-lg opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 animate-gradient-x"></div>
              <div className="relative inline-flex items-center justify-center px-16 py-8 text-2xl font-bold text-white bg-gradient-to-r from-blue-600 to-purple-600 rounded-full shadow-2xl">
                I'm Ready to Build My AI Business →
              </div>
            </motion.button>
            
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="mt-8 space-y-2"
            >
              <p className="text-yellow-400 font-black text-xl animate-pulse">
                ⚡ Only 3 spots available this month
              </p>
              <p className="text-gray-400">
                Next cohort starts in 30 days • Price increases by $2,000
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
} 