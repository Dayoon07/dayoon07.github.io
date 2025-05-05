import React from "react";

export default function HomePage() {

    document.title = "안녕하세요. 강다윤입니다";

    const recentInterest = [
        {
            title: "SQLD 자격증 공부",
            content: `
                SQLD 자격증을 취득하기 위해 DB 심화 부분을 공부하고 있습니다.
                특히 데이터베이스 모델링과 그룹 함수, 윈도우 함수에 대해 공부하고 있습니다.
                개인적으로는 데이터베이스 튜닝하는 방법과 트랜잭션 관리, 샤딩 기법, 분산 처리, 
                쿼리 성능 향상 방법에 대해 공부하고 있습니다.
            `
        },
        {
            title: "Tensorflow 기반 딥러닝",
            content: `
                Tensorflow & Keras를 활용해 인공 신경망 설계 & 구현과 딥러닝 모델 설계 & 학습 방법에 대해 공부하고 있습니다.
            `
        }
    ];

    const projectLinks = [
        {
            name: "학교 정보 검색",
            url: "https://Dayoon07.github.io/school-search",
            repo: "https://github.com/Dayoon07/school-search",
            note: "(school-search)",
        },
        {
            name: "모바일 웹 캠 애플리케이션",
            url: "https://dayoon07.github.io/webcam",
            repo: "https://github.com/Dayoon07/webcam",
            note: "(webcam)",
        }
    ];

    return (
        <div className="md:pb-20">
            <div className="max-w-3xl mb-4">
                <h1 className="text-3xl font-bold my-4">안녕하십니까, 저는</h1>
                <p className="text-gray-700">
                    언젠가는 DB 분야로 진출하고 싶은 강다윤입니다. 저는 프론트엔드와 백엔드 프로젝트를 진행하며 
                    다양한 경험을 쌓았습니다. 그 과정에서 발생한 에러의 원인을 분석하고 해결하는 과정도 직접 겪으며, 
                    이를 통해 실력을 더욱 키울 수 있었습니다. 앞으로도 모르는 것을 배우며 끊임없이 
                    성장하는 개발자가 되겠습니다.
                </p>
            </div>

            <div className="w-full">
                <h2 className="mt-6 mb-4 text-xl font-bold text-gray-900 dark:text-white border-b pb-2">
                    간단한 프로젝트
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {projectLinks.map((project, idx) => (
                        <div key={idx} className="dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition p-4 border hover:border-blue-400">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:underline">
                                <a href={project.repo}>{project.name}</a>
                            </h3>
                            {project.note && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.note}</p>
                            )}
                            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm hover:underline">
                                <a href={project.url}>{project.url}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">최근 소식</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {recentInterest.map((c, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
                            </div>
                            <p className="text-gray-600">{c.content}</p>
                        </div> 
                    ))}
                </div>
            </div>
        </div>
    );
}