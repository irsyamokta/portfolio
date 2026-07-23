import { useRef, useState } from "react";
import { motion } from "motion/react";
import { ArrowRight, ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import SectionHeader from "./SectionHeader";
import { PROJECTS, type Project } from "../../data/portfolio";
import CircuitBackground from "./CircuitBackground";

function DetailRow({ label, text }: { label: string; text: string }) {
  return (
    <div>
      <div className="text-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
        {label}
      </div>
      <p className="mt-2 text-sm text-foreground/90 leading-relaxed">{text}</p>
    </div>
  );
}

function ProjectCarousel({ previews }: { previews: string[] }) {
  const carouselRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const cardWidth = clientWidth * 0.7;
      const scrollToVal = direction === "left" 
        ? scrollLeft - cardWidth 
        : scrollLeft + cardWidth;
      carouselRef.current.scrollTo({ left: scrollToVal, behavior: "smooth" });
    }
  };

  return (
    <div className="relative mt-6 w-full group/carousel">
      <div 
        ref={carouselRef}
        className="flex gap-4 overflow-x-auto snap-x snap-mandatory scrollbar-none scroll-smooth rounded-2xl pb-2"
        style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {previews.map((img, idx) => (
          <div 
            key={idx} 
            className="min-w-[85%] sm:min-w-[70%] md:min-w-[60%] snap-start aspect-[1440/1024] overflow-hidden rounded-2xl border border-border/60 bg-surface/50 relative shadow-sm"
          >
            <img 
              src={img} 
              alt={`Preview ${idx + 1}`} 
              loading="lazy"
              decoding="async"
              width={1440}
              height={1024}
              className="w-full h-full object-cover"
            />
            <div className="absolute bottom-3 left-3 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full text-[10px] text-white/90 text-mono">
              0{idx + 1} / 0{previews.length}
            </div>
          </div>
        ))}
      </div>

      <div className="absolute top-1/2 -translate-y-1/2 left-2 right-2 flex justify-between pointer-events-none opacity-0 group-hover/carousel:opacity-100 transition-opacity duration-300">
        <button
          onClick={() => scroll("left")}
          className="h-10 w-10 rounded-full bg-background/80 hover:bg-background border border-border/60 flex items-center justify-center text-foreground hover:scale-105 transition-all shadow-md pointer-events-auto backdrop-blur-sm"
          aria-label="Previous image"
        >
          <ChevronLeft className="h-5 w-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="h-10 w-10 rounded-full bg-background/80 hover:bg-background border border-border/60 flex items-center justify-center text-foreground hover:scale-105 transition-all shadow-md pointer-events-auto backdrop-blur-sm"
          aria-label="Next image"
        >
          <ChevronRight className="h-5 w-5" />
        </button>
      </div>
    </div>
  );
}

