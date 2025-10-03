import { useState, useEffect, useCallback } from "react";
import { useDocTitle } from '../hooks/useDocTitle';
import { useAnimation } from '../hooks/useAnimation';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import AnimatedContainer from '../components/common/AnimatedContainer';

// 스킬 배지 컴포넌트
const SkillBadge = ({ item, index, show }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    return (
        <a href={item.badge} key={item.name} title={item.name} rel="noopener noreferrer" 
            target="_blank" style={{ transitionDelay: `${index * 50}ms` }} 
            className={`flex items-center transition-all duration-500 ease-out ${
                show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
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

// 스킬 섹션 컴포넌트
const SkillSection = ({ section, sectionIndex, show }) => (
    <AnimatedContainer 
        show={show} 
        delay={sectionIndex * 150}
        className="max-w-3xl"
    >
        <div className="border-b-2 border-gray-200 py-2 mb-3">
            <h2 className="font-bold text-xl text-gray-800">{section.title}</h2>
        </div>
        <div className="flex flex-wrap gap-2">
            {section.items?.map((item, itemIndex) => (
                <SkillBadge 
                    key={`${item.name}-${itemIndex}`}
                    item={item} 
                    index={itemIndex}
                    show={show}
                />
            ))}
        </div>
    </AnimatedContainer>
);

export default function Skill() {
    useDocTitle("기술 스택 | 안녕하세요. 강다윤입니다");

    const [skillSections, setSkillSections] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const showItems = useAnimation();

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
        } catch (error) {
            console.error("skill.json 로딩 실패:", error);
            setError(error.message);
        } finally {
            setIsLoading(false);
        }
    }, []);

    useEffect(() => {
        loadSkillData();
    }, [loadSkillData]);

    if (isLoading) {
        return (
            <div className="max-w-6xl mx-auto">
                <LoadingSpinner message="기술 스택을 불러오는 중..." />
            </div>
        );
    }

    if (error) {
        return (
            <div className="max-w-6xl mx-auto">
                <ErrorMessage error={error} onRetry={loadSkillData} />
            </div>
        );
    }

    return (
        <div className="max-w-6xl mx-auto">
            <AnimatedContainer show={showItems}>
                <h1 className="text-3xl font-bold my-4">기술 스택</h1>
            </AnimatedContainer>

            <div className="space-y-6">
                {skillSections.map((section, sectionIndex) => (
                    <SkillSection
                        key={section.title || sectionIndex}
                        section={section}
                        sectionIndex={sectionIndex}
                        show={showItems}
                    />
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