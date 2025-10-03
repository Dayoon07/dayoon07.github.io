import { useEffect } from 'react';

/**
 * 페이지 타이틀을 설정하는 커스텀 훅
 * @param {string} title - 설정할 페이지 타이틀
 */
export const useDocTitle = (title) => {
    useEffect(() => {
        if (title) document.title = title;
    }, [title]);
};