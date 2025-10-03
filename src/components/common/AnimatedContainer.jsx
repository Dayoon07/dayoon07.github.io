import { getAnimationStyle, ANIMATION_CLASSES } from "../../constants/animation";

/**
 * 애니메이션이 적용된 컨테이너 컴포넌트
 */
export default function AnimatedContainer({ 
    children, 
    show, 
    delay = 0, 
    className = '' 
}) {
    return (
        <div className={`${ANIMATION_CLASSES} ${className}`} style={getAnimationStyle(show, delay)}>
            {children}
        </div>
    );
}