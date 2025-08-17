import { motion } from "framer-motion";
import { Github, Linkedin, Twitter, Mail, Heart } from "lucide-react";
import { useLocation } from "wouter";

export default function Footer() {
  const [location, setLocation] = useLocation();

  const socialLinks = [
    { icon: Github, href: "https://github.com/AshnoorSingh", label: "GitHub" },
    { icon: Linkedin, href: "https://linkedin.com/in/ashnoorsingh", label: "LinkedIn" },
    { icon: Twitter, href: "https://twitter.com/Ashnoor1313", label: "Twitter" },
    { icon: Mail, href: "mailto:ashnoorchhabra1313@gmail.com", label: "Email" },
  ];

  const quickLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
  ];

  const handleFooterNavClick = (href: string) => {
    // If it's a hash link, scroll to section
    if (href.startsWith('#')) {
      // If not on home page, navigate to home first
      if (location !== '/') {
        setLocation('/');
        // Wait for navigation then scroll
        setTimeout(() => {
          const element = document.querySelector(href);
          if (element) {
            element.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }, 100);
      } else {
        // Already on home page, just scroll
        const element = document.querySelector(href);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }
    } else {
      // Regular page navigation
      setLocation(href);
    }
  };

  return (
    <footer className="bg-dark-tertiary border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6 py-12">
        <div className="grid md:grid-cols-4 gap-8">
          {/* Brand Section */}
          <motion.div
            className="md:col-span-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-2xl font-bold gradient-text mb-4">
              Ashnoor Singh
            </h3>
            <p className="text-slate-400 mb-6 max-w-md">
              AI/ML Engineering student passionate about creating innovative solutions 
              through artificial intelligence and machine learning technologies.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative w-10 h-10 bg-slate-700 rounded-lg flex items-center justify-center transition-all duration-300 overflow-hidden group"
                  whileHover={{ 
                    scale: 1.15, 
                    y: -4,
                    rotate: [0, -5, 5, 0],
                  }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                  transition={{ 
                    type: "spring", 
                    stiffness: 400, 
                    damping: 10 
                  }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-br from-accent-blue via-accent-purple to-pink-500 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.2 }
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/10 rounded-lg"
                    initial={{ x: "-100%", skewX: -45 }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  />
                  <motion.div
                    className="relative z-10"
                    whileHover={{ 
                      color: "#ffffff",
                      scale: 1.1,
                    }}
                  >
                    <social.icon size={18} />
                  </motion.div>
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-slate-200">
              Quick Links
            </h4>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <motion.button
                    onClick={() => handleFooterNavClick(link.href)}
                    className={`relative group px-3 py-2 rounded-md transition-all duration-300 overflow-hidden ${
                      location === link.href
                        ? "text-accent-blue"
                        : "text-slate-400"
                    }`}
                    whileHover={{ 
                      x: 8,
                      color: "#3B82F6",
                      scale: 1.05
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-accent-blue/10 to-accent-purple/10 rounded-md"
                      initial={{ opacity: 0, x: "-100%" }}
                      whileHover={{ 
                        opacity: 1,
                        x: 0,
                        transition: { duration: 0.3 }
                      }}
                    />
                    <motion.div
                      className="absolute inset-0 bg-accent-blue/5 rounded-md"
                      initial={{ scaleX: 0 }}
                      whileHover={{ 
                        scaleX: 1,
                        transition: { duration: 0.4, ease: "easeOut" }
                      }}
                      style={{ originX: 0 }}
                    />
                    <span className="relative z-10">{link.label}</span>
                    <motion.div
                      className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-accent-blue to-accent-purple"
                      initial={{ scaleX: 0 }}
                      whileHover={{ 
                        scaleX: 1,
                        transition: { duration: 0.3, delay: 0.1 }
                      }}
                      style={{ originX: 0 }}
                    />
                  </motion.button>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-lg font-semibold mb-4 text-slate-200">
              Get In Touch
            </h4>
            <div className="space-y-3 text-slate-400">
              <p>
                <span className="font-medium">Email:</span><br />
                ashnoorchhabra1313@gmail.com
              </p>
              <p>
                <span className="font-medium">Phone:</span><br />
                +91 9988766184
              </p>
              <p>
                <span className="font-medium">Location:</span><br />
                New Delhi, India
              </p>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <motion.div
          className="border-t border-slate-700 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <div className="flex items-center space-x-2 text-slate-400 mb-4 md:mb-0">
            <span>Made with</span>
            <Heart size={16} className="text-red-500" fill="currentColor" />
            <span>by Ashnoor Singh</span>
          </div>
          
          <div className="text-slate-400 text-sm">
            <p>&copy; {new Date().getFullYear()} Ashnoor Singh. All rights reserved.</p>
          </div>
        </motion.div>
      </div>
    </footer>
  );
}