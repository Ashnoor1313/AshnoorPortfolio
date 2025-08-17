import Navigation from "@/components/navigation";
import Experience from "@/components/experience";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transitions";
import BackToTop from "@/components/back-to-top";

export default function ExperiencePage() {
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