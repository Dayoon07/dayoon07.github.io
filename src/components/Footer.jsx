import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <footer className="py-6 border-t border-gray-300 bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <Link to="/sitemap" className="text-lg text-gray-400 font-semibold hover:underline">Sitemap</Link>
        <p className="text-md text-gray-400 my-2 font-semibold flex">
          FOLLOW:&nbsp;
          <a href="https://github.com/dayoon07" className="flex items-center hover:underline">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 32 32" style={
              {verticalAlign: "middle", marginRight: "4px"}
            }>
              <path d="M16,0 C7.16,0 0,7.16 0,16 C0,23.08 4.58,29.06 10.94,31.18 C11.74,31.32 12.04,30.84 12.04,30.42 C12.04,30.04 12.02,28.78 12.02,27.44 C8,28.18 6.96,26.46 6.64,25.56 C6.46,25.1 5.68,23.68 5,23.3 C4.44,23 3.64,22.26 4.98,22.24 C6.24,22.22 7.14,23.4 7.44,23.88 C8.88,26.3 11.18,25.62 12.1,25.2 C12.24,24.16 12.66,23.46 13.12,23.06 C9.56,22.66 5.84,21.28 5.84,15.16 C5.84,13.42 6.46,11.98 7.48,10.86 C7.32,10.46 6.76,8.82 7.64,6.62 C7.64,6.62 8.98,6.2 12.04,8.26 C13.32,7.9 14.68,7.72 16.04,7.72 C17.4,7.72 18.76,7.9 20.04,8.26 C23.1,6.18 24.44,6.62 24.44,6.62 C25.32,8.82 24.76,10.46 24.6,10.86 C25.62,11.98 26.24,13.4 26.24,15.16 C26.24,21.3 22.5,22.66 18.94,23.06 C19.52,23.56 20.02,24.52 20.02,26.02 C20.02,28.16 20,29.88 20,30.42 C20,30.84 20.3,31.34 21.1,31.18 C27.42,29.06 32,23.06 32,16 C32,7.16 24.84,0 16,0 Z" fill="#9CA3AF"/>
            </svg>
            GITHUB
          </a>
          <a href="https://dayoon07.github.io/feed.xml" className="flex items-center hover:underline ml-5">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={
              {verticalAlign: "middle", marginRight: "4px"}
            }>
              <path d="M4.26 3A1.26 1.26 0 0 0 3 4.26v1.14a1.26 1.26 0 0 0 1.26 1.26A14.34 14.34 0 0 1 18.34 18.74a1.26 1.26 0 0 0 1.26 1.26h1.14a1.26 1.26 0 0 0 1.26-1.26A18.74 18.74 0 0 0 4.26 3zm0 7.5A1.26 1.26 0 0 0 3 11.76v1.14a1.26 1.26 0 0 0 1.26 1.26 6.24 6.24 0 0 1 6.24 6.24 1.26 1.26 0 0 0 1.26 1.26h1.14a1.26 1.26 0 0 0 1.26-1.26A10.74 10.74 0 0 0 4.26 10.5zM6 20a2 2 0 1 0 .001-3.999A2 2 0 0 0 6 20z" />
            </svg>
            FEED
          </a>
        </p>
        <p className="mt-2 text-gray-400 text-sm">
          &copy; 2025 dayoon07. All rights reserved.&nbsp;
          <br className="md:hidden" />
          Inspired by&nbsp;
          <a href="https://github.com/academicpages/academicpages.github.io" target="_blank" 
            rel="noopener noreferrer" className="hover:underline"
          >
            AcademicPages
          </a>, customized and <br className="md:hidden" /> refactored for personal use.
        </p>
      </div>
    </footer>
  );
}


