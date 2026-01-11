import React from 'react';

interface Slide {
    src: string;
    alt?: string;
}

interface LightBoxProps {
    isOpen: boolean;
    currentImage?: string | null;
    onClose: () => void;
    onPrev?: (e: React.MouseEvent) => void;
    onNext?: (e: React.MouseEvent) => void;
    slides?: Slide[];
    currentIndex?: number | null;
    showNavigation?: boolean;
    showIndicators?: boolean;
    onIndicatorClick?: (index: number, e: React.MouseEvent) => void;
}

/** 재사용 가능한 라이트박스 컴포넌트 */
const LightBox: React.FC<LightBoxProps> = ({ 
    isOpen, 
    currentImage, 
    onClose, 
    onPrev, 
    onNext,
    slides = [],
    currentIndex = 0,
    showNavigation = true,
    showIndicators = false,
    onIndicatorClick
}) => {
    if (!isOpen) return null;

    // 현재 표시할 이미지 소스 결정
    const imageSrc = currentImage || (currentIndex !== null ? slides[currentIndex]?.src : "");
    const imageAlt = (currentIndex !== null ? slides[currentIndex]?.alt : "") || "라이트박스 이미지";

    return (
        <div 
            onClick={onClose}
            className="z-50 fixed inset-0 bg-black/80 flex items-center justify-center animate-in fade-in duration-300" 
            role="dialog"
            aria-modal="true"
        >
            {/* 이전 버튼 */}
            {showNavigation && onPrev && (
                <button 
                    onClick={(e) => { e.stopPropagation(); onPrev(e); }}
                    className="absolute left-4 text-white text-4xl font-bold px-4 py-2 
                             bg-black/50 hover:bg-black/80 rounded-full
                             transition-all duration-200 z-[60]"
                    aria-label="이전 이미지"
                >
                    &#8592;
                </button>
            )}

            {/* 이미지 컨테이너 (클릭 시 닫히지 않도록 stopPropagation 추가) */}
            <div className="relative flex items-center justify-center p-4" onClick={(e) => e.stopPropagation()}>
                <img 
                    src={imageSrc || ""}
                    alt={imageAlt} 
                    className="max-h-[90vh] max-w-full lg:max-w-[80vw] shadow-2xl rounded-sm object-contain animate-in zoom-in-95 duration-300"
                />
            </div>

            {/* 다음 버튼 */}
            {showNavigation && onNext && (
                <button 
                    onClick={(e) => { e.stopPropagation(); onNext(e); }}
                    className="absolute right-4 text-white text-4xl font-bold px-4 py-2 
                             bg-black/50 hover:bg-black/80 rounded-full
                             transition-all duration-200 z-[60]"
                    aria-label="다음 이미지"
                >
                    &#8594;
                </button>
            )}

            {/* 닫기 버튼 */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-3xl font-bold 
                           bg-black/50 hover:bg-black/80 rounded-full 
                           w-12 h-12 flex items-center justify-center transition-all duration-200 z-[60]"
                aria-label="라이트박스 닫기"
            >
                &times;
            </button>

            {/* 인디케이터 */}
            {showIndicators && slides.length > 0 && (
                <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex space-x-3 z-[60]">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => { e.stopPropagation(); onIndicatorClick?.(i, e); }}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            i === currentIndex 
                                ? 'bg-white scale-125' 
                                : 'bg-white/40 hover:bg-white/70'
                            }`}
                            aria-label={`${i + 1}번째 이미지로 이동`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}

export default LightBox;