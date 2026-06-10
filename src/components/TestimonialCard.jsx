import React from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaQuoteLeft } from 'react-icons/fa';

export default function TestimonialCard({ testimonial, index }) {
  // Generate star rating elements
  const stars = Array.from({ length: 5 }, (_, i) => {
    const isHalf = i + 0.5 === testimonial.rating;
    const isFull = i < testimonial.rating;
    return (
      <FaStar 
        key={i} 
        className={`w-3.5 h-3.5 ${
          isFull ? 'text-amber-400' : 'text-slate-200 dark:text-slate-800'
        }`} 
      />
    );
  });

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.4, delay: index * 0.1 }}
      className="glass-card rounded-2xl p-6 md:p-8 flex flex-col justify-between border border-slate-200/50 dark:border-slate-800/40 relative hover:shadow-lg transition-all duration-300"
    >
      {/* Quote decoration */}
      <div className="absolute top-6 right-8 text-primary-500/10 dark:text-primary-400/5 pointer-events-none">
        <FaQuoteLeft className="w-10 h-10" />
      </div>

      <div>
        {/* Rating Stars & Service Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-4">
          <div className="flex space-x-1">{stars}</div>
          <span className="text-[10px] font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider bg-slate-100 dark:bg-slate-900/60 px-2 py-0.5 rounded-md border border-slate-200/40 dark:border-slate-850">
            {testimonial.service}
          </span>
        </div>

        {/* Review Text */}
        <p className="text-slate-600 dark:text-slate-300 text-sm italic leading-relaxed mb-6">
          "{testimonial.text}"
        </p>
      </div>

      {/* Reviewer Details */}
      <div className="flex items-center space-x-3.5 pt-4 border-t border-slate-200/40 dark:border-slate-800/30">
        <img
          src={testimonial.avatar}
          alt={testimonial.name}
          className="w-11 h-11 rounded-full object-cover border-2 border-primary-500/20 shadow-md shrink-0"
          onError={(e) => {
            // fallback generic avatar if image fails to load
            e.target.src = `https://api.dicebear.com/7.x/initials/svg?seed=${encodeURIComponent(testimonial.name)}`;
          }}
        />
        <div>
          <h4 className="font-display font-semibold text-sm text-slate-900 dark:text-white leading-tight">
            {testimonial.name}
          </h4>
          <span className="text-[11px] text-slate-500 dark:text-slate-400">
            {testimonial.role}
          </span>
        </div>
      </div>
    </motion.div>
  );
}
