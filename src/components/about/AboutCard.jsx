const AboutCard = ({ title, description }) => (
    <article className="glass h-full p-8 transition-transform duration-300 hover:-translate-y-1">
        <h3 className="mb-4 text-lg font-medium text-fg">{title}</h3>
        <p className="text-sm leading-relaxed text-muted">{description}</p>
    </article>
);

export default AboutCard;
