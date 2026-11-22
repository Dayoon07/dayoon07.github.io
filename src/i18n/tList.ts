import type { TFunction } from "i18next";

/** 번역 값이 배열(string[])인 키를 읽는다. 없거나 배열이 아니면 [] */
export const tList = (t: TFunction, key: string): string[] => {
    const value: unknown = t(key, { returnObjects: true, defaultValue: [] });
    return Array.isArray(value) ? (value as string[]) : [];
};
