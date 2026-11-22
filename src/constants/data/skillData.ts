/**
 * 기술 스택 데이터
 * - lines 한 줄 = 같은 종류의 기술 묶음 (언어 / 프레임워크 / ORM / 빌드 / 도구 순)
 * - 로고는 SKILL_ICONS 에서 이름으로 찾는다. 없으면 첫 글자 아이콘으로 대체
 */

export interface SkillGroup {
    category: string;
    lines: string[][];
}

export const SKILL_GROUPS: SkillGroup[] = [
    {
        category: "Backend",
        lines: [
            ["Java", "Kotlin", "Node.js"],
            ["Spring", "Spring Boot", "Spring Security", "Spring Data JPA", "Spring Batch", "Spring AI"],
            ["JPA (Hibernate)", "MyBatis"],
            ["JSP", "JSTL", "Thymeleaf", "Lombok"],
            ["Express", "Socket.IO"],
            ["Gradle", "Maven"],
            ["IntelliJ IDEA", "Eclipse (STS)", "Visual Studio Code", "Postman"]
        ]
    },
    {
        category: "Database",
        lines: [
            ["Oracle", "MariaDB", "SQL Server", "SQLite"],
            ["Redis"],
            ["DBeaver", "SQL Developer"]
        ]
    },
    {
        category: "DevOps",
        lines: [
            ["Docker", "Nginx", "Apache Tomcat"],
            ["GitHub Actions", "Jenkins"],
            ["AWS (EC2, S3)", "Cloudflare"],
            ["WhaTap (APM)", "Prometheus", "Grafana"],
            ["Git", "GitHub", "GitLab"]
        ]
    },
    {
        category: "Frontend",
        lines: [
            ["JavaScript", "TypeScript"],
            ["React", "Next.js", "Vite", "Tailwind CSS", "Bootstrap"],
            ["jQuery"],
            ["npm", "Yarn"]
        ]
    },
    {
        category: "Mobile",
        lines: [
            ["Jetpack Compose"],
            ["Android Studio"]
        ]
    }
];

// Devicon (MIT) — https://devicon.dev
const DEVICON = "https://cdn.jsdelivr.net/gh/devicons/devicon@v2.16.0/icons";
const dev = (path: string) => `${DEVICON}/${path}.svg`;

export const SKILL_ICONS: Record<string, string> = {
    "Java": dev("java/java-original"),
    "Kotlin": dev("kotlin/kotlin-original"),
    "Node.js": dev("nodejs/nodejs-original"),
    "Spring": dev("spring/spring-original"),
    "Spring Boot": dev("spring/spring-original"),
    "Spring Security": dev("spring/spring-original"),
    "Spring Data JPA": dev("spring/spring-original"),
    "Spring Batch": dev("spring/spring-original"),
    "Spring AI": dev("spring/spring-original"),
    "JPA (Hibernate)": dev("hibernate/hibernate-original"),
    "Express": dev("express/express-original"),
    "Socket.IO": dev("socketio/socketio-original"),
    "Gradle": dev("gradle/gradle-original"),
    "Maven": dev("maven/maven-original"),
    "IntelliJ IDEA": dev("intellij/intellij-original"),
    "Eclipse (STS)": dev("eclipse/eclipse-original"),
    "Visual Studio Code": dev("vscode/vscode-original"),
    "Postman": dev("postman/postman-original"),
    "Oracle": dev("oracle/oracle-original"),
    "MariaDB": dev("mariadb/mariadb-original"),
    "SQL Server": dev("microsoftsqlserver/microsoftsqlserver-original"),
    "SQLite": dev("sqlite/sqlite-original"),
    "Redis": dev("redis/redis-original"),
    "DBeaver": dev("dbeaver/dbeaver-original"),
    "SQL Developer": dev("sqldeveloper/sqldeveloper-original"),
    "Docker": dev("docker/docker-original"),
    "Nginx": dev("nginx/nginx-original"),
    "Apache Tomcat": dev("tomcat/tomcat-original"),
    "GitHub Actions": dev("githubactions/githubactions-original"),
    "Jenkins": dev("jenkins/jenkins-original"),
    "AWS (EC2, S3)": dev("amazonwebservices/amazonwebservices-original-wordmark"),
    "Cloudflare": dev("cloudflare/cloudflare-original"),
    "Prometheus": dev("prometheus/prometheus-original"),
    "Grafana": dev("grafana/grafana-original"),
    "Git": dev("git/git-original"),
    "GitHub": dev("github/github-original"),
    "GitLab": dev("gitlab/gitlab-original"),
    "JavaScript": dev("javascript/javascript-original"),
    "TypeScript": dev("typescript/typescript-original"),
    "React": dev("react/react-original"),
    "Next.js": dev("nextjs/nextjs-original"),
    "Vite": dev("vitejs/vitejs-original"),
    "Tailwind CSS": dev("tailwindcss/tailwindcss-original"),
    "Bootstrap": dev("bootstrap/bootstrap-original"),
    "jQuery": dev("jquery/jquery-original"),
    "npm": dev("npm/npm-original-wordmark"),
    "Yarn": dev("yarn/yarn-original"),
    "Jetpack Compose": dev("jetpackcompose/jetpackcompose-original"),
    "Android Studio": dev("androidstudio/androidstudio-original")
};
