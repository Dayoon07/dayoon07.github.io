import { useState } from "react";

export default function Portfolio() {
    const [lightboxImg, setLightboxImg] = useState(null);

    const openLightbox = (src) => {
        setLightboxImg(src);
    };

    const closeLightbox = () => {
        setLightboxImg(null);
    };

    return (
        <div className="pb-96">
            <h1 className="text-3xl font-bold my-4">포트폴리오</h1>

            <div className="md:grid md:grid-cols-2 md:gap-4">
                {Array.from({ length: 12 }, (_, i) => (
                    <img src={`/popol/slide_${i + 1}.png`} key={i} alt={`slide_${i + 1}`} onClick={() => openLightbox(`/popol/slide_${i + 1}.png`)} 
                        className="lg:max-w-md lg md:max-w-sm md:max-w-xs w-full mx-auto mb-4 rounded-lg shadow-lg transition-transform 
                        transform hover:scale-105 hover:shadow-xl duration-300 ease-in-out cursor-pointer"
                    />
                ))}
            </div>

            {lightboxImg && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 cursor-pointer"
                    onClick={closeLightbox}
                >
                    <img src={lightboxImg} alt="라이트박스 이미지"
                        className="max-lg:w-full lg:w-3/5 shadow-2xl"
                    />
                </div>
            )}
        </div>
    );
}
