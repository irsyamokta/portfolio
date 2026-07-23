import { motion } from "motion/react";
import { FaRobot } from "react-icons/fa";
import SectionHeader from "./SectionHeader";
import { TECH } from "../../data/portfolio";
import CircuitBackground from "./CircuitBackground";
import logoOdoo from "@/assets/logo-odoo.webp";

// Import all SVG icons from assets
import expressIcon from "@/assets/icons/express.svg";
import laravelIcon from "@/assets/icons/laravel.svg";
import nodeIcon from "@/assets/icons/node.svg";
import phpIcon from "@/assets/icons/php.svg";
import prismaIcon from "@/assets/icons/prisma.svg";
import pythonIcon from "@/assets/icons/python.svg";
import railwayIcon from "@/assets/icons/railway.svg";
import reactIcon from "@/assets/icons/react.svg";
import shadcnuiIcon from "@/assets/icons/shadcnui.svg";
import supabaseIcon from "@/assets/icons/supabase.svg";
import tailwindcssIcon from "@/assets/icons/tailwindcss.svg";
import typescriptIcon from "@/assets/icons/typescript.svg";
import mysqlIcon from "@/assets/icons/mysql.svg";
import netlifyIcon from "@/assets/icons/netlify.svg";
import postgresqlIcon from "@/assets/icons/postgresql.svg";
import dockerIcon from "@/assets/icons/docker.svg";
import figmaIcon from "@/assets/icons/figma.svg";
import gitIcon from "@/assets/icons/git.svg";
import githubIcon from "@/assets/icons/github.svg";
import colabIcon from "@/assets/icons/colab.svg";
import n8nIcon from "@/assets/icons/n8n.svg";
import postmanIcon from "@/assets/icons/postman.svg";
import vercelIcon from "@/assets/icons/vercel.svg";
import viteIcon from "@/assets/icons/vite.svg";

const customBadgeIcons: Record<string, React.ReactNode> = {
  "Odoo Functional": <img src={logoOdoo} alt="Odoo" className="w-4 h-4 object-contain rounded" />,
  "Odoo Technical": <img src={logoOdoo} alt="Odoo" className="w-4 h-4 object-contain rounded" />,
  "Deep Learning": <FaRobot className="w-4 h-4" />,
  "Sentiment Analysis": <FaRobot className="w-4 h-4" />,
  "Supervised Learning": <FaRobot className="w-4 h-4" />,
};

const iconMap: Record<string, string> = {
  Express: expressIcon,
  Laravel: laravelIcon,
  "Node.js": nodeIcon,
  PHP: phpIcon,
  "Prisma ORM": prismaIcon,
  Python: pythonIcon,
  Railway: railwayIcon,
  React: reactIcon,
  "Shadcn UI": shadcnuiIcon,
  Supabase: supabaseIcon,
  "Tailwind CSS": tailwindcssIcon,
  TypeScript: typescriptIcon,
  MySQL: mysqlIcon,
  Netlify: netlifyIcon,
  PostgreSQL: postgresqlIcon,
  Docker: dockerIcon,
  Figma: figmaIcon,
  Git: gitIcon,
  GitHub: githubIcon,
  "Google Colab": colabIcon,
  n8n: n8nIcon,
  Postman: postmanIcon,
  Vercel: vercelIcon,
  Vite: viteIcon,
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
              viewport={{ once: true, margin: "-60px" }}
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
                        <img src={iconName} alt={item} className="w-4 h-4 object-contain" />
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
