import React from "react";
import AnimatedContainer from "../../common/AnimatedContainer";

interface PortfolioImageProps {
    slide: {    // 슬라이드 객체
        id: number;
        src: string;
        alt: string;
    };
    index: number;           // 배열 인덱스 (delay 및 loading 최적화용)
    show: boolean;           // 애니메이션 실행 여부
    onImageClick: (index: number) => void; // 클릭 시 실행될 함수
}

/** 포트폴리오 이미지 컴포넌트 */
export const PortfolioImage: React.FC<PortfolioImageProps> = ({ 
    slide, 
    index, 
    show, 
    onImageClick 
}) => {
    return (
        <AnimatedContainer show={show} delay={index * 100} className="mb-4">
            <img 
                src={slide.src} 
                alt={slide.alt} 
                onClick={() => onImageClick(index)}
                className="lg:max-w-md md:max-w-sm w-full mx-auto rounded-lg shadow-lg 
                           transition-transform transform hover:scale-105 hover:shadow-xl 
                           duration-300 ease-in-out cursor-pointer"
                loading={index < 6 ? "eager" : "lazy"}
            />
        </AnimatedContainer>
    );
}