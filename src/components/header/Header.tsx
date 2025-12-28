import React from "react";
import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { SITEMAP } from "../../constants/sitemap";
import { ROUTE } from "../../constants/Route";
import { NavLink } from "./ui/NavLink";

const Header: React.FC = () => {
    return (
        <header className="w-full bg-white border-b sticky top-0 z-[11]">
            <div className="lg:max-w-screen-xl max-lg:w-full mx-auto p-2.5 flex max-lg:justify-between max-lg:items-center">
                {/* 로고 */}
                <Link to={ROUTE.HOME} className="p-2 text-lg font-semibold relative after:content-[''] after:absolute 
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
                <Link to={ROUTE.SITEMAP} className="lg:hidden p-2 text-lg cursor-pointer hover:underline">
                    <AlignJustify />
                </Link>
            </div>
        </header>
    );
}

export default Header;