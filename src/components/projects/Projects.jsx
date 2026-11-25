import ProjectCard from './ProjectCard';
import { projectsData } from './projectsData';
import SectionHeading from '../ui/SectionHeading';

const Projects = () => {
    return (
        <section id="projects" aria-labelledby="projects-title" className="px-5 py-24 sm:px-8">
            <SectionHeading id="projects-title" eyebrow="03 · Trabajo" title="Proyectos" />

            <ul className="mx-auto grid max-w-6xl gap-6 md:grid-cols-2 lg:grid-cols-3">
                {projectsData.map((project) => (
                    <li key={project.title}>
                        <ProjectCard {...project} />
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default Projects;
