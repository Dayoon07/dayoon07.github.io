import { useState } from 'react';

export default function Projects() {
    document.title = "주요 프로젝트 | 안녕하세요. 강다윤입니다";

    const projectsData = [
        {
            title: "mycloud-project",
            link: "https://github.com/Dayoon07/mycloud-project",
            image: "https://dayoon07.github.io/static-page-test/img/mycloud.png",
            technologies: [
                'Spring Boot',
                'Spring Security',
                'File I/O',
                'Rest API'
            ],
            description: `클라우드를 일부분 구현한 프로젝트입니다. 메일 기능, 엑세스 키 기능을 활용해 다른 사람에게 나의 파일을 공유할 수 있습니다.`,
            demoVideo: 'https://dayoon07.github.io/video/mycloud-test.mp4'
        },
        {
            title: 'springboot-video-platform',
            link: 'https://github.com/Dayoon07/springboot-video-platform',
            image: 'https://Dayoon07.github.io/static-page-test/img/whynot_메인페이지.png',
            technologies: [
                'Rest API', 
                'MyBatis', 
                'Spring Boot', 
                'JPA'
            ],
            description: `springboot-video-platform은 Spring Boot를 기반으로 한 동영상 플랫폼입니다. 주요 기능으로는 업로드 기능, 좋아요 기능, 구독 기능, 시청 기록 기능, 태그, 영상 분석 기능이 있습니다.`,
            demoVideo: 'https://dayoon07.github.io/video/video-platform.mp4'
        },
        {
            title: 'springboot-blog',
            link: 'https://github.com/Dayoon07/springboot-blog',
            image: 'https://Dayoon07.github.io/img/springbootblog.png',
            technologies: [
                'Spring Boot', 
                'JPA', 
                'JSP', 
                'Oracle'
            ],
            description: `블로그 플랫폼으로 주요 기능으로 게시물 작성, 수정, 삭제, 댓글 기능, 좋아요 기능이 있으며 Spring Boot, JPA를 사용해 만들었습니다.`,
            demoVideo: 'https://Dayoon07.github.io/video/springboot-blog-test.mp4'
        },
        {
            title: 'kmcreativeschool',
            link: 'https://github.com/Dayoon07/kmcreativeschool',
            image: 'https://Dayoon07.github.io/img/creativeProject.png',
            technologies: [
                'Spring', 
                'Spring Security', 
                'MyBatis', 
                'SMTP'
            ],
            description: `Spring과 MyBatis 프레임워크를 활용한 학교 폭력 신고 웹입니다. 신고 내용은 SMTP를 통해 전송되며 자신의 신고 내역을 조회할 수 있습니다.`,
            demoVideo: null
        }
    ];

    const [isOpen, setIsOpen] = useState(false);
    const [currentImage, setCurrentImage] = useState(null);

    const openLightbox = (image) => {
        setCurrentImage(image);
        setIsOpen(true);
    };

    const closeLightbox = () => {
        setIsOpen(false);
        setCurrentImage(null);
    };

    return (
        <>
            <h1 className="text-3xl font-bold my-4">주요 프로젝트</h1>

            <div className="space-y-8 mt-5">
                {projectsData.map((project, index) => (
                    <div key={index} className="w-full md:flex">
                        <div>
                            <img 
                                src={project.image} 
                                alt={project.title} 
                                title={project.title} 
                                className="md:w-96 object-cover rounded-md cursor-pointer" 
                                onClick={() => openLightbox(project.image)} 
                            />
                        </div>
                        <div className="w-full md:max-w-md ml-4">
                            <h1 className="text-2xl font-semibold hover:text-blue-500 hover:underline max-md:my-2 md:mb-2">
                                <a href={project.link} target="_blank">{project.title}</a>
                            </h1>
                            <div className="space-x-2">
                                {project.technologies.map((tech, techIndex) => (
                                    <span 
                                        key={techIndex} 
                                        className="px-2 py-1 bg-gray-200 text-gray-700 rounded text-sm"
                                    >
                                        {tech}
                                    </span>
                                ))}
                            </div>
                            <p className="text-md mt-2 max-md:w-full max-md:pr-8">{project.description}</p>
                            {project.demoVideo && (
                                <a href={project.demoVideo} target="_blank"
                                    className="block w-32 text-center px-4 py-2 bg-black text-white font-semibold rounded hover:bg-blue-500 mt-4 cursor-pointer"
                                >
                                    테스트 영상
                                </a>
                            )}
                        </div>
                    </div>
                ))}
            </div>

            {isOpen && (
                <div onClick={closeLightbox} className="z-20 fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center cursor-pointer">
                    <img src={currentImage} alt="lightbox" className="max-lg:w-full lg:w-3/5 shadow-2xl cursor-pointer" />
                </div>
            )}
        </>
    );
}
