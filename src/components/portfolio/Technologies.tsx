import { motion } from "motion/react";
import StackIcon from "tech-stack-icons";
import { FaRobot } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { TECH } from "../../data/portfolio";
import CircuitBackground from "./CircuitBackground";
import logoOdoo from "@/assets/logo-odoo.webp";

const customBadgeIcons: Record<string, React.ReactNode> = {
  "Odoo Functional": <img src={logoOdoo} alt="Odoo" className="w-4 h-4 object-contain rounded" />,
  "Odoo Technical": <img src={logoOdoo} alt="Odoo" className="w-4 h-4 object-contain rounded" />,
  "Deep Learning": <FaRobot className="w-4 h-4" />,
  "Sentiment Analysis": <FaRobot className="w-4 h-4" />,
  "Supervised Learning": <FaRobot className="w-4 h-4" />,
};

const iconMap: Record<string, string> = {
  Express: "expressjs",
  Laravel: "laravel",
  "Node.js": "nodejs",
  PHP: "php",
  "Prisma ORM": "prisma",
  Python: "python",
  Railway: "railway",
  React: "react",
  "Shadcn UI": "shadcnui",
  Supabase: "supabase",
  "Tailwind CSS": "tailwindcss",
  TypeScript: "typescript",
  MySQL: "mysql",
  Netlify: "netlify",
  PostgreSQL: "postgresql",
  Docker: "docker",
  Figma: "figma",
  Git: "git",
  GitHub: "github",
  "Google Colab": "colab",
  n8n: "n8n",
  Postman: "postman",
  Vercel: "vercel",
  Vite: "vitejs",
};

export default function Technologies() {
  return (
    <section className="relative overflow-hidden py-16 lg:py-24 bg-surface/30">
      <CircuitBackground position="left" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          title="Technologies I work with"
          intro="A pragmatic stack picked for clarity, longevity, and real-world business fit."
        />

        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TECH.map((t, i) => (
            <motion.div
              key={t.group}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false, margin: "-60px" }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="rounded-3xl border border-border/60 bg-surface p-6"
            >
              <div className="flex items-center justify-between">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-surface-2 text-primary">
                  <t.icon className="h-4 w-4" />
                </span>
              </div>
              <h3 className="mt-5 text-base font-medium text-foreground">
                {t.group}
              </h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {t.items.map((item) => {
                  const iconName = iconMap[item];
                  return (
                    <span
                      key={item}
                      className="flex items-center gap-2 rounded-full border border-border/60 bg-surface-2 px-3 py-1.5 text-xs font-medium text-foreground/80 hover:border-primary/30 transition-colors"
                    >
                      {customBadgeIcons[item] ? (
                        customBadgeIcons[item]
                      ) : iconName ? (
                        <StackIcon name={iconName as any} className="w-4 h-4" />
                      ) : null}
                      {item}
                    </span>
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
