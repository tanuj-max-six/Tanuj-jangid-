/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Send, CheckCircle2, AlertCircle, Loader2 } from "lucide-react";

export const EnquiryForm = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    try {
      // For static deployments like GitHub Pages, we use a mailto link
      // since the Node.js backend (server.ts) won't run there.
      const subject = encodeURIComponent("New Enquiry from Website");
      const body = encodeURIComponent(`Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`);
      window.location.href = `mailto:tjguru4u@gmail.com?subject=${subject}&body=${body}`;
      
      setStatus("success");
      setFormData({ name: "", email: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage("Something went wrong. Please try again.");
    }
  };

  return (
    <section className="min-h-screen pt-48 pb-40 px-6 md:px-12 bg-kaori-black overflow-hidden relative">
      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="mb-24 md:mb-32"
        >
          <span className="text-white/40 text-[10px] uppercase tracking-[0.3em] mb-8 block font-medium">Get in touch</span>
          <h1 className="font-serif text-[12vw] md:text-[10vw] leading-[0.85] tracking-tighter mb-4 text-white uppercase italic">
            Let's <span className="text-white/20 not-italic">Talk</span>
          </h1>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 md:gap-24">
          {/* Info Side */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="lg:col-span-4 space-y-16"
          >
            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-6 block">Reach Out</label>
              <a href="mailto:tjguru4u@gmail.com" className="text-xl md:text-2xl font-light hover:text-accent transition-colors block mb-2">
                tjguru4u@gmail.com
              </a>
              <p className="text-white/40 font-light">+81 03 1234 5678</p>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-6 block">Studio</label>
              <p className="text-lg text-white/60 font-light leading-relaxed">
                Minami-Aoyama, 5-Chome<br />
                Minato-ku, Tokyo<br />
                Japan
              </p>
            </div>

            <div>
              <label className="text-[10px] uppercase tracking-[0.3em] text-white/30 font-bold mb-6 block">Socials</label>
              <div className="flex flex-col gap-4">
                {["Instagram", "Behance", "Linkedin"].map((s) => (
                  <a key={s} href="#" className="text-sm font-light text-white/60 hover:text-accent transition-colors w-fit">
                    {s}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Form Side */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1, delay: 0.4 }}
            className="lg:col-span-8"
          >
            <div className="p-0 lg:p-8">
              <AnimatePresence mode="wait">
                {status === "success" ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    className="flex flex-col items-start py-20"
                  >
                    <div className="w-20 h-20 rounded-full flex items-center justify-center mb-8 border border-white/20">
                      <CheckCircle2 className="text-white" size={32} strokeWidth={1} />
                    </div>
                    <h2 className="text-4xl font-serif mb-6 text-white italic">Message sent.</h2>
                    <p className="text-white/40 mb-12 max-w-sm font-light">Thank you for your enquiry. We will get back to you shortly.</p>
                    <button
                      onClick={() => setStatus("idle")}
                      className="px-10 py-4 border border-white/20 text-white uppercase tracking-widest text-[10px] hover:bg-white hover:text-black transition-all rounded-full"
                    >
                      New Message
                    </button>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    onSubmit={handleSubmit}
                    className="space-y-12"
                  >
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                      <div className="space-y-2 relative group flex flex-col">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-white transition-colors mb-2">Name</label>
                        <input
                          required
                          type="text"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-all text-lg font-light text-white placeholder:text-white/20"
                          placeholder="Your Name"
                        />
                      </div>
                      <div className="space-y-2 relative group flex flex-col">
                        <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-white transition-colors mb-2">Email</label>
                        <input
                          required
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-all text-lg font-light text-white placeholder:text-white/20"
                          placeholder="your@email.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-2 relative group flex flex-col">
                      <label className="text-[10px] uppercase tracking-[0.2em] text-white/40 group-focus-within:text-white transition-colors mb-2">Message</label>
                      <textarea
                        required
                        rows={6}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full bg-transparent border-b border-white/20 pb-4 focus:outline-none focus:border-white transition-all text-lg font-light resize-none text-white placeholder:text-white/20"
                        placeholder="Tell us about what you have in mind..."
                      />
                    </div>

                    {status === "error" && (
                      <motion.div
                        initial={{ opacity: 0, y: -10 }}
                        animate={{ opacity: 1, y: 0 }}
                        className="flex items-center gap-3 text-red-300 bg-red-400/5 p-5 rounded-2xl border border-red-400/10"
                      >
                        <AlertCircle size={18} />
                        <span className="text-xs uppercase tracking-widest">{errorMessage}</span>
                      </motion.div>
                    )}

                    <div className="pt-4">
                      <button
                        disabled={status === "loading"}
                        type="submit"
                        className="group relative px-10 py-5 overflow-hidden rounded-full border border-white/20 bg-transparent transition-all hover:bg-white disabled:opacity-50 inline-flex"
                      >
                        <div className="relative z-10 flex items-center justify-center gap-4">
                          {status === "loading" ? (
                            <>
                              <Loader2 size={16} className="animate-spin text-white" />
                              <span className="text-[10px] uppercase tracking-[0.3em] text-white">Sending...</span>
                            </>
                          ) : (
                            <>
                              <span className="text-[10px] uppercase tracking-[0.3em] text-white group-hover:text-black transition-colors font-medium">Submit Details</span>
                              <Send size={14} className="text-white group-hover:text-black group-hover:translate-x-2 transition-all" />
                            </>
                          )}
                        </div>
                      </button>
                    </div>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
