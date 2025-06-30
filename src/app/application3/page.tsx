'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function Application3Page() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    platform: '',
    followers: '',
    niche: '',
    monthlyRevenue: '',
    goals: '',
    commitment: '',
    investment: ''
  });

  const totalSteps = 4;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleNext = () => {
    if (currentStep < totalSteps) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    router.push('/pre-call-vsl3');
  };

  const isStepValid = () => {
    switch (currentStep) {
      case 1:
        return formData.name && formData.email && formData.phone;
      case 2:
        return formData.platform && formData.followers && formData.niche;
      case 3:
        return formData.monthlyRevenue && formData.goals;
      case 4:
        return formData.commitment && formData.investment;
      default:
        return false;
    }
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      {/* Header */}
      <div className="bg-[#1A1A1A] border-b border-gray-800 py-4">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h1 className="text-2xl font-bold text-[#00D4FF]">ZEPHRYX LABS</h1>
        </div>
      </div>

      {/* Progress bar */}
      <div className="bg-[#1A1A1A] py-4 border-b border-gray-800">
        <div className="max-w-2xl mx-auto px-4">
          <div className="flex items-center justify-between mb-2">
            <span className="text-sm text-gray-400">Step {currentStep} of {totalSteps}</span>
            <span className="text-sm text-gray-400">{Math.round((currentStep / totalSteps) * 100)}% Complete</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-[#00D4FF] h-2 rounded-full transition-all duration-300"
              style={{ width: `${(currentStep / totalSteps) * 100}%` }}
            />
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="max-w-2xl mx-auto px-4 py-8">
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-bold text-white mb-4">
            Apply For Your AI Business
          </h1>
          <p className="text-gray-400">
            This application helps us understand your goals and determine if we're a good fit.
          </p>
        </div>

        <form onSubmit={handleSubmit} className="bg-[#1A1A1A] rounded-lg shadow-lg p-8 border border-gray-800">
          {/* Step 1: Basic Info */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Basic Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  placeholder="John Doe"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  placeholder="john@example.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  placeholder="+1 (555) 123-4567"
                  required
                />
              </div>
            </div>
          )}

          {/* Step 2: Creator Info */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Creator Information</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Primary Platform *
                </label>
                <select
                  name="platform"
                  value={formData.platform}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  required
                >
                  <option value="">Select a platform</option>
                  <option value="instagram">Instagram</option>
                  <option value="youtube">YouTube</option>
                  <option value="tiktok">TikTok</option>
                  <option value="twitter">Twitter/X</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Follower Count *
                </label>
                <select
                  name="followers"
                  value={formData.followers}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  required
                >
                  <option value="">Select range</option>
                  <option value="10k-50k">10K - 50K</option>
                  <option value="50k-100k">50K - 100K</option>
                  <option value="100k-500k">100K - 500K</option>
                  <option value="500k-1m">500K - 1M</option>
                  <option value="1m+">1M+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Content Niche *
                </label>
                <input
                  type="text"
                  name="niche"
                  value={formData.niche}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  placeholder="e.g., Fitness, Fashion, Gaming, etc."
                  required
                />
              </div>
            </div>
          )}

          {/* Step 3: Business Goals */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Business Goals</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Current Monthly Revenue *
                </label>
                <select
                  name="monthlyRevenue"
                  value={formData.monthlyRevenue}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  required
                >
                  <option value="">Select range</option>
                  <option value="0-5k">$0 - $5K</option>
                  <option value="5k-10k">$5K - $10K</option>
                  <option value="10k-25k">$10K - $25K</option>
                  <option value="25k-50k">$25K - $50K</option>
                  <option value="50k+">$50K+</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  What are your goals with an AI business? *
                </label>
                <textarea
                  name="goals"
                  value={formData.goals}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  rows={4}
                  placeholder="Tell us about your goals and what you hope to achieve..."
                  required
                />
              </div>
            </div>
          )}

          {/* Step 4: Commitment */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <h2 className="text-2xl font-bold text-white mb-4">Final Questions</h2>
              
              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  How many hours per week can you commit? *
                </label>
                <select
                  name="commitment"
                  value={formData.commitment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  required
                >
                  <option value="">Select hours</option>
                  <option value="2-5">2-5 hours</option>
                  <option value="5-10">5-10 hours</option>
                  <option value="10-20">10-20 hours</option>
                  <option value="20+">20+ hours</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-300 mb-2">
                  Are you ready to invest in your business? *
                </label>
                <select
                  name="investment"
                  value={formData.investment}
                  onChange={handleInputChange}
                  className="w-full px-4 py-3 bg-[#0A0A0A] border border-gray-700 rounded-lg focus:ring-2 focus:ring-[#00D4FF] focus:border-transparent text-white"
                  required
                >
                  <option value="">Select answer</option>
                  <option value="yes-now">Yes, I'm ready to invest now</option>
                  <option value="yes-soon">Yes, within the next 30 days</option>
                  <option value="maybe">I need more information</option>
                  <option value="no">No, just exploring options</option>
                </select>
              </div>
            </div>
          )}

          {/* Navigation buttons */}
          <div className="flex justify-between mt-8">
            {currentStep > 1 && (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 text-gray-300 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Back
              </button>
            )}
            
            {currentStep < totalSteps ? (
              <button
                type="button"
                onClick={handleNext}
                disabled={!isStepValid()}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ml-auto ${
                  isStepValid()
                    ? 'bg-[#00D4FF] text-black hover:bg-[#00B8E6]'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Next Step →
              </button>
            ) : (
              <button
                type="submit"
                disabled={!isStepValid()}
                className={`px-8 py-3 rounded-lg font-semibold transition-colors ml-auto ${
                  isStepValid()
                    ? 'bg-[#00D4FF] text-black hover:bg-[#00B8E6]'
                    : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                }`}
              >
                Submit Application →
              </button>
            )}
          </div>
        </form>

        {/* Trust badges */}
        <div className="mt-8 text-center text-sm text-gray-500">
          <p>🔒 Your information is 100% secure and will never be shared</p>
        </div>
      </div>
    </div>
  );
} 