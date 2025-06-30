'use client';

import { useState, useEffect } from 'react';

export default function PreCallVSL2Page() {
  const [showCalendar, setShowCalendar] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [spotsLeft, setSpotsLeft] = useState(3);

  useEffect(() => {
    // Show calendar after 60 seconds
    const timer = setTimeout(() => {
      setShowCalendar(true);
    }, 60000);

    // Decrease spots every 30 seconds
    const spotsTimer = setInterval(() => {
      setSpotsLeft(prev => Math.max(1, prev - 1));
    }, 30000);

    return () => {
      clearTimeout(timer);
      clearInterval(spotsTimer);
    };
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Urgency bar */}
      <div className="bg-blue-600 text-white text-center py-3 font-bold text-xl">
        ONLY {spotsLeft} SPOTS LEFT FOR THIS WEEK
      </div>

      {/* Header */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white">ZEPHRYX LABS - STRATEGY SESSION</h1>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Headline */}
        <div className="text-center mb-8">
          <div className="bg-blue-100 inline-block px-6 py-3 mb-4 border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
              CONGRATULATIONS! YOU QUALIFIED!
            </h2>
          </div>
          <h3 className="text-4xl font-bold text-gray-900 mb-4" style={{ fontFamily: 'Arial, sans-serif' }}>
            WATCH THIS SHORT VIDEO BEFORE
            <br />
            YOUR STRATEGY CALL TO PREPARE
          </h3>
          <p className="text-2xl text-gray-700 font-bold">
            This Will Triple Your Chances Of Getting Accepted
          </p>
        </div>

        {/* Video container */}
        <div className="bg-black p-2 mb-8">
          <div className="relative aspect-video bg-gray-900">
            {!isPlaying ? (
              <div className="absolute inset-0 flex items-center justify-center">
                <button
                  onClick={() => setIsPlaying(true)}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-12 py-6 rounded"
                >
                  ▶ WATCH NOW (IMPORTANT!)
                </button>
              </div>
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <p className="text-white text-xl">Video Playing...</p>
              </div>
            )}
          </div>
        </div>

        {/* What to expect */}
        <div className="bg-white border-2 border-gray-300 p-8 mb-8">
          <h4 className="text-3xl font-bold text-center mb-6 text-gray-900">
            WHAT TO EXPECT ON YOUR CALL:
          </h4>
          <div className="space-y-4 text-lg">
            <div className="flex items-start">
              <span className="text-2xl mr-3">1️⃣</span>
              <div>
                <p className="font-bold">We'll Review Your Application</p>
                <p className="text-gray-700">And determine if you're a good fit for our program</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">2️⃣</span>
              <div>
                <p className="font-bold">We'll Create Your Custom AI Business Plan</p>
                <p className="text-gray-700">Tailored specifically to your skills and goals</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">3️⃣</span>
              <div>
                <p className="font-bold">We'll Show You The Exact Steps</p>
                <p className="text-gray-700">To launch your AI business in the next 90 days</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl mr-3">4️⃣</span>
              <div>
                <p className="font-bold">IF You Qualify...</p>
                <p className="text-gray-700">We'll invite you to join our exclusive program</p>
              </div>
            </div>
          </div>
        </div>

        {/* Calendar section */}
        {showCalendar && (
          <div className="bg-blue-100 border-2 border-blue-300 p-8 mb-8">
            <h4 className="text-3xl font-bold text-center mb-6 text-gray-900">
              BOOK YOUR CALL NOW
            </h4>
            <div className="bg-white p-8 border-2 border-gray-300">
              <p className="text-xl text-center mb-6">
                Click below to see available times:
              </p>
              <button
                onClick={() => window.open('https://calendly.com/example', '_blank')}
                className="w-full bg-blue-600 hover:bg-blue-700 text-white text-3xl font-bold py-6 rounded shadow-lg"
              >
                SCHEDULE MY STRATEGY CALL →
              </button>
            </div>
            <p className="text-center mt-4 text-lg font-bold text-gray-700">
              Available slots are going fast
            </p>
          </div>
        )}

        {/* Important notes */}
        <div className="bg-gray-100 border-2 border-gray-300 p-8 mb-8">
          <h4 className="text-2xl font-bold text-center mb-4 text-gray-900">
            IMPORTANT NOTES
          </h4>
          <ul className="space-y-2 text-lg">
            <li>• This call is <span className="font-bold">FREE</span> (valued at $500)</li>
            <li>• Please be on time - we have limited slots</li>
            <li>• Have a pen and paper ready to take notes</li>
            <li>• Be in a quiet place with good internet</li>
            <li>• Come prepared with questions</li>
            <li>• <span className="font-bold text-gray-900">NO-SHOWS will be BLACKLISTED</span></li>
          </ul>
        </div>

        {/* Success stories */}
        <div className="mb-8">
          <h4 className="text-3xl font-bold text-center mb-6 text-gray-900">
            RECENT SUCCESS STORIES:
          </h4>
          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-gray-100 p-6 border-2 border-gray-300">
              <p className="text-xl font-bold mb-2">"$83,000 in 45 days!"</p>
              <p className="text-lg">
                "The strategy call alone was worth thousands. 
                They showed me exactly what to do!"
              </p>
              <p className="text-gray-600 mt-2">- Rachel K., Arizona</p>
            </div>
            <div className="bg-gray-100 p-6 border-2 border-gray-300">
              <p className="text-xl font-bold mb-2">"6-Figure Business!"</p>
              <p className="text-lg">
                "I went from zero to 6-figures in under 4 months. 
                This program is INSANE!"
              </p>
              <p className="text-gray-600 mt-2">- Tom B., Michigan</p>
            </div>
          </div>
        </div>

        {/* Final CTA */}
        <div className="bg-gray-800 text-white p-8 text-center rounded">
          <p className="text-3xl font-bold mb-4">
            DON'T MISS THIS OPPORTUNITY
          </p>
          <p className="text-xl mb-6">
            This could be the call that changes your life forever.
            <br />
            Our most successful students started exactly where you are now.
          </p>
          {!showCalendar && (
            <button
              onClick={() => setShowCalendar(true)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-8 py-4 rounded shadow-lg"
            >
              I'M READY! SHOW ME THE CALENDAR →
            </button>
          )}
        </div>

        {/* FAQ */}
        <div className="mt-12">
          <h4 className="text-2xl font-bold text-center mb-6">
            FREQUENTLY ASKED QUESTIONS:
          </h4>
          <div className="space-y-4">
            <div className="bg-gray-100 p-4 border-2 border-gray-300">
              <p className="font-bold text-lg">Q: Is this really free?</p>
              <p>A: YES! The strategy call is 100% free. We'll create your custom plan at no charge.</p>
            </div>
            <div className="bg-gray-100 p-4 border-2 border-gray-300">
              <p className="font-bold text-lg">Q: How long is the call?</p>
              <p>A: Plan for 45-60 minutes. We want to make sure we cover everything thoroughly.</p>
            </div>
            <div className="bg-gray-100 p-4 border-2 border-gray-300">
              <p className="font-bold text-lg">Q: Will you try to sell me something?</p>
              <p>A: Only if you qualify and ASK about our program. Otherwise, you'll just get free value!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 