import Screen from '../ui/Screen';
import SectionHeading from '../ui/SectionHeading';
import SkillCategory from './SkillCategory';
import { skillsData } from './skillsData';
import { useLanguage } from '../../i18n/useLanguage';

const Skills = ({ state }) => {
    const { lang, t } = useLanguage();

    return (
        <Screen id="skills" state={state} labelledBy="skills-title">
            <SectionHeading id="skills-title" eyebrow={t.skills.eyebrow} mark={t.skills.mark}>
                {t.skills.intro}
            </SectionHeading>

            <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                {skillsData[lang].map((category) => (
                    <li key={category.icon}>
                        <SkillCategory {...category} />
                    </li>
                ))}
            </ul>
        </Screen>
    );
};

export default Skills;
