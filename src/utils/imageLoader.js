/**
 * 이미지 로딩 관련 유틸리티 함수
 */

/**
 * 이미지 미리 로드
 * @param {string[]} imageUrls - 미리 로드할 이미지 URL 배열
 * @returns {Promise<void[]>}
 */
export const preloadImages = (imageUrls) => {
    return Promise.all(
        imageUrls.map(url => {
            return new Promise((resolve, reject) => {
                const img = new Image();
                img.onload = () => resolve(url);
                img.onerror = () => reject(url);
                img.src = url;
            });
        })
    );
};

/**
 * 이미지 로드 상태 확인
 * @param {string} imageUrl - 확인할 이미지 URL
 * @returns {Promise<boolean>}
 */
export const checkImageExists = (imageUrl) => {
    return new Promise((resolve) => {
        const img = new Image();
        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);
        img.src = imageUrl;
    });
};