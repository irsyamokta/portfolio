import { useState, type FormEvent } from "react";
import { motion } from "motion/react";
import { Mail, Github, Linkedin, MapPin, ArrowUpRight, Send } from "lucide-react";
import { toast } from "sonner";
import ReCAPTCHA from "react-google-recaptcha";
import { fadeUp } from "../../lib/portfolio-utils";
import CircuitBackground from "./CircuitBackground";

export default function Contact() {
  const [sending, setSending] = useState(false);
  const [captchaValid, setCaptchaValid] = useState(false);

  const onSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!captchaValid) {
      toast.error("Mohon verifikasi captcha terlebih dahulu.");
      return;
    }
    setSending(true);
    setTimeout(() => {
      setSending(false);
      toast.success("Message sent", {
        description: "Thanks for reaching out — I'll reply within 48 hours.",
      });
      (e.target as HTMLFormElement).reset();
    }, 700);
  };

  return (
    <section id="contact" className="relative overflow-hidden py-24 lg:py-40">
      <div className="absolute inset-0 pointer-events-none">
        <CircuitBackground position="bottom" />
      </div>
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10 text-center">
        
        {/* Massive Centered Heading */}
        <motion.h2
          {...fadeUp}
          className="text-display text-5xl sm:text-6xl md:text-7xl lg:text-[5.5rem] leading-[1.1] text-foreground tracking-tight"
        >
          Let's build{" "}
          <span className="italic text-muted-foreground">
            something useful.
          </span>
        </motion.h2>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-8 mx-auto max-w-2xl text-base sm:text-lg text-muted-foreground leading-relaxed"
        >
          I'm open to fullstack, ERP, and product engineering roles — as well as
          focused freelance projects. If your team needs someone who can own a
          feature from database to UI, I'd love to hear from you.
        </motion.p>

        {/* Minimalist Social Links */}
        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mt-12 flex flex-wrap justify-center gap-3 sm:gap-4"
        >
          {[
            { icon: Mail, label: "irsyamokta@gmail.com", href: "mailto:irsyamokta@gmail.com" },
            { icon: Github, label: "GitHub", href: "https://github.com/irsyamokta" },
            { icon: Linkedin, label: "LinkedIn", href: "https://www.linkedin.com/in/irsyamokta/" },
            { icon: MapPin, label: "Tegal", href: "#" },
          ].map((c) => (
            <a
              key={c.label}
              href={c.href}
              className="group flex items-center gap-2.5 rounded-full border border-border/40 bg-surface/30 px-5 py-2.5 transition-all hover:bg-surface hover:border-border/80"
            >
              <c.icon className="h-4 w-4 text-muted-foreground group-hover:text-primary transition-colors" />
              <span className="text-sm font-medium text-foreground/80 group-hover:text-foreground transition-colors">
                {c.label}
              </span>
              {c.label !== "Yogyakarta" && (
                <ArrowUpRight className="h-3.5 w-3.5 text-muted-foreground opacity-0 -ml-1 transition-all group-hover:opacity-100 group-hover:translate-x-1 group-hover:-translate-y-1" />
              )}
            </a>
          ))}
        </motion.div>

        {/* Minimalist Editorial Form */}
        <motion.form
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.3 }}
          onSubmit={onSubmit}
          className="mt-24 mx-auto max-w-2xl text-left"
        >
          <div className="text-mono text-xs text-primary mb-8 text-center uppercase tracking-widest">
            — Or send a direct message —
          </div>
          
          <div className="space-y-8 sm:space-y-10">
            <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 sm:gap-10">
              <div className="relative group">
                <input
                  required
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  className="peer block w-full appearance-none border-0 border-b border-border/60 bg-transparent px-0 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-0 transition-colors"
                />
                <label
                  htmlFor="name"
                  className="pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-muted-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Your name
                </label>
              </div>

              <div className="relative group">
                <input
                  required
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  className="peer block w-full appearance-none border-0 border-b border-border/60 bg-transparent px-0 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-0 transition-colors"
                />
                <label
                  htmlFor="email"
                  className="pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-muted-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
                >
                  Email address
                </label>
              </div>
            </div>

            <div className="relative group">
              <textarea
                required
                name="message"
                id="message"
                rows={1}
                placeholder=" "
                className="peer block w-full appearance-none border-0 border-b border-border/60 bg-transparent px-0 py-3 text-base text-foreground focus:border-primary focus:outline-none focus:ring-0 transition-colors resize-none overflow-hidden"
                onInput={(e) => {
                  e.currentTarget.style.height = 'auto';
                  e.currentTarget.style.height = e.currentTarget.scrollHeight + 'px';
                }}
              />
              <label
                htmlFor="message"
                className="pointer-events-none absolute left-0 top-3 origin-[0] -translate-y-6 scale-75 transform text-sm text-muted-foreground duration-300 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 peer-focus:-translate-y-6 peer-focus:scale-75 peer-focus:text-primary"
              >
                Tell me about your project...
              </label>
            </div>

            <div className="pt-4 flex flex-col sm:flex-row items-center justify-between gap-6">
              <div className="flex-shrink-0 origin-left scale-90 sm:scale-100">
                <ReCAPTCHA
                  sitekey={import.meta.env.VITE_RECAPTCHA_SITE_KEY || "6LeIxAcTAAAAAJcZVRqyHh71UMIEGNQ_MXjiZKhI"}
                  onChange={(val) => setCaptchaValid(!!val)}
                  theme="dark"
                />
              </div>
              <button
                type="submit"
                disabled={sending || !captchaValid}
                className="group relative inline-flex h-12 items-center justify-center gap-2 overflow-hidden rounded-full bg-foreground px-8 font-medium text-background transition-all hover:bg-foreground/90 disabled:opacity-70 disabled:cursor-not-allowed w-full sm:w-auto"
              >
                <span className="relative z-10 flex items-center gap-2">
                  {sending ? "Sending..." : "Send message"}
                  {!sending && (
                    <Send className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  )}
                </span>
              </button>
            </div>
          </div>
        </motion.form>
      </div>
    </section>
  );
}
