import { motion } from "motion/react";
import { WORKFLOW } from "../../data/portfolio";
import CircuitBackground from "./CircuitBackground";
import SectionHeader from "./SectionHeader";

/* ---------- mini technical previews per step ---------- */
function SchemaPreview() {
  return (
    <div className="mt-4 rounded-lg border border-border/50 bg-background/60 p-3 font-mono text-[10px] leading-relaxed text-muted-foreground/80 overflow-hidden">
      <span className="text-emerald-500/90">CREATE TABLE</span>{" "}
      <span className="text-sky-400/90">users</span> {"("}
      <br />
      {"  "}<span className="text-amber-400/80">id</span>{" "}
      <span className="text-violet-400/80">BIGINT PRIMARY KEY</span>,
      <br />
      {"  "}<span className="text-amber-400/80">email</span>{" "}
      <span className="text-violet-400/80">VARCHAR(255) UNIQUE</span>,
      <br />
      {"  "}<span className="text-amber-400/80">created_at</span>{" "}
      <span className="text-violet-400/80">TIMESTAMP</span>
      <br />
      {");"}
    </div>
  );
}

function ApiPreview() {
  const routes = [
    { method: "GET", path: "/api/users" },
    { method: "POST", path: "/api/auth/login" },
    { method: "PUT", path: "/api/users/:id" },
  ];
  return (
    <div className="mt-4 rounded-lg border border-border/50 bg-background/60 divide-y divide-border/40 overflow-hidden font-mono text-[10px]">
      {routes.map((r) => (
        <div key={r.path} className="flex items-center gap-3 px-3 py-2">
          <span
            className={`w-10 text-center font-bold ${
              r.method === "GET"
                ? "text-emerald-500/90"
                : r.method === "POST"
                ? "text-sky-400/90"
                : "text-amber-400/90"
            }`}
          >
            {r.method}
          </span>
          <span className="text-muted-foreground/80">{r.path}</span>
          <span className="ml-auto text-emerald-500/60">200</span>
        </div>
      ))}
    </div>
  );
}

function ComponentPreview() {
  return (
    <div className="mt-4 rounded-lg border border-border/50 bg-background/60 p-3 font-mono text-[10px] leading-relaxed text-muted-foreground/80 overflow-hidden">
      <span className="text-muted-foreground/40">{"// "}</span>
      <span className="text-muted-foreground/60">component tree</span>
      <br />
      <span className="text-sky-400/90">{"<App>"}</span>
      <br />
      {"  "}<span className="text-violet-400/80">{"<Navbar />"}</span>
      <br />
      {"  "}<span className="text-violet-400/80">{"<Dashboard>"}</span>
      <br />
      {"    "}<span className="text-amber-400/80">{"<DataTable />"}</span>
      <br />
      {"    "}<span className="text-amber-400/80">{"<Chart />"}</span>
      <br />
      {"  "}<span className="text-violet-400/80">{"</Dashboard>"}</span>
      <br />
      <span className="text-sky-400/90">{"</App>"}</span>
    </div>
  );
}

function DeployPreview() {
  const tracks = [
    {
      label: "ghcr.io/user/app:latest",
      tag: "BUILD",
      tagColor: "text-violet-400/80",
      steps: ["docker build", "tag → ghcr.io", "push image"],
    },
    {
      label: "Cloud Run · Auto-scale",
      tag: "CLOUD",
      tagColor: "text-sky-400/80",
      steps: ["pull image", "gcloud run deploy", "health check ✓"],
    },
    {
      label: "VPS · Ubuntu + Nginx",
      tag: "VPS",
      tagColor: "text-amber-400/80",
      steps: ["ssh + deploy.sh", "docker-compose up", "nginx reload"],
    },
    {
      label: "Shared Hosting · cPanel",
      tag: "HOST",
      tagColor: "text-emerald-400/80",
      steps: ["build artifact", "ftp upload", "env configure"],
    },
  ];
  return (
    <div className="mt-4 rounded-lg border border-border/50 bg-background/60 divide-y divide-border/30 overflow-hidden font-mono text-[10px]">
      {tracks.map((t) => (
        <div key={t.label} className="px-3 py-2">
          <div className="flex items-center gap-2 mb-1.5">
            <span className={`font-bold ${t.tagColor}`}>[{t.tag}]</span>
            <span className="text-muted-foreground/70 truncate">{t.label}</span>
          </div>
          <div className="flex items-center gap-1 flex-wrap text-muted-foreground/50">
            {t.steps.map((s, i) => (
              <span key={s} className="flex items-center gap-1">
                {i > 0 && <span className="text-border/50">→</span>}
                <span>{s}</span>
              </span>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}


const PREVIEWS = [SchemaPreview, ApiPreview, ComponentPreview, DeployPreview];

/* ---------- bento layout config ---------- */
const bentoClasses = [
  "lg:col-span-2",   // step 01 — wide
  "lg:col-span-1",   // step 02 — normal
  "lg:col-span-1",   // step 03 — normal
  "lg:col-span-2",   // step 04 — wide
];

export default function Workflow() {
  return (
    <section
      id="workflow"
      className="relative overflow-hidden py-24 lg:py-32"
    >
      <CircuitBackground position="left" />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:px-10">
        <SectionHeader
          title={
            <>
              How I build,
              <br />
              <span className="italic text-muted-foreground">step by step.</span>
            </>
          }
          intro="From schema to deployment — every project follows a deliberate, repeatable process that keeps code clean and deliveries predictable."
        />

        {/* Bento grid */}
        <div className="mt-16 grid grid-cols-1 lg:grid-cols-3 gap-4">
          {WORKFLOW.map((w, idx) => {
            const Icon = w.icon;
            const Preview = PREVIEWS[idx];
            return (
              <motion.div
                key={w.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: false, margin: "-60px" }}
                transition={{
                  duration: 0.55,
                  delay: idx * 0.07,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className={`group relative flex flex-col rounded-3xl border border-border/60 bg-surface/50 p-6 overflow-hidden transition-all duration-300 hover:border-primary/30 hover:bg-surface hover:shadow-md ${bentoClasses[idx]}`}
              >
                {/* Header row */}
                <div className="relative flex items-start justify-between gap-3 z-10">
                  <div>
                    <span className="text-mono text-[10px] uppercase tracking-widest text-primary block mb-2">
                      Phase {w.step}
                    </span>
                    <h3 className="text-base font-semibold text-foreground leading-snug">
                      {w.title}
                    </h3>
                    <p className="text-xs text-muted-foreground/70 mt-0.5">
                      {w.sub}
                    </p>
                  </div>
                  <div className="shrink-0 grid h-10 w-10 place-items-center rounded-xl bg-surface-2 border border-border/50 text-muted-foreground group-hover:text-primary group-hover:border-primary/30 transition-all duration-300">
                    <Icon className="h-4 w-4" />
                  </div>
                </div>

                {/* Description */}
                <p className="relative z-10 mt-4 text-sm text-muted-foreground leading-relaxed">
                  {w.desc}
                </p>

                {/* Technical mini preview */}
                <div className="relative z-10">
                  <Preview />
                </div>

                {/* Deliverable footer */}
                <div className="relative z-10 mt-5 pt-4 border-t border-border/40 flex items-center gap-2 flex-wrap">
                  <span className="text-mono text-[9px] uppercase tracking-widest text-muted-foreground/50">
                    Output ·
                  </span>
                  <span className="text-mono text-[10px] text-foreground/70">
                    {w.deliverable}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
