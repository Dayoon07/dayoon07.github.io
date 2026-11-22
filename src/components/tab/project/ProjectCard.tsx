import React from "react";
import { useTranslation } from "react-i18next";
import { tList } from "../../../i18n/tList";
import type { ProjectDataType } from "../../../entities/tab/ProjectDataType";
import AnimatedContainer from "../../common/AnimatedContainer";

interface ProjectCardProps {
    project: ProjectDataType,
    index: number,
    show: boolean,
    onImageClick: (image: string) => void
}

const SUB_LINK = "text-sm font-normal text-gray-500 hover:text-[#52ADC8] hover:underline";

/** 프로젝트 한 줄: 썸네일(클릭 시 라이트박스) + 설명 */
export const ProjectCard: React.FC<ProjectCardProps> = ({
    project, index, show, onImageClick
}) => {
    const { t, i18n } = useTranslation();
    const base = `project.items.${project.title}`;
    const role = i18n.exists(`${base}.role`) ? t(`${base}.role`) : null;
    const highlights = tList(t, `${base}.highlights`);
    const meta = [project.period, project.team && t(`project.team.${project.team}`)].filter(Boolean).join(" · ");

    return (
        <AnimatedContainer show={show} delay={index * 150}
            className="md:flex md:gap-6 py-6 border-b border-gray-200 last:border-0"
        >
            <button
                type="button"
                onClick={() => onImageClick(project.image)}
                aria-label={t("common.viewLargerOf", { name: project.title })}
                className="group relative block w-full md:w-72 shrink-0 self-start aspect-video overflow-hidden rounded-md border border-gray-200 bg-gray-50"
            >
                <img src={project.image} alt={project.title} loading="lazy"
                    className="w-full h-full object-contain transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-sm font-medium text-white opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100">
                    {t("common.viewLarger")}
                </span>
            </button>

            <div className="mt-4 md:mt-0 min-w-0 flex-1 text-[15px]">
                <h2 className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
                    <a href={project.link} target="_blank" rel="noreferrer"
                        className="text-2xl font-semibold text-gray-900 hover:text-[#52ADC8] hover:underline">
                        {project.title}
                    </a>
                    {project.feLink && <a href={project.feLink} target="_blank" rel="noreferrer" className={SUB_LINK}>Frontend</a>}
                    {project.beLink && <a href={project.beLink} target="_blank" rel="noreferrer" className={SUB_LINK}>Backend</a>}
                </h2>

                {meta && <p className="mt-1 text-sm font-mono text-gray-500">{meta}</p>}

                <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tech.map((tech) => (
                        <span key={tech} className="whitespace-nowrap px-2 py-0.5 bg-gray-200 text-gray-700 rounded text-sm">
                            {tech}
                        </span>
                    ))}
                </div>

                <p className="mt-3 text-gray-700 leading-relaxed">{t(`${base}.description`)}</p>

                {role && (
                    <p className="mt-2 text-sm text-gray-700">
                        <span className="font-semibold">{t("project.role")}</span> · {role}
                    </p>
                )}

                {highlights.length > 0 && (
                    <ul className="mt-2 list-disc pl-5 space-y-1 text-sm text-gray-700">
                        {highlights.map((h) => <li key={h}>{h}</li>)}
                    </ul>
                )}

                {project.demoVideo && (
                    <a href={project.demoVideo} target="_blank" rel="noreferrer"
                        className="inline-block mt-4 px-4 py-2 bg-black text-white text-sm font-semibold rounded hover:bg-[#52ADC8]"
                    >
                        {t("project.demoVideo")}
                    </a>
                )}
            </div>
        </AnimatedContainer>
    );
};
