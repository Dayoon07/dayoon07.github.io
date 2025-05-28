import React, { useState, useEffect } from "react";

export default function Skill() {
    const [skillSections, setSkillSections] = useState([]);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [totalImages, setTotalImages] = useState(0);
    const [showItems, setShowItems] = useState(false);

    useEffect(() => {
        document.title = "기술 스택 | 안녕하세요. 강다윤입니다";
    }, []);

    useEffect(() => {
        fetch("/json/skill.json")
            .then((res) => res.json())
            .then((data) => {
                setSkillSections(data);
                const total = data.reduce((acc, section) => acc + section.items.length, 0);
                setTotalImages(total);
                preloadImages(data);
            })
            .catch((error) => console.error("skill.json 로딩 실패:", error));
    }, []);

    const preloadImages = (data) => {
        const imagePromises = data.flatMap((section) =>
            section.items.map((item) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = item.badge;
                    img.onload = () => {
                        setImagesLoaded((prev) => prev + 1);
                        resolve();
                    };
                    img.onerror = () => {
                        setImagesLoaded((prev) => prev + 1);
                        resolve();
                    };
                });
            })
        );

        Promise.all(imagePromises).then(() => {
            setShowItems(true);
        });
    };

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
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin" />
                    <p className="mt-4 text-gray-600">
                        이미지 로딩중... ({imagesLoaded}/{totalImages})
                    </p>
                </div>
            )}

            {skillSections.map((section, index) => (
                <div
                    key={section.title || index}
                    className={`transition-all duration-700 ease-out ${
                        showItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    <div className="border-b py-2 px-4 font-bold text-lg">{section.title}</div>
                    <div className="p-4">
                        <div className="flex flex-wrap gap-2">
                            {section.items.map((item) => (
                                <a
                                    href={item.badge}
                                    key={item.name}
                                    title={item.name}
                                    rel="noopener noreferrer"
                                    target="_blank"
                                    className="flex items-center"
                                >
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
