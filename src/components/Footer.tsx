import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-100 dark:bg-gray-800 py-6 mt-auto">
      <div className="container mx-auto px-4 text-center text-gray-600 dark:text-gray-400">
        <p>© {new Date().getFullYear()} Tekvill. All rights reserved.</p>
        <div className="mt-2 flex justify-center space-x-4">
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">GitHub</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">LinkedIn</a>
          <a href="#" className="hover:text-blue-600 dark:hover:text-blue-400 transition-colors">Twitter</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
