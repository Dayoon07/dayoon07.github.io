/**
 * 프로젝트 데이터 (언어와 무관한 값만)
 * - 설명·담당·highlights 는 i18n/locales 의 project.items.<title> 에 있다
 */
export interface ProjectDataType {
    /** 저장소 이름. 번역 키로도 쓴다 */
    title: string;
    link: string;
    image: string;
    feLink?: string | null;
    beLink?: string | null;
    /** 실제 사용한 기술만 (개념·설계 방식은 넣지 않음) */
    tech: string[];
    demoVideo?: string | null;
    /** 개발 기간 (예: "2025.03.12 ~ 2025.03.16") */
    period?: string;
    team?: "solo" | "team";
}
