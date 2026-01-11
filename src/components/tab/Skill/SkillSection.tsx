import React from "react";
import { SkillBadgeRes } from "../../../entities/tab/SkillBadgeRes";
import AnimatedContainer from "../../common/AnimatedContainer";
import { SkillBadge } from "./ui/SkillBadge";

interface SkillSectionProps {
    section: SkillBadgeRes;
    sectionIndex: number;
    show: boolean;
}

/** 스킬 섹션 컴포넌트 */
export const SkillSection: React.FC<SkillSectionProps> = ({
    section, sectionIndex, show
}) => (
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