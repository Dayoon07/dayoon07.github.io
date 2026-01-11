import { Link } from "react-router-dom";

interface NavLinkProps {
    to: string,
    children: string
}

/** 네비게이션 링크 컴포넌트 */
export const NavLink: React.FC<NavLinkProps> = ({ to, children }) => (
    <Link to={to} className="py-2 text-lg relative after:content-[''] after:absolute after:left-1/2 
        after:bottom-0 after:w-0 after:h-[4px] after:bg-gray-200 after:transition-all after:duration-300 
        hover:after:left-0 hover:after:w-full">
        {children}
    </Link>
);
