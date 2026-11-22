import type { ProjectDataType } from "../../entities/tab/ProjectDataType";

/**
 * 프로젝트 데이터
 * - tech: 각 저장소의 빌드 파일(build.gradle, package.json) 기준
 * - period / team: 2025.05 포트폴리오 PPT 기준. 모르는 값은 비워두면 표시되지 않음
 * - 설명·담당·highlights 는 i18n/locales/ko.ts, en.ts 의 project.items.<title> 에 있다
 */
export const PROJECTS_DATA: ProjectDataType[] = [
    {
        title: "shortform",
        link: "https://github.com/Dayoon07/shortform-monorepo",
        image: "https://dayoon07.github.io/img/shortform-v2.png",
        feLink: null,
        beLink: null,
        tech: ["Kotlin", "Spring Boot", "JPA", "MyBatis", "Redis", "JWT", "OAuth 2.0", "WebSocket", "React", "TypeScript"],
        demoVideo: null
    },
    {
        title: "movie-ticket",
        link: "https://github.com/Dayoon07/react-movie-ticket-ui",
        image: "https://dayoon07.github.io/img/movie-ticket.png",
        feLink: "https://github.com/Dayoon07/react-movie-ticket-ui",
        beLink: "https://github.com/Dayoon07/springboot-movie-ticket",
        tech: ["React", "Java", "Spring Boot", "Spring AI", "Ollama", "MyBatis", "Oracle"],
        demoVideo: "https://dayoon07.github.io/video/movie-ticket-test.mp4"
    },
    {
        title: "mycloud-project",
        link: "https://github.com/Dayoon07/mycloud-project",
        image: "https://dayoon07.github.io/static-page-test/img/mycloud.png",
        feLink: null,
        beLink: null,
        tech: ["Java", "Spring Boot", "Spring Security", "MyBatis", "Oracle", "JSP"],
        demoVideo: "https://dayoon07.github.io/video/mycloud-test.mp4",
        period: "2025.03.12 ~ 2025.03.16",
        team: "solo"
    },
    {
        title: "springboot-video-platform",
        link: "https://github.com/Dayoon07/springboot-video-platform",
        image: "https://Dayoon07.github.io/static-page-test/img/whynot_메인페이지.png",
        feLink: null,
        beLink: null,
        tech: ["Java", "Spring Boot", "JPA", "MyBatis", "Oracle", "JSP"],
        demoVideo: "https://dayoon07.github.io/video/video-platform.mp4",
        period: "2024.12.25 ~ 2025.03.09",
        team: "solo"
    },
    {
        title: "springboot-blog",
        link: "https://github.com/Dayoon07/springboot-blog",
        image: "https://Dayoon07.github.io/img/springbootblog.png",
        feLink: null,
        beLink: null,
        tech: ["Java", "Spring Boot", "JPA", "Oracle", "JSP"],
        demoVideo: "https://Dayoon07.github.io/video/springboot-blog-test.mp4"
    },
    {
        title: "kmcreativeschool",
        link: "https://github.com/Dayoon07/kmcreativeschool",
        image: "https://Dayoon07.github.io/img/creativeProject.png",
        feLink: null,
        beLink: null,
        tech: ["Java", "Spring", "Spring Security", "MyBatis", "Oracle", "JSP", "SMTP"],
        demoVideo: null,
        period: "2024.10 ~ 2024.11",
        team: "team"
    }
];
