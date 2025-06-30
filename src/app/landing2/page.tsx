'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Landing2Page() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: ''
  });

  // State for switching between different variations of the 5 key points
  const [currentVariation, setCurrentVariation] = useState(0);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    router.push('/application2');
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  // Different variations of the 5 key points section
  const keyPointsVariations = [
    // Variation 1: Original style with colored borders
    {
      title: "The Real Reason Some Creators Make $100K/Month (While Others Struggle)",
      subtitle: "It's not what you think—and it has nothing to do with follower count",
      points: [
        {
          number: "1",
          title: "Your Followers Actually Use This Stuff",
          description: "Remember that merch drop that sold 12 hoodies? Yeah, me too. But an AI tool that saves your audience 2 hours a day? They'll pay for that forever. One creator told me: \"My retention is 94% because my tool actually makes their life easier.\"",
          borderColor: "border-blue-600",
          titleColor: "text-blue-400",
          bgColor: "bg-gray-800",
          highlight: undefined,
          numberStyle: undefined
        },
        {
          number: "2",
          title: "It's YOU in App Form",
          description: "Your audience doesn't follow you for generic advice—they want YOUR take, YOUR methods, YOUR vibe. When Sarah launched her AI stylist app, she thought maybe 100 people would buy. 1,847 subscribers later, she realized: people don't want the \"best\" app. They want YOURS.",
          borderColor: "border-yellow-600",
          titleColor: "text-yellow-600",
          bgColor: "bg-gray-800",
          highlight: "bg-yellow-900 text-yellow-200 px-1 font-bold",
          numberStyle: undefined
        },
        {
          number: "3",
          title: "Money Hits Different When It's Predictable",
          description: "Brand deal this month? Cool. Next month? Who knows. But 500 people paying $47/month? That's $23,500 you can count on. Every. Single. Month. Even if you take a vacation. Even if the algorithm hates you. Even if you're burnt out and need a break.",
          borderColor: "border-blue-600",
          titleColor: "text-blue-400",
          bgColor: "bg-gray-800",
          highlight: "bg-blue-900 text-blue-200 px-1 font-bold",
          numberStyle: undefined
        },
        {
          number: "4",
          title: "You Can Actually Have a Life Again",
          description: "No more replying to DMs at 2am. No more \"sorry for the late upload.\" The app runs itself. Jake told me: \"I went to Europe for 3 weeks. Made $18K while I was gone. My AI handled 400+ customer questions. I came back to happy users and a full bank account.\"",
          borderColor: "border-gray-600",
          titleColor: "text-gray-400",
          bgColor: "bg-gray-800",
          highlight: undefined,
          numberStyle: undefined
        },
        {
          number: "5",
          title: "The Numbers Are Actually Insane",
          description: "Tyler went from $3K/month (coaching) to $47K/month (AI app) in 73 days. Same audience. Same content. Different model. Why? Because when 1 in 10 followers becomes a paying user, the math changes everything. And with AI, that's exactly what's happening.",
          borderColor: "border-gray-500",
          titleColor: "text-gray-300",
          bgColor: "bg-gray-800",
          highlight: "bg-gray-700 text-gray-100 px-1 font-bold",
          numberStyle: undefined
        }
      ]
    },
    // Variation 2: Cards with icons style
    {
      title: "Why Your Next Post Won't Make You Rich (But This Will)",
      subtitle: "The uncomfortable truth about creator income in 2025",
      points: [
        {
          number: "🚀",
          title: "They Need This Yesterday",
          description: "Your DMs are full of the same questions, right? Now imagine an AI that answers them perfectly, in your voice, 24/7. Maya's fashion AI gets 2,000+ questions daily. That's 2,000 chances to help—and get paid—while she sleeps.",
          borderColor: "border-blue-500",
          titleColor: "text-blue-300",
          bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
          highlight: undefined,
          numberStyle: undefined
        },
        {
          number: "🎯",
          title: "It's Like Having 1,000 Mini-Yous",
          description: "That personal touch that makes your content special? It's baked into every interaction. When someone uses your AI, they're getting YOUR expertise, YOUR personality, YOUR methods. No wonder conversion rates are 4x higher than generic apps.",
          borderColor: "border-yellow-500",
          titleColor: "text-yellow-400",
          bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
          highlight: undefined,
          numberStyle: undefined
        },
        {
          number: "💰",
          title: "The Money Flows While You Sleep",
          description: "Imagine waking up to \"You made $1,247 while you were sleeping\" notifications. Not from a lucky viral post. From your AI app doing its job. Sarah says: \"I used to stress about views. Now I stress about which vacation to take.\"",
          borderColor: "border-blue-500",
          titleColor: "text-blue-300",
          bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
          highlight: undefined,
          numberStyle: undefined
        },
        {
          number: "⚡",
          title: "Set It and Forget It (Seriously)",
          description: "Remember when you thought 'passive income' meant selling PDFs? This is different. Your AI talks to customers, solves problems, collects payments, sends updates. You? You're at the beach. Or creating. Or just... living.",
          borderColor: "border-gray-500",
          titleColor: "text-gray-300",
          bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
          highlight: undefined,
          numberStyle: undefined
        },
        {
          number: "📈",
          title: "Growth That Breaks Calculators",
          description: "Month 1: 127 users. Month 2: 493 users. Month 3: 1,247 users. That's not a typo. When your product actually works, word spreads fast. Really fast. \"I can't keep up with the growth\" is a problem you'll love having.",
          borderColor: "border-gray-400",
          titleColor: "text-gray-200",
          bgColor: "bg-gradient-to-br from-gray-800 to-gray-900",
          highlight: undefined,
          numberStyle: undefined
        }
      ]
    },
    // Variation 3: Minimalist numbered boxes
    {
      title: "How I Watched Creators Go From Broke to Banking",
      subtitle: "The 5-step playbook they all followed (stolen from Silicon Valley)",
      points: [
        {
          number: "01",
          title: "Find the Hidden Gold Mine",
          description: "Look at your DMs. See those repeated questions? That's not annoying—that's opportunity. Every \"How do I...\" is someone willing to pay for an instant answer. Jake had 50 golf DMs daily. Now his AI coach handles 5,000. Do the math.",
          borderColor: "border-l-4 border-blue-600",
          titleColor: "text-white",
          bgColor: "bg-gray-900",
          highlight: undefined,
          numberStyle: "text-4xl font-bold text-blue-600"
        },
        {
          number: "02",
          title: "Make It Unmistakably Yours",
          description: "Slap your name on it. Inject your personality. Use your catchphrases. This isn't about building the \"best\" app—it's about building the one only YOU could make. That's why Tyler's fitness AI converts at 23%. His personality IS the product.",
          borderColor: "border-l-4 border-yellow-600",
          titleColor: "text-white",
          bgColor: "bg-gray-900",
          highlight: undefined,
          numberStyle: "text-4xl font-bold text-yellow-600"
        },
        {
          number: "03",
          title: "Launch to Your Ride-or-Dies",
          description: "Forget Product Hunt. Forget paid ads. Your first 1,000 users are already following you. One Instagram story from Maya: 217 signups in 4 hours. Why? Because they already trust you. The selling is already done.",
          borderColor: "border-l-4 border-blue-600",
          titleColor: "text-white",
          bgColor: "bg-gray-900",
          highlight: undefined,
          numberStyle: "text-4xl font-bold text-blue-600"
        },
        {
          number: "04",
          title: "Let the Robots Work",
          description: "While you're filming content, your AI is closing sales. While you're sleeping, it's answering questions. While you're on vacation, it's collecting payments. This isn't delegation—it's multiplication. You, everywhere, all at once.",
          borderColor: "border-l-4 border-gray-600",
          titleColor: "text-white",
          bgColor: "bg-gray-900",
          highlight: undefined,
          numberStyle: "text-4xl font-bold text-gray-500"
        },
        {
          number: "05",
          title: "Watch the Compound Effect",
          description: "Month 1 feels slow. Month 3 feels fast. Month 6? You'll need to sit down. Because when each user tells 2 friends, and those friends tell 2 friends... suddenly you're Jake, staring at $97K MRR, wondering if it's real. (It is.)",
          borderColor: "border-l-4 border-gray-500",
          titleColor: "text-white",
          bgColor: "bg-gray-900",
          highlight: undefined,
          numberStyle: "text-4xl font-bold text-gray-400"
        }
      ]
    }
  ];

  const currentPoints = keyPointsVariations[currentVariation];

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Urgency bar */}
      <div className="bg-blue-600 text-white text-center py-2 font-bold animate-pulse">
        🔥 ONLY 3 SPOTS LEFT - CLOSING SOON 🔥
      </div>

      {/* Header */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white">ZEPHRYX LABS</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Headline */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-white mb-6" style={{ fontFamily: 'Arial, sans-serif' }}>
            How Content Creators are Making <span className="bg-yellow-900 text-yellow-200 px-2">$100K+ Per Month</span> Using AI
          </h2>
          
          {/* Video placeholder */}
          <div className="bg-black p-2 mb-8 max-w-3xl mx-auto shadow-2xl">
            <div className="relative aspect-video bg-gray-900">
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => router.push('/vsl2')}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-12 py-6 rounded animate-pulse"
                >
                  ▶ WATCH VIDEO NOW
                </button>
              </div>
            </div>
          </div>

          <p className="text-2xl text-gray-300 font-bold">
            <span className="underline decoration-4 decoration-blue-600">Without</span> More Content, AI Content, or Inconsistent Brand Deals & Merch
          </p>
        </div>

        {/* Main content section */}
        <div className="mb-12">
          <div className="bg-blue-600 text-white px-6 py-4 mb-8 inline-block">
            <h3 className="text-3xl font-bold" style={{ fontFamily: 'Arial, sans-serif' }}>
              Here's What No One's Telling Creators About Monetization in 2025
            </h3>
          </div>

          <div className="text-lg text-gray-300 space-y-4 mb-8">
            <p>
              Everyone's focused on content volume.
              <span className="font-bold"> Post more. Go live. Keep up with trends. Push merch. Chase brand deals.</span> Or maybe trading all of their time for money with coaching.
            </p>
            <div className="bg-yellow-900 border-l-4 border-yellow-500 p-4">
              <p className="font-bold text-xl text-yellow-200">
                The creators who are <span className="underline decoration-4 decoration-yellow-500">printing money</span> right now?
                <br />
                They aren't making more content.
                <br />
                They're building products their audience actually uses—and making <span className="bg-yellow-800 text-yellow-200">hundreds of thousands of dollars per month</span>… all because of these few things..
              </p>
            </div>
          </div>

          {/* Updated 5 Key Points with variations */}
          <div className="mb-12">
            {/* Variation selector */}
            <div className="text-center mb-8">
              <div className="bg-gray-800 p-4 rounded-lg inline-block">
                <p className="text-gray-300 mb-4">Try different versions:</p>
                <div className="flex gap-2 justify-center">
                  <button
                    onClick={() => setCurrentVariation(0)}
                    className={`px-4 py-2 rounded ${currentVariation === 0 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                  >
                    Classic
                  </button>
                  <button
                    onClick={() => setCurrentVariation(1)}
                    className={`px-4 py-2 rounded ${currentVariation === 1 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                  >
                    Modern
                  </button>
                  <button
                    onClick={() => setCurrentVariation(2)}
                    className={`px-4 py-2 rounded ${currentVariation === 2 ? 'bg-blue-600 text-white' : 'bg-gray-700 text-gray-300 hover:bg-gray-600'}`}
                  >
                    Minimal
                  </button>
                </div>
              </div>
            </div>

            {/* Current variation display */}
            <div className="text-center mb-8">
              <h3 className="text-3xl font-bold text-white mb-2">{currentPoints.title}</h3>
              <p className="text-xl text-gray-400">{currentPoints.subtitle}</p>
            </div>

            <div className="space-y-6">
              {currentPoints.points.map((point, index) => (
                <div key={index} className={`${point.bgColor} p-6 ${point.borderColor} shadow-lg`}>
                  <div className="flex items-start gap-4">
                    <div className={point.numberStyle || "text-2xl font-bold text-gray-400"}>
                      {point.number}
                    </div>
                    <div>
                      <h4 className={`text-xl font-bold mb-2 ${point.titleColor}`}>
                        {point.title}
                      </h4>
                      <p className="text-gray-300">
                        {point.description.includes('387% higher') ? (
                          <>
                            A product with your name, your vibe, and your audience in mind? <span className={point.highlight || "bg-yellow-900 text-yellow-200 px-1 font-bold"}>Converts 387% higher</span> than some random SaaS. People don't want "the best app"—they want the one their favorite creator stands behind.
                          </>
                        ) : point.description.includes('$0 to $100K/month') ? (
                          <>
                            We've seen creators go from <span className={point.highlight || "bg-gray-700 text-gray-100 px-1 font-bold"}>$0 to $100K/month</span> in under 90 days with the right product and positioning. Why? Because AI is hot. <span className="underline">Personalized AI is irresistible</span>.
                          </>
                        ) : point.description.includes('predictable monthly paycheck') ? (
                          <>
                            You're <span className="font-bold">not chasing sponsorships</span>. You're building a product that pays you <span className="underline decoration-2">every single month</span>, even if you don't post. One follower = one customer = one <span className={point.highlight || "bg-blue-900 text-blue-200 px-1 font-bold"}>predictable monthly paycheck</span>.
                          </>
                        ) : (
                          point.description
                        )}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Secret section with background */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-8 mb-8">
            <h3 className="text-3xl font-bold text-center mb-4">
              The Secret Behind Creators Making $50K+/Month Without Posting Daily
            </h3>
          </div>
          
          {/* Story section with background */}
          <div className="relative">
            {/* Background overlay */}
            <div className="absolute inset-0 bg-gradient-to-r from-gray-800/30 via-gray-900/40 to-gray-800/30 rounded-lg"></div>
            
            {/* Content with background */}
            <div className="relative bg-gray-900/60 backdrop-blur-sm border border-gray-700 rounded-lg p-8 text-lg text-gray-300 space-y-4">
              <p>
                After investing over <span className="font-bold bg-yellow-900 text-yellow-200 px-1">half a million dollars</span> into online marketing and software businesses, one thing stuck out to me more than anything else:
              </p>
              <p>
                Content creators don't just have influence—they hold the power to transform clicks into customers at costs most marketers can only dream of. We're talking <span className="font-bold underline">sub-$10 per acquisition</span>, the kind of results that catapulted my own software company from zero to <span className="bg-yellow-900 text-yellow-200 px-1 font-bold">$50,000 per month</span>, purely off influencer-driven traffic. And I've used the same strategy to build countless eCommerce brands into overnight successes.
              </p>
              
              <div className="bg-gray-800/80 border-2 border-gray-600 p-4 my-6 rounded">
                <p className="font-bold text-xl text-gray-200">But here's the catch:</p>
                <p className="text-gray-300">
                  Creators are missing out on the <span className="underline decoration-4 decoration-gray-500">biggest wealth shift since the industrial revolution</span> and wasting their time with merch and sponsorship deals, leaving massive profits on the table. Rather than getting paid 5-10% of what a company makes from a brand deal or selling a handful of hoodies, they should have their own unique digital product that their followers will pay to use <span className="font-bold">every month like clockwork</span>.
                </p>
              </div>

              <p>
                That's when it hit me: What if I could leverage my proven system to create <span className="bg-blue-900 text-blue-200 px-1 font-bold">niche-specific AI software</span> tailored exactly to an influencer's audience? The kind of app that doesn't just get downloaded and forgotten—it solves real problems, creates genuine value, and turns followers into <span className="underline">loyal, recurring customers</span>.
              </p>
              <p>
                AI is rapidly changing the way we live. And the truth is, when your AI product effortlessly improves someone's life or business, you've locked in a customer for life, <span className="font-bold">happily paying month after month after month</span>.
              </p>
              
              <div className="bg-blue-600/20 border border-blue-500 text-white p-6 my-8 rounded">
                <p className="font-bold text-xl">
                  This is your chance to tap into something massive, engineered by my team, fully built for you, with every piece of tech handled—to launch your own AI software and turn your influence into a high-margin, recurring revenue machine. Seriously... <span className="underline decoration-4">hundreds of thousands in predictable monthly income</span>, built around actually helping your audience in a meaningful, lasting way.
                </p>
              </div>

              <div className="bg-yellow-900/30 border-2 border-yellow-600 p-4 rounded">
                <p className="font-bold text-xl text-yellow-200">And timing has never been more critical.</p>
                <p className="text-yellow-100">
                  AI is moving at warp speed. <span className="font-bold">Every day you wait, the window narrows</span>. We're not just watching a shift—we're standing inside the biggest digital gold rush of our generation. You could get paid a couple thousand bucks to promote someone else's product... or you could make <span className="bg-yellow-800 text-yellow-200 px-1 font-bold">hundreds of thousands of dollars with your own</span>.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Logic breakdown */}
        <div className="bg-gradient-to-r from-gray-800 to-gray-900 p-8 border-2 border-gray-700 mb-12">
          <h4 className="text-2xl font-bold mb-6 text-white">Now, let's break down the logic:</h4>
          <div className="text-lg text-gray-300 space-y-4">
            <p>
              Mid-size content creators typically earn between <span className="font-bold">$500 and $10,000</span> per marketing campaign. While that might sound decent, consider this: companies running these campaigns frequently generate returns of <span className="bg-gray-700 text-gray-100 px-1 font-bold">10x, 30x, or even 50x</span> their ad spend. This means creators are earning <span className="underline">pennies</span> compared to the massive profits they're generating for these brands.
            </p>
            
            <div className="bg-gray-900 p-4 border-l-4 border-yellow-600">
              <p className="font-bold text-xl text-white">The Truth About Trust:</p>
              <p>
                But here's the wild part: A product branded to someone the user already trusts converts <span className="bg-yellow-900 text-yellow-200 px-2">387% higher</span> than a product with no personal brand. I've witnessed this firsthand across hundreds of content creators.
              </p>
            </div>

            <p className="font-bold text-xl text-white">And look, it makes sense</p>
            <p>
              When you promote someone else's product, you might get a flat fee. But when the product is yours—branded with your name, designed for your audience, and solving a problem they already have—you're no longer an ad slot. <span className="bg-blue-900 text-blue-200 px-1 font-bold">You're the solution</span>. And your income reflects that.
            </p>
            <p>
              I've seen creators with less than a million followers turn that trust into <span className="underline decoration-4 decoration-yellow-500">six figures in pure profit</span>. Not once. <span className="font-bold">Consistently</span>. Because a tool that improves someone's workflow, health, business, or lifestyle becomes part of their routine. They don't just buy it once. They stay. They pay. <span className="bg-yellow-900 text-yellow-200 px-1 font-bold">Every month</span>.
            </p>
            
            <div className="bg-blue-900 border-2 border-blue-600 p-4 mt-6">
              <p className="font-bold text-xl text-blue-300">
                So while others are busy negotiating their next $2,000 shoutout… you're building a product that makes <span className="underline decoration-4">$20,000 in the same week</span>—and keeps going long after the post disappears.
              </p>
            </div>
          </div>
        </div>

        {/* Success stories */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-yellow-600 to-yellow-700 text-white p-6 mb-8">
            <h3 className="text-3xl font-bold text-center">
              And this isn't theory. It's already happening:
            </h3>
          </div>
          
          <div className="space-y-8">
            {/* Tyler's story */}
            <div className="bg-gray-800 p-8 border-2 border-gray-600 shadow-xl">
              <div className="bg-blue-600 text-white px-4 py-2 inline-block mb-4">
                <h4 className="text-2xl font-bold">Tyler - Fitness Creator</h4>
              </div>
              <div className="float-right ml-4 mb-4">
                <div className="bg-gray-200 w-48 h-48 flex items-center justify-center">
                  <span className="text-gray-500">[Tyler's App Screenshot]</span>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-4">
                Tyler had <span className="font-bold">53.1k followers</span> in the fitness niche—lifting videos, bro-science, supplement reviews. Loyal fans, but no real income beyond a couple affiliate links and some coaching clients. He didn't want to sell a workout program or start the millionth pre workout brand.
              </p>
              <p className="text-lg italic mb-4 bg-gray-700 p-4 border-l-4 border-blue-600 text-gray-200">
                "What if I had a tool that told guys exactly what to eat and how to train based on their body type and goals?"
              </p>
              <p className="text-lg text-gray-300">
                We built him an AI fitness coach. Personalized workouts, meal plans, form checks—all powered by his training philosophy. He launched it with one pinned comment and an IG story. <span className="bg-yellow-900 text-yellow-200 px-2 font-bold text-xl">It made $8,700 in 11 days.</span> Now? He's scaling it, posting less, and earning more than ever.
              </p>
            </div>

            {/* Maya's story */}
            <div className="bg-gray-800 p-8 border-2 border-gray-600 shadow-xl">
              <div className="bg-blue-600 text-white px-4 py-2 inline-block mb-4">
                <h4 className="text-2xl font-bold">Maya - Fashion Creator</h4>
              </div>
              <div className="float-right ml-4 mb-4">
                <div className="bg-gray-200 w-48 h-48 flex items-center justify-center">
                  <span className="text-gray-500">[Maya's App Screenshot]</span>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-4">
                Maya had <span className="font-bold">87.4k followers</span>. All fans of her sense of style. She has the look, the engagement—but brand deals were inconsistent, and none of them felt right. She didn't want to launch a clothing line. She wanted control.
              </p>
              <p className="text-lg italic mb-4 bg-gray-700 p-4 border-l-4 border-blue-600 text-gray-200">
                "My followers keep asking me to style them. I wish I could just give them a personal stylist version of me."
              </p>
              <p className="text-lg text-gray-300">
                So we did exactly that. An AI stylist trained on Maya's aesthetic. Upload a photo, get curated outfits. She mentioned it once in a try-on video. 200K views. <span className="bg-blue-900 text-blue-200 px-2 font-bold text-xl">Over 1,500 users in week one.</span> Now fashion brands are asking to license the tech. She's not waiting on brand deals—she's owning the whole play.
              </p>
            </div>

            {/* Jake's story */}
            <div className="bg-gray-800 p-8 border-2 border-gray-600 shadow-xl">
              <div className="bg-yellow-600 text-white px-4 py-2 inline-block mb-4">
                <h4 className="text-2xl font-bold">Jake - Golf Creator</h4>
              </div>
              <div className="float-right ml-4 mb-4">
                <div className="bg-gray-200 w-48 h-48 flex items-center justify-center">
                  <span className="text-gray-500">[Jake's App Screenshot]</span>
                </div>
              </div>
              <p className="text-lg text-gray-300 mb-4">
                Jake had <span className="font-bold">61.7k followers</span> making golf content—swing breakdowns, GoPro vlogs, course reviews. He wasn't trying to go pro, just loved the game. But monetizing? Rough. Affiliate codes weren't cutting it.
              </p>
              <p className="text-lg italic mb-4 bg-gray-700 p-4 border-l-4 border-yellow-600 text-gray-200">
                "What if my audience could upload their swing and get feedback like I give in my videos?"
              </p>
              <p className="text-lg text-gray-300">
                We built him an AI gaming coach. Strategy tips, loadout optimizer, real-time analysis. He sold lifetime access for $27. <span className="bg-yellow-900 text-yellow-200 px-2 font-bold text-xl">He did $12K in three weeks.</span> Now it's moving to subscription tiers with new features, and brands are lining up to white-label it. Jake owns it all.
              </p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-8 text-center rounded mb-12 shadow-2xl">
          <p className="text-3xl font-bold mb-4">
            This is what happens when creators stop just posting—and start <span className="underline decoration-4">owning</span>.
          </p>
          <p className="text-xl mb-6">
            The tools are ready. The market is starving.
            <br />
            <span className="text-2xl font-bold bg-yellow-400 text-gray-900 px-2">And the opportunity is right now.</span>
          </p>
          <button
            onClick={() => window.scrollTo({ top: 400, behavior: 'smooth' })}
            className="bg-white text-blue-600 hover:bg-gray-100 text-2xl font-bold px-8 py-4 rounded shadow-lg transform hover:scale-105 transition-transform"
          >
            CLAIM YOUR SPOT NOW ⬆️
          </button>
        </div>

        {/* NEW SECTION: The Math That Changes Everything */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-yellow-500 to-yellow-600 text-white p-6 mb-8">
            <h3 className="text-3xl font-bold text-center">
              The Math That Changes Everything
            </h3>
          </div>

          <div className="bg-gray-800 p-8 border-2 border-gray-600 shadow-lg mb-8">
            <h4 className="text-2xl font-bold mb-6 text-center text-white">Let's Do Some Quick Math...</h4>
            
            <div className="grid md:grid-cols-2 gap-8">
              <div className="bg-gray-700 p-6 border-2 border-gray-600">
                <h5 className="text-xl font-bold text-gray-300 mb-4">❌ Traditional Creator Income:</h5>
                <ul className="space-y-2 text-lg text-gray-300">
                  <li>• Brand Deal: <span className="font-bold">$2,000</span> (one-time)</li>
                  <li>• Merch Sale: <span className="font-bold">$15 profit</span> × 100 sales = $1,500</li>
                  <li>• Coaching: <span className="font-bold">$200/hour</span> × 20 hours = $4,000</li>
                  <li className="pt-2 border-t-2 border-gray-600">
                    <span className="font-bold text-xl">Total: $7,500/month</span>
                    <br />
                    <span className="text-sm text-gray-400">(Working 60+ hours)</span>
                  </li>
                </ul>
              </div>

              <div className="bg-gray-800 p-6 border-2 border-yellow-600">
                <h5 className="text-xl font-bold text-yellow-300 mb-4">✅ AI Product Income:</h5>
                <ul className="space-y-2 text-lg text-gray-300">
                  <li>• 1,000 users × <span className="font-bold">$47/month</span> = $47,000</li>
                  <li>• Churn rate: <span className="font-bold">5%</span> (industry avg: 15%)</li>
                  <li>• Support tickets: <span className="font-bold">AI handles 94%</span></li>
                  <li className="pt-2 border-t-2 border-yellow-600">
                    <span className="font-bold text-xl">Total: $47,000/month</span>
                    <br />
                    <span className="text-sm text-gray-400">(Working 5 hours/week)</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="mt-8 text-center bg-blue-900 p-6 border-2 border-blue-600">
              <p className="text-2xl font-bold text-blue-300">
                That's <span className="underline decoration-4">6.3X MORE INCOME</span> with 90% LESS WORK
              </p>
            </div>
          </div>
        </div>

        {/* NEW SECTION: What Makes This Different */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-purple-600 to-purple-700 text-white p-6 mb-8">
            <h3 className="text-3xl font-bold text-center">
              Why This Works When Everything Else Fails
            </h3>
          </div>

          <div className="space-y-6">
            <div className="bg-gray-800 p-6 border-l-4 border-blue-600 shadow-lg">
              <h4 className="text-xl font-bold mb-2 text-white">🎯 Your Audience Already Trusts You</h4>
              <p className="text-lg text-gray-300">
                They don't need convincing. They don't need a sales pitch. They just need to know it exists. <span className="bg-blue-900 text-blue-200 px-1 font-bold">One Instagram story = 200+ signups</span>. That's the power of pre-existing trust.
              </p>
            </div>

            <div className="bg-gray-800 p-6 border-l-4 border-blue-600 shadow-lg">
              <h4 className="text-xl font-bold mb-2 text-white">🔄 It Sells Itself 24/7</h4>
              <p className="text-lg text-gray-300">
                Your old content becomes a sales machine. Every YouTube video, every TikTok, every post is now a potential customer acquisition channel. <span className="underline">Forever</span>.
              </p>
            </div>

            <div className="bg-gray-800 p-6 border-l-4 border-yellow-600 shadow-lg">
              <h4 className="text-xl font-bold mb-2 text-white">💰 The Economics Are Unbeatable</h4>
              <p className="text-lg text-gray-300">
                Zero inventory. Zero shipping. Zero customer service (AI handles it). <span className="bg-yellow-900 text-yellow-200 px-1 font-bold">95% profit margins</span>. Try getting that with merch.
              </p>
            </div>

            <div className="bg-gray-800 p-6 border-l-4 border-gray-600 shadow-lg">
              <h4 className="text-xl font-bold mb-2 text-white">🚀 It Scales Without You</h4>
              <p className="text-lg text-gray-300">
                10 users or 10,000 users—same amount of work. The AI doesn't get tired. It doesn't need breaks. It just <span className="font-bold">keeps delivering value</span> while you sleep.
              </p>
            </div>
          </div>
        </div>

        {/* NEW SECTION: The Process */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white p-6 mb-8">
            <h3 className="text-3xl font-bold text-center">
              How We Build Your Million-Dollar AI Product
            </h3>
          </div>

          <div className="grid md:grid-cols-3 gap-6 mb-8">
            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                1
              </div>
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Discovery Image]</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Discovery & Strategy</h4>
              <p className="text-gray-300">
                We analyze your audience, content, and niche to identify the perfect AI product that solves their biggest pain point.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                2
              </div>
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Development Image]</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Build & Brand</h4>
              <p className="text-gray-300">
                Our team builds your custom AI product with your branding, your voice, and features your audience actually wants.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-blue-600 text-white w-16 h-16 rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                3
              </div>
              <div className="bg-gray-200 h-48 mb-4 flex items-center justify-center">
                <span className="text-gray-500">[Launch Image]</span>
              </div>
              <h4 className="text-xl font-bold mb-2 text-white">Launch & Scale</h4>
              <p className="text-gray-300">
                We handle the tech, you mention it to your audience. Watch as subscribers pour in and monthly revenue stacks up.
              </p>
            </div>
          </div>

          <div className="bg-yellow-900 border-2 border-yellow-600 p-6 text-center">
            <p className="text-xl font-bold text-yellow-200">
              Average Time to First $10K Month: <span className="bg-yellow-800 text-yellow-200 px-2">37 Days</span>
            </p>
          </div>
        </div>

        {/* NEW SECTION: FAQ */}
        <div className="mb-12">
          <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white p-6 mb-8">
            <h3 className="text-3xl font-bold text-center">
              Questions? We've Got Answers
            </h3>
          </div>

          <div className="space-y-4">
            <div className="bg-gray-800 p-6 border-2 border-gray-600">
              <h4 className="text-xl font-bold mb-2 text-white">Q: "I'm not technical. Can I really do this?"</h4>
              <p className="text-lg text-gray-300">
                <span className="font-bold">100% yes.</span> We handle ALL the technical stuff. You don't write code, manage servers, or deal with bugs. You just promote to your audience and collect payments. It's that simple.
              </p>
            </div>

            <div className="bg-gray-800 p-6 border-2 border-gray-600">
              <h4 className="text-xl font-bold mb-2 text-white">Q: "What if my audience is too small?"</h4>
              <p className="text-lg text-gray-300">
                Tyler had 53K followers and made $8,700 in 11 days. We've seen creators with <span className="underline">15K followers</span> hit $5K/month. It's not about size—it's about <span className="font-bold">engagement and trust</span>.
              </p>
            </div>

            <div className="bg-gray-800 p-6 border-2 border-gray-600">
              <h4 className="text-xl font-bold mb-2 text-white">Q: "How is this different from other 'build an app' services?"</h4>
              <p className="text-lg text-gray-300">
                We don't just build an app—we build a <span className="bg-blue-900 text-blue-200 px-1 font-bold">complete business system</span>. Custom AI trained on your content, your brand, your voice. Plus ongoing support, updates, and scaling strategies. This isn't a template—it's a business.
              </p>
            </div>

            <div className="bg-gray-800 p-6 border-2 border-gray-600">
              <h4 className="text-xl font-bold mb-2 text-white">Q: "What if it doesn't work for my niche?"</h4>
              <p className="text-lg text-gray-300">
                AI works in EVERY niche. Fitness, fashion, cooking, gaming, business, parenting, pets—you name it. If your audience has problems (they do), AI can solve them. <span className="font-bold">Guaranteed.</span>
              </p>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Urgency */}
        <div className="mb-12">
          <div className="bg-gray-600 text-white p-8 text-center">
            <h3 className="text-3xl font-bold mb-4">
              ⚠️ The Window Is Closing Fast ⚠️
            </h3>
            <p className="text-xl mb-6">
              Every day, more creators discover this opportunity. Every day, the market gets more crowded. 
              The creators who move NOW will dominate. The ones who wait? They'll be fighting for scraps.
            </p>
            <div className="bg-gray-900 text-gray-100 p-6 inline-block">
              <p className="text-2xl font-bold">
                Only 3 Spots Left This Month
              </p>
              <p className="text-lg">
                Next opening: February 2025 (if we have space)
              </p>
            </div>
          </div>
        </div>

        {/* NEW SECTION: Final Form CTA */}
        <div className="bg-gradient-to-r from-blue-600 to-blue-700 p-1 mb-12">
          <div className="bg-gray-800 p-8">
            <h4 className="text-3xl font-bold text-center mb-6 text-white">
              🚀 Ready to Build Your AI Empire? 🚀
            </h4>
            <form onSubmit={handleSubmit} className="space-y-4 max-w-2xl mx-auto">
              <div>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter Your Full Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 text-xl border-2 border-gray-600 bg-gray-700 text-white rounded focus:border-blue-600 focus:outline-none"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
              </div>
              <div>
                <input
                  type="email"
                  name="email"
                  placeholder="Enter Your Best Email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 text-xl border-2 border-gray-600 bg-gray-700 text-white rounded focus:border-blue-600 focus:outline-none"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
              </div>
              <div>
                <input
                  type="tel"
                  name="phone"
                  placeholder="Enter Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-4 text-xl border-2 border-gray-600 bg-gray-700 text-white rounded focus:border-blue-600 focus:outline-none"
                  style={{ fontFamily: 'Arial, sans-serif' }}
                />
              </div>
              <button
                type="submit"
                className="w-full bg-gradient-to-r from-yellow-600 to-yellow-700 hover:from-yellow-700 hover:to-yellow-800 text-white text-3xl font-bold py-6 rounded shadow-lg transform hover:scale-105 transition-transform animate-pulse"
                style={{ fontFamily: 'Arial, sans-serif' }}
              >
                YES! I WANT MY AI PRODUCT NOW →
              </button>
            </form>
            <p className="text-center mt-4 text-gray-400">
              🔒 Your Information Is 100% Secure & Will Never Be Shared
            </p>
          </div>
        </div>

        {/* Guarantee */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-900 to-yellow-800 border-2 border-yellow-600 p-6 inline-block">
            <p className="text-2xl font-bold text-yellow-200">
              ✅ 30-DAY MONEY BACK GUARANTEE ✅
            </p>
            <p className="text-lg text-yellow-100 mt-2">
              If you're not 100% satisfied, get a full refund!
            </p>
          </div>
        </div>

        {/* Footer disclaimer */}
        <div className="mt-12 text-center text-sm text-gray-400 pb-8">
          <p>© 2024 Zephryx Labs. All rights reserved.</p>
          <p className="mt-2">Results vary based on audience engagement and implementation.</p>
        </div>
      </div>
    </div>
  );
} 