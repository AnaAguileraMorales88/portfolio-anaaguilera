import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/useLanguage';

const VISIBLE_TAGS = 6;

const ProjectCard = ({ title, description, tags, githubLink, liveLink }) => {
    const { t } = useLanguage();
    const visible = tags.slice(0, VISIBLE_TAGS);
    const hidden = tags.slice(VISIBLE_TAGS);

    return (
        <article className="card flex h-full flex-col p-6 sm:p-7">
            <header className="flex items-center gap-3">
                <span
                    className="grid size-11 shrink-0 place-items-center rounded-xl bg-accent-soft text-accent"
                    aria-hidden="true"
                >
                    <Icon name="folder" />
                </span>
                <h3 className="text-xl font-bold text-brand">{title}</h3>
            </header>

            <p className="mt-4 flex-1 leading-relaxed text-ink-muted">{description}</p>

            <ul className="mt-5 flex flex-wrap gap-2" aria-label={`${t.projects.tech} ${title}`}>
                {visible.map((tag) => (
                    <li key={tag} className="chip">
                        {tag}
                    </li>
                ))}
                {hidden.length > 0 && (
                    <li className="chip bg-surface ring-1 ring-accent-line" title={hidden.join(', ')}>
                        +{hidden.length} {t.projects.more}
                        <span className="sr-only">: {hidden.join(', ')}</span>
                    </li>
                )}
            </ul>

            <footer className="mt-6 flex gap-3">
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1"
                        aria-label={`${t.projects.demo} ${title}`}
                    >
                        <Icon name="globe" className="size-4" />
                        {t.projects.web}
                    </a>
                )}
                {githubLink && (
                    <a
                        href={githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-secondary flex-1"
                        aria-label={`${t.projects.code} ${title} (GitHub)`}
                    >
                        <Icon name="github" className="size-4" />
                        GitHub
                    </a>
                )}
            </footer>
        </article>
    );
};

export default ProjectCard;
