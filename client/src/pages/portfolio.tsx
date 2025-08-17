import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Certifications from "@/components/certifications";
import Contact from "@/components/contact";
import Footer from "@/components/footer";

export default function Portfolio() {
  return (
    <div className="bg-dark-bg text-slate-100 font-sans overflow-x-hidden">
      <Navigation />
      <Hero />
      <About />
      <Projects />
      <Skills />
      <Education />
      <Experience />
      <Certifications />
      <Contact />
      <Footer />
    </div>
  );
}
