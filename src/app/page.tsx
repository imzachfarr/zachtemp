'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    router.push('/aiassetaccelerator');
  }, [router]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-black">
      <p className="text-white">Redirecting...</p>
    </div>
  );
}
