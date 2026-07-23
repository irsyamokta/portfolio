import { Github, Linkedin, Mail } from "lucide-react";
import { NAV } from "../../data/portfolio";
import { scrollTo } from "../../lib/portfolio-utils";
import { useTheme } from "../ThemeProvider";

export default function Footer() {
  const { theme } = useTheme();
  return (
    <footer className="border-t border-border/60 py-10">
      <div className="mx-auto max-w-7xl px-6 lg:px-10 flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <img
            src={theme === "dark" ? "/logo-dark.svg" : "/logo.svg"}
            alt="Logo"
            className="h-7 w-7 rounded-full object-cover"
          />
          <span>© {new Date().getFullYear()} Irsyam Okta Pratama Riyadi. Built with full love.</span>
        </div>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {NAV.map((n) => (
            <button
              key={n.id}
              onClick={() => scrollTo(n.id)}
              className="hover:text-foreground transition-colors"
            >
              {n.label}
            </button>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <a
            href="https://github.com/irsyamokta"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-surface text-muted-foreground hover:text-foreground"
            aria-label="GitHub"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href="https://www.linkedin.com/in/irsyamokta/"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-surface text-muted-foreground hover:text-foreground"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href="mailto:irsyamokta@gmail.com"
            className="grid h-9 w-9 place-items-center rounded-full border border-border/60 bg-surface text-muted-foreground hover:text-foreground"
            aria-label="Email"
          >
            <Mail className="h-4 w-4" />
          </a>
        </div>
      </div>
    </footer>
  );
}
