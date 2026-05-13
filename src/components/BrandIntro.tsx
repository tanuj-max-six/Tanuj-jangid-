/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { TextReveal } from "./TextReveal";
import { MouseTextEffect } from "./MouseTextEffect";

export const BrandIntro = () => {
  return (
    <section className="relative py-32 md:py-48 px-6 md:px-12 bg-kaori-black overflow-hidden">
      <div className="max-w-7xl mx-auto flex flex-col items-center text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
          className="mb-12"
        >
          <span className="inline-block text-[10px] uppercase tracking-[1em] text-gold/40 border-b border-gold/20 pb-4">
            Established in Silence
          </span>
        </motion.div>

        <div className="mb-16">
          <MouseTextEffect 
            text="DEFINING THE INVISIBLE ARCHITECTURE OF MEMORY" 
            className="text-4xl md:text-7xl font-light leading-[1.1] tracking-tighter max-w-5xl"
          />
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 1, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <p className="text-sm md:text-xl text-white/40 font-light leading-relaxed mb-12 tracking-wide font-sans">
            KAORI is a Kyoto-born fragrance house dedicated to the art of cinematic olfaction. 
            We compose scents that act as internal landscapes, bridging the gap between the tangible world and the echoes of the soul.
          </p>
          
          <div className="flex items-center justify-center gap-12 mt-16 overflow-hidden">
            <motion.div 
              initial={{ height: 0 }}
              whileInView={{ height: 60 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 1.5 }}
              className="w-px bg-gradient-to-b from-gold/50 to-transparent" 
            />
          </div>
        </motion.div>
      </div>

      {/* Decorative Aura */}
      <div className="aura-glow bg-gold bottom-0 left-1/2 -translate-x-1/2 opacity-10" />
    </section>
  );
};
