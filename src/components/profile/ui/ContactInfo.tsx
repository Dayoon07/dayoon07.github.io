import React from "react";
import { useTranslation } from "react-i18next";
import { 
    UpgradedEducationIcon, 
    UpgradedEmailIcon, 
    UpgradedGitHubIcon, 
    UpgradedLocationIcon
} from "../../../constants/icon";

const ICON_CLASS = "text-[rgb(73,78,82)]";

/** 연락처 정보 컴포넌트 */
export const ContactInfo: React.FC = () => {
    const { t } = useTranslation();

    const items = [
        { key: "location", icon: <UpgradedLocationIcon className={ICON_CLASS} />, content: t("profile.location") },
        { key: "school", icon: <UpgradedEducationIcon className={ICON_CLASS} />, content: t("profile.school") },
        {
            key: "email",
            icon: <UpgradedEmailIcon className={ICON_CLASS} />,
            content: (
                <a href="mailto:gangd0642@gmail.com" 
                    className="hover:underline" 
                    rel="noreferrer" 
                    aria-label={t("profile.emailLabel")}>
                    gangd0642@gmail.com
                </a>
            )
        },
        {
            key: "github",
            icon: <UpgradedGitHubIcon className={ICON_CLASS} />,
            content: (
                <a href="https://github.com/dayoon07" 
                    target="_blank" 
                    className="hover:underline" 
                    rel="noreferrer" 
                    aria-label={t("profile.githubLabel")}>
                    dayoon07
                </a>
            )
        }
    ];

    return (
        <div className="space-y-2">
            {items.map((item) => (
                <div key={item.key} className="flex items-center space-x-2">
                    {item.icon}
                    <span style={{ fontSize: "14px", color: "rgb(73, 78, 82)" }}>{item.content}</span>
                </div>
            ))}
        </div>
    );
};
