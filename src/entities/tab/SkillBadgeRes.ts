export interface SkillBadgeRes {
    title: string;
    items: SkillItem[];
}

interface SkillItem {
    name: string;
    badge: string;
}