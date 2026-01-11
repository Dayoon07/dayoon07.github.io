import React, { useState } from "react";
import { cl } from "../../../../constants/CurrentLocation";

interface SkillBadgeProps {
    item: {
        name: string;
        badge: string;
    },
    index: number;
    show: boolean;
}

/** 스킬 배지 컴포넌트 */
export const SkillBadge: React.FC<SkillBadgeProps> = ({ item, index, show }) => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [imageError, setImageError] = useState<boolean>(false);

    return (
        <div key={item.name} title={item.name} style={{ transitionDelay: `${index * 50}ms` }} 
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
                        src={`${cl}/skill_badge/${item.badge}`} 
                        alt={item.name} 
                        className={`h-7 transition-opacity duration-300 ${imageLoaded ? 'opacity-100' : 'opacity-0'}`}
                        onLoad={() => setImageLoaded(true)}
                        onError={() => setImageError(true)}
                        loading="lazy"
                    />
                )}
            </div>
        </div>
    );
};