/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

const GALLERY_IMAGES = [
  "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1557170334-a9632e77c6e4?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1595425959632-34f2822322ce?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1592945403244-b3fb97d8894a?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1615484477778-ca3b77940c25?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1590736704728-f4730bb30770?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1616604423714-38605330368c?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1583209814683-c023dd293cc6?auto=format&fit=crop&q=80&w=800",
];

export const EndlessGallery = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const x1 = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const x2 = useTransform(scrollYProgress, [0, 1], [-400, 0]);
  const x3 = useTransform(scrollYProgress, [0, 1], [-100, -500]);

  return (
    <section ref={containerRef} className="py-40 bg-kaori-black overflow-hidden select-none">
      <div className="flex flex-col gap-12">
        {/* Row 1 */}
        <motion.div style={{ x: x1 }} className="flex gap-12 whitespace-nowrap">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
            <GalleryItem key={i} src={src} />
          ))}
        </motion.div>

        {/* Row 2 */}
        <motion.div style={{ x: x2 }} className="flex gap-12 whitespace-nowrap">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].reverse().map((src, i) => (
            <GalleryItem key={i} src={src} />
          ))}
        </motion.div>

        {/* Row 3 */}
        <motion.div style={{ x: x3 }} className="flex gap-12 whitespace-nowrap">
          {[...GALLERY_IMAGES, ...GALLERY_IMAGES].map((src, i) => (
            <GalleryItem key={i} src={src} />
          ))}
        </motion.div>
      </div>
    </section>
  );
};

const GalleryItem = ({ src }: { src: string; key?: string | number }) => {
  return (
    <motion.div
      whileHover={{ scale: 0.95 }}
      className="relative w-[280px] md:w-[450px] aspect-[16/9] overflow-hidden rounded-2xl group cursor-none"
    >
      <div className="absolute inset-0 bg-kaori-black/40 group-hover:bg-transparent transition-colors duration-700 z-10" />
      <img
        src={src}
        alt="Atelier Gallery"
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 scale-110 group-hover:scale-100"
      />
      <div className="absolute inset-0 border border-white/5 rounded-2xl z-20 pointer-events-none group-hover:border-gold/30 transition-colors" />
    </motion.div>
  );
};
