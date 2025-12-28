import React from "react";

interface CvSectionProps {
    title: string;
    items: string[]
}

/** CV 섹션 컴포넌트 */
export const CvSection: React.FC<CvSectionProps> = ({
    title, items
}) => (
    <div className="mb-6">
        <h2 className="text-xl font-semibold mt-6 mb-2">{title}</h2>
        <ul className="list-disc list-inside">
            {items.map((item, index) => (
                <li key={index} dangerouslySetInnerHTML={{ __html: item }} />
            ))}
        </ul>
    </div>
);