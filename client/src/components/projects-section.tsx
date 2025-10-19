import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ExternalLink, Github } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const projects = [
  {
    id: "potatoguard",
    title: "PotatoGuard",
    year: "2025",
    description: "AI-based leaf disease diagnosis system using CNN with TensorFlow for precise plant health monitoring.",
    longDescription: "Developed a comprehensive plant disease detection system achieving 95% accuracy through advanced CNN architecture. Full-stack deployment on Docker and Render.",
    accuracy: "95%",
    technologies: ["TensorFlow", "CNN", "React", "Docker", "Render"],
    github: "https://github.com/ashnoorsingh/potatoguard",
    highlights: [
      "95% disease classification accuracy",
      "Real-time image processing",
      "Full-stack React deployment",
      "Dockerized for scalability",
    ],
  },
  {
    id: "qr-authenticator",
    title: "QR Code Authenticator",
    year: "2025",
    description: "CNN-based QR verification system with 97% accuracy for real-time security validation.",
    longDescription: "Built a sophisticated QR code authentication system leveraging CNN for pattern recognition with industry-leading accuracy rates.",
    accuracy: "97%",
    technologies: ["CNN", "Computer Vision", "Python", "Security"],
    github: "https://github.com/ashnoorsingh/qr-authenticator",
    highlights: [
      "97% verification accuracy",
      "Real-time authentication",
      "Robust security measures",
      "Low latency processing",
    ],
  },
  {
    id: "querysense",
    title: "QuerySense",
    year: "2025",
    description: "NLP + LLM-powered intelligent document search built using FastAPI, LangChain, and React.",
    longDescription: "Created an advanced document search engine combining NLP and large language models for intelligent query understanding and retrieval.",
    accuracy: null,
    technologies: ["FastAPI", "LangChain", "NLP", "LLM", "React"],
    github: "https://github.com/ashnoorsingh/querysense",
    highlights: [
      "Semantic search capabilities",
      "LangChain integration",
      "FastAPI backend",
      "Intelligent query parsing",
    ],
  },
];

export function ProjectsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="projects"
      className={`relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      data-testid="section-projects"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-projects-title">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project, index) => (
            <Card
              key={project.id}
              className="glassmorphism hover-elevate transition-all duration-300 hover:glow-primary flex flex-col overflow-hidden group"
              style={{
                animationDelay: `${index * 150}ms`,
                animation: isVisible ? `fadeInUp 0.6s ease-out ${index * 150}ms both` : "none",
              }}
              data-testid={`card-project-${project.id}`}
            >
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-secondary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-2">
                  <CardTitle className="text-xl md:text-2xl font-bold" data-testid={`text-${project.id}-title`}>
                    {project.title}
                  </CardTitle>
                  <Badge variant="outline" className="glassmorphism border-primary/50 text-xs" data-testid={`badge-${project.id}-year`}>
                    {project.year}
                  </Badge>
                </div>
                <CardDescription className="text-muted-foreground" data-testid={`text-${project.id}-description`}>
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10 flex-1">
                <p className="text-sm text-muted-foreground mb-4" data-testid={`text-${project.id}-long-description`}>
                  {project.longDescription}
                </p>
                
                {project.accuracy && (
                  <div className="mb-4 p-3 glassmorphism rounded-lg border border-primary/30">
                    <p className="text-xs text-muted-foreground mb-1">Accuracy</p>
                    <p className="text-2xl font-bold text-primary" data-testid={`text-${project.id}-accuracy`}>
                      {project.accuracy}
                    </p>
                  </div>
                )}

                <div className="space-y-2 mb-4">
                  {project.highlights.map((highlight, index) => (
                    <div key={index} className="flex items-start gap-2" data-testid={`text-${project.id}-highlight-${index}`}>
                      <span className="text-primary text-xs mt-0.5">▸</span>
                      <span className="text-xs text-muted-foreground">{highlight}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech) => (
                    <Badge
                      key={tech}
                      variant="secondary"
                      className="text-xs"
                      data-testid={`badge-${project.id}-tech-${tech.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              <CardFooter className="relative z-10 gap-2">
                <Button
                  variant="outline"
                  size="sm"
                  className="flex-1 hover-elevate"
                  asChild
                  data-testid={`button-${project.id}-github`}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <Github className="w-4 h-4 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="sm"
                  className="flex-1 hover-elevate"
                  asChild
                  data-testid={`button-${project.id}-view`}
                >
                  <a href={project.github} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="w-4 h-4 mr-2" />
                    View
                  </a>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
