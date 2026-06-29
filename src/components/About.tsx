import { motion } from "motion/react";
import { CheckCircle2, Award, Zap, Users, MessageSquare } from "lucide-react";

export default function About() {
  const softSkills = [
    { name: "Problem solving", desc: "Structured approach to debugging and optimization", icon: Zap },
    { name: "Team collaboration", desc: "Clear git workflows and constructive code reviews", icon: Users },
    { name: "Quick learning", desc: "Accelerated adoption of new frameworks and standards", icon: Award },
    { name: "Clear communication", desc: "Transparent timelines and precise technical briefs", icon: MessageSquare },
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
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring" as const,
        stiffness: 80,
        damping: 15,
      }
    },
  };

  return (
    <section id="about" className="py-20 md:py-32 px-6 md:px-12 border-b border-charcoal-dark/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16"
        >
          {/* Left Column: Heading & Theme */}
          <motion.div variants={itemVariants} className="lg:col-span-5 flex flex-col space-y-4">
            <span className="font-mono text-xs font-semibold tracking-widest text-terracotta-primary uppercase">
              ABOUT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-dark leading-tight">
              Curious builder, <br className="hidden md:inline" />
              careful shipper.
            </h2>
            <div className="w-16 h-1 bg-terracotta-primary rounded-full mt-2" />
          </motion.div>

          {/* Right Column: Bio text & Soft Skills cards */}
          <motion.div variants={itemVariants} className="lg:col-span-7 flex flex-col space-y-8">
            <div className="space-y-6 text-base sm:text-lg text-charcoal-muted leading-relaxed font-sans font-light">
              <p>
                I'm a final-year Computer Science student at the University of Mumbai (CGPA{" "}
                <span className="font-semibold text-charcoal-dark">9.33/10</span>) with a deep focus on the MERN stack.
                I've shipped two end-to-end platforms — not simple class exercises, but systems featuring robust auth, role-based dashboards, REST APIs, and real payment flows.
              </p>
              <p>
                I care about the boring parts that keep applications running smoothly: clean database schemas, predictable and self-documenting APIs, and interfaces that feel calm and highly responsive under load. I learn fast, ask sharp questions, and ship reliable code.
              </p>
            </div>

            {/* Soft Skills Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              {softSkills.map((skill, index) => {
                const Icon = skill.icon;
                return (
                  <motion.div
                    key={index}
                    variants={itemVariants}
                    whileHover={{ y: -3, transition: { duration: 0.2 } }}
                    className="p-5 rounded-2xl bg-cream-card border border-charcoal-dark/6 hover:border-terracotta-primary/25 transition-all duration-300 shadow-sm hover:shadow-md flex flex-col space-y-2 group"
                  >
                    <div className="flex items-center space-x-3">
                      <div className="p-2 rounded-xl bg-terracotta-primary/4 text-terracotta-primary group-hover:bg-terracotta-primary group-hover:text-white transition-all duration-300">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h4 className="text-sm font-semibold text-charcoal-dark">{skill.name}</h4>
                    </div>
                    <p className="text-xs text-charcoal-muted font-light leading-relaxed pl-1">
                      {skill.desc}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}