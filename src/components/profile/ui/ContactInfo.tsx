import React from "react";
import { 
    EducationIcon, 
    EmailIcon, 
    GitHubIcon, 
    LocationIcon
} from "../../../constants/icon";

const CONTACT_ITEMS = [
    { icon: <LocationIcon />, content: "경기도 안양시" },
    { icon: <EducationIcon />, content: "근명고등학교" },
    {
        icon: <EmailIcon />,
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
        icon: <GitHubIcon />,
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
                    <span>{item.content}</span>
                </div>
            ))}
        </div>
    );
};
