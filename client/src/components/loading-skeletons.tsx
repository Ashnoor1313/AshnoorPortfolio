import { motion } from "framer-motion";
import { Skeleton } from "@/components/ui/skeleton";

// Hero Section Skeleton
export function HeroSkeleton() {
  return (
    <section className="min-h-screen flex items-center justify-center bg-dark-bg relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 text-center relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-8"
        >
          {/* Name skeleton */}
          <Skeleton className="h-16 w-96 mx-auto" />
          
          {/* Title skeleton */}
          <Skeleton className="h-8 w-80 mx-auto" />
          
          {/* Description skeleton */}
          <div className="space-y-3">
            <Skeleton className="h-4 w-full max-w-2xl mx-auto" />
            <Skeleton className="h-4 w-3/4 mx-auto" />
            <Skeleton className="h-4 w-5/6 mx-auto" />
          </div>
          
          {/* Buttons skeleton */}
          <div className="flex flex-col sm:flex-row gap-6 justify-center">
            <Skeleton className="h-12 w-40" />
            <Skeleton className="h-12 w-40" />
          </div>
        </motion.div>
      </div>
      
      {/* Background elements skeleton */}
      <div className="absolute inset-0 overflow-hidden">
        <Skeleton className="absolute top-20 left-10 w-16 h-16 rounded-full" />
        <Skeleton className="absolute bottom-32 right-20 w-12 h-12 rounded-full" />
        <Skeleton className="absolute top-1/2 right-10 w-8 h-20" />
      </div>
    </section>
  );
}

