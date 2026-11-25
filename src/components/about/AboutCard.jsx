import Icon from '../ui/Icon';

const AboutCard = ({ icon, title, description }) => (
    <article className="card h-full p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
        <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent" aria-hidden="true">
            <Icon name={icon} className="size-6" />
        </span>
        <h3 className="mt-6 text-xl font-bold text-brand">{title}</h3>
        <p className="mt-3 leading-relaxed text-ink-muted">{description}</p>
    </article>
);

export default AboutCard;
