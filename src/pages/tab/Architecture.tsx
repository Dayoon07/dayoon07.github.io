import { useDocTitle } from '../../hooks/useDocTitle';
import { useAnimation } from '../../hooks/useAnimation';
import { ARCHITECTURE_DATA } from '../../constants/data/architectureData';
import AnimatedContainer from '../../components/common/AnimatedContainer';
import { ArchitectureCard } from '../../components/tab/architecture/ArchitectureCard';

export default function Architecture() {
    useDocTitle("DB 아키텍처 | 안녕하세요. 강다윤입니다");
    const showItems = useAnimation();

    return (
        <>
            <AnimatedContainer show={showItems}>
                <h1 className="text-3xl font-bold my-4">DB 설계 작업물</h1>
            </AnimatedContainer>

            <div className="max-w-3xl md:grid md:grid-cols-2 md:gap-4">
                {ARCHITECTURE_DATA.map((content, idx) => (
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