import { motion } from "motion/react";
import { MetricItem } from "../types";

export default function Metrics() {
  const metrics: MetricItem[] = [
    { value: "9.33", label: "CGPA / 10" },
    { value: "2", label: "PRODUCTION PLATFORMS" },
    { value: "MERN", label: "PRIMARY STACK" },
    { value: "2026", label: "GRADUATING" },
  ];
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };
  return (
    <section className="py-12 border-y border-charcoal-dark/10 bg-charcoal-dark/1">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 divide-y divide-charcoal-dark/5 md:divide-y-0 md:divide-x md:divide-charcoal-dark/10"
        >
          {metrics.map((metric, index) => (
            <motion.div
              key={index}
              variants={itemVariants}
              className={`flex flex-col justify-center px-4 py-6 md:py-4 ${index > 1 ? "pt-8 md:pt-4" : ""}`}
            >
              <div className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold text-terracotta-primary tracking-tight">
                {metric.value}
              </div>
              <div className="mt-2 font-mono text-[10px] sm:text-xs tracking-wider text-charcoal-muted uppercase">
                {metric.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}