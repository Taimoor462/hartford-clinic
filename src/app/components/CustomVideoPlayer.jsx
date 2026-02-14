"use client";

import Image from "next/image";
// import PlayButtonIcon from "@/components/icons/PlayButtonIcon";
import { useRef, useState } from "react";

const CustomVideoPlayer = ({ src, buttonClass, videoClass, playButtonClass, wrapperClass }) => {
  const videoRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    const video = videoRef.current;
    if (!video) return;

    video.paused ? video.play() : video.pause();
  };

  const toggleFullscreen = () => {
    const video = videoRef.current;
    if (!video) return;

    document.fullscreenElement
      ? document.exitFullscreen()
      : video.requestFullscreen();
  };

  return (
    // <div className={`relative w-full aspect-video bg-black overflow-hidden ${wrapperClass}`}>
    <div className={`relative w-full bg-black overflow-hidden ${wrapperClass}`}>
      <video
        ref={videoRef}
        src={src}
        className={`w-full h-full object-cover cursor-pointer ${videoClass}`}
        playsInline
        preload="metadata"
        onClick={togglePlay}
        onPause={() => setIsPlaying(false)}
        onPlay={() => setIsPlaying(true)}
      />

      {!isPlaying && (
        <button
          onClick={togglePlay}
          aria-label="Play video"
          className={`absolute inset-0 flex items-center justify-center cursor-pointer ${playButtonClass}`}
        >
            <Image
            src="/images/svgs/play-button.svg"
            alt="full screen"
            width={83}
            height={83}
            className="w-8 md:w-10 h-auto cursor-pointer"
            />
          {/* <PlayButtonIcon className={`w-[46%] max-w-82 h-auto max-h-82.5 text-orange hover:text-white transition-colors duration-300 ${buttonClass}`} /> */}
        </button>
      )}

      <button
        onClick={toggleFullscreen}
        aria-label="Fullscreen"
        className="absolute bottom-4 right-4"
      >
        <Image
          src="/images/svgs/full-screen.svg"
          alt="full screen"
          width={60}
          height={40}
          className="w-8 md:w-10 h-auto cursor-pointer"
        />
      </button>
    </div>
  );
};

export default CustomVideoPlayer;
