import { useState, useEffect } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { Download, Github, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp } from "../../lib/portfolio-utils";

const WORDS = ["Irsyam Okta Pratama Riyadi", "Fullstack Developer", "Always Learning"];
const TYPING_SPEED = 70;
const DELETING_SPEED = 40;
const PAUSE_MS = 1800;

function useTypewriter(words: string[]) {
  const [index, setIndex] = useState(0);
  const [display, setDisplay] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index % words.length];
    let timeout: ReturnType<typeof setTimeout>;

    if (!deleting && display.length < current.length) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length + 1)), TYPING_SPEED);
    } else if (!deleting && display.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), PAUSE_MS);
    } else if (deleting && display.length > 0) {
      timeout = setTimeout(() => setDisplay(current.slice(0, display.length - 1)), DELETING_SPEED);
    } else if (deleting && display.length === 0) {
      setDeleting(false);
      setIndex((i) => (i + 1) % words.length);
    }

    return () => clearTimeout(timeout);
  }, [display, deleting, index, words]);

  return display;
}

function TypewriterText() {
  const text = useTypewriter(WORDS);
  return (
    <span>
      {text}
      <span className="ml-1 inline-block w-[3px] h-[0.85em] bg-primary align-middle animate-[blink_1s_step-end_infinite]" />
    </span>
  );
}

export default function Hero() {
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({
      x: e.clientX - rect.left,
      y: e.clientY - rect.top,
    });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      className="relative overflow-hidden pt-36 pb-28 lg:pt-48 lg:pb-40"
    >
      {/* 1. Circuit Board Pattern (Adaptive to Light/Dark mode) */}
      <div 
        className="absolute inset-0 pointer-events-none opacity-40 dark:opacity-20 text-foreground overflow-hidden transition-all duration-500"
        style={{ 
          WebkitMaskImage: isHovered 
            ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, black 15%, rgba(0,0,0,0.25) 80%)`
            : "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25))",
          maskImage: isHovered 
            ? `radial-gradient(600px circle at ${mousePos.x}px ${mousePos.y}px, black 15%, rgba(0,0,0,0.25) 80%)`
            : "linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25))",
        }}
      >
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="circuit-board" width="100" height="100" patternUnits="userSpaceOnUse" patternTransform="scale(3)">
              <g fill="none" stroke="currentColor" strokeWidth="0.33" strokeLinecap="round" strokeLinejoin="round">
                {/* Horizontal traces */}
                <path d="M0 20 h20 l20 20 h40 l20 -20" />
                <circle cx="20" cy="20" r="0.8" fill="currentColor" />
                <circle cx="40" cy="40" r="0.8" fill="currentColor" />
                <circle cx="80" cy="40" r="0.8" fill="currentColor" />

                <path d="M0 80 h30 l20 -20 h30 l20 20" />
                <circle cx="30" cy="80" r="0.8" fill="currentColor" />
                <circle cx="50" cy="60" r="0.8" fill="currentColor" />
                <circle cx="80" cy="60" r="0.8" fill="currentColor" />

                {/* Vertical traces */}
                <path d="M25 0 v25 l15 15 v40 l-15 15 v5" />
                <circle cx="25" cy="25" r="0.8" fill="currentColor" />
                <circle cx="40" cy="40" r="0.8" fill="currentColor" />
                <circle cx="40" cy="80" r="0.8" fill="currentColor" />

                <path d="M75 0 v20 l-15 15 v20 l15 15 v30" />
                <circle cx="75" cy="20" r="0.8" fill="currentColor" />
                <circle cx="60" cy="35" r="0.8" fill="currentColor" />
                <circle cx="60" cy="55" r="0.8" fill="currentColor" />
                <circle cx="75" cy="70" r="0.8" fill="currentColor" />
                
                {/* Micro traces */}
                <path d="M50 0 v10 h10 v-10" />
                <circle cx="50" cy="10" r="0.5" fill="currentColor" />
                <circle cx="60" cy="10" r="0.5" fill="currentColor" />

                <path d="M0 50 h10 l10 -10 h5" />
                <circle cx="10" cy="50" r="0.5" fill="currentColor" />
                <circle cx="25" cy="40" r="0.5" fill="currentColor" />

                <path d="M90 50 v20 h10" />
                <circle cx="90" cy="50" r="0.5" fill="currentColor" />
                <circle cx="90" cy="70" r="0.5" fill="currentColor" />
              </g>
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#circuit-board)" />
        </svg>
      </div>

      {/* 2. Top glow gradient (Layer 2) */}
      <div className="absolute inset-x-0 top-0 h-[520px] pointer-events-none bg-[radial-gradient(ellipse_at_top,color-mix(in_oklab,var(--color-primary)_15%,transparent),transparent_60%)]" />
      
      {/* 3. Bottom fade gradient (Layer 3) */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-transparent via-background/60 to-background" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10 text-center">
        <motion.h1
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.05 }}
          className="text-display text-5xl sm:text-6xl md:text-6xl lg:text-[82px] text-foreground min-h-[1.1em]"
        >
          <TypewriterText />
          <span className="text-primary">.</span>
        </motion.h1>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.1 }}
          className="mt-8 mx-auto max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          Crafting end-to-end web applications with clean architecture,
          thoughtful UI, and reliable APIs. I care about software that's
          maintainable, fast, and actually solves the problem at hand.
        </motion.p>

        <motion.p
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.15 }}
          className="mt-3 mx-auto max-w-xl text-sm text-muted-foreground/70 leading-relaxed"
        >
          Fresh graduate in Information Systems — fullstack development,
          ERP implementation, and practical AI integration.
        </motion.p>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.2 }}
          className="mt-10 flex flex-wrap items-center justify-center gap-3"
        >
          <Button
            size="lg"
            className="rounded-full border border-border/70"
            asChild
          >
            <a href="#" download>
              <Download className="mr-1.5 h-4 w-4" />
              Download CV
            </a>
          </Button>
          <a
            href="https://github.com/irsyamokta"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-surface/60 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/irsyamokta/"
            target="_blank"
            rel="noreferrer"
            className="grid h-11 w-11 place-items-center rounded-full border border-border/70 bg-surface/60 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
        </motion.div>

        <motion.div
          {...fadeUp}
          transition={{ ...fadeUp.transition, delay: 0.28 }}
          className="mt-16 flex justify-center gap-12 sm:gap-20"
        >
          {[
            { k: "6+", v: "The system ceated" },
            { k: "4", v: "Core domains" },
            { k: "2", v: "Years of Experience" },
          ].map((s) => (
            <div key={s.v} className="text-center">
              <div className="text-display text-3xl text-foreground">{s.k}</div>
              <div className="mt-1 text-xs text-muted-foreground">{s.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
