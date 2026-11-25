/**
 * Título editorial de cada sección: etiqueta pequeña + título en mayúsculas
 * (pre + mark: el título completo, p. ej. "Sobre" + "mí").
 */
const SectionHeading = ({ id, eyebrow, pre, mark, children, align = 'center' }) => (
    <header className={`mb-10 sm:mb-14 ${align === 'center' ? 'mx-auto max-w-2xl text-center' : 'max-w-xl'}`}>
        <p className="eyebrow mb-5">{eyebrow}</p>
        <h2
            id={id}
            tabIndex={-1}
            className="text-4xl font-bold uppercase leading-none tracking-tight text-brand sm:text-5xl lg:text-6xl"
        >
            {pre && <>{pre} </>}
            {mark}
        </h2>
        {children && <p className="mt-6 text-base leading-relaxed text-ink-muted sm:text-lg">{children}</p>}
    </header>
);

export default SectionHeading;
