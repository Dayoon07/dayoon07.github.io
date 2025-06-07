import { useMemo, useEffect, useState } from "react";

export default function Architecture() {
    document.title = "DB 아키텍처 | 안녕하세요. 강다윤입니다"; 

    const [showItems, setShowItems] = useState(false);
    
    const l = useMemo(() => [
        {
            img: "/img/architecture/mycloud-erd.png",
            title: "마이 클라우드 ERD",
            text: "마이 클라우드 ERD, 걸린시간 이틀, 이거는 금방 함"
        },
        {
            img: "/img/architecture/video-platform-erd.png",
            title: "Whynot 비디오 플랫폼 ERD",
            text: "영상 플랫폼 ERD인데 이거는 3개월 동안 웹 애플리케이션 개발과 병행하면서 했음, 마무리 되기 2, 3주 전에 겨우 완성"
        },
        {
            img: "/img/architecture/springbootblogerd.png",
            title: "spring boot blog ERD",
            text: "이거는 병행하면서 1개월 걸림. 기초적인 CRUD 구현은 했음. 이거는 나중에 블로그 만들 때 쓸 것 같음. 추가로 파일 I/O도 구현"
        },
        {
            img: "/img/architecture/creativeProjectERD.png",
            title: "경기 콘텐츠 창의학교 프로젝트 ERD",
            text: "창의학교 프로젝트 DB ERD, 기여한 것들은 경찰서, 문의하기 테이블 설계(아마 사진에는 안 찍혔을 거임), CRUD 구현, 구축"
        }
    ], []);

    // 컴포넌트 마운트 시 바로 애니메이션 시작
    useEffect(() => {
        const timer = setTimeout(() => {
            setShowItems(true);
        }, 100);
        
        return () => clearTimeout(timer);
    }, []);

    return (
        <>
            <h1 className="text-3xl font-bold my-4 opacity-0 transform -translate-y-10 transition-all duration-700 ease-out"
                style={{ 
                    opacity: showItems ? 1 : 0, 
                    transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)'
                }}>
                DB 설계 작업물
            </h1>

            <div className="md:grid md:grid-cols-2 md:gap-4">
                {l.map((content, idx) => (
                    <div 
                        key={idx}
                        className="md:max-w-md max-md:w-full max-md:mb-8 opacity-0 transform -translate-y-10 transition-all duration-700 ease-out"
                        style={{ 
                            opacity: showItems ? 1 : 0, 
                            transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)',
                            transitionDelay: `${idx * 100}ms`
                        }}
                    >
                        <a href={content.img} target="_blank" rel="noreferrer">
                            <img src={content.img} className="w-full" alt={content.title} />
                        </a>
                        <div className="px-6 py-4">
                            <div className="font-bold text-xl mb-2">{content.title}</div>
                            <p className="text-gray-700 text-base">{content.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}