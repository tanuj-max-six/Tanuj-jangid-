/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from "react";
import { motion } from "motion/react";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { BrandIntro } from "./components/BrandIntro";
import { ScrollReveal } from "./components/ScrollReveal";
import { TextFadeScroll } from "./components/TextFadeScroll";
import { DepthGallery } from "./components/DepthGallery";
import { FragranceCard } from "./components/FragranceCard";
import { SectionHeader } from "./components/SectionHeader";
import { Footer } from "./components/Footer";
import { CustomCursor } from "./components/CustomCursor";
import { MouseTextEffect } from "./components/MouseTextEffect";
import { EndlessGallery } from "./components/EndlessGallery";
import { AboutPage } from "./components/AboutPage";
import { ScentStories } from "./components/ScentStories";
import { BentoFeatures } from "./components/BentoFeatures";
import { EnquiryForm } from "./components/EnquiryForm";
import { VideoScrollPage } from "./components/VideoScrollPage";
import { ThemeToggle } from "./components/ThemeToggle";
import { FRAGRANCES } from "./constants";
import { ArrowRight } from "lucide-react";

export default function App() {
  const [currentPage, setCurrentPage] = useState<"home" | "about" | "stories" | "enquiry" | "video">("home");

  return (
    <div className="relative min-h-screen bg-kaori-black selection:bg-accent selection:text-kaori-black">
      <div className="grain-overlay" />
      <ThemeToggle />
      <CustomCursor />
      <Navbar onNavigate={setCurrentPage} currentPage={currentPage} />
      
      <main>
        {currentPage === "home" ? (
          <>
            <Hero />
            <BrandIntro />
            
            <BentoFeatures />

            <ScrollReveal>
              <div className="text-center">
                <h4 className="font-serif text-4xl md:text-7xl lg:text-8xl tracking-tighter leading-tight max-w-4xl opacity-80 italic">
                  "The most profound connection is the one that remains <span className="text-accent">unseen</span>."
                </h4>
              </div>
            </ScrollReveal>

            <TextFadeScroll text="We believe a fragrance is more than a scent; it is an invisible garment, an intimate story whispered to the soul. Crafting olfactory masterpieces in the heart of our atelier." />

            {/* Collection Section */}
            <section className="py-24 md:py-40 bg-kaori-black overflow-hidden">
              <div className="max-w-7xl mx-auto px-6 md:px-12">
                <SectionHeader 
                  title="The Permanent Collection" 
                  subtitle="Timeless Artistry" 
                />
              </div>
              
              <DepthGallery items={FRAGRANCES} />
              
              <div className="mt-24 text-center">
                <button className="inline-flex items-center gap-4 text-[10px] uppercase tracking-[0.4em] font-medium text-white/50 hover:text-white transition-colors group" id="view-all-collections">
                  View All Collections
                  <ArrowRight size={14} className="group-hover:translate-x-2 transition-transform" />
                </button>
              </div>
            </section>

            {/* Philosophy Section */}
            <section className="relative min-h-screen flex items-center bg-[#080808] overflow-hidden py-32">
              <div className="aura-glow bg-blue-900/10 top-1/2 left-0 -translate-y-1/2" />
              
              <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
                <motion.div
                  initial={{ opacity: 0, scale: 0.8, rotate: -2 }}
                  whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1.5, ease: [0.16, 1, 0.3, 1] }}
                  className="relative aspect-[4/5] overflow-hidden rounded-2xl p-px bg-gradient-to-br from-white/10 to-transparent"
                >
                  <div className="w-full h-full rounded-2xl overflow-hidden bg-kaori-black">
                    <img 
                      src="https://images.unsplash.com/photo-1595425959632-34f2822322ce?auto=format&fit=crop&q=80&w=1000" 
                      className="w-full h-full object-cover hover:scale-110 transition-transform duration-[2s]"
                      alt="Philosophy focal point"
                    />
                  </div>
                </motion.div>
                
                <motion.div
                  initial={{ opacity: 0, x: 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 1, delay: 0.2 }}
                >
                  <SectionHeader title="Articulating the Invisible" subtitle="Our Philosophy" />
                  <p className="text-lg md:text-xl text-white/70 font-light leading-relaxed mb-12 italic">
                    "A scent is a memory before it is a fragrance. At KAORI, we don't just blend notes; we compose temporal landscapes."
                  </p>
                  <div className="space-y-10">
                    <div className="flex gap-8 group cursor-pointer" id="story-1">
                      <span className="font-serif text-3xl text-white/20 group-hover:text-accent transition-colors">01</span>
                      <div>
                        <h4 className="text-lg font-medium mb-2">Artisanal Extraction</h4>
                        <p className="text-sm text-white/40 leading-relaxed">Cold-press methods that preserve the molecular integrity of rare botanicals.</p>
                      </div>
                    </div>
                    <div className="flex gap-8 group cursor-pointer" id="story-2">
                      <span className="font-serif text-3xl text-white/20 group-hover:text-accent transition-colors">02</span>
                      <div>
                        <h4 className="text-lg font-medium mb-2">Temporal Scenting</h4>
                        <p className="text-sm text-white/40 leading-relaxed">Fragrances designed to evolve over 12 hours, revealing hidden heart notes.</p>
                      </div>
                    </div>
                    <div className="flex gap-8 group cursor-pointer" id="story-3">
                      <span className="font-serif text-3xl text-white/20 group-hover:text-accent transition-colors">03</span>
                      <div>
                        <h4 className="text-lg font-medium mb-2">Sustainable Luxury</h4>
                        <p className="text-sm text-white/40 leading-relaxed">Recyclable crystal flacons and ethically sourced components from across the globe.</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
            </section>

            {/* Featured Story */}
            <section className="py-40 bg-kaori-black text-center px-6">
              <motion.div
                 initial={{ opacity: 0, scale: 0.8 }}
                 whileInView={{ opacity: 1, scale: 1 }}
                 viewport={{ once: true }}
                 transition={{ duration: 1.5 }}
                 className="max-w-4xl mx-auto"
              >
                <div className="mb-12">
                  <MouseTextEffect 
                    text="OLFACTORY POETRY IN EVERY DROP" 
                    className="text-5xl md:text-8xl leading-tight uppercase tracking-tighter"
                  />
                </div>
                <p className="text-white/40 max-w-2xl mx-auto text-base md:text-lg mb-16 font-light italic">
                  "Born in the heart of artisanal heritage, KAORI represents the intersection of ancestral wisdom and modern scent science."
                </p>
                <button 
                  onClick={() => setCurrentPage("stories")}
                  className="px-16 py-5 border border-accent/30 text-accent text-[10px] uppercase tracking-[0.4em] hover:bg-accent hover:text-kaori-black transition-all duration-500 rounded-sm" id="read-stories"
                >
                  Read Our Stories
                </button>
              </motion.div>
            </section>

            {/* Endless Gallery */}
            <EndlessGallery />
          </>
        ) : currentPage === "about" ? (
          <AboutPage />
        ) : currentPage === "stories" ? (
          <ScentStories />
        ) : currentPage === "enquiry" ? (
          <EnquiryForm />
        ) : (
          <VideoScrollPage />
        )}
      </main>


      <Footer />
    </div>
  );
}
