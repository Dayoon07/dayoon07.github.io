import { useState, useEffect, useCallback } from "react";
import { useDocTitle } from '../hooks/useDocTitle';
import { useAnimation } from '../hooks/useAnimation';
import LoadingSpinner from '../components/common/LoadingSpinner';
import ErrorMessage from '../components/common/ErrorMessage';
import AnimatedContainer from '../components/common/AnimatedContainer';

// 스킬 아이콘 컴포넌트
const SkillIcon = ({ skill, index, show }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const [imageError, setImageError] = useState(false);

    const iconUrl = `/skillicon/${skill.icon}.svg`;

    return (
        <div
            title={skill.name}
            style={{ transitionDelay: `${index * 30}ms` }}
            className={`flex flex-col items-center gap-2 transition-all duration-500 ease-out ${
                show ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"
            }`}
        >
            <div className="relative group">
                {!imageLoaded && !imageError && (
                    <div className="w-16 h-16 bg-gray-200 animate-pulse rounded"></div>
                )}
                {imageError ? (
                    <div className="w-16 h-16 bg-gradient-to-br from-blue-100 to-blue-200 border-2 border-blue-300 rounded flex items-center justify-center shadow-sm">
                        <span className="text-lg font-bold text-blue-600">
                            {skill.name.charAt(0).toUpperCase()}
                        </span>
                    </div>
                ) : (
                    <img
                        src={iconUrl}
                        alt={skill.name}
                        className={`w-16 h-16 rounded hover:scale-110 hover:shadow-xl transition-all duration-300 ${
                            imageLoaded ? 'opacity-100' : 'opacity-0'
                        }`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageError(true)}
                        loading="lazy"
                    />
                )}
            </div>
            <span className="text-xs text-gray-700 font-medium text-center max-w-[80px] truncate">
                {skill.name}
            </span>
        </div>
    );
};

export default function Skill() {
    useDocTitle("기술 스택 | 안녕하세요. 강다윤입니다");

    const [skills, setSkills] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const [error, setError] = useState(null);
    const showItems = useAnimation();

    const loadSkillData = useCallback(async () => {
        try {
            setIsLoading(true);
            setError(null);

            const response = await fetch("/json/skillicon.json");
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setSkills(data);
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
        <div className="max-w-3xl pb-10">
            <AnimatedContainer show={showItems}>
                <h1 className="text-3xl font-bold my-4">기술 스택</h1>
            </AnimatedContainer>

            <AnimatedContainer show={showItems} delay={150}>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
                    {skills.map((skill, index) => (
                        <SkillIcon
                            key={skill.icon}
                            skill={skill}
                            index={index}
                            show={showItems}
                        />
                    ))}
                </div>
            </AnimatedContainer>

            {skills.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">표시할 기술 스택이 없습니다.</p>
                </div>
            )}
        </div>
    );
}