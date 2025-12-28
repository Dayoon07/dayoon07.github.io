import { useDocTitle } from '../../hooks/useDocTitle';
import { RECENT_INTERESTS, PROJECT_LINKS } from '../../constants/data/homePageData';
import { InterestCard, SimpleProjectCard } from '../../components/home/Card';

export default function HomePage() {
    useDocTitle("안녕하세요. 강다윤입니다");

    return (
        <>
            <section className="max-w-3xl mb-4">
                <h1 className="text-3xl font-bold my-4">안녕하십니까, 저는</h1>
                <p className="text-gray-700">
                    문제 해결과 협업을 통해 함께 성장하는 개발자가 되고 싶은 강다윤입니다. 
                    프론트엔드와 백엔드 프로젝트를 진행하며 다양한 경험을 쌓았고, 개발 과정에서
                    마주한 문제를 단순히 넘기지 않고 원인을 깊이 분석하고 해결하는 
                    데에서 보람을 느꼈습니다. 팀 프로젝트를 통해 협업의 중요성을 실감했는데, 
                    특히 의견 충돌이 있었던 상황에서 서로의 생각을 조율하며 더 나은 결과를 
                    만들어낸 경험이 기억에 남습니다. 그 과정에서 협업은 단순히 역할을 나누는 
                    것을 넘어, 서로에게 배우고 성장하는 과정이라는 걸 깨달았습니다. 
                    언젠가는 DB 분야로 진출하고 싶으며, 앞으로도 모르는 것을 배우며 
                    끊임없이 성장할 수 있는 모습을 보여드리겠습니다.
                </p>
            </section>

            <section className="max-w-3xl mb-4">
                <h2 className="mt-6 mb-4 text-xl font-bold text-gray-900 dark:text-white border-b pb-2">
                    간단한 프로젝트
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {PROJECT_LINKS.map((project, idx) => (
                        <SimpleProjectCard key={idx} project={project} />
                    ))}
                </div>
            </section>

            <section className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">최근 소식</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                    {RECENT_INTERESTS.map((interest, i) => (
                        <InterestCard key={i} interest={interest} />
                    ))}
                </div>
            </section>
        </>
    );
}