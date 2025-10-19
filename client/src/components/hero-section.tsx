import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ArrowRight, Github, Linkedin, Mail } from "lucide-react";

export function HeroSection() {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 pt-20"
      data-testid="section-hero"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="flex flex-col items-center text-center gap-8 md:gap-12">
          <div className="float-animation relative">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/30 to-secondary/30 rounded-full blur-3xl" />
            <Avatar className="relative w-32 h-32 md:w-48 md:h-48 border-4 border-primary pulse-glow shadow-2xl" data-testid="img-avatar-hero">
              <AvatarFallback className="text-4xl md:text-6xl font-bold bg-gradient-to-br from-primary to-secondary text-primary-foreground">
                AS
              </AvatarFallback>
            </Avatar>
          </div>

          <div className="space-y-4 md:space-y-6 max-w-4xl">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight" data-testid="text-hero-headline">
              Hi, I'm <span className="gradient-text">Ashnoor Singh</span>
            </h1>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold text-muted-foreground" data-testid="text-hero-subheadline">
              AI Engineer & Innovator
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto" data-testid="text-hero-description">
              Transforming ideas into intelligent solutions with Machine Learning, NLP, and Generative AI
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center gap-4">
            <Button
              size="lg"
              className="rounded-full px-8 py-6 text-base md:text-lg font-semibold glow-primary shadow-xl"
              asChild
              data-testid="button-view-projects"
            >
              <a href="#projects">
                View Projects <ArrowRight className="ml-2 w-5 h-5" />
              </a>
            </Button>
            <div className="flex items-center gap-3">
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-12 h-12 glassmorphism hover:glow-primary transition-all duration-300"
                asChild
                data-testid="button-github"
              >
                <a
                  href="https://github.com/ashnoorsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-12 h-12 glassmorphism hover:glow-primary transition-all duration-300"
                asChild
                data-testid="button-linkedin"
              >
                <a
                  href="https://linkedin.com/in/ashnoorsingh"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
              </Button>
              <Button
                size="icon"
                variant="outline"
                className="rounded-full w-12 h-12 glassmorphism hover:glow-primary transition-all duration-300"
                asChild
                data-testid="button-email"
              >
                <a
                  href="mailto:ashnoorchhabra1313@gmail.com"
                  aria-label="Email"
                >
                  <Mail className="w-5 h-5" />
                </a>
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-primary rounded-full flex items-start justify-center p-2">
          <div className="w-1.5 h-3 bg-primary rounded-full animate-pulse" />
        </div>
      </div>
    </section>
  );
}
