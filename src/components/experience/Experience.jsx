import Screen from '../ui/Screen';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import { experienceData } from './experienceData';
import { useLanguage } from '../../i18n/useLanguage';

const GroupTitle = ({ icon, children }) => (
    <h3 className="mb-4 flex items-center gap-2 text-sm font-bold uppercase tracking-[0.15em] text-accent">
        <Icon name={icon} className="size-4" />
        {children}
    </h3>
);

const Experience = ({ state }) => {
    const { lang, t } = useLanguage();
    const { highlighted, work, education } = experienceData[lang];

    return (
        <Screen
            id="experience"
            state={state}
            labelledBy="experience-title"
            innerClassName="grid gap-x-8 gap-y-10 lg:grid-cols-2"
        >
            <SectionHeading
                id="experience-title"
                eyebrow={t.experience.eyebrow}
                mark={t.experience.mark}
                className="mb-0! sm:mb-0! lg:col-span-2"
            />

            <section aria-labelledby="exp-destacada" className="lg:col-span-2">
                <GroupTitle icon="sparkles">
                    <span id="exp-destacada">{t.experience.highlighted}</span>
                </GroupTitle>
                <ol className="space-y-3">
                    {highlighted.map((exp, index) => (
                        <ExperienceItem
                            key={exp.role}
                            {...exp}
                            group="destacada"
                            defaultOpen={index === 0}
                            repoLabel={t.experience.repo}
                        />
                    ))}
                </ol>
            </section>

            <section aria-labelledby="exp-profesional">
                <GroupTitle icon="briefcase">
                    <span id="exp-profesional">{t.experience.work}</span>
                </GroupTitle>
                <ol className="space-y-3">
                    {work.map((exp) => (
                        <ExperienceItem key={exp.company} {...exp} group="profesional" compact />
                    ))}
                </ol>
            </section>

            <section aria-labelledby="exp-formacion">
                <GroupTitle icon="graduation">
                    <span id="exp-formacion">{t.experience.education}</span>
                </GroupTitle>
                <ul className="space-y-3">
                    {education.map((item) => (
                        <EducationItem key={item.title} {...item} />
                    ))}
                </ul>
            </section>
        </Screen>
    );
};

export default Experience;
