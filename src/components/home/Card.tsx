import React from "react";
import { useTranslation } from "react-i18next";
import type { Recentinterests } from "../../entities/home/Recentinterests";
import type { SimpleProjectLinks } from "../../entities/home/SimpleProjectLinks";

/** "2025-07-06" → ko: 2025년 7월 6일 / en: July 6, 2025 */
const formatDate = (iso: string, lng: string) => {
    const [y, m, d] = iso.split("-").map(Number);
    return new Intl.DateTimeFormat(lng, { year: "numeric", month: "long", day: "numeric" })
        .format(new Date(y, m - 1, d));
};

/** 프로젝트 카드 컴포넌트 */
export const SimpleProjectCard: React.FC<{ project: SimpleProjectLinks }> = ({ project }) => {
    const { t } = useTranslation();

    return (
        <div className="dark:bg-gray-800 rounded-xl shadow hover:shadow-lg transition p-4 border hover:border-[#52ADC8]">
            <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:underline">
                <a href={project.repo} target="_blank" rel="noopener noreferrer">
                    {t(`home.links.${project.id}`)}
                </a>
            </h3>
            {project.note && ( <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.note}</p> )}
            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm hover:underline">
                <a href={project.url} target="_blank" rel="noopener noreferrer">
                    {project.url}
                </a>
            </p>
        </div>
    );
};

/** 관심사 카드 컴포넌트 */
export const InterestCard: React.FC<{ interest: Recentinterests }> = ({ interest }) => {
    const { t, i18n } = useTranslation();

    return (
        <div className="bg-white p-4 rounded-lg shadow-lg hover:shadow-lg transition-shadow duration-300">
            <div className="flex items-center mb-2">
                <h3 className="text-lg font-semibold text-gray-800">{t(`home.interests.${interest.id}.title`)}</h3>
            </div>
            <p className="text-gray-600">{t(`home.interests.${interest.id}.content`)}</p>
            <p className="text-gray-400 mt-4 text-right">
                <time dateTime={interest.date}>{formatDate(interest.date, i18n.resolvedLanguage ?? "ko")}</time>
            </p>
        </div>
    );
};
