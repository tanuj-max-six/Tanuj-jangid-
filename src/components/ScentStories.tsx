/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const STORIES = [
  {
    title: "MIDNIGHT IN KYOTO",
    subtitle: "Shadows and Silk",
    image: "https://images.unsplash.com/photo-1542332213-31f87348057f?auto=format&fit=crop&q=80&w=1200",
    description: "In the depth of Gion, where the cedar walls whisper secrets of the Edo period, we found the essence of stillness.",
    quote: "The air here doesn't move; it remembers."
  },
  {
    title: "THE SOLAR ATELIER",
    subtitle: "Computational Ray of Light",
    image: "https://images.unsplash.com/photo-1550684376-efcbd6e3f031?auto=format&fit=crop&q=80&w=1200",
    description: "Using AI to model the diffraction of light through jasmine petals, we synthesized a fragrance that feels like morning sun on skin.",
    quote: "Coding warmth into a molecular sequence."
  },
  {
    title: "DESERT BREATH",
    subtitle: "Infinite Horizons",
    image: "https://images.unsplash.com/photo-1473580044384-7ba9967e16a0?auto=format&fit=crop&q=80&w=1200",
    description: "A dialogue between shifting sands and metallic notes. A scent that captures the paradox of the void.",
    quote: "Where the earth ends, the memory begins."
  }
];

export const ScentStories = () => {
  return (
    <div className="bg-kaori-black text-white selection:bg-accent selection:text-white">
      {/* Intro Header */}
      <section className="pt-60 pb-32 px-6 md:px-12 text-center overflow-hidden">
        <motion.div
           initial={{ opacity: 0, scale: 0.9 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 1.5 }}
           className="max-w-7xl mx-auto"
        >
          <span className="text-accent text-[10px] uppercase tracking-[1em] mb-12 block font-medium">Digital Archives</span>
          <h1 className="font-serif text-[18vw] md:text-[14vw] leading-[0.7] tracking-tighter mb-24 font-light text-white">
             SENSORY <br />
             <span className="italic text-white/5">CHANNELS</span>
          </h1>
          <p className="max-w-xl mx-auto text-white/30 text-lg md:text-2xl font-light leading-relaxed">
            Explorations in digital scent synthesis and computational memory mapping.
          </p>
        </motion.div>
      </section>

      {/* Stories List */}
      <div className="flex flex-col">
        {STORIES.map((story, i) => (
          <StorySection key={i} story={story} index={i} />
        ))}
      </div>

      {/* Outro */}
      <section className="py-60 text-center px-6">
         <h2 className="font-serif text-5xl md:text-8xl mb-12">Every Drop a <span className="text-accent">Chapter</span></h2>
         <button className="px-16 py-6 border border-accent/30 text-accent uppercase tracking-widest text-sm hover:bg-accent hover:text-kaori-black transition-all">
           Explore Collection
         </button>
      </section>
    </div>
  );
};

const StorySection = ({ story, index }: { story: any; index: number }) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -150]);
  const scale = useTransform(scrollYProgress, [0, 0.5, 1], [1, 1.1, 1]);
  const opacity = useTransform(scrollYProgress, [0, 0.2, 0.8, 1], [0, 1, 1, 0]);

  return (
    <section ref={containerRef} className="relative h-screen min-h-[800px] flex items-center justify-center overflow-hidden border-b border-white/5">
      {/* Background Parallax Image */}
      <motion.div 
        style={{ y, scale, opacity }}
        className="absolute inset-0 z-0"
      >
        <img src={story.image} className="w-full h-full object-cover grayscale-[80%] hover:grayscale-0 transition-all duration-1000" />
        <div className="absolute inset-0 bg-kaori-black/60" />
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 w-full grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
        <motion.div
           initial={{ opacity: 0, x: -50 }}
           whileInView={{ opacity: 1, x: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.2 }}
        >
          <span className="text-[10px] uppercase tracking-[0.5em] text-accent mb-6 block">0{index + 1}</span>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl leading-[1] tracking-tighter mb-8">
            {story.title.split(" ").map((word: string, j: number) => (
              <span key={j} className={j % 2 !== 0 ? "italic text-accent/50 block ml-12" : "block"}>
                {word}
              </span>
            ))}
          </h2>
          <p className="text-white/60 text-lg md:text-2xl font-light leading-relaxed max-w-md">
            {story.description}
          </p>
        </motion.div>

        <motion.div
           initial={{ opacity: 0, y: 100 }}
           whileInView={{ opacity: 1, y: 0 }}
           viewport={{ once: true }}
           transition={{ duration: 1, delay: 0.4 }}
           className="lg:pt-40"
        >
          <div className="p-12 md:p-20 border border-white/10 bg-black/40 backdrop-blur-xl relative">
            <div className="absolute -top-4 -left-4 w-12 h-12 border-t border-l border-accent" />
            <p className="font-serif text-3xl md:text-5xl italic leading-tight mb-8">
              "{story.quote}"
            </p>
            <div className="flex items-center gap-4">
              <div className="h-[1px] w-12 bg-accent/50" />
              <span className="text-[10px] uppercase tracking-widest text-white/30">KAORI AI JOURNAL</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
