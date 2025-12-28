import { useDocTitle } from '../../hooks/useDocTitle';
import { RECENT_INTERESTS, PROJECT_LINKS, MAIN_INTRO_TEXT } from '../../constants/data/homePageData';
import { InterestCard, SimpleProjectCard } from '../../components/home/Card';

export default function HomePage() {
    useDocTitle("안녕하세요. 강다윤입니다");

    return (
        <>
            <section className="max-w-3xl mb-4">
                <h1 className="text-3xl font-bold my-4">안녕하십니까, 저는</h1>
                <p className="text-gray-700">
                    {MAIN_INTRO_TEXT.V1}
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