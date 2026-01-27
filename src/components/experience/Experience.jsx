import ExperienceItem from './ExperienceItem';
import { experienceData } from './experienceData';

const Experience = () => {
    return (
        <section id="experience" className="py-20 px-4 bg-gradient-to-b from-white to-purple-50">
            <article className="max-w-4xl mx-auto">
                <section className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 inline-block relative">
                        <span className="relative inline-block pb-2">
                            Experencia
                            <span className="absolute bottom-0 left-0 h-1 bg-purple-600 animate-[underline_1.5s_ease-out_forwards] w-0 [animation-fill-mode:forwards]"></span>
                        </span>
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