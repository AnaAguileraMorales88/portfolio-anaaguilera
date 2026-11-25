import { useEffect, useState } from 'react';

const prefersReducedMotion = () => window.matchMedia('(prefers-reduced-motion: reduce)').matches;

/**
 * Escribe y borra una lista de frases en bucle, como si alguien tecleara.
 * Devuelve el texto visible y el índice de la frase actual.
 * Con "reducir movimiento" o en pausa, la frase se queda quieta.
 */
export const useTypewriter = (words, { paused = false, typeSpeed = 60, deleteSpeed = 30, pause = 2200 } = {}) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [reduceMotion] = useState(prefersReducedMotion);

    const current = index % words.length;
    const word = words[current];

    useEffect(() => {
        if (reduceMotion || paused) return;

        let delay = deleting ? deleteSpeed : typeSpeed;
        if (!deleting && text === word) delay = pause;
        if (deleting && text === '') delay = 350;

        const timer = setTimeout(() => {
            if (!deleting && text === word) {
                setDeleting(true);
            } else if (deleting && text === '') {
                setDeleting(false);
                setIndex((i) => i + 1);
            } else {
                setText(word.slice(0, text.length + (deleting ? -1 : 1)));
            }
        }, delay);

        return () => clearTimeout(timer);
    }, [text, deleting, word, paused, reduceMotion, typeSpeed, deleteSpeed, pause]);

    return { text: reduceMotion ? word : text, index: current };
};
