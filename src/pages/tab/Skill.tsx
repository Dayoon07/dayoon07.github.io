import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';
import { useDocTitle } from '../../hooks/useDocTitle';
import { SKILL_GROUPS, SKILL_ICONS } from '../../constants/data/skillData';

/** 로고 + 이름. 로고가 없거나 로딩 실패 시 첫 글자 아이콘 */
const SkillName: React.FC<{ name: string }> = ({ name }) => {
    const [failed, setFailed] = useState(false);
    const src = SKILL_ICONS[name];

    return (
        <span className="inline-flex items-center gap-1.5 whitespace-nowrap">
            {src && !failed ? (
                <img src={src} alt="" aria-hidden="true" loading="lazy"
                    className="w-[18px] h-[18px] object-contain"
                    onError={() => setFailed(true)}
                />
            ) : (
                <span aria-hidden="true"
                    className="w-[18px] h-[18px] rounded bg-gray-200 text-gray-600 text-[10px] font-bold flex items-center justify-center">
                    {name.charAt(0)}
                </span>
            )}
            {name}
        </span>
    );
};

export default function Skill() {
    const { t } = useTranslation();
    useDocTitle(`${t("skill.title")} | ${t("common.siteName")}`);

    return (
        <div className="max-w-3xl md:px-2 pb-10">
            <h1 className="text-3xl font-bold my-4">{t("skill.title")}</h1>

            <div className="space-y-8">
                {SKILL_GROUPS.map((group) => (
                    <section key={group.category} className="sm:flex sm:gap-8">
                        <h2 className="shrink-0 sm:w-36 text-xl font-bold text-gray-800 mb-2 sm:mb-0">
                            {group.category}
                        </h2>
                        <ul className="space-y-1.5 text-gray-700">
                            {group.lines.map((line) => (
                                <li key={line.join()} className="flex gap-3">
                                    <span aria-hidden="true" className="shrink-0 mt-[10px] w-1.5 h-1.5 rounded-full bg-gray-700" />
                                    <span className="flex flex-wrap gap-x-4 gap-y-1">
                                        {line.map((name) => <SkillName key={name} name={name} />)}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </section>
                ))}
            </div>
        </div>
    );
}
