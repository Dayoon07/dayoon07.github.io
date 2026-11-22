import { useTranslation } from 'react-i18next';
import { Timeline, TimelineItem, TimelineSection } from '../../components/tab/cv/CvTimeline';
import { AwardIcon, CertificateIcon, ClubIcon, EducationIcon, WorkIcon } from '../../components/tab/cv/CvIcons';
import { WorkList } from '../../components/tab/cv/WorkList';
import { CV_DATA } from '../../constants/data/cvData';
import { EXPERIENCES } from '../../constants/data/experienceData';
import { useDocTitle } from '../../hooks/useDocTitle';
import { tList } from '../../i18n/tList';

/** 날짜 + 이름 목록형 CV 데이터 섹션 */
const SECTIONS = [
    { key: "education", icon: <EducationIcon />, items: CV_DATA.education },
    { key: "certifications", icon: <CertificateIcon />, items: CV_DATA.certifications },
    { key: "awards", icon: <AwardIcon />, items: CV_DATA.awards },
    { key: "clubs", icon: <ClubIcon />, items: CV_DATA.clubs }
] as const;

export default function CV() {
    const { t, i18n } = useTranslation();
    useDocTitle(`${t("cv.title")} | ${t("common.siteName")}`);

    return (
        <div className="md:px-2 pb-10">
            <h1 className="text-3xl font-bold my-4 mb-8">{t("cv.title")}</h1>

            <Timeline>
                <TimelineSection title={t("cv.sections.work")} icon={<WorkIcon />}>
                    {EXPERIENCES.map((exp) => {
                        const base = `cv.experience.${exp.id}`;
                        const works = exp.works.map((w) => ({
                            title: t(`${base}.works.${w}.title`),
                            summary: t(`${base}.works.${w}.summary`),
                            details: tList(t, `${base}.works.${w}.details`)
                        }));

                        return (
                            <TimelineItem key={exp.id}
                                date={`${exp.start} ~ ${exp.end ?? t("cv.present")}`}
                                title={t(`${base}.company`)}
                                subtitle={t(`${base}.role`)}
                            >
                                <WorkList works={works} showDetails />
                            </TimelineItem>
                        );
                    })}
                </TimelineSection>

                {SECTIONS.map((section) => (
                    <TimelineSection key={section.key} title={t(`cv.sections.${section.key}`)} icon={section.icon}>
                        {section.items.map((item) => (
                            <TimelineItem key={item.id}
                                date={item.date}
                                title={t(`cv.items.${item.id}.title`)}
                                subtitle={i18n.exists(`cv.items.${item.id}.subtitle`) ? t(`cv.items.${item.id}.subtitle`) : undefined}
                            />
                        ))}
                    </TimelineSection>
                ))}
            </Timeline>
        </div>
    );
}
