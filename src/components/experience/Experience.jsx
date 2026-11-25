import ExperienceItem from './ExperienceItem';
import { experienceData } from './experienceData';
import SectionHeading from '../ui/SectionHeading';

const Experience = () => {
    return (
        <section id="experience" aria-labelledby="experience-title" className="px-5 py-24 sm:px-8">
            <SectionHeading id="experience-title" eyebrow="04 · Trayectoria" title="Experiencia" />

            <ol className="mx-auto max-w-3xl">
                {experienceData.map((exp) => (
                    <ExperienceItem key={exp.role} {...exp} />
                ))}
            </ol>
        </section>
    );
};

export default Experience;
