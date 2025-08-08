"use client";

import React, { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import { services } from "../lib/services";

const ServicesCarousel: React.FC = () => {
  const rotationRef = useRef(0); // current rotation in degrees
  const velocityRef = useRef(0.015); // base auto-rotation speed (degrees/ms) - slow!
  const dragVelocityRef = useRef(0); // velocity from drag momentum
  const isDraggingRef = useRef(false);
  const startX = useRef(0);
  const startRotation = useRef(0);
  const lastMoveTime = useRef<number | null>(null);
  const lastMoveX = useRef(0);

  const [rotation, setRotation] = useState(0);

  // Animation loop
  useEffect(() => {
    let animationFrameId: number;

    const animate = (time: number) => {
      if (lastMoveTime.current === null) lastMoveTime.current = time;
      const deltaTime = time - lastMoveTime.current;
      lastMoveTime.current = time;

      if (!isDraggingRef.current) {
        // decay drag velocity slowly
        dragVelocityRef.current *= 0.92;

        // update rotation with base velocity + drag momentum
        rotationRef.current += (velocityRef.current + dragVelocityRef.current) * deltaTime;

        // Keep rotation in [0, 360) to avoid precision loss over time
        if (rotationRef.current >= 360) rotationRef.current -= 360;
        if (rotationRef.current < 0) rotationRef.current += 360;

        setRotation(rotationRef.current);
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    animationFrameId = requestAnimationFrame(animate);

    return () => cancelAnimationFrame(animationFrameId);
  }, []);

  // Drag handlers
  const handleMouseDown = (e: React.MouseEvent) => {
    isDraggingRef.current = true;
    startX.current = e.clientX;
    startRotation.current = rotationRef.current;
    dragVelocityRef.current = 0;
    lastMoveX.current = e.clientX;
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDraggingRef.current) {
      const deltaX = e.clientX - startX.current;
      const newRotation = startRotation.current + deltaX * 0.4; // sensitivity

      // Update rotation instantly
      rotationRef.current = newRotation;
      setRotation(newRotation);

      // Calculate drag velocity for momentum after release
      dragVelocityRef.current = (e.clientX - lastMoveX.current) * 0.5; // velocity based on last move delta
      lastMoveX.current = e.clientX;
    }
  };

  const handleMouseUp = () => {
    isDraggingRef.current = false;
  };

  return (
    <section className="py-20 bg-gray-900 text-white relative overflow-hidden flex flex-col items-center justify-center h-screen">
      <h2 className="mb-6 text-4xl font-bold text-blue-400">Our Services</h2>
      <p className="mb-12 text-gray-300 max-w-2xl text-center text-lg">Explore our comprehensive range of technology solutions designed to empower your business. From innovative web and mobile development to strategic cloud and DevOps services, we deliver tailored solutions to meet your unique needs.</p>
      <div
        className="relative w-full h-[500px] perspective-[1500px] cursor-grab"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <div
          className="relative w-full h-full"
          style={{
            transformStyle: "preserve-3d",
            transform: `rotateY(${rotation}deg)`,
            // Removed CSS transitions to avoid glitching on rapid updates
          }}
        >
          {services.map((service, index) => {
            const angle = (index / services.length) * 360;
            const radius = 500; // distance from center
            return (
              <motion.div
                key={service.id}
                className="absolute top-1/2 left-1/2 w-72 bg-gray-800/90 p-6 rounded-xl shadow-lg border border-gray-700 hover:border-blue-500"
                style={{
                  transform: `
                    rotateY(${angle}deg) 
                    translateZ(${radius}px) 
                    translateY(-50%)
                  `,
                }}
              >
                <h3 className="text-2xl font-bold text-blue-400 mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-300 text-sm mb-4">{service.description}</p>
                <Link
                  href={`/services/${service.slug}`}
                  className="text-blue-400 hover:text-blue-300 text-sm font-medium"
                >
                  Learn More →
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicesCarousel;
