import Navigation from "@/components/navigation";
import About from "@/components/about";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transitions";
import BackToTop from "@/components/back-to-top";

export default function AboutPage() {
  return (
    <PageTransition>
      <div className="bg-dark-bg text-slate-100 font-sans overflow-x-hidden min-h-screen">
        <Navigation />
        <div className="pt-20">
          <About />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
}