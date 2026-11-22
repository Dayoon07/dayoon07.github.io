import type ko from "./ko";
import type { Messages } from "../types";

/** 简体中文 — 必须与 ko.ts 的键完全一致 */
const zh: Messages<typeof ko> = {
    common: {
        siteName: "Dayoon Kang",
        viewLarger: "放大查看",
        viewLargerOf: "放大查看 {{name}} 的图片",
        language: "选择语言"
    },

    profile: {
        region: "个人资料",
        name: "Dayoon Kang",
        nameAlt: "(강다윤)",
        photoAlt: "个人照片",
        toggle: "个人资料",
        toggleLabel: "展开/收起个人资料",
        detailTitle: "个人资料详情",
        location: "韩国 京畿道 安养市",
        school: "Geunmyeong 高中",
        emailLabel: "发送邮件",
        githubLabel: "查看 GitHub 主页"
    },

    home: {
        heading: "您好，我是 Dayoon Kang",
        intro: "我希望成为一名通过解决问题与协作共同成长的开发者。在参与前端和后端项目的过程中，我积累了多样的经验；遇到问题时不会简单略过，而是深入分析原因并加以解决，并从中获得成就感。通过团队项目，我切身体会到了协作的重要性。尤其令我难忘的是，在意见出现分歧时，我们相互协调想法，最终得到了更好的结果。这让我认识到，协作不只是分工，更是相互学习、共同成长的过程。将来我希望进入数据库领域，也会继续学习未知的知识，不断成长。",
        simpleProjects: "小型项目",
        news: "近期动态",
        links: {
            limeet: "Limeet (PWA)",
            weather: "天气 API 服务",
            webcam: "移动端网络摄像头应用",
            school: "学校信息查询"
        },
        interests: {
            desktop: {
                title: "桌面应用程序",
                content: "正在学习使用 C# 和 WPF(Windows Presentation Foundation)进行 GUI 编程。"
            },
            devops: {
                title: "学习 DevOps",
                content: "正在学习使用 GitHub Actions 搭建 CI/CD 流水线，通过编写工作流研究持续构建与部署。"
            }
        }
    },

    skill: {
        title: "技术栈"
    },

    project: {
        title: "主要项目",
        role: "负责",
        demoVideo: "演示视频",
        team: { solo: "个人", team: "团队" },
        items: {
            shortform: {
                description: "短视频平台。将 Kotlin·Spring Boot 服务端和 React·TypeScript 客户端组织在同一个 monorepo 中。包含关注、视频滑动浏览、社区(帖子)、评论与回复等功能。",
                highlights: []
            },
            "movie-ticket": {
                description: "将电影院购票自助终端搬到 Web 上的项目。前端为 React SPA，后端拆分为Spring Boot REST API 服务，并使用 Spring AI 和 Ollama 加入了电影推荐功能。",
                highlights: []
            },
            "mycloud-project": {
                description: "具备文件上传与分享功能的云服务。可以通过邮件功能和访问密钥将文件分享给其他用户。",
                highlights: []
            },
            "springboot-video-platform": {
                description: "移动端 Web 视频平台，具备视频上传、点赞、订阅、观看记录、标签和视频分析等功能。",
                highlights: []
            },
            "springboot-blog": {
                description: "博客平台。实现了文章的发布、修改、删除，以及评论、点赞和文件上传功能。",
                highlights: []
            },
            kmcreativeschool: {
                description: "校园暴力举报网站。举报内容通过 SMTP 邮件发送，举报人可以查询自己的举报记录。",
                role: "咨询功能(CRUD)、警察账号管理、咨询·警察数据表设计",
                highlights: []
            }
        }
    },

    architecture: {
        title: "数据库设计",
        erdAlt: "{{name}} ERD",
        viewLargerOf: "放大查看 {{name}} 的 ERD",
        items: {
            shortform: {
                title: "短视频平台",
                description: "从高三第一学期结束后的暑假开始开发的短视频平台 ERD。由于数据表较多，图片中的列名不易看清，因此另外整理了完整的文本版表结构。",
                linkLabel: "查看文本版表结构",
                points: []
            },
            movieTicket: {
                title: "电影购票自助终端",
                description: "在“未来潜力领域高中毕业人才培养项目”的三年级项目中设计的电影购票服务 ERD。",
                points: []
            },
            mycloud: {
                title: "我的云盘",
                description: "具备文件上传与分享功能的云服务 ERD，用时约两天完成设计。",
                points: []
            },
            videoPlatform: {
                title: "Whynot 视频平台",
                description: "视频平台的 ERD，在约三个月的应用开发过程中同步设计。",
                points: []
            },
            blog: {
                title: "Spring Boot 博客",
                description: "博客平台的 ERD，在约一个月的开发过程中同步设计，并实现了基本的 CRUD 和文件 I/O。",
                points: []
            },
            creativeSchool: {
                title: "京畿内容创意学校项目",
                description: "京畿内容创意学校团队项目的 ERD。其中我负责警察局·咨询数据表的设计与 CRUD 实现。",
                points: []
            }
        }
    },

    cv: {
        title: "经历 · 活动",
        present: "至今",
        sections: {
            work: "工作经历",
            education: "教育背景",
            certifications: "资格证书",
            awards: "获奖经历",
            clubs: "社团活动"
        },
        experience: {
            imtsoft: {
                company: "IMTSoft",
                role: "软件开发工程师 · 全职",
                works: {
                    esl: {
                        title: "ESL(电子价签)对接服务器",
                        summary: "开发了 AIMS 的改进版 UI 和代理服务器。",
                        details: []
                    },
                    signage: {
                        title: "数字标牌",
                        summary: "负责公司自研数字标牌服务的开发与运维。",
                        details: []
                    },
                    asp: {
                        title: "ASP 服务器管理 · 系统运维",
                        summary: "负责管理 ASP(Application Service Provider)服务器并运维服务系统。",
                        details: []
                    }
                }
            }
        },
        items: {
            geunmyeongHigh: { title: "Geunmyeong 高中", subtitle: "毕业" },
            gwanyangMiddle: { title: "Gwanyang 初中", subtitle: "毕业" },
            gwanyangElementary: { title: "Gwanyang 小学", subtitle: "毕业" },

            engineerInfoProcessing: { title: "信息处理产业技师", subtitle: "课程评价型" },
            craftsmanInfoProcessing: { title: "信息处理技能士" },
            craftsmanWebDesign: { title: "网页设计技能士" },
            computerSpecialist2: { title: "计算机应用能力 2级" },
            gtqPhotoshop2: { title: "GTQ Photoshop 2级" },

            skillsAward: { title: "技能奖 金奖", subtitle: "第1名" },
            algorithmContest: { title: "校内算法竞赛 优秀奖", subtitle: "第2名" },
            infographicContest: { title: "校内信息图竞赛 优秀奖", subtitle: "第3名" },
            spreadsheetContest: { title: "校内电子表格函数竞赛 鼓励奖", subtitle: "第3名" },
            attendance2: { title: "全勤奖", subtitle: "二年级" },
            creativeSchoolContest: { title: "京畿内容创意学校竞赛", subtitle: "最优秀奖" },
            attendance1: { title: "全勤奖", subtitle: "一年级" },

            smartCodingClub: { title: "智能编程社" },
            digitalContentClub: { title: "数字内容制作社" }
        }
    },

    portfolio: {
        title: "作品集"
    },

    sitemap: {
        title: "网站地图"
    },

    notFound: {
        titleLine1: "抱歉，",
        titleLine2: "找不到您请求的页面。",
        home: "返回首页",
        sitemap: "网站地图"
    },

    lightbox: {
        prev: "上一张",
        next: "下一张",
        close: "关闭灯箱",
        goTo: "跳转到第 {{n}} 张图片",
        fallbackAlt: "灯箱图片"
    }
};

export default zh;
