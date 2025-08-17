import Navigation from "@/components/navigation";
import Hero from "@/components/hero";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transitions";
import BackToTop from "@/components/back-to-top";

export default function HomePage() {
  return (
    <PageTransition>
      <div className="bg-dark-bg text-slate-100 font-sans overflow-x-hidden">
        <Navigation />
        <Hero />
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
}