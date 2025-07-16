import { Link } from "react-router-dom";
import { AlignJustify } from "lucide-react";

const menuItems = [
    {
        to: '/skill', 
        label: 'Skill' 
    },
    {
        to: '/projects', 
        label: 'Projects'
    },
    {
        to: '/architecture',
        label: 'Architecture'
    },
    {
        to: '/cv',
        label: 'CV'
    },
    {
        to: '/portfolio',
        label: 'Portfolio'
    }
];

export default function Header() {
    return (
        <header className="w-full bg-white border-b sticky top-0 z-[11]">
            <div className="md:max-w-screen-xl max-md:w-full mx-auto p-2.5 flex max-md:justify-between max-md:items-center">
                <Link to="/" className="p-2 text-lg font-semibold relative after:content-[''] after:absolute 
                    after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-black after:transition-all after:duration-300 
                    hover:after:left-0 hover:after:w-full cursor-pointer"
                >
                    Homepage
                </Link>
                <nav className="md:ml-40 md:flex hidden space-x-8">
                    {menuItems.map((k) => (
                        <Link to={k.to} key={k.to} className="py-2 text-lg relative after:content-[''] after:absolute after:left-1/2 
                            after:bottom-0 after:w-0 after:h-[4px] after:bg-gray-200 after:transition-all after:duration-300 
                            hover:after:left-0 hover:after:w-full"
                        >
                            {k.label}
                        </Link>
                    ))}
                </nav>
                <Link to="/sitemap" className="md:hidden p-2 text-lg cursor-pointer hover:underline"><AlignJustify /></Link>
            </div>
        </header>
    );
}