import { useEffect, useRef, useState } from "react";
import { useTranslation } from "react-i18next";
import { Check, Languages } from "lucide-react";
import { LANGUAGES, LANGUAGE_NAMES, type Language } from "../../../i18n";

/** 언어 선택 드롭다운. 고른 언어는 localStorage 에 저장됨 */
export const LanguageMenu: React.FC = () => {
    const { t, i18n } = useTranslation();
    const [open, setOpen] = useState(false);
    const rootRef = useRef<HTMLDivElement>(null);
    const buttonRef = useRef<HTMLButtonElement>(null);
    const current = (i18n.resolvedLanguage ?? "ko") as Language;

    // 바깥 클릭 · Esc 로 닫기
    useEffect(() => {
        if (!open) return;
        const onPointerDown = (e: PointerEvent) => {
            if (!rootRef.current?.contains(e.target as Node)) setOpen(false);
        };
        const onKeyDown = (e: KeyboardEvent) => {
            if (e.key === "Escape") {
                setOpen(false);
                buttonRef.current?.focus();
            }
        };
        document.addEventListener("pointerdown", onPointerDown);
        document.addEventListener("keydown", onKeyDown);
        return () => {
            document.removeEventListener("pointerdown", onPointerDown);
            document.removeEventListener("keydown", onKeyDown);
        };
    }, [open]);

    const select = (lng: Language) => {
        i18n.changeLanguage(lng);
        setOpen(false);
        buttonRef.current?.focus();
    };

    return (
        <div ref={rootRef} className="relative">
            <button
                ref={buttonRef}
                type="button"
                onClick={() => setOpen((v) => !v)}
                aria-haspopup="menu"
                aria-expanded={open}
                aria-label={`${t("common.language")}: ${LANGUAGE_NAMES[current]}`}
                className="flex items-center gap-1.5 px-2 py-1.5 rounded-md text-sm font-medium text-gray-700 hover:bg-gray-100 cursor-pointer"
            >
                <Languages className="w-[18px] h-[18px]" aria-hidden="true" />
                {current.toUpperCase()}
            </button>

            {open && (
                <ul role="menu" aria-label={t("common.language")}
                    className="absolute right-0 mt-2 w-44 p-1.5 bg-white border border-gray-200 rounded-xl shadow-lg z-20"
                >
                    {LANGUAGES.map((lng) => (
                        <li key={lng} role="none">
                            <button
                                type="button"
                                role="menuitemradio"
                                aria-checked={current === lng}
                                lang={lng}
                                onClick={() => select(lng)}
                                className="w-full flex items-center gap-2.5 px-2.5 py-2 rounded-lg text-left text-[15px] text-gray-800 hover:bg-gray-100 focus-visible:bg-gray-100 outline-none cursor-pointer"
                            >
                                <span className="w-4 shrink-0">
                                    {current === lng && <Check className="w-4 h-4" aria-hidden="true" />}
                                </span>
                                {LANGUAGE_NAMES[lng]}
                            </button>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};
