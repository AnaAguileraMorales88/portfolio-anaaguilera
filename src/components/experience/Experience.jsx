import Screen from '../ui/Screen';
import SectionHeading from '../ui/SectionHeading';
import ExperienceItem from './ExperienceItem';
import { experienceData } from './experienceData';
import { useLanguage } from '../../i18n/useLanguage';

const Experience = ({ state }) => {
    const { lang, t } = useLanguage();

    return (
        <Screen
            id="experience"
            state={state}
            labelledBy="experience-title"
            innerClassName="grid gap-4 lg:grid-cols-[1fr_1.7fr] lg:gap-16"
        >
            <SectionHeading
                id="experience-title"
                eyebrow={t.experience.eyebrow}
                mark={t.experience.mark}
                align="start"
            />

            <ol className="space-y-4">
                {experienceData[lang].map((exp, index) => (
                    <ExperienceItem key={exp.period + index} {...exp} defaultOpen={index === 0} />
                ))}
            </ol>
        </Screen>
    );
};

export default Experience;
