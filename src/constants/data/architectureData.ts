// SQL Developer Data Modeler 로 만든 ERD
// 방법: 테이블 드래그 → 파일 → Data Modeler → Import → Data Dictionary

/**
 * ERD 데이터 (언어와 무관한 값만)
 * - 제목·설명·설계 포인트·링크 문구는 i18n/locales 의 architecture.items.<id> 에 있다
 */
export interface ErdItem {
    id: string;
    img: string;
    /** 설계 도구 */
    tool: string;
    /** projectData.ts 의 title → GitHub 링크 */
    project?: string;
    /** 추가 링크 (문구는 architecture.items.<id>.linkLabel) */
    link?: string;
}

export const ARCHITECTURE_DATA: ErdItem[] = [
    {
        id: "shortform",
        img: "/img/architecture/shortform-erd-v2.png",
        tool: "ERD Cloud",
        project: "shortform",
        link: "/text/shortform-erd-v2.txt"
    },
    {
        id: "movieTicket",
        img: "/img/architecture/movie-ticket-erd.png",
        tool: "dbdiagram.io",
        project: "movie-ticket"
    },
    {
        id: "mycloud",
        img: "/img/architecture/mycloud-erd.png",
        tool: "SQL Developer Data Modeler",
        project: "mycloud-project"
    },
    {
        id: "videoPlatform",
        img: "/img/architecture/video-platform-erd.png",
        tool: "SQL Developer Data Modeler",
        project: "springboot-video-platform"
    },
    {
        id: "blog",
        img: "/img/architecture/springbootblogerd.png",
        tool: "SQL Developer Data Modeler",
        project: "springboot-blog"
    },
    {
        id: "creativeSchool",
        img: "/img/architecture/creativeProjectERD.png",
        tool: "SQL Developer Data Modeler",
        project: "kmcreativeschool"
    }
];
