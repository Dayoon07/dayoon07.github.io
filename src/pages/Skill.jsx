import React from "react";
import { useState } from "react";
import { useEffect } from "react";

export default function Skill() {

    document.title = "기술 스택 | 안녕하세요. 강다윤입니다";

    const [imagesLoaded, setImagesLoaded] = useState(0);
    const [showItems, setShowItems] = useState(false);

    const skillSections = [
        {
            title: "프로그램",
            color: "bg-blue-600",
            items: [
                {
                    name: "Eclipse",
                    badge: "https://img.shields.io/badge/Eclipse-2C2255?style=for-the-badge&logo=eclipse&logoColor=white"
                },
                {
                    name: "PyCharm",
                    badge: "https://img.shields.io/badge/PyCharm-000000?style=for-the-badge&logo=PyCharm&logoColor=white"
                },
                {
                    name: "Visual Studio Code",
                    badge: "https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7?style=for-the-badge&logo=vsc&logoColor=white"
                },
                {
                    name: "Spring Tool Suite (STS)",
                    badge: "https://img.shields.io/badge/Spring%20Tool%20Suite%20-6DB33F?style=for-the-badge&logo=eclipse&logoColor=white"
                },
                {
                    name: "IntelliJ",
                    badge: "https://img.shields.io/badge/Intellij%20Idea-000?style=for-the-badge&logo=intellij-idea"
                }
            ]
        },
        {
            title: "언어",
            color: "bg-green-600",
            items: [
                {
                    name: "HTML",
                    badge: "https://img.shields.io/badge/HTML-%23E34F26?style=for-the-badge&logo=html5&logoColor=white"
                },
                {
                    name: "CSS",
                    badge: "https://img.shields.io/badge/CSS-1572B6?style=for-the-badge&logo=css3&logoColor=fff"
                },
                {
                    name: "JavaScript",
                    badge: "https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=white"
                },
                {
                    name: "JSON",
                    badge: "https://img.shields.io/badge/JSON-000?style=for-the-badge&logo=json&logoColor=fff"
                },
                {
                    name: "SQL",
                    badge: "https://img.shields.io/badge/SQL-336791?style=for-the-badge&logo=sqlite&logoColor=white"
                },
                {
                    name: "Java",
                    badge: "/img/Java-007396.svg"
                    // java의 simple icon이 oracle 때문에 못 쓰게 됨 그래서 다른 사람이 만든 커스텀 로고로 대체함
                },
                {
                    name: "Python",
                    badge: "https://img.shields.io/badge/Python-3776AB?style=for-the-badge&logo=python&logoColor=fff"
                }
            ]
        },
        {
            title: "웹 프레임워크",
            color: "bg-red-600",
            items: [
                {
                    name: "Spring",
                    badge: "https://img.shields.io/badge/Spring-6DB33F?style=for-the-badge&logo=spring&logoColor=white"
                },
                {
                    name: "Spring Boot",
                    badge: "https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=fff"
                },
                {
                    name: "Fast API",
                    badge: "https://img.shields.io/badge/FastAPI-009485?style=for-the-badge&logo=fastapi&logoColor=white"
                },
                {
                    name: "MyBatis",
                    badge: "https://dayoon07.github.io/static-page-test/devimg/MyBatis.png"
                },
                {
                    name: "Tailwind",
                    badge: "https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=for-the-badge&logo=tailwind-css&logoColor=white"
                },
                {
                    name: "Bootstrap",
                    badge: "https://img.shields.io/badge/Bootstrap-7952B3?style=for-the-badge&logo=bootstrap&logoColor=fff"
                }
            ]
        },
        {
            title: "DB & DB 프로그램",
            color: "bg-yellow-600",
            items: [
                {
                    name: "Oracle",
                    badge: "https://custom-icon-badges.demolab.com/badge/Oracle-F80000?style=for-the-badge&logo=oracle&logoColor=fff"
                },
                {
                    name: "Maria",
                    badge: "https://img.shields.io/badge/Maria-003545?style=for-the-badge&logo=mariadb&logoColor=white"
                },
                {
                    name: "Dbeaver",
                    badge: "https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white"
                },
                {
                    name: "Sql Developer",
                    badge: "https://dayoon07.github.io/static-page-test/devimg/sqldeveloper.png"
                }
            ]
        },
        {
            title: "라이브러리",
            color: "bg-orange-600",
            items: [
                {
                    name: "React",
                    badge: "https://img.shields.io/badge/React-%2320232a?style=for-the-badge&logo=react&logoColor=%2361DAFB"
                },
                {
                    name: "jQuery",
                    badge: "https://img.shields.io/badge/jQuery-0769AD?style=for-the-badge&logo=jquery&logoColor=fff"
                },
                {
                    name: "Lombok",
                    badge: "https://dayoon07.github.io/static-page-test/devimg/lombok.png"
                },
                {
                    name: "JSTL",
                    badge: "https://dayoon07.github.io/static-page-test/devimg/jstl.png"
                }
            ]
        },
        {
            title: "웹 서버",
            color: "bg-black",
            items: [
                {
                    name: "Apache Tomcat",
                    badge: "https://img.shields.io/badge/Apache%20Tomcat-F8DC75?style=for-the-badge&logo=apachetomcat&logoColor=black"
                },
                {
                    name: "Nginx",
                    badge: "https://img.shields.io/badge/Nginx-009639?logo=nginx&logoColor=white&style=for-the-badge"
                }
            ]
        },
        {
            title: "분석 & 모니터링",
            color: "bg-cyan-500",
            items: [
                {
                    name: "Prometheus",
                    badge: "https://img.shields.io/badge/Prometheus-black?style=for-the-badge&logo=prometheus"
                },
                {
                    name: "Grafana",
                    badge: "https://img.shields.io/badge/Grafana-F2F4F9?style=for-the-badge&logo=grafana&logoColor=orange"
                }
            ]
        },
        // {
        //     title: "딥러닝 프레임워크",
        //     color: "bg-purple-600",
        //     items: [
        //         {
        //             name: "TensorFlow",
        //             badge: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
        //         },
        //         {
        //             name: "Keras",
        //             badge: "https://img.shields.io/badge/Keras-FF0000?style=for-the-badge&logo=keras&logoColor=white"
        //         }
        //     ]
        // }
    ];

    // 전체 이미지 수 계산
    const totalImages = skillSections.reduce((acc, section) => acc + section.items.length, 0);

    // 이미지 프리로드 및 애니메이션 트리거
    useEffect(() => {
        const preloadImages = () => {
            const imagePromises = [];

            skillSections.forEach(section => {
                section.items.forEach(item => {
                    imagePromises.push(new Promise(resolve => {
                        const img = new Image();
                        img.src = item.badge;
                        img.onload = () => {
                            setImagesLoaded(prev => prev + 1);
                            resolve();
                        };
                        img.onerror = () => resolve();
                    }));
                });
            });

            Promise.all(imagePromises).then(() => {
                setShowItems(true);
            });
        };

        preloadImages();
    }, []);

    return (
        <>
            <h1 
                className="text-3xl font-bold my-4 opacity-0 transform -translate-y-10 transition-all duration-700 ease-out"
                style={{ 
                    opacity: showItems ? 1 : 0, 
                    transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)' 
                }}
            >
                기술 스택
            </h1>

            {!showItems && (
                <div className="flex flex-col items-center justify-center py-12">
                    <div className="w-16 h-16 border-4 border-gray-300 border-t-blue-500 rounded-full animate-spin"></div>
                    <p className="mt-4 text-gray-600">이미지 로딩중... ({imagesLoaded}/{totalImages})</p>
                </div>
            )}

            <div className="w-full mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                {skillSections.map((section, index) => (
                    <div 
                        key={index} 
                        className="md:w-60 lg:w-64 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden transition-all duration-700 transform opacity-0 -translate-y-10"
                        style={{ 
                            opacity: showItems ? 1 : 0, 
                            transform: showItems ? 'translateY(0)' : 'translateY(-2.5rem)',
                            transitionDelay: `${index * 100}ms`
                        }}
                    >
                        <div className={`${section.color} text-white py-3 px-4 font-bold text-lg flex items-center`}>
                            {section.title}
                        </div>
                        <div className="p-4">
                            <div className="flex flex-wrap gap-1">
                                {section.items.map((item, itemIndex) => (
                                    <div key={itemIndex} className="flex items-center" title={item.name}>
                                        <img 
                                            src={item.badge} 
                                            alt={item.name} 
                                            className="h-7 max-w-full"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}