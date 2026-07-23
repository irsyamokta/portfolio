import { motion } from "motion/react";
import { ArrowUpRight } from "lucide-react";
import SectionHeader from "./SectionHeader";
import { CERTIFICATES } from "../../data/portfolio";

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 lg:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          title="Continuous learning"
          intro="A selection of certifications from courses and programs I've completed."
        />

        <div className="mt-14 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {CERTIFICATES.map((c, i) => (
            <motion.div
              key={c.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: (i % 3) * 0.05 }}
              className="group overflow-hidden rounded-3xl border border-border/60 bg-surface"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,color-mix(in_oklab,var(--color-primary)_20%,transparent),transparent_60%)]" />
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-display text-6xl text-foreground/10">
                    {String(i + 1).padStart(2, "0")}
                  </div>
                </div>
                <div className="absolute inset-x-0 bottom-0 h-px bg-border" />
              </div>
              <div className="p-5">
                <h3 className="text-base font-medium text-foreground">
                  {c.title}
                </h3>
                <div className="mt-1 flex items-center justify-between text-xs text-muted-foreground">
                  <span>{c.issuer}</span>
                  <span className="text-mono">{c.date}</span>
                </div>
                <button className="mt-4 inline-flex items-center gap-1 text-xs text-primary hover:gap-2 transition-all">
                  View certificate <ArrowUpRight className="h-3.5 w-3.5" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
