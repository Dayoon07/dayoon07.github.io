import { useState } from "react";

export default function Portfolio() {

    document.title = "포트폴리오 | 안녕하세요. 강다윤입니다";

    const totalSlides = 12;
    const [currentIndex, setCurrentIndex] = useState(null);

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
        <div className="pb-24 z-60">
            <h1 className="text-3xl font-bold my-4">포트폴리오</h1>

            <div className="md:grid md:grid-cols-2 md:gap-4">
                {Array.from({ length: totalSlides }, (_, i) => (
                    <img
                        src={`https://dayoon07.github.io/popol/slide_${i + 1}.png`}
                        key={i}
                        alt={`slide_${i + 1}`}
                        onClick={() => openLightbox(i)}
                        className="lg:max-w-md lg md:max-w-sm md:max-w-xs w-full mx-auto mb-4 rounded-lg shadow-lg transition-transform 
                        transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out cursor-pointer"
                    />
                ))}
            </div>

            {currentIndex !== null && (
                <div className="z-20 fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center" onClick={closeLightbox}>
                    <button onClick={prevSlide} className="absolute left-0 text-white text-4xl font-bold pb-2 px-4 bg-black bg-opacity-50 hover:bg-opacity-80">
                        ←
                    </button>

                    <img src={`https://dayoon07.github.io/popol/slide_${currentIndex + 1}.png`}
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
