import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { CheckCircle, Trophy, Medal, Star, Users, Code, Book } from "lucide-react";

export default function Education() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const courses = [
    { name: "Data Structures & Algorithms", icon: CheckCircle },
    { name: "Machine Learning Fundamentals", icon: CheckCircle },
    { name: "Computer Vision", icon: CheckCircle },
    { name: "Natural Language Processing", icon: CheckCircle },
    { name: "Database Management Systems", icon: CheckCircle },
    { name: "Software Engineering", icon: CheckCircle },
  ];

  const achievements = [
    { name: "CGPA: 9.28 - Outstanding Academic Performance", icon: Trophy },
    { name: "AI Masters Lead at IEEE GTBIT", icon: Medal },
    { name: "Outstanding Team Lead Recognition", icon: Star },
    { name: "Data Science and Analytics Certified", icon: Users },
    { name: "Python and Machine Learning Certified", icon: Code },
    { name: "Led Cross-functional Team of 15 Members", icon: Book },
  ];

  return (
    <section id="education" className="py-20 relative overflow-hidden scroll-mt-20" ref={ref}>
      {/* Animated Background Elements */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-40 left-20 w-24 h-1 bg-gradient-to-r from-accent-blue/40 to-transparent rotate-45"
          animate={{ x: [-100, window.innerWidth + 100] }}
          transition={{ duration: 14, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className="absolute bottom-16 right-16 w-3 h-3 bg-accent-purple/60 rounded-full"
          animate={{ 
            scale: [1, 2.5, 1],
            opacity: [0.6, 1, 0.6],
            rotate: [0, 360]
          }}
          transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Education & <span className="gradient-text">Learning</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-accent-blue to-accent-purple mx-auto"></div>
        </motion.div>

        <div className="space-y-8">
          {/* Current Education */}
          <motion.div
            className="bg-dark-secondary p-8 rounded-xl border border-slate-600 hover:border-accent-blue/50 transition-all duration-300"
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="grid md:grid-cols-4 gap-6 items-center">
              <div className="md:col-span-1">
                <img
                  src="https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=400&h=300"
                  alt="GGSIPU Campus"
                  className="w-full h-32 object-cover rounded-lg"
                />
              </div>
              <div className="md:col-span-3">
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <h3 className="text-2xl font-bold text-accent-blue">
                    Bachelor of Technology - Computer Science Engineering
                  </h3>
                  <span className="bg-accent-blue/20 text-accent-blue px-3 py-1 rounded-full text-sm font-medium">
                    Sept 2023 - Aug 2027
                  </span>
                </div>
                <p className="text-xl text-slate-300 mb-2">
                  Guru Gobind Singh Indraprastha University (GGSIPU)
                </p>
                <p className="text-slate-400 mb-4">New Delhi, India</p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <p className="text-slate-300"><strong>CGPA:</strong> 9.28</p>
                    <p className="text-slate-300">
                      <strong></strong> 
                    </p>
                  </div>
                  <div>
                    <p className="text-slate-300"><strong>Expected Graduation:</strong> August 2027</p>
                    <p className="text-slate-300">
                      <strong>Coursework:</strong> Machine Learning, Data Structures, OS, DBMS
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Courses and Achievements */}
          {/* Previous Education */}
          <motion.div
            className="bg-dark-secondary p-6 rounded-xl border border-slate-600 hover:border-accent-blue/50 transition-all duration-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
              <h3 className="text-xl font-bold text-accent-purple">
                Class X & XII - CBSE Board
              </h3>
              <span className="bg-accent-purple/20 text-accent-purple px-3 py-1 rounded-full text-sm font-medium">
                April 2008 - March 2023
              </span>
            </div>
            <p className="text-lg text-slate-300 mb-2">Sacred Heart Senior Secondary School</p>
            <p className="text-slate-400 mb-2">Punjab, India</p>
            <p className="text-slate-300"><strong>CGPA:</strong> 9+</p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              className="bg-dark-secondary p-6 rounded-xl border border-slate-600"
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent-purple">Key Courses & Projects</h3>
              <ul className="space-y-3 text-slate-300">
                {courses.map((course, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: -20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <course.icon className="text-accent-blue mr-3" size={20} />
                    {course.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>

            <motion.div
              className="bg-dark-secondary p-6 rounded-xl border border-slate-600"
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8, delay: 0.4 }}
            >
              <h3 className="text-xl font-semibold mb-4 text-accent-blue">Academic Achievements</h3>
              <ul className="space-y-3 text-slate-300">
                {achievements.map((achievement, index) => (
                  <motion.li
                    key={index}
                    className="flex items-center"
                    initial={{ opacity: 0, x: 20 }}
                    animate={isInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.6 + index * 0.1 }}
                  >
                    <achievement.icon className="text-yellow-500 mr-3" size={20} />
                    {achievement.name}
                  </motion.li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}