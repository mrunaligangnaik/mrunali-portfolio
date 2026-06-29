import { useState, FormEvent } from "react";
import { motion, AnimatePresence } from "motion/react";
import { X, Send, Mail, Loader2, CheckCircle2 } from "lucide-react";
import emailjs from "@emailjs/browser";

interface HireMeModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmitSuccess: () => void;
}

export default function HireMeModal({ isOpen, onClose, onSubmitSuccess }: HireMeModalProps) {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [collaborationType, setCollaborationType] = useState<"Internship" | "Junior Developer" | "Contract">("Internship");
  const [message, setMessage] = useState("");
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !email.trim() || !message.trim()) {
      setErrorMessage("Please fill out all the fields.");
      return;
    }

    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const result = await emailjs.send(
        "service_xdebfeb",
        "template_5vwvmso",
        {
          from_name: fullName,
          from_email: email,
          collaboration_type: collaborationType,
          message: message,
        },
        "t1e1dSke11DztLDoI"
      );

      if (result.status === 200) {
        setIsSuccess(true);
        // Clear input fields
        setFullName("");
        setEmail("");
        setMessage("");
        setCollaborationType("Internship");

        // Let parent know
        onSubmitSuccess();

        // Close after 2.5s
        setTimeout(() => {
          setIsSuccess(false);
          onClose();
        }, 2500);
      } else {
        setErrorMessage("Failed to submit request. Please try again.");
      }
    } catch (err) {
      console.error("Submission error:", err);
      setErrorMessage("Failed to send. Please check your connection and try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          
          {/* Backdrop with elegant blur */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-charcoal-dark/40 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="bg-cream-base border border-charcoal-dark/10 rounded-3xl w-full max-w-xl p-6 sm:p-8 relative shadow-2xl z-10 max-h-[90vh] overflow-y-auto"
            id="hire-me-modal-card"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-xl bg-charcoal-dark/3 hover:bg-charcoal-dark/10 text-charcoal-muted hover:text-charcoal-dark transition-colors"
              aria-label="Close modal"
              id="modal-close-button"
            >
              <X className="w-5 h-5" />
            </button>

            {isSuccess ? (
              /* Success Presentation Screen */
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="py-12 flex flex-col items-center justify-center text-center space-y-4"
              >
                <div className="w-16 h-16 rounded-full bg-accent-green/10 text-accent-green flex items-center justify-center">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="font-serif text-3xl font-bold text-charcoal-dark">Brief sent!</h3>
                <p className="text-sm text-charcoal-muted max-w-sm leading-relaxed">
                  Thanks for sending your brief. It's landed straight in my inbox — I'll respond within 24 hours!
                </p>
                <div className="text-[10px] text-charcoal-muted font-mono animate-pulse pt-2">
                  Closing this window...
                </div>
              </motion.div>
            ) : (
              /* Core Entry Form */
              <div className="space-y-6">
                
                {/* Header */}
                <div className="space-y-2">
                  <span className="font-mono text-xs font-semibold tracking-widest text-terracotta-primary uppercase">
                    Let’s Connect
                  </span>
                  <h3 className="font-serif text-3xl font-bold text-charcoal-dark leading-none">
                    Send a brief.
                  </h3>
                  <p className="text-sm text-charcoal-muted font-light leading-relaxed">
                    Tell me about the role, project, and timeline — I'll review and get back to you within 24 hours.
                  </p>
                </div>

                {errorMessage && (
                  <div className="p-3.5 bg-red-500/10 border border-red-500/20 rounded-xl text-xs text-red-500 font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* Form Elements */}
                <form onSubmit={handleSubmit} className="space-y-5">
                  
                  {/* Grid Fields */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    
                    {/* Full Name input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-charcoal-muted uppercase">
                        Full Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        placeholder="Enter your full name"
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full bg-cream-card border border-charcoal-dark/15 focus:border-terracotta-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors text-charcoal-dark"
                        required
                      />
                    </div>

                    {/* Email address input */}
                    <div className="space-y-1.5">
                      <label className="text-xs font-mono font-medium text-charcoal-muted uppercase">
                        Email Address <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="email"
                        placeholder="abc@gmail.com"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full bg-cream-card border border-charcoal-dark/15 focus:border-terracotta-primary rounded-xl px-4 py-3 text-sm focus:outline-none transition-colors text-charcoal-dark"
                        required
                      />
                    </div>

                  </div>

                  {/* Collaboration Selection Pill Buttons */}
                  <div className="space-y-2">
                    <label className="text-xs font-mono font-medium text-charcoal-muted uppercase block">
                      Collaboration Type
                    </label>
                    <div className="grid grid-cols-3 gap-2 sm:gap-3">
                      {(["Internship", "Junior Developer", "Contract"] as const).map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => setCollaborationType(type)}
                          className={`py-2.5 sm:py-3 px-3 rounded-xl text-xs font-semibold text-center transition-all ${
                            collaborationType === type
                              ? "bg-terracotta-primary border border-terracotta-primary text-white font-bold shadow-sm"
                              : "bg-cream-card border border-charcoal-dark/15 text-charcoal-muted hover:bg-charcoal-dark/2"
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Detailed Message text area */}
                  <div className="space-y-1.5">
                    <label className="text-xs font-mono font-medium text-charcoal-muted uppercase block">
                      Detailed Message <span className="text-red-500">*</span>
                    </label>
                    <textarea
                      placeholder="Role description, tech stack, timeline details, or any other relevant information..."
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      rows={4}
                      className="w-full bg-cream-card border border-charcoal-dark/15 focus:border-terracotta-primary rounded-xl p-4 text-sm focus:outline-none transition-colors text-charcoal-dark resize-none leading-relaxed"
                      required
                    />
                  </div>

                  {/* Submitting Buttons */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#1E1B18] dark:bg-terracotta-primary hover:bg-[#1E1B18]/90 dark:hover:bg-terracotta-hover disabled:opacity-50 text-white font-medium py-4 rounded-xl text-sm transition-all shadow-md flex items-center justify-center space-x-2"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-4 h-4 animate-spin" />
                        <span>Sending your brief...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-1" />
                        <span>Send Request</span>
                      </>
                    )}
                  </button>

                  <div className="text-[10px] font-mono text-center text-charcoal-muted flex items-center justify-center space-x-1.5">
                    <Mail className="w-3 h-3 text-accent-green" />
                    <span>Sent directly to my inbox via EmailJS</span>
                  </div>

                </form>
              </div>
            )}
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}