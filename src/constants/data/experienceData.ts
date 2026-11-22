import type { Experience } from "../../entities/tab/ExperienceType";

/**
 * 경력 데이터
 * - 문장(회사명, 직무, 업무 설명)은 i18n/locales/ko.ts, en.ts 의 cv.experience 에 있다
 * - 고객사명, 협력 업체명, 도입처, 서비스 운영 상태, 내부 구조·수치는 적지 않는다
 * - details 에는 "직접 한 일"만 추가한다
 */
export const EXPERIENCES: Experience[] = [
    {
        id: "imtsoft",
        start: "2025.12.11",
        works: ["esl", "signage", "asp"]
    }
];
