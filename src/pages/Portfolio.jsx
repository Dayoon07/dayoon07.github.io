import { useState, useEffect } from "react";

export default function Portfolio() {
    document.title = "포트폴리오 | 안녕하세요. 강다윤입니다";

    const totalSlides = 12;
    const [currentIndex, setCurrentIndex] = useState(null);
    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [showItems, setShowItems] = useState(false);

    // 이미지 로딩 상태 추적
    useEffect(() => {
        // 모든 이미지를 프리로드
        const preloadImages = () => {
            const imagePromises = Array.from({ length: totalSlides }, (_, i) => {
                return new Promise((resolve) => {
                    const img = new Image();
                    img.src = `/popol/slide_${i + 1}.png`;
                    img.onload = () => {
                        setImagesLoaded(prev => prev + 1);
                        resolve();
                    };
                    img.onerror = () => resolve(); // 오류가 발생해도 계속 진행
                });
            });

            Promise.all(imagePromises).then(() => {
                // 모든 이미지가 로드되면 애니메이션 시작
                setShowItems(true);
            });
        };

        preloadImages();
    }, []);

    const openLightbox = (index) => {
        setCurrentIndex(index);
    };

    const closeLightbox = () => {
        setCurrentIndex(null);
    };

    const prevSlide = (e) => {
        e.stopPropagation(); // 배경 클릭 close 방지
        setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
    };

    const nextSlide = (e) => {
        e.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
    };

    return (
        <div className="z-60">
            <h1 className="text-3xl font-bold my-4 opacity-0 transform -translate-y-10 transition-all duration-700 ease-out"
                style={{ 
                    opacity: showItems ? 1 : 0, 
                    transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)'
                }}>
                포트폴리오
            </h1>

            {/* 로딩 인디케이터 */}
            {!showItems && (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600">이미지 로딩중... ({imagesLoaded}/{totalSlides})</p>
                </div>
            )}

            <div className="md:grid md:grid-cols-2 md:gap-4">
                {Array.from({ length: totalSlides }, (_, i) => (
                    <div 
                        key={i}
                        className="opacity-0 transform -translate-y-10 transition-all duration-700 ease-out mb-4"
                        style={{ 
                            opacity: showItems ? 1 : 0, 
                            transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)',
                            transitionDelay: `${i * 100}ms` // 각 아이템마다 딜레이 추가
                        }}
                    >
                        <img
                            src={`/popol/slide_${i + 1}.png`}
                            alt={`slide_${i + 1}`}
                            onClick={() => openLightbox(i)}
                            className="lg:max-w-md md:max-w-sm md:max-w-xs w-full mx-auto rounded-lg shadow-lg transition-transform 
                            transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out cursor-pointer"
                        />
                    </div>
                ))}
            </div>

            {currentIndex !== null && (
                <div className="z-20 fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center" onClick={closeLightbox}>
                    <button onClick={prevSlide} className="absolute left-0 text-white text-4xl font-bold pb-2 px-4 bg-black bg-opacity-50 hover:bg-opacity-80">
                        ←
                    </button>

                    <img src={`/popol/slide_${currentIndex + 1}.png`}
                        alt={`slide_${currentIndex + 1}`} className="max-lg:w-full lg:w-3/5 shadow-2xl cursor-pointer"
                    />

                    <button onClick={nextSlide} className="absolute right-0 text-white text-4xl font-bold pb-2 px-4 bg-black bg-opacity-50 hover:bg-opacity-80">
                        →
                    </button>
                </div>
            )}
        </div>
    );
}