import React from "react";
import { WorkItem } from "../../../entities/tab/ExperienceType";

/** 업무 목록 (CV 경력 타임라인) */
export const WorkList: React.FC<{ works: WorkItem[]; showDetails?: boolean }> = ({ works, showDetails = false }) => (
    <ul className="space-y-3">
        {works.map((work) => (
            <li key={work.title} className="border-l-2 border-[#52ADC8] pl-3">
                <span className="font-medium text-gray-800 text-base">{work.title}</span>
                <p className="mt-0.5 text-sm text-gray-600 leading-relaxed">{work.summary}</p>
                {showDetails && work.details && work.details.length > 0 && (
                    <ul className="mt-1 list-disc list-inside text-sm text-gray-600">
                        {work.details.map((d) => <li key={d}>{d}</li>)}
                    </ul>
                )}
            </li>
        ))}
    </ul>
);
