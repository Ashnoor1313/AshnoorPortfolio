import Navigation from "@/components/navigation";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transitions";
import BackToTop from "@/components/back-to-top";
import { ExperienceTimelineSkeleton } from "@/components/loading-skeletons";
import { useSimulatedLoading } from "@/hooks/use-loading";

export default function ExperiencePage() {
  const isLoading = useSimulatedLoading(900);

  if (isLoading) {
    return (
      <PageTransition>
        <div className="bg-dark-bg text-slate-100 font-sans overflow-x-hidden min-h-screen">
          <Navigation />
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
          <Footer />
        </div>
      </PageTransition>
    );
  }

  return (
    <PageTransition>
      <div className="bg-dark-bg text-slate-100 font-sans overflow-x-hidden min-h-screen">
        <Navigation />
        <div className="pt-20">
          <Experience />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
}