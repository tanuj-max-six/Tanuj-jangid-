/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useRef, useState } from "react";
import { motion, useScroll, useTransform, useMotionValueEvent } from "motion/react";

export const VideoScrollPage = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const [duration, setDuration] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });

  const currentTime = useTransform(scrollYProgress, [0, 1], [0, duration || 1]);

  useMotionValueEvent(currentTime, "change", (latest) => {
    if (videoRef.current && duration > 0) {
      videoRef.current.currentTime = latest;
    }
  });

  const handleLoadedMetadata = () => {
    if (videoRef.current) {
      setDuration(videoRef.current.duration);
    }
  };

  return (
    <div ref={containerRef} className="relative h-[400vh] bg-kaori-black">
      <div className="sticky top-0 h-screen w-full flex items-center justify-center overflow-hidden">
        <video 
          ref={videoRef}
          src="/scene-1.mp4" 
          muted 
          playsInline
          preload="auto"
          onLoadedMetadata={handleLoadedMetadata}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-kaori-black/40" />
        
        <motion.div 
          className="absolute inset-0 flex flex-col items-center justify-center pointer-events-none"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.5 }}
            className="text-white text-5xl md:text-8xl font-serif italic tracking-tighter uppercase text-center max-w-4xl px-4"
          >
            Essence in <span className="text-white/40 not-italic">Motion</span>
          </motion.h1>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1, duration: 1 }}
            className="mt-12 absolute bottom-12"
          >
             <p className="text-white/60 uppercase tracking-[0.3em] text-[10px] font-medium text-center">Scroll to explore</p>
             <div className="w-px h-12 bg-white/20 mx-auto mt-4" />
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};
