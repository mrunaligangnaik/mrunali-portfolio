import { motion } from "motion/react"
import { ArrowDown } from "lucide-react";

interface HeroProps {
  onOpenHireModal: () => void;
}

export default function Hero({ onOpenHireModal }: HeroProps) {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 70,
        damping: 15,
      },
    },
  };

  const handleScrollToAbout = () => {
    const el = document.getElementById("about");
    if (el) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = el.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="relative min-h-[90vh] flex flex-col justify-center pt-32 pb-16 md:pt-40 md:pb-24 px-6 md:px-12 select-none overflow-hidden">
      {/* Background radial accent for subtle warmth */}
      <div className="absolute top-1/4 right-1/4 w-125 h-125 bg-terracotta-primary/2 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full relative z-10">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="flex flex-col space-y-8 max-w-5xl"
        >
          {/* Top Pill - Availability Status */}
          <motion.div variants={itemVariants} className="inline-flex">
            <div className="flex items-center space-x-2.5 bg-terracotta-primary/5 border border-terracotta-primary/10 px-4 py-1.5 rounded-full">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
              <span className="text-xs font-mono font-medium text-terracotta-primary tracking-wider uppercase">
                Open to internships & junior dev roles
              </span>
            </div>
          </motion.div>

          {/* Main Display Heading */}
          <motion.h1
            variants={itemVariants}
            className="font-serif text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-charcoal-dark leading-[1.15]"
            id="hero-title"
          >
            Mrunali Gangnaik — <br className="hidden sm:inline" />
            <span className="text-charcoal-muted font-normal">full-stack</span> developer <br />
            focused on building scalable web applications.
          </motion.h1>

          {/* Subtitle / Pitch Statement */}
          <motion.p
            variants={itemVariants}
            className="text-lg sm:text-xl md:text-2xl font-light text-charcoal-muted leading-relaxed max-w-3xl font-sans"
            id="hero-subtitle"
          >
            Final-year Computer Science graduate from the University of Mumbai. I design and build production-grade MERN applications — multi-role dashboards, REST APIs, and payment integrations included.
          </motion.p>

          {/* Action Row */}
          <motion.div variants={itemVariants} className="flex flex-wrap items-center gap-4 pt-4">
            <button
              onClick={onOpenHireModal}
              className="bg-[#1E1B18] dark:bg-terracotta-primary hover:bg-[#1E1B18]/90 dark:hover:bg-terracotta-hover text-white px-8 py-4 rounded-full text-base font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-md hover:shadow-lg"
              id="hero-cta-hire"
            >
              Get in touch
            </button>

            <button
              onClick={handleScrollToAbout}
              className="group flex items-center space-x-2 text-charcoal-muted hover:text-charcoal-dark px-6 py-4 rounded-full text-base font-medium transition-colors"
              id="hero-cta-scroll"
            >
              <span>Explore my work</span>
              <ArrowDown className="w-4 h-4 transition-transform duration-200 group-hover:translate-y-1" />
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}