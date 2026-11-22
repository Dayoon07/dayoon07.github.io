/**
 * 한국어 번역 (기준 언어)
 * - 화면에 보이는 문장은 여기와 en.ts 에 같은 키로 넣는다
 * - 링크·이미지·날짜·기술 이름 같은 언어와 무관한 값은 constants/data 에 둔다
 * - 경력: 고객사명, 협력 업체명, 도입처, 서비스 운영 상태, 내부 구조·수치는 적지 않는다
 */
const ko = {
    common: {
        siteName: "안녕하세요. 강다윤입니다",
        viewLarger: "크게 보기",
        viewLargerOf: "{{name}} 이미지 크게 보기",
        language: "언어 선택"
    },

    profile: {
        region: "프로필 정보",
        name: "강다윤",
        nameAlt: "(Dayoon Kang)",
        photoAlt: "프로필 사진",
        toggle: "프로필 정보",
        toggleLabel: "프로필 정보 토글",
        detailTitle: "프로필 상세 정보",
        location: "경기도 안양시",
        school: "근명고등학교",
        emailLabel: "이메일 보내기",
        githubLabel: "GitHub 프로필 보기"
    },

    home: {
        heading: "안녕하십니까, 저는",
        intro: `문제 해결과 협업을 통해 함께 성장하는 개발자가 되고 싶은 강다윤입니다.
            프론트엔드와 백엔드 프로젝트를 진행하며 다양한 경험을 쌓았고, 개발 과정에서
            마주한 문제를 단순히 넘기지 않고 원인을 깊이 분석하고 해결하는
            데에서 보람을 느꼈습니다. 팀 프로젝트를 통해 협업의 중요성을 실감했는데,
            특히 의견 충돌이 있었던 상황에서 서로의 생각을 조율하며 더 나은 결과를
            만들어낸 경험이 기억에 남습니다. 그 과정에서 협업은 단순히 역할을 나누는
            것을 넘어, 서로에게 배우고 성장하는 과정이라는 걸 깨달았습니다.
            언젠가는 DB 분야로 진출하고 싶으며, 앞으로도 모르는 것을 배우며
            끊임없이 성장할 수 있는 모습을 보여드리겠습니다.`,
        simpleProjects: "간단한 프로젝트",
        news: "최근 소식",
        links: {
            limeet: "Limeet (PWA)",
            weather: "날씨 API 키 활용 서비스",
            webcam: "모바일 웹 캠 애플리케이션",
            school: "학교 정보 검색"
        },
        interests: {
            desktop: {
                title: "데스크탑 애플리케이션",
                content: "C# 언어와 WPF (Windows Presentation Foundation) 프레임워크로 GUI 프로그래밍을 학습 중입니다."
            },
            devops: {
                title: "DevOps 공부",
                content: `Github Actions를 활용한 CI/CD 파이프라인 구축을 학습 중입니다.
                    워크플로를 작성해 지속적으로 빌드, 배포를 연구 중입니다.`
            }
        }
    },

    skill: {
        title: "기술 스택"
    },

    project: {
        title: "주요 프로젝트",
        role: "담당",
        demoVideo: "테스트 영상",
        team: { solo: "개인", team: "팀" },
        /** 키 = projectData.ts 의 title. highlights: "직접 구현·해결한 것" 1~3줄 */
        items: {
            shortform: {
                description: `숏폼 영상 플랫폼입니다. Kotlin·Spring Boot 서버와 React·TypeScript 클라이언트를
                    하나의 모노레포로 구성했습니다. 팔로우, 영상 스와이프, 커뮤니티(게시글), 댓글·답글 기능이 있습니다.`,
                highlights: [] as string[]
            },
            "movie-ticket": {
                description: `영화관 예매 키오스크를 웹으로 옮긴 프로젝트입니다. 프론트엔드는 React SPA로,
                    백엔드는 Spring Boot REST API 서버로 분리했고 Spring AI와 Ollama로 영화 추천 기능을 붙였습니다.`,
                highlights: [] as string[]
            },
            "mycloud-project": {
                description: `파일 업로드와 공유 기능을 가진 클라우드 서비스입니다.
                    메일 기능과 액세스 키로 다른 사용자에게 파일을 공유할 수 있습니다.`,
                highlights: [] as string[]
            },
            "springboot-video-platform": {
                description: `모바일 웹 동영상 플랫폼입니다. 영상 업로드, 좋아요, 구독, 시청 기록, 태그,
                    영상 분석 기능이 있습니다.`,
                highlights: [] as string[]
            },
            "springboot-blog": {
                description: "블로그 플랫폼입니다. 게시물 작성·수정·삭제, 댓글, 좋아요 기능과 파일 업로드를 구현했습니다.",
                highlights: [] as string[]
            },
            kmcreativeschool: {
                description: `학교 폭력 신고 웹입니다. 신고 내용은 SMTP 메일로 전송되며,
                    신고자는 자신의 신고 내역을 조회할 수 있습니다.`,
                role: "문의 기능(CRUD), 경찰 계정 관리, 문의·경찰 테이블 설계",
                highlights: [] as string[]
            }
        }
    },

    architecture: {
        title: "DB 설계",
        erdAlt: "{{name}} ERD",
        viewLargerOf: "{{name}} ERD 크게 보기",
        /** 키 = architectureData.ts 의 id. points: 설계 포인트 (왜 이렇게 설계했는지) */
        items: {
            shortform: {
                title: "숏폼 플랫폼",
                description: `고등학교 3학년 1학기 여름방학부터 진행한 숏폼 플랫폼의 ERD입니다.
                    테이블이 많아 이미지에서 컬럼명이 잘 보이지 않아 전체 스키마를 텍스트로도 정리했습니다.`,
                linkLabel: "스키마 텍스트 보기",
                points: [] as string[]
            },
            movieTicket: {
                title: "영화 예매 키오스크",
                description: "미래유망분야 고졸인력 양성사업 3학년 프로젝트에서 설계한 영화 예매 서비스의 ERD입니다.",
                points: [] as string[]
            },
            mycloud: {
                title: "마이 클라우드",
                description: "파일 업로드와 공유 기능을 가진 클라우드 서비스의 ERD입니다. 약 이틀 동안 설계했습니다.",
                points: [] as string[]
            },
            videoPlatform: {
                title: "Whynot 동영상 플랫폼",
                description: "동영상 플랫폼의 ERD입니다. 약 3개월 동안 애플리케이션 개발과 병행하며 설계했습니다.",
                points: [] as string[]
            },
            blog: {
                title: "Spring Boot 블로그",
                description: `블로그 플랫폼의 ERD입니다. 약 1개월 동안 개발과 병행하며 설계했고,
                    기본 CRUD와 파일 I/O를 구현했습니다.`,
                points: [] as string[]
            },
            creativeSchool: {
                title: "경기 콘텐츠 창의학교 프로젝트",
                description: "경기 콘텐츠 창의학교 팀 프로젝트의 ERD입니다. 이 중 경찰서·문의하기 테이블 설계와 CRUD 구현을 맡았습니다.",
                points: [] as string[]
            }
        }
    },

    cv: {
        title: "경력 · 활동이력",
        present: "현재",
        sections: {
            work: "경력",
            education: "학력",
            certifications: "자격증",
            awards: "수상경력",
            clubs: "동아리 활동"
        },
        /** 키 = experienceData.ts 의 id / works. details 에는 "직접 한 일"만 */
        experience: {
            imtsoft: {
                company: "아이엠티소프트",
                role: "소프트웨어 개발자 · 정규직",
                works: {
                    esl: {
                        title: "ESL(전자가격표시기) 연동 서버",
                        summary: "AIMS의 UI 개선 버전 UI와 프록시 서버를 개발했습니다.",
                        details: [] as string[]
                    },
                    signage: {
                        title: "디지털 사이니지",
                        summary: "자체 개발 솔루션인 디지털 사이니지 서비스를 맡아 개발/운영 했습니다.",
                        details: [] as string[]
                    },
                    asp: {
                        title: "ASP 서버 관리 · 시스템 운영",
                        summary: "ASP(Application Service Provider) 서버를 관리하고 서비스 시스템을 운영하고 있습니다.",
                        details: [] as string[]
                    }
                }
            }
        },
        /** 키 = cvData.ts 의 id. subtitle 은 없으면 생략 */
        items: {
            geunmyeongHigh: { title: "근명고등학교", subtitle: "졸업" },
            gwanyangMiddle: { title: "관양중학교", subtitle: "졸업" },
            gwanyangElementary: { title: "관양초등학교", subtitle: "졸업" },

            engineerInfoProcessing: { title: "정보처리산업기사", subtitle: "과정평가형" },
            craftsmanInfoProcessing: { title: "정보처리기능사" },
            craftsmanWebDesign: { title: "웹디자인기능사" },
            computerSpecialist2: { title: "컴퓨터활용능력 2급" },
            gtqPhotoshop2: { title: "GTQ 포토샵 2급" },

            skillsAward: { title: "기능상 금상", subtitle: "1위" },
            algorithmContest: { title: "교내 알고리즘 경진대회 우수상", subtitle: "2위" },
            infographicContest: { title: "교내 인포그래픽 경진대회 우수상", subtitle: "3위" },
            spreadsheetContest: { title: "교내 스프레드시트 함수 경진대회 장려상", subtitle: "3위" },
            attendance2: { title: "개근상", subtitle: "2학년" },
            creativeSchoolContest: { title: "경기 콘텐츠 창의학교 경진대회", subtitle: "최우수상" },
            attendance1: { title: "개근상", subtitle: "1학년" },

            smartCodingClub: { title: "스마트코딩반 활동" },
            digitalContentClub: { title: "디지털 콘텐츠 제작반 활동" }
        }
    },

    portfolio: {
        title: "포트폴리오"
    },

    sitemap: {
        title: "사이트맵"
    },

    notFound: {
        titleLine1: "요청하신 페이지를",
        titleLine2: "찾을 수 없습니다.",
        home: "홈으로 돌아가기",
        sitemap: "사이트맵"
    },

    lightbox: {
        prev: "이전 이미지",
        next: "다음 이미지",
        close: "라이트박스 닫기",
        goTo: "{{n}}번째 이미지로 이동",
        fallbackAlt: "라이트박스 이미지"
    }
};

export default ko;
