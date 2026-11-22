import React from "react";
import { useTranslation } from "react-i18next";
import { tList } from "../../../i18n/tList";
import type { ErdItem } from "../../../constants/data/architectureData";
import { PROJECTS_DATA } from "../../../constants/data/projectData";

interface ArchitectureCardProps {
    item: ErdItem;
    onImageClick: () => void;
}

/** ERD 한 줄: 썸네일(클릭 시 라이트박스) + 설명 */
export const ArchitectureCard: React.FC<ArchitectureCardProps> = ({ item, onImageClick }) => {
    const { t } = useTranslation();
    const base = `architecture.items.${item.id}`;
    const title = t(`${base}.title`);
    const points = tList(t, `${base}.points`);
    const repo = item.project ? PROJECTS_DATA.find((p) => p.title === item.project)?.link : undefined;

    return (
        <article className="md:flex md:gap-6 py-6 border-b border-gray-200 last:border-0">
            <button
                type="button"
                onClick={onImageClick}
                aria-label={t("architecture.viewLargerOf", { name: title })}
                className="group relative block w-full md:w-72 shrink-0 aspect-[4/3] overflow-hidden rounded-md border border-gray-200 bg-white"
            >
                <img src={item.img} alt={t("architecture.erdAlt", { name: title })} loading="lazy"
                    className="w-full h-full object-cover object-left-top transition-transform duration-300 group-hover:scale-105"
                />
                <span className="absolute inset-0 flex items-center justify-center bg-black/0 text-sm font-medium text-white opacity-0 transition group-hover:bg-black/40 group-hover:opacity-100">
                    {t("common.viewLarger")}
                </span>
            </button>

            <div className="mt-4 md:mt-0 min-w-0 flex-1">
                <h2 className="text-xl font-bold text-gray-900">{title}</h2>
                <p className="mt-1 text-sm text-gray-500 flex flex-wrap gap-x-2">
                    <span>{item.tool}</span>
                    {item.project && (
                        <>
                            <span aria-hidden="true">·</span>
                            {repo ? (
                                <a href={repo} target="_blank" rel="noreferrer" className="hover:text-[#52ADC8] hover:underline">
                                    {item.project}
                                </a>
                            ) : <span>{item.project}</span>}
                        </>
                    )}
                </p>

                <p className="mt-3 text-gray-700 leading-relaxed">{t(`${base}.description`)}</p>

                {points.length > 0 && (
                    <ul className="mt-3 list-disc pl-5 space-y-1 text-sm text-gray-700">
                        {points.map((p) => <li key={p}>{p}</li>)}
                    </ul>
                )}

                {item.link && (
                    <a href={item.link} target="_blank" rel="noreferrer"
                        className="inline-block mt-3 text-sm text-[#2b7f99] hover:underline">
                        {t(`${base}.linkLabel`)} →
                    </a>
                )}
            </div>
        </article>
    );
};
