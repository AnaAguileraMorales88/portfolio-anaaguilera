/**
 * Título editorial de cada sección: etiqueta pequeña + título en mayúsculas + texto opcional.
 * (pre + mark forman el título completo, p. ej. "Sobre" + "mí").
 */
const SectionHeading = ({ id, eyebrow, pre, mark, children, className = '', hideIntroOnShortScreens = false }) => (
    <header className={`mx-auto mb-6 max-w-2xl text-center lg:mb-10 [@media(max-height:700px)]:mb-4 ${className}`}>
        <p className="eyebrow reveal" style={{ '--i': 0 }}>
            {eyebrow}
        </p>
        <h2
            id={id}
            tabIndex={-1}
            className="reveal mt-3 text-3xl font-bold uppercase leading-none tracking-tight text-brand sm:text-4xl lg:mt-4 lg:text-5xl"
            style={{ '--i': 1 }}
        >
            {pre && <>{pre} </>}
            {mark}
        </h2>
        {children && (
            <p
                className={`reveal mt-3 text-sm leading-relaxed text-ink-muted sm:text-base lg:mt-5 ${
                    hideIntroOnShortScreens ? '[@media(max-height:820px)]:hidden' : '[@media(max-height:700px)]:hidden'
                }`}
                style={{ '--i': 2 }}
            >
                {children}
            </p>
        )}
    </header>
);

export default SectionHeading;
