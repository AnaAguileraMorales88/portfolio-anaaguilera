import { useEffect, useState } from 'react';

/**
 * Escribe y borra una lista de frases en bucle, como si alguien tecleara.
 * Con "reducir movimiento" activado muestra la primera frase fija.
 */
export const useTypewriter = (words, { typeSpeed = 70, deleteSpeed = 35, pause = 1800 } = {}) => {
    const [index, setIndex] = useState(0);
    const [text, setText] = useState('');
    const [deleting, setDeleting] = useState(false);
    const [reduceMotion] = useState(
        () => window.matchMedia('(prefers-reduced-motion: reduce)').matches
    );

    useEffect(() => {
        if (reduceMotion) return;

        const word = words[index % words.length];
        let delay = deleting ? deleteSpeed : typeSpeed;

        if (!deleting && text === word) delay = pause;
        if (deleting && text === '') delay = 400;

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
    }, [text, deleting, index, words, typeSpeed, deleteSpeed, pause, reduceMotion]);

    return reduceMotion ? words[0] : text;
};
