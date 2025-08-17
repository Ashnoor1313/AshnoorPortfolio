import Navigation from "@/components/navigation";
import Education from "@/components/education";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transitions";
import BackToTop from "@/components/back-to-top";

export default function EducationPage() {
  return (
    <PageTransition>
      <div className="bg-dark-bg text-slate-100 font-sans overflow-x-hidden min-h-screen">
        <Navigation />
        <div className="pt-20">
          <Education />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
}