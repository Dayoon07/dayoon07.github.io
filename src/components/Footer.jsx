import { Link } from 'react-router-dom';
import React from 'react';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-6 border-gray-300 border-t bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <Link to="/sitemap" className="text-lg text-gray-400 font-semibold hover:underline">Sitemap</Link>
        <p className="text-gray-400 mt-2">
          &copy; {currentYear} dayoon07 All rights reserved. &&nbsp;
          <a href="https://github.com/academicpages/academicpages.github.io" target="_blank" className="hover:underline">
            Academicpages
          </a> 리팩토링함
        </p>
      </div>
    </footer>
  );
}


