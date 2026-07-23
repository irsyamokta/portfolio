import { motion } from "motion/react";
import { MapPin } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { EXPERIENCE } from "../../data/portfolio";
import CircuitBackground from "./CircuitBackground";

export default function Experience() {
  return (
    <section id="experience" className="relative overflow-hidden py-24 lg:py-32">
      <CircuitBackground position="right" />
      <div className="relative z-10 mx-auto max-w-5xl px-6 lg:px-10">
        <SectionHeader
          title={
            <>
              A short but
              <br />
              <span className="italic text-muted-foreground">
                intentional path.
              </span>
            </>
          }
          intro="Professional experience spanning fullstack development, ERP implementation, and cloud computing — building real products for real users."
        />

        <div className="relative mt-20">
          {/* Center vertical line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-px -translate-x-1/2 bg-border/60 hidden lg:block" />
          {/* Mobile left line */}
          <div className="absolute left-5 top-0 bottom-0 w-px bg-border/60 lg:hidden" />

          <div className="space-y-12">
            {EXPERIENCE.map((e, i) => {
              const isLeft = i % 2 === 0;
              return (
                <motion.div
                  key={`${e.org}-${i}`}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: false, margin: "-60px" }}
                  transition={{ duration: 0.55, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  className="relative flex items-start lg:items-center lg:grid lg:grid-cols-[1fr_auto_1fr] lg:gap-0"
                >
                  {/* Left card (even items on desktop) */}
                  <div className={`hidden lg:block ${isLeft ? "pr-8" : ""}`}>
                    {isLeft && (
                      <div className="group rounded-2xl border border-border/60 bg-surface/50 p-5 text-right transition-colors hover:border-primary/30 hover:bg-surface">
                        <div className="text-mono text-xs text-primary mb-1">{e.period}</div>
                        <h3 className="text-base font-semibold text-foreground">{e.role}</h3>
                        <p className="text-sm font-medium text-primary/80">{e.org}</p>
                        {e.location && (
                          <div className="mt-1 flex items-center justify-end gap-1 text-xs text-muted-foreground">
                            <span>{e.location}</span>
                            <MapPin className="h-3 w-3 shrink-0" />
                          </div>
                        )}
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
                      </div>
                    )}
                  </div>

                  {/* Center logo (desktop) */}
                  <div className="hidden lg:flex items-center justify-center z-10 mx-4">
                    <div className="h-14 w-14 rounded-xl border border-border/60 bg-background shadow-md overflow-hidden shrink-0 ring-2 ring-background">
                      {e.logo ? (
                        <img
                          src={e.logo}
                          alt={e.org}
                          className="h-full w-full object-cover"
                        />
                      ) : (
                        <div className="h-full w-full bg-surface grid place-items-center">
                          <span className="h-3 w-3 rounded-full bg-primary" />
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Right card (odd items on desktop) */}
                  <div className={`hidden lg:block ${!isLeft ? "pl-8" : ""}`}>
                    {!isLeft && (
                      <div className="group rounded-2xl border border-border/60 bg-surface/50 p-5 text-left transition-colors hover:border-primary/30 hover:bg-surface">
                        <div className="text-mono text-xs text-primary mb-1">{e.period}</div>
                        <h3 className="text-base font-semibold text-foreground">{e.role}</h3>
                        <p className="text-sm font-medium text-primary/80">{e.org}</p>
                        {e.location && (
                          <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                            <MapPin className="h-3 w-3 shrink-0" />
                            <span>{e.location}</span>
                          </div>
                        )}
                        <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
                      </div>
                    )}
                  </div>

                  {/* Mobile layout */}
                  <div className="lg:hidden flex items-start gap-4 pl-12">
                    <div className="absolute left-0 top-0 h-10 w-10 rounded-xl border border-border/60 bg-background shadow-sm overflow-hidden shrink-0">
                      {e.logo ? (
                        <img src={e.logo} alt={e.org} className="h-full w-full object-cover" />
                      ) : (
                        <div className="h-full w-full bg-surface grid place-items-center">
                          <span className="h-2.5 w-2.5 rounded-full bg-primary" />
                        </div>
                      )}
                    </div>
                    <div className="group rounded-2xl border border-border/60 bg-surface/50 p-4 w-full transition-colors hover:border-primary/30 hover:bg-surface">
                      <div className="text-mono text-xs text-primary mb-1">{e.period}</div>
                      <h3 className="text-base font-semibold text-foreground">{e.role}</h3>
                      <p className="text-sm font-medium text-primary/80">{e.org}</p>
                      {e.location && (
                        <div className="mt-1 flex items-center gap-1 text-xs text-muted-foreground">
                          <MapPin className="h-3 w-3 shrink-0" />
                          <span>{e.location}</span>
                        </div>
                      )}
                      <p className="mt-3 text-sm text-muted-foreground leading-relaxed">{e.text}</p>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
