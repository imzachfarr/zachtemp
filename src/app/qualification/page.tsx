'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import QualificationQuiz from '../../components/QualificationQuiz';

export default function QualificationPage() {
  const router = useRouter();

  const handleQuizComplete = (data: any) => {
    // Store the applicant data in localStorage or pass via URL params
    localStorage.setItem('applicantData', JSON.stringify(data));
    router.push('/booking');
  };

  const handleClose = () => {
    router.back();
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <QualificationQuiz
        onComplete={handleQuizComplete}
        onClose={handleClose}
      />
    </div>
  );
} 