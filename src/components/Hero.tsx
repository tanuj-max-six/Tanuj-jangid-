/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";
import { TextReveal } from "./TextReveal";
import { MagneticButton } from "./MagneticButton";

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  const textY = useTransform(scrollYProgress, [0, 1], [0, 300]);
  const opacity = useTransform(scrollYProgress, [0, 0.4], [1, 0]);
  const imageScale = useTransform(scrollYProgress, [0, 1], [1.1, 1.4]);
  const gradientOpacity = useTransform(scrollYProgress, [0, 0.5], [0.4, 0.8]);

  return (
    <section ref={containerRef} className="relative h-screen w-full overflow-hidden bg-kaori-black flex items-center justify-center">
      <motion.div 
        style={{ scale: imageScale }}
        className="absolute inset-0 z-0"
      >
        <motion.div 
          style={{ opacity: gradientOpacity }}
          className="absolute inset-0 bg-kaori-black z-10" 
        />
        <div className="aura-glow bg-accent/20 top-[-10%] right-[-5%] animate-float" />
        <div className="aura-glow bg-blue-900/10 bottom-[-10%] left-[-5%] animate-float-delayed" />
        <div className="absolute inset-0 bg-gradient-to-t from-kaori-black via-transparent to-kaori-black z-10" />
        <img 
          src="https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=2000" 
          alt="Hero Perfume" 
          className="w-full h-full object-cover grayscale brightness-[0.6]"
        />
      </motion.div>

      <motion.div 
        style={{ y: textY, opacity }}
        className="relative z-20 text-center px-6"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.5, delay: 0.5 }}
          className="mb-8"
        >
          <span className="inline-block text-[10px] md:text-sm uppercase tracking-[0.6em] text-accent/60 font-medium backdrop-blur-xl px-6 py-2 border border-white/5 bg-white/5 rounded-full">
            The Digital Frontier of Scent
          </span>
        </motion.div>

        <h2 className="font-serif text-7xl md:text-[140px] lg:text-[160px] font-light mb-12 tracking-tighter leading-[0.8] text-white">
          <TextReveal text="ENVISION" className="justify-center" delay={0.6} />
          <TextReveal text="THE INVISIBLE" className="justify-center italic text-white/5" delay={0.8} />
        </h2>
        
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 1.2, ease: "easeOut" }}
          className="max-w-xl mx-auto text-sm md:text-xl text-white/40 font-light leading-relaxed mb-16 tracking-wide"
        >
          Pioneering the intersection of molecular scent design and artistic intuition. 
          We define the future of sensory identity through AI precision.
        </motion.p>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="flex flex-col items-center gap-8"
        >
          <MagneticButton>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="group relative px-20 py-6 overflow-hidden border border-white/10 rounded-full hover:border-accent/50 transition-all duration-700 bg-white/5 backdrop-blur-xl"
              id="hero-cta-prime"
            >
              <span className="relative z-10 text-[11px] uppercase tracking-[0.4em] font-medium group-hover:text-white transition-colors">Initiate Project</span>
              <div className="absolute inset-0 bg-accent/10 -translate-x-full group-hover:translate-x-0 transition-transform duration-700" />
            </motion.button>
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 2, delay: 2.5 }}
        className="absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-4"
      >
        <div className="w-[1px] h-20 bg-gradient-to-b from-accent/50 to-transparent animate-pulse" />
        <span className="text-[10px] uppercase tracking-[0.3em] text-white/20">Discovery</span>
      </motion.div>
    </section>
  );
};

