import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-dark-secondary relative overflow-hidden scroll-mt-20" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-20 left-0 w-full h-px bg-gradient-to-r from-transparent via-accent-blue/40 to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div 
          className="absolute bottom-32 right-0 w-full h-px bg-gradient-to-l from-transparent via-accent-purple/40 to-transparent"
          animate={{ scaleX: [0, 1, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 4 }}
        />
        <motion.div
          className="absolute top-1/2 -left-32 w-64 h-64 bg-accent-blue/5 rounded-full blur-2xl"
          animate={{ x: [0, 100, 0], y: [0, -50, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
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
            About <span className="gradient-text">Me</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <p className="text-lg text-slate-300 leading-relaxed">
              I'm a dedicated Computer Science student at Guru Gobind Singh Indraprastha University (GGSIPU) with a strong 
              CGPA of 9.28. My journey in AI and Machine Learning began with a fascination for how intelligent systems can 
              solve real-world problems, leading me to explore deep learning, computer vision, and generative AI.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              As an AI Masters Lead at IEEE GTBIT and with hands-on experience as a Data Analyst Intern, I've developed 
              expertise in Python, TensorFlow, Keras, and full-stack development. I'm passionate about creating AI solutions 
              that make a meaningful impact, from disease classification systems to authentication technologies.
            </p>
            
            <div className="grid grid-cols-2 gap-6 pt-4">
              <motion.div
                className="bg-dark-tertiary p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-accent-blue font-semibold mb-2">Current Focus</h4>
                <p className="text-slate-400">Deep Learning & Neural Networks</p>
              </motion.div>
              <motion.div
                className="bg-dark-tertiary p-4 rounded-lg"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.2 }}
              >
                <h4 className="text-accent-purple font-semibold mb-2">Interest</h4>
                <p className="text-slate-400">Computer Vision & NLP</p>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="bg-dark-tertiary p-6 rounded-xl">
              <h3 className="text-xl font-semibold mb-4 text-accent-blue">Personal Details</h3>
              <div className="space-y-3">
                {[
                  { label: "Name", value: "Ashnoor Singh" },
                  { label: "Degree", value: "B.Tech CSE" },
                  { label: "University", value: "GGSIPU" },
                  { label: "Location", value: "New Delhi, India" },
                  { label: "Email", value: "ashnoorchhabra1313@gmail.com" },
                ].map((detail, index) => (
                  <motion.div
                    key={index}
                    className="flex justify-between"
                    initial={{ opacity: 0, y: 20 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <span className="text-slate-400">{detail.label}:</span>
                    <span>{detail.value}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              className="bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 p-6 rounded-xl border border-accent-blue/20"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={isInView ? { opacity: 1, scale: 1 } : {}}
              transition={{ delay: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4">What drives me</h3>
              <p className="text-slate-300">
                "I believe in the transformative power of AI and machine learning to solve complex real-world problems. 
                My goal is to bridge the gap between cutting-edge research and practical applications that benefit society."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}