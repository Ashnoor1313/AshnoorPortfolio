import { Switch, Route } from "wouter";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import HomePage from "@/pages/home";
import AboutPage from "@/pages/about";
import ProjectsPage from "@/pages/projects";
import SkillsPage from "@/pages/skills";
import EducationPage from "@/pages/education";
import ExperiencePage from "@/pages/experience";
import Portfolio from "@/pages/portfolio";

import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/portfolio" component={Portfolio} />
      <Route path="/about" component={AboutPage} />
      <Route path="/projects" component={ProjectsPage} />
      <Route path="/skills" component={SkillsPage} />
      <Route path="/education" component={EducationPage} />
      <Route path="/experience" component={ExperiencePage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
      <TooltipProvider>
        <Toaster />
        <Router />
      </TooltipProvider>
  );
}

export default App;
