import React from 'react';

export default function Contact() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Contact Us</h1>
      <div className="max-w-2xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Have a question or interested in our services? Reach out to us and we'll get back to you as soon as possible.
        </p>
        
        <form className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6">
          <div className="mb-4">
            <label htmlFor="name" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Name</label>
            <input 
              type="text" 
              id="name" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="email" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Email</label>
            <input 
              type="email" 
              id="email" 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white" 
              required
            />
          </div>
          
          <div className="mb-4">
            <label htmlFor="message" className="block text-gray-700 dark:text-gray-200 font-medium mb-2">Message</label>
            <textarea 
              id="message" 
              rows={4} 
              className="w-full px-3 py-2 border border-gray-300 dark:border-gray-600 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:text-white"
              required
            ></textarea>
          </div>
          
          <button 
            type="submit" 
            className="bg-blue-600 text-white font-medium py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
