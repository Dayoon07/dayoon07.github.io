import { CvSection } from '../../components/tab/cv/CvSection';
import { CV_DATA } from '../../constants/data/cvData';
import { useDocTitle } from '../../hooks/useDocTitle';

export default function CV() {
    useDocTitle("활동이력 | 안녕하세요. 강다윤입니다");

    return (
        <div className="md:text-lg md:px-2">
            <h1 className="text-3xl font-bold my-4">활동이력</h1>

            <CvSection title="학력" items={CV_DATA.education} />
            <CvSection title="동아리 활동" items={CV_DATA.clubs} />
            <CvSection title="자격증" items={CV_DATA.certifications} />
            <CvSection title="수상경력" items={CV_DATA.awards} />
            <CvSection title="봉사활동실적" items={CV_DATA.volunteer} />
        </div>
    );
}