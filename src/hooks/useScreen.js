import { useEffect, useRef, useState } from 'react';

const OUT_DURATION = 280;

const screenFromHash = (ids) => {
    const id = window.location.hash.slice(1);
    return ids.includes(id) ? id : ids[0];
};

/**
 * Muestra una sección cada vez, según el #hash de la URL (#about, #projects...).
 * Al cambiar, la sección actual se desvanece y entra la nueva.
 * Así funcionan los enlaces normales, el botón "atrás" y compartir un enlace a una sección.
 */
export const useScreen = (ids) => {
    const [active, setActive] = useState(() => screenFromHash(ids));
    const [leaving, setLeaving] = useState(false);
    const activeRef = useRef(active);

    useEffect(() => {
        const reduceMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        let timer;

        const onHashChange = () => {
            const hash = window.location.hash.slice(1);
            // Anclas que no son secciones (p. ej. #contenido del enlace de salto) no cambian de pantalla
            if (hash && !ids.includes(hash)) return;

            const next = screenFromHash(ids);
            if (next === activeRef.current) return;

            clearTimeout(timer);
            setLeaving(true);
            timer = setTimeout(
                () => {
                    activeRef.current = next;
                    setActive(next);
                    setLeaving(false);
                    window.scrollTo(0, 0);
                },
                reduceMotion ? 0 : OUT_DURATION,
            );
        };

        window.addEventListener('hashchange', onHashChange);
        return () => {
            clearTimeout(timer);
            window.removeEventListener('hashchange', onHashChange);
        };
    }, [ids]);

    return { active, leaving };
};
