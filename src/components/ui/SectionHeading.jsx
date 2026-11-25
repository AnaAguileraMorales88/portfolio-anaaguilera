const SectionHeading = ({ id, eyebrow, title, children }) => (
    <header className="mx-auto mb-14 max-w-2xl text-center">
        {eyebrow && <p className="eyebrow mb-4">{eyebrow}</p>}
        <h2 id={id} className="section-title">
            {title}
        </h2>
        {children && <p className="mt-6 text-base leading-relaxed text-muted sm:text-lg">{children}</p>}
    </header>
);

export default SectionHeading;
