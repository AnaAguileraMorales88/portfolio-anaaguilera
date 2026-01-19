import ExperienceItem from './ExperienceItem';
import { experienceData } from './experienceData';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
            <article className="max-w-4xl mx-auto">
                <section className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 inline-block border-b-4 border-purple-600 pb-2">
                        Experiencia
                    </h2>
                </section>

                <ol className="max-w-3xl mx-auto">
                    {experienceData.map((exp, index) => (
                        <ExperienceItem key={index} {...exp} />
                    ))}
                </ol>
            </article>
        </section>
    );
};

export default Experience;