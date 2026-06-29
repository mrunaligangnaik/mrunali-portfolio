import { motion, Variants } from "motion/react";
import { Code2, Laptop, Server, Database, Wrench, Share2 } from "lucide-react";

export default function Toolkit() {
  const categories = [
    {
      title: "Languages",
      icon: Code2,
      skills: ["JavaScript (ES6+)", "HTML5", "CSS3 / Sass", "TypeScript"],
    },
    {
      title: "Frontend",
      icon: Laptop,
      skills: ["React.js", "Next.js", "React Native (basics)", "Tailwind CSS"],
    },
    {
      title: "Backend",
      icon: Server,
      skills: ["Node.js", "Express.js", "REST APIs", "Mux Video / SSE"],
    },
    {
      title: "Database",
      icon: Database,
      skills: ["MongoDB", "Mongoose ORM", "Firestore", "Local Storage"],
    },
    {
      title: "Tools",
      icon: Wrench,
      skills: ["Git & GitHub", "VS Code", "Postman", "Chrome DevTools"],
    },
    {
      title: "Integrations",
      icon: Share2,
      skills: ["Razorpay Payments", "Auth flows & JWT", "Role-based access", "Webhooks"],
    },
  ];

const containerVariants: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
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
      },
    },
  };

  return (
    <section id="skills" className="py-20 md:py-32 px-6 md:px-12 bg-charcoal-dark/1 border-b border-charcoal-dark/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={containerVariants}
          className="flex flex-col space-y-12"
        >
          {/* Section Header */}
          <div className="flex flex-col space-y-3">
            <span className="font-mono text-xs font-semibold tracking-widest text-terracotta-primary uppercase">
              TOOLKIT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-dark leading-tight">
              The stack I reach for.
            </h2>
            <p className="text-base text-charcoal-muted font-light max-w-xl">
              A carefully selected, production-ready suite of web technologies focusing on performance, modularity, and rapid feature development.
            </p>
          </div>

          {/* Skills Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => {
              const Icon = category.icon;
              return (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ y: -4, transition: { duration: 0.2 } }}
                  className="p-6 rounded-3xl bg-cream-card border border-charcoal-dark/5 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col space-y-4 relative overflow-hidden group"
                >
                  {/* Decorative background circle */}
                  <div className="absolute -right-8 -bottom-8 w-24 h-24 bg-terracotta-primary/1 rounded-full group-hover:scale-150 transition-transform duration-500" />

                  {/* Category Header */}
                  <div className="flex items-center space-x-3.5 pb-2 border-b border-charcoal-dark/5">
                    <div className="p-2.5 rounded-2xl bg-terracotta-primary/5 text-terracotta-primary transition-colors group-hover:bg-terracotta-primary group-hover:text-white duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="font-serif text-xl font-bold text-charcoal-dark">{category.title}</h3>
                  </div>

                  {/* Skills tags list */}
                  <div className="flex flex-wrap gap-2 pt-2 relative z-10">
                    {category.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="text-xs font-medium text-charcoal-muted bg-charcoal-dark/2r:bg-terracotta-primary/[0.04] hover:text-terracotta-primary border border-charcoal-dark/5 hover:border-terracotta-primary/20 px-3 py-1.5 rounded-full transition-all duration-200"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}