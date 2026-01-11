import { ProjectDataType } from "../../entities/tab/ProjectDataType";

/** 프로젝트 데이터 상수 */
export const PROJECTS_DATA: ProjectDataType[] = [
    {
        title: "shortform",
        link: "https://github.com/Dayoon07/shortform",
        image: "https://dayoon07.github.io/img/shortform-v2.png",
        feLink: null,
        beLink: null,
        tech: ['FSD', 'JWT', 'Redis', 'Google OAuth 2.0'],
        description: `숏폼을 구현한 프로젝트입니다. Thymeleaf 템플릿을 사용해 뷰를 구성했습니다. 주요 기능으로는 팔로우, 영상 스와이프, 커뮤니티 (게시글), 댓글 & 답글 기능 등이 있습니다.`,
        demoVideo: null
    },
    {
        title: "movie-ticket",
        link: "https://github.com/Dayoon07/react-movie-ticket-ui",
        image: "https://dayoon07.github.io/img/movie-ticket.png",
        feLink: "https://github.com/Dayoon07/react-movie-ticket-ui",
        beLink: "https://github.com/Dayoon07/springboot-movie-ticket",
        tech: ['React', 'Spring AI', 'Rest API', 'Ollama'],
        description: `CGV 영화 예매 키오스크를 웹으로 포팅한 프로젝트입니다. 프론트엔드는 React 기반의 SPA 프레임워크로 구현되었고, 백엔드는 Spring Boot 기반 REST API 서버로 분리되어 있습니다.`,
        demoVideo: "https://dayoon07.github.io/video/movie-ticket-test.mp4"
    },
    {
        title: "mycloud-project",
        link: "https://github.com/Dayoon07/mycloud-project",
        image: "https://dayoon07.github.io/static-page-test/img/mycloud.png",
        feLink: null,
        beLink: null,
        tech: ['Spring Boot', 'Spring Security', 'File I/O', 'Rest API'],
        description: `클라우드를 일부분 구현한 프로젝트입니다. 메일 기능, 엑세스 키 기능을 활용해 다른 사람에게 나의 파일을 공유할 수 있습니다.`,
        demoVideo: 'https://dayoon07.github.io/video/mycloud-test.mp4'
    },
    {
        title: 'springboot-video-platform',
        link: 'https://github.com/Dayoon07/springboot-video-platform',
        image: 'https://Dayoon07.github.io/static-page-test/img/whynot_메인페이지.png',
        feLink: null,
        beLink: null,
        tech: ['Rest API', 'MyBatis', 'Spring Boot', 'JPA'],
        description: `springboot-video-platform은 Spring Boot를 기반으로 한 동영상 플랫폼입니다. 업로드, 좋아요, 구독, 시청 기록, 영상 분석 기능이 포함되어 있습니다.`,
        demoVideo: 'https://dayoon07.github.io/video/video-platform.mp4'
    },
    {
        title: 'springboot-blog',
        link: 'https://github.com/Dayoon07/springboot-blog',
        image: 'https://Dayoon07.github.io/img/springbootblog.png',
        feLink: null,
        beLink: null,
        tech: ['Spring Boot', 'JPA', 'JSP', 'Oracle'],
        description: `블로그 플랫폼으로 게시물 작성, 수정, 삭제, 댓글, 좋아요 기능이 있으며 Spring Boot와 JPA를 사용했습니다.`,
        demoVideo: 'https://Dayoon07.github.io/video/springboot-blog-test.mp4'
    },
    {
        title: 'kmcreativeschool',
        link: 'https://github.com/Dayoon07/kmcreativeschool',
        image: 'https://Dayoon07.github.io/img/creativeProject.png',
        feLink: null,
        beLink: null,
        tech: ['Spring', 'Spring Security', 'MyBatis', 'SMTP'],
        description: `Spring과 MyBatis를 활용한 학교 폭력 신고 웹입니다. 신고 내용은 SMTP를 통해 전송되며 내역 조회가 가능합니다.`,
        demoVideo: null
    }
];