import React from 'react';

export default function Blogs() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Tech Blog</h1>
      <div className="max-w-3xl mx-auto">
        <p className="text-gray-600 dark:text-gray-300 mb-6">
          Welcome to our tech blog. Here we share insights, tutorials, and updates about the latest in software development and technology.
        </p>
        
        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md p-6 mb-6">
          <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">Latest Posts Coming Soon</h2>
          <p className="text-gray-600 dark:text-gray-300">
            We're working on creating valuable content for you. Check back soon for articles on Next.js, React, and modern web development practices.
          </p>
        </div>
      </div>
    </div>
  );
}
