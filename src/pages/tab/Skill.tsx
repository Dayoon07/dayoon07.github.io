import { useDocTitle } from '../../hooks/useDocTitle';
import { useAnimation } from '../../hooks/useAnimation';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import AnimatedContainer from '../../components/common/AnimatedContainer';
import { useSkill } from "../../hooks/useSkill";
import { SkillSection } from "../../components/tab/Skill/SkillSection";

export default function Skill() {
    useDocTitle("기술 스택 | 안녕하세요. 강다윤입니다");
    const showItems = useAnimation();
    const { skills, error, loading, init } = useSkill();

    if (loading) return <LoadingSpinner message="기술 스택을 불러오는 중..." />
    if (error) return <ErrorMessage error={error} onRetry={init} />

    return (
        <div className="max-w-6xl mx-auto">
            <AnimatedContainer show={showItems}>
                <h1 className="text-3xl font-bold my-4">기술 스택</h1>
            </AnimatedContainer>

            <div className="space-y-6">
                {skills.map((section, sectionIndex) => (
                    <SkillSection
                        key={section.title || sectionIndex}
                        section={section}
                        sectionIndex={sectionIndex}
                        show={showItems}
                    />
                ))}
            </div>

            {skills.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">표시할 기술 스택이 없습니다.</p>
                </div>
            )}
        </div>
    );
}

// {
//     "title": "운영체제",
//     "items": [
//         {
//             "name": "Android",
//             "badge": "android.svg"
//         },
//         {
//             "name": "Ubuntu",
//             "badge": "ubuntu.svg"
//         },
//         {
//             "name": "Windows",
//             "badge": "windows.svg"
//         }
//     ]
// }