// About Section Skeleton
export function AboutSkeleton() {
  return (
    <section className="py-20 bg-dark-secondary relative">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-1 w-24 mx-auto mb-6" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Image skeleton */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <Skeleton className="w-full h-96 rounded-2xl" />
          </motion.div>

          {/* Content skeleton */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <Skeleton className="h-8 w-3/4" />
            <div className="space-y-3">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-3/4" />
            </div>
            
            {/* Stats skeleton */}
            <div className="grid grid-cols-3 gap-6 pt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="text-center">
                  <Skeleton className="h-8 w-16 mx-auto mb-2" />
                  <Skeleton className="h-4 w-20 mx-auto" />
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

// Projects Grid Skeleton
export function ProjectsGridSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
      {[1, 2, 3, 4, 5, 6].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.1 }}
          className="bg-dark-tertiary rounded-xl border border-slate-600 overflow-hidden"
        >
          {/* Project image skeleton */}
          <Skeleton className="h-48 w-full" />
          
          <div className="p-6 space-y-4">
            {/* Title skeleton */}
            <Skeleton className="h-6 w-3/4" />
            
            {/* Description skeleton */}
            <div className="space-y-2">
              <Skeleton className="h-4 w-full" />
              <Skeleton className="h-4 w-5/6" />
              <Skeleton className="h-4 w-4/5" />
            </div>
            
            {/* Technologies skeleton */}
            <div className="flex flex-wrap gap-2">
              {[1, 2, 3].map((j) => (
                <Skeleton key={j} className="h-6 w-16 rounded-full" />
              ))}
            </div>
            
            {/* Buttons skeleton */}
            <div className="flex gap-3 pt-2">
              <Skeleton className="h-10 w-24" />
              <Skeleton className="h-10 w-24" />
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Skills Grid Skeleton
export function SkillsGridSkeleton() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
      {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: i * 0.1 }}
          className="bg-dark-tertiary p-6 rounded-xl border border-slate-600"
        >
          {/* Icon skeleton */}
          <Skeleton className="w-12 h-12 rounded-lg mb-4" />
          
          {/* Skill name skeleton */}
          <Skeleton className="h-5 w-3/4 mb-3" />
          
          {/* Progress bar skeleton */}
          <div className="space-y-2">
            <Skeleton className="h-2 w-full rounded-full" />
            <Skeleton className="h-3 w-12" />
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Experience Timeline Skeleton
export function ExperienceTimelineSkeleton() {
  return (
    <div className="relative">
      {/* Timeline line skeleton */}
      <Skeleton className="absolute left-6 top-0 bottom-0 w-0.5" />
      
      <div className="space-y-12">
        {[1, 2, 3, 4].map((i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: i * 0.2 }}
            className="relative pl-16"
          >
            {/* Timeline dot skeleton */}
            <Skeleton className="absolute left-4 w-4 h-4 rounded-full" />
            
            <div className="bg-dark-tertiary p-6 rounded-xl border border-slate-600 space-y-4">
              {/* Company and role skeleton */}
              <div className="flex justify-between items-start">
                <div className="space-y-2">
                  <Skeleton className="h-6 w-48" />
                  <Skeleton className="h-5 w-32" />
                </div>
                <Skeleton className="h-5 w-24" />
              </div>
              
              {/* Description skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/5" />
              </div>
              
              {/* Skills skeleton */}
              <div className="flex flex-wrap gap-2">
                {[1, 2, 3, 4].map((j) => (
                  <Skeleton key={j} className="h-6 w-16 rounded-full" />
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

// Education Cards Skeleton
export function EducationCardsSkeleton() {
  return (
    <div className="space-y-8">
      {[1, 2, 3].map((i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: i * 0.2 }}
          className="bg-dark-tertiary p-8 rounded-xl border border-slate-600"
        >
          <div className="flex items-start gap-6">
            {/* Institution logo skeleton */}
            <Skeleton className="w-16 h-16 rounded-xl flex-shrink-0" />
            
            <div className="flex-1 space-y-4">
              {/* Degree and institution skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-6 w-3/4" />
                <Skeleton className="h-5 w-1/2" />
              </div>
              
              {/* Period skeleton */}
              <Skeleton className="h-4 w-32" />
              
              {/* Description skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
              </div>
              
              {/* Achievements skeleton */}
              <div className="space-y-2">
                {[1, 2].map((j) => (
                  <div key={j} className="flex items-center gap-2">
                    <Skeleton className="w-4 h-4" />
                    <Skeleton className="h-4 flex-1" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}

// Contact Form Skeleton
export function ContactFormSkeleton() {
  return (
    <section className="py-20 bg-dark-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <Skeleton className="h-12 w-64 mx-auto mb-4" />
          <Skeleton className="h-1 w-24 mx-auto mb-6" />
          <Skeleton className="h-6 w-96 mx-auto" />
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Contact info skeleton */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="space-y-8"
          >
            <Skeleton className="h-8 w-32" />
            
            <div className="space-y-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="flex items-center space-x-4 p-4 bg-dark-tertiary rounded-lg">
                  <Skeleton className="w-12 h-12 rounded-lg" />
                  <div className="space-y-2">
                    <Skeleton className="h-3 w-16" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
              ))}
            </div>

            {/* Social links skeleton */}
            <div className="pt-6">
              <Skeleton className="h-6 w-24 mb-4" />
              <div className="flex space-x-4">
                {[1, 2, 3].map((i) => (
                  <Skeleton key={i} className="w-12 h-12 rounded-lg" />
                ))}
              </div>
            </div>
          </motion.div>

          {/* Contact form skeleton */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="bg-dark-tertiary p-8 rounded-xl border border-slate-600"
          >
            <Skeleton className="h-8 w-32 mb-6" />
            
            <div className="space-y-6">
              {/* Name fields skeleton */}
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-20" />
                  <Skeleton className="h-10 w-full" />
                </div>
              </div>
              
              {/* Email field skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-12" />
                <Skeleton className="h-10 w-full" />
              </div>
              
              {/* Subject field skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-10 w-full" />
              </div>
              
              {/* Message field skeleton */}
              <div className="space-y-2">
                <Skeleton className="h-4 w-16" />
                <Skeleton className="h-32 w-full" />
              </div>
              
              {/* Submit button skeleton */}
              <Skeleton className="h-12 w-full" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}



// Generic Page Loading Skeleton
export function PageLoadingSkeleton() {
  return (
    <div className="min-h-screen bg-dark-bg">
      <div className="pt-20 pb-20">
        <div className="max-w-6xl mx-auto px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <Skeleton className="h-12 w-64 mx-auto mb-4" />
            <Skeleton className="h-6 w-96 mx-auto" />
          </motion.div>
          
          <div className="space-y-8">
            {[1, 2, 3].map((i) => (
              <Skeleton key={i} className="h-32 w-full" />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}