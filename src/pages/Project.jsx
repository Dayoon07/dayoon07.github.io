import { useMemo } from 'react';
import { useDocTitle } from '../hooks/useDocTitle';
import { useAnimation } from '../hooks/useAnimation';
import { useLightBox } from '../hooks/useLightBox';
import { PROJECTS_DATA } from '../constants/projectData';
import AnimatedContainer from '../components/common/AnimatedContainer';
import LightBox from '../components/common/LightBox';

// 프로젝트 카드 컴포넌트
const ProjectCard = ({ project, index, show, onImageClick }) => (
    <AnimatedContainer show={show} delay={index * 150} className="w-full md:flex">
        <div>
            <img 
                src={project.image} 
                alt={project.title} 
                title={project.title}
                className="lg:max-w-sm max-lg:w-full border object-cover rounded-md cursor-pointer" 
                onClick={() => onImageClick(project.image)} 
            />
        </div>
        <div className="w-full md:max-w-md ml-4 text-[15px]">
            <h1 className="text-2xl font-semibold hover:text-[#52ADC8] hover:underline max-md:my-2 md:mb-2">
                <a href={project.link} target="_blank" rel="noreferrer">
                    {project.title}
                </a>
                {project.frontendLink && (
                    <span className="ml-2 text-sm">
                    | <a href={project.frontendLink} target="_blank" rel="noreferrer" 
                        className="text-gray-600 hover:text-[#52ADC8]">Frontend</a>
                    </span>
                )}
                {project.backendLink && (
                    <span className="ml-2 text-sm">
                    | <a href={project.backendLink} target="_blank" rel="noreferrer" 
                        className="text-gray-600 hover:text-[#52ADC8]">Backend</a>
                    </span>
                )}
            </h1>
            <div className="space-x-2">
                {project.technologies.map((tech, techIndex) => (
                    <span key={techIndex} className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm cursor-pointer">
                        {tech}
                    </span>
                ))}
            </div>
            <p className="text-md mt-2 max-md:w-full max-md:pr-8">{project.description}</p>
            {project.demoVideo && (
                <a href={project.demoVideo} target="_blank" rel="noreferrer" 
                    className="block w-32 text-center px-4 py-2 bg-black text-white font-semibold rounded hover:bg-[#52ADC8] mt-4 cursor-pointer"
                >
                    테스트 영상
                </a>
            )}
        </div>
    </AnimatedContainer>
);

export default function Project() {
    useDocTitle("주요 프로젝트 | 안녕하세요. 강다윤입니다");

    const showItems = useAnimation();
    const { isOpen, openLightbox, closeLightbox, currentIndex } = useLightBox();
    const projectsData = useMemo(() => PROJECTS_DATA, []);

    const handleImageClick = (image) => {
        const index = projectsData.findIndex(p => p.image === image);
        openLightbox(index);
    };

    return (
        <>
            <AnimatedContainer show={showItems}>
                <h1 className="text-3xl font-bold my-4">주요 프로젝트</h1>
            </AnimatedContainer>

            <div className="max-w-3xl space-y-8 mt-5">
                {projectsData.map((project, index) => (
                    <ProjectCard 
                        key={index}
                        project={project}
                        index={index}
                        show={showItems}
                        onImageClick={handleImageClick}
                    />
                ))}
            </div>

            <LightBox
                isOpen={isOpen}
                currentImage={projectsData[currentIndex]?.image}
                onClose={closeLightbox}
            />
        </>
    );
}