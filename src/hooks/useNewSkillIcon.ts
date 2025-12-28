import { useCallback, useEffect, useState } from "react";
import { cl } from "../constants/CurrentLocation";
import { SkillIconRes } from "../entities/etc/SkillIconRes";

export const useNewSkillIcon = () => {
    const [skills, setSkills] = useState<SkillIconRes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);

    const init = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);

            const res = await fetch(`${cl}/json/skillicon.json`);
            if (!res.ok) throw new Error(`에러: ${res}`);

            const data: SkillIconRes[] = await res.json();
            setSkills(data);
        } catch (error) {
            console.error("skill.json 로딩 실패:", error);
            setError(error);
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        init();
    }, [init]);
    
    return {
        skills,
        loading,
        error,
        init
    }
}