/**
 * CV 데이터 (날짜만)
 * - 이름·설명은 i18n/locales/ko.ts, en.ts 의 cv.items.<id> 에 있다
 */
export interface CvEntry {
    id: string;
    date: string;
}

export const CV_DATA: Record<"education" | "certifications" | "awards" | "clubs", CvEntry[]> = {
    education: [
        { id: "geunmyeongHigh", date: "2023.03.04 ~ 2026.01.08" },
        { id: "gwanyangMiddle", date: "2020.03.02 ~ 2023.01.04" },
        { id: "gwanyangElementary", date: "2014.03.02 ~ 2020.01.06" }
    ],
    certifications: [
        { id: "engineerInfoProcessing", date: "2025.07.16" },
        { id: "craftsmanInfoProcessing", date: "2024.12.11" },
        { id: "craftsmanWebDesign", date: "2024.09.11" },
        { id: "computerSpecialist2", date: "2024.03.08" },
        { id: "gtqPhotoshop2", date: "2023.12.15" }
    ],
    awards: [
        { id: "skillsAward", date: "2026.01.08" },
        { id: "algorithmContest", date: "2025.01.10" },
        { id: "infographicContest", date: "2025.01.10" },
        { id: "spreadsheetContest", date: "2025.01.10" },
        { id: "attendance2", date: "2025.01.10" },
        { id: "creativeSchoolContest", date: "2024.11.19" },
        { id: "attendance1", date: "2024.01.03" }
    ],
    clubs: [
        { id: "smartCodingClub", date: "2025.04 ~ 2025.11" },
        { id: "digitalContentClub", date: "2023.04 ~ 2024.11" }
    ]
};

// 지금은 안 쓰는 데이터입니다 (봉사활동)
export const VOLUNTEER_DATA = [
    "2024.10.28 : 고등학교 진로 상담 도우미 (교내, 8시간)",
    "2024.10.19 : 학교 설명회 도우미 (교내, 4시간)",
    "2024.09.04 ~ 2024.10.05 : 학과 진로체험장 환경 조성 및 안내 도우미 (교내, 10시간)",
    "2024.04.27 : 학교 홍보물 제작 도우미 (교내, 6시간)",
    "2023.11.25 : 학과 체험 행사 도우미 (교내, 8시간)"
];
