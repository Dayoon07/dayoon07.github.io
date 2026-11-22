import type ko from "./ko";
import type { Messages } from "../types";

/** English translation — must have exactly the same keys as ko.ts */
const en: Messages<typeof ko> = {
    common: {
        siteName: "Dayoon Kang",
        viewLarger: "View larger",
        viewLargerOf: "View larger image of {{name}}",
        language: "Select language"
    },

    profile: {
        region: "Profile",
        name: "Dayoon Kang",
        nameAlt: "(강다윤)",
        photoAlt: "Profile photo",
        toggle: "Profile",
        toggleLabel: "Toggle profile details",
        detailTitle: "Profile details",
        location: "Anyang, Gyeonggi-do, Korea",
        school: "Geunmyeong High School",
        emailLabel: "Send an email",
        githubLabel: "View GitHub profile"
    },

    home: {
        heading: "Hello, I'm Dayoon Kang",
        intro: `I want to be a developer who grows together with others through problem-solving and collaboration.
            Working on both frontend and backend projects, I've built up a range of experience, and I find it
            rewarding to dig into the root cause of the problems I run into instead of just working around them.
            Team projects showed me how much collaboration matters. What stays with me most is a time when we
            disagreed and, by reconciling our ideas, ended up with a better result. It taught me that
            collaboration is more than splitting up roles; it's how we learn from each other and grow.
            Someday I'd like to move into the database field, and I'll keep learning what I don't yet know.`,
        simpleProjects: "Small projects",
        news: "Recent updates",
        links: {
            limeet: "Limeet (PWA)",
            weather: "Weather API service",
            webcam: "Mobile webcam web app",
            school: "School information search"
        },
        interests: {
            desktop: {
                title: "Desktop applications",
                content: "Learning GUI programming with C# and WPF (Windows Presentation Foundation)."
            },
            devops: {
                title: "Studying DevOps",
                content: `Learning to build CI/CD pipelines with GitHub Actions, writing workflows
                    to automate continuous builds and deployments.`
            }
        }
    },

    skill: {
        title: "Skills"
    },

    project: {
        title: "Projects",
        role: "Role",
        demoVideo: "Demo video",
        team: { solo: "Solo", team: "Team" },
        items: {
            shortform: {
                description: `A short-form video platform. The Kotlin/Spring Boot server and the React/TypeScript
                    client live in a single monorepo. Features include follows, a swipeable video feed,
                    community posts, and comments with replies.`,
                highlights: []
            },
            "movie-ticket": {
                description: `A web version of a movie theater ticketing kiosk. The frontend is a React SPA and
                    the backend is a separate Spring Boot REST API server, with movie recommendations
                    built on Spring AI and Ollama.`,
                highlights: []
            },
            "mycloud-project": {
                description: `A cloud service for uploading and sharing files.
                    Files can be shared with other users by email or with an access key.`,
                highlights: []
            },
            "springboot-video-platform": {
                description: `A mobile web video platform with uploads, likes, subscriptions,
                    watch history, tags, and video analytics.`,
                highlights: []
            },
            "springboot-blog": {
                description: "A blog platform with creating, editing, and deleting posts, comments, likes, and file uploads.",
                highlights: []
            },
            kmcreativeschool: {
                description: `A web service for reporting school violence. Reports are delivered by SMTP email,
                    and reporters can look up their own report history.`,
                role: "Inquiry feature (CRUD), police account management, inquiry/police table design",
                highlights: []
            }
        }
    },

    architecture: {
        title: "Database Design",
        erdAlt: "{{name}} ERD",
        viewLargerOf: "View larger ERD of {{name}}",
        items: {
            shortform: {
                title: "Short-form platform",
                description: `ERD for the short-form video platform I started in the summer of my last year of high school.
                    With this many tables the column names are hard to read in the image, so the full schema is also available as text.`,
                linkLabel: "View schema as text",
                points: []
            },
            movieTicket: {
                title: "Movie ticketing kiosk",
                description: `ERD for a movie ticketing service, designed for a third-year project in a government program
                    that trains high school students for emerging industries.`,
                points: []
            },
            mycloud: {
                title: "My Cloud",
                description: "ERD for a cloud service for uploading and sharing files, designed over about two days.",
                points: []
            },
            videoPlatform: {
                title: "Whynot video platform",
                description: "ERD for a video platform, designed over about three months alongside the application itself.",
                points: []
            },
            blog: {
                title: "Spring Boot blog",
                description: `ERD for a blog platform, designed over about a month alongside development.
                    Basic CRUD and file I/O were implemented on top of it.`,
                points: []
            },
            creativeSchool: {
                title: "Gyeonggi Content Creative School project",
                description: `ERD for a team project at Gyeonggi Content Creative School.
                    I designed the police station and inquiry tables and implemented their CRUD.`,
                points: []
            }
        }
    },

    cv: {
        title: "Experience & Activities",
        present: "Present",
        sections: {
            work: "Work Experience",
            education: "Education",
            certifications: "Certifications",
            awards: "Awards",
            clubs: "Club Activities"
        },
        experience: {
            imtsoft: {
                company: "IMTSoft",
                role: "Software Developer · Full-time",
                works: {
                    esl: {
                        title: "ESL (Electronic Shelf Label) integration server",
                        summary: "Developed an improved UI for AIMS and a proxy server.",
                        details: []
                    },
                    signage: {
                        title: "Digital signage",
                        summary: "Developed and operated the company's in-house digital signage solution.",
                        details: []
                    },
                    asp: {
                        title: "ASP server management · System operations",
                        summary: "Managing ASP (Application Service Provider) servers and operating service systems.",
                        details: []
                    }
                }
            }
        },
        items: {
            geunmyeongHigh: { title: "Geunmyeong High School", subtitle: "Graduated" },
            gwanyangMiddle: { title: "Gwanyang Middle School", subtitle: "Graduated" },
            gwanyangElementary: { title: "Gwanyang Elementary School", subtitle: "Graduated" },

            engineerInfoProcessing: { title: "Industrial Engineer Information Processing", subtitle: "Course-based qualification" },
            craftsmanInfoProcessing: { title: "Craftsman Information Processing" },
            craftsmanWebDesign: { title: "Craftsman Web Design" },
            computerSpecialist2: { title: "Computer Specialist in Spreadsheet & Database, Level 2" },
            gtqPhotoshop2: { title: "GTQ Photoshop, Level 2" },

            skillsAward: { title: "Skills Award, Gold", subtitle: "1st place" },
            algorithmContest: { title: "School Algorithm Contest, Excellence Award", subtitle: "2nd place" },
            infographicContest: { title: "School Infographic Contest, Excellence Award", subtitle: "3rd place" },
            spreadsheetContest: { title: "School Spreadsheet Functions Contest, Honorable Mention", subtitle: "3rd place" },
            attendance2: { title: "Perfect Attendance Award", subtitle: "2nd year" },
            creativeSchoolContest: { title: "Gyeonggi Content Creative School Competition", subtitle: "Grand Prize" },
            attendance1: { title: "Perfect Attendance Award", subtitle: "1st year" },

            smartCodingClub: { title: "Smart Coding Club" },
            digitalContentClub: { title: "Digital Content Production Club" }
        }
    },

    portfolio: {
        title: "Portfolio"
    },

    sitemap: {
        title: "Sitemap"
    },

    notFound: {
        titleLine1: "Sorry, we couldn't find",
        titleLine2: "the page you requested.",
        home: "Back to home",
        sitemap: "Sitemap"
    },

    lightbox: {
        prev: "Previous image",
        next: "Next image",
        close: "Close lightbox",
        goTo: "Go to image {{n}}",
        fallbackAlt: "Lightbox image"
    }
};

export default en;
