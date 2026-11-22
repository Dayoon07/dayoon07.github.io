import React from "react";
import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";
import { NAV_ITEMS } from "../../constants/sitemap";
import { ROUTE } from "../../constants/Route";
import { NavLink } from "./ui/NavLink";
import { LanguageMenu } from "./ui/LanguageMenu";

const Header: React.FC = () => {
    return (
        <header className="w-full bg-white border-b sticky top-0 z-[11]">
            <div className="lg:max-w-screen-xl max-lg:w-full mx-auto p-2.5 flex items-center max-lg:justify-between">
                {/* 로고 */}
                <Link to={ROUTE.HOME} className="p-2 text-lg font-semibold relative after:content-[''] after:absolute 
                    after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-black after:transition-all after:duration-300 
                    hover:after:left-0 hover:after:w-full cursor-pointer"
                >
                    Homepage
                </Link>

                {/* 데스크톱 네비게이션 */}
                <nav className="lg:ml-40 lg:flex hidden space-x-8">
                    {NAV_ITEMS.map((item) => (
                        <NavLink key={item.name} to={item.link}>
                            {item.name}
                        </NavLink>
                    ))}
                </nav>

                <div className="lg:ml-auto flex items-center gap-2">
                    <LanguageMenu />

                    {/* 모바일 메뉴 버튼 */}
                    <Link to={ROUTE.SITEMAP} className="lg:hidden p-2 text-lg cursor-pointer hover:underline">
                        <AlignJustify />
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;