import React from "react";
import { Link } from "react-router-dom";

const what_should_i_do_with_the_variable = [
    {
        to: "/",
        t: "Homepage"
    },
    {
        to: "/skill",
        t: "Skill"
    },
    {
        to: "/projects",
        t: "Projects"
    },
    {
        to: "/architecture",
        t: "Architecture"
    },
    {
        to: "/cv",
        t: "CV"
    },
    {
        to: "/portfolio",
        t: "Portfolio"
    },
    {
        to: "/sitemap",
        t: "Sitemap"
    },
    {
        to: "/wow404error",
        t: "Wow404Error"
    }
];

export default function SiteMap() {
    return (
        <div className="mt-4 pb-16">
            {what_should_i_do_with_the_variable.map((v, i) => (
                <Link className="block mb-8 text-2xl font-semibold hover:underline" 
                    to={v.to} key={i} 
                    style={{ color: "rgb(82, 173, 200" }}
                >
                    {v.t}
                </Link>
            ))}
        </div>
    );
}