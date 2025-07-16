import { useEffect } from "react";

export default function CV() {
    
    useEffect(() => {
        document.title = "활동이력 | 안녕하세요. 강다윤입니다";
    }, []);
    
    return (
        <div className="md:text-lg md:px-2">
            <h1 className="text-3xl font-bold my-4">활동이력</h1>

            <h2 className="text-xl font-semibold mt-6 mb-2">학력</h2>
            <ul className="list-disc list-inside">
                <li>2023.03.04 ~ 2026.01.08 : 근명고등학교 (재학)</li>
                <li>2023.01.04 : 관양중학교 (졸업)</li>
                <li>2020.01.06 : 관양초등학교 (졸업)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">동아리 활동</h2>
            <ul className="list-disc list-inside">
                <li>2025.04 ~ 현재 : 스마트코딩반 활동</li>
                <li>2023.04 ~ 2024.11 : 디지털 콘텐츠 제작반 활동</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">자격증</h2>
            <ul className="list-disc list-inside">
                <li>2025.07.16 : 과정평가형 정보처리산업기사</li>
                <li>2024.12.11 : 정보처리기능사</li>
                <li>2024.09.11 : 웹디자인기능사</li>
                <li>2024.03.08 : 컴퓨터활용능력 2급</li>
                <li>2023.12.15 : GTQ 포토샵 2급</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">수상경력</h2>
            <ul className="list-disc list-inside">
                <li>2025.01.10 : 교내 알고리즘 경진대회 (우수상)</li>
                <li>2025.01.10 : 교내 인포그래픽 경진대회 (우수상)</li>
                <li>2025.01.10 : 교내 스프레드시트 함수 경진대회</li>
                <li>2025.01.10 : 개근상 (2학년)</li>
                <li>2024.11.19 : 경기 콘텐츠 창의학교 <br className="md:hidden" /><span className="max-md:ml-5">경진대회 (최우수상)</span></li>
                <li>2024.01.03 : 개근상 (1학년)</li>
            </ul>

            <h2 className="text-xl font-semibold mt-6 mb-2">봉사활동실적</h2>
            <ul className="list-disc list-inside">
                <li>2024.10.28 : 고등학교 진로 상담 도우미 (교내, 8시간)</li>
                <li>2024.10.19 : 학교 설명회 도우미 (교내, 4시간)</li>
                <li>2024.09.04 ~ 2024.10.05 : 학과 진로체험장 환경<br className="md:hidden"/><span className="max-md:ml-5">조성 및 안내 도우미 (교내, 10시간)</span></li>
                <li>2024.04.27 : 학교 홍보물 제작 도우미 (교내, 6시간)</li>
                <li>2023.11.25 : 학과 체험 행사 도우미 (교내, 8시간)</li>
            </ul>
        </div>
    );
}
