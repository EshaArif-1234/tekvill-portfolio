"use client";

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg fixed top-0 w-full z-30">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="text-2xl font-bold text-blue-600 dark:text-blue-400 tracking-tight">
          Tekvill
        </Link>
        <nav>
          <ul className="flex space-x-8 items-center font-medium">
            <li>
              <Link href="/" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Home
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button 
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Services
                <svg className="ml-1 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7"></path>
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-xl rounded-xl py-3 px-5 w-64 z-10 border border-gray-200 dark:border-gray-700">
                  <Link href="/services/web-development" className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path></svg>
                    Web Development
                  </Link>
                  <Link href="/services/mobile-apps" className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8.5v5m0 0l3-3m-6 0l3 3M8.777 21h6.446A1.78 1.78 0 0017 19.223v-6.446A1.78 1.78 0 0015.223 11h-6.446A1.78 1.78 0 007 12.777v6.446A1.78 1.78 0 008.777 21zM7 3.5h10a.5.5 0 01.5.5v1.833a.5.5 0 01-.5.5H7a.5.5 0 01-.5-.5V4a.5.5 0 01.5-.5z"></path></svg>
                    Mobile Apps
                  </Link>
                  <Link href="/services/ui-ux-design" className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.568 3H5.25A2.25 2.25 0 003 5.25v4.318c0 .597.237 1.17.659 1.591l9.581 9.581c.699.699 1.78.872 2.607.33a18.095 18.095 0 005.223-5.223c.542-.827.369-1.908-.33-2.607L11.16 3.66A2.25 2.25 0 009.568 3z"></path><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 6h.008v.008H6V6z"></path></svg>
                    UI/UX Design
                  </Link>
                  <Link href="/services/cloud-solutions" className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"></path></svg>
                    Cloud Solutions
                  </Link>
                  <Link href="/services/devops-services" className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 01.084.771c-.172.818-.385 1.465-.75 2.093a5.011 5.011 0 01-.398.346 16.72 16.72 0 001.589 2.342c.432.326.95.77 1.556 1.254a2.25 2.25 0 011.29 2.015c0 .671-.291 1.314-.81 1.789a16.648 16.648 0 01-1.576.916 13.197 13.197 0 00-1.539.769 5.084 5.084 0 00-.947.848 2.25 2.25 0 01-3.228 0 5.05 5.05 0 00-.947-.848 13.152 13.152 0 00-1.54-.77 16.794 16.794 0 01-1.575-.915 2.25 2.25 0 01-.81-1.79c0-.904.406-1.707 1.041-2.233.598-.492 1.102-.931 1.529-1.252a16.81 16.81 0 001.59-2.343 5.042 5.042 0 01-.398-.345c-.366-.628-.579-1.276-.752-2.094a1.72 1.72 0 01.085-.77z"></path><circle cx="12" cy="12" r="3" stroke="currentColor" strokeWidth={2}></circle></svg>
                    DevOps Services
                  </Link>
                  <Link href="/services/technical-consulting" className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200">
                    <svg className="w-5 h-5 mr-2 text-gray-500 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-.243.972A6 6 0 0113 5.852l-.43.215a6 6 0 01-3.86-.517l-.43-.215A6 6 0 018 4z"></path></svg>
                    Technical Consulting
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link href="/blogs" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Blog
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
