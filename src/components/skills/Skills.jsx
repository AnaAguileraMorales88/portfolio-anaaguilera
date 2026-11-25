import { skillsData } from './skillsData';
import SkillCategory from './SkillCategory';
import SectionHeading from '../ui/SectionHeading';

const Skills = () => {
    return (
        <section id="skills" aria-labelledby="skills-title" className="px-5 py-24 sm:px-8">
            <SectionHeading id="skills-title" eyebrow="02 · Stack" title="Habilidades">
                Tecnologías y herramientas que utilizo para crear experiencias web accesibles, funcionales y estéticamente cuidadas.
            </SectionHeading>

            <ul className="mx-auto grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {skillsData.map(({ category, skills }) => (
                    <li key={category}>
                        <SkillCategory category={category} skills={skills} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Skills;
