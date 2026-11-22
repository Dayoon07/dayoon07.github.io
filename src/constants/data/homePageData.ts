import type { SimpleProjectLinks } from "../../entities/home/SimpleProjectLinks";
import type { Recentinterests } from "../../entities/home/Recentinterests";

/**
 * 홈페이지 데이터 (언어와 무관한 값만)
 * - 소개글·제목·내용은 i18n/locales/ko.ts, en.ts 의 home 에 있다
 */
export const RECENT_INTERESTS: Recentinterests[] = [
    { id: "desktop", date: "2025-07-06" },
    { id: "devops", date: "2025-07-06" }
];

export const PROJECT_LINKS: SimpleProjectLinks[] = [
    {
        id: "limeet",
        url: "https://limeet-app.onrender.com",
        repo: "https://github.com/Dayoon07/limeet-app",
        note: "(limeet-app)"
    },
    {
        id: "weather",
        url: "https://dayoon07.github.io/weather-service",
        repo: "https://github.com/Dayoon07/weather-service",
        note: "(weather-service)"
    },
    {
        id: "webcam",
        url: "https://dayoon07.github.io/webcam",
        repo: "https://github.com/Dayoon07/webcam",
        note: "(webcam)"
    },
    {
        id: "school",
        url: "https://Dayoon07.github.io/school-search",
        repo: "https://github.com/Dayoon07/school-search",
        note: "(school-search)"
    }
];
