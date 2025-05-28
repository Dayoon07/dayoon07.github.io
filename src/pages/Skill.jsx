import React, { useState, useEffect, useCallback } from "react";

export default function Skill() {
    const [skillSections, setSkillSections] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [totalImages, setTotalImages] = useState(0);
    const [showItems, setShowItems] = useState(false);

    // 문서 타이틀 설정
    useEffect(() => {
        document.title = "기술 스택 | 안녕하세요. 강다윤입니다";
    }, []);

    // 데이터 및 이미지 프리로드
    useEffect(() => {
        fetch("/json/skill.json")
            .then((res) => res.json())
            .then((data) => {
                setSkillSections(data);
                const total = data.reduce((acc, section) => acc + section.items.length, 0);
                setTotalImages(total);
                preloadImages(data, total);
            })
            .catch((error) => console.error("skill.json 로딩 실패:", error));
    }, []);

    const preloadImages = useCallback((data, total) => {
        let loadedCount = 0;

        const imagePromises = data.flatMap((section) =>
            section.items.map((item) =>
                new Promise((resolve) => {
                    const img = new Image();
                    img.src = item.badge;
                    img.onload = img.onerror = () => {
                        loadedCount += 1;
                        setImagesLoaded((prev) => prev + 1);
                        resolve();
                    };
                })
            )
        );

        Promise.all(imagePromises).then(() => {
            setShowItems(true);
        });
    }, []);

    return (
        <div className="max-w-4xl mx-auto px-4">
            <h1
                className={`text-3xl font-bold my-4 transition-all duration-700 ease-out ${
                    showItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                }`}
            >
                기술 스택
            </h1>

            {!showItems && (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600">
                        이미지 로딩중... ({imagesLoaded}/{totalImages})
                    </p>
                </div>
            )}

            {skillSections.map((section, index) => (
                <div
                    key={index}
                    className={`transition-all duration-700 ease-out ${
                        showItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    <div className="border-b py-2 px-4 font-bold text-lg">{section.title}</div>
                    <div className="p-4">
                        <div className="flex flex-wrap gap-2">
                            {section.items.map((item, itemIndex) => (
                                <a href={item.badge} key={itemIndex} title={item.name} className="flex items-center" rel="noopener noreferrer">
                                    <img src={item.badge} alt={item.name} className="h-7" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}
