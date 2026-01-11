import { SimpleProjectLinks } from "../../entities/home/SimpleProjectLinks";
import { Recentinterests } from "../../entities/home/Recentinterests";

// 홈페이지 데이터 상수
export const RECENT_INTERESTS: Recentinterests[] = [
    {
        title: "데스크탑 애플리케이션",
        content: `
            C# 언어와 WPF (Windows Presentation Foundation) 
            프레임워크로 GUI 프로그래밍을 학습 중입니다.
        `,
        creationDate: "2025년 07월 06일"
    },
    {
        title: "DevOps 공부",
        content: `
            Github Actions를 활용한 CI/CD 파이프라인 구축을 학습 중입니다.
            워크플로를 작성해 지속적으로 빌드, 배포를 연구 중입니다.
        `,
        creationDate: "2025년 07월 06일"
    }
];

export const PROJECT_LINKS: SimpleProjectLinks[] = [
    {
        name: "Limeet (PWA)",
        url: "https://limeet-app.onrender.com",
        repo: "https://github.com/Dayoon07/limeet-app",
        note: "(limeet-app)"
    },
    {
        name: "날씨 API 키 활용 서비스",
        url: "https://dayoon07.github.io/weather-service",
        repo: "https://github.com/Dayoon07/weather-service",
        note: "(weather-service)"
    },
    {
        name: "모바일 웹 캠 애플리케이션",
        url: "https://dayoon07.github.io/webcam",
        repo: "https://github.com/Dayoon07/webcam",
        note: "(webcam)"
    },
    {
        name: "학교 정보 검색",
        url: "https://Dayoon07.github.io/school-search",
        repo: "https://github.com/Dayoon07/school-search",
        note: "(school-search)"
    }
];

export const MAIN_INTRO_TEXT = {
    V1: `문제 해결과 협업을 통해 함께 성장하는 개발자가 되고 싶은 강다윤입니다. 
        프론트엔드와 백엔드 프로젝트를 진행하며 다양한 경험을 쌓았고, 개발 과정에서
        마주한 문제를 단순히 넘기지 않고 원인을 깊이 분석하고 해결하는 
        데에서 보람을 느꼈습니다. 팀 프로젝트를 통해 협업의 중요성을 실감했는데, 
        특히 의견 충돌이 있었던 상황에서 서로의 생각을 조율하며 더 나은 결과를 
        만들어낸 경험이 기억에 남습니다. 그 과정에서 협업은 단순히 역할을 나누는 
        것을 넘어, 서로에게 배우고 성장하는 과정이라는 걸 깨달았습니다. 
        언젠가는 DB 분야로 진출하고 싶으며, 앞으로도 모르는 것을 배우며 
        끊임없이 성장할 수 있는 모습을 보여드리겠습니다.`,
    V2: `
        문제 해결과 협업으로 소통하며 성장하는 강다윤입니다.
        POS/KISOK 프로그램 개발 및 ASP, MIS 서버 개발을 하고 있으며 
        상업용 소프트웨어를 만들고 있습니다. 
    `
}