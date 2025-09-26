import { useState, useEffect, useCallback, useMemo } from "react";

export default function Portfolio() {
    const totalSlides = 12;
    const [currentIndex, setCurrentIndex] = useState(null);
    const [showItems, setShowItems] = useState(false);

    const openLightbox = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    const closeLightbox = useCallback(() => {
        setCurrentIndex(null);
    }, []);

    const prevSlide = useCallback((e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    }, [totalSlides]);

    const nextSlide = useCallback((e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    }, [totalSlides]);

    const slides = useMemo(() => 
        Array.from({ length: totalSlides }, (_, i) => ({
            id: i,
            src: `/popol/slide_${i + 1}.png`,
            alt: `slide_${i + 1}`
        }))
    , [totalSlides]);

    useEffect(() => {
        document.title = "포트폴리오 | 안녕하세요. 강다윤입니다";
        
        const timer = setTimeout(() => {
            setShowItems(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (currentIndex === null) return;

        const handleKeyPress = (e) => {
            if (e.key === "Escape") closeLightbox();
            if (e.key === "ArrowLeft") prevSlide();
            if (e.key === "ArrowRight") nextSlide();
        };

        document.addEventListener("keydown", handleKeyPress);
        return () => document.removeEventListener("keydown", handleKeyPress);
    }, [currentIndex, closeLightbox, prevSlide, nextSlide]);

    return (
        <div className="z-60">
            <h1 
                className="text-3xl font-bold my-4 opacity-0 transform -translate-y-10 transition-all duration-700 ease-out"
                style={{ 
                    opacity: showItems ? 1 : 0, 
                    transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)'
                }}
            >
                포트폴리오
            </h1>

            <div className="md:w-[818px] md:grid md:grid-cols-2 md:gap-4">
                {slides.map((slide, i) => (
                    <div 
                        key={slide.id}
                        className="opacity-0 transform -translate-y-10 transition-all duration-700 ease-out mb-4"
                        style={{ 
                            opacity: showItems ? 1 : 0, 
                            transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)',
                            transitionDelay: `${i * 100}ms`
                        }}
                    >
                        <img
                            src={slide.src}
                            alt={slide.alt}
                            onClick={() => openLightbox(i)}
                            className="lg:max-w-md md:max-w-sm w-full mx-auto rounded-lg shadow-lg 
                                     transition-transform transform hover:scale-105 hover:shadow-xl 
                                     duration-300 ease-in-out cursor-pointer"
                            loading={i < 6 ? "eager" : "lazy"} // 첫 6개는 즉시, 나머지는 지연 로딩
                        />
                    </div>
                ))}
            </div>

            {currentIndex !== null && (
                <div 
                    className="z-20 fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center 
                             animate-in fade-in duration-300" 
                    onClick={closeLightbox}
                    role="dialog"
                    aria-label="이미지 라이트박스"
                >
                    <button 
                        onClick={prevSlide} 
                        className="absolute left-4 text-white text-4xl font-bold px-4 py-2 
                                 bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full
                                 transition-all duration-200 z-30"
                        aria-label="이전 이미지"
                    >
                        ←
                    </button>

                    <img 
                        src={slides[currentIndex]?.src}
                        alt={slides[currentIndex]?.alt} 
                        className="max-lg:w-full lg:w-3/5 shadow-2xl cursor-pointer 
                                 animate-in zoom-in-95 duration-300"
                    />

                    <button 
                        onClick={nextSlide} 
                        className="absolute right-4 text-white text-4xl font-bold px-4 py-2 
                                 bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full
                                 transition-all duration-200 z-30"
                        aria-label="다음 이미지"
                    >
                        →
                    </button>

                    <button 
                        onClick={closeLightbox}
                        className="absolute top-4 right-4 text-white text-3xl font-bold 
                                 bg-black bg-opacity-50 hover:bg-opacity-80 rounded-full 
                                 w-12 h-12 flex items-center justify-center transition-all duration-200 z-30"
                        aria-label="라이트박스 닫기"
                    >
                        ×
                    </button>

                    <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-30">
                        {slides.map((_, i) => (
                            <button
                                key={i}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setCurrentIndex(i);
                                }}
                                className={`w-3 h-3 rounded-full transition-all duration-200 ${
                                    i === currentIndex 
                                        ? 'bg-white' 
                                        : 'bg-white bg-opacity-50 hover:bg-opacity-75'
                                }`}
                                aria-label={`${i + 1}번째 이미지로 이동`}
                            />
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}