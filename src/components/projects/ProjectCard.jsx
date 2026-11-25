import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/useLanguage';

const VISIBLE_TAGS = 4;

const ProjectLink = ({ href, label, icon, children }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        aria-label={label}
        className="inline-flex items-center gap-1.5 rounded-full px-3 py-1.5 text-sm font-bold text-accent transition-colors hover:bg-accent-soft"
    >
        <Icon name={icon} className="size-4" />
        {children}
        <Icon name="arrowUpRight" className="size-3.5 opacity-60" />
    </a>
);

const ProjectCard = ({ title, description, tags, githubLink, liveLink }) => {
    const { t } = useLanguage();
    const visible = tags.slice(0, VISIBLE_TAGS);
    const hidden = tags.slice(VISIBLE_TAGS);

    return (
        <article className="card card-hover flex h-full flex-col p-5">
            <header className="flex items-center gap-3">
                <span
                    className="card-icon grid size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent"
                    aria-hidden="true"
                >
                    <Icon name="folder" className="size-[18px]" />
                </span>
                <h3 className="text-lg font-bold text-brand">{title}</h3>
            </header>

            <p className="mt-3 flex-1 text-sm leading-relaxed text-ink-muted">{description}</p>

            <ul className="mt-4 flex flex-wrap gap-1.5" aria-label={`${t.projects.tech} ${title}`}>
                {visible.map((tag) => (
                    <li key={tag} className="chip">
                        {tag}
                    </li>
                ))}
                {hidden.length > 0 && (
                    <li className="chip border-dashed" title={hidden.join(', ')}>
                        +{hidden.length}
                        <span className="sr-only">
                            {' '}
                            {t.projects.more}: {hidden.join(', ')}
                        </span>
                    </li>
                )}
            </ul>

            <footer className="-mx-2 mt-4 flex flex-wrap gap-1 border-t border-accent-line/50 pt-3">
                {liveLink && (
                    <ProjectLink href={liveLink} icon="globe" label={`${t.projects.demo} ${title}`}>
                        {t.projects.web}
                    </ProjectLink>
                )}
                {githubLink && (
                    <ProjectLink href={githubLink} icon="github" label={`${t.projects.code} ${title} (GitHub)`}>
                        GitHub
                    </ProjectLink>
                )}
            </footer>
        </article>
    );
};

export default ProjectCard;
