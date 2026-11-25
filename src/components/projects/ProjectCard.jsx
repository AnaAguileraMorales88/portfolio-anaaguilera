import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/useLanguage';

const VISIBLE_TAGS = 6;
const COVERS = [
    'linear-gradient(135deg, #4f46e5, #2b1b68)',
    'linear-gradient(135deg, #6366f1, #3730a3)',
    'linear-gradient(135deg, #a5b4fc, #4338ca)',
];

const ProjectCard = ({ title, description, tags, githubLink, liveLink, index }) => {
    const { t } = useLanguage();
    const visible = tags.slice(0, VISIBLE_TAGS);
    const hidden = tags.slice(VISIBLE_TAGS);

    return (
        <article className="card group flex h-full flex-col overflow-hidden transition-transform duration-300 hover:-translate-y-1">
            <header
                className="relative flex h-32 items-end overflow-hidden p-6"
                style={{ background: COVERS[index % COVERS.length] }}
            >
                <span
                    className="absolute -right-3 -top-6 text-[7rem] font-bold uppercase leading-none text-white/10 transition-transform duration-500 group-hover:scale-110"
                    aria-hidden="true"
                >
                    {title.slice(0, 2)}
                </span>
                <span className="mr-auto font-mono text-sm text-white/70" aria-hidden="true">
                    {String(index + 1).padStart(2, '0')}
                </span>
                <h3 className="relative text-2xl font-bold text-white">{title}</h3>
            </header>

            <p className="flex-1 px-6 pt-6 leading-relaxed text-ink-muted">{description}</p>

            <ul className="flex flex-wrap gap-2 px-6 py-6" aria-label={`${t.projects.tech} ${title}`}>
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

            <footer className="flex gap-3 px-6 pb-6">
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
                {liveLink && (
                    <a
                        href={liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary flex-1"
                        aria-label={`${t.projects.demo} ${title}`}
                    >
                        Demo
                        <Icon name="arrowUpRight" className="size-4" />
                    </a>
                )}
            </footer>
        </article>
    );
};

export default ProjectCard;
