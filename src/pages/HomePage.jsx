import { useEffect } from "react";

const RECENT_INTERESTS = [
    {
        title: "데스크탑 애플리케이션",
        content: `
            C++ 언어와 Qt 프레임워크로 GUI 프로그래밍과 크로스 
            플랫폼 개발을 공부 중입니다.
        `
    },
    {
        title: "DevOps 공부",
        content: `
            Github Actions를 활용한 CI/CD 파이프라인 구축을 학습 중입니다.
            워크플로를 작성해 지속적으로 빌드, 배포를 연구 중입니다.
        `
    },
];

const PROJECT_LINKS = [
    {
        name: "날씨 API 키 활용 서비스",
        url: "https://dayoon07.github.io/weather-service",
        repo: "https://github.com/Dayoon07/weather-service",
        note: "(weather-service)",
    },
    {
        name: "모바일 웹 캠 애플리케이션",
        url: "https://dayoon07.github.io/webcam",
        repo: "https://github.com/Dayoon07/webcam",
        note: "(webcam)",
    },
    {
        name: "학교 정보 검색",
        url: "https://Dayoon07.github.io/school-search",
        repo: "https://github.com/Dayoon07/school-search",
        note: "(school-search)",
    }
];

const ProjectCard = ({ project }) => (
    <div className="dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition p-4 border hover:border-[#52ADC8]">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:underline">
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                {project.name}
            </a>
        </h3>
        {project.note && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.note}</p>
        )}
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm hover:underline">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.url}
            </a>
        </p>
    </div>
);

const InterestCard = ({ interest }) => (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{interest.title}</h3>
        </div>
        <p className="text-gray-600">{interest.content}</p>
    </div>
);

export default function HomePage() {
    useEffect(() => {
        document.title = "안녕하세요. 강다윤입니다";
    }, []);

    return (
        <div className="md:pb-40">
            <section className="max-w-3xl mb-4">
                <h1 className="text-3xl font-bold my-4">안녕하십니까, 저는</h1>
                <p className="text-gray-700">
                    언젠가는 DB 분야로 진출하고 싶은 강다윤입니다. 저는 프론트엔드와 백엔드 프로젝트를 진행하며 
                    다양한 경험을 쌓았습니다. 그 과정에서 발생한 에러의 원인을 분석하고 해결하는 과정도 직접 겪으며, 
                    이를 통해 실력을 더욱 키울 수 있었습니다. 앞으로도 모르는 것을 배우며 끊임없이 
                    성장하는 개발자가 되겠습니다.
                </p>
            </section>

            <section className="max-w-3xl mb-4">
                <h2 className="mt-6 mb-4 text-xl font-bold text-gray-900 dark:text-white border-b pb-2">
                    간단한 프로젝트
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {PROJECT_LINKS.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </section>

            <section className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">최근 소식</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {RECENT_INTERESTS.map((interest, i) => (
                        <InterestCard key={i} interest={interest} />
                    ))}
                </div>
            </section>

        </div>
    );
}