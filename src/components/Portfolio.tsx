import { lazy, Suspense } from "react";
import Navbar from "./portfolio/Navbar";
import Hero from "./portfolio/Hero";

const About = lazy(() => import("./portfolio/About"));
const Projects = lazy(() => import("./portfolio/Projects"));
const Technologies = lazy(() => import("./portfolio/Technologies"));
const Experience = lazy(() => import("./portfolio/Experience"));
const Workflow = lazy(() => import("./portfolio/Workflow"));
const Contact = lazy(() => import("./portfolio/Contact"));
const Footer = lazy(() => import("./portfolio/Footer"));

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="hairline" />
        </div>
        
        <Suspense fallback={<div className="h-32" />}>
          <About />
          <Projects />
          <Technologies />
          <Experience />
          <Workflow />
          <Contact />
        </Suspense>
      </main>
      
      <Suspense fallback={null}>
        <Footer />
      </Suspense>
    </div>
  );
}
