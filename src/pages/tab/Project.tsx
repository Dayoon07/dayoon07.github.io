import { useDocTitle } from '../../hooks/useDocTitle';
import { useAnimation } from '../../hooks/useAnimation';
import { useLightBox } from '../../hooks/useLightBox';
import { PROJECTS_DATA } from '../../constants/data/projectData';
import AnimatedContainer from '../../components/common/AnimatedContainer';
import LightBox from '../../components/common/LightBox';
import { ProjectCard } from '../../components/tab/project/ProjectCard';

export default function Project() {
    useDocTitle("주요 프로젝트 | 안녕하세요. 강다윤입니다");
    const showItems = useAnimation();
    const { 
        isOpen, 
        openLightbox, 
        closeLightbox, 
        currentIndex,
        goToSlide,
        nextSlide,
        prevSlide
    } = useLightBox(PROJECTS_DATA.length);

    const ImageClickHandler = (image: string) => {
        const index = PROJECTS_DATA.findIndex(p => p.image === image);
        if (index !== -1) openLightbox(index);
    };

    return (
        <>
            <AnimatedContainer show={showItems}>
                <h1 className="text-3xl font-bold my-4">주요 프로젝트</h1>
            </AnimatedContainer>

            <div className="max-w-3xl space-y-8 mt-5">
                {PROJECTS_DATA.map((project, index) => (
                    <ProjectCard 
                        key={project.title}
                        project={project}
                        index={index}
                        show={showItems}
                        onImageClick={ImageClickHandler}
                    />
                ))}
            </div>
            
            <LightBox
                isOpen={isOpen}
                currentIndex={currentIndex}
                slides={PROJECTS_DATA.map(p => ({ src: p.image, alt: p.title }))} // 데이터 변환
                onClose={closeLightbox}
                onPrev={prevSlide}
                onNext={nextSlide}
                showNavigation={true}
                showIndicators={true}
                onIndicatorClick={goToSlide}
            />
        </>
    );
}