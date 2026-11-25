import Icon from '../ui/Icon';

const AboutCard = ({ icon, number, title, description }) => (
    <article className="card relative h-full p-7 transition-transform duration-300 hover:-translate-y-1 sm:p-8">
        <span className="absolute right-7 top-7 font-mono text-sm font-bold text-highlight" aria-hidden="true">
            {String(number).padStart(2, '0')}
        </span>
        <span className="grid size-12 place-items-center rounded-2xl bg-accent-soft text-accent" aria-hidden="true">
            <Icon name={icon} className="size-6" />
        </span>
        <h3 className="mt-6 text-xl font-bold text-brand">{title}</h3>
        <p className="mt-3 leading-relaxed text-ink-muted">{description}</p>
    </article>
);

export default AboutCard;
