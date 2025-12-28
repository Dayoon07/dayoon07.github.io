import { useState, useCallback, useEffect } from 'react';

/** 라이트박스 훅 리턴 타입 */
interface UseLightBoxReturn {
    currentIndex: number | null;
    isOpen: boolean;
    openLightbox: (index: number) => void;
    closeLightbox: () => void;
    prevSlide: (e?: React.MouseEvent) => void;
    nextSlide: (e?: React.MouseEvent) => void;
    goToSlide: (index: number, e?: React.MouseEvent) => void;
}

export const useLightBox = (totalItems: number = 0): UseLightBoxReturn => {
    const [currentIndex, setCurrentIndex] = useState<number | null>(null);

    const openLightbox = useCallback((index: number) => {
        setCurrentIndex(index);
    }, []);

    const closeLightbox = useCallback(() => {
        setCurrentIndex(null);
    }, []);

    const prevSlide = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === null ? null : (prev - 1 + totalItems) % totalItems));
    }, [totalItems]);

    const nextSlide = useCallback((e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev === null ? null : (prev + 1) % totalItems));
    }, [totalItems]);

    const goToSlide = useCallback((index: number, e?: React.MouseEvent) => {
        e?.stopPropagation();
        setCurrentIndex(index);
    }, []);

    useEffect(() => {
        if (currentIndex === null) return;

        const handleKeyPress = (e: KeyboardEvent) => {
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowLeft') prevSlide();
            if (e.key === 'ArrowRight') nextSlide();
        };

        document.addEventListener('keydown', handleKeyPress);
        return () => document.removeEventListener('keydown', handleKeyPress);
    }, [currentIndex, closeLightbox, prevSlide, nextSlide]);

    return {
        currentIndex,
        isOpen: currentIndex !== null,
        openLightbox,
        closeLightbox,
        prevSlide,
        nextSlide,
        goToSlide
    };
};