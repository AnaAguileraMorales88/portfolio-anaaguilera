import { useEffect, useRef } from 'react';

/**
 * Cada sección del portfolio es una "pantalla" del alto exacto de la ventana.
 * Solo se ve la activa; al cambiar, la anterior se desvanece y la nueva entra con un fundido.
 * Si en una pantalla muy pequeña el contenido no cabe, se desplaza por dentro sin mover la página.
 */
const Screen = ({ id, state, labelledBy, className = '', innerClassName = '', children }) => {
    const ref = useRef(null);
    const animation = state === 'leaving' ? 'screen-out' : 'screen-in';

    useEffect(() => {
        if (state === 'active' && ref.current) ref.current.scrollTop = 0;
    }, [state]);

    return (
        <section
            ref={ref}
            id={id}
            aria-labelledby={labelledBy}
            hidden={state === 'hidden'}
            className={`flex h-svh flex-col overflow-y-auto px-5 pb-24 pt-20 sm:px-8 sm:pt-24 md:pb-6 [@media(max-height:700px)]:pb-[5.25rem] [@media(max-height:700px)]:pt-16 ${animation} ${className}`}
        >
            <article className={`mx-auto my-auto w-full max-w-6xl py-4 [@media(max-height:700px)]:py-2 ${innerClassName}`}>{children}</article>
        </section>
    );
};

export default Screen;
