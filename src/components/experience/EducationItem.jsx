import Icon from '../ui/Icon';

const EducationItem = ({ title, details, description }) => (
    <li>
        <article className="card card-hover flex h-full gap-3 px-4 py-3 sm:p-5">
            <span
                className="card-icon hidden size-9 shrink-0 place-items-center rounded-lg bg-accent-soft text-accent sm:grid"
                aria-hidden="true"
            >
                <Icon name="graduation" className="size-[18px]" />
            </span>
            <hgroup>
                <h3 className="text-sm font-bold leading-snug text-brand sm:text-base">{title}</h3>
                {details && <p className="mt-1 font-mono text-xs text-accent sm:text-sm">{details}</p>}
                {description && (
                    <p className="mt-1.5 text-xs leading-relaxed text-ink-muted sm:text-sm">{description}</p>
                )}
            </hgroup>
        </article>
    </li>
);

export default EducationItem;
