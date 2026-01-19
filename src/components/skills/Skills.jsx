import { skillsData } from './skillsData';

const Skills = () => {
    return (
        <section id="skills" className="py-20 px-4 bg-white">
            <article className="max-w-4xl mx-auto text-center">
                <section className="mb-12">
                    <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 inline-block border-b-4 border-purple-600 pb-2">
                        Habilidades
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed mt-6">
                        Tecnologías y herramientas que utilizo para crear experiencias web accesibles, funcionales y estéticamente cuidadas.
                    </p>
                </section>

                <ul className="flex flex-wrap justify-center gap-4">
                    {skillsData.map((skill) => (
                        <li key={skill}>
                            <span className="inline-block px-6 py-3 rounded-full border-2 border-purple-200 bg-purple-50 
                                hover:bg-purple-100 hover:border-purple-400 transition-all duration-300 
                                text-sm font-medium text-gray-800 cursor-default">
                                {skill}
                            </span>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default Skills;