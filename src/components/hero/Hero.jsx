import { useState } from 'react';
import Screen from '../ui/Screen';
import Icon from '../ui/Icon';
import DownloadCV from '../downloadCV/DownloadCV';
import { useTypewriter } from '../../hooks/useTypewriter';
import { useLanguage } from '../../i18n/useLanguage';
import anaPhoto from '../../assets/Images/Ana.jpg';

const ROLE_ICONS = ['code', 'accessibility', 'sparkles', 'commit'];

const Hero = ({ state }) => {
    const { t } = useLanguage();
    const hero = t.hero;
    const [paused, setPaused] = useState(false);
    const { text, index } = useTypewriter(hero.roles, { paused });

    return (
        <Screen
            id="hero"
            state={state}
            labelledBy="hero-title"
            innerClassName="grid items-center gap-12 md:grid-cols-[1.2fr_1fr] md:gap-10 lg:gap-16"
        >
            <header className="order-2 md:order-1">
                <p className="eyebrow">Ana Aguilera · {hero.eyebrow}</p>

                <h1
                    id="hero-title"
                    tabIndex={-1}
                    className="mt-6 font-bold uppercase leading-[0.95] tracking-tight text-brand"
                >
                    <span className="block">
                        <span className="text-3xl sm:text-4xl">{hero.greeting}</span>{' '}
                        <mark className="marker ml-[0.12em] text-7xl sm:text-8xl lg:text-9xl">{hero.name}</mark>
                    </span>
                    <span className="mt-4 block text-2xl sm:text-3xl">{hero.line2}</span>
                    <span className="mt-1 block text-3xl sm:text-4xl lg:text-5xl">{hero.line3}</span>
                </h1>

                <p className="mt-9 flex min-h-9 items-center gap-3 text-lg font-bold text-ink sm:text-2xl">
                    <Icon name={ROLE_ICONS[index]} className="size-7 shrink-0 text-accent-bright" />
                    <span className="sr-only">{hero.roles.join('. ')}</span>
                    <span aria-hidden="true">
                        {text}
                        <span className="ml-0.5 inline-block h-[1.1em] w-[3px] translate-y-[3px] animate-pulse rounded-full bg-accent-bright"></span>
                    </span>
                </p>

                <p className="mt-3 flex items-center gap-2 pl-10">
                    {hero.roles.map((role, i) => (
                        <span
                            key={role}
                            aria-hidden="true"
                            className={`h-1.5 rounded-full transition-all duration-500 ${
                                i === index ? 'w-8 bg-accent-bright' : 'w-3 bg-highlight'
                            }`}
                        ></span>
                    ))}
                    <button
                        type="button"
                        onClick={() => setPaused(!paused)}
                        aria-label={paused ? hero.play : hero.pause}
                        className="ml-2 grid size-7 place-items-center rounded-full border border-accent-line text-accent transition-colors hover:bg-accent-soft"
                    >
                        <Icon name={paused ? 'play' : 'pause'} className="size-3" />
                    </button>
                </p>

                <p className="mt-8 max-w-xl text-lg leading-relaxed text-ink-soft">{hero.description}</p>

                <p className="mt-3 max-w-xl text-lg leading-relaxed text-ink-soft">
                    {hero.links.map((part) =>
                        typeof part === 'string' ? (
                            part
                        ) : (
                            <a key={part.href} href={part.href} className="text-link">
                                {part.text}
                            </a>
                        ),
                    )}
                </p>

                <p className="mt-9 flex flex-col gap-3 sm:flex-row">
                    <a href="#projects" className="btn-primary">
                        {hero.cta}
                        <Icon name="arrowRight" className="size-4" />
                    </a>
                    <DownloadCV />
                </p>
            </header>

            <figure className="relative order-1 mx-auto w-full max-w-48 sm:max-w-xs md:order-2 md:max-w-sm">
                <span
                    className="absolute -inset-5 -z-10 rounded-[3rem] sm:-inset-8"
                    style={{
                        background:
                            'linear-gradient(150deg, var(--color-accent-tint), var(--color-accent-line) 60%, var(--color-highlight))',
                    }}
                    aria-hidden="true"
                ></span>
                <img
                    src={anaPhoto}
                    alt={hero.photoAlt}
                    className="aspect-[4/5] w-full rounded-[2.5rem] object-cover shadow-2xl shadow-accent/25"
                />

                <span
                    aria-hidden="true"
                    className="card absolute -left-10 top-10 hidden w-56 p-3 sm:block lg:-left-16"
                    style={{ animation: 'float 6s ease-in-out infinite' }}
                >
                    <span className="flex items-center gap-2 text-xs">
                        <span className="grid size-7 place-items-center rounded-full bg-accent-tint font-bold text-accent">
                            AA
                        </span>
                        <span className="font-mono text-ink-muted">ana · main</span>
                        <span className="ml-auto rounded-full bg-emerald-50 px-2 py-0.5 font-medium text-emerald-700">
                            ✓ {hero.cardMerged}
                        </span>
                    </span>
                    <span className="mt-2 block font-mono text-sm font-bold text-brand">{hero.cardCommit}</span>
                </span>

                <span
                    aria-hidden="true"
                    className="card absolute -bottom-6 -right-6 hidden items-center gap-3 p-3 pr-5 sm:flex lg:-right-10"
                    style={{ animation: 'float 7s ease-in-out 1s infinite' }}
                >
                    <span className="grid size-9 place-items-center rounded-xl bg-accent-bright text-white">
                        <Icon name="code" className="size-5" />
                    </span>
                    <span className="text-sm font-bold text-brand">{hero.cardStack}</span>
                </span>
            </figure>
        </Screen>
    );
};

export default Hero;
