import { skillsData } from './skillsData';
import SkillCategory from './SkillCategory';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
            <article className="max-w-7xl mx-auto">
                <section className="text-center mb-12">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 inline-block border-b-4 border-purple-600 pb-2">
                        Habilidades
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
                        Tecnologías y herramientas que utilizo para crear experiencias web accesibles, funcionales y estéticamente cuidadas.
                    </p>
                </section>

                <ul className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {skillsData.map((category, index) => (
                        <li key={index}>
                            <SkillCategory 
                                category={category.category} 
                                skills={category.skills} 
                            />
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default Skills;