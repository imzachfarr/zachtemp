'use client';

import { useState } from 'react';
import { ChevronLeft, ChevronRight, Check } from 'lucide-react';

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
        "$5K - $10K (Don't Fill Out Form)",
        "$10K - $25K",
        "$25K - $50K",
        "$50K+"
      ],
      required: true,
      validation: (value: string) => {
        if (value === "$5K - $10K (Don't Fill Out Form)") {
          return "We work with creators who have at least $10K to invest in their growth. Please come back when you're ready to make this investment.";
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
      onComplete(formData);
    } else {
      setCurrentStep(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-[#0A0A0A]">
      <div className="bg-[#1D1D27] rounded-2xl w-full max-w-2xl">
        {/* Header */}
        <div className="p-6 border-b border-[#6039FF]/20">
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-black text-white" style={{ fontFamily: 'Poppins, sans-serif' }}>
              Creator Qualification
            </h2>
            <button 
              onClick={onClose}
              className="text-gray-400 hover:text-white transition-colors"
            >
              ✕
            </button>
          </div>
          
          {/* Progress Bar */}
          <div className="w-full bg-gray-700 rounded-full h-2">
            <div 
              className="bg-gradient-to-r from-[#6039FF] to-[#2726FF] h-2 rounded-full transition-all duration-300"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-sm text-gray-400 mt-2">
            Question {currentStep + 1} of {questions.length}
          </p>
        </div>

        {/* Question Content */}
        <div className="p-6">
          <div className="mb-8">
            <h3 className="text-xl font-bold text-white mb-6" style={{ fontFamily: 'Poppins, sans-serif' }}>
              {currentQuestion.question}
            </h3>

            {currentQuestion.type === 'text' || currentQuestion.type === 'email' || currentQuestion.type === 'tel' ? (
              <input
                type={currentQuestion.type}
                value={formData[currentQuestion.id as keyof QuizData]}
                onChange={(e) => updateFormData(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                className="w-full bg-[#2A2A3A] border border-[#6039FF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#6039FF] transition-colors"
                autoFocus
              />
            ) : currentQuestion.type === 'textarea' ? (
              <div>
                                 <textarea
                   value={formData[currentQuestion.id as keyof QuizData]}
                   onChange={(e) => updateFormData(currentQuestion.id, e.target.value)}
                   placeholder={currentQuestion.placeholder}
                   className="w-full bg-[#2A2A3A] border border-[#6039FF]/30 rounded-lg px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:border-[#6039FF] transition-colors h-32 resize-none"
                   autoFocus
                 />
              </div>
            ) : (
              <div className="space-y-3">
                {currentQuestion.options?.map((option, index) => (
                  <button
                    key={index}
                    onClick={() => {
                      updateFormData(currentQuestion.id, option);
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
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      formData[currentQuestion.id as keyof QuizData] === option
                        ? 'bg-[#6039FF]/20 border-[#6039FF] text-white'
                        : 'bg-[#2A2A3A] border-[#6039FF]/30 text-gray-300 hover:border-[#6039FF]/50'
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{option}</span>
                      {formData[currentQuestion.id as keyof QuizData] === option && (
                        <Check className="w-5 h-5 text-[#6039FF]" />
                      )}
                    </div>
                  </button>
                ))}
              </div>
            )}
          </div>
        </div>

        {/* Footer */}
        <div className="p-6 border-t border-[#6039FF]/20 flex items-center justify-between">
          <button
            onClick={handlePrev}
            disabled={currentStep === 0}
            className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-colors ${
              currentStep === 0
                ? 'text-gray-500 cursor-not-allowed'
                : 'text-gray-300 hover:text-white'
            }`}
          >
            <ChevronLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={handleNext}
            disabled={!canProceed()}
            className={`flex items-center gap-2 px-6 py-3 rounded-lg font-bold transition-all ${
              canProceed()
                ? 'bg-gradient-to-r from-[#6039FF] to-[#2726FF] text-white hover:scale-105'
                : 'bg-gray-600 text-gray-400 cursor-not-allowed'
            }`}
          >
            {isLastStep ? 'Submit Application' : 'Continue'}
            {!isLastStep && <ChevronRight className="w-4 h-4" />}
          </button>
        </div>
      </div>
    </div>
  );
} 