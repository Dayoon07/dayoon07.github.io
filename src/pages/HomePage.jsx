import React, { useState, useEffect, useMemo, useCallback } from "react";

const GITHUB_USERNAME = "dayoon07";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_ASDF_TOKEN;
const TO_YEAR = new Date().getFullYear();

// 유틸리티 함수들을 컴포넌트 외부로 이동 (재생성 방지)
function getDayIndex(dateStr) {
    const date = new Date(dateStr);
    const start = new Date(`${TO_YEAR}-01-01`);
    const diff = Math.floor((date - start) / (1000 * 60 * 60 * 24));
    return diff >= 0 && diff < 365 ? diff : -1;
}

function getColor(count) {
    if (count === 0) return "#ebedf0";
    if (count < 2) return "#c6e48b";
    if (count < 4) return "#7bc96f";
    if (count < 6) return "#239a3b";
    return "#196127";
}

// 정적 데이터를 컴포넌트 외부로 이동
const recentInterest = [
    {
        title: "SQLD 자격증 공부",
        content: `
            SQLD 자격증을 취득하기 위해 DB 심화 부분을 공부하고 있습니다.
            특히 데이터베이스 모델링과 그룹 함수, 윈도우 함수에 대해 공부하고 있습니다.
            개인적으로는 데이터베이스 튜닝하는 방법과 트랜잭션 관리, 샤딩 기법, 분산 처리, 
            쿼리 성능 향상 방법에 대해 공부하고 있습니다.
        `
    },
    {
        title: "Tensorflow 기반 딥러닝",
        content: `
            Tensorflow & Keras를 활용해 인공 신경망 설계 & 구현과 딥러닝 모델 설계 & 학습 방법에 대해 공부하고 있습니다.
        `
    }
];

const projectLinks = [
    {
        name: "날씨 API 키 활용 서비스",
        url: "https://dayoon07.github.io/weather-service",
        repo: "https://github.com/Dayoon07/weather-service",
        note: "(weather-service)",
    },
    {
        name: "모바일 웹 캠 애플리케이션",
        url: "https://dayoon07.github.io/webcam",
        repo: "https://github.com/Dayoon07/webcam",
        note: "(webcam)",
    },
    {
        name: "학교 정보 검색",
        url: "https://Dayoon07.github.io/school-search",
        repo: "https://github.com/Dayoon07/school-search",
        note: "(school-search)",
    }
];

const MONTHS = ['01월', '02월', '03월', '04월', '05월', '06월', 
               '07월', '08월', '09월', '10월', '11월', '12월'];
const DAYS = ['', '월요일', '', '수요일', '', '금요일', ''];

