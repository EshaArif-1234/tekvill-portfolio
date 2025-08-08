"use client";

import React, { useState, useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaDesktop, FaMobileAlt, FaPaintBrush, FaCloud, FaCogs, FaComments } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsServicesOpen(false);
      }
    };

    if (isServicesOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isServicesOpen]);

  return (
    <header className="bg-white dark:bg-gray-900 shadow-lg fixed top-0 w-full z-30">
      <div className="container mx-auto px-6 py-5 flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Tekvill Logo"
            width={120}
            height={40}
            className="object-contain"
          />
        </Link>
        <nav>
          <ul className="flex space-x-8 items-center font-medium">
            <li>
              <Link
                href="/"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Home
              </Link>
            </li>
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsServicesOpen(!isServicesOpen)}
                className="flex items-center hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Services
                <svg
                  className="ml-1 w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 9l-7 7-7-7"
                  ></path>
                </svg>
              </button>
              {isServicesOpen && (
                <div className="absolute top-10 left-0 bg-white dark:bg-gray-800 shadow-xl rounded-xl py-3 px-5 w-64 z-10 border border-gray-200 dark:border-gray-700">
                  <Link
                    href="/services/web-development"
                    className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaDesktop className="w-5 h-5 mr-2 text-blue-600" />
                    Web Development
                  </Link>
                  <Link
                    href="/services/mobile-apps"
                    className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaMobileAlt className="w-5 h-5 mr-2 text-blue-600" />
                    Mobile Apps
                  </Link>
                  <Link
                    href="/services/ui-ux-design"
                    className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaPaintBrush className="w-5 h-5 mr-2 text-blue-600" />
                    UI/UX Design
                  </Link>
                  <Link
                    href="/services/cloud-solutions"
                    className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaCloud className="w-5 h-5 mr-2 text-blue-600" />
                    Cloud Solutions
                  </Link>
                  <Link
                    href="/services/devops-services"
                    className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaCogs className="w-5 h-5 mr-2 text-blue-600" />
                    DevOps Services
                  </Link>
                  <Link
                    href="/services/technical-consulting"
                    className="flex items-center py-2 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    <FaComments className="w-5 h-5 mr-2 text-blue-600" />
                    Technical Consulting
                  </Link>
                </div>
              )}
            </li>
            <li>
              <Link
                href="/blogs"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
                Blog
              </Link>
            </li>
            <li>
              <Link
                href="/contact"
                className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-300"
              >
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
