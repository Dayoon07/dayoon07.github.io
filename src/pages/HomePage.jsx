import React, { useState, useEffect, useMemo, useCallback } from "react";

// Constants
const GITHUB_USERNAME = "dayoon07";
const GITHUB_TOKEN = process.env.REACT_APP_GITHUB_ASDF_TOKEN;
const TO_YEAR = new Date().getFullYear();

const MONTHS = ['01월', '02월', '03월', '04월', '05월', '06월', '07월', '08월', '09월', '10월', '11월', '12월'];
const DAYS = ['', '월요일', '', '수요일', '', '금요일', ''];

const RECENT_INTERESTS = [
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

const PROJECT_LINKS = [
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

const getDayIndex = (dateStr) => {
    const date = new Date(dateStr);
    const start = new Date(`${TO_YEAR}-01-01`);
    const diff = Math.floor((date - start) / (1000 * 60 * 60 * 24));
    return diff >= 0 && diff < 365 ? diff : -1;
};

const getColor = (count) => {
    if (count === 0) return "#ebedf0";
    if (count < 2) return "#c6e48b";
    if (count < 4) return "#7bc96f";
    if (count < 6) return "#239a3b";
    return "#196127";
};

const COLOR_SCALE = [
    { color: '#ebedf0', label: '활동 안 함' },
    { color: '#c6e48b', label: '' },
    { color: '#7bc96f', label: '' },
    { color: '#239a3b', label: '' },
    { color: '#196127', label: '많이 활동함' }
];

const ERROR_MESSAGES = {
    NO_TOKEN: 'GitHub Personal Access Token이 설정되지 않았습니다. .env 파일을 확인해주세요.',
    INVALID_TOKEN: 'GitHub Personal Access Token이 유효하지 않습니다. 새로운 토큰을 생성해주세요.',
    GRAPHQL_ACCESS: 'GitHub Personal Access Token이 GraphQL API 접근 권한이 없습니다. 토큰을 새로 생성하고 적절한 권한을 부여해주세요.',
    USER_NOT_FOUND: '사용자를 찾을 수 없습니다.'
};

const GITHUB_API_CONFIG = {
    userEndpoint: 'https://api.github.com/user',
    rateLimitEndpoint: 'https://api.github.com/rate_limit',
    graphqlEndpoint: 'https://api.github.com/graphql',
    headers: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Accept': 'application/vnd.github.v3+json',
        'User-Agent': 'GitHub-Profile-App'
    },
    graphqlHeaders: {
        'Authorization': `token ${GITHUB_TOKEN}`,
        'Content-Type': 'application/json',
        'Accept': 'application/vnd.github.v4+json',
        'User-Agent': 'GitHub-Contribution-Graph'
    }
};

const CONTRIBUTION_QUERY = `
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

const LoadingSpinner = () => (
    <div className="flex items-center space-x-2">
        <div className="animate-pulse bg-gray-200 h-4 w-32 rounded"></div>
    </div>
);

const TokenStatus = ({ status }) => {
    const statusConfig = {
        valid: { color: 'text-green-600', message: '토큰 유효 - GraphQL API 준비됨' },
        invalid: { color: 'text-red-600', message: '토큰 무효' },
        missing: { color: 'text-orange-600', message: '토큰 없음' },
        checking: { color: 'text-yellow-600', message: '토큰 확인 중...' }
    };

    const config = statusConfig[status] || statusConfig.checking;

    return (
        <div className={`text-sm font-medium ${config.color}`}>
            {config.message}
        </div>
    );
};

const ErrorDisplay = ({ error }) => (
    <div className="bg-red-50 border border-red-200 rounded-lg p-4">
        <p className="text-red-700 font-medium">오류 발생</p>
        <p className="text-red-600 mt-1">{error}</p>
        <div className="mt-3 text-sm text-red-600">
            <p><strong>해결 단계:</strong></p>
            <ol className="list-decimal list-inside mt-2 space-y-1">
                <li>GitHub → Settings → Developer settings → Personal access tokens</li>
                <li>기존 토큰 삭제</li>
                <li>새 토큰 생성 시 다음 권한 체크:
                    <ul className="list-disc list-inside ml-4 mt-1">
                        <li><code>read:user</code></li>
                        <li><code>user:email</code></li>
                        <li><code>public_repo</code></li>
                    </ul>
                </li>
                <li>.env 파일의 <code>REACT_APP_GITHUB_ASDF_TOKEN</code>에 새 토큰 설정</li>
                <li>개발 서버 재시작</li>
            </ol>
        </div>
    </div>
);

const ProjectCard = ({ project }) => (
    <div className="dark:bg-gray-800 rounded-xl shadow hover:shadow-md transition p-4 border hover:border-[#52ADC8]">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-white hover:underline">
            <a href={project.repo} target="_blank" rel="noopener noreferrer">
                {project.name}
            </a>
        </h3>
        {project.note && (
            <p className="text-sm text-gray-600 dark:text-gray-400 mt-1">{project.note}</p>
        )}
        <p className="text-gray-500 dark:text-gray-400 mt-2 text-sm hover:underline">
            <a href={project.url} target="_blank" rel="noopener noreferrer">
                {project.url}
            </a>
        </p>
    </div>
);

const InterestCard = ({ interest }) => (
    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
        <div className="flex items-center mb-2">
            <h3 className="text-lg font-semibold text-gray-800">{interest.title}</h3>
        </div>
        <p className="text-gray-600">{interest.content}</p>
    </div>
);

const ContributionLegend = () => (
    <div className="flex items-center space-x-2 text-xs text-gray-500" style={{ marginTop: "16px" }}>
        <span>{COLOR_SCALE[0].label}</span>
        <div className="flex space-x-1">
            {COLOR_SCALE.map((item, index) => (
                <div 
                    key={index}
                    className="w-2 h-2 rounded-sm" 
                    style={{ backgroundColor: item.color }}
                />
            ))}
        </div>
        <span>{COLOR_SCALE[COLOR_SCALE.length - 1].label}</span>
    </div>
);

export default function HomePage() {
    useEffect(() => {
        document.title = "안녕하세요. 강다윤입니다";
    }, []);

    const [activity, setActivity] = useState(() => Array(365).fill(0));
    const [isDataLoaded, setIsDataLoaded] = useState(false);
    const [error, setError] = useState(null);
    const [tokenStatus, setTokenStatus] = useState('checking');

    const validateToken = useCallback(async () => {
        if (!GITHUB_TOKEN) {
            return { isValid: false, error: ERROR_MESSAGES.NO_TOKEN };
        }

        try {
            const userResponse = await fetch(GITHUB_API_CONFIG.userEndpoint, {
                headers: GITHUB_API_CONFIG.headers
            });

            if (userResponse.ok) {
                return { isValid: true };
            } else {
                return { isValid: false, error: ERROR_MESSAGES.INVALID_TOKEN };
            }
        } catch (err) {
            return { isValid: false, error: `토큰 검증 중 오류: ${err.message}` };
        }
    }, []);

    const fetchContributionData = useCallback(async () => {
        const tokenValidation = await validateToken();
        if (!tokenValidation.isValid) {
            setError(tokenValidation.error);
            setIsDataLoaded(true);
            setTokenStatus(GITHUB_TOKEN ? 'invalid' : 'missing');
            return;
        }

        setTokenStatus('valid');

        try {
            const variables = {
                username: GITHUB_USERNAME,
                from: `${TO_YEAR}-01-01T00:00:00Z`,
                to: `${TO_YEAR}-12-31T23:59:59Z`
            };

            const response = await fetch(GITHUB_API_CONFIG.graphqlEndpoint, {
                method: 'POST',
                headers: GITHUB_API_CONFIG.graphqlHeaders,
                body: JSON.stringify({ 
                    query: CONTRIBUTION_QUERY, 
                    variables 
                })
            });

            if (!response.ok) {
                if (response.status === 401) {
                    throw new Error(ERROR_MESSAGES.GRAPHQL_ACCESS);
                }
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const data = await response.json();

            if (data.errors) {
                throw new Error(`GraphQL Error: ${data.errors[0].message}`);
            }

            const user = data.data?.user;
            if (!user) {
                throw new Error(ERROR_MESSAGES.USER_NOT_FOUND);
            }

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
            setError(err.message);
            setIsDataLoaded(true);
        }
    }, [validateToken]);

    useEffect(() => {
        fetchContributionData();
    }, [fetchContributionData]);

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

    const dayLabels = useMemo(() => {
        return DAYS.map((day, i) => (
            <text key={i} x={-32.5} y={i * 12 + 8} fontSize="9" fill="#666">
                {day}
            </text>
        ));
    }, []);

    const contributionGrid = useMemo(() => {
        const squares = [];
        const startDate = new Date(TO_YEAR, 0, 1);
        const startDayOfWeek = startDate.getDay();
        const totalWeeks = Math.ceil((startDayOfWeek + 365) / 7);
        
        for (let week = 0; week < totalWeeks; week++) {
            for (let dayOfWeek = 0; dayOfWeek < 7; dayOfWeek++) {
                const key = `${week}-${dayOfWeek}`;
                
                if (week === 0 && dayOfWeek < startDayOfWeek) {
                    squares.push(
                        <rect 
                            key={`empty-${key}`}
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
                        <rect key={`day-${daysSinceStart}`} x={week * 12} y={dayOfWeek * 12} 
                            width="10" height="10" fill={getColor(count)} rx="2"
                            className="hover:stroke-gray-400 hover:stroke-1 cursor-pointer"
                            title={`${dateStr}: ${count} contributions`}
                        />
                    );
                }
            }
        }
        return squares;
    }, [activity]);

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

    const svgWidth = useMemo(() => {
        return Math.ceil((new Date(TO_YEAR, 0, 1).getDay() + 365) / 7) * 12 + 60;
    }, []);

    return (
        <div className="md:pb-20">
            <section className="max-w-3xl mb-4">
                <h1 className="text-3xl font-bold my-4">안녕하십니까, 저는</h1>
                <p className="text-gray-700">
                    언젠가는 DB 분야로 진출하고 싶은 강다윤입니다. 저는 프론트엔드와 백엔드 프로젝트를 진행하며 
                    다양한 경험을 쌓았습니다. 그 과정에서 발생한 에러의 원인을 분석하고 해결하는 과정도 직접 겪으며, 
                    이를 통해 실력을 더욱 키울 수 있었습니다. 앞으로도 모르는 것을 배우며 끊임없이 
                    성장하는 개발자가 되겠습니다.
                </p>
            </section>

            <section className="max-w-3xl mb-4">
                <h2 className="mt-6 mb-4 text-xl font-bold text-gray-900 dark:text-white border-b pb-2">
                    간단한 프로젝트
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {PROJECT_LINKS.map((project, idx) => (
                        <ProjectCard key={idx} project={project} />
                    ))}
                </div>
            </section>

            <section className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">최근 소식</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
                    {RECENT_INTERESTS.map((interest, i) => (
                        <InterestCard key={i} interest={interest} />
                    ))}
                </div>
            </section>

            <section className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">Github 활동 내역</h2>
                
                <div>
                    <div className="flex items-center justify-between mb-4">
                        <div className="text-sm text-gray-600 font-medium">
                            {isDataLoaded ? (
                                `${TO_YEAR}년의 기여도 : ${stats.totalContributions}`
                            ) : (
                                <LoadingSpinner />
                            )}
                        </div>
                        <TokenStatus status={tokenStatus} />
                    </div>
                    
                    <div className="overflow-x-auto">
                        {error ? (
                            <ErrorDisplay error={error} />
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

                    <ContributionLegend />
                </div>
            </section>
        </div>
    );
}