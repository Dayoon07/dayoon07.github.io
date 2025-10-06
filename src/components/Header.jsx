import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { SITEMAP } from "../constants/sitemap";

// 네비게이션 링크 컴포넌트
const NavLink = ({ to, children }) => (
    <Link to={to} className="py-2 text-lg relative after:content-[''] after:absolute after:left-1/2 
        after:bottom-0 after:w-0 after:h-[4px] after:bg-gray-200 after:transition-all after:duration-300 
        hover:after:left-0 hover:after:w-full"
    >
        {children}
    </Link>
);

export default function Header() {
    return (
        <header className="w-full bg-white border-b sticky top-0 z-[11]">
            <div className="lg:max-w-screen-xl max-lg:w-full mx-auto p-2.5 flex max-lg:justify-between max-lg:items-center">
                {/* 로고 */}
                <Link to="/" className="p-2 text-lg font-semibold relative after:content-[''] after:absolute 
                    after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-black after:transition-all after:duration-300 
                    hover:after:left-0 hover:after:w-full cursor-pointer"
                >
                    Homepage
                </Link>

                {/* 데스크톱 네비게이션 */}
                <nav className="lg:ml-40 lg:flex hidden space-x-8">
                    {SITEMAP.slice(1, 6).map((item) => (
                        <NavLink key={item.name} to={item.link}>
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                {/* 모바일 메뉴 버튼 */}
                <Link to="/sitemap" className="lg:hidden p-2 text-lg cursor-pointer hover:underline">
                    <AlignJustify />
                </Link>
            </div>
        </header>
    );
}