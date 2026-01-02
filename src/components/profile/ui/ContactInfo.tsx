import React from "react";
import { 
    UpgradedEducationIcon, 
    UpgradedEmailIcon, 
    UpgradedGitHubIcon, 
    UpgradedLocationIcon
} from "../../../constants/icon";

const CONTACT_ITEMS = [
    { icon: <UpgradedLocationIcon className="text-[rgb(73,78,82)]" />, content: "경기도 안양시" },
    { icon: <UpgradedEducationIcon className="text-[rgb(73,78,82)]" />, content: "근명고등학교" },
    {
        icon: <UpgradedEmailIcon className="text-[rgb(73,78,82)]" />,
        content: (
            <a href="mailto:gangd0642@gmail.com" 
                className="hover:underline" 
                rel="noreferrer" 
                aria-label="이메일 보내기">
                gangd0642@gmail.com
            </a>
        )
    },
    {
        icon: <UpgradedGitHubIcon className="text-[rgb(73,78,82)]" />,
        content: (
            <a href="https://github.com/dayoon07" 
                target="_blank" 
                className="hover:underline" 
                rel="noreferrer" 
                aria-label="GitHub 프로필 보기">
                dayoon07
            </a>
        )
    }
];

/** 연락처 정보 컴포넌트 */
export const ContactInfo: React.FC = () => {
    return (
        <div className="space-y-2">
            {CONTACT_ITEMS.map((item, index) => (
                <div key={index} className="flex items-center space-x-2">
                    {item.icon}
                    <span style={{ fontSize: "14px", color: "rgb(73, 78, 82)" }}>{item.content}</span>
                </div>
            ))}
        </div>
    );
};
