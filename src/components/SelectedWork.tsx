import { Github, Check } from "lucide-react";

const PROJECTS = [
  {
    eyebrow: "FRANCHISE MANAGEMENT PLATFORM",
    title: "Franchifi",
    image: "/src/assets/images/franchifi_dashboard_1782547289875.jpg.png",
    url: "https://franchifi.co/dashboard",
    github: "https://github.com/mrunaligangnaik/FranchiFi-Platform-",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB", "Razorpay"],
    points: [
      "Developed a full-stack franchise management platform with role-based access for Franchisors, Investors, and Admins.",
      "Implemented authentication, dashboards, and RESTful APIs.",
      "Integrated Razorpay payment gateway for subscription management.",
      "Built MongoDB-based backend and admin verification workflows.",
    ],
  },
  {
    eyebrow: "LEGAL SERVICES BOOKING PLATFORM",
    title: "LegalLink",
    image: "/src/assets/images/legallink_homepage_1782547304841.jpg.jpg",
    url: "https://legallink.org/appointments",
    github: "https://github.com/mrunaligangnaik/LegalLink-",
    tags: ["React.js", "Node.js", "Express.js", "MongoDB"],
    points: [
      "Developed a lawyer appointment booking and management platform.",
      "Created dedicated dashboards for clients, lawyers, and administrators.",
      "Implemented appointment scheduling, status tracking, and history logs.",
      "Designed MongoDB schemas paired with a responsive React.js interface.",
    ],
  },
];

export default function SelectedWork() {
  return (
    <section id="projects" className="py-20 md:py-32 px-6 md:px-12 border-b border-charcoal-dark/5 scroll-mt-20">
      <div className="max-w-7xl mx-auto">

        {/* Section Header */}
        <div className="flex flex-col space-y-3 mb-16">
          <span className="font-mono text-xs font-semibold tracking-widest text-terracotta-primary uppercase">
            SELECTED WORK
          </span>
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-dark leading-tight">
            Two platforms, <br />
            end-to-end.
          </h2>
          <div className="w-16 h-1 bg-terracotta-primary rounded-full mt-2" />
        </div>

        {/* Project List */}
        <div className="space-y-24 md:space-y-36">
          {PROJECTS.map((project, i) => {
            const reversed = i % 2 === 1;
            return (
              <div
                key={project.title}
                className={`grid grid-cols-1 lg:grid-cols-12 gap-12 items-start ${
                  i > 0 ? "pt-12 border-t border-charcoal-dark/5" : ""
                }`}
              >
                {/* Image */}
                <div className={`lg:col-span-7 ${reversed ? "order-1 lg:order-2" : ""}`}>
                  <div className="rounded-2xl border border-charcoal-dark/10 overflow-hidden shadow-lg bg-cream-card">
                    {/* Screenshot */}
                    <div className="overflow-hidden bg-[#FAF7F2]">
                      <img
                        src={project.image}
                        alt={`${project.title} screenshot`}
                        className="w-full h-auto block"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>

                {/* Details */}
                <div className={`lg:col-span-5 space-y-6 flex flex-col justify-center ${reversed ? "order-2 lg:order-1" : ""}`}>
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] tracking-wider text-charcoal-muted uppercase bg-charcoal-dark/4 px-2.5 py-1 rounded-full border border-charcoal-dark/5">
                      {project.eyebrow}
                    </span>
                    <h3 className="font-serif text-3xl md:text-4xl font-bold text-charcoal-dark">
                      {project.title}
                    </h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="text-xs bg-terracotta-primary/4 text-terracotta-primary font-mono border border-terracotta-primary/10 px-2.5 py-1 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <ul className="space-y-3.5 text-charcoal-muted text-sm md:text-base font-light leading-relaxed">
                    {project.points.map((point) => (
                      <li key={point} className="flex items-start">
                        <Check className="w-5 h-5 text-terracotta-primary mr-3 shrink-0 mt-0.5" />
                        <span>{point}</span>
                      </li>
                    ))}
                  </ul>

                  <div className="pt-2">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center space-x-2 text-sm font-semibold text-terracotta-primary hover:text-terracotta-hover underline decoration-2 underline-offset-4"
                    >
                      <Github className="w-4 h-4" />
                      <span>View on GitHub</span>
                    </a>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}