'use client';

import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import BookingPage from '../../components/BookingPage';

export default function BookingPageRoute() {
  const router = useRouter();
  const [applicantData, setApplicantData] = useState<any>(null);

  useEffect(() => {
    // Retrieve applicant data from localStorage
    const storedData = localStorage.getItem('applicantData');
    if (storedData) {
      setApplicantData(JSON.parse(storedData));
    } else {
      // If no data, redirect to qualification
      router.push('/qualification');
    }
  }, [router]);

  const handleBack = () => {
    router.push('/qualification');
  };

  if (!applicantData) {
    return (
      <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center">
        <div className="text-white text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <BookingPage
        applicantData={applicantData}
        onBack={handleBack}
      />
    </div>
  );
} 