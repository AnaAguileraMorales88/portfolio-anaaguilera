import Screen from '../ui/Screen';
import SectionHeading from '../ui/SectionHeading';
import SkillCategory from './SkillCategory';
import { skillsData } from './skillsData';
import { useLanguage } from '../../i18n/useLanguage';

const Skills = ({ state }) => {
    const { lang, t } = useLanguage();

    return (
        <Screen id="skills" state={state} labelledBy="skills-title">
            <SectionHeading id="skills-title" eyebrow={t.skills.eyebrow} mark={t.skills.mark} hideIntroOnShortScreens>
                {t.skills.intro}
            </SectionHeading>

            <ul className="carousel md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
                {skillsData[lang].map((category, i) => (
                    <li key={category.icon} className="reveal md:w-auto md:max-w-none" style={{ '--i': i + 3 }}>
                        <SkillCategory {...category} />
                    </li>
                ))}
            </ul>
        </Screen>
    );
};

export default Skills;
