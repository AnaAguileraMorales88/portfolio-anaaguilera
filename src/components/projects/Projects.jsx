import ProjectCard from './ProjectCard';
import { projectsData } from './projectsData';

const Projects = () => {
    return (
        <section id="projects" className="py-20 px-4 bg-gradient-to-b from-purple-50 to-white">
            <article className="max-w-7xl mx-auto">
                <section className="text-center mb-16">
                    <h2 className="text-4xl sm:text-4xl font-bold text-gray-900 inline-block border-b-4 border-purple-600 pb-2">
                        Proyectos
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