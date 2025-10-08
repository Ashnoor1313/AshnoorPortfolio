"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { Mail, Phone, MapPin, Github, Linkedin, Twitter } from "lucide-react";

export default function ContactSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "ashnoorchhabra1313@gmail.com",
      color: "from-accent-blue to-accent-purple",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 9988766184",
      color: "from-accent-purple to-pink-500",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "New Delhi, India",
      color: "from-green-500 to-teal-500",
    },
  ];

  const socialLinks = [
    { icon: Github, href: "https://github.com/Ashnoor1313", color: "hover:bg-accent-blue" },
    {
      icon: Linkedin,
      href: "https://www.linkedin.com/in/ashnoor-singh-683640298?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
      color: "hover:bg-accent-blue",
    },
    { icon: Twitter, href: "https://x.com/Ashnoor1313", color: "hover:bg-accent-purple" },
  ];

  // no form; contact via email, phone and social links

  return (
    <section
      id="contact"
      ref={ref}
      className="py-20 bg-dark-secondary relative overflow-hidden scroll-mt-20"
    >
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div
          className="absolute top-32 -left-10 w-20 h-20 border border-accent-blue/30 rounded-full"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-20 -right-10 w-16 h-16 bg-accent-purple/20 rotate-45"
          animate={{
            rotate: [45, 405],
            y: [0, -30, 0],
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/4 right-1/4 w-1 h-24 bg-gradient-to-b from-accent-blue/40 to-transparent"
          animate={{
            scaleY: [1, 1.5, 1],
            opacity: [0.4, 0.8, 0.4],
          }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        />
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Get In <span className="gradient-text">Touch</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto mb-4"></div>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects,
            or just having a chat about AI and technology.
          </p>
        </motion.div>

        {/* Contact Info + Social Links */}
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10">
          {/* Contact Information */}
          <motion.div
            className="space-y-8 flex-1"
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <h3 className="text-2xl font-semibold mb-6">Let's Connect</h3>

            <div className="space-y-6">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="flex items-center space-x-4 p-4 bg-dark-tertiary rounded-lg hover:bg-slate-700 transition-colors duration-300"
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.4 + index * 0.1 }}
                  whileHover={{ scale: 1.02 }}
                >
                  <div
                    className={`w-12 h-12 bg-gradient-to-r ${info.color} rounded-lg flex items-center justify-center`}
                  >
                    <info.icon className="text-white" size={20} />
                  </div>
                  <div>
                    <p className="text-slate-400 text-sm">{info.label}</p>
                    <p className="text-slate-200">{info.value}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Social Links */}
          <motion.div
            className="pt-6 flex-1"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <h4 className="text-lg font-semibold mb-4">Follow Me</h4>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-12 h-12 bg-slate-700 ${social.color} rounded-lg flex items-center justify-center transition-all duration-300`}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, scale: 0 }}
                  animate={isInView ? { opacity: 1, scale: 1 } : {}}
                  transition={{ delay: 0.8 + index * 0.1 }}
                >
                  <social.icon size={20} />
                </motion.a>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
