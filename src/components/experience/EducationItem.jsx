const EducationItem = ({ title, details, description }) => (
    <li>
        <article className="card p-5">
            <h4 className="font-bold leading-snug text-brand">{title}</h4>
            {details && <p className="mt-1 font-mono text-sm text-accent">{details}</p>}
            {description && <p className="mt-2 text-sm leading-relaxed text-ink-muted">{description}</p>}
        </article>
    </li>
);

export default EducationItem;
