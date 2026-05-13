/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export const ThemeToggle = () => {
  const [theme, setTheme] = useState<"gold" | "azure" | "emerald">("gold");

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
  }, [theme]);

  const colors = [
    { name: "gold", hex: "#D4AF37" },
    { name: "azure", hex: "#3b82f6" },
    { name: "emerald", hex: "#10b981" },
  ];

  return (
    <div className="fixed bottom-12 left-12 z-[100] flex gap-2 p-2 rounded-full border border-white/5 bg-kaori-black/40 backdrop-blur-2xl">
      {colors.map((c) => (
        <motion.button
          key={c.name}
          whileHover={{ scale: 1.1, backgroundColor: c.hex }}
          whileTap={{ scale: 0.9 }}
          onClick={() => setTheme(c.name as any)}
          className={`w-6 h-6 rounded-full border border-white/10 transition-all shadow-lg active:scale-95 flex items-center justify-center`}
          style={{ backgroundColor: theme === c.name ? c.hex : "transparent" }}
          title={`Switch to ${c.name}`}
        >
          {theme === c.name && <div className="w-1 h-1 rounded-full bg-white animate-pulse" />}
        </motion.button>
      ))}
    </div>
  );
};
