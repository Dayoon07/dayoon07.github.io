import React from "react";
import AnimatedContainer from "../../common/AnimatedContainer";

interface ArchitectureCardProps {
    content: {
        img: string;
        title: string;
        text: string;
    },
    index: number,
    show: boolean
}

/** 아키텍처 카드 컴포넌트 */
export const ArchitectureCard: React.FC<ArchitectureCardProps> = ({
    content, index, show
}) => (
    <AnimatedContainer show={show} delay={index * 100} className="md:max-w-md max-md:w-full max-md:mb-8">
        <a href={content.img} target="_blank" rel="noreferrer">
            <img src={content.img} className="w-full" alt={content.title} />
        </a>
        <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">{content.title}</div>
            <p className="text-gray-700 text-base">{content.text}</p>
        </div>
    </AnimatedContainer>
);