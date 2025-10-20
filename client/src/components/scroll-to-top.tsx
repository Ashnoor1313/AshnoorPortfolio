import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

export function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => setIsVisible(window.scrollY > 500);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  return (
    <Button
      size="icon"
      onClick={scrollToTop}
      data-testid="button-scroll-to-top"
      className={`fixed bottom-10 right-10 z-50 w-14 h-14 rounded-full 
        flex items-center justify-center
        transition-all duration-300 backdrop-blur-md
        ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10 pointer-events-none"}
        bg-cyan-500 hover:bg-cyan-400 text-white shadow-[0_0_25px_6px_rgba(0,255,255,0.6)] border border-cyan-300`}
    >
      <ArrowUp className="w-7 h-7 text-white drop-shadow-[0_0_8px_rgba(255,255,255,0.8)]" />
    </Button>
  );
}
