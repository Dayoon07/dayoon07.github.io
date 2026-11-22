import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDocTitle } from '../../hooks/useDocTitle';
import { VISIBLE_SITEMAP } from "../../constants/sitemap";

export default function SiteMap() {
    const { t } = useTranslation();
    useDocTitle(`${t("sitemap.title")} | ${t("common.siteName")}`);

    return (
        <div className="mt-4 pb-16">
            {VISIBLE_SITEMAP.map((v, i) => (
                <Link to={v.link} key={i} style={{ color: "rgb(82, 173, 200)" }} 
                    className="block mb-8 text-2xl font-semibold hover:underline" 
                >
                    {v.name}
                </Link>
            ))}
        </div>
    );
}
