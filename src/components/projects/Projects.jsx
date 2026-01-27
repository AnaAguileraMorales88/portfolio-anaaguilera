import ProjectCard from './ProjectCard';
import { projectsData } from './projectsData';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
            <article className="max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 inline-block relative">
                        <span className="relative inline-block pb-2">
                            Proyectos
                            <span className="absolute bottom-0 left-0 h-1 bg-purple-600 animate-[underline_1.5s_ease-out_forwards] w-0 [animation-fill-mode:forwards]"></span>
                        </span>
                    </h2>
                </section>

                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projectsData.map((project, index) => (
                        <li key={index}>
                            <ProjectCard {...project} />
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default Projects;