/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { SectionHeader } from "./SectionHeader";
import { Cpu, Wind, Zap, Fingerprint } from "lucide-react";

const FEATURES = [
  {
    title: "Molecular Synthesis",
    description: "AI-driven algorithms that predict scent longevity and diffusion at a molecular level.",
    icon: <Cpu size={32} />,
    size: "col-span-1 md:col-span-2 row-span-1",
    img: "https://images.unsplash.com/photo-1632733711679-5292d373400b?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Neuro-Mapping",
    description: "Creating scents that trigger specific emotional neural pathways.",
    icon: <Fingerprint size={32} />,
    size: "col-span-1 row-span-1",
    accent: true
  },
  {
    title: "Temporal Evolution",
    description: "Fragrances that adapt to your body's circadian rhythm.",
    icon: <Zap size={32} />,
    size: "col-span-1 row-span-2",
    img: "https://images.unsplash.com/photo-1595425959632-34f2822322ce?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Atmospheric Design",
    description: "Architectural scenting for physical spaces that transform perception.",
    icon: <Wind size={32} />,
    size: "col-span-1 md:col-span-2 row-span-1",
  }
];

export const BentoFeatures = () => {
  return (
    <section className="py-40 bg-kaori-black px-6 md:px-12">
      <div className="max-w-7xl mx-auto">
        <SectionHeader 
          title="Digital Capabilities" 
          subtitle="System Architecture" 
        />
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
          {FEATURES.map((f, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`relative group overflow-hidden rounded-3xl border border-white/5 bg-white/[0.02] p-8 flex flex-col justify-between ${f.size} transition-all hover:border-accent/20 hover:bg-white/[0.04]`}
            >
              {f.img && (
                <div className="absolute inset-0 z-0 opacity-20 group-hover:opacity-40 transition-opacity">
                  <img src={f.img} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-kaori-black via-kaori-black/40 to-transparent" />
                </div>
              )}
              
              <div className="relative z-10">
                <div className={`mb-6 text-accent w-fit p-3 rounded-2xl bg-white/5`}>
                  {f.icon}
                </div>
                <h3 className="text-2xl font-serif mb-4 group-hover:text-accent transition-colors">{f.title}</h3>
                <p className="text-sm text-white/40 leading-relaxed max-w-xs">{f.description}</p>
              </div>
              
              <div className="relative z-10 flex justify-end">
                <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center group-hover:border-accent transition-colors">
                   <div className="w-1 h-1 rounded-full bg-accent animate-pulse" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
