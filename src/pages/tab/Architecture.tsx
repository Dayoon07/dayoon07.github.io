import { useTranslation } from 'react-i18next';
import { useDocTitle } from '../../hooks/useDocTitle';
import { useLightBox } from '../../hooks/useLightBox';
import { ARCHITECTURE_DATA } from '../../constants/data/architectureData';
import LightBox from '../../components/common/LightBox';
import { ArchitectureCard } from '../../components/tab/architecture/ArchitectureCard';

export default function Architecture() {
    const { t } = useTranslation();
    useDocTitle(`${t("architecture.title")} | ${t("common.siteName")}`);
    const {
        isOpen, currentIndex, openLightbox, closeLightbox, prevSlide, nextSlide, goToSlide
    } = useLightBox(ARCHITECTURE_DATA.length);

    return (
        <div className="max-w-3xl md:px-2 pb-10">
            <h1 className="text-3xl font-bold my-4">{t("architecture.title")}</h1>

            <div className="mt-4">
                {ARCHITECTURE_DATA.map((item, idx) => (
                    <ArchitectureCard key={item.id} item={item} onImageClick={() => openLightbox(idx)} />
                ))}
            </div>

            <LightBox
                isOpen={isOpen}
                currentIndex={currentIndex}
                slides={ARCHITECTURE_DATA.map((item) => ({ src: item.img, alt: t("architecture.erdAlt", { name: t(`architecture.items.${item.id}.title`) }) }))}
                onClose={closeLightbox}
                onPrev={prevSlide}
                onNext={nextSlide}
                showNavigation={true}
                showIndicators={true}
                onIndicatorClick={goToSlide}
            />
        </div>
    );
}
