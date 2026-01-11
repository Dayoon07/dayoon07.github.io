import React from "react";
import { ProjectDataType } from "../../../entities/tab/ProjectDataType";
import AnimatedContainer from "../../common/AnimatedContainer";

interface ProjectCardProps {
    project: ProjectDataType,
    index: number,
    show: boolean,
    onImageClick: (image: string) => void
}

/** 프로젝트 카드 컴포넌트 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
    project, index, show, onImageClick
}) => (
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
                {project.feLink && (
                    <span className="ml-2 text-sm">
                    | <a href={project.feLink} target="_blank" rel="noreferrer" 
                        className="text-gray-600 hover:text-[#52ADC8]">Frontend</a>
                    </span>
                )}
                {project.beLink && (
                    <span className="ml-2 text-sm">
                    | <a href={project.beLink} target="_blank" rel="noreferrer" 
                        className="text-gray-600 hover:text-[#52ADC8]">Backend</a>
                    </span>
                )}
            </h1>
            <div className="space-x-2">
                {project.tech.map((tech, techIndex) => (
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