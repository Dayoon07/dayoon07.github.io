// 이미지 로딩 관련 유틸리티 함수

/**
 * 이미지 미리 로드
 * @param imageUrls - 미리 로드할 이미지 URL 배열
 * @returns 각 이미지 URL을 resolve 하는 Promise 배열
 */
export const preloadImages = (imageUrls: string[]): Promise<string[]> => {
    return Promise.all(
        imageUrls.map((url: string) => {
            return new Promise<string>((resolve, reject) => {
                const img: HTMLImageElement = new Image();

                img.onload = () => resolve(url);
                img.onerror = () => reject(url);

                img.src = url;
            });
        })
    );
};

/**
 * 이미지 로드 상태 확인
 * @param imageUrl - 확인할 이미지 URL
 * @returns 이미지가 존재하면 true, 아니면 false
 */
export const checkImageExists = (imageUrl: string): Promise<boolean> => {
    return new Promise<boolean>((resolve) => {
        const img: HTMLImageElement = new Image();

        img.onload = () => resolve(true);
        img.onerror = () => resolve(false);

        img.src = imageUrl;
    });
};
