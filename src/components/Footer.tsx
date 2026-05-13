/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { Instagram, Twitter, Facebook, ArrowRight } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="bg-kaori-gray pt-24 pb-12 px-6 md:px-12 border-t border-white/5">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-16 mb-24">
          <div className="col-span-1 md:col-span-1">
            <h2 className="font-serif text-3xl tracking-widest mb-8">KAORI</h2>
            <p className="text-sm text-white/40 leading-relaxed max-w-xs">
              Crafting olfactory masterpieces in the heart of our Kyoto atelier. 
              Founded on the principles of silence, balance, and absolute purity.
            </p>
            <div className="flex gap-6 mt-10">
              <Instagram size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
              <Twitter size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
              <Facebook size={18} className="text-white/40 hover:text-white transition-colors cursor-pointer" />
            </div>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8">Collections</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">The Permanent House</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Seasonal Limited</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Bespoke Atelier</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Home Fragrance</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8">Assistance</h4>
            <ul className="space-y-4 text-sm text-white/60">
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Store Locator</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-[10px] uppercase tracking-[0.3em] font-bold text-white/30 mb-8">The Journal</h4>
            <p className="text-sm text-white/40 mb-6">Receive curated scent updates and exclusive invitations.</p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Email Address" 
                className="w-full bg-transparent border-b border-white/10 pb-4 pr-10 text-sm focus:outline-none focus:border-accent transition-colors"
                id="newsletter-email"
              />
              <button className="absolute right-0 top-0 text-white/40 hover:text-accent transition-colors" id="newsletter-submit">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 text-[10px] uppercase tracking-[0.2em] text-white/20">
          <p>© 2024 KAORI Fragrance House. All Rights Reserved.</p>
          <div className="flex gap-8 mt-6 md:mt-0">
            <span>Paris</span>
            <span>Tokyo</span>
            <span>New York</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
