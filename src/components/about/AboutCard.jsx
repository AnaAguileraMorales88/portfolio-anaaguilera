import Icon from '../ui/Icon';

const AboutCard = ({ icon, title, description, points }) => (
    <article className="card card-hover h-full p-6 lg:p-7">
        <span
            className="card-icon grid size-10 place-items-center rounded-xl bg-accent-soft text-accent"
            aria-hidden="true"
        >
            <Icon name={icon} />
        </span>
        <h3 className="mt-5 text-lg font-bold text-brand">{title}</h3>
        <p className="mt-2 text-sm leading-relaxed text-ink-muted sm:text-base">{description}</p>
        {points && (
            <ul className="mt-3 space-y-1.5 text-sm text-ink-muted sm:text-base">
                {points.map((point) => (
                    <li
                        key={point}
                        className="relative pl-4 leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-accent-bright"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        )}
    </article>
);

export default AboutCard;
