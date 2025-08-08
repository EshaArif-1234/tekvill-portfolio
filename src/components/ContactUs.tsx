"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

const ContactUs: React.FC = () => {
  // Animation variant for fade-in effect
  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
  };

  // Form state
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });
  const [formStatus, setFormStatus] = useState("idle"); // idle, sending, success, error

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormStatus("sending");
    // Simulate form submission (replace with actual API call in production)
    setTimeout(() => {
      setFormStatus("success");
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };

  return (
    <section className="py-20 bg-gray-800 text-white flex flex-col items-center px-6">
      <motion.h2 
        initial="hidden"
        whileInView="visible"
        variants={fadeInUp}
        viewport={{ once: true }}
        className="text-4xl font-bold text-blue-400 mb-12 text-center"
      >
        Contact Us
      </motion.h2>
      
      <div className="max-w-5xl w-full flex flex-col md:flex-row gap-12 justify-center">
        {/* Contact Information */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex-1 bg-gray-700/30 p-8 rounded-xl border border-gray-700 shadow-md"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Get in Touch</h3>
          <div className="space-y-6 text-gray-300">
            <div className="flex items-center gap-4">
              <FaPhone className="text-blue-400 text-xl" />
              <p>+1 (555) 123-4567</p>
            </div>
            <div className="flex items-center gap-4">
              <FaEnvelope className="text-blue-400 text-xl" />
              <p>info@tekvill.com</p>
            </div>
            <div className="flex items-center gap-4">
              <FaMapMarkerAlt className="text-blue-400 text-xl" />
              <p>123 Tech Street, Silicon Valley, CA 94043</p>
            </div>
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          variants={fadeInUp}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="flex-1 bg-gray-700/30 p-8 rounded-xl border border-gray-700 shadow-md"
        >
          <h3 className="text-2xl font-semibold text-blue-400 mb-6">Send a Message</h3>
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-gray-300 mb-1">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-300 mb-1">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-300 mb-1">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 bg-gray-800 border border-gray-600 rounded-lg text-white focus:outline-none focus:border-blue-500"
              />
            </div>
            <button
              type="submit"
              disabled={formStatus === "sending"}
              className="bg-blue-500 hover:bg-blue-600 text-white font-semibold px-6 py-2 rounded-lg transition-colors duration-300 disabled:opacity-70"
            >
              {formStatus === "sending" ? "Sending..." : "Send Message"}
            </button>
            {formStatus === "success" && (
              <p className="text-green-400 text-sm">Message sent successfully! We’ll get back to you soon.</p>
            )}
            {formStatus === "error" && (
              <p className="text-red-400 text-sm">Something went wrong. Please try again.</p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
};

export default ContactUs;
