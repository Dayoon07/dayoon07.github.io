import { useState } from "react";
import { useLocation } from "react-router-dom";


function useSide() {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const toggleSidebar = () => {
        setIsOpen(!isOpen);
    };

    const menuItems = [
        { path: '/', label: '1. 소개' },
        { path: '/skill', label: '2. 기술 스택' },
        { path: '/projects', label: '3. 주요 프로젝트' },
        { path: '/architecture', label: '4. DB 설계 작업물' },
        { path: '/contact', label: '5. 연락처' }
    ];
    
    return {
        isOpen, setIsOpen,location, toggleSidebar,menuItems
    };
}
