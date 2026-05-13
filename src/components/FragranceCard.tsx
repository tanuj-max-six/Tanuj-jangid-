/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import React, { useState, useRef, useEffect } from "react";
import { Fragrance } from "../constants";

interface Props {
  fragrance: Fragrance;
  index: number;
  isSelected?: boolean;
  onClick?: () => void;
}

export const FragranceCard = ({ fragrance, index, isSelected, onClick }: Props) => {
  const [isHovered, setIsHovered] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);
  const imageTranslateX = useTransform(mouseXSpring, [-0.5, 0.5], ["-10%", "10%"]);
  const imageTranslateY = useTransform(mouseYSpring, [-0.5, 0.5], ["-10%", "10%"]);

  useEffect(() => {
    if (isHovered && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (!isHovered && videoRef.current) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  }, [isHovered]);

  const variants = {
    hidden: { opacity: 0, y: 80, scale: 0.9, rotateX: 10 },
    show: { 
      opacity: 1, 
      y: 0, 
      scale: 1,
      rotateX: 0,
      transition: { 
        duration: 1.4, 
        ease: [0.16, 1, 0.3, 1] 
      } 
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;
    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  return (
    <motion.div
      variants={variants}
      className={`group cursor-none ${isSelected ? "z-50" : "z-10"}`}
      id={`fragrance-${fragrance.id}`}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => {
        setIsHovered(false);
        x.set(0);
        y.set(0);
      }}
      onClick={onClick}
    >
      <div 
        className={`relative aspect-[4/5] overflow-hidden bg-kaori-gray rounded-xl transition-all duration-1000 border border-white/5 ${isHovered ? "shadow-[0_40px_100px_rgba(0,0,0,0.8)] border-gold/40 scale-[1.02]" : ""}`}
        onMouseMove={handleMouseMove}
        style={{ perspective: 1500, transformStyle: "preserve-3d" }}
      >
        <motion.div 
          style={{ rotateX, rotateY }}
          className="w-full h-full relative"
        >
          {fragrance.video ? (
            <>
              <motion.img 
                src={fragrance.image} 
                alt={fragrance.name}
                style={{ x: imageTranslateX, y: imageTranslateY, scale: 1.2 }}
                className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isHovered ? "opacity-0" : "opacity-100"} grayscale-[40%] brightness-[0.7]`}
              />
              <video
                ref={videoRef}
                src={fragrance.video}
                muted
                loop
                playsInline
                className={`w-full h-full object-cover transition-opacity duration-1000 ${isHovered ? "opacity-100 scale-105" : "opacity-0 scale-100"}`}
              />
            </>
          ) : (
            <motion.img 
              src={fragrance.image} 
              alt={fragrance.name}
              style={{ x: imageTranslateX, y: imageTranslateY, scale: 1.2 }}
              className="w-full h-full object-cover grayscale-[40%] group-hover:grayscale-0 transition-all duration-[1.5s] brightness-[0.7] group-hover:brightness-110"
            />
          )}
        </motion.div>
        
        <div className="absolute inset-0 bg-gradient-to-t from-kaori-black/90 via-kaori-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 p-8 flex flex-col justify-end pointer-events-none">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="w-full py-4 border border-gold/30 text-gold text-[10px] uppercase font-bold tracking-[0.3em] text-center rounded-sm backdrop-blur-sm"
          >
            The Ceremony
          </motion.div>
        </div>
      </div>

      <div className="text-center md:text-left space-y-3 mt-8">
        <motion.span 
          className="text-[10px] uppercase tracking-[0.4em] text-gold/60 font-light block"
        >
          {fragrance.type}
        </motion.span>
        <h3 className="font-serif text-3xl md:text-4xl mb-1 group-hover:text-gold/80 transition-all duration-500 tracking-tight leading-none">
          {fragrance.name}
        </h3>
        <p className="text-[11px] text-white/30 uppercase tracking-[0.1em] font-light italic">
          {fragrance.notes.join(" • ")}
        </p>
        <div className="pt-2">
          <span className="text-xl font-light tracking-widest text-white/70">${fragrance.price}</span>
        </div>
      </div>
    </motion.div>
  );
};

