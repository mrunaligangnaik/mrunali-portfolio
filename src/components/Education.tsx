import { motion } from "motion/react";
import { GraduationCap, Landmark, Calendar } from "lucide-react";

export default function Education() {
  const educationList = [
    {
      degree: "Bachelor of Science (Computer Science)",
      institution: "University of Mumbai",
      details: "CGPA: 9.33/10 • Graduating 2026",
      period: "2023 — 2026",
      tag: "Degree",
      desc: "Comprehensive coursework in Database Management Systems, Data Structures & Algorithms, Software Engineering, and Web Programming.",
    },
    {
      degree: "Higher Secondary Certificate (HSC) — 12th",
      institution: "Maharashtra State Board",
      period: "2021 — 2023",
      tag: "Junior College",
      desc: "Completed 12th standard under the Maharashtra State Board.",
    },
    {
      degree: "Secondary School Certificate (SSC) — 10th",
      institution: "Maharashtra State Board",
      period: "2020 — 2021",
      tag: "School",
      desc: "Completed 10th standard under the Maharashtra State Board.",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.12,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: {
      opacity: 1,
      x: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      },
    },
  };

  return (
    <section id="education" className="py-20 md:py-32 px-6 md:px-12 bg-charcoal-dark/1 border-b border-charcoal-dark/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Column: Heading */}
          <motion.div variants={itemVariants} className="lg:col-span-4 flex flex-col space-y-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-terracotta-primary uppercase">
              EDUCATION
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl font-bold text-charcoal-dark leading-tight">
              Academic <br />
              track.
            </h2>
            <p className="text-base text-charcoal-muted font-light max-w-sm">
              Solid theoretical background in computer science concepts paired with hands-on technical applications.
            </p>
          </motion.div>

          {/* Right Column: Timeline Cards */}
          <motion.div variants={itemVariants} className="lg:col-span-8 space-y-8 relative">
            {/* Timeline Line */}
            <div className="absolute left-5.75 top-4 bottom-4 w-0.5 bg-charcoal-dark/6" />

            {educationList.map((edu, idx) => (
              <motion.div
                key={idx}
                variants={itemVariants}
                className="flex space-x-6 group relative"
              >
                {/* Timeline Node Badge */}
                <div className="w-12 h-12 rounded-full bg-cream-card border-2 border-charcoal-dark/8 group-hover:border-terracotta-primary/40 flex items-center justify-center text-charcoal-muted group-hover:text-terracotta-primary shadow-sm relative z-10 transition-all duration-300">
                  <GraduationCap className="w-5 h-5" />
                </div>

                {/* Info Card */}
                <div className="flex-1 bg-cream-card border border-charcoal-dark/5 p-6 sm:p-8 rounded-3xl shadow-sm hover:shadow-md transition-all duration-300 group-hover:border-terracotta-primary/10">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-charcoal-dark/5">
                    <div>
                      <span className="inline-block text-[10px] font-mono uppercase tracking-wider font-semibold text-terracotta-primary bg-terracotta-primary/4 px-2.5 py-1 rounded-full mb-2">
                        {edu.tag}
                      </span>
                      <h3 className="font-serif text-xl font-bold text-charcoal-dark leading-snug">
                        {edu.degree}
                      </h3>
                    </div>

                    <div className="flex items-center text-xs text-charcoal-muted font-mono whitespace-nowrap bg-charcoal-dark/3 px-3 py-1 rounded-lg">
                      <Calendar className="w-3.5 h-3.5 mr-1.5" />
                      <span>{edu.period}</span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div className="flex items-center text-sm font-semibold text-charcoal-dark">
                      <Landmark className="w-4 h-4 mr-2 text-charcoal-muted" />
                      <span>{edu.institution}</span>
                    </div>

                    {edu.details && (
                      <div className="text-sm font-mono text-terracotta-primary bg-terracotta-primary/1 py-1 border-l-2 border-terracotta-primary/40 pl-3">
                        {edu.details}
                      </div>
                    )}

                    <p className="text-sm text-charcoal-muted font-light leading-relaxed pt-1">
                      {edu.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}