import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Brain, Code, Globe, BarChart3, Cloud, Wrench } from "lucide-react";

export default function Skills() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const skillCategories = [
    {
      title: "AI & Machine Learning",
      icon: Brain,
      color: "from-accent-blue to-accent-purple",
      skills: [
        { name: "TensorFlow", level: 85 },
        { name: "PyTorch", level: 80 },
        { name: "Scikit-learn", level: 90 },
        { name: "OpenCV", level: 75 },
      ],
    },
    {
      title: "Programming Languages",
      icon: Code,
      color: "from-accent-purple to-pink-500",
      skills: [
        { name: "Python", level: 95 },
        { name: "JavaScript", level: 85 },
        { name: "C++", level: 80 },
        { name: "Java", level: 75 },
      ],
    },
    {
      title: "Web Development",
      icon: Globe,
      color: "from-green-500 to-teal-500",
      skills: [
        { name: "React", level: 90 },
        { name: "Node.js", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "Express.js", level: 85 },
      ],
    },
    {
      title: "Data Science",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500",
      skills: [
        { name: "Pandas", level: 95 },
        { name: "NumPy", level: 90 },
        { name: "Matplotlib", level: 85 },
        { name: "Seaborn", level: 80 },
      ],
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      color: "from-blue-500 to-cyan-500",
      skills: [
        { name: "AWS", level: 75 },
        { name: "Docker", level: 80 },
        { name: "Git", level: 90 },
        { name: "Linux", level: 85 },
      ],
    },
    {
      title: "Tools & Frameworks",
      icon: Wrench,
      color: "from-red-500 to-pink-500",
      skills: [
        { name: "VS Code", level: 95 },
        { name: "Jupyter", level: 90 },
        { name: "Figma", level: 70 },
        { name: "Postman", level: 85 },
      ],
    },
  ];

  return (
    <section id="skills" className="py-20 bg-dark-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Technical <span className="gradient-text">Skills</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-4"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            A comprehensive overview of my technical expertise and proficiencies across various domains.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <motion.div
              key={index}
              className="bg-dark-tertiary p-6 rounded-xl border border-slate-600 hover:border-accent-blue/50 transition-all duration-300"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
            >
              <div className="flex items-center mb-4">
                <div className={`w-12 h-12 bg-gradient-to-r ${category.color} rounded-lg flex items-center justify-center mr-4`}>
                  <category.icon className="text-white text-xl" size={24} />
                </div>
                <h3 className="text-xl font-semibold">{category.title}</h3>
              </div>
              
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="skill-item">
                    <div className="flex justify-between mb-2">
                      <span>{skill.name}</span>
                      <span className="text-accent-blue">{skill.level}%</span>
                    </div>
                    <div className="w-full bg-slate-700 rounded-full h-2">
                      <motion.div
                        className={`bg-gradient-to-r ${category.color} h-2 rounded-full`}
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ 
                          delay: index * 0.1 + skillIndex * 0.1 + 0.5, 
                          duration: 1,
                          ease: "easeOut"
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}