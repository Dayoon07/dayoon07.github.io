import { useState, useCallback, useEffect } from 'react';

/**
 * 라이트박스 기능을 위한 커스텀 훅
 * @param {number} totalItems - 전체 아이템 개수
 * @returns {object} 라이트박스 관련 상태 및 함수들
 */
export const useLightBox = (totalItems = 0) => {
    const [currentIndex, setCurrentIndex] = useState(null);

    const openLightbox = useCallback((index) => {
        setCurrentIndex(index);
    }, []);

    const closeLightbox = useCallback(() => {
        setCurrentIndex(null);
    }, []);

    const prevSlide = useCallback((e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev - 1 + totalItems) % totalItems);
    }, [totalItems]);

    const nextSlide = useCallback((e) => {
        e?.stopPropagation();
        setCurrentIndex((prev) => (prev + 1) % totalItems);
    }, [totalItems]);

    const goToSlide = useCallback((index, e) => {
        e?.stopPropagation();
        setCurrentIndex(index);
    }, []);

    useEffect(() => {
        if (currentIndex === null) return;

        const handleKeyPress = (e) => {
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