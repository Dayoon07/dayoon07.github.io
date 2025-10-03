import { Link } from 'react-router-dom';

const RSSIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" fill="currentColor" viewBox="0 0 24 24" style={{ verticalAlign: "middle", marginRight: "4px" }}>
        <path d="M4.26 3A1.26 1.26 0 0 0 3 4.26v1.14a1.26 1.26 0 0 0 1.26 1.26A14.34 14.34 0 0 1 18.34 18.74a1.26 1.26 0 0 0 1.26 1.26h1.14a1.26 
        1.26 0 0 0 1.26-1.26A18.74 18.74 0 0 0 4.26 3zm0 7.5A1.26 1.26 0 0 0 3 11.76v1.14a1.26 1.26 0 0 0 1.26 1.26 6.24 6.24 0 0 1 6.24 6.24 
        1.26 1.26 0 0 0 1.26 1.26h1.14a1.26 1.26 0 0 0 1.26-1.26A10.74 10.74 0 0 0 4.26 10.5zM6 20a2 2 0 1 0 .001-3.999A2 2 0 0 0 6 20z" />
    </svg>
);

const GithubIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="mr-1" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="0" aria-labelledby="githubTitle">
        <title id="githubTitle">GitHub Logo</title>
        <path fill="#808080" d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.542-1.355-1.325-1.714-1.325-1.714-1.087-.744.084-.69.084-.69 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.492.998.108-.77.419-1.305.762-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.046.138 3.003.404 2.29-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.771.84 1.235 1.911 1.235 3.221 0 4.61-2.803 5.624-5.475 5.923.42.359.81 1.077.81 2.179 0 1.605-.015 2.899-.015 3.286 0 .315.192.694.801.576C20.56 21.795 24 17.295 24 12c0-6.627-5.373-12-12-12z"/>
    </svg>
)

export default function Footer() {
    return (
        <footer className="py-5 border-t border-gray-300 bg-[#F2F2F2]">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* 사이트맵 링크 */}
                <Link to="/sitemap" style={{fontSize: "18px"}} className="text-gray-400 hover:underline">
                    Sitemap
                </Link>

                {/* 소셜 링크 */}
                <p className="text-[14px] text-gray-400 my-2 font-semibold flex">
                    FOLLOW:&nbsp;
                    <a href="https://github.com/dayoon07" className="flex items-center hover:underline" rel="noreferrer">
                        <GithubIcon />
                        GITHUB
                    </a>
                    <a href="https://dayoon07.github.io/feed.xml" className="flex items-center hover:underline ml-5" rel="noreferrer">
                        <RSSIcon />
                        FEED
                    </a>
                </p>

                {/* 저작권 정보 */}
                <p className="mt-2 text-gray-400" style={{fontSize: "12px"}}>
                    &copy; 2025 dayoon07. All rights reserved. Inspired by
                    <a href="https://github.com/academicpages/academicpages.github.io" target="_blank" 
                        rel="noreferrer" className="hover:underline"
                    >
                        AcademicPages
                    </a>, reimplemented <br /> with React for personal use.
                </p>
            </div>
        </footer>
    );
}