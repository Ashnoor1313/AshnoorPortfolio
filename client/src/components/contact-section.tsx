import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Phone, Copy, Check } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

export function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const { toast } = useToast();
  const { ref, isVisible } = useScrollAnimation();

  const copyToClipboard = async (text: string, type: "email" | "phone") => {
    try {
      await navigator.clipboard.writeText(text);
      if (type === "email") {
        setCopiedEmail(true);
        setTimeout(() => setCopiedEmail(false), 2000);
      } else {
        setCopiedPhone(true);
        setTimeout(() => setCopiedPhone(false), 2000);
      }
      toast({
        title: "Copied!",
        description: `${type === "email" ? "Email" : "Phone number"} copied to clipboard`,
      });
    } catch (err) {
      toast({
        title: "Failed to copy",
        description: "Please try again",
        variant: "destructive",
      });
    }
  };

  return (
    <section
      ref={ref as React.RefObject<HTMLElement>}
      id="contact"
      className={`relative py-20 md:py-32 px-4 sm:px-6 lg:px-8 transition-all duration-1000 ${
        isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      data-testid="section-contact"
    >
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4" data-testid="text-contact-title">
            Let's <span className="gradient-text">Collaborate!</span>
          </h2>
          <div className="w-24 h-1.5 bg-gradient-to-r from-primary via-secondary to-primary mx-auto rounded-full shadow-lg glow-primary mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto" data-testid="text-contact-subtitle">
            I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
          </p>
        </div>

        <Card className="glassmorphism p-8 md:p-12 hover-elevate transition-all duration-300 hover:shadow-2xl hover:border-primary/40">
          <div className="space-y-6">
            <div className="flex items-center gap-4 p-4 glassmorphism rounded-lg hover-elevate hover:shadow-xl transition-all duration-300 group">
              <div className="p-3 bg-primary/10 rounded-lg glow-primary group-hover:scale-110 group-hover:bg-primary/20 transition-all">
                <Mail className="w-6 h-6 text-primary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">Email</p>
                <a
                  href="mailto:ashnoorchhabra1313@gmail.com"
                  className="text-base md:text-lg font-medium text-foreground hover:text-primary transition-colors break-all"
                  data-testid="link-email"
                >
                  ashnoorchhabra1313@gmail.com
                </a>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => copyToClipboard("ashnoorchhabra1313@gmail.com", "email")}
                className="hover-elevate shrink-0"
                data-testid="button-copy-email"
              >
                {copiedEmail ? (
                  <Check className="w-5 h-5 text-primary" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </Button>
            </div>

            <div className="flex items-center gap-4 p-4 glassmorphism rounded-lg hover-elevate hover:shadow-xl transition-all duration-300 group">
              <div className="p-3 bg-secondary/10 rounded-lg glow-secondary group-hover:scale-110 group-hover:bg-secondary/20 transition-all">
                <Phone className="w-6 h-6 text-secondary" />
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm text-muted-foreground mb-1">Phone</p>
                <a
                  href="tel:+919988766184"
                  className="text-base md:text-lg font-medium text-foreground hover:text-secondary transition-colors"
                  data-testid="link-phone"
                >
                  +91-9988766184
                </a>
              </div>
              <Button
                size="icon"
                variant="ghost"
                onClick={() => copyToClipboard("+91-9988766184", "phone")}
                className="hover-elevate shrink-0"
                data-testid="button-copy-phone"
              >
                {copiedPhone ? (
                  <Check className="w-5 h-5 text-secondary" />
                ) : (
                  <Copy className="w-5 h-5" />
                )}
              </Button>
            </div>

            <div className="pt-6 border-t border-border/50">
              <p className="text-sm text-muted-foreground text-center mb-6">
                Connect with me on social platforms
              </p>
              <div className="flex items-center justify-center gap-4">
                <Button
                  size="lg"
                  variant="outline"
                  className="glassmorphism hover:shadow-xl hover:border-primary/60 transition-all duration-300"
                  asChild
                  data-testid="button-contact-github"
                >
                  <a
                    href="https://github.com/Ashnoor1313"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github className="w-5 h-5 mr-2" />
                    GitHub
                  </a>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="glassmorphism hover:shadow-xl hover:border-primary/60 transition-all duration-300"
                  asChild
                  data-testid="button-contact-linkedin"
                >
                  <a
                    href="https://www.linkedin.com/in/ashnoor-singh-683640298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Linkedin className="w-5 h-5 mr-2" />
                    LinkedIn
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </Card>

      
      </div>
    </section>
  );
}
