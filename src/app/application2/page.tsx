'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Application2Page() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    // Step 1
    businessExperience: '',
    monthlyRevenue: '',
    investmentReady: '',
    
    // Step 2
    commitment: '',
    timeline: '',
    whyYou: '',
    
    // Step 3
    biggestChallenge: '',
    goals: '',
    
    // Contact
    fullName: '',
    email: '',
    phone: '',
    bestTimeToCall: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const nextStep = () => {
    setCurrentStep(prev => Math.min(prev + 1, 4));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const prevStep = () => {
    setCurrentStep(prev => Math.max(prev - 1, 1));
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    router.push('/pre-call-vsl2');
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-gray-900 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold text-white">ZEPHRYX LABS APPLICATION</h1>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-gray-200 h-8">
        <div 
          className="bg-blue-600 h-full transition-all duration-300 flex items-center justify-center text-white font-bold"
          style={{ width: `${(currentStep / 4) * 100}%` }}
        >
          STEP {currentStep} OF 4
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Headline */}
        <div className="text-center mb-8">
          <div className="bg-blue-100 inline-block px-6 py-3 mb-4 border-2 border-blue-200">
            <h2 className="text-3xl font-bold text-gray-900" style={{ fontFamily: 'Arial, sans-serif' }}>
              IMPORTANT: PLEASE READ
            </h2>
          </div>
          <p className="text-xl text-gray-800">
            We can only work with <span className="font-bold text-gray-900">SERIOUS ENTREPRENEURS</span> who are ready to take action.
            <br />
            Please answer all questions honestly so we can determine if you qualify.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Step 1: Qualification */}
          {currentStep === 1 && (
            <div className="bg-white border-2 border-gray-300 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                STEP 1: BASIC QUALIFICATION
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-bold mb-2">
                    What's your current business experience level? *
                  </label>
                  <select
                    name="businessExperience"
                    value={formData.businessExperience}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded"
                  >
                    <option value="">-- Select One --</option>
                    <option value="none">No Business Experience</option>
                    <option value="some">Some Business Experience (1-3 years)</option>
                    <option value="experienced">Experienced Business Owner (3+ years)</option>
                    <option value="serial">Serial Entrepreneur</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-bold mb-2">
                    What's your current monthly revenue? *
                  </label>
                  <select
                    name="monthlyRevenue"
                    value={formData.monthlyRevenue}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded"
                  >
                    <option value="">-- Select One --</option>
                    <option value="0">$0 - Just Starting</option>
                    <option value="1-5k">$1,000 - $5,000</option>
                    <option value="5-10k">$5,000 - $10,000</option>
                    <option value="10k+">$10,000+</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-bold mb-2">
                    Are you ready to invest in your business growth? *
                  </label>
                  <select
                    name="investmentReady"
                    value={formData.investmentReady}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded"
                  >
                    <option value="">-- Select One --</option>
                    <option value="yes-now">YES - I'm ready to invest NOW</option>
                    <option value="yes-soon">YES - Within 30 days</option>
                    <option value="maybe">MAYBE - Need more information</option>
                    <option value="no">NO - Just looking</option>
                  </select>
                </div>
              </div>

              <div className="mt-8 text-center">
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-8 py-4 rounded"
                >
                  CONTINUE TO STEP 2 →
                </button>
              </div>
            </div>
          )}

          {/* Step 2: Commitment */}
          {currentStep === 2 && (
            <div className="bg-white border-2 border-gray-300 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                STEP 2: COMMITMENT LEVEL
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-bold mb-2">
                    How committed are you to building a successful AI business? *
                  </label>
                  <select
                    name="commitment"
                    value={formData.commitment}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded"
                  >
                    <option value="">-- Select One --</option>
                    <option value="100">100% - This is my #1 priority</option>
                    <option value="75">75% - Very committed</option>
                    <option value="50">50% - Somewhat committed</option>
                    <option value="25">25% - Just exploring options</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-bold mb-2">
                    When do you want to launch your AI business? *
                  </label>
                  <select
                    name="timeline"
                    value={formData.timeline}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded"
                  >
                    <option value="">-- Select One --</option>
                    <option value="asap">ASAP - Within 30 days</option>
                    <option value="90days">Within 90 days</option>
                    <option value="6months">Within 6 months</option>
                    <option value="someday">Someday</option>
                  </select>
                </div>

                <div>
                  <label className="block text-lg font-bold mb-2">
                    Why should we choose YOU for this opportunity? *
                  </label>
                  <textarea
                    name="whyYou"
                    value={formData.whyYou}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded"
                    placeholder="Tell us why you're the perfect fit..."
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-600 hover:bg-gray-700 text-white text-xl font-bold px-6 py-3 rounded"
                >
                  ← BACK
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-8 py-4 rounded"
                >
                  CONTINUE TO STEP 3 →
                </button>
              </div>
            </div>
          )}

          {/* Step 3: Goals */}
          {currentStep === 3 && (
            <div className="bg-white border-2 border-gray-300 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                STEP 3: YOUR GOALS
              </h3>
              
              <div className="space-y-6">
                <div>
                  <label className="block text-lg font-bold mb-2">
                    What's your BIGGEST challenge right now? *
                  </label>
                  <textarea
                    name="biggestChallenge"
                    value={formData.biggestChallenge}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded"
                    placeholder="Be specific..."
                  />
                </div>

                <div>
                  <label className="block text-lg font-bold mb-2">
                    What are your income goals for the next 12 months? *
                  </label>
                  <textarea
                    name="goals"
                    value={formData.goals}
                    onChange={handleChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 text-lg border-2 border-gray-300 rounded"
                    placeholder="Be specific about your financial goals..."
                  />
                </div>
              </div>

              <div className="mt-8 flex justify-between">
                <button
                  type="button"
                  onClick={prevStep}
                  className="bg-gray-600 hover:bg-gray-700 text-white text-xl font-bold px-6 py-3 rounded"
                >
                  ← BACK
                </button>
                <button
                  type="button"
                  onClick={nextStep}
                  className="bg-blue-600 hover:bg-blue-700 text-white text-2xl font-bold px-8 py-4 rounded"
                >
                  FINAL STEP →
                </button>
              </div>
            </div>
          )}

          {/* Step 4: Contact Info */}
          {currentStep === 4 && (
            <div className="bg-white border-2 border-gray-300 p-8">
              <h3 className="text-2xl font-bold mb-6 text-center text-gray-900">
                FINAL STEP: SCHEDULE YOUR CALL
              </h3>
              
              <div className="bg-blue-100 border-2 border-blue-300 p-4 mb-6 text-center">
                <p className="text-lg font-bold text-gray-900">
                  CONGRATULATIONS! You've pre-qualified!
                </p>
                <p className="text-gray-700">
                  Complete this final step to schedule your strategy call.
                </p>
              </div>

              <div className="space-y-4">
                <div>
                  <input
                    type="text"
                    name="fullName"
                    placeholder="Full Name *"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded"
                  />
                </div>

                <div>
                  <input
                    type="email"
                    name="email"
                    placeholder="Best Email *"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded"
                  />
                </div>

                <div>
                  <input
                    type="tel"
                    name="phone"
                    placeholder="Phone Number *"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded"
                  />
                </div>

                <div>
                  <select
                    name="bestTimeToCall"
                    value={formData.bestTimeToCall}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-4 text-xl border-2 border-gray-300 rounded"
                  >
                    <option value="">Best Time To Call *</option>
                    <option value="morning">Morning (9AM - 12PM)</option>
                    <option value="afternoon">Afternoon (12PM - 5PM)</option>
                    <option value="evening">Evening (5PM - 8PM)</option>
                    <option value="anytime">Anytime</option>
                  </select>
                </div>
              </div>

              <div className="mt-8">
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-700 text-white text-3xl font-bold py-6 rounded shadow-lg"
                >
                  SUBMIT APPLICATION & BOOK CALL →
                </button>
              </div>

              <p className="text-center mt-4 text-gray-600">
                🔒 Your Information Is 100% Secure
              </p>
            </div>
          )}
        </form>

        {/* Urgency reminder */}
        <div className="mt-12 bg-gray-800 text-white p-6 text-center rounded">
          <p className="text-2xl font-bold">
            Only 3 Spots Available
          </p>
          <p className="text-lg mt-2">
            We're closing applications soon. Don't miss out!
          </p>
        </div>
      </div>
    </div>
  );
} 