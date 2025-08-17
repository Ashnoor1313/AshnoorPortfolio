import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Briefcase, Code, GraduationCap } from "lucide-react";

export default function Experience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const experiences = [
    {
      title: "Data Analyst Intern",
      company: "To Let Globe",
      location: "Lucknow, India",
      period: "May 2024 - July 2024",
      description: "Led a cross-functional team of 15 members, effectively coordinating project workflows and receiving recognition as the Outstanding Team Lead for exemplary leadership and execution.",
      tags: ["Python", "Power BI", "Excel", "Leadership", "Data Analysis"],
      achievements: [
        "Led cross-functional team of 15 members with effective project coordination",
        "Conducted comprehensive data analysis using Python, Excel, and Power BI",
        "Extracted actionable insights from diverse data sources for strategic decision-making",
        "Oversaw daily operations and resource allocation ensuring timely task completion",
      ],
      icon: Briefcase,
      color: "from-accent-blue to-accent-purple",
    },
    {
      title: "AI Masters Lead",
      company: "IEEE GTBIT",
      location: "New Delhi, India",
      period: "2024 - Present",
      description: "Leading AI initiatives and projects within the IEEE student chapter, organizing workshops, and mentoring junior members in machine learning and AI technologies.",
      tags: ["Leadership", "AI", "Machine Learning", "Mentoring", "Workshops"],
      achievements: [
        "Organized technical workshops on AI and Machine Learning",
        "Mentored junior members in AI project development",
        "Led collaborative AI research projects and initiatives",
        "Built technical community focused on cutting-edge AI technologies",
      ],
      icon: GraduationCap,
      color: "from-accent-purple to-pink-500",
    },
  ];

  return (
    <section id="experience" className="py-20 bg-dark-secondary relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-10 right-0 w-32 h-1 bg-gradient-to-l from-accent-blue/50 to-transparent rotate-45"
          animate={{ x: [100, -400] }}
          transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-40 left-0 w-48 h-px bg-gradient-to-r from-accent-purple/40 to-transparent -rotate-12"
          animate={{ x: [-200, window.innerWidth + 100] }}
          transition={{ duration: 16, repeat: Infinity, ease: "linear", delay: 2 }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
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