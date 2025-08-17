import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Github, ExternalLink } from "lucide-react";

export default function Projects() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const projects = [
    {
      title: "Smart Image Classifier",
      description: "A deep learning model using CNN to classify images with 95% accuracy. Built with TensorFlow and deployed using Flask.",
      image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "TensorFlow", "Flask"],
      category: "AI/ML",
      github: "#",
      demo: "#",
    },
    {
      title: "AI Chatbot Assistant",
      description: "An intelligent chatbot using BERT and transformer models for natural conversation and query resolution.",
      image: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["Python", "BERT", "Transformers"],
      category: "NLP",
      github: "#",
      demo: "#",
    },
    {
      title: "ML Analytics Dashboard",
      description: "Interactive dashboard for machine learning model performance monitoring and data visualization.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
      tags: ["React", "D3.js", "Python"],
      category: "Data Science",
      github: "#",
      demo: "#",
    },
  ];

  return (
    <section id="projects" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Featured <span className="gradient-text">Projects</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-4"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills in AI, machine learning, and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-dark-secondary rounded-xl overflow-hidden border border-slate-700 hover:border-accent-blue/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.2, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <div className="h-48 bg-gradient-to-br from-accent-blue/20 to-accent-purple/20 relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute top-4 right-4 bg-accent-blue text-white px-3 py-1 rounded-full text-sm font-medium">
                  {project.category}
                </div>
              </div>
              
              <div className="p-6">
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-slate-400 mb-4">{project.description}</p>
                
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag, tagIndex) => (
                    <span
                      key={tagIndex}
                      className="bg-accent-blue/20 text-accent-blue px-2 py-1 rounded text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                
                <div className="flex space-x-4">
                  <motion.a
                    href={project.github}
                    className="text-accent-blue hover:text-blue-400 transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <Github size={16} />
                    Code
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="text-accent-purple hover:text-purple-400 transition-colors flex items-center gap-2"
                    whileHover={{ scale: 1.05 }}
                  >
                    <ExternalLink size={16} />
                    Demo
                  </motion.a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ delay: 0.8 }}
        >
          <motion.a
            href="https://github.com"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-3 rounded-lg font-medium hover:opacity-90 transition-opacity duration-300 inline-flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <Github size={18} />
            View All Projects on GitHub
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}