import React, { useState, useEffect } from "react";

export default function Skill() {
    const [skillSections, setSkillSections] = useState([]);
    const [showItems, setShowItems] = useState(false);

    useEffect(() => {
        document.title = "기술 스택 | 안녕하세요. 강다윤입니다";
        
        const timer = setTimeout(() => {
            setShowItems(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        fetch("/json/skill.json")
            .then((res) => res.json())
            .then((data) => {
                setSkillSections(data);
            })
            .catch((error) => console.error("skill.json 로딩 실패:", error));
    }, []);

    return (
        <div className="max-w-6xl mx-auto">
            <h1
                className={`text-3xl font-bold my-4 transition-all duration-700 ease-out ${
                    showItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                }`}
            >
                기술 스택
            </h1>

            {skillSections.map((section, index) => (
                <div
                    key={section.title || index}
                    className={`max-w-3xl transition-all duration-700 ease-out ${
                        showItems ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-10"
                    }`}
                    style={{ transitionDelay: `${index * 100}ms` }}
                >
                    <div className="border-b py-2 font-bold text-lg">{section.title}</div>
                    <div className="py-2">
                        <div className="flex flex-wrap gap-2">
                            {section.items.map((item) => (
                                <a href={item.badge} key={item.name} title={item.name} rel="noopener noreferrer" target="_blank" className="flex items-center">
                                    <img src={item.badge} alt={item.name} className="h-7" />
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
}