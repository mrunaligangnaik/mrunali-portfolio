import { motion, AnimatePresence } from "motion/react";
import { X } from "lucide-react";
import { useEffect } from "react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  // Lock body scroll when modal is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-200 flex items-center justify-center p-4">

          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-dark/60 backdrop-blur-md"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="relative z-10 w-full max-w-3xl max-h-[90vh] flex flex-col bg-cream-base border border-charcoal-dark/10 rounded-3xl shadow-2xl overflow-hidden"
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-charcoal-dark/6 shrink-0">
              <div>
                <p className="font-mono text-[10px] tracking-widest text-terracotta-primary uppercase font-semibold">Resume Preview</p>
                <h3 className="font-serif text-xl font-bold text-charcoal-dark leading-tight">Mrunali Satish Gangnaik</h3>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-xl bg-charcoal-dark/4 hover:bg-charcoal-dark/10 text-charcoal-muted hover:text-charcoal-dark transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Resume Image — Scrollable inside modal only */}
            <div className="overflow-y-auto flex-1 p-4 md:p-6 bg-charcoal-dark/2">
              <img
                src="/resume-preview.png"
                alt="Mrunali Gangnaik Resume"
                className="w-full rounded-xl shadow-md border border-charcoal-dark/6"
              />
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}