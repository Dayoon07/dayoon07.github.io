import React from "react";

/*
 * 세로 타임라인 레이아웃
 *  - 왼쪽에 이어지는 세로선 하나
 *  - 섹션 제목은 선 위의 원형 아이콘
 *  - 항목은 선 위의 점 + [기간 | 제목/부제/설명]
 */

const LINE_X = "left-[15px]";   // 아이콘(32px) 중심과 세로선 정렬

/** 타임라인 전체 컨테이너 (세로선 포함) */
export const Timeline: React.FC<{ children: React.ReactNode }> = ({ children }) => (
    <div className="relative">
        <div className={`absolute ${LINE_X} top-4 bottom-0 w-0.5 bg-slate-300`} aria-hidden="true" />
        <div className="space-y-10">{children}</div>
    </div>
);

/** 섹션 (원형 아이콘 + 제목) */
export const TimelineSection: React.FC<{
    title: string;
    icon: React.ReactNode;
    children: React.ReactNode;
}> = ({ title, icon, children }) => (
    <section>
        <div className="relative flex items-center gap-4 mb-5">
            <span className="relative z-10 flex items-center justify-center w-8 h-8 rounded-full bg-slate-700 text-white ring-4 ring-white">
                {icon}
            </span>
            <h2 className="text-xl font-bold tracking-wide text-slate-800">{title}</h2>
        </div>
        <ol className="space-y-6">{children}</ol>
    </section>
);

/** 항목 (점 + 기간 + 내용) */
export const TimelineItem: React.FC<{
    date: string;
    title: string;
    subtitle?: string;
    children?: React.ReactNode;
}> = ({ date, title, subtitle, children }) => (
    <li className="relative pl-12">
        <span
            className="absolute left-[11px] top-[7px] w-2.5 h-2.5 rounded-full bg-slate-700 ring-4 ring-white"
            aria-hidden="true"
        />
        <div className="sm:flex sm:gap-6">
            <time className="block shrink-0 sm:w-52 sm:whitespace-nowrap text-sm font-mono text-gray-500 leading-6">{date}</time>
            <div className="min-w-0 flex-1">
                <h3 className="text-base font-semibold text-gray-900 leading-6">{title}</h3>
                {subtitle && <p className="text-sm text-gray-500">{subtitle}</p>}
                {children && <div className="mt-2 text-sm text-gray-600 leading-relaxed">{children}</div>}
            </div>
        </div>
    </li>
);
