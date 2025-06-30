'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';

interface FormData {
  fullName: string;
  email: string;
  phone: string;
  businessExperience: string;
  aiIdea: string;
  budget: string;
  timeline: string;
  commitment: string;
  whyYou: string;
}

export default function ApplicationPage() {
  const router = useRouter();
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<FormData>({
    fullName: '',
    email: '',
    phone: '',
    businessExperience: '',
    aiIdea: '',
    budget: '',
    timeline: '',
    commitment: '',
    whyYou: ''
  });

  const questions = [
    {
      id: 'fullName',
      question: "First, what's your name?",
      type: 'text',
      placeholder: 'John Smith'
    },
    {
      id: 'email',
      question: "Great! What's your email address?",
      type: 'email',
      placeholder: 'john@example.com'
    },
    {
      id: 'phone',
      question: "And your phone number?",
      type: 'tel',
      placeholder: '+1 (555) 123-4567'
    },
    {
      id: 'businessExperience',
      question: "Tell us about your business experience",
      type: 'select',
      options: [
        'No business experience',
        '1-2 years experience',
        '3-5 years experience',
        '5+ years experience',
        'Currently running a business'
      ]
    },
    {
      id: 'aiIdea',
      question: "Do you have a specific AI business idea in mind?",
      type: 'textarea',
      placeholder: "Share your idea or type 'No' if you need our help finding one"
    },
    {
      id: 'budget',
      question: "Are you ready to invest $40k in your AI business?",
      type: 'select',
      options: [
        'Yes, I have the funds ready',
        'Yes, I can get the funds within 30 days',
        'I need financing options',
        'I\'m not ready to invest yet'
      ]
    },
    {
      id: 'timeline',
      question: "When do you want to launch your AI business?",
      type: 'select',
      options: [
        'ASAP - Within 30 days',
        'Within 60 days',
        'Within 90 days',
        'Not sure yet'
      ]
    },
    {
      id: 'commitment',
      question: "How committed are you to building an AI business? (1-10)",
      type: 'select',
      options: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10']
    },
    {
      id: 'whyYou',
      question: "Why should we choose to work with you?",
      type: 'textarea',
      placeholder: 'Tell us what makes you the perfect candidate for our AI Asset Accelerator program'
    }
  ];

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      // Submit form
      handleSubmit();
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleSubmit = () => {
    // Here you would normally send the data to your backend
    console.log('Form submitted:', formData);
    router.push('/pre-call-vsl');
  };

  const updateFormData = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-900 via-black to-blue-900 flex items-center justify-center px-4">
      {/* Progress bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-gray-800">
        <motion.div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ duration: 0.3 }}
        />
      </div>

      {/* Main content */}
      <div className="w-full max-w-2xl relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 to-blue-600 rounded-2xl blur-xl opacity-20" />
        <div
          className="h-full bg-gradient-to-r from-blue-500 to-blue-600"
          style={{
            width: `${progress}%`,
            transition: 'width 0.3s ease-out'
          }}
        />
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -50 }}
            transition={{ duration: 0.3 }}
            className="bg-black/50 backdrop-blur-lg rounded-2xl p-8 md:p-12 shadow-2xl"
          >
            {/* Question number */}
            <div className="flex items-center gap-2 mb-8">
              <span className="text-blue-400 text-sm font-semibold">
                Question {currentStep + 1} of {questions.length}
              </span>
              {currentStep > 0 && (
                <button
                  onClick={handlePrevious}
                  className="ml-auto text-gray-400 hover:text-white transition-colors"
                >
                  ← Back
                </button>
              )}
            </div>

            {/* Question */}
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-8">
              {currentQuestion.question}
            </h2>

            {/* Input field */}
            {currentQuestion.type === 'text' || currentQuestion.type === 'email' || currentQuestion.type === 'tel' ? (
              <input
                type={currentQuestion.type}
                value={formData[currentQuestion.id as keyof FormData]}
                onChange={(e) => updateFormData(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-lg"
                onKeyPress={(e) => e.key === 'Enter' && handleNext()}
                autoFocus
              />
            ) : currentQuestion.type === 'textarea' ? (
              <textarea
                value={formData[currentQuestion.id as keyof FormData]}
                onChange={(e) => updateFormData(currentQuestion.id, e.target.value)}
                placeholder={currentQuestion.placeholder}
                rows={4}
                className="w-full px-6 py-4 bg-gray-900/50 border border-gray-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors text-lg resize-none"
                autoFocus
              />
            ) : currentQuestion.type === 'select' ? (
              <div className="space-y-3">
                {currentQuestion.options?.map((option) => (
                  <button
                    key={option}
                    onClick={() => {
                      updateFormData(currentQuestion.id, option);
                      setTimeout(handleNext, 300);
                    }}
                    className={`w-full px-6 py-4 rounded-lg text-left transition-all ${
                      formData[currentQuestion.id as keyof FormData] === option
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-900/50 border border-gray-700 text-gray-300 hover:border-blue-500 hover:text-white'
                    }`}
                  >
                    {option}
                  </button>
                ))}
              </div>
            ) : null}

            {/* Continue button (for text inputs) */}
            {(currentQuestion.type === 'text' || currentQuestion.type === 'email' || 
              currentQuestion.type === 'tel' || currentQuestion.type === 'textarea') && (
              <motion.button
                onClick={handleNext}
                disabled={!formData[currentQuestion.id as keyof FormData]}
                className="mt-8 px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-bold rounded-full hover:from-blue-700 hover:to-blue-800 disabled:opacity-50 disabled:cursor-not-allowed transition-all"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                {currentStep === questions.length - 1 ? 'Submit Application' : 'Continue'}
              </motion.button>
            )}

            {/* Skip option for optional questions */}
            {currentQuestion.id === 'aiIdea' && (
              <button
                onClick={() => {
                  updateFormData(currentQuestion.id, 'I need help finding an idea');
                  handleNext();
                }}
                className="block mt-4 text-gray-400 hover:text-white transition-colors text-sm"
              >
                I need help finding an idea →
              </button>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Trust indicators */}
        <div className="mt-8 flex justify-center gap-8 text-gray-500 text-sm">
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            SSL Secured
          </span>
          <span className="flex items-center gap-1">
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 2a1 1 0 00-1 1v1a1 1 0 002 0V3a1 1 0 00-1-1zM4 4h3a3 3 0 006 0h3a2 2 0 012 2v9a2 2 0 01-2 2H4a2 2 0 01-2-2V6a2 2 0 012-2zm2.5 7a1.5 1.5 0 100-3 1.5 1.5 0 000 3zm2.45 4a2.5 2.5 0 10-4.9 0h4.9zM12 9a1 1 0 100 2h3a1 1 0 100-2h-3zm-1 4a1 1 0 011-1h2a1 1 0 110 2h-2a1 1 0 01-1-1z" clipRule="evenodd" />
            </svg>
            100% Confidential
          </span>
        </div>
      </div>
    </div>
  );
} 