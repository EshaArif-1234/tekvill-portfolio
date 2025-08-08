"use client";

import React, { useState, useRef, useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Testimonials: React.FC = () => {
  // Animation variant for fade-in effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Sample testimonials data
  const testimonials = [
    {
      quote: "Tekvill transformed our digital presence with a seamless web application. Their expertise and dedication are unmatched.",
      author: "Sarah Johnson",
      position: "CEO, TechStart Inc."
    },
    {
      quote: "Working with Tekvill on our cloud migration was a game-changer. They made a complex process feel effortless.",
      author: "Michael Chen",
      position: "CTO, CloudWave Solutions"
    },
    {
      quote: "Their UI/UX design skills brought our app to life. Our users love the intuitive interface, thanks to Tekvill.",
      author: "Emma Rodriguez",
      position: "Product Manager, AppSphere"
    },
    {
      quote: "Tekvill's DevOps solutions streamlined our deployment process, saving us time and resources.",
      author: "Alex Carter",
      position: "Lead Engineer, InnovateTech"
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const itemsPerPage = 3; // Show three testimonials at a time on larger screens
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  // Get the testimonials to display based on current index
  const visibleTestimonials = [];
  for (let i = 0; i < itemsPerPage; i++) {
    const index = (currentIndex + i) % testimonials.length;
    visibleTestimonials.push(testimonials[index]);
  }

  // Drag handling
  const handleDragEnd = (event: any, info: any) => {
    const offset = info.offset.x;
    const threshold = 50; // Minimum drag distance to trigger a slide
    if (offset < -threshold) {
      handleNext();
    } else if (offset > threshold) {
      handlePrev();
    }
    controls.start({ x: 0, transition: { type: 'spring', stiffness: 300, damping: 30 } });
  };

  useEffect(() => {
    controls.start({ x: 0 });
  }, [currentIndex, controls]);

  return (
    <section className="py-20 bg-gray-900 text-white flex flex-col items-center px-6">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-400 mb-12 text-center"
      >
        What Our Clients Say
      </motion.h2>
      
      <div className="max-w-5xl w-full relative overflow-hidden">
        <motion.div
          ref={ref}
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragEnd={handleDragEnd}
          animate={controls}
          className="flex flex-col md:flex-row gap-8 justify-center items-center w-full cursor-grab active:cursor-grabbing"
        >
          {visibleTestimonials.map((testimonial, index) => (
            <motion.div 
              key={currentIndex + index} // Key changes with index to force animation on slide change
              initial={{ opacity: 0, x: index > 0 ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: index > 0 ? -50 : 50 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="bg-gray-800/50 p-6 rounded-xl border border-gray-700 hover:border-blue-500 transition-all duration-300 shadow-md text-center w-full md:w-1/3"
            >
              <p className="text-gray-300 italic text-base mb-4">\"{testimonial.quote}\"</p>
              <h4 className="text-blue-400 font-semibold text-lg">{testimonial.author}</h4>
              <p className="text-gray-400 text-sm">{testimonial.position}</p>
            </motion.div>
          ))}
        </motion.div>
        
        {/* Navigation Arrows */}
        <div className="absolute inset-0 flex justify-between items-center px-14 md:px-0 pointer-events-none">
          <button 
            onClick={handlePrev} 
            className="bg-gray-800/80 hover:bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md pointer-events-auto"
            aria-label="Previous testimonial"
          >
            <FaArrowLeft />
          </button>
          <button 
            onClick={handleNext} 
            className="bg-gray-800/80 hover:bg-blue-500 text-white rounded-full w-10 h-10 flex items-center justify-center shadow-md pointer-events-auto"
            aria-label="Next testimonial"
          >
            <FaArrowRight />
          </button>
        </div>

        {/* Dots for navigation */}
        <div className="flex justify-center gap-2 mt-8">
          {testimonials.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentIndex(index)} 
              className={`w-3 h-3 rounded-full ${index === currentIndex ? 'bg-blue-500' : 'bg-gray-600'} transition-colors duration-300`}
              aria-label={`Go to testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
