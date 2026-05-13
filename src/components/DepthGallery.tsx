/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import { useState, useEffect, useRef } from "react";
import { Fragrance } from "../constants";
import { FragranceCard } from "./FragranceCard";
import { ChevronLeft, ChevronRight, X } from "lucide-react";

interface Props {
  items: Fragrance[];
}

export const DepthGallery = ({ items }: Props) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isExpanded, setIsExpanded] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  // Parallax offset based on scroll
  const parallaxX = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  const next = () => setCurrentIndex((prev) => (prev + 1) % items.length);
  const prev = () => setCurrentIndex((prev) => (prev - 1 + items.length) % items.length);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
      if (e.key === "Escape") setIsExpanded(false);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  return (
    <div ref={containerRef} className="relative w-full py-32 px-6 md:px-12 overflow-hidden h-[900px] flex items-center justify-center bg-kaori-black">
      <div className="relative w-full max-w-7xl h-full flex items-center justify-center">
        
        {/* Navigation Controls */}
        <div className="absolute top-1/2 -translate-y-1/2 left-4 md:left-0 z-[110]">
          <button 
            onClick={prev}
            className="p-5 rounded-full border border-white/5 bg-kaori-black/60 backdrop-blur-xl hover:border-gold/50 transition-all text-white/40 hover:text-white"
          >
            <ChevronLeft size={28} strokeWidth={1} />
          </button>
        </div>
        <div className="absolute top-1/2 -translate-y-1/2 right-4 md:right-0 z-[110]">
          <button 
            onClick={next}
            className="p-5 rounded-full border border-white/5 bg-kaori-black/60 backdrop-blur-xl hover:border-gold/50 transition-all text-white/40 hover:text-white"
          >
            <ChevronRight size={28} strokeWidth={1} />
          </button>
        </div>

        {/* The 3D Stack */}
        <motion.div 
          style={{ x: parallaxX }}
          className="relative w-full max-w-md aspect-[4/5] perspective-[2500px]"
        >
          <AnimatePresence mode="popLayout" initial={false}>
            {items.map((item, i) => {
              const distance = (i - currentIndex + items.length) % items.length;
              let normalizedDistance = distance;
              if (normalizedDistance > items.length / 2) {
                normalizedDistance -= items.length;
              }

              const isActive = i === currentIndex;
              const isVisible = Math.abs(normalizedDistance) <= 2;

              if (!isVisible && !isActive) return null;

              return (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, z: -1000, x: normalizedDistance * 200 }}
                  animate={{
                    opacity: 1 - Math.abs(normalizedDistance) * 0.4,
                    x: normalizedDistance * 140, 
                    z: -Math.abs(normalizedDistance) * 400, 
                    rotateY: normalizedDistance * -20, 
                    rotateZ: normalizedDistance * -2,
                    scale: 1 - Math.abs(normalizedDistance) * 0.15,
                  }}
                  exit={{ opacity: 0, scale: 0.5, z: -1500, x: normalizedDistance * 300 }}
                  transition={{
                    type: "spring",
                    stiffness: 120,
                    damping: 20,
                    mass: 0.8,
                  }}
                  className="absolute inset-0 cursor-pointer"
                  style={{ transformStyle: "preserve-3d" }}
                  onClick={() => {
                    if (isActive) setIsExpanded(true);
                    else setCurrentIndex(i);
                  }}
                >
                  <FragranceCard fragrance={item} index={i} isSelected={isActive} />
                </motion.div>
              );
            })}
          </AnimatePresence>
        </motion.div>

        {/* Expanded View Modal Overlay */}
        <AnimatePresence>
          {isExpanded && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-[200] bg-kaori-black flex items-center justify-center p-6 md:p-20 overflow-hidden cursor-default"
            >
              <button 
                onClick={() => setIsExpanded(false)}
                className="absolute top-12 right-12 text-white/40 hover:text-white transition-colors p-4 z-[210]"
              >
                <X size={32} strokeWidth={1} />
              </button>

              <div className="w-full max-w-7xl grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <motion.div
                  layoutId={`media-${items[currentIndex].id}`}
                  className="relative aspect-[4/5] rounded-2xl overflow-hidden bg-kaori-gray shadow-2xl"
                >
                   {items[currentIndex].video ? (
                    <video
                      src={items[currentIndex].video}
                      autoPlay
                      muted
                      loop
                      playsInline
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <img 
                      src={items[currentIndex].image} 
                      alt={items[currentIndex].name}
                      className="w-full h-full object-cover"
                    />
                  )}
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.3 }}
                  className="space-y-12"
                >
                  <div className="space-y-4">
                    <span className="text-gold text-xs uppercase tracking-[0.5em] font-light">
                      {items[currentIndex].type}
                    </span>
                    <h2 className="font-serif text-6xl md:text-8xl leading-none font-light tracking-tighter">
                      {items[currentIndex].name}
                    </h2>
                  </div>

                  <p className="text-xl md:text-2xl text-white/50 font-light leading-relaxed max-w-lg">
                    {items[currentIndex].description}
                  </p>

                  <div className="space-y-6">
                    <div className="h-px w-full bg-white/10" />
                    <div className="flex flex-wrap gap-8">
                       {items[currentIndex].notes.map((note, i) => (
                         <div key={i} className="space-y-2">
                            <span className="block text-[10px] text-white/20 uppercase tracking-widest font-bold">Note {i + 1}</span>
                            <span className="text-lg text-white/80">{note}</span>
                         </div>
                       ))}
                    </div>
                    <div className="h-px w-full bg-white/10" />
                  </div>

                  <div className="flex items-center justify-between pt-12">
                     <span className="text-4xl font-light text-white">${items[currentIndex].price}</span>
                     <button className="px-12 py-5 bg-gold text-kaori-black font-bold uppercase tracking-[0.2em] text-sm hover:bg-white transition-colors">
                        Add to Collector's Case
                     </button>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>

      {/* Progress Indicators */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-4 z-[100]">
         {items.map((_, i) => (
           <button
             key={i}
             onClick={() => setCurrentIndex(i)}
             className={`h-[1px] transition-all duration-700 ${
               i === currentIndex ? "w-16 bg-gold" : "w-8 bg-white/20"
             }`}
           />
         ))}
      </div>
    </div>
  );
};
