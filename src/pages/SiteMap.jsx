import { Link } from "react-router-dom";
import { useDocTitle } from '../hooks/useDocTitle';
import { SITEMAP } from "../constants/sitemap";

export default function SiteMap() {
    useDocTitle("사이트맵 | 안녕하세요. 강다윤입니다.");

    return (
        <div className="mt-4 pb-16">
            {SITEMAP.map((v, i) => (
                <Link to={v.link} key={i} style={{ color: "rgb(82, 173, 200)" }} 
                    className="block mb-8 text-2xl font-semibold hover:underline" 
                >
                    {v.name}
                </Link>
            ))}
        </div>
    );
}
