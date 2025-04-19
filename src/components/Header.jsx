import React from "react";
import { Link } from "react-router-dom";

const menuItems = [
  {
    to: '/skill', 
    label: 'Skill' 
  },
  {
    to: 'projects', 
    label: 'Projects'
  },
  {
    to: '/architecture',
    label: 'Architecture'
  },
  {
    to: 'CV',
    label: 'CV'
  },
  {
    to: '/contact',
    label: 'Contact'
  }
];

export default function Header() {
  return (
    <header className="md:fixed w-full bg-white border-b">
      <div className="max-w-screen-xl mx-auto p-2 flex">
        <Link to="/" className="p-2 text-lg font-semibold font-semibold relative after:content-[''] after:absolute 
          after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-black after:transition-all after:duration-300 
          hover:after:left-0 hover:after:w-full cursor-pointer"
        >
          dayoon07
        </Link>
        <nav className="ml-36 md:flex hidden space-x-8">
          {menuItems.map((k) => (
            <Link
              key={k.to}
              to={k.to}
              className="py-2 text-lg relative after:content-[''] after:absolute after:left-1/2 after:bottom-0 after:w-0 after:h-[4px] after:bg-gray-200 after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              {k.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
