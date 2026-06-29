import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Metrics from "./components/Metrics";
import About from "./components/About";
import Toolkit from "./components/Toolkit";
import SelectedWork from "./components/SelectedWork";
import Education from "./components/Education";
import Contact from "./components/Contact";
import HireMeModal from "./components/HireMeModal";
import ResumeModal from "./components/ResumeModal";
import CodingBackground from "./components/CodingBackground";
import { Heart, Square } from "lucide-react";

export default function App() {
  const [isHireModalOpen, setIsHireModalOpen] = useState(false);
  const [isResumeModalOpen, setIsResumeModalOpen] = useState(false);
  const [refreshTrigger, setRefreshTrigger] = useState(false);
  const [theme, setTheme] = useState<"light" | "dark">(() => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem("theme");
      if (stored === "light" || stored === "dark") {
        return stored;
      }
      return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    }
    return "light";
  });

  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  const handleSubmissionSuccess = () => {
    setRefreshTrigger((prev) => !prev);
  };

  return (
    <div className="relative min-h-screen bg-cream-base text-charcoal-dark selection:bg-terracotta-primary/20 selection:text-charcoal-dark font-sans flex flex-col justify-between overflow-x-hidden theme-transition">
      
      {/* Subtle animated coding-themed background */}
      <CodingBackground />

      {/* Top Floating Header */}
      <Navbar 
        onOpenHireModal={() => setIsHireModalOpen(true)}
        onOpenResumeModal={() => setIsResumeModalOpen(true)}
        theme={theme}
        onToggleTheme={toggleTheme}
      />

      {/* Main Sections Body */}
      <main className="flex-1 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <Hero onOpenHireModal={() => setIsHireModalOpen(true)} />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Metrics />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <About />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Toolkit />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <SelectedWork />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Education />
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
        >
          <Contact 
            onOpenHireModal={() => setIsHireModalOpen(true)} 
            refreshTrigger={refreshTrigger}
          />
        </motion.div>
      </main>

      {/* Footer — colors hardcoded (not theme tokens) so it never washes out in dark mode */}
      <footer className="bg-[#1C1A17] text-[#F5F2EA] py-12 px-6 md:px-12 border-t border-white/10 relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex flex-col space-y-2 text-center md:text-left">
            <span className="font-serif text-lg font-bold tracking-tight text-white">Mrunali Satish Gangnaik</span>
            <span className="text-xs text-[#BCB6A9] font-light">
              © {new Date().getFullYear()} Mrunali Gangnaik. All rights reserved.
            </span>
          </div>

          <div className="flex items-center space-x-1 text-xs text-[#BCB6A9] font-mono bg-white/4 border border-white/6 px-4 py-2 rounded-full shadow-inner">
            <span>Built with</span>
            <Square className="w-3 h-3 text-red-400 fill-red-400 animate-pulse mx-0.5" />
            <span>React, Express, Tailwind v4 & Motion</span>
          </div>
        </div>
      </footer>

      {/* Modals — rendered at root level so they're never clipped by parent overflow */}
      <HireMeModal
        isOpen={isHireModalOpen}
        onClose={() => setIsHireModalOpen(false)}
        onSubmitSuccess={handleSubmissionSuccess}
      />

      <ResumeModal
        isOpen={isResumeModalOpen}
        onClose={() => setIsResumeModalOpen(false)}
      />
    </div>
  );
}