const ExperienceItem = ({ role, company, period, description }) => (
    <li className="relative border-l border-line pb-10 pl-8 last:pb-0 sm:pl-10">
        <span
            className="absolute -left-[5px] top-2 size-[9px] rounded-full bg-accent"
            style={{ boxShadow: '0 0 0 4px var(--color-ink), 0 0 18px var(--color-accent)' }}
            aria-hidden="true"
        ></span>

        <article className="glass p-6 sm:p-7">
            <header className="mb-5">
                <h3 className="text-lg font-medium text-fg">{role}</h3>
                <p className="mt-1 flex flex-wrap items-center gap-x-2 text-sm">
                    <span className="text-accent">{company}</span>
                    <span className="text-subtle" aria-hidden="true">·</span>
                    <time className="text-subtle">{period}</time>
                </p>
            </header>

            <ul className="space-y-3 text-sm leading-relaxed text-muted">
                {description.map((item) => (
                    <li key={item} className="relative pl-5 before:absolute before:left-0 before:top-[0.6em] before:size-1 before:rounded-full before:bg-accent-cool">
                        {item}
                    </li>
                ))}
            </ul>
        </article>
    </li>
);

export default ExperienceItem;
