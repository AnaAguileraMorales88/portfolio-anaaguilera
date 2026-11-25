import Screen from '../ui/Screen';
import SectionHeading from '../ui/SectionHeading';
import ProjectCard from './ProjectCard';
import { projectsData } from './projectsData';
import { useLanguage } from '../../i18n/useLanguage';

const Projects = ({ state }) => {
    const { lang, t } = useLanguage();

    return (
        <Screen id="projects" state={state} labelledBy="projects-title">
            <SectionHeading id="projects-title" eyebrow={t.projects.eyebrow} mark={t.projects.mark} />

            <ul className="carousel md:mx-0 md:grid md:snap-none md:grid-cols-2 md:gap-4 md:overflow-visible md:px-0 md:pb-0 lg:grid-cols-4">
                {projectsData[lang].map((project, i) => (
                    <li key={project.title} className="reveal md:w-auto md:max-w-none" style={{ '--i': i + 2 }}>
                        <ProjectCard {...project} />
                    </li>
                ))}
            </ul>
        </Screen>
    );
};

export default Projects;
