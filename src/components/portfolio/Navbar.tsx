import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { ArrowRight, Menu, X, Sun, Moon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { NAV } from "../../data/portfolio";
import { useActiveSection, scrollTo } from "../../lib/portfolio-utils";
import { useTheme } from "../ThemeProvider";

export default function Navbar() {
  const active = useActiveSection();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background/70 backdrop-blur-xl border-b border-border/60"
          : "bg-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-10">
        <button
          onClick={() => scrollTo("home")}
          className="group flex items-center gap-2 text-sm font-medium tracking-tight"
        >
          <img
            src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
            alt="Logo"
            className="h-8 w-8 rounded-full object-cover"
          />
          <span className="hidden sm:block text-foreground text-sm">
            irsyamokta<span className="text-muted-foreground">/pratamaryd</span>
          </span>
        </button>

        <nav className="hidden lg:flex items-center gap-1 rounded-full border border-border/60 bg-surface/60 px-2 py-1.5 backdrop-blur">
          {NAV.map((n) => {
            const isActive = active === n.id;
            return (
              <button
                key={n.id}
                onClick={() => scrollTo(n.id)}
                className={`relative rounded-full px-3.5 py-1.5 text-sm transition-colors ${
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                {isActive && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-secondary"
                    transition={{ type: "spring", stiffness: 380, damping: 32 }}
                  />
                )}
                <span className="relative">{n.label}</span>
              </button>
            );
          })}
        </nav>

        <div className="hidden lg:flex items-center gap-2">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-surface/60 text-muted-foreground hover:text-foreground transition-colors mr-1"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <Button
            size="sm"
            onClick={() => scrollTo("contact")}
            className="rounded-full bg-foreground text-background hover:bg-foreground/90"
          >
            Get in touch <ArrowRight className="ml-1 h-3.5 w-3.5" />
          </Button>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-surface/60 text-muted-foreground hover:text-foreground transition-colors"
            aria-label="Toggle theme"
          >
            {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
          </button>
          <button
            className="grid h-10 w-10 place-items-center rounded-full border border-border/60 bg-surface/60"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {open && (
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="lg:hidden border-t border-border/60 bg-background/95 backdrop-blur-xl"
        >
          <div className="mx-auto max-w-7xl px-6 py-4 flex flex-col gap-1">
            {NAV.map((n) => (
              <button
                key={n.id}
                onClick={() => {
                  scrollTo(n.id);
                  setOpen(false);
                }}
                className={`text-left rounded-lg px-3 py-2.5 text-sm ${
                  active === n.id
                    ? "bg-secondary text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {n.label}
              </button>
            ))}
          </div>
        </motion.div>
      )}
    </header>
  );
}
