/** 애니메이션 클래스 */
export const ANIMATION_CLASSES = "opacity-0 transform -translate-y-10 transition-all duration-700 ease-out";

/** 공통 애니메이션 스타일 상수 */
export const FADE_IN_UP_ANIMATION = {
    initial: {
        opacity: 0,
        transform: "translateY(-2.5rem)"
    },
    active: {
        opacity: 1,
        transform: "translateY(0)"
    },
    transition: "opacity 0.7s ease-out, transform 0.7s ease-out"
};

/** 애니메이션 스타일 생성 함수 */
export const getAnimationStyle = (isVisible: boolean, delay: number = 0) => ({
    opacity: isVisible ? 1 : 0,
    transform: isVisible ? "translateY(0)" : "translateY(-2.5rem)",
    transitionDelay: `${delay}ms`
});


