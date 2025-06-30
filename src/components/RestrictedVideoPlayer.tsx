'use client';

import { useRef, useState, useEffect } from 'react';

interface RestrictedVideoPlayerProps {
  videoUrl: string;
  thumbnailUrl?: string;
  onVideoEnd?: () => void;
  onTimeUpdate?: (currentTime: number, duration: number) => void;
  allowPause?: boolean;
  allowSeek?: boolean;
  allowRewind?: boolean;
  showProgress?: boolean;
  autoPlay?: boolean;
  className?: string;
}

export default function RestrictedVideoPlayer({
  videoUrl,
  thumbnailUrl,
  onVideoEnd,
  onTimeUpdate,
  allowPause = false,
  allowSeek = false,
  allowRewind = false,
  showProgress = true,
  autoPlay = false,
  className = ""
}: RestrictedVideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const [isLoading, setIsLoading] = useState(false);

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
    };

    const handleEnded = () => {
      setIsPlaying(false);
      onVideoEnd?.();
    };

    const handlePlay = () => {
      setIsPlaying(true);
      setHasStarted(true);
    };

    const handlePause = () => {
      setIsPlaying(false);
    };

    const handleLoadStart = () => {
      setIsLoading(true);
    };

    // Prevent seeking if not allowed
    const handleSeeking = (e: Event) => {
      if (!allowSeek && hasStarted) {
        e.preventDefault();
        // Reset to current playback position
        video.currentTime = currentTime;
      }
    };

    // Prevent right-click context menu
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
  }, [allowSeek, hasStarted, currentTime, onTimeUpdate, onVideoEnd]);

  const handlePlayClick = async () => {
    const video = videoRef.current;
    if (!video) return;

    try {
      if (!isPlaying) {
        await video.play();
      } else if (allowPause) {
        video.pause();
      }
    } catch (error) {
      console.error('Error playing video:', error);
    }
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progressPercentage = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <div className={`relative bg-black rounded-lg overflow-hidden ${className}`}>
      {/* Video Element */}
      <video
        ref={videoRef}
        className="w-full h-full object-cover"
        poster={thumbnailUrl}
        preload="metadata"
        autoPlay={autoPlay}
        playsInline
        // Remove default controls
        controls={false}
        // Disable download
        controlsList="nodownload"
        // Disable picture-in-picture
        disablePictureInPicture
        // Prevent selection
        style={{ userSelect: 'none' }}
      >
        <source src={videoUrl} type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      {/* Custom Overlay Controls */}
      <div className="absolute inset-0 flex flex-col">
        {/* Play Button Overlay (only shown when not playing or before start) */}
        {(!isPlaying || !hasStarted) && (
          <div className="absolute inset-0 flex items-center justify-center bg-black/20">
            <button
              onClick={handlePlayClick}
              disabled={isLoading}
              className="group relative"
            >
              {isLoading ? (
                <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center">
                  <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-white"></div>
                </div>
              ) : (
                <>
                  <div className="absolute inset-0 bg-white/20 rounded-full blur-xl group-hover:bg-white/30 transition-all" />
                  <div className="relative w-16 h-16 sm:w-20 sm:h-20 bg-[#00D4FF] rounded-full flex items-center justify-center shadow-2xl group-hover:scale-110 transition-transform">
                    <svg className="w-6 h-6 sm:w-8 sm:h-8 text-black ml-1" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M6.3 2.841A1.5 1.5 0 004 4.11V15.89a1.5 1.5 0 002.3 1.269l9.344-5.89a1.5 1.5 0 000-2.538L6.3 2.84z" />
                    </svg>
                  </div>
                </>
              )}
            </button>
          </div>
        )}

        {/* Bottom Controls Bar */}
        {isPlaying && hasStarted && showProgress && (
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
            {/* Progress Bar */}
            <div className="w-full bg-gray-700 rounded-full h-2 mb-2">
              <div 
                className="bg-[#00D4FF] h-2 rounded-full transition-all duration-300"
                style={{ width: `${progressPercentage}%` }}
              />
            </div>
            
            {/* Time Display */}
            <div className="flex justify-between items-center text-white text-sm">
              <span>{formatTime(currentTime)}</span>
              <span>{formatTime(duration)}</span>
            </div>

            {/* Pause Button (if allowed) */}
            {allowPause && (
              <div className="flex justify-center mt-2">
                <button
                  onClick={handlePlayClick}
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
      </div>

      {/* Protection Overlay (invisible but blocks interactions) */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{ 
          background: 'transparent',
          zIndex: hasStarted && isPlaying ? -1 : 1 
        }}
      />
    </div>
  );
} 