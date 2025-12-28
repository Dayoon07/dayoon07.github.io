import { Link } from 'react-router-dom';
import { GithubIcon, RSSIcon } from '../../constants/icon';
import { ROUTE } from '../../constants/Route';
import { Copyright } from './ui/Copyright';

export default function Footer() {
    return (
        <footer className="py-5 border-t border-gray-300 bg-[#F2F2F2]">
            <div className="max-w-screen-xl mx-auto px-4">
                {/* 사이트맵 링크 */}
                <Link to={ROUTE.SITEMAP} style={{ fontSize: "18px" }} className="text-gray-400 hover:underline">
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
                <Copyright />
            </div>
        </footer>
    );
}