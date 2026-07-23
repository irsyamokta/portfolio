import { motion } from "motion/react";
import SectionHeader from "./SectionHeader";
import { HIGHLIGHTS } from "../../data/portfolio";

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden py-24 lg:py-32">
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          title={
            <>
              I build products that work
              <br />
              <span className="italic text-muted-foreground">
                end to end.
              </span>
            </>
          }
          intro="Fresh graduate in Information Systems, passionate about fullstack engineering. I've shipped complete web applications — from database design and APIs to user interfaces — for clinics, education, marketplaces, and local government, with a growing focus on ERP, AI, and scalable architecture."
        />

        <div className="mt-16 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {HIGHLIGHTS.map((h, i) => (
            <motion.div
              key={h.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.06, ease: [0.22, 1, 0.36, 1] }}
              className="group relative overflow-hidden rounded-3xl border border-border/60 bg-surface p-6 transition-colors hover:border-primary/40"
            >
              {/* Expanding Circuit Hover Effect */}
              <div className="absolute inset-0 pointer-events-none transition-all duration-1000 ease-in-out [clip-path:circle(0%_at_100%_0%)] group-hover:[clip-path:circle(150%_at_100%_0%)]">
                <svg className="absolute -top-2 -right-2 w-36 h-36 opacity-40 dark:opacity-20 text-primary" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                  <g fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M100 20 h-20 l-20 20 h-40" />
                    <circle cx="80" cy="20" r="2" fill="currentColor" />
                    <circle cx="60" cy="40" r="2" fill="currentColor" />
                    <circle cx="20" cy="40" r="2" fill="currentColor" />
                    
                    <path d="M80 0 v20 l-20 20 v30" />
                    <circle cx="60" cy="70" r="2" fill="currentColor" />
                    
                    <path d="M100 50 h-10 l-20 -20" />
                    <circle cx="90" cy="50" r="2" fill="currentColor" />
                    <circle cx="70" cy="30" r="2" fill="currentColor" />
                    
                    <path d="M100 80 h-20 l-10 -10 v-10" />
                    <circle cx="80" cy="80" r="2" fill="currentColor" />
                    <circle cx="70" cy="70" r="2" fill="currentColor" />

                    {/* Additional traces for higher density */}
                    <path d="M100 35 h-15 l-15 15 v20" />
                    <circle cx="85" cy="35" r="2" fill="currentColor" />
                    <circle cx="70" cy="50" r="2" fill="currentColor" />
                    <circle cx="70" cy="70" r="2" fill="currentColor" />

                    <path d="M60 0 v10 l-10 10 h-20" />
                    <circle cx="60" cy="10" r="2" fill="currentColor" />
                    <circle cx="50" cy="20" r="2" fill="currentColor" />
                    <circle cx="30" cy="20" r="2" fill="currentColor" />

                    <path d="M100 95 h-10 l-15 -15 h-15" />
                    <circle cx="90" cy="95" r="2" fill="currentColor" />
                    <circle cx="75" cy="80" r="2" fill="currentColor" />
                    <circle cx="60" cy="80" r="2" fill="currentColor" />
                  </g>
                </svg>
              </div>

              <div className="relative z-10">
                <div className="flex items-center justify-between">
                  <span className="grid h-11 w-11 place-items-center rounded-2xl bg-surface-2 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors duration-500">
                    <h.icon className="h-5 w-5" />
                  </span>
                </div>
                <h3 className="mt-6 text-lg font-medium text-foreground">
                  {h.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                  {h.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
