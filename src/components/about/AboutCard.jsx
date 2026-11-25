import Icon from '../ui/Icon';

const AboutCard = ({ icon, title, description, points }) => (
    <article className="card h-full p-7 sm:p-8">
        <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent" aria-hidden="true">
            <Icon name={icon} className="size-6" />
        </span>
        <h3 className="mt-6 text-xl font-bold text-brand">{title}</h3>
        <p className="mt-3 leading-relaxed text-ink-muted">{description}</p>
        {points && (
            <ul className="mt-4 space-y-2 text-ink-muted">
                {points.map((point) => (
                    <li
                        key={point}
                        className="relative pl-5 leading-relaxed before:absolute before:left-0 before:top-[0.65em] before:size-1.5 before:rounded-full before:bg-accent-bright"
                    >
                        {point}
                    </li>
                ))}
            </ul>
        )}
    </article>
);

export default AboutCard;
