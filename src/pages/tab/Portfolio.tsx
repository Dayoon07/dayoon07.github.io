import { useMemo } from 'react';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useAnimation } from '../../hooks/useAnimation';
import { useLightBox } from '../../hooks/useLightBox';
import AnimatedContainer from '../../components/common/AnimatedContainer';
import LightBox from '../../components/common/LightBox';
import { cl } from '../../constants/CurrentLocation';
import { PortfolioImage } from '../../components/tab/portfolio/PortfolioImage';

export default function Portfolio() {
    useDocTitle("포트폴리오 | 안녕하세요. 강다윤입니다");
    const totalSlides = 12;
    const showItems = useAnimation();
    const { 
        isOpen, 
        currentIndex, 
        openLightbox, 
        closeLightbox, 
        prevSlide, 
        nextSlide, 
        goToSlide 
    } = useLightBox(totalSlides);

    const slides = useMemo(() => {
        return Array.from({ length: totalSlides }, (_, i) => ({
            id: i,
            src: `${cl}/popol/slide_${i + 1}.png`,
            alt: `slide_${i + 1}`
        }));
    }, [totalSlides]);

    return (
        <div className="z-60">
            <AnimatedContainer show={showItems}>
                <h1 className="text-3xl font-bold my-4">포트폴리오</h1>
            </AnimatedContainer>

            <div className="max-w-3xl md:grid md:grid-cols-2 md:gap-4">
                {slides.map((slide, i) => {
                    return (
                        <PortfolioImage
                            key={slide.id}
                            slide={slide}
                            index={i}
                            show={showItems}
                            onImageClick={openLightbox}
                        />
                    )
                })}
            </div>

            <LightBox
                isOpen={isOpen}
                slides={slides}
                currentIndex={currentIndex}
                onClose={closeLightbox}
                onPrev={prevSlide}
                onNext={nextSlide}
                onIndicatorClick={goToSlide}
                showNavigation={true}
                showIndicators={true}
            />
        </div>
    );
}