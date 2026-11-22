export interface SitemapItem {
    link: string;
    name: string;
    /** 상단 네비게이션에 표시 */
    nav?: boolean;
    /** 네비게이션·사이트맵에서 숨김 (라우트는 유지) */
    hidden?: boolean;
}

export const SITEMAP: SitemapItem[] = [
    {
        link: "/",
        name: "Homepage"
    },
    {
        link: "/skill",
        name: "Skill",
        nav: true
    },
    {
        link: "/project",
        name: "Project",
        nav: true
    },
    {
        link: "/architecture",
        name: "Architecture",
        nav: true
    },
    {
        link: "/cv",
        name: "CV",
        nav: true
    },
    {
        // 2025.05 작성 후 업데이트 안 됨, 개인정보 포함 → 새 포트폴리오 만들 때까지 숨김
        link: "/portfolio",
        name: "Portfolio",
        nav: true,
        hidden: true
    },
    {
        link: "/sitemap",
        name: "Sitemap"
    },
    {
        link: "/404NotFound",
        name: "404NotFound"
    }
];

export const VISIBLE_SITEMAP = SITEMAP.filter((item) => !item.hidden);
export const NAV_ITEMS = VISIBLE_SITEMAP.filter((item) => item.nav);
