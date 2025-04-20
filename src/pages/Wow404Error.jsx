import { Link } from "react-router-dom";

export default function NotFound() {
    return (
        <div>
            <h1 className="text-3xl font-bold my-4">요청하신 페이지를 찾을 수 없습니다.</h1>
            <p className="text-gray-700 space-y-8 text-lg">
                <Link to="/" style={{ color: "rgb(82, 173, 200" }} className="text-lg font-semibold hover:underline">홈으로 돌아가기</Link><br /> <br />
                <Link to="/sitemap" style={{ color: "rgb(82, 173, 200" }} className="text-lg font-semibold hover:underline">사이트맵</Link>
            </p>
            
        </div>
    );
}