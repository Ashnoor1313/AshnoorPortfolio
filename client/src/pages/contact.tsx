import Navigation from "@/components/navigation";
import Contact from "@/components/contact";
import Footer from "@/components/footer";
import PageTransition from "@/components/page-transitions";
import BackToTop from "@/components/back-to-top";

export default function ContactPage() {
  return (
    <PageTransition>
      <div className="bg-dark-bg text-slate-100 font-sans overflow-x-hidden min-h-screen">
        <Navigation />
        <div className="pt-20">
          <Contact />
        </div>
        <Footer />
        <BackToTop />
      </div>
    </PageTransition>
  );
}