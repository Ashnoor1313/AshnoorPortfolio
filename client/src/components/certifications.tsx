import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Award, ExternalLink, Trophy, Brain, Cloud, Code, BarChart3, Zap } from "lucide-react";

export default function Certifications() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const certifications = [
    {
      title: "Data Science and Analytics",
      provider: "Professional Certification",
      date: "Completed: 2024",
      description: "Comprehensive certification covering data analysis, statistical modeling, and business intelligence using modern tools and techniques.",
      icon: BarChart3,
      color: "from-accent-blue to-accent-purple",
      credentialUrl: "#",
    },
    {
      title: "Python and Machine Learning",
      provider: "Professional Certification",
      date: "Completed: 2024",
      description: "Advanced Python programming certification focusing on machine learning applications, data processing, and AI development.",
      icon: Brain,
      color: "from-accent-purple to-pink-500",
      credentialUrl: "#",
    },
    {
      title: "AI Masters Leadership",
      provider: "IEEE GTBIT",
      date: "Current: 2024",
      description: "Leadership role focusing on artificial intelligence initiatives, technical workshops, and mentoring in AI technologies.",
      icon: Trophy,
      color: "from-green-500 to-teal-500",
      credentialUrl: "#",
    },
    {
      title: "Outstanding Team Lead",
      provider: "To Let Globe",
      date: "Achieved: July 2024",
      description: "Recognition for exceptional leadership in managing cross-functional teams and delivering data-driven insights for strategic decision-making.",
      icon: Award,
      color: "from-yellow-500 to-orange-500",
      credentialUrl: "#",
    },
  ];

  return (
    <section id="certifications" className="py-20 relative overflow-hidden" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-10 w-2 h-2 bg-accent-purple/70 rounded-full"
          animate={{ 
            scale: [1, 4, 1],
            opacity: [0.7, 1, 0.7],
            rotate: [0, 180, 360]
          }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 right-20 w-32 h-1 bg-gradient-to-l from-accent-blue/50 to-transparent rotate-45"
          animate={{ x: [50, -200] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
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