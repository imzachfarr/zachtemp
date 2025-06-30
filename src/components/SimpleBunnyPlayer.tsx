'use client';

import { useRef, useState, useEffect } from 'react';

interface SimpleBunnyPlayerProps {
  libraryId: string;
  videoId: string;
  onVideoEnd?: () => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  className?: string;
}

export default function SimpleBunnyPlayer({
  libraryId,
  videoId,
  onVideoEnd,
  onTimeUpdate,
  className = ""
}: SimpleBunnyPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [showUnmuteOverlay, setShowUnmuteOverlay] = useState(true);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [fakeProgress, setFakeProgress] = useState(0);

  const videoUrl = `https://${libraryId}.b-cdn.net/${videoId}/play_720p.mp4`;
  const thumbnailUrl = `https://${libraryId}.b-cdn.net/${videoId}/thumbnail.jpg`;

  // Fake progress animation while showing unmute overlay
  useEffect(() => {
    if (showUnmuteOverlay) {
      const interval = setInterval(() => {
        setFakeProgress(prev => {
          const newProgress = prev + 0.8;
          return newProgress >= 70 ? 0 : newProgress;
        });
      }, 400);
      return () => clearInterval(interval);
    }
  }, [showUnmuteOverlay]);

  // Real progress tracking
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      setCurrentTime(video.currentTime);
      onTimeUpdate?.(video.currentTime, video.duration);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
    };

    const handleEnded = () => {
      onVideoEnd?.();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
    };
  }, [onTimeUpdate, onVideoEnd]);

  const handleUnmute = () => {
    const video = videoRef.current;
    if (!video) return;

    // Hide overlay immediately
    setShowUnmuteOverlay(false);
    
    // Reset and start video with sound
    video.currentTime = 0;
    video.muted = false;
    video.play();
  };

  // Calculate progress
  const realProgress = duration > 0 ? (currentTime / duration) * 100 : 0;
  const displayProgress = showUnmuteOverlay ? fakeProgress : realProgress;

  // Debug logging
  console.log('Progress debug:', { 
    showUnmuteOverlay, 
    fakeProgress: fakeProgress.toFixed(1), 
    realProgress: realProgress.toFixed(1), 
    displayProgress: displayProgress.toFixed(1),
    currentTime: currentTime.toFixed(1),
    duration: duration.toFixed(1)
  });

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={thumbnailUrl}
        muted
        playsInline
        controls={false}
        preload="metadata"
      >
        <source src={videoUrl} type="video/mp4" />
      </video>

      {/* Unmute Overlay */}
      {showUnmuteOverlay && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <button
            onClick={handleUnmute}
            className="group relative"
          >
            <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-[#00D4FF] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
              <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
              </svg>
            </div>
          </button>
          
          <div className="mt-6 text-center px-4">
            <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
              🔊 UNMUTE TRAINING
            </h3>
            <p className="text-gray-300 text-sm sm:text-base">
              Click above to start with audio from the beginning
            </p>
          </div>
        </div>
      )}

      {/* Progress Bar - Always visible */}
      <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
        <div className="w-full bg-gray-700 rounded-full h-2">
          <div 
            className="bg-[#00D4FF] h-2 rounded-full transition-all duration-300"
            style={{ width: `${displayProgress}%` }}
          />
        </div>
      </div>
    </div>
  );
} 