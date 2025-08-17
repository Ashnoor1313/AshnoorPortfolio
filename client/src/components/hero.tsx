import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Download, Mail } from "lucide-react";
import profileImage from "@assets/WhatsApp Image 2025-08-17 at 21.26.36_698cc3d0_1755446277688.jpg";

export default function Hero() {
  const handleContactClick = () => {
    const element = document.querySelector("#contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Stripes */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute -top-10 -left-32 w-96 h-2 bg-gradient-to-r from-accent-blue/30 to-transparent rotate-12"
          animate={{ x: [-200, window.innerWidth + 200] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute top-32 -right-32 w-80 h-1 bg-gradient-to-l from-accent-purple/40 to-transparent -rotate-12"
          animate={{ x: [window.innerWidth + 200, -200] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear", delay: 5 }}
        />
        <motion.div 
          className="absolute bottom-40 -left-32 w-72 h-1 bg-gradient-to-r from-pink-500/30 to-transparent rotate-6"
          animate={{ x: [-200, window.innerWidth + 200] }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear", delay: 10 }}
        />
      </div>
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-accent-blue/10 to-accent-purple/10"></div>
      <motion.div
        className="absolute top-20 left-10 w-72 h-72 bg-accent-blue/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, -20, 0],
          scale: [1, 1.1, 1],
          rotate: [0, 180, 360]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-20 right-10 w-96 h-96 bg-accent-purple/20 rounded-full blur-3xl"
        animate={{ 
          y: [0, 20, 0],
          scale: [1, 0.9, 1],
          rotate: [360, 180, 0]
        }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut", delay: 4 }}
      />
      
      {/* Floating Geometric Elements */}
      <motion.div
        className="absolute top-1/4 left-1/4 w-4 h-4 bg-accent-blue/60 rotate-45"
        animate={{ 
          y: [0, -30, 0],
          rotate: [45, 135, 45],
          opacity: [0.6, 1, 0.6]
        }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-1/3 right-1/4 w-6 h-6 border-2 border-accent-purple/50 rounded-full"
        animate={{ 
          scale: [1, 1.5, 1],
          rotate: [0, 180, 360],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 2 }}
      />
      <motion.div
        className="absolute top-1/2 right-1/6 w-3 h-12 bg-gradient-to-b from-pink-500/40 to-transparent"
        animate={{ 
          rotate: [0, 360],
          x: [0, 20, 0],
          opacity: [0.4, 0.8, 0.4]
        }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 1 }}
      />

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