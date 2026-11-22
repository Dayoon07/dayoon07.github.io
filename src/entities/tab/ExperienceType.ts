/** 화면에 그릴 때 쓰는 업무 항목 (번역이 적용된 값) */
export interface WorkItem {
    title: string;
    summary: string;
    details?: string[];
}

/**
 * 경력 데이터 (언어와 무관한 값만)
 * - 회사명·직무·업무 문장은 i18n/locales 의 cv.experience.<id> 에 있다
 */
export interface Experience {
    id: string;
    /** 입사일 (예: "2025.12.11") */
    start: string;
    /** 퇴사일. 없으면 "현재" */
    end?: string;
    /** cv.experience.<id>.works 의 키 순서 */
    works: string[];
}
