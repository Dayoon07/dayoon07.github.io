import React, { useState, useEffect, useCallback } from "react";

export default function Skill() {
    const [skillSections, setSkillSections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const [showItems, setShowItems] = useState(false);

    const loadSkillData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);
            
            const response = await fetch("/json/skill.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            
            const data = await response.json();
            setSkillSections(data);
            
            setTimeout(() => {
                setShowItems(true);
            }, 100);
            
        } catch (error) {
            console.error("skill.json 로딩 실패:", error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        document.title = "기술 스택 | 안녕하세요. 강다윤입니다";
        loadSkillData();
    }, [loadSkillData]);

    const LoadingSpinner = () => (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600"></div>
            <p className="text-gray-600 text-lg font-medium">기술 스택을 불러오는 중...</p>
        </div>
    );

    const ErrorMessage = () => (
        <div className="flex flex-col items-center justify-center min-h-[400px] space-y-4">
            <div className="text-center">
                <p className="text-red-600 text-lg font-medium mb-2">데이터를 불러오는데 실패했습니다</p>
                <p className="text-gray-500 text-sm mb-4">{error}</p>
                <button 
                    onClick={loadSkillData}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                    다시 시도
                </button>
            </div>
        </div>
    );

    const SkillBadge = ({ item, index }) => {
        const [imageLoaded, setImageLoaded] = useState(false);
        const [imageError, setImageError] = useState(false);

        return (
            <a href={item.badge} key={item.name} title={item.name} rel="noopener noreferrer" target="_blank" style={{ transitionDelay: `${index * 50}ms` }} 
                className={`flex items-center transition-all duration-500 ease-out ${
                    showItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
                }`}
            >
                <div className="relative">
                    {!imageLoaded && !imageError && (
                        <div className="h-7 w-20 bg-gray-200 animate-pulse rounded"></div>
                    )}
                    {imageError ? (
                        <div className="h-7 px-3 bg-gray-100 border border-gray-300 rounded flex items-center text-xs text-gray-600">
                            {item.name}
                        </div>
                    ) : (
                        <img 
                            src={item.badge} 
                            alt={item.name} 
                            className={`h-7 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                            onLoad={() => setImageLoaded(true)}
                            onError={() => setImageError(true)}
                            loading="lazy"
                        />
                    )}
                </div>
            </a>
        );
    };

    if (isLoading) {
        return (
            <div className="max-w-6xl mx-auto">
                <LoadingSpinner />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto">
                <ErrorMessage />
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <h1
                className={`text-3xl font-bold my-4 transition-all duration-700 ease-out ${
                    showItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                }`}
            >
                기술 스택
            </h1>

            <div className="space-y-6">
                {skillSections.map((section, sectionIndex) => (
                    <div
                        key={section.title || sectionIndex}
                        className={`max-w-3xl transition-all duration-700 ease-out ${
                            showItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                        }`}
                        style={{ transitionDelay: `${sectionIndex * 150}ms` }}
                    >
                        <div className="border-b-2 border-gray-200 py-2 mb-3">
                            <h2 className="font-bold text-xl text-gray-800">{section.title}</h2>
                        </div>
                        
                        <>
                            <div className="flex flex-wrap gap-2">
                                {section.items?.map((item, itemIndex) => (
                                    <SkillBadge 
                                        key={`${item.name}-${itemIndex}`}
                                        item={item} 
                                        index={itemIndex} 
                                    />
                                ))}
                            </div>
                        </>
                    </div>
                ))}
            </div>

            {skillSections.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">표시할 기술 스택이 없습니다.</p>
                </div>
            )}
        </div>
    );
}