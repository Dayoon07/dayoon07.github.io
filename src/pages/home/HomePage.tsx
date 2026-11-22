import { useTranslation } from 'react-i18next';
import { useDocTitle } from '../../hooks/useDocTitle';
import { RECENT_INTERESTS, PROJECT_LINKS } from '../../constants/data/homePageData';
import { InterestCard, SimpleProjectCard } from '../../components/home/Card';

export default function HomePage() {
    const { t } = useTranslation();
    useDocTitle(t("common.siteName"));

    return (
        <>
            <section className="max-w-3xl mb-4">
                <h1 className="text-3xl font-bold my-4">{t("home.heading")}</h1>
                <p className="text-gray-700">
                    {t("home.intro")}
                </p>
            </section>

            <section className="max-w-3xl mb-4">
                <h2 className="mt-6 mb-4 text-xl font-bold text-gray-900 dark:text-white border-b pb-2">
                    {t("home.simpleProjects")}
                </h2>
                <div className="grid gap-4 sm:grid-cols-2">
                    {PROJECT_LINKS.map((project) => (
                        <SimpleProjectCard key={project.id} project={project} />
                    ))}
                </div>
            </section>

            <section className="mt-6 max-w-3xl">
                <h2 className="text-2xl font-bold mb-4 text-gray-800 border-b pb-2">{t("home.news")}</h2>
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-4">
                    {RECENT_INTERESTS.map((interest) => (
                        <InterestCard key={interest.id} interest={interest} />
                    ))}
                </div>
            </section>
        </>
    );
}