import React from 'react';

export default function Skill() {

    document.title = "기술 스택 | 안녕하세요. 강다윤입니다";

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
                    name: "Visual Studio Code",
                    badge: "https://custom-icon-badges.demolab.com/badge/Visual%20Studio%20Code-0078d7?style=for-the-badge&logo=vsc&logoColor=white"
                },
                {
                    name: "PyCharm",
                    badge: "https://img.shields.io/badge/PyCharm-000000?style=for-the-badge&logo=PyCharm&logoColor=white"
                },
                {
                    name: "Spring Tool Suite (STS)",
                    badge: "https://dayoon07.github.io/static-page-test/devimg/SpringToolSuite.png"
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
                    name: "Java",
                    badge: "https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=data:image/svg%2bxml;base64,PCFET0NUWVBFIHN2ZyBQVUJMSUMgIi0vL1czQy8vRFREIFNWRyAxLjEvL0VOIiAiaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkIj4KDTwhLS0gVXBsb2FkZWQgdG86IFNWRyBSZXBvLCB3d3cuc3ZncmVwby5jb20sIFRyYW5zZm9ybWVkIGJ5OiBTVkcgUmVwbyBNaXhlciBUb29scyAtLT4KPHN2ZyB3aWR0aD0iMTUwcHgiIGhlaWdodD0iMTUwcHgiIHZpZXdCb3g9IjAgMCAzMi4wMCAzMi4wMCIgdmVyc2lvbj0iMS4xIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHhtbG5zOnhsaW5rPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5L3hsaW5rIiBmaWxsPSIjZmZmZmZmIiBzdHJva2U9IiNmZmZmZmYiIHN0cm9rZS13aWR0aD0iMC4yNTYiPgoNPGcgaWQ9IlNWR1JlcG9fYmdDYXJyaWVyIiBzdHJva2Utd2lkdGg9IjAiLz4KDTxnIGlkPSJTVkdSZXBvX3RyYWNlckNhcnJpZXIiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIvPgoNPGcgaWQ9IlNWR1JlcG9faWNvbkNhcnJpZXIiPiA8cGF0aCBmaWxsPSIjZmZmZmZmIiBkPSJNMTIuNTU3IDIzLjIyYzAgMC0wLjk4MiAwLjU3MSAwLjY5OSAwLjc2NSAyLjAzNyAwLjIzMiAzLjA3OSAwLjE5OSA1LjMyNC0wLjIyNiAwIDAgMC41OSAwLjM3IDEuNDE1IDAuNjkxLTUuMDMzIDIuMTU3LTExLjM5LTAuMTI1LTcuNDM3LTEuMjN6TTExLjk0MiAyMC40MDVjMCAwLTEuMTAyIDAuODE2IDAuNTgxIDAuOTkgMi4xNzYgMC4yMjQgMy44OTUgMC4yNDMgNi44NjktMC4zMyAwIDAgMC40MTEgMC40MTcgMS4wNTggMC42NDUtNi4wODUgMS43NzktMTIuODYzIDAuMTQtOC41MDgtMS4zMDV6TTE3LjEyNyAxNS42M2MxLjI0IDEuNDI4LTAuMzI2IDIuNzEzLTAuMzI2IDIuNzEzczMuMTQ5LTEuNjI1IDEuNzAzLTMuNjYxYy0xLjM1MS0xLjg5OC0yLjM4Ni0yLjg0MSAzLjIyMS02LjA5MyAwIDAtOC44MDEgMi4xOTgtNC41OTggNy4wNDJ6TTIzLjc4MyAyNS4zMDJjMCAwIDAuNzI3IDAuNTk5LTAuODAxIDEuMDYyLTIuOTA1IDAuODgtMTIuMDkxIDEuMTQ2LTE0LjY0MyAwLjAzNS0wLjkxNy0wLjM5OSAwLjgwMy0wLjk1MyAxLjM0NC0xLjA2OSAwLjU2NC0wLjEyMiAwLjg4Ny0wLjEgMC44ODctMC4xLTEuMDIwLTAuNzE5LTYuNTk0IDEuNDExLTIuODMxIDIuMDIxIDEwLjI2MiAxLjY2NCAxOC43MDYtMC43NDkgMTYuMDQ0LTEuOTV6TTEzLjAyOSAxNy40ODljMCAwLTQuNjczIDEuMTEtMS42NTUgMS41MTMgMS4yNzQgMC4xNzEgMy44MTQgMC4xMzIgNi4xODEtMC4wNjYgMS45MzQtMC4xNjMgMy44NzYtMC41MSAzLjg3Ni0wLjUxcy0wLjY4MiAwLjI5Mi0xLjE3NSAwLjYyOWMtNC43NDUgMS4yNDgtMTMuOTExIDAuNjY3LTExLjI3Mi0wLjYwOSAyLjIzMi0xLjA3OSA0LjA0Ni0wLjk1NiA0LjA0Ni0wLjk1NnpNMjEuNDEyIDIyLjE3NGM0LjgyNC0yLjUwNiAyLjU5My00LjkxNSAxLjAzNy00LjU5MS0wLjM4MiAwLjA3OS0wLjU1MiAwLjE0OC0wLjU1MiAwLjE0OHMwLjE0Mi0wLjIyMiAwLjQxMi0wLjMxOGMzLjA3OS0xLjA4MyA1LjQ0OCAzLjE5My0wLjk5NCA0Ljg4Ny0wIDAgMC4wNzUtMC4wNjcgMC4wOTctMC4xMjZ6TTE4LjUwMyAzLjMzN2MwIDAgMi42NzEgMi42NzItMi41MzQgNi43ODEtNC4xNzQgMy4yOTYtMC45NTIgNS4xNzYtMC4wMDIgNy4zMjMtMi40MzYtMi4xOTgtNC4yMjQtNC4xMzMtMy4wMjUtNS45MzQgMS43NjEtMi42NDQgNi42MzgtMy45MjUgNS41Ni04LjE3ek0xMy41MDMgMjguOTY2YzQuNjMgMC4yOTYgMTEuNzQtMC4xNjQgMTEuOTA4LTIuMzU1IDAgMC0wLjMyNCAwLjgzMS0zLjgyNiAxLjQ5LTMuOTUyIDAuNzQ0LTguODI2IDAuNjU3LTExLjcxNiAwLjE4IDAgMCAwLjU5MiAwLjQ5IDMuNjM1IDAuNjg1eiIvPiA8L2c+Cg08L3N2Zz4="
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
                    badge: "https://img.shields.io/badge/MariaDB-003545?style=for-the-badge&logo=mariadb&logoColor=white"
                },
                {
                    name: "Sql Developer",
                    badge: "https://dayoon07.github.io/static-page-test/devimg/sqldeveloper.png"
                },
                {
                    name: "Dbeaver",
                    badge: "https://img.shields.io/badge/dbeaver-382923?style=for-the-badge&logo=dbeaver&logoColor=white"
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
        {
            title: "딥러닝 프레임워크",
            color: "bg-purple-600",
            items: [
                {
                    name: "TensorFlow",
                    badge: "https://img.shields.io/badge/TensorFlow-FF6F00?style=for-the-badge&logo=tensorflow&logoColor=white"
                },
                {
                    name: "Keras",
                    badge: "https://img.shields.io/badge/Keras-FF0000?style=for-the-badge&logo=keras&logoColor=white"
                }
            ]
        }
    ];

    return (
        <>
            <h1 className="text-3xl font-bold my-4">기술 스택</h1>

            <div className="w-full mt-4 grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 pb-16">
                {skillSections.map((section, index) => (
                    <div 
                        key={index} 
                        className="md:w-60 bg-white shadow-lg rounded-xl border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
                    >
                        <div className={`${section.color} text-white py-3 px-4 font-bold text-lg flex items-center`}>
                            {section.title}
                        </div>
                        <div className="p-4">
                            <div className="flex flex-wrap gap-2">
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