export default function HomePage() {
    document.title = "안녕하세요. 강다윤입니다";

    const [activity, setActivity] = useState(Array(365).fill(0));
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [userInfo, setUserInfo] = useState(null);

    // GitHub API 호출을 useCallback으로 메모이제이션
    const fetchContributionData = useCallback(async () => {
        try {
            const query = `
                query($username: String!, $from: DateTime!, $to: DateTime!) {
                    user(login: $username) {
                        name
                        login
                        avatarUrl
                        contributionsCollection(from: $from, to: $to) {
                            contributionCalendar {
                                totalContributions
                                weeks {
                                    contributionDays {
                                        date
                                        contributionCount
                                        color
                                    }
                                }
                            }
                        }
                    }
                }
            `;

            const variables = {
                username: GITHUB_USERNAME,
                from: `${TO_YEAR}-01-01T00:00:00Z`,
                to: `${TO_YEAR}-12-31T23:59:59Z`
            };

            const response = await fetch('https://api.github.com/graphql', {
                method: 'POST',
                headers: {
                    'Authorization': `Bearer ${GITHUB_TOKEN}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ query, variables })
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error('토큰이 유효하지 않습니다. GitHub Personal Access Token을 확인해주세요.');
                }
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.errors) {
                throw new Error(`GraphQL Error: ${data.errors[0].message}`);
            }

            const user = data.data.user;
            if (!user) {
                throw new Error('사용자를 찾을 수 없습니다.');
            }

            setUserInfo({
                name: user.name,
                login: user.login,
                avatarUrl: user.avatarUrl,
                totalContributions: user.contributionsCollection.contributionCalendar.totalContributions
            });

            const newActivity = Array(365).fill(0);
            
            user.contributionsCollection.contributionCalendar.weeks.forEach(week => {
                week.contributionDays.forEach(day => {
                    const dayIndex = getDayIndex(day.date);
                    if (dayIndex !== -1) {
                        newActivity[dayIndex] = day.contributionCount;
                    }
                });
            });

            setActivity(newActivity);
            setIsDataLoaded(true);

        } catch (err) {
            console.error('GitHub 데이터 가져오기 실패:', err);
            setError(err.message);
            setIsDataLoaded(true); // 에러가 발생해도 로딩 상태는 종료
        }
    }, []);

    useEffect(() => {
        fetchContributionData();
    }, [fetchContributionData]);

    // 월 라벨 생성을 useMemo로 최적화
    const monthLabels = useMemo(() => {
        const labels = [];
        const startDayOfWeek = new Date(TO_YEAR, 0, 1).getDay();
        
        for (let month = 0; month < 12; month++) {
            const firstDayOfMonth = new Date(TO_YEAR, month, 1);
            const dayOfYear = Math.floor((firstDayOfMonth - new Date(TO_YEAR, 0, 1)) / (1000 * 60 * 60 * 24));
            const weekIndex = Math.floor((dayOfYear + startDayOfWeek) / 7);
            
            if (weekIndex >= 0) {
                labels.push(
                    <text key={month} x={weekIndex * 12} y={-5} fontSize="10" fill="#666">
                        {MONTHS[month]}
                    </text>
                );
            }
        }
        return labels;
    }, []);

    // 요일 라벨 생성을 useMemo로 최적화
    const dayLabels = useMemo(() => {
        return DAYS.map((day, i) => (
            <text key={i} x={-32.5} y={i * 12 + 8} fontSize="9" fill="#666">
                {day}
            </text>
        ));
    }, []);

    // 기여도 그리드 생성을 useMemo로 최적화
    const contributionGrid = useMemo(() => {
        const squares = [];
        const startDate = new Date(TO_YEAR, 0, 1);
        const startDayOfWeek = startDate.getDay();
        const totalWeeks = Math.ceil((startDayOfWeek + 365) / 7);
        
        for (let week = 0; week < totalWeeks; week++) {
            for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                if (week === 0 && dayOfWeek < startDayOfWeek) {
                    squares.push(
                        <rect 
                            key={`empty-${week}-${dayOfWeek}`}
                            x={week * 12} 
                            y={dayOfWeek * 12} 
                            width="10" 
                            height="10" 
                            fill="#fafbfc" 
                            rx="2"
                            className="opacity-30"
                        />
                    );
                    continue;
                }
                
                const daysSinceStart = (week * 7 + dayOfWeek) - startDayOfWeek;
                
                if (daysSinceStart >= 365) break;
                
                if (daysSinceStart >= 0) {
                    const currentDate = new Date(TO_YEAR, 0, 1 + daysSinceStart);
                    const dateStr = currentDate.toISOString().slice(0, 10);
                    const count = activity[daysSinceStart] || 0;
                    
                    squares.push(
                        <rect 
                            key={`day-${daysSinceStart}`}
                            x={week * 12} 
                            y={dayOfWeek * 12} 
                            width="10" 
                            height="10" 
                            fill={getColor(count)} 
                            rx="2"
                            className="hover:stroke-gray-400 hover:stroke-1 cursor-pointer"
                            title={`${dateStr}: ${count} contributions`}
                        />
                    );
                }
            }
        }
        return squares;
    }, [activity]);

    // 통계 계산을 useMemo로 최적화
    const stats = useMemo(() => {
        const totalContributions = activity.reduce((sum, count) => sum + count, 0);
        const activeDays = activity.filter(count => count > 0).length;
        const maxContributions = Math.max(...activity);
        const averageContributions = activeDays > 0 ? (totalContributions / activeDays).toFixed(1) : 0;

        return {
            totalContributions,
            activeDays,
            maxContributions,
            averageContributions
        };
    }, [activity]);

    const svgWidth = Math.ceil((new Date(TO_YEAR, 0, 1).getDay() + 365) / 7) * 12 + 60;

    return (
        <div className="md:pb-20">
            <div className="max-w-3xl mb-4">
                <h1 className="text-3xl font-bold my-4">안녕하십니까, 저는</h1>
                <p className="text-gray-700">
                    언젠가는 DB 분야로 진출하고 싶은 강다윤입니다. 저는 프론트엔드와 백엔드 프로젝트를 진행하며 
                    다양한 경험을 쌓았습니다. 그 과정에서 발생한 에러의 원인을 분석하고 해결하는 과정도 직접 겪으며, 
                    이를 통해 실력을 더욱 키울 수 있었습니다. 앞으로도 모르는 것을 배우며 끊임없이 
                    성장하는 개발자가 되겠습니다.
                </p>
            </div>

            <div className="max-w-3xl mb-4">
                <h2 className="mt-6 mb-4 text-xl font-bold text-gray-900 dark:text-white border-b pb-2">
                    간단한 프로젝트
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {projectLinks.map((project, idx) => (
                        <div key={idx} className="dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition p-4 border hover:border-[#52ADC8]">
                            <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:underline">
                                <a href={project.repo}>{project.name}</a>
                            </h3>
                            {project.note && (
                                <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.note}</p>
                            )}
                            <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm hover:underline">
                                <a href={project.url}>{project.url}</a>
                            </p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">최근 소식</h2>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {recentInterest.map((c, i) => (
                        <div key={i} className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
                            <div className="flex items-center mb-2">
                                <h3 className="text-lg font-semibold text-gray-800">{c.title}</h3>
                            </div>
                            <p className="text-gray-600">{c.content}</p>
                        </div> 
                    ))}
                </div>
            </div>

            <div className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Github 활동 내역</h2>
                
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-gray-600 font-medium">
                            {isDataLoaded ? (
                                `${TO_YEAR}년의 기여도 : ${stats.totalContributions}`
                            ) : (
                                <div className="flex items-center space-x-2">
                                    <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
                                </div>
                            )}
                        </div>
                        <div className="text-sm text-green-600 font-medium">
                            {isDataLoaded ? "GraphQL API - 완전한 데이터" : "데이터 로딩 중..."}
                        </div>
                    </div>
                    
                    <div className="overflow-x-auto">
                        {error ? (
                            <div className="bg-red-50 border border-red-200 rounded-lg p-4">
                                <p className="text-red-700 font-medium">⚠️ 오류 발생</p>
                                <p className="text-red-600 mt-1">{error}</p>
                                <div className="mt-3 text-sm text-red-600">
                                    <p>해결 방법:</p>
                                    <ul className="list-disc list-inside mt-1 space-y-1">
                                        <li>Personal Access Token이 유효한지 확인</li>
                                        <li>토큰에 필요한 권한(read:user, repo)이 있는지 확인</li>
                                        <li>GitHub 사용자명이 정확한지 확인</li>
                                    </ul>
                                </div>
                            </div>
                        ) : (
                            <div className={`transition-opacity duration-500 ${isDataLoaded ? 'opacity-100' : 'opacity-50'}`}>
                                <svg width={svgWidth} height={7 * 12 + 35} className="border rounded p-2">
                                    <g transform="translate(35, 15)">
                                        {monthLabels}
                                        {dayLabels}
                                        {contributionGrid}
                                    </g>
                                </svg>
                            </div>
                        )}
                    </div>

                    <div style={{marginTop: "16px"}}>
                        <div className="flex items-center space-x-2 text-xs text-gray-500">
                            <span>활동 안 함</span>
                            <div className="flex space-x-1">
                                <div className="w-2 h-2 rounded-sm" style={{backgroundColor: '#ebedf0'}}></div>
                                <div className="w-2 h-2 rounded-sm" style={{backgroundColor: '#c6e48b'}}></div>
                                <div className="w-2 h-2 rounded-sm" style={{backgroundColor: '#7bc96f'}}></div>
                                <div className="w-2 h-2 rounded-sm" style={{backgroundColor: '#239a3b'}}></div>
                                <div className="w-2 h-2 rounded-sm" style={{backgroundColor: '#196127'}}></div>
                            </div>
                            <span>많이 활동함</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}