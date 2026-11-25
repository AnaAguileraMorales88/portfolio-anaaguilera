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

            <ul className="grid gap-6 md:grid-cols-2">
                {projectsData[lang].map((project) => (
                    <li key={project.title}>
                        <ProjectCard {...project} />
                    </li>
                ))}
            </ul>
        </Screen>
    );
};

export default Projects;
