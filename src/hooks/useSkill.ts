import { useCallback, useEffect, useState } from "react";
import { cl } from "../constants/CurrentLocation";
import { SkillBadgeRes } from "../entities/tab/SkillBadgeRes";

export const useSkill = () => {
    const [skills, setSkills] = useState<SkillBadgeRes[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<any | null>(null);
    
    const init = useCallback(async () => {
        try {
            setLoading(true);
            setError(null);
            
            const res = await fetch(`${cl}/json/skill.json`);
            if (!res.ok) throw new Error(`에러: ${res}`);
            
            const data: SkillBadgeRes[] = await res.json();
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