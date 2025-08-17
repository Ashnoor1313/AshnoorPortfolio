import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useLocation } from "wouter";

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [location, setLocation] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#skills", label: "Skills" },
    { href: "#education", label: "Education" },
    { href: "#experience", label: "Experience" },
    { href: "#contact", label: "Contact" },
    { href: "/admin", label: "Admin" },
  ];

  const handleNavClick = (href: string) => {
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
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 w-full z-50 glass-effect transition-all duration-300 ${
          isScrolled ? "bg-dark-secondary/95" : "bg-dark-secondary/80"
        }`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="max-w-6xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <motion.div
              className="text-xl font-bold gradient-text"
              whileHover={{ scale: 1.05 }}
            >
              Ashnoor Singh
            </motion.div>
            
            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-8">
              {navLinks.map((link) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 rounded-lg transition-all duration-300 overflow-hidden ${
                    location === link.href 
                      ? "text-accent-blue font-semibold" 
                      : "text-slate-300"
                  }`}
                  whileHover={{ 
                    scale: 1.05,
                    color: "#3B82F6",
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial={false}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-blue/20 to-accent-purple/20 rounded-lg"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.2 }
                    }}
                    exit={{ opacity: 0, scale: 0.8 }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-accent-blue/10 rounded-lg"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.6, ease: "easeInOut" }
                    }}
                  />
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <motion.button
              className="md:hidden text-slate-300"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              whileTap={{ scale: 0.9 }}
            >
              {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <motion.div
          className="fixed inset-0 z-40 md:hidden"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <div className="absolute inset-0 bg-dark-bg/95 backdrop-blur-md">
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              {navLinks.map((link, index) => (
                <motion.button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className={`relative text-2xl px-8 py-3 rounded-xl transition-all duration-300 overflow-hidden ${
                    location === link.href 
                      ? "text-accent-blue font-semibold" 
                      : "text-slate-300"
                  }`}
                  initial={{ opacity: 0, y: 50 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ 
                    scale: 1.1,
                    color: "#3B82F6",
                  }}
                  whileTap={{ scale: 0.95 }}
                >
                  <motion.div
                    className="absolute inset-0 bg-gradient-to-r from-accent-blue/30 to-accent-purple/30 rounded-xl"
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileHover={{ 
                      opacity: 1, 
                      scale: 1,
                      transition: { duration: 0.2 }
                    }}
                  />
                  <motion.div
                    className="absolute inset-0 bg-white/5 rounded-xl"
                    initial={{ x: "-100%" }}
                    whileHover={{ 
                      x: "100%",
                      transition: { duration: 0.8, ease: "easeInOut" }
                    }}
                  />
                  <span className="relative z-10">{link.label}</span>
                </motion.button>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </>
  );
}