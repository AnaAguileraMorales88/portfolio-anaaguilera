import { useEffect, useState } from 'react';
import { useLanguage } from '../../i18n/useLanguage';

const STORAGE_KEY = 'portfolio-intro-visto';
const FIRST = 'Ana';
const LAST = 'Aguilera';

// La intro se ve una vez por visita y nunca con "reducir movimiento"
const shouldShow = () => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return false;
    try {
        return sessionStorage.getItem(STORAGE_KEY) !== '1';
    } catch {
        return true;
    }
};

const markAsSeen = () => {
    try {
        sessionStorage.setItem(STORAGE_KEY, '1');
    } catch {
        /* almacenamiento no disponible */
    }
};

const Letters = ({ word, offset }) =>
    [...word].map((letter, i) => (
        <span
            key={`${letter}-${i}`}
            className="inline-block"
            style={{ animation: `focus-in 0.9s cubic-bezier(0.22, 1, 0.36, 1) ${(offset + i) * 70}ms both` }}
        >
            {letter}
        </span>
    ));

/** Intro animada: tu nombre aparece enfocándose, letra a letra. */
const Intro = () => {
    const { t } = useLanguage();
    const [phase, setPhase] = useState(() => (shouldShow() ? 'visible' : 'done'));

    useEffect(() => {
        if (phase === 'done') return;

        const timer = setTimeout(
            () => {
                if (phase === 'visible') {
                    setPhase('leaving');
                } else {
                    markAsSeen();
                    setPhase('done');
                }
            },
            phase === 'visible' ? 3600 : 650,
        );

        return () => clearTimeout(timer);
    }, [phase]);

    if (phase === 'done') return null;

    return (
        <section
            aria-label={t.intro.label}
            className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-canvas px-5 transition-all duration-700 ${
                phase === 'leaving' ? 'pointer-events-none opacity-0 blur-sm' : ''
            }`}
            style={{
                backgroundImage: 'radial-gradient(50rem 32rem at 50% 45%, var(--color-accent-tint), transparent 70%)',
            }}
        >
            <p className="text-center text-6xl font-bold uppercase leading-none tracking-tight text-brand sm:text-8xl lg:text-9xl">
                <span className="sr-only">{`${FIRST} ${LAST}`}</span>
                <span aria-hidden="true" className="block sm:inline">
                    <Letters word={FIRST} offset={0} />
                </span>{' '}
                <span aria-hidden="true" className="block sm:inline">
                    <Letters word={LAST} offset={FIRST.length + 1} />
                </span>
            </p>

            <p
                className="mt-8 font-mono text-base text-ink-muted sm:text-lg"
                style={{ animation: 'fade-up 0.7s ease 1.5s both' }}
            >
                <span className="text-accent-bright">$</span> {t.intro.command}
                <span
                    className="ml-1 inline-block h-[1.1em] w-[0.55em] translate-y-[3px] animate-pulse bg-accent-bright"
                    aria-hidden="true"
                ></span>
            </p>

            <button
                type="button"
                onClick={() => setPhase('leaving')}
                className="absolute bottom-8 rounded-full px-5 py-2 text-sm font-medium text-ink-muted transition-colors hover:bg-accent-soft hover:text-accent"
                style={{ animation: 'fade-up 0.5s ease 0.6s both' }}
            >
                {t.intro.skip}
            </button>
        </section>
    );
};

export default Intro;
