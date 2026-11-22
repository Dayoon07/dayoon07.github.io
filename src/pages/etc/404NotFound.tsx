import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { useDocTitle } from '../../hooks/useDocTitle';
import { ROUTE } from "../../constants/Route";
import { cl } from "../../constants/CurrentLocation";

export default function NotFound() {
    const { t } = useTranslation();
    useDocTitle("404 Not Found");

    return (
        <div className="pb-60">
            <h1 className="text-3xl font-bold my-4">
                {t("notFound.titleLine1")} <br className="md:hidden" /> {t("notFound.titleLine2")}
            </h1>
            <p className="text-gray-700 space-y-8 text-lg">
                <Link to={ROUTE.HOME} style={{ color: "rgb(82, 173, 200)" }} className="text-lg font-semibold hover:underline">
                    {t("notFound.home")}
                </Link>
                <Link to={ROUTE.SITEMAP} style={{ color: "rgb(82, 173, 200)" }} className="text-lg font-semibold hover:underline ml-16">
                    {t("notFound.sitemap")}
                </Link>
            </p>
            <Link to={ROUTE.HOME}>
                <img src={`${cl}/img/wow404error.png`} alt="wow four zero four error" className="w-3/5" />
            </Link>
        </div>
    );
}