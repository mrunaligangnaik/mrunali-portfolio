import { useState } from "react";
import { Mail, Linkedin, Github, Copy, Check, Send, ArrowUpRight } from "lucide-react";

interface ContactProps {
  onOpenHireModal: () => void;
  refreshTrigger: boolean;
}

export default function Contact({ onOpenHireModal, refreshTrigger }: ContactProps) {
  const [copied, setCopied] = useState(false);

  const emailAddress = "mrunaligangnaik9833@gmail.com";
  const linkedinUrl = "https://www.linkedin.com/in/mrunaligangnaik/";
  const githubUrl = "https://github.com/mrunaligangnaik";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-32 px-6 md:px-12 scroll-mt-20">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Heading and Description */}
          <div className="lg:col-span-6 space-y-6">
            <span className="font-mono text-xs font-semibold tracking-widest text-terracotta-primary uppercase">
              CONTACT
            </span>
            <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-bold text-charcoal-dark leading-tight">
              Let's build <br className="hidden md:inline" />
              something <br />
              worth shipping.
            </h2>
            <p className="text-base sm:text-lg text-charcoal-muted font-light leading-relaxed max-w-md font-sans">
              Available for internships and junior full-stack roles. Send a quick brief and I'll reply within 24 hours. Let's make an impact together.
            </p>

            <div className="flex flex-wrap items-center gap-4 pt-4">
              <button
                onClick={onOpenHireModal}
                className="bg-terracotta-primary hover:bg-terracotta-hover text-white px-6.5 py-3.5 rounded-full text-sm font-medium transition-all duration-200 hover:-translate-y-0.5 shadow-sm inline-flex items-center space-x-2"
                id="contact-cta-brief"
              >
                <span>Send a brief</span>
                <Send className="w-4 h-4" />
              </button>

              <button
                onClick={handleCopyEmail}
                className="bg-cream-card hover:bg-charcoal-dark/5 text-charcoal-dark border border-charcoal-dark/15 px-6.5 py-3.5 rounded-full text-sm font-medium transition-all duration-200 inline-flex items-center space-x-2 relative"
                id="contact-cta-copy"
              >
                {copied ? (
                  <>
                    <Check className="w-4 h-4 text-accent-green" />
                    <span className="text-accent-green">Email copied!</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-4 h-4" />
                    <span>Email directly</span>
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Right Column: Dynamic Contact Cards */}
          <div className="lg:col-span-6 space-y-4">
            
            {/* Email Card */}
            <div className="p-6 rounded-3xl bg-cream-card border border-charcoal-dark/5 flex items-center justify-between group hover:border-terracotta-primary/10 transition-all duration-300">
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-terracotta-primary/4 text-terracotta-primary flex items-center justify-center">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-charcoal-muted uppercase">EMAIL ME</div>
                  <a href={`mailto:${emailAddress}`} className="text-sm sm:text-base font-semibold text-charcoal-dark hover:text-terracotta-primary transition-colors select-all">
                    {emailAddress}
                  </a>
                </div>
              </div>
              <button
                onClick={handleCopyEmail}
                className="p-2.5 rounded-xl bg-charcoal-dark/3 hover:bg-terracotta-primary/6 text-charcoal-muted hover:text-terracotta-primary transition-colors"
                title="Copy to clipboard"
              >
                {copied ? <Check className="w-4 h-4 text-accent-green" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>

            {/* LinkedIn Card */}
            <a
              href={linkedinUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-cream-card border border-charcoal-dark/5 flex items-center justify-between group hover:border-terracotta-primary/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-terracotta-primary/4 text-terracotta-primary flex items-center justify-center">
                  <Linkedin className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-charcoal-muted uppercase">CONNECT</div>
                  <div className="text-sm sm:text-base font-semibold text-charcoal-dark group-hover:text-terracotta-primary transition-colors">
                    LinkedIn — Professional Network
                  </div>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-charcoal-dark/3 group-hover:bg-terracotta-primary group-hover:text-white text-charcoal-muted transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

            {/* GitHub Card */}
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="p-6 rounded-3xl bg-cream-card border border-charcoal-dark/5 flex items-center justify-between group hover:border-terracotta-primary/10 transition-all duration-300"
            >
              <div className="flex items-center space-x-4">
                <div className="w-12 h-12 rounded-2xl bg-terracotta-primary/4 text-terracotta-primary flex items-center justify-center">
                  <Github className="w-5 h-5" />
                </div>
                <div>
                  <div className="text-[10px] font-mono tracking-wider text-charcoal-muted uppercase">SOURCE CODE</div>
                  <div className="text-sm sm:text-base font-semibold text-charcoal-dark group-hover:text-terracotta-primary transition-colors">
                    GitHub — Repositories & Contributions
                  </div>
                </div>
              </div>
              <div className="p-2.5 rounded-xl bg-charcoal-dark/3 group-hover:bg-terracotta-primary group-hover:text-white text-charcoal-muted transition-all duration-300">
                <ArrowUpRight className="w-4 h-4" />
              </div>
            </a>

          </div>
        </div>
      </div>
    </section>
  );
}