import Icon from '../ui/Icon';

/**
 * Cada experiencia es un desplegable nativo (<details>): poco y directo, con el detalle a un clic.
 * Los de un mismo grupo comparten "name", así al abrir uno se cierra el anterior.
 */
const ExperienceItem = ({
    role,
    company,
    period,
    description,
    group,
    defaultOpen = false,
    compact = false,
    repoLabel,
}) => (
    <li>
        <details name={`experiencia-${group}`} open={defaultOpen} className="card group overflow-hidden">
            <summary className="flex cursor-pointer list-none items-center gap-4 p-5 [&::-webkit-details-marker]:hidden">
                {!compact && (
                    <span className="hidden w-28 shrink-0 font-mono text-sm font-bold text-accent sm:block">
                        {period}
                    </span>
                )}
                <hgroup className="flex-1">
                    <h4 className="font-bold text-brand sm:text-lg">{role}</h4>
                    <p className="mt-0.5 text-sm text-ink-muted">
                        {company}
                        <span className={`font-mono text-accent ${compact ? '' : 'sm:hidden'}`}> · {period}</span>
                    </p>
                </hgroup>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-open:rotate-180">
                    <Icon name="chevron" className="size-4" />
                </span>
            </summary>

            <ul
                className={`space-y-2.5 border-t border-accent-line/60 px-5 pb-5 pt-4 text-ink-muted ${
                    compact ? '' : 'sm:pl-[9.5rem] sm:pr-8'
                }`}
            >
                {description.map((item) => {
                    const text = typeof item === 'string' ? item : item.text;
                    const link = typeof item === 'string' ? null : item.link;
                    return (
                        <li
                            key={text}
                            className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-accent-bright"
                        >
                            {text}
                            {link && (
                                <>
                                    {' '}
                                    <a
                                        href={link}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="inline-flex items-center gap-1 font-bold text-accent underline underline-offset-4 hover:text-accent-strong"
                                    >
                                        <Icon name="github" className="size-3.5" />
                                        {repoLabel}
                                    </a>
                                </>
                            )}
                        </li>
                    );
                })}
            </ul>
        </details>
    </li>
);

export default ExperienceItem;
