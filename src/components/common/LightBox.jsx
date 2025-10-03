/**
 * 재사용 가능한 라이트박스 컴포넌트
 */
export default function LightBox({ 
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
}) {
    if (!isOpen) return null;

    const imageSrc = currentImage || slides[currentIndex]?.src;
    const imageAlt = slides[currentIndex]?.alt || "라이트박스 이미지";

    return (
        <div 
            onClick={onClose}
            className="z-20 fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center animate-in fade-in duration-300" 
            role="dialog"
            aria-label="이미지 라이트박스"
        >
            {/* 이전 버튼 */}
            {showNavigation && onPrev && (
                <button 
                    onClick={onPrev}
                    className="absolute left-4 text-white text-4xl font-bold px-4 py-2 
                            bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full
                            transition-all duration-200 z-30"
                    aria-label="이전 이미지"
                >
                    ←
                </button>
            )}

            {/* 이미지 */}
            <img 
                src={imageSrc}
                alt={imageAlt} 
                className="max-lg:w-full lg:w-3/5 shadow-2xl cursor-pointer animate-in zoom-in-95 duration-300"
            />

            {/* 다음 버튼 */}
            {showNavigation && onNext && (
                <button 
                    onClick={onNext}
                    className="absolute right-4 text-white text-4xl font-bold px-4 py-2 
                            bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full
                            transition-all duration-200 z-30"
                    aria-label="다음 이미지"
                >
                    →
                </button>
            )}

            {/* 닫기 버튼 */}
            <button 
                onClick={onClose}
                className="absolute top-4 right-4 text-white text-3xl font-bold 
                            bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full 
                            w-12 h-12 flex items-center justify-center transition-all duration-200 z-30"
                aria-label="라이트박스 닫기"
            >
            &times;
            </button>

            {/* 인디케이터 */}
            {showIndicators && slides.length > 0 && (
                <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                    {slides.map((_, i) => (
                        <button
                            key={i}
                            onClick={(e) => onIndicatorClick?.(i, e)}
                            className={`w-3 h-3 rounded-full transition-all duration-200 ${
                            i === currentIndex 
                                ? 'bg-white' 
                                : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                            }`}
                            aria-label={`${i + 1}번째 이미지로 이동`}
                        />
                    ))}
                </div>
            )}
        </div>
    );
}