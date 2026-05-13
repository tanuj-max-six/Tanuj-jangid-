/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, useMotionValue, useTransform, useSpring, PanInfo } from "motion/react";
import { useState, useRef, useEffect } from "react";
import { Fragrance } from "../constants";
import { FragranceCard } from "./FragranceCard";

interface Props {
  items: Fragrance[];
}

export const DraggableCarousel = ({ items }: Props) => {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const springX = useSpring(x, { damping: 30, stiffness: 200 });

  const DRAG_BUFFER = 50;

  const onDragEnd = (_: any, info: PanInfo) => {
    const offset = info.offset.x;
    const velocity = info.velocity.x;

    if (offset < -DRAG_BUFFER || velocity < -500) {
      setIndex((pv) => Math.min(pv + 1, items.length - 1));
    } else if (offset > DRAG_BUFFER || velocity > 500) {
      setIndex((pv) => Math.max(pv - 1, 0));
    }
  };

  useEffect(() => {
    // Update x based on current index
    const width = containerRef.current?.offsetWidth || 0;
    // We want to center the current item. 
    // Assuming each item is roughly 350px wide with gap
    x.set(-index * (350 + 48)); 
  }, [index, x]);

  return (
    <div className="relative w-full py-20 overflow-visible cursor-grab active:cursor-grabbing">
      <motion.div
        ref={containerRef}
        drag="x"
        dragConstraints={{
          left: -(items.length - 1) * (350 + 48),
          right: 0,
        }}
        style={{ x: springX }}
        onDragEnd={onDragEnd}
        className="flex gap-12 px-[10%] md:px-[30%] items-center"
      >
        {items.map((item, i) => (
          <CarouselItem key={item.id} item={item} i={i} currentIndex={index} />
        ))}
      </motion.div>

      {/* Navigation Indicators */}
      <div className="flex justify-center gap-4 mt-16">
        {items.map((_, i) => (
          <button
            key={i}
            onClick={() => setIndex(i)}
            className={`h-1 transition-all duration-500 rounded-full ${
              i === index ? "w-12 bg-gold" : "w-4 bg-white/10"
            }`}
          />
        ))}
      </div>
    </div>
  );
};

interface ItemProps {
  item: Fragrance;
  i: number;
  currentIndex: number;
}

const CarouselItem = ({ item, i, currentIndex }: ItemProps) => {
  const isActive = i === currentIndex;
  const distance = Math.abs(i - currentIndex);
  
  // 3D Transforms based on position
  const scale = isActive ? 1.1 : 0.85 - distance * 0.05;
  const rotateY = (i - currentIndex) * -15; // Fan out effect
  const z = isActive ? 100 : -200 * distance;
  const opacity = Math.max(1 - distance * 0.3, 0.2);

  return (
    <motion.div
      animate={{
        scale,
        rotateY,
        z,
        opacity,
      }}
      transition={{
        type: "spring",
        damping: 20,
        stiffness: 100,
      }}
      style={{
        perspective: 1000,
        transformStyle: "preserve-3d",
        minWidth: "350px",
      }}
      className="relative"
    >
      <FragranceCard fragrance={item} index={i} />
    </motion.div>
  );
};
