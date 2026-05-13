/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion, AnimatePresence } from "motion/react";
import { Menu, ShoppingBag, User, Search, X } from "lucide-react";
import { useState } from "react";

interface Props {
  onNavigate?: (page: "home" | "about" | "stories" | "enquiry" | "video") => void;
  currentPage?: string;
}

export const Navbar = ({ onNavigate, currentPage }: Props) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems: { label: string; id: "home" | "about" | "stories" | "enquiry" | "video" }[] = [
    { label: "Collections", id: "home" },
    { label: "Archive", id: "stories" },
    { label: "Agency", id: "about" },
    { label: "Enquiry", id: "enquiry" },
    { label: "Video", id: "video" },
  ];

  const handleNavigate = (id: "home" | "about" | "stories" | "enquiry" | "video") => {
    onNavigate?.(id);
    setIsMenuOpen(false);
  };

  return (
    <>
      <motion.nav 
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: "circOut" }}
        className="fixed top-0 left-0 w-full z-[60] flex items-center justify-between px-6 py-6 md:px-20 md:py-10"
      >
        <div className="flex items-center gap-12">
          <motion.h1 
            onClick={() => handleNavigate("home")}
            whileHover={{ scale: 1.05 }}
            className="font-serif text-2xl md:text-3xl tracking-[0.2em] font-light cursor-pointer text-white"
          >
            KAORI
          </motion.h1>
          
          <div className="hidden lg:flex gap-10 text-[10px] uppercase tracking-[0.3em] font-medium">
            {navItems.map((item) => (
              <button 
                key={item.id}
                onClick={() => handleNavigate(item.id)} 
                className={`transition-colors cursor-pointer hover:text-accent ${currentPage === item.id ? 'text-accent' : 'text-white/40'}`}
              >
                {item.label}
              </button>
            ))}
          </div>
        </div>

        <div className="flex items-center gap-8">
          <button className="text-white/40 hover:text-accent transition-colors hidden md:block" id="nav-search">
            <Search size={18} strokeWidth={1} />
          </button>
          <button className="px-6 py-2 border border-white/10 rounded-full text-[10px] uppercase tracking-widest hover:border-accent/40 bg-white/5 backdrop-blur-xl transition-all text-white/80">
            Connect
          </button>
          <button 
            onClick={() => setIsMenuOpen(true)}
            className="text-white/40 hover:text-accent transition-colors lg:hidden" 
            id="nav-menu-open"
          >
            <Menu size={24} strokeWidth={1} />
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[70] bg-kaori-black/95 backdrop-blur-2xl flex flex-col items-center justify-center"
          >
            <button 
              onClick={() => setIsMenuOpen(false)}
              className="absolute top-8 right-8 text-white/40 hover:text-white transition-colors p-4"
              id="nav-menu-close"
            >
              <X size={32} strokeWidth={1} />
            </button>

            <div className="flex flex-col items-center gap-12">
              {navItems.map((item, i) => (
                <motion.button
                  key={item.id}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  onClick={() => handleNavigate(item.id)}
                  className={`font-serif text-5xl md:text-7xl italic tracking-tighter ${
                    currentPage === item.id ? 'text-accent' : 'text-white/40 hover:text-white'
                  } transition-all`}
                >
                  {item.label}
                </motion.button>
              ))}
              
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 flex gap-8 text-[10px] uppercase tracking-[0.3em] text-white/20"
              >
                <a href="#" className="hover:text-accent transition-colors">Instagram</a>
                <a href="#" className="hover:text-accent transition-colors">Behance</a>
                <a href="#" className="hover:text-accent transition-colors">Direct</a>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
