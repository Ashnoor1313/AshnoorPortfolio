import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CosmicEffects() {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ 
        x: (e.clientX / window.innerWidth) * 100, 
        y: (e.clientY / window.innerHeight) * 100 
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Interactive Energy Field */}
      <motion.div
        className="absolute w-96 h-96 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, rgba(59, 130, 246, 0.3) 0%, rgba(139, 92, 246, 0.2) 50%, transparent 70%)',
          filter: 'blur(20px)',
        }}
        animate={{
          x: mousePosition.x * 4,
          y: mousePosition.y * 4,
          scale: [1, 1.2, 1],
        }}
        transition={{
          x: { type: "spring", damping: 30, stiffness: 100 },
          y: { type: "spring", damping: 30, stiffness: 100 },
          scale: { duration: 4, repeat: Infinity, ease: "easeInOut" }
        }}
      />

      {/* Spiral Energy Streams */}
      <svg className="absolute inset-0 w-full h-full opacity-15" viewBox="0 0 100 100">
        <defs>
          <linearGradient id="spiralGradient1" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#8B5CF6" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
          <linearGradient id="spiralGradient2" x1="100%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="#EC4899" stopOpacity="0.6" />
            <stop offset="50%" stopColor="#10B981" stopOpacity="0.4" />
            <stop offset="100%" stopColor="transparent" />
          </linearGradient>
        </defs>

        <motion.path
          d="M50,10 Q30,30 50,50 Q70,70 50,90 Q30,70 50,50 Q70,30 50,10"
          stroke="url(#spiralGradient1)"
          strokeWidth="0.3"
          fill="none"
          animate={{
            d: [
              "M50,10 Q30,30 50,50 Q70,70 50,90 Q30,70 50,50 Q70,30 50,10",
              "M50,10 Q20,20 50,50 Q80,80 50,90 Q20,80 50,50 Q80,20 50,10",
              "M50,10 Q30,30 50,50 Q70,70 50,90 Q30,70 50,50 Q70,30 50,10",
            ],
            rotate: [0, 360],
          }}
          transition={{
            d: { duration: 8, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 20, repeat: Infinity, ease: "linear" },
          }}
        />

        <motion.path
          d="M10,50 Q30,30 50,50 Q70,70 90,50 Q70,30 50,50 Q30,70 10,50"
          stroke="url(#spiralGradient2)"
          strokeWidth="0.3"
          fill="none"
          animate={{
            d: [
              "M10,50 Q30,30 50,50 Q70,70 90,50 Q70,30 50,50 Q30,70 10,50",
              "M10,50 Q20,20 50,50 Q80,80 90,50 Q80,20 50,50 Q20,80 10,50",
              "M10,50 Q30,30 50,50 Q70,70 90,50 Q70,30 50,50 Q30,70 10,50",
            ],
            rotate: [360, 0],
          }}
          transition={{
            d: { duration: 10, repeat: Infinity, ease: "easeInOut" },
            rotate: { duration: 25, repeat: Infinity, ease: "linear" },
          }}
        />
      </svg>

      {/* Cosmic Dust Clouds */}
      {Array.from({ length: 8 }).map((_, i) => (
        <motion.div
          key={`dust-${i}`}
          className="absolute rounded-full opacity-10"
          style={{
            width: Math.random() * 300 + 100,
            height: Math.random() * 150 + 50,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(ellipse, ${
              ['#3B82F6', '#8B5CF6', '#EC4899', '#10B981'][i % 4]
            } 0%, transparent 70%)`,
            filter: 'blur(40px)',
          }}
          animate={{
            x: [0, Math.random() * 100 - 50, 0],
            y: [0, Math.random() * 50 - 25, 0],
            scale: [1, Math.random() * 0.5 + 0.8, 1],
            opacity: [0.05, 0.15, 0.05],
            rotate: [0, Math.random() * 180 - 90, 0],
          }}
          transition={{
            duration: Math.random() * 20 + 15,
            repeat: Infinity,
            delay: i * 2,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Quantum Dots */}
      {Array.from({ length: 25 }).map((_, i) => (
        <motion.div
          key={`quantum-${i}`}
          className="absolute w-1 h-1 rounded-full opacity-40"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: ['#60A5FA', '#A78BFA', '#F472B6'][i % 3],
            boxShadow: `0 0 4px ${['#60A5FA', '#A78BFA', '#F472B6'][i % 3]}`,
          }}
          animate={{
            scale: [0.5, 2, 0.5],
            opacity: [0.2, 0.8, 0.2],
            x: [0, Math.random() * 40 - 20, 0],
            y: [0, Math.random() * 40 - 20, 0],
          }}
          transition={{
            duration: Math.random() * 6 + 3,
            repeat: Infinity,
            delay: i * 0.15,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Holographic Grid */}
      <div className="absolute inset-0 opacity-5">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(59, 130, 246, 0.3) 1px, transparent 1px),
              linear-gradient(90deg, rgba(59, 130, 246, 0.3) 1px, transparent 1px)
            `,
            backgroundSize: '60px 60px',
          }}
        />
        <motion.div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(rgba(139, 92, 246, 0.4) 1px, transparent 1px),
              linear-gradient(90deg, rgba(139, 92, 246, 0.4) 1px, transparent 1px)
            `,
            backgroundSize: '120px 120px',
          }}
          animate={{
            backgroundPositionX: [0, 120],
            backgroundPositionY: [0, 120],
          }}
          transition={{
            duration: 30,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      {/* Energy Pulse Rings */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
        {Array.from({ length: 5 }).map((_, i) => (
          <motion.div
            key={`pulse-${i}`}
            className="absolute border rounded-full"
            style={{
              width: 100 + i * 80,
              height: 100 + i * 80,
              borderColor: i % 2 === 0 ? 'rgba(59, 130, 246, 0.1)' : 'rgba(139, 92, 246, 0.1)',
              borderWidth: '1px',
              top: '50%',
              left: '50%',
              transform: 'translate(-50%, -50%)',
            }}
            animate={{
              scale: [0.8, 1.3, 0.8],
              opacity: [0.1, 0.3, 0.1],
              rotate: [0, 360],
            }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              delay: i * 1,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </div>
  );
}