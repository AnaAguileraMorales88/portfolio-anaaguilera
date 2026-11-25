const ProjectCard = ({ title, description, tags, githubLink, liveLink }) => (
    <article className="glass flex h-full flex-col p-7 transition-transform duration-300 hover:-translate-y-1">
        <h3 className="mb-3 text-xl font-medium text-fg">{title}</h3>

        <p className="mb-6 flex-1 text-sm leading-relaxed text-muted">{description}</p>

        <ul className="mb-7 flex flex-wrap gap-2" aria-label={`Tecnologías de ${title}`}>
            {tags.map((tag) => (
                <li key={tag} className="chip">
                    {tag}
                </li>
            ))}
        </ul>

        <footer className="flex gap-3">
            <a
                href={githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-ghost flex-1"
                aria-label={`Ver código de ${title} en GitHub`}
            >
                GitHub
            </a>

            {liveLink && (
                <a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-primary flex-1"
                    aria-label={`Ver demo en vivo de ${title}`}
                >
                    Demo
                </a>
            )}
        </footer>
    </article>
);

export default ProjectCard;
