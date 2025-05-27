import { Link } from 'react-router-dom';

export default function Footer() {

  return (
    <footer className="py-6 border-t border-gray-300 bg-gray-200">
      <div className="max-w-screen-xl mx-auto px-4">
        <Link to="/sitemap" className="text-lg text-gray-400 font-semibold hover:underline">Sitemap</Link>
        <p className="text-md text-gray-400 my-2 font-semibold flex">
          FOLLOW:&nbsp;
          <a href="https://github.com/dayoon07" className="flex items-center hover:underline" rel="noreferrer">
            GITHUB
          </a>
          <a href="https://dayoon07.github.io/feed.xml" className="flex items-center hover:underline ml-5" rel="noreferrer">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24" style={
              {verticalAlign: "middle", marginRight: "4px"}
            }>
              <path d="M4.26 3A1.26 1.26 0 0 0 3 4.26v1.14a1.26 1.26 0 0 0 1.26 1.26A14.34 14.34 0 0 1 18.34 18.74a1.26 1.26 0 0 0 1.26 1.26h1.14a1.26 
                1.26 0 0 0 1.26-1.26A18.74 18.74 0 0 0 4.26 3zm0 7.5A1.26 1.26 0 0 0 3 11.76v1.14a1.26 1.26 0 0 0 1.26 1.26 6.24 6.24 0 0 1 6.24 6.24 
                1.26 1.26 0 0 0 1.26 1.26h1.14a1.26 1.26 0 0 0 1.26-1.26A10.74 10.74 0 0 0 4.26 10.5zM6 20a2 2 0 1 0 .001-3.999A2 2 0 0 0 6 20z" />
            </svg>
            FEED
          </a>
        </p>
        <p className="mt-2 text-gray-400 text-sm">
          &copy; 2025 dayoon07. All rights reserved.&nbsp;
          <br className="md:hidden" />
          Inspired by&nbsp;
          <a href="https://github.com/academicpages/academicpages.github.io" target="_blank" 
            rel="noreferrer" className="hover:underline"
          >
            AcademicPages
          </a>, customized and <br className="md:hidden" /> refactored for personal use.
        </p>
      </div>
    </footer>
  );
}


