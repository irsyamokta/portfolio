import Navbar from "./portfolio/Navbar";
import Hero from "./portfolio/Hero";
import About from "./portfolio/About";
import Projects from "./portfolio/Projects";
import Technologies from "./portfolio/Technologies";
import Experience from "./portfolio/Experience";
import Workflow from "./portfolio/Workflow";
import Contact from "./portfolio/Contact";
import Footer from "./portfolio/Footer";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />
      <main>
        <Hero />
        <div className="mx-auto max-w-7xl px-6 lg:px-10">
          <div className="hairline" />
        </div>
        <About />
        <Projects />
        <Technologies />
        <Experience />
        <Workflow />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
