import { useMemo } from 'react';
import { useDocTitle } from '../hooks/useDocTitle';
import { useAnimation } from '../hooks/useAnimation';
import { ARCHITECTURE_DATA } from '../constants/architectureData';
import AnimatedContainer from '../components/common/AnimatedContainer';

// 아키텍처 카드 컴포넌트
const ArchitectureCard = ({ content, index, show }) => (
    <AnimatedContainer show={show} delay={index * 100} className="md:max-w-md max-md:w-full max-md:mb-8">
        <a href={content.img} target="_blank" rel="noreferrer">
            <img src={content.img} className="w-full" alt={content.title} />
        </a>
        <div className="px-2 py-4">
            <div className="font-bold text-xl mb-2">{content.title}</div>
            <p className="text-gray-700 text-base">{content.text}</p>
        </div>
    </AnimatedContainer>
);

export default function Architecture() {
    useDocTitle("DB 아키텍처 | 안녕하세요. 강다윤입니다");

    const showItems = useAnimation();
    const architectureList = useMemo(() => ARCHITECTURE_DATA, []);

    return (
        <>
            <AnimatedContainer show={showItems}>
                <h1 className="text-3xl font-bold my-4">DB 설계 작업물</h1>
            </AnimatedContainer>

            <div className="max-w-3xl md:grid md:grid-cols-2 md:gap-4">
                {architectureList.map((content, idx) => (
                    <ArchitectureCard 
                        key={idx}
                        content={content}
                        index={idx}
                        show={showItems}
                    />
                ))}
            </div>
        </>
    );
}