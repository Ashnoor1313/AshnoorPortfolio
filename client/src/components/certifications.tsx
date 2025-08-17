import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Trophy, Brain, Cloud, Code, BarChart3, Zap } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Machine Learning Specialization",
      provider: "Stanford University - Coursera",
      date: "Completed: March 2023",
      description: "Comprehensive course covering supervised learning, unsupervised learning, and best practices in machine learning.",
      icon: Brain,
      color: "from-accent-blue to-accent-purple",
      credentialUrl: "#",
    },
    {
      title: "Deep Learning Specialization",
      provider: "deeplearning.ai - Coursera",
      date: "Completed: January 2023",
      description: "Advanced deep learning concepts including CNNs, RNNs, and neural network optimization techniques.",
      icon: Brain,
      color: "from-accent-purple to-pink-500",
      credentialUrl: "#",
    },
    {
      title: "AWS Machine Learning",
      provider: "Amazon Web Services",
      date: "Completed: September 2023",
      description: "Cloud-based machine learning services and deployment strategies using AWS infrastructure.",
      icon: Cloud,
      color: "from-green-500 to-teal-500",
      credentialUrl: "#",
    },
    {
      title: "Python for Data Science",
      provider: "IBM - Coursera",
      date: "Completed: November 2022",
      description: "Comprehensive Python programming for data analysis, visualization, and machine learning applications.",
      icon: BarChart3,
      color: "from-yellow-500 to-orange-500",
      credentialUrl: "#",
    },
    {
      title: "Google Code Jam Qualifier",
      provider: "Google",
      date: "Achieved: April 2023",
      description: "Qualified for Google Code Jam Round 1 by solving algorithmic programming challenges.",
      icon: Trophy,
      color: "from-red-500 to-pink-500",
      credentialUrl: "#",
    },
    {
      title: "React Developer Certification",
      provider: "Meta - Coursera",
      date: "Completed: February 2023",
      description: "Advanced React concepts including hooks, context, performance optimization, and testing.",
      icon: Code,
      color: "from-blue-500 to-cyan-500",
      credentialUrl: "#",
    },
  ];

  return (
    <section id="certifications" className="py-20" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Certifications & <span className="gradient-text">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-4"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Professional certifications and achievements that validate my expertise in AI and software development.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => (
            <motion.div
              key={index}
              className="bg-dark-secondary p-6 rounded-xl border border-slate-600 hover:border-accent-blue/50 transition-all duration-300 group"
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ delay: index * 0.1, duration: 0.8 }}
              whileHover={{ y: -10 }}
            >
              <div className="text-center">
                <motion.div
                  className={`w-16 h-16 bg-gradient-to-r ${cert.color} rounded-full flex items-center justify-center mx-auto mb-4`}
                  whileHover={{ scale: 1.1 }}
                  transition={{ duration: 0.3 }}
                >
                  <cert.icon className="text-white text-2xl" size={28} />
                </motion.div>
                
                <h3 className="text-xl font-semibold mb-2">{cert.title}</h3>
                <p className="text-accent-blue font-medium mb-2">{cert.provider}</p>
                <p className="text-slate-400 mb-4">{cert.date}</p>
                <p className="text-slate-300 text-sm mb-4">{cert.description}</p>
                
                <motion.a
                  href={cert.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-accent-blue hover:text-blue-400 transition-colors text-sm inline-flex items-center gap-2"
                  whileHover={{ scale: 1.05 }}
                >
                  <ExternalLink size={16} />
                  View Credential
                </motion.a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}