import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";

interface GlobalLoadingProps {
  isLoading: boolean;
  message?: string;
}

export default function GlobalLoading({ isLoading, message = "Loading..." }: GlobalLoadingProps) {
  const [dots, setDots] = useState("");

  useEffect(() => {
    if (isLoading) {
      const interval = setInterval(() => {
        setDots(prev => {
          if (prev === "...") return "";
          return prev + ".";
        });
      }, 500);

      return () => clearInterval(interval);
    }
  }, [isLoading]);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          className="fixed inset-0 bg-dark-bg/95 backdrop-blur-sm z-50 flex items-center justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <motion.div
            className="text-center"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            transition={{ duration: 0.4, delay: 0.1 }}
          >
            {/* Animated Logo/Spinner */}
            <motion.div
              className="w-16 h-16 mx-auto mb-6 relative"
              animate={{ rotate: 360 }}
              transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
            >
              <div className="absolute inset-0 border-4 border-accent-blue/30 rounded-full"></div>
              <div className="absolute inset-2 border-4 border-accent-purple/50 rounded-full"></div>
              <motion.div
                className="absolute inset-1 border-2 border-accent-blue border-t-transparent rounded-full"
                animate={{ rotate: -360 }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
              ></motion.div>
            </motion.div>

            {/* Loading Text */}
            <motion.h2
              className="text-xl font-semibold text-slate-200 mb-2"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              {message}
              <span className="text-accent-blue">{dots}</span>
            </motion.h2>

            {/* Progress Indicator */}
            <motion.div
              className="w-48 h-1 bg-slate-700 rounded-full mx-auto overflow-hidden"
              initial={{ scaleX: 0 }}
              animate={{ scaleX: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
            >
              <motion.div
                className="h-full bg-gradient-to-r from-accent-blue to-accent-purple"
                animate={{ x: [-100, 300] }}
                transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                style={{ width: "100px" }}
              />
            </motion.div>
          </motion.div>

          {/* Background particles */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            {[...Array(6)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute w-1 h-1 bg-accent-blue/30 rounded-full"
                style={{
                  left: `${20 + i * 15}%`,
                  top: `${30 + (i % 3) * 20}%`,
                }}
                animate={{
                  opacity: [0.3, 0.8, 0.3],
                  scale: [1, 1.5, 1],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                }}
              />
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}