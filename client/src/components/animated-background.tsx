import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  color: string;
  duration: number;
  delay: number;
}

export default function AnimatedBackground() {
  const [particles, setParticles] = useState<Particle[]>([]);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const updateDimensions = () => {
      setDimensions({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    };

    updateDimensions();
    window.addEventListener('resize', updateDimensions);

    // Generate particles
    const newParticles: Particle[] = [];
    const colors = ['#3B82F6', '#8B5CF6', '#EC4899', '#06B6D4', '#10B981'];
    
    for (let i = 0; i < 40; i++) {
      newParticles.push({
        id: i,
        x: Math.random() * (typeof window !== 'undefined' ? window.innerWidth : 1200),
        y: Math.random() * (typeof window !== 'undefined' ? window.innerHeight : 800),
        size: Math.random() * 3 + 1,
        color: colors[Math.floor(Math.random() * colors.length)],
        duration: Math.random() * 15 + 8,
        delay: Math.random() * 3,
      });
    }
    setParticles(newParticles);

    return () => window.removeEventListener('resize', updateDimensions);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Floating Particles */}
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full opacity-60"
          style={{
            backgroundColor: particle.color,
            width: particle.size,
            height: particle.size,
            filter: 'blur(0.5px)',
          }}
          initial={{
            x: particle.x,
            y: particle.y,
            opacity: 0,
          }}
          animate={{
            x: [particle.x, particle.x + 80, particle.x - 40, particle.x],
            y: [particle.y, particle.y - 80, particle.y + 40, particle.y],
            opacity: [0, 0.7, 0.9, 0.4, 0],
            scale: [1, 1.3, 0.8, 1.1, 1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Dynamic Wave Patterns */}
      <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
        <defs>
          <linearGradient id="waveGradient1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#3B82F6', stopOpacity: 0.08 }} />
            <stop offset="50%" style={{ stopColor: '#8B5CF6', stopOpacity: 0.15 }} />
            <stop offset="100%" style={{ stopColor: '#EC4899', stopOpacity: 0.08 }} />
          </linearGradient>
          <linearGradient id="waveGradient2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" style={{ stopColor: '#10B981', stopOpacity: 0.08 }} />
            <stop offset="50%" style={{ stopColor: '#06B6D4', stopOpacity: 0.12 }} />
            <stop offset="100%" style={{ stopColor: '#3B82F6', stopOpacity: 0.08 }} />
          </linearGradient>
          <linearGradient id="neuralGradient">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
            <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.05" />
          </linearGradient>
        </defs>

        <motion.path
          d={`M0,${dimensions.height * 0.15} Q${dimensions.width * 0.25},${dimensions.height * 0.1} ${dimensions.width * 0.5},${dimensions.height * 0.15} T${dimensions.width},${dimensions.height * 0.1} V${dimensions.height} H0 Z`}
          fill="url(#waveGradient1)"
          animate={{
            d: [
              `M0,${dimensions.height * 0.15} Q${dimensions.width * 0.25},${dimensions.height * 0.1} ${dimensions.width * 0.5},${dimensions.height * 0.15} T${dimensions.width},${dimensions.height * 0.1} V${dimensions.height} H0 Z`,
              `M0,${dimensions.height * 0.2} Q${dimensions.width * 0.25},${dimensions.height * 0.05} ${dimensions.width * 0.5},${dimensions.height * 0.2} T${dimensions.width},${dimensions.height * 0.15} V${dimensions.height} H0 Z`,
              `M0,${dimensions.height * 0.15} Q${dimensions.width * 0.25},${dimensions.height * 0.1} ${dimensions.width * 0.5},${dimensions.height * 0.15} T${dimensions.width},${dimensions.height * 0.1} V${dimensions.height} H0 Z`,
            ],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.path
          d={`M0,${dimensions.height * 0.85} Q${dimensions.width * 0.25},${dimensions.height * 0.8} ${dimensions.width * 0.5},${dimensions.height * 0.85} T${dimensions.width},${dimensions.height * 0.8} V${dimensions.height} H0 Z`}
          fill="url(#waveGradient2)"
          animate={{
            d: [
              `M0,${dimensions.height * 0.85} Q${dimensions.width * 0.25},${dimensions.height * 0.8} ${dimensions.width * 0.5},${dimensions.height * 0.85} T${dimensions.width},${dimensions.height * 0.8} V${dimensions.height} H0 Z`,
              `M0,${dimensions.height * 0.8} Q${dimensions.width * 0.25},${dimensions.height * 0.9} ${dimensions.width * 0.5},${dimensions.height * 0.8} T${dimensions.width},${dimensions.height * 0.85} V${dimensions.height} H0 Z`,
              `M0,${dimensions.height * 0.85} Q${dimensions.width * 0.25},${dimensions.height * 0.8} ${dimensions.width * 0.5},${dimensions.height * 0.85} T${dimensions.width},${dimensions.height * 0.8} V${dimensions.height} H0 Z`,
            ],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
        />

        {/* Neural Network Pattern */}
        {Array.from({ length: 12 }).map((_, i) => {
          const x1 = Math.random() * dimensions.width;
          const y1 = Math.random() * dimensions.height;
          const x2 = Math.random() * dimensions.width;
          const y2 = Math.random() * dimensions.height;
          
          return (
            <motion.line
              key={i}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#neuralGradient)"
              strokeWidth="1"
              initial={{ pathLength: 0, opacity: 0 }}
              animate={{ 
                pathLength: [0, 1, 0],
                opacity: [0, 0.3, 0],
              }}
              transition={{
                duration: Math.random() * 8 + 4,
                repeat: Infinity,
                delay: i * 0.4,
                ease: "easeInOut",
              }}
            />
          );
        })}
      </svg>

      {/* Geometric Patterns */}
      <div className="absolute inset-0 opacity-30">
        <motion.div
          className="absolute top-1/4 left-1/4 w-24 h-24 border border-accent-blue/20"
          style={{ 
            clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          }}
          animate={{
            rotate: [0, 360],
            scale: [1, 1.15, 1],
            opacity: [0.2, 0.4, 0.2],
          }}
          transition={{
            duration: 16,
            repeat: Infinity,
            ease: "linear",
          }}
        />

        <motion.div
          className="absolute bottom-1/4 right-1/4 w-20 h-20 bg-gradient-to-br from-accent-purple/10 to-accent-blue/10"
          style={{
            clipPath: 'polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)',
          }}
          animate={{
            rotate: [0, -360],
            scale: [1, 0.8, 1.1, 1],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: 14,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 h-32 border border-accent-purple/15 rounded-full"
          animate={{
            scale: [1, 1.3, 1],
            rotate: [0, 180, 360],
            opacity: [0.1, 0.25, 0.1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      {/* Radial Pulse Effects */}
      <div className="absolute inset-0 opacity-20">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded-full border"
            style={{
              width: 300 + i * 150,
              height: 300 + i * 150,
              borderColor: i % 2 === 0 ? 'rgba(59, 130, 246, 0.08)' : 'rgba(139, 92, 246, 0.08)',
            }}
            animate={{
              scale: [0.8, 1.2, 0.8],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{
              duration: 6 + i * 2,
              repeat: Infinity,
              delay: i * 1.5,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}