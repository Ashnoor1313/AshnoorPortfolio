import { motion } from "framer-motion";

export default function Footer() {
  const navLinks = [
    { href: "#home", label: "Home" },
    { href: "#about", label: "About" },
    { href: "#projects", label: "Projects" },
    { href: "#contact", label: "Contact" },
  ];

  const handleNavClick = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <footer className="py-12 border-t border-slate-700">
      <div className="max-w-6xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <motion.div
            className="mb-4 md:mb-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <p className="text-slate-400">
              © 2024 <span className="gradient-text font-semibold">Ashnoor Singh</span>. All rights reserved.
            </p>
          </motion.div>
          
          <motion.div
            className="flex space-x-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {navLinks.map((link, index) => (
              <motion.button
                key={index}
                onClick={() => handleNavClick(link.href)}
                className="text-slate-400 hover:text-accent-blue transition-colors duration-300"
                whileHover={{ scale: 1.05 }}
              >
                {link.label}
              </motion.button>
            ))}
          </motion.div>
        </div>
      </div>
    </footer>
  );
}