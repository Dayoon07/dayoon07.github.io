import React, { useState, useEffect } from "react";

export default function Skill() {
    document.title = "기술 스택 | 안녕하세요. 강다윤입니다";

    const [skillSections, setSkillSections] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [showItems, setShowItems] = useState(false);
    const [totalImages, setTotalImages] = useState(0);

    useEffect(() => {
        fetch("/json/skill.json")
            .then((res) => res.json())
            .then((data) => {
                setSkillSections(data);

                const total = data.reduce((acc, section) => acc + section.items.length, 0);
                setTotalImages(total);

                preloadImages(data);
            })
            .catch((error) => {
                console.error("skill.json 로딩 실패:", error);
            });
    }, []);

    // 이미지 프리로드 및 애니메이션 트리거
    const preloadImages = (data) => {
        const imagePromises = [];

        data.forEach((section) => {
            section.items.forEach((item) => {
                imagePromises.push(
                    new Promise((resolve) => {
                        const img = new Image();
                        img.src = item.badge;
                        img.onload = () => {
                            setImagesLoaded((prev) => prev + 1);
                            resolve();
                        };
                        img.onerror = () => resolve();
                    })
                );
            });
        });

        Promise.all(imagePromises).then(() => {
            setShowItems(true);
        });
    };

    return (
        <>
            <h1 className="text-3xl font-bold my-4 opacity-0 transform -translate-y-10 transition-all duration-700 ease-out"
                style={{ 
                    opacity: showItems ? 1 : 0, 
                    transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)' 
                }}
            >
                기술 스택
            </h1>

            {!showItems && (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600">이미지 로딩중... ({imagesLoaded}/{totalImages})</p>
                </div>
            )}

            <div className="max-w-4xl mt-4">
                {skillSections.map((section, index) => (
                    <div key={index} style={{ 
                            opacity: showItems ? 1 : 0, 
                            transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)',
                            transitionDelay: `${index * 100}ms`
                        }}
                        className="max-md:mb-5 md:mb-10 overflow-hidden transition-all duration-700 transform opacity-0 -translate-y-10"
                    >
                        <div className="border-b py-2 px-4 font-bold text-lg">
                            {section.title}
                        </div>
                        <div className="p-4">
                            <div className="flex flex-wrap gap-1">
                                {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center" title={item.name}>
                                        <a href={item.badge}>
                                            <img src={item.badge} alt={item.name} className="h-7" />
                                        </a>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}
