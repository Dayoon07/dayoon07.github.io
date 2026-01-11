import { Link } from "react-router-dom";
import { useDocTitle } from '../../hooks/useDocTitle';
import { ROUTE } from "../../constants/Route";
import { cl } from "../../constants/CurrentLocation";

export default function NotFound() {
    useDocTitle("404 Not Found");

    return (
        <div className="pb-60">
            <h1 className="text-3xl font-bold my-4">
                요청하신 페이지를 <br className="md:hidden" /> 찾을 수 없습니다.
            </h1>
            <p className="text-gray-700 space-y-8 text-lg">
                <Link to={ROUTE.HOME} style={{ color: "rgb(82, 173, 200)" }} className="text-lg font-semibold hover:underline">
                    홈으로 돌아가기
                </Link>
                <br /> <br />
                <Link to={ROUTE.SITEMAP} style={{ color: "rgb(82, 173, 200)" }} className="text-lg font-semibold hover:underline">
                    사이트맵
                </Link>
            </p>
            <Link to={ROUTE.HOME}>
                <img src={`${cl}/img/wow404error.png`} alt="wow four zero four error" className="w-3/5" />
            </Link>
        </div>
    );
}