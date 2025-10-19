import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Code2, Brain, Wrench, Database, Rocket } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const skillCategories = [
  {
    id: "programming",
    title: "Programming",
    icon: Code2,
    skills: ["Python", "Java", "C++", "JavaScript"],
    color: "primary",
  },
  {
    id: "ai-ml",
    title: "AI/ML",
    icon: Brain,
    skills: ["Deep Learning", "NLP", "Computer Vision", "Generative AI", "Agentic AI"],
    color: "secondary",
  },
  {
    id: "frameworks",
    title: "Frameworks",
    icon: Rocket,
    skills: ["TensorFlow", "PyTorch", "Hugging Face", "LangChain", "LlamaIndex"],
    color: "primary",
  },
  {
    id: "tools",
    title: "Tools",
    icon: Wrench,
    skills: ["Docker", "GCP", "AWS", "Figma"],
    color: "secondary",
  },
  {
    id: "databases",
    title: "Databases",
    icon: Database,
    skills: ["SQL", "Pinecone", "FAISS", "Chroma"],
    color: "primary",
  },
];

export function SkillsSection() {
  const { ref, isVisible } = useScrollAnimation();

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="skills"
      className={`relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 bg-background transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      data-testid="section-skills"
    >
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-skills-title">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-primary to-secondary mx-auto rounded-full" />
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {skillCategories.map((category) => {
            const IconComponent = category.icon;
            return (
              <Card
                key={category.id}
                className="glassmorphism p-6 hover-elevate transition-all duration-300 group"
                data-testid={`card-skills-${category.id}`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <div
                    className={`p-3 rounded-lg ${
                      category.color === "primary" ? "bg-primary/10 glow-primary" : "bg-secondary/10 glow-secondary"
                    } group-hover:scale-110 transition-transform duration-300`}
                  >
                    <IconComponent
                      className={`w-6 h-6 ${category.color === "primary" ? "text-primary" : "text-secondary"}`}
                    />
                  </div>
                  <h3 className="text-xl font-semibold" data-testid={`text-skills-${category.id}-title`}>
                    {category.title}
                  </h3>
                </div>

                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <Badge
                      key={skill}
                      variant="outline"
                      className={`glassmorphism hover:-translate-y-1 transition-all duration-200 cursor-default ${
                        category.color === "primary" ? "border-primary/30 hover:border-primary/60" : "border-secondary/30 hover:border-secondary/60"
                      }`}
                      data-testid={`badge-skill-${skill.toLowerCase().replace(/\s+/g, '-').replace(/\//g, '-')}`}
                    >
                      {skill}
                    </Badge>
                  ))}
                </div>
              </Card>
            );
          })}
        </div>

        <div className="mt-12 text-center">
          <Card className="glassmorphism p-6 max-w-3xl mx-auto bg-gradient-to-br from-primary/5 to-secondary/5 border-primary/20">
            <p className="text-muted-foreground text-sm md:text-base" data-testid="text-skills-note">
              Continuously learning and exploring emerging technologies in AI, machine learning, and software engineering
              to stay at the forefront of innovation.
            </p>
          </Card>
        </div>
      </div>
    </section>
  );
}
