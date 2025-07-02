'use client';

import { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';
import { useFormTracking } from '../lib/hooks/useFormTracking';

interface QuizData {
  name: string;
  email: string;
  phone: string;
  followers: string;
  niche: string;
  monetization: string;
  monthlyIncome: string;
  investmentBudget: string;
  whyWorkWithUs: string;
}

interface QualificationQuizProps {
  onComplete: (data: QuizData) => void;
  onClose: () => void;
}

export default function QualificationQuiz({ onComplete, onClose }: QualificationQuizProps) {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<QuizData>({
    name: '',
    email: '',
    phone: '',
    followers: '',
    niche: '',
    monetization: '',
    monthlyIncome: '',
    investmentBudget: '',
    whyWorkWithUs: ''
  });

  const questions = [
    {
      id: 'name',
      type: 'text',
      question: "What's your full name?",
      placeholder: "Enter your full name",
      required: true
    },
    {
      id: 'email',
      type: 'email',
      question: "What's your email address?",
      placeholder: "Enter your email",
      required: true
    },
    {
      id: 'phone',
      type: 'tel',
      question: "What's your phone number?",
      placeholder: "Enter your phone number",
      required: true
    },
    {
      id: 'followers',
      type: 'select',
      question: "How many followers do you have across all platforms?",
      options: [
        "Under 10K (Don't Fill Out Form)",
        "10K - 99K",
        "100K - 999K",
        "1M Plus"
      ],
      required: true,
      validation: (value: string) => {
        if (value === "Under 10K (Don't Fill Out Form)") {
          return "We work with creators who have at least 10K followers. Please come back when you've grown your audience.";
        }
        return null;
      }
    },
    {
      id: 'niche',
      type: 'select',
      question: "What's your primary niche/industry?",
      options: [
        "Business & Entrepreneurship",
        "Health & Fitness",
        "Lifestyle & Fashion",
        "Technology & AI",
        "Finance & Investing",
        "Education & Courses",
        "Entertainment & Gaming",
        "Other"
      ],
      required: true
    },
    {
      id: 'monetization',
      type: 'select',
      question: "What are you currently doing to monetize your audience?",
      options: [
        "Selling courses/digital products",
        "Brand partnerships/sponsorships",
        "Affiliate marketing",
        "Coaching/consulting",
        "Physical products",
        "Subscription/membership",
        "Ad revenue only",
        "Not currently monetizing"
      ],
      required: true
    },
    {
      id: 'monthlyIncome',
      type: 'select',
      question: "What's your current monthly income as a creator?",
      options: [
        "Under $5K",
        "$5K - $25K",
        "$25K+"
      ],
      required: true
    },
    {
      id: 'investmentBudget',
      type: 'select',
      question: "How much do you have set aside to invest in growing your business?",
      options: [
        "$0-$5K (Don't Fill Out Form)",
        "$5K-$10K",
        "$10K-$30K",
        "$30K-$100K",
        "$100K+"
      ],
      required: true,
      validation: (value: string) => {
        if (value === "$0-$5K (Don't Fill Out Form)") {
          return "We work with creators who have at least $5K to invest in their growth. Please come back when you're ready to make this investment.";
        }
        return null;
      }
    },
    {
      id: 'whyWorkWithUs',
      type: 'textarea',
      question: "We only work with a few creators each month. Why should we work with you?",
      placeholder: "Tell us about your commitment, goals, and what makes you different...",
      required: true
    }
  ];

  // Initialize form tracking with Zapier webhook URL
  const { trackFormProgress } = useFormTracking({
    totalSteps: questions.length,
    source: 'qualification',
    zapierWebhookUrl: process.env.NEXT_PUBLIC_ZAPIER_WEBHOOK_URL
  });

  const currentQuestion = questions[currentStep];
  const isLastStep = currentStep === questions.length - 1;
  const canProceed = () => {
    const value = formData[currentQuestion.id as keyof QuizData];
    if (!value && currentQuestion.required) return false;
    return true;
  };

  const handleNext = () => {
    if (!canProceed()) return;
    
    // Check validation for any field that has it
    if (currentQuestion.validation) {
      const error = currentQuestion.validation(formData[currentQuestion.id as keyof QuizData]);
      if (error) {
        alert(error);
        return;
      }
    }

    if (isLastStep) {
      // Track completed form and send to Zapier
      trackFormProgress(questions.length, formData, true);
      onComplete(formData);
    } else {
      // Track step completion
      trackFormProgress(currentStep + 1, formData, false);
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateFormData = async (field: string, value: string) => {
    const newFormData = { ...formData, [field]: value };
    setFormData(newFormData);
    
    console.log('updateFormData called:', { field, value, currentStep, newFormData });
    
    // Track form progress on every field update (send to Zapier immediately)
    try {
      await trackFormProgress(currentStep + 1, newFormData, false);
      console.log('trackFormProgress completed successfully');
    } catch (error) {
      console.error('trackFormProgress failed:', error);
    }
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

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
        {/* Top bar with Zephryx Labs */}
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

        <div className="flex items-center justify-center min-h-screen p-4">
          <div className="bg-gray-900/30 backdrop-blur-sm border border-gray-800/50 rounded-3xl w-full max-w-2xl shadow-2xl">
        {/* Header */}
        <div className="p-6 border-b border-[#00D4FF]/20">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h2 className="text-2xl font-black text-white mb-1" style={{ fontFamily: 'Poppins, sans-serif' }}>
                Creator Qualification
              </h2>
              <p className="text-sm font-bold text-[#00D4FF]" style={{ fontFamily: 'Poppins, sans-serif' }}>
                LIMITED ACCESS APPLICATION
              </p>
            </div>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors text-xl"
            >
              ✕
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700/50 rounded-full h-3 shadow-inner">
            <div 
              className="bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] h-3 rounded-full transition-all duration-500 shadow-lg"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-[#F9B233] mt-2 font-semibold">
            Question {currentStep + 1} of {questions.length}
          </p>
        </div>

                {/* Question Content */}
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-2xl font-bold text-white mb-6 leading-tight" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {currentQuestion.question}
            </h3>

            {currentQuestion.type === 'text' || currentQuestion.type === 'email' || currentQuestion.type === 'tel' ? (
              <div className="relative">
                <input
                  type={currentQuestion.type}
                  value={formData[currentQuestion.id as keyof QuizData]}
                  onChange={(e) => updateFormData(currentQuestion.id, e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full bg-[#2A2A3A] border-2 border-[#00D4FF]/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00D4FF] focus:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300"
                  autoFocus
                />
              </div>
            ) : currentQuestion.type === 'textarea' ? (
              <div className="relative">
                <textarea
                  value={formData[currentQuestion.id as keyof QuizData]}
                  onChange={(e) => updateFormData(currentQuestion.id, e.target.value)}
                  placeholder={currentQuestion.placeholder}
                  className="w-full bg-[#2A2A3A] border-2 border-[#00D4FF]/30 rounded-xl px-6 py-4 text-white placeholder-gray-400 focus:outline-none focus:border-[#00D4FF] focus:shadow-[0_0_20px_rgba(0,212,255,0.3)] transition-all duration-300 h-32 resize-none"
                  autoFocus
                />
              </div>
            ) : (
              <div className="space-y-4">
                {currentQuestion.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={async () => {
                      await updateFormData(currentQuestion.id, option);
                      // Auto-advance for select questions after a short delay
                      setTimeout(() => {
                        if (currentQuestion.validation) {
                          const error = currentQuestion.validation(option);
                          if (error) {
                            alert(error);
                            return;
                          }
                        }
                        if (!isLastStep) {
                          setCurrentStep(prev => prev + 1);
                        }
                      }, 300);
                    }}
                    className={`group w-full text-left p-5 rounded-xl border-2 transition-all duration-300 ${
                      formData[currentQuestion.id as keyof QuizData] === option
                        ? 'bg-gradient-to-r from-[#00D4FF]/20 to-[#00B8E6]/20 border-[#00D4FF] text-white shadow-[0_0_20px_rgba(0,212,255,0.3)] transform scale-105'
                        : 'bg-[#2A2A3A] border-[#00D4FF]/30 text-gray-300 hover:border-[#00D4FF]/60 hover:bg-[#2A2A3A]/80 hover:scale-102'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span className="font-medium">{option}</span>
                      {formData[currentQuestion.id as keyof QuizData] === option && (
                        <div className="w-6 h-6 bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] rounded-full flex items-center justify-center">
                          <Check className="w-4 h-4 text-white" />
                        </div>
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#00D4FF]/20 flex items-center justify-between bg-[#1D1D27]/50">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
              currentStep === 0
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-gray-300 hover:text-white hover:bg-[#2A2A3A] border border-[#00D4FF]/30 hover:border-[#00D4FF]/50'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`relative group flex items-center gap-2 px-8 py-4 rounded-xl font-black text-lg transition-all duration-300 ${
              canProceed()
                ? 'text-white hover:scale-105 shadow-[0_0_30px_rgba(0,212,255,0.5)]'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
            style={{ fontFamily: 'Poppins, sans-serif' }}
          >
            {canProceed() && (
              <>
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] rounded-xl blur-lg group-hover:blur-xl transition-all duration-300 opacity-70" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#00D4FF] to-[#00B8E6] rounded-xl" />
              </>
            )}
            <span className="relative z-10">
              {isLastStep ? 'Submit Application' : 'Continue'}
            </span>
            {!isLastStep && <ChevronRight className="w-4 h-4 relative z-10" />}
          </button>
        </div>
          </div>
        </div>
      </div>
    </div>
  );
} 