"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

const HeroSection: React.FC = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden bg-gray-900">
      {/* Video Background - Place your futuristic tech video in public/videos/tech-background.mp4 */}
      <div className="absolute inset-0 z-0">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline
          className="w-full h-full object-cover opacity-30"
        >
          <source src="/videos/background-header.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-gray-900 opacity-70"></div>
      </div>
      
      
      {/* Content */}
      <div className="relative z-20 text-center px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 animate-fade-in-up">
          Innovative Tech Solutions
        </h1>
        <p className="text-xl md:text-2xl text-gray-200 mb-10 max-w-2xl mx-auto animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
          Welcome to Tekvill. We deliver cutting-edge software development, cloud solutions, and technical consulting services.
        </p>
        
        <div className="flex gap-6 items-center justify-center animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
          <Link
            href="/services"
            className="rounded-full border border-solid border-transparent transition-colors flex items-center justify-center bg-blue-600 text-white gap-2 hover:bg-blue-700 font-medium text-base h-12 px-6"
          >
            View Our Services
          </Link>
          <Link
            href="/contact"
            className="rounded-full border border-solid border-white/[.2] transition-colors flex items-center justify-center hover:bg-white/[.1] hover:border-white/[.3] text-white font-medium text-base h-12 px-6"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
