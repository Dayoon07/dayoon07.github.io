import React, { useState } from "react";
import { SkillIconRes } from "../../entities/etc/SkillIconRes";
import { cl } from "../../constants/CurrentLocation";

interface SkillIconProps {
    skill: SkillIconRes;
    index: number; 
    show: boolean;
}

/** 스킬 아이콘 컴포넌트 */
export const SkillIcon: React.FC<SkillIconProps> = ({
    skill, index, show
}) => {
    const [imageLoaded, setImageLoaded] = useState<boolean>(false);
    const [imageError, setImageError] = useState<boolean>(false);

    const iconUrl = `${cl}/skillicon/${skill.icon}.svg`;

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