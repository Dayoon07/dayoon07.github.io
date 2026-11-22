/**
 * ko.ts 의 구조를 그대로 따르는 번역 타입.
 * en.ts 에 키가 빠지거나 남으면 tsc 에서 에러가 난다.
 */
export type Messages<T> = {
    [K in keyof T]: T[K] extends string
        ? string
        : T[K] extends readonly unknown[]
            ? string[]
            : Messages<T[K]>;
};
