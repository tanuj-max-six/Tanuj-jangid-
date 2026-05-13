/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { MouseTextEffect } from "./MouseTextEffect";
import { TextReveal } from "./TextReveal";
import { ArrowDown } from "lucide-react";

export const AboutPage = () => {
  return (
    <div className="bg-kaori-black pt-32 pb-60">
      {/* Hero Section */}
      <section className="px-6 md:px-12 mb-32">
        <div className="max-w-7xl mx-auto">
          <motion.span 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] uppercase tracking-[1em] text-accent font-light block mb-12"
          >
            The Genesis of Intelligence
          </motion.span>
          
          <h1 className="font-serif text-6xl md:text-[12vw] leading-[0.85] tracking-tighter mb-24">
            <TextReveal text="WE CRAFT" delay={0.2} />
            <div className="flex items-center gap-8">
               <TextReveal text="SENSORY" className="italic text-white/20" delay={0.4} />
               <motion.div 
                 initial={{ width: 0 }}
                 animate={{ width: "20vw" }}
                 transition={{ duration: 1.5, delay: 0.8 }}
                 className="h-[2px] bg-accent/30 hidden md:block" 
               />
            </div>
            <TextReveal text="ECHOES" delay={0.6} />
          </h1>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-24 items-end">
            <motion.p 
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 1 }}
              className="text-xl md:text-3xl font-light text-white/60 leading-relaxed max-w-xl"
            >
              KAORI is a creative laboratory where olfactory art meets computational precision. We don't just make perfume; we engineer memories.
            </motion.p>
            
            <div className="flex justify-end">
               <motion.div 
                 animate={{ y: [0, 20, 0] }}
                 transition={{ repeat: Infinity, duration: 2 }}
                 className="p-8 rounded-full border border-white/5"
               >
                 <ArrowDown size={40} strokeWidth={1} className="text-accent" />
               </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-60 bg-kaori-gray/30">
        <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32">
          <div className="space-y-12">
            <h2 className="font-serif text-5xl md:text-7xl leading-tight">
              The Art of <br /> <span className="italic text-accent">Artificial</span> Intuition
            </h2>
            <div className="h-px w-32 bg-accent/40" />
            <p className="text-xl text-white/40 font-light leading-relaxed">
              Our agency utilizes proprietary AI models to analyze millions of scent combinations, predicting emotional resonance before a single drop is mixed. By combining data with Kyoto's ancient incense traditions, we create the extraordinary.
            </p>
          </div>
          
          <motion.div 
             whileHover={{ scale: 1.02 }}
             className="relative aspect-square rounded-2xl overflow-hidden glass-card p-4"
          >
             <img 
               src="https://images.unsplash.com/photo-1616604423714-38605330368c?auto=format&fit=crop&q=80&w=1000" 
               className="w-full h-full object-cover rounded-xl"
               alt="Creative AI Laboratory"
             />
             <div className="absolute inset-0 bg-accent/10 mix-blend-overlay" />
          </motion.div>
        </div>
      </section>

      {/* Interactive Values */}
      <section className="py-60 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <MouseTextEffect 
            text="IMAGINATION IS THE ONLY BORDER" 
            className="text-5xl md:text-9xl uppercase leading-none tracking-tighter opacity-80 mb-40"
          />
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
            {[
              { title: "Precision", desc: "Every molecule is calculated for maximum synaptic impact." },
              { title: "Emotion", desc: "We map fragrances to the human heart's deepest chambers." },
              { title: "Legacy", desc: "A bridge between 1000 years of tradition and 1000 years of tomorrow." }
            ].map((v, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.2 }}
                className="p-12 border border-white/5 bg-white/[0.02] rounded-3xl hover:border-accent/30 transition-colors group"
              >
                <span className="text-accent text-sm font-mono mb-8 block">0{i+1}</span>
                <h4 className="text-3xl font-serif mb-6 group-hover:translate-x-2 transition-transform">{v.title}</h4>
                <p className="text-white/40 font-light">{v.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="pt-20">
         <div className="max-w-7xl mx-auto px-6 md:px-12 text-center">
            <h5 className="font-serif text-4xl md:text-7xl mb-12">Become Part of the <span className="text-accent italic">Story</span></h5>
            <button className="px-16 py-6 border border-accent/40 text-accent uppercase tracking-widest text-sm hover:bg-accent hover:text-kaori-black transition-all">
              Initiate Collaboration
            </button>
         </div>
      </section>
    </div>
  );
};
