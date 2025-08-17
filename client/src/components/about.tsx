import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export default function About() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="py-20 bg-dark-secondary" ref={ref}>
      <div className="max-w-6xl mx-auto px-6">
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
              I'm a passionate Computer Science student at Guru Gobind Singh Indraprastha University (GGSIPU), 
              specializing in Artificial Intelligence and Machine Learning. My journey began with curiosity about 
              how machines can learn and think, leading me to dive deep into neural networks, deep learning, and AI applications.
            </p>
            <p className="text-lg text-slate-300 leading-relaxed">
              Currently in my B.Tech CSE program, I've developed expertise in Python, TensorFlow, PyTorch, and various 
              AI frameworks. I'm particularly interested in computer vision, natural language processing, and their 
              real-world applications in solving complex problems.
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
                  { label: "Name", value: "Alex Johnson" },
                  { label: "Degree", value: "B.Tech CSE" },
                  { label: "University", value: "GGSIPU" },
                  { label: "Location", value: "Delhi, India" },
                  { label: "Email", value: "alex@example.com" },
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
                "I believe AI has the potential to solve humanity's greatest challenges. Every line of code I write 
                is a step towards creating intelligent systems that can make the world a better place."
              </p>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}