import { Navigation } from "@/components/navigation";
import { HeroSection } from "@/components/hero-section";
import { AboutSection } from "@/components/about-section";
import { ExperienceSection } from "@/components/experience-section";
import { ProjectsSection } from "@/components/projects-section";
import { SkillsSection } from "@/components/skills-section";
import { ContactSection } from "@/components/contact-section";
import { AIBackground } from "@/components/ai-background";
import { ScrollToTop } from "@/components/scroll-to-top";

export default function Portfolio() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden">
      <AIBackground />
      <Navigation />
      <main>
        <HeroSection />
        <AboutSection />
        <ExperienceSection />
        <ProjectsSection />
        <SkillsSection />
        <ContactSection />
      </main>
      <ScrollToTop />
    </div>
  );
}
