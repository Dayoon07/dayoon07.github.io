import { Link } from 'react-router-dom';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="md:reletive bottom-0 md:bottom-0 py-6 border-gray-300 border-t bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <Link to="/sitemap" className="text-lg text-gray-400 font-semibold hover:underline">Sitemap</Link>
        <p className="text-gray-400 mt-2 text-sm">
          &copy; {currentYear} dayoon07. All rights reserved.&nbsp;
          <br className="md:hidden" />
          Inspired by&nbsp;
          <a
            href="https://github.com/academicpages/academicpages.github.io"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            AcademicPages
          </a>
          , customized and refactored for personal use.
        </p>
      </div>
    </footer>
  );
}


