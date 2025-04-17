import React from "react";

export default function HomePage() {

    const recentInterest = [
        {
            title: "데이터베이스 최적화",
            content: `
                데이터베이스 성능 튜닝과 쿼리 최적화 방법에 관심을 갖고 공부하고 있습니다. 
                특히 대용량 데이터 처리 시 효율적인 인덱싱 전략에 집중하고 있습니다.
            `
        },
        {
            title: "Tensorflow 기반 딥러닝",
            content: `
                Tensorflow & Keras를 활용해 신경망 설계 및 구현과 딥러닝 모델 학습 방법에 대해 공부하고 있습니다.
            `
        }
    ];

    return (
        <>
            <div className="max-w-3xl mb-4">
                <h1 className="text-3xl font-bold my-4">안녕하십니까, 저는</h1>
                <p className="text-gray-700">
                    언젠가는 DB 분야로 진출하고 싶은 강다윤입니다. 저는 프론트엔드와 백엔드 프로젝트를 진행하며 <br className="max-lg:hidden" />
                    다양한 경험을 쌓았습니다. 그 과정에서 발생한 에러의 원인을 분석하고 해결하는 과정도 직접 겪으며, <br className="max-lg:hidden" />
                    이를 통해 실력을 더욱 키울 수 있었습니다. 앞으로도 모르는 것을 배우며 끊임없이 <br className="max-lg:hidden" />
                    성장하는 개발자가 되겠습니다.
                </p>
            </div>

            <div className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">요즘 관심사</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {recentInterest.map((c, i) => (
                        <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 cursor-pointer">
                            <div className="flex items-center mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
                            </div>
                            <p className="text-gray-600">{c.content}</p>
                        </div> 
                    ))}
                </div>
            </div>
        </>
    );
}