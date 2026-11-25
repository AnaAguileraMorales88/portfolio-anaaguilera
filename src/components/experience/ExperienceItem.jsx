import Icon from '../ui/Icon';

/** Cada experiencia es un desplegable nativo (<details>): poco y directo, con el detalle a un clic. */
const ExperienceItem = ({ role, company, period, description, defaultOpen }) => (
    <li>
        <details name="experiencia" open={defaultOpen} className="card group overflow-hidden">
            <summary className="flex cursor-pointer list-none items-center gap-4 p-5 sm:p-6 [&::-webkit-details-marker]:hidden">
                <span className="hidden w-32 shrink-0 font-mono text-sm font-bold text-accent sm:block">{period}</span>
                <hgroup className="flex-1">
                    <h3 className="text-lg font-bold text-brand">{role}</h3>
                    <p className="mt-0.5 text-sm text-ink-muted">
                        {company}
                        <span className="font-mono text-accent sm:hidden"> · {period}</span>
                    </p>
                </hgroup>
                <span className="grid size-9 shrink-0 place-items-center rounded-full bg-accent-soft text-accent transition-transform duration-300 group-open:rotate-180">
                    <Icon name="chevron" className="size-4" />
                </span>
            </summary>

            <ul className="space-y-3 border-t border-accent-line/60 px-5 pb-6 pt-5 text-ink-muted sm:pl-[10.5rem] sm:pr-8">
                {description.map((item) => (
                    <li
                        key={item}
                        className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-accent-bright"
                    >
                        {item}
                    </li>
                ))}
            </ul>
        </details>
    </li>
);

export default ExperienceItem;
