import { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, Sun, Moon } from "lucide-react";

interface NavbarProps {
  onOpenHireModal: () => void;
  onOpenResumeModal: () => void;
  theme: "light" | "dark";
  onToggleTheme: () => void;
}

export default function Navbar({ onOpenHireModal, onOpenResumeModal, theme, onToggleTheme }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ["about", "skills", "projects", "education", "contact"];
      let current = "hero";
      
      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      const offset = 80;
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      id="navbar-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 theme-transition ${
        isScrolled
          ? "bg-cream-base/90 dark:bg-cream-base/80 backdrop-blur-md border-b border-charcoal-dark/5 dark:border-white/5 shadow-sm py-4"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between relative">
        {/* Left Side: Brand Name */}
        <div className="flex items-center space-x-4">
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="font-serif text-2xl font-bold tracking-tight text-charcoal-dark hover:opacity-80 transition-all"
            id="nav-logo"
          >
            Mrunali.
          </button>
        </div>

        {/* Center Navigation Links (Desktop) */}
        <nav className="hidden md:flex items-center space-x-8 absolute left-1/2 -translate-x-1/2">
          {[
            { id: "about", label: "About" },
            { id: "skills", label: "Skills" },
            { id: "projects", label: "Projects" },
            { id: "education", label: "Education" },
            { id: "contact", label: "Contact" },
          ].map((link) => (
            <button
              key={link.id}
              onClick={() => scrollToSection(link.id)}
              className={`text-sm font-medium transition-colors hover:text-terracotta-primary relative py-1 ${
                activeSection === link.id
                  ? "text-terracotta-primary"
                  : "text-charcoal-muted"
              }`}
            >
              {link.label}
              {activeSection === link.id && (
                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-terracotta-primary rounded-full" />
              )}
            </button>
          ))}
        </nav>

        {/* Right CTA Buttons */}
        <div className="flex items-center space-x-3">
          {/* Theme Switcher Button */}
          <button
            onClick={onToggleTheme}
            className="p-2.5 rounded-full bg-charcoal-dark/3 hover:bg-charcoal-dark/6 dark:bg-white/4 dark:hover:bg-white/8 border border-charcoal-dark/6 dark:border-white/6 text-charcoal-dark hover:text-terracotta-primary transition-all duration-200"
            aria-label="Toggle theme"
            id="theme-toggle-button"
            title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
          >
            {theme === "dark" ? <Sun className="w-4 h-4" /> : <Moon className="w-4 h-4" />}
          </button>

          {/* Resume Button (Desktop) */}
          <button
            onClick={onOpenResumeModal}
            className="hidden sm:flex items-center space-x-1.5 border border-charcoal-dark/15 dark:border-white/15 hover:border-terracotta-primary dark:hover:border-terracotta-primary hover:bg-terracotta-primary/3 dark:hover:bg-terracotta-primary/5 text-charcoal-dark px-4 py-2.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            id="nav-cta-resume"
          >
            <span>Resume</span>
          </button>

          {/* Hire Me CTA Button */}
          <button
            onClick={onOpenHireModal}
            className="hidden sm:flex items-center space-x-1.5 bg-terracotta-primary hover:bg-terracotta-hover text-white px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 hover:-translate-y-0.5 shadow-sm"
            id="nav-cta-hire"
          >
            <span>Let's Connect</span>
            <ArrowUpRight className="w-4 h-4" />
          </button>

          {/* Mobile Menu Icon */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-charcoal-dark focus:outline-none rounded-xl hover:bg-charcoal-dark/5 dark:hover:bg-white/5 transition-colors"
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-cream-base border-b border-charcoal-dark/10 dark:border-white/10 shadow-lg py-6 px-6 animate-fadeIn z-50">
          <div className="flex flex-col space-y-4">
            {[
              { id: "about", label: "About" },
              { id: "skills", label: "Skills" },
              { id: "projects", label: "Projects" },
              { id: "education", label: "Education" },
              { id: "contact", label: "Contact" },
            ].map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className={`text-left text-base font-medium py-2 px-3 rounded-lg transition-colors ${
                  activeSection === link.id
                    ? "bg-terracotta-primary/5 text-terracotta-primary font-bold"
                    : "text-charcoal-muted hover:bg-charcoal-dark/5 dark:hover:bg-white/5"
                }`}
              >
                {link.label}
              </button>
            ))}
            
            {/* Mobile Resume Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResumeModal();
              }}
              className="w-full mt-2 flex items-center justify-center space-x-2 border border-charcoal-dark/20 dark:border-white/20 text-charcoal-dark py-3 rounded-xl text-base font-medium hover:bg-charcoal-dark/5 transition-colors"
            >
              <span>View Resume</span>
            </button>

            {/* Mobile Hire Me Button */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenHireModal();
              }}
              className="w-full flex items-center justify-center space-x-2 bg-terracotta-primary hover:bg-terracotta-hover text-white py-3 rounded-xl text-base font-medium transition-colors shadow-sm"
            >
              <span>Hire me</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>
            
            {/* Mobile Availability Badge */}
            <div className="flex items-center space-x-2 bg-charcoal-dark/3 dark:bg-white/4 px-3 py-2 rounded-lg border border-charcoal-dark/5 dark:border-white/5 justify-center mt-4">
              <span className="w-2 h-2 rounded-full bg-accent-green animate-pulse"></span>
              <span className="text-xs font-mono text-charcoal-muted">
                Open to internships & junior dev roles
              </span>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}