function ProjectCard({ project, index }: { project: Project; index: number }) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
      className="h-full flex flex-col overflow-hidden rounded-3xl border border-border/60 bg-surface group"
    >
      <div className="relative aspect-[1440/1024] overflow-hidden">
        <div
          className={`absolute inset-0 bg-gradient-to-br ${project.accent} opacity-60 pointer-events-none z-10`}
        />
        <img
          src={project.image}
          alt={project.title}
          width={1440}
          height={1024}
          loading="lazy"
          decoding="async"
          className="relative w-full h-full object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-[1.05]"
        />
        <div className="pointer-events-none absolute inset-0 ring-1 ring-inset ring-white/5 z-20" />
      </div>

      <div className="flex flex-col flex-1 p-6 sm:p-8">
        <div className="flex items-center gap-2 mb-4">
          <span className="text-mono text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-sm">
            {project.n}
          </span>
          <span className="text-mono text-xs font-medium text-muted-foreground bg-surface-2 px-2 py-0.5 rounded-sm border border-border/50">
            {project.year}
          </span>
        </div>
        <h3 className="mt-4 text-display text-2xl sm:text-3xl text-foreground">
          {project.title}
        </h3>
        <p className="mt-3 text-sm text-muted-foreground leading-relaxed flex-1">
          {project.tagline}
        </p>

        <div className="mt-5 flex flex-wrap gap-2 mb-8">
          {project.stack.slice(0, 3).map((s) => (
            <Badge
              key={s}
              variant="outline"
              className="rounded-full border-border/70 bg-surface-2 px-3 py-1 text-xs font-normal text-muted-foreground"
            >
              {s}
            </Badge>
          ))}
          {project.stack.length > 3 && (
            <Badge
              variant="outline"
              className="rounded-full border-border/70 bg-surface-2 px-3 py-1 text-xs font-normal text-muted-foreground"
            >
              +{project.stack.length - 3}
            </Badge>
          )}
        </div>

        <Drawer>
          <DrawerTrigger asChild>
            <Button
              className="w-full sm:w-auto rounded-full bg-foreground text-background hover:bg-foreground/90 mt-auto group/btn"
            >
              Detail <ArrowRight className="ml-1.5 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
            </Button>
          </DrawerTrigger>
          <DrawerContent className="max-h-[90vh]">
            <div className="mx-auto w-full max-w-4xl overflow-y-auto custom-scrollbar p-6 sm:p-10">
              <DrawerHeader className="px-0 pt-0 text-left">
                <div className="flex items-center gap-2 mb-4">
                  <span className="text-mono text-xs font-medium text-primary bg-primary/10 px-2 py-0.5 rounded-sm">
                    {project.n}
                  </span>
                  <span className="text-mono text-xs font-medium text-muted-foreground bg-surface-2 px-2 py-0.5 rounded-sm border border-border/50">
                    {project.year}
                  </span>
                </div>
                <DrawerTitle className="text-display text-3xl sm:text-5xl text-foreground">{project.title}</DrawerTitle>
                <DrawerDescription className="text-base sm:text-lg mt-3 text-muted-foreground">
                  {project.description}
                </DrawerDescription>
                <ProjectCarousel previews={project.previews} />
              </DrawerHeader>

              <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                <div className="space-y-8">
                  <DetailRow label="Problem" text={project.problem} />
                  <DetailRow label="Solution" text={project.solution} />
                  {project.contributors && project.contributors.length > 0 && (
                    <div>
                      <div className="text-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
                        Contributors
                      </div>
                      <ul className="mt-3 space-y-2">
                        {project.contributors.map((c) => (
                          <li
                            key={c}
                            className="flex gap-3 text-sm text-foreground/90 leading-relaxed"
                          >
                            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                            {c}
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
                <div className="space-y-8">
                  <DetailRow label="Architecture" text={project.architecture} />
                  <div>
                    <div className="text-mono text-[11px] uppercase tracking-wider text-muted-foreground/70">
                      Main features
                    </div>
                    <ul className="mt-3 space-y-2">
                      {project.features.map((f) => (
                        <li
                          key={f}
                          className="flex gap-3 text-sm text-foreground/90 leading-relaxed"
                        >
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-primary" />
                          {f}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <DrawerFooter className="px-0 pb-0 mt-12 flex flex-row flex-wrap gap-3 sm:justify-start">
                {project.demo && (
                  <Button
                    asChild
                    className="rounded-full bg-primary text-primary-foreground hover:opacity-90"
                  >
                    <a href={project.demo} target="_blank" rel="noopener noreferrer">
                      Live Demo <ExternalLink className="ml-1.5 h-4 w-4" />
                    </a>
                  </Button>
                )}
                {project.github && (
                  <Button
                    asChild
                    variant="outline"
                    className="rounded-full border-border/70 bg-surface"
                  >
                    <a href={project.github} target="_blank" rel="noopener noreferrer">
                      <Github className="mr-1.5 h-4 w-4" /> Source Code
                    </a>
                  </Button>
                )}
                <DrawerClose asChild>
                  <Button variant="ghost" className="rounded-full sm:ml-auto">
                    Close
                  </Button>
                </DrawerClose>
              </DrawerFooter>
            </div>
          </DrawerContent>
        </Drawer>
      </div>
    </motion.article>
  );
}

export default function Projects() {
  const [activeIndex, setActiveIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = () => {
    if (containerRef.current) {
      const container = containerRef.current;
      const scrollPosition = container.scrollLeft;
      const itemWidth = container.clientWidth;
      const gap = 24; // gap-6
      const newIndex = Math.min(PROJECTS.length - 1, Math.max(0, Math.round(scrollPosition / (itemWidth + gap))));
      if (newIndex !== activeIndex) {
        setActiveIndex(newIndex);
      }
    }
  };

  const scrollTo = (index: number) => {
    if (containerRef.current) {
      const container = containerRef.current;
      const child = container.children[index] as HTMLElement;
      if (child) {
        container.scrollTo({
          left: child.offsetLeft,
          behavior: 'smooth'
        });
        setActiveIndex(index);
      }
    }
  };

  return (
    <section id="projects" className="relative overflow-hidden py-24 lg:py-32">
      <CircuitBackground position="right" />
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-10">
        <SectionHeader
          title={
            <>
              Projects, engineered
              <br />
              <span className="italic text-muted-foreground">
                for real users.
              </span>
            </>
          }
          intro="A closer look at systems I've built end-to-end — from backend architecture to the moments users touch."
        />

        <div 
          ref={containerRef}
          onScroll={handleScroll}
          className="mt-16 flex flex-nowrap md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 overflow-x-auto md:overflow-visible snap-x snap-mandatory md:snap-none scrollbar-none pt-4 pb-12 md:py-0 relative"
          style={{ scrollbarWidth: 'none', msOverflowStyle: 'none', WebkitOverflowScrolling: 'touch' }}
        >
          {PROJECTS.map((p, i) => (
            <div key={p.title} className="w-full shrink-0 snap-center md:w-auto md:shrink md:snap-align-none">
              <ProjectCard project={p} index={i} />
            </div>
          ))}
        </div>

        {/* Pagination Dots (Mobile Only) */}
        <div className="flex flex-col items-center justify-center mt-6 md:hidden">
          <div className="flex gap-2">
            {PROJECTS.map((_, i) => (
              <button
                key={i} 
                onClick={() => scrollTo(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i === activeIndex ? "w-6 bg-primary" : "w-2 bg-muted-foreground/30 hover:bg-muted-foreground/50"
                }`} 
              />
            ))}
          </div>
          <div className="text-muted-foreground text-sm mt-3 font-medium text-mono">
            {activeIndex + 1} / {PROJECTS.length}
          </div>
        </div>
      </div>
    </section>
  );
}
