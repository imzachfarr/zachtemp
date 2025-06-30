'use client';

import { useRef, useState, useEffect } from 'react';

interface BunnyStreamPlayerProps {
  libraryId: string;
  videoId: string;
  onVideoEnd?: () => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  allowPause?: boolean;
  showProgress?: boolean;
  className?: string;
}

export default function BunnyStreamPlayer({
  libraryId,
  videoId,
  onVideoEnd,
  onTimeUpdate,
  allowPause = false,
  showProgress = true,
  className = ""
}: BunnyStreamPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(true); // Start as true to show overlay immediately
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);
  const [isMuted, setIsMuted] = useState(true);
  const [hasUnmuted, setHasUnmuted] = useState(false);
  const [fakeProgress, setFakeProgress] = useState(0);

  // Bunny.net URLs
  const videoUrl = `https://${libraryId}.b-cdn.net/${videoId}/play_720p.mp4`;
  const thumbnailUrl = `https://${libraryId}.b-cdn.net/${videoId}/thumbnail.jpg`;

  // Psychological progress calculation - accelerates after 50%
  const calculatePsychologicalProgress = (actualProgress: number) => {
    if (actualProgress <= 0.5) {
      // First half: normal speed (0 to 50% = 0 to 50%)
      return actualProgress;
    } else {
      // Second half: exponential curve to make it feel faster
      const secondHalfProgress = actualProgress - 0.5;
      const exponentialProgress = 0.5 + (0.5 * Math.pow(secondHalfProgress * 2, 1.8));
      return Math.min(exponentialProgress, 0.95); // Cap at 95% until actually done
    }
  };

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleTimeUpdate = () => {
      const current = video.currentTime;
      const total = video.duration;
      setCurrentTime(current);
      onTimeUpdate?.(current, total);
    };

    const handleLoadedMetadata = () => {
      setDuration(video.duration);
      setIsLoading(false);
      // Auto-start muted video silently in background
      video.muted = true;
      setIsMuted(true);
      video.play().then(() => {
        setIsPlaying(true);
      }).catch(() => {
        // If autoplay fails, that's fine - overlay will still show
        console.log('Autoplay blocked, waiting for user interaction');
      });
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onVideoEnd?.();
    };

    const handlePlay = () => {
      setIsPlaying(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    // Prevent seeking
    const handleSeeking = (e: Event) => {
      if (hasStarted) {
        e.preventDefault();
        video.currentTime = currentTime;
      }
    };

    const handleContextMenu = (e: Event) => {
      e.preventDefault();
    };

    video.addEventListener('timeupdate', handleTimeUpdate);
    video.addEventListener('loadedmetadata', handleLoadedMetadata);
    video.addEventListener('ended', handleEnded);
    video.addEventListener('play', handlePlay);
    video.addEventListener('pause', handlePause);
    video.addEventListener('loadstart', handleLoadStart);
    video.addEventListener('seeking', handleSeeking);
    video.addEventListener('contextmenu', handleContextMenu);

    return () => {
      video.removeEventListener('timeupdate', handleTimeUpdate);
      video.removeEventListener('loadedmetadata', handleLoadedMetadata);
      video.removeEventListener('ended', handleEnded);
      video.removeEventListener('play', handlePlay);
      video.removeEventListener('pause', handlePause);
      video.removeEventListener('loadstart', handleLoadStart);
      video.removeEventListener('seeking', handleSeeking);
      video.removeEventListener('contextmenu', handleContextMenu);
    };
  }, [hasStarted, currentTime, onTimeUpdate, onVideoEnd]);

  // Moderate fake progress bar while muted
  useEffect(() => {
    if (isMuted && !hasUnmuted) {
      const interval = setInterval(() => {
        setFakeProgress(prev => {
          // Moderate progress that slowly accelerates
          const newProgress = prev + (0.5 + prev * 0.02); // Starts at 0.5%, slowly accelerates
          if (newProgress >= 75) {
            return 0; // Reset to create excitement loop
          }
          return newProgress;
        });
      }, 300); // Slower updates (3 times per second)

      return () => clearInterval(interval);
    } else {
      setFakeProgress(0); // Reset when unmuted
    }
  }, [isMuted, hasUnmuted]);

  const handleUnmuteClick = () => {
    const video = videoRef.current;
    if (!video) return;

    if (isMuted && !hasUnmuted) {
      // Simple: just restart and unmute
      setIsMuted(false);
      setHasUnmuted(true);
      video.currentTime = 0;
      video.muted = false;
      video.play();
    } else if (allowPause) {
      // Pause/play toggle
      if (isPlaying) {
        video.pause();
      } else {
        video.play();
      }
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const actualProgress = duration > 0 ? currentTime / duration : 0;
  
  // Use fake fast progress when muted, real progress when unmuted
  const displayProgress = (isMuted && !hasUnmuted) 
    ? fakeProgress 
    : calculatePsychologicalProgress(actualProgress) * 100;

  // Debug logging
  console.log('BunnyStreamPlayer state:', { 
    isPlaying, 
    hasStarted, 
    isMuted, 
    hasUnmuted, 
    showProgress,
    duration,
    currentTime 
  });

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={thumbnailUrl}
        preload="metadata"
        autoPlay
        muted
        playsInline
        controls={false}
        controlsList="nodownload"
        disablePictureInPicture
        style={{ userSelect: 'none' }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

            {/* Unmute Overlay - Always show if muted and started */}
      {isMuted && hasStarted && !hasUnmuted && (
        <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-black bg-opacity-60 backdrop-blur-sm">
          <button
            onClick={handleUnmuteClick}
            disabled={isLoading}
            className="group relative"
          >
            {isLoading ? (
              <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/20 rounded-full flex items-center justify-center">
                <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-white"></div>
              </div>
            ) : (
              <>
                <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all" />
                <div className="relative w-20 h-20 sm:w-24 sm:h-24 bg-[#00D4FF] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                  <svg className="w-8 h-8 sm:w-10 sm:h-10 text-black" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z"/>
                  </svg>
                </div>
              </>
            )}
          </button>
          
          {/* Unmute Training Text */}
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

      {/* Progress Bar - Always show if started */}
      {hasStarted && showProgress && (
        <div className="absolute bottom-0 left-0 right-0 z-10 bg-gradient-to-t from-black/80 to-transparent p-4">
          <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
            <div 
              className="bg-[#00D4FF] h-2 rounded-full transition-all duration-300"
              style={{ width: `${displayProgress}%` }}
            />
          </div>

          {allowPause && hasUnmuted && (
            <div className="flex justify-center mt-2">
              <button
                onClick={handleUnmuteClick}
                className="bg-white/20 hover:bg-white/30 rounded-full p-2 transition-colors"
              >
                <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M5.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75A.75.75 0 007.25 3h-1.5zM12.75 3a.75.75 0 00-.75.75v12.5c0 .414.336.75.75.75h1.5a.75.75 0 00.75-.75V3.75a.75.75 0 00-.75-.75h-1.5z" />
                </svg>
              </button>
            </div>
          )}
        </div>
      )}

      {/* Debug info - temporary */}
      <div className="absolute top-0 left-0 z-30 bg-red-500 text-white text-xs p-2 m-2 rounded">
        Debug: Playing={isPlaying ? 'Y' : 'N'}, Started={hasStarted ? 'Y' : 'N'}, Muted={isMuted ? 'Y' : 'N'}, Unmuted={hasUnmuted ? 'Y' : 'N'}
      </div>
    </div>
  );
} 