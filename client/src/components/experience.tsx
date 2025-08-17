import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, GraduationCap } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "AI Research Intern",
      company: "TechCorp AI Labs",
      location: "Remote",
      period: "Jun 2023 - Aug 2023",
      description: "Worked on cutting-edge computer vision projects using deep learning. Developed and optimized neural network models for image classification tasks, achieving 15% improvement in accuracy.",
      tags: ["Python", "TensorFlow", "OpenCV", "Research"],
      achievements: [
        "Implemented state-of-the-art CNN architectures for image recognition",
        "Collaborated with senior researchers on publication-ready projects",
        "Optimized model performance and reduced training time by 30%",
      ],
      icon: Briefcase,
      color: "from-accent-blue to-accent-purple",
    },
    {
      title: "Software Development Intern",
      company: "StartupXYZ",
      location: "Delhi, India",
      period: "Dec 2022 - Feb 2023",
      description: "Developed full-stack web applications using React and Node.js. Built RESTful APIs and implemented machine learning features for data analytics dashboard.",
      tags: ["React", "Node.js", "MongoDB", "API Development"],
      achievements: [
        "Built responsive web applications with modern React practices",
        "Designed and implemented RESTful APIs serving 1000+ daily users",
        "Integrated ML models for real-time data insights and predictions",
      ],
      icon: Code,
      color: "from-accent-purple to-pink-500",
    },
    {
      title: "Teaching Assistant",
      company: "GGSIPU - Computer Science Department",
      location: "Delhi, India",
      period: "Aug 2022 - Present",
      description: "Assistant for Data Structures and Algorithms course. Help students understand complex concepts, grade assignments, and conduct lab sessions for 50+ students.",
      tags: ["Teaching", "Algorithms", "Mentoring", "Leadership"],
      achievements: [
        "Conducted weekly lab sessions and doubt-clearing sessions",
        "Mentored students on data structure implementation and optimization",
        "Developed supplementary learning materials and coding exercises",
      ],
      icon: GraduationCap,
      color: "from-green-500 to-teal-500",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Work <span className="gradient-text">Experience</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-4"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Professional experience and internships that have shaped my career in AI and software development.
          </p>
        </motion.div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-accent-blue to-accent-purple hidden md:block"></div>

          {/* Experience Items */}
          <div className="space-y-12">
            {experiences.map((experience, index) => (
              <motion.div
                key={index}
                className="relative flex items-start space-x-8"
                initial={{ opacity: 0, y: 50 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.2, duration: 0.8 }}
              >
                <motion.div
                  className={`hidden md:flex w-16 h-16 bg-gradient-to-r ${experience.color} rounded-full items-center justify-center relative z-10`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.2 }}
                >
                  <experience.icon className="text-white text-xl" size={24} />
                </motion.div>
                
                <motion.div
                  className="bg-dark-tertiary p-6 rounded-xl border border-slate-600 flex-1 hover:border-accent-blue/50 transition-all duration-300"
                  whileHover={{ y: -5 }}
                >
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                    <h3 className="text-xl font-semibold text-accent-blue">{experience.title}</h3>
                    <span className="bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full text-sm font-medium">
                      {experience.period}
                    </span>
                  </div>
                  
                  <p className="text-lg text-slate-300 mb-2">{experience.company}</p>
                  <p className="text-slate-400 mb-4">{experience.location}</p>
                  <p className="text-slate-300 mb-4">{experience.description}</p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {experience.tags.map((tag, tagIndex) => (
                      <span
                        key={tagIndex}
                        className="bg-accent-blue/20 text-accent-blue px-2 py-1 rounded text-sm"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="text-slate-400 space-y-2">
                    {experience.achievements.map((achievement, achievementIndex) => (
                      <motion.li
                        key={achievementIndex}
                        initial={{ opacity: 0, x: -20 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ delay: index * 0.2 + achievementIndex * 0.1 + 0.4 }}
                      >
                        • {achievement}
                      </motion.li>
                    ))}
                  </ul>
                </motion.div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}