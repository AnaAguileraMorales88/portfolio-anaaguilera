/**
 * Cada sección del portfolio es una "pantalla". Solo se ve la activa;
 * al cambiar, la anterior se desvanece y la nueva entra con un fundido.
 */
const Screen = ({ id, state, labelledBy, className = '', innerClassName = '', children }) => {
    const animation = state === 'leaving' ? 'screen-out' : 'screen-in';

    return (
        <section
            id={id}
            aria-labelledby={labelledBy}
            hidden={state === 'hidden'}
            className={`flex min-h-svh items-center px-5 pb-32 pt-28 sm:px-8 md:pb-20 ${animation} ${className}`}
        >
            <article className={`mx-auto w-full max-w-6xl ${innerClassName}`}>{children}</article>
        </section>
    );
};

export default Screen;
