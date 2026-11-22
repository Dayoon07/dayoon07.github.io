import i18n from "i18next";
import LanguageDetector from "i18next-browser-languagedetector";
import { initReactI18next } from "react-i18next";
import ko from "./locales/ko";
import en from "./locales/en";
import ja from "./locales/ja";
import zh from "./locales/zh";

export const LANGUAGES = ["ko", "en", "ja", "zh"] as const;
export type Language = (typeof LANGUAGES)[number];

/** 언어 메뉴에 표시할 이름 (각 언어로 표기) */
export const LANGUAGE_NAMES: Record<Language, string> = {
    ko: "한국어",
    en: "English",
    ja: "日本語",
    zh: "简体中文"
};

/*
 * 언어 결정 순서: ?lang=en (ko/en/ja/zh) 쿼리 → 이전에 고른 언어(localStorage) → 브라우저 언어 → ko
 */
i18n
    .use(LanguageDetector)
    .use(initReactI18next)
    .init({
        resources: {
            ko: { translation: ko },
            en: { translation: en },
            ja: { translation: ja },
            zh: { translation: zh }
        },
        supportedLngs: LANGUAGES,
        nonExplicitSupportedLngs: true,   // en-US → en, zh-CN·zh-TW → zh
        load: "languageOnly",
        fallbackLng: "ko",
        detection: {
            order: ["querystring", "localStorage", "navigator"],
            lookupQuerystring: "lang",
            lookupLocalStorage: "lang",
            caches: ["localStorage"]
        },
        interpolation: { escapeValue: false }   // React 가 이미 escape 함
    });

const syncHtmlLang = (lng: string) => {
    document.documentElement.lang = lng.split("-")[0];
};
syncHtmlLang(i18n.resolvedLanguage ?? "ko");
i18n.on("languageChanged", (lng) => {
    syncHtmlLang(lng);

    // ?lang= 링크로 들어온 뒤 언어를 바꾸면 주소도 맞춰서, 새로고침해도 고른 언어가 유지되게 함
    const url = new URL(window.location.href);
    if (url.searchParams.has("lang") && url.searchParams.get("lang") !== lng) {
        url.searchParams.set("lang", lng);
        window.history.replaceState(window.history.state, "", url);
    }
});

export default i18n;
