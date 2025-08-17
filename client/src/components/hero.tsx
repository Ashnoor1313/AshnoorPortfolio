import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-08-17 at 21.26.36_698cc3d0_1755446277688.jpg";
import AnimatedBackground from "./animated-background";
import ParticleField from "./particle-field";
import CosmicEffects from "./cosmic-effects";

export default function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Creative Animated Background */}
      <AnimatedBackground />
      <ParticleField />
      <CosmicEffects />
      
      {/* Enhanced Background Elements */}
      <div className="absolute inset-0">
        {/* Matrix Rain Effect */}
        <div className="absolute inset-0 opacity-5">
          {Array.from({ length: 20 }).map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-px bg-gradient-to-b from-accent-blue via-accent-purple to-transparent"
              style={{
                left: `${i * 5}%`,
                height: '100%',
              }}
              animate={{
                opacity: [0, 1, 0],
                scaleY: [0, 1, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
                ease: "easeInOut",
              }}
            />
          ))}
        </div>

        {/* Morphing Blobs */}
        <motion.div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-gradient-radial from-accent-blue/20 via-accent-purple/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 1.3, 0.8, 1.2, 1],
            x: [0, 50, -30, 20, 0],
            y: [0, -40, 30, -20, 0],
            rotate: [0, 90, 180, 270, 360],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-gradient-radial from-accent-purple/20 via-pink-500/10 to-transparent rounded-full blur-3xl"
          animate={{
            scale: [1, 0.7, 1.4, 0.9, 1],
            x: [0, -40, 60, -20, 0],
            y: [0, 50, -40, 30, 0],
            rotate: [360, 270, 180, 90, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 3,
          }}
        />

        {/* DNA Helix */}
        <svg className="absolute inset-0 w-full h-full opacity-20">
          <motion.path
            d="M100 100 Q 200 200 300 100 Q 400 0 500 100 Q 600 200 700 100 Q 800 0 900 100"
            stroke="url(#helixGradient)"
            strokeWidth="2"
            fill="none"
            animate={{
              d: [
                "M100 100 Q 200 200 300 100 Q 400 0 500 100 Q 600 200 700 100 Q 800 0 900 100",
                "M100 200 Q 200 100 300 200 Q 400 300 500 200 Q 600 100 700 200 Q 800 300 900 200",
                "M100 100 Q 200 200 300 100 Q 400 0 500 100 Q 600 200 700 100 Q 800 0 900 100",
              ],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <defs>
            <linearGradient id="helixGradient">
              <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.4" />
              <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#EC4899" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>

        {/* Constellation Pattern */}
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-2 h-2 bg-accent-blue/70 rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              opacity: [0.3, 1, 0.3],
              scale: [1, 1.5, 1],
              rotate: [0, 360],
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              delay: i * 0.2,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>

      <div className="max-w-6xl mx-auto px-6 py-20 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold leading-tight"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.8 }}
            >
              Hi, I'm <span className="gradient-text">Ashnoor Singh</span>
            </motion.h1>
            
            <motion.h2
              className="text-2xl md:text-3xl text-slate-300 font-medium"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              AI Engineer & CS Student
            </motion.h2>
            
            <motion.p
              className="text-lg text-slate-400 leading-relaxed max-w-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Passionate about AI, Machine Learning, and Computer Vision. Currently pursuing B.Tech CSE from GGSIPU with 
              a CGPA of 9.28, dedicated to building innovative AI solutions and leading technical teams.
            </motion.p>

            <motion.div
              className="flex flex-wrap gap-4 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <motion.button
                onClick={handleContactClick}
                className="relative bg-gradient-to-r from-accent-blue to-accent-purple text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2 overflow-hidden"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <motion.div
                  className="absolute inset-0 bg-gradient-to-r from-white/20 to-transparent"
                  animate={{ x: [-100, 300] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                />
                <Mail size={18} />
                Get In Touch
              </motion.button>
              
              <motion.a
                href="#"
                className="border border-accent-blue text-accent-blue hover:bg-accent-blue hover:text-white px-8 py-3 rounded-lg font-medium transition-all duration-300 flex items-center gap-2"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Download size={18} />
                Download Resume
              </motion.a>
            </motion.div>

            <motion.div
              className="flex space-x-6 pt-4"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              {[
                { icon: Github, href: "https://github.com/AshnoorSingh" },
                { icon: Linkedin, href: "https://linkedin.com/in/ashnoorsingh" },
                { icon: Twitter, href: "https://twitter.com/Ashnoor1313" },
              ].map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-400 hover:text-accent-blue text-2xl transition-colors duration-300"
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                >
                  <social.icon size={28} />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            <div className="relative">
              <motion.div
                className="w-80 h-80 rounded-2xl overflow-hidden border-4 border-accent-blue/30"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={profileImage}
                  alt="Ashnoor Singh - Professional headshot"
                  className="w-full h-full object-cover"
                />
              </motion.div>
              <motion.div
                className="absolute -bottom-6 -right-6 w-24 h-24 bg-gradient-to-r from-accent-blue to-accent-purple rounded-xl flex items-center justify-center text-2xl"
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
              >
                🤖
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
