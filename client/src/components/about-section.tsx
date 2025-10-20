import { Card } from "@/components/ui/card";
import { Brain, Code2, GraduationCap, Lightbulb } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function AboutSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="about"
      className={`relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      data-testid="section-about"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-about-title">
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full shadow-lg glow-primary" />
        </div>

        <div className="grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-foreground leading-relaxed" data-testid="text-about-description">
              I'm an <span className="text-primary font-semibold">AI Engineer</span> passionate about applying{" "}
              <span className="text-secondary font-semibold">deep learning</span>,{" "}
              <span className="text-primary font-semibold">NLP</span>, and{" "}
              <span className="text-secondary font-semibold">computer vision</span> to real-world challenges.
            </p>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid="text-about-detail">
            I’m an aspiring AI Engineer passionate about building full-stack intelligent systems that blend machine learning with modern web technologies. From experimenting with neural networks to developing end-to-end applications, I’m driven to bridge the gap between AI research and real-world innovation.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 py-2 italic text-muted-foreground" data-testid="text-about-quote">
              "The best way to predict the future is to invent it—especially when powered by artificial intelligence."
            </blockquote>
          </div>

          <div className="space-y-6">
            <Card className="glassmorphism p-6 hover-elevate transition-all duration-300 hover:shadow-2xl hover:border-primary/40" data-testid="card-education">
              <div className="flex items-start gap-4">
                <div className="p-3 bg-primary/10 rounded-lg glow-primary group-hover:scale-110 transition-transform">
                  <GraduationCap className="w-6 h-6 text-primary" />
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-semibold mb-2" data-testid="text-education-degree">
                    B.Tech in Computer Science
                  </h3>
                  <p className="text-muted-foreground mb-2" data-testid="text-education-university">
                    Guru Gobind Singh Indraprastha University
                  </p>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground" data-testid="text-education-years">
                      2023 – 2027
                    </span>
                    <span className="text-sm text-muted-foreground">•</span>
                    <span className="text-lg font-bold text-primary" data-testid="text-education-cgpa">
                      CGPA: 9.28
                    </span>
                  </div>
                </div>
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              <Card className="glassmorphism p-4 hover-elevate transition-all duration-300 hover:shadow-xl hover:border-primary/40 group" data-testid="card-interest-ai">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-primary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Brain className="w-6 h-6 text-primary" />
                  </div>
                  <p className="text-sm font-medium">AI/ML Engineer</p>
                </div>
              </Card>
              <Card className="glassmorphism p-4 hover-elevate transition-all duration-300 hover:shadow-xl hover:border-secondary/40 group" data-testid="card-interest-fullstack">
                <div className="flex flex-col items-center text-center gap-3">
                  <div className="p-3 bg-secondary/10 rounded-lg group-hover:scale-110 transition-transform">
                    <Code2 className="w-6 h-6 text-secondary" />
                  </div>
                  <p className="text-sm font-medium">Full-Stack Dev</p>
                </div>
              </Card>
            </div>

            <Card className="glassmorphism p-4 bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20 hover:border-primary/40 transition-all duration-300" data-testid="card-tech-stack">
              <div className="flex items-center gap-3">
                <Lightbulb className="w-5 h-5 text-primary animate-pulse" />
                <p className="text-sm text-muted-foreground">
                  Building with <span className="text-primary font-semibold">React</span>,{" "}
                  <span className="text-primary font-semibold">FastAPI</span>,{" "}
                  <span className="text-secondary font-semibold">TensorFlow</span>, and{" "}
                  <span className="text-secondary font-semibold">LangChain</span>
                </p>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
