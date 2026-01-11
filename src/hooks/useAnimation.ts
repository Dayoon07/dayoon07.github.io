import { useState, useEffect } from 'react';

/**
 * 페이드인 애니메이션을 위한 커스텀 훅
 * @param {number} delay - 애니메이션 시작 지연 시간 (ms)
 * @returns {boolean} 애니메이션 표시 상태
 */
export const useAnimation = (delay: number = 100): boolean => {
    const [showItems, setShowItems] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setShowItems(true), delay);
        return () => clearTimeout(timer);
    }, [delay]);

    return showItems;
};