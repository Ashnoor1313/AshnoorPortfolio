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
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
    { href: "/skills", label: "Skills" },
    { href: "/experience", label: "Experience" },
    { href: "/contact", label: "Contact" },
  ];

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
                  className="w-10 h-10 bg-slate-700 hover:bg-accent-blue rounded-lg flex items-center justify-center transition-all duration-300"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.9 }}
                  aria-label={social.label}
                >
                  <social.icon size={18} />
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
                    onClick={() => setLocation(link.href)}
                    className={`transition-colors duration-300 ${
                      location === link.href
                        ? "text-accent-blue"
                        : "text-slate-400 hover:text-slate-200"
                    }`}
                    whileHover={{ x: 4 }}
                  >
                    {link.label}
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