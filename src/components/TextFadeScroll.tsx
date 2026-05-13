/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";

interface Props {
  text: string;
}

export const TextFadeScroll = ({ text }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const words = text.split(" ");

  return (
    <section ref={containerRef} className="py-48 px-6 md:px-12 bg-kaori-black">
      <div className="max-w-5xl mx-auto flex flex-wrap justify-center text-center">
        {words.map((word, i) => {
          const start = (i / words.length) * 0.5;
          const end = start + 0.5;
          
          return (
            <Word 
              key={i} 
              progress={scrollYProgress} 
              range={[start, end]}
            >
              {word}
            </Word>
          );
        })}
      </div>
    </section>
  );
};

interface WordProps {
  children: ReactNode;
  progress: any;
  range: [number, number];
}

const Word = ({ children, progress, range }: WordProps) => {
  const opacity = useTransform(progress, range, [0.08, 1]);
  const y = useTransform(progress, range, [10, 0]);
  const blur = useTransform(progress, range, ["4px", "0px"]);
  
  return (
    <motion.span 
      style={{ opacity, y, filter: blur }}
      className="inline-block mr-[0.25em] text-4xl md:text-6xl lg:text-7xl font-light tracking-tighter text-white mb-6"
    >
      {children}
    </motion.span>
  );
};
