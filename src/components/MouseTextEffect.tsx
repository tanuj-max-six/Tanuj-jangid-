/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useSpring, useTransform } from "motion/react";
import { useRef, useEffect, useState } from "react";

interface Props {
  text: string;
  className?: string;
}

export const MouseTextEffect = ({ text, className = "" }: Props) => {
  const words = text.split(" ");
  const mouseX = useMotionValue(-1000);
  const mouseY = useMotionValue(-1000);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, [mouseX, mouseY]);

  return (
    <div 
      className={`flex flex-wrap justify-center gap-x-[0.3em] gap-y-2 ${className}`}
    >
      {words.map((word, i) => (
        <div key={i} className="flex">
          {word.split("").map((char, j) => (
            <Character key={`${i}-${j}`} char={char} mouseX={mouseX} mouseY={mouseY} />
          ))}
        </div>
      ))}
    </div>
  );
};

const Character = ({ char, mouseX, mouseY }: { char: string, mouseX: any, mouseY: any, key?: string | number }) => {
  const charRef = useRef<HTMLSpanElement>(null);
  const scale = useMotionValue(1);
  const springConfig = { damping: 25, stiffness: 400 };
  const springScale = useSpring(scale, springConfig);
  
  const color = useTransform(springScale, [1, 1.5], ["rgba(255,255,255,0.4)", "rgba(212,175,55,1)"]);
  const y = useTransform(springScale, [1, 1.5], [0, -10]);

  useEffect(() => {
    const unsubscribeX = mouseX.on("change", (cv: number) => {
      if (!charRef.current) return;
      const rect = charRef.current.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;
      const mvY = mouseY.get();
      
      const distance = Math.sqrt(
        Math.pow(cv - centerX, 2) + Math.pow(mvY - centerY, 2)
      );

      const radius = 120;
      if (distance < radius) {
        const factor = 1 - distance / radius;
        scale.set(1 + factor * 0.8);
      } else {
        scale.set(1);
      }
    });

    return () => unsubscribeX();
  }, [mouseX, mouseY, scale]);

  return (
    <motion.span
      ref={charRef}
      style={{ 
        scale: springScale, 
        color,
        y,
        display: "inline-block"
      }}
      className="font-serif select-none cursor-default"
    >
      {char}
    </motion.span>
  );
};
