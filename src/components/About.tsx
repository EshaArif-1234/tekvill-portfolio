"use client";

import React from "react";
import { motion } from "framer-motion";

const About: React.FC = () => {
  // Animation variant for fade-in effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Timeline events for Tekvill's journey
  const timeline = [
    { year: "2018", event: "Founded Tekvill with a vision to innovate in tech solutions." },
    { year: "2020", event: "Expanded services to include cloud and DevOps expertise." },
    { year: "2022", event: "Achieved global presence with clients in over 10 countries." },
    { year: "2024", event: "Launched cutting-edge AI-driven development tools." },
  ];

  return (
    <section className="py-20 bg-gray-800 text-white flex flex-col items-center px-6">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-400 mb-12 text-center"
      >
        About Tekvill
      </motion.h2>
      
      <div className="max-w-3xl w-full flex flex-col gap-8">
        {/* Introduction */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          className="text-center p-8"
        >
          <p className="text-gray-300 text-lg leading-relaxed">
            Tekvill is more than a tech company; we are your partners in digital transformation. Since our inception, we’ve been dedicated to crafting solutions that empower businesses to excel through technology.
          </p>
        </motion.div>

        {/* Timeline of Journey */}
        <div className="relative flex flex-col items-center">
          {/* Vertical line for timeline */}
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-500/30"></div>
          {timeline.map((item, index) => (
            <motion.div 
              key={index}
              initial="hidden"
              whileInView="visible"
              variants={fadeInUp}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2 }}
              className={`flex w-full items-center mb-8 ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'} justify-between`}
            >
              <div className={`w-5/12 text-${index % 2 === 0 ? 'right' : 'left'} px-4`}>
                <span className="font-bold text-blue-400 text-xl">{item.year}</span>
                <p className="text-gray-300 mt-1">{item.event}</p>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-8 h-8 bg-blue-500 rounded-full border-4 border-gray-700"></div>
              <div className="w-5/12"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
