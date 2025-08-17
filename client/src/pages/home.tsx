import { useState, useEffect } from "react";
import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import About from "@/components/about";
import Projects from "@/components/projects";
import Skills from "@/components/skills";
import Education from "@/components/education";
import Experience from "@/components/experience";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transitions";
import BackToTop from "@/components/back-to-top";
import { 
  HeroSkeleton, 
  AboutSkeleton, 
  ProjectsGridSkeleton, 
  SkillsGridSkeleton, 
  EducationCardsSkeleton, 
  ExperienceTimelineSkeleton, 
  ContactFormSkeleton 
} from "@/components/loading-skeletons";
import { useSimulatedLoading } from "@/hooks/use-loading";

export default function HomePage() {
  const isLoading = useSimulatedLoading(1200);

  if (isLoading) {
    return (
      <PageTransition>
        <div className="bg-dark-bg text-slate-100 font-sans overflow-x-hidden">
          <Navigation />
          <HeroSkeleton />
          <AboutSkeleton />
          <section className="py-20 bg-dark-secondary">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="animate-pulse">
                  <div className="h-12 w-64 bg-slate-700/50 rounded mx-auto mb-4"></div>
                  <div className="h-1 w-24 bg-slate-700/50 rounded mx-auto mb-6"></div>
                  <div className="h-6 w-96 bg-slate-700/50 rounded mx-auto"></div>
                </div>
              </div>
              <ProjectsGridSkeleton />
            </div>
          </section>
          <section className="py-20 bg-dark-bg">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="animate-pulse">
                  <div className="h-12 w-48 bg-slate-700/50 rounded mx-auto mb-4"></div>
                  <div className="h-1 w-24 bg-slate-700/50 rounded mx-auto mb-6"></div>
                  <div className="h-6 w-80 bg-slate-700/50 rounded mx-auto"></div>
                </div>
              </div>
              <SkillsGridSkeleton />
            </div>
          </section>
          <section className="py-20 bg-dark-secondary">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="animate-pulse">
                  <div className="h-12 w-56 bg-slate-700/50 rounded mx-auto mb-4"></div>
                  <div className="h-1 w-24 bg-slate-700/50 rounded mx-auto mb-6"></div>
                  <div className="h-6 w-88 bg-slate-700/50 rounded mx-auto"></div>
                </div>
              </div>
              <EducationCardsSkeleton />
            </div>
          </section>
          <section className="py-20 bg-dark-bg">
            <div className="max-w-6xl mx-auto px-6">
              <div className="text-center mb-16">
                <div className="animate-pulse">
                  <div className="h-12 w-64 bg-slate-700/50 rounded mx-auto mb-4"></div>
                  <div className="h-1 w-24 bg-slate-700/50 rounded mx-auto mb-6"></div>
                  <div className="h-6 w-96 bg-slate-700/50 rounded mx-auto"></div>
                </div>
              </div>
              <ExperienceTimelineSkeleton />
            </div>
          </section>
          <ContactFormSkeleton />
          <Footer />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-dark-bg text-slate-100 font-sans overflow-x-hidden">
        <Navigation />
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Education />
        <Experience />
        <Contact />
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
}