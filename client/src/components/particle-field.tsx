import { motion } from "framer-motion";
import { useEffect, useState } from "react";

interface StarParticle {
  id: number;
  x: number;
  y: number;
  size: number;
  twinkleSpeed: number;
  color: string;
}

interface ShootingStar {
  id: number;
  startX: number;
  startY: number;
  endX: number;
  endY: number;
  duration: number;
  delay: number;
}

export default function ParticleField() {
  const [stars, setStars] = useState<StarParticle[]>([]);
  const [shootingStars, setShootingStars] = useState<ShootingStar[]>([]);

  useEffect(() => {
    // Generate twinkling stars
    const newStars: StarParticle[] = [];
    const colors = ['#60A5FA', '#A78BFA', '#F472B6', '#34D399', '#FBBF24'];
    
    for (let i = 0; i < 80; i++) {
      newStars.push({
        id: i,
        x: Math.random() * 100,
        y: Math.random() * 100,
        size: Math.random() * 2 + 1,
        twinkleSpeed: Math.random() * 3 + 2,
        color: colors[Math.floor(Math.random() * colors.length)],
      });
    }
    setStars(newStars);

    // Generate shooting stars
    const newShootingStars: ShootingStar[] = [];
    for (let i = 0; i < 6; i++) {
      newShootingStars.push({
        id: i,
        startX: Math.random() * 100,
        startY: Math.random() * 30,
        endX: Math.random() * 100,
        endY: Math.random() * 70 + 30,
        duration: Math.random() * 3 + 2,
        delay: Math.random() * 8,
      });
    }
    setShootingStars(newShootingStars);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {/* Twinkling Stars */}
      {stars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute rounded-full"
          style={{
            left: `${star.x}%`,
            top: `${star.y}%`,
            width: star.size,
            height: star.size,
            backgroundColor: star.color,
            boxShadow: `0 0 ${star.size * 2}px ${star.color}`,
          }}
          animate={{
            opacity: [0.2, 1, 0.2],
            scale: [0.8, 1.2, 0.8],
          }}
          transition={{
            duration: star.twinkleSpeed,
            repeat: Infinity,
            ease: "easeInOut",
            delay: Math.random() * 2,
          }}
        />
      ))}

      {/* Shooting Stars */}
      {shootingStars.map((star) => (
        <motion.div
          key={star.id}
          className="absolute h-px bg-gradient-to-r from-white/80 via-accent-blue/60 to-transparent"
          style={{
            left: `${star.startX}%`,
            top: `${star.startY}%`,
            width: '100px',
            transformOrigin: 'left center',
          }}
          initial={{ 
            scaleX: 0, 
            opacity: 0,
            rotate: Math.atan2(star.endY - star.startY, star.endX - star.startX) * (180 / Math.PI),
          }}
          animate={{
            scaleX: [0, 1, 0],
            opacity: [0, 1, 0],
            x: [(star.endX - star.startX) + '%'],
            y: [(star.endY - star.startY) + '%'],
          }}
          transition={{
            duration: star.duration,
            repeat: Infinity,
            delay: star.delay,
            ease: "easeOut",
          }}
        />
      ))}

      {/* Floating Orbs */}
      {Array.from({ length: 12 }).map((_, i) => (
        <motion.div
          key={`orb-${i}`}
          className="absolute rounded-full opacity-30"
          style={{
            width: Math.random() * 8 + 4,
            height: Math.random() * 8 + 4,
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            background: `radial-gradient(circle, ${['#3B82F6', '#8B5CF6', '#EC4899'][i % 3]} 0%, transparent 70%)`,
          }}
          animate={{
            x: [0, Math.random() * 200 - 100, 0],
            y: [0, Math.random() * 200 - 100, 0],
            scale: [1, Math.random() * 1.5 + 0.5, 1],
            opacity: [0.1, 0.4, 0.1],
          }}
          transition={{
            duration: Math.random() * 15 + 10,
            repeat: Infinity,
            delay: i * 0.8,
            ease: "easeInOut",
          }}
        />
      ))}

      {/* Binary Rain Effect */}
      <div className="absolute inset-0 opacity-5">
        {Array.from({ length: 15 }).map((_, i) => (
          <motion.div
            key={`binary-${i}`}
            className="absolute text-accent-blue/40 text-xs font-mono"
            style={{
              left: `${(i * 6.67)}%`,
              top: '-20px',
            }}
            animate={{
              y: ['0vh', '120vh'],
            }}
            transition={{
              duration: Math.random() * 8 + 5,
              repeat: Infinity,
              delay: i * 0.3,
              ease: "linear",
            }}
          >
            {Array.from({ length: 20 }).map((_, j) => (
              <div key={j} className="mb-2">
                {Math.random() > 0.5 ? '1' : '0'}
              </div>
            ))}
          </motion.div>
        ))}
      </div>
    </div>
  );
}