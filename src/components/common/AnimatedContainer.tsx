import { ReactNode } from "react";
import { getAnimationStyle, ANIMATION_CLASSES } from "../../constants/animation";

interface AnimatedContainerProps {
    children: ReactNode, 
    show: boolean, 
    delay?: number, 
    className?: string
}

/** 애니메이션이 적용된 컨테이너 컴포넌트 */
export default function AnimatedContainer({ 
    children, show, delay = 0, className = "" 
}: AnimatedContainerProps) {
    return (
        <div className={`${ANIMATION_CLASSES} ${className}`} style={getAnimationStyle(show, delay)}>
            {children}
        </div>
    );
}
