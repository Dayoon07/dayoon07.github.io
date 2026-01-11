import { useDocTitle } from '../../hooks/useDocTitle';
import { useAnimation } from '../../hooks/useAnimation';
import LoadingSpinner from '../../components/common/LoadingSpinner';
import ErrorMessage from '../../components/common/ErrorMessage';
import AnimatedContainer from '../../components/common/AnimatedContainer';
import { useNewSkillIcon } from "../../hooks/useNewSkillIcon";
import { SkillIcon } from '../../components/etc/SkillIcon';

export default function Skill() {
    useDocTitle("기술 스택 | 안녕하세요. 강다윤입니다");
    const { skills, error, loading, init } = useNewSkillIcon();
    const showItems = useAnimation();

    if (loading) return <LoadingSpinner message="기술 스택을 불러오는 중..." />
    if (error) return <ErrorMessage error={error} onRetry={init} />

    return (
        <div className="max-w-3xl pb-10">
            <AnimatedContainer show={showItems}>
                <h1 className="text-3xl font-bold my-4">기술 스택</h1>
            </AnimatedContainer>

            <AnimatedContainer show={showItems} delay={150}>
                <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 gap-6">
                    {skills.map((skill, index) => (
                        <SkillIcon
                            key={skill.icon}
                            skill={skill}
                            index={index}
                            show={showItems}
                        />
                    ))}
                </div>
            </AnimatedContainer>

            {skills.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500 text-lg">표시할 기술 스택이 없습니다.</p>
                </div>
            )}
        </div>
    );
}