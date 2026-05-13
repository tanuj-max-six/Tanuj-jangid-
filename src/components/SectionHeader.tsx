/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";

interface Props {
  title: string;
  subtitle?: string;
  align?: "left" | "center";
}

export const SectionHeader = ({ title, subtitle, align = "left" }: Props) => {
  return (
    <div className={`mb-16 md:mb-24 ${align === "center" ? "text-center mx-auto" : ""}`}>
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut" }}
      >
        <span className="block text-[10px] md:text-xs uppercase tracking-[0.5em] text-gold/60 mb-4 font-light">
          {subtitle || "KAORI House"}
        </span>
      </motion.div>
      <div className="overflow-hidden">
        <motion.h2 
          initial={{ opacity: 0, y: "100%" }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          className="font-serif text-5xl md:text-7xl font-light tracking-tight leading-tight"
        >
          {title}
        </motion.h2>
      </div>
      <motion.div 
        initial={{ width: 0, opacity: 0 }}
        whileInView={{ width: 120, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 1.5, delay: 0.6, ease: "easeInOut" }}
        className={`h-[1px] bg-gradient-to-r from-gold/50 to-transparent mt-8 ${align === "center" ? "mx-auto" : ""}`} 
      />
    </div>
  );
};
