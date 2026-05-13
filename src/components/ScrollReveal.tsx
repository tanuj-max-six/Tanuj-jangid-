/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  offset?: [string, string];
}

export const ScrollReveal = ({ children }: Props) => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0.1, 0.45, 0.55, 0.9], [0, 1, 1, 0]);
  const scale = useTransform(scrollYProgress, [0.1, 0.45, 0.55, 0.9], [0.8, 1, 1, 0.8]);
  const y = useTransform(scrollYProgress, [0.1, 0.45, 0.55, 0.9], [100, 0, 0, -100]);

  return (
    <div ref={containerRef} className="relative h-[80vh] flex items-center justify-center overflow-hidden">
      <motion.div
        style={{ opacity, scale, y }}
        className="w-full flex justify-center px-6"
      >
        {children}
      </motion.div>
    </div>
  );
};
