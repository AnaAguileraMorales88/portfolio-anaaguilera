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
            innerClassName="grid items-center gap-12 lg:grid-cols-[1.3fr_1fr] lg:gap-16"
        >
            <header className="order-2 lg:order-1">
                <p className="eyebrow">Ana Aguilera · {hero.eyebrow}</p>

                <h1
                    id="hero-title"
                    tabIndex={-1}
                    className="mt-6 text-5xl font-bold uppercase leading-none tracking-tight text-brand sm:text-6xl lg:text-7xl"
                >
                    {hero.greeting} {hero.name}
                </h1>

                <ul className="mt-6 flex flex-col gap-1.5 text-base font-medium text-ink-soft sm:text-lg md:flex-row md:items-center md:gap-x-4 md:whitespace-nowrap lg:text-base xl:text-lg">
                    {hero.titles.map((title, i) => (
                        <li key={title} className={i > 0 ? 'md:border-l md:border-accent-line md:pl-4' : undefined}>
                            {title}
                        </li>
                    ))}
                </ul>

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

            <figure className="relative order-1 mx-auto w-full max-w-44 sm:max-w-60 lg:order-2 lg:max-w-sm">
                <span
                    className="absolute -inset-4 rounded-full border border-accent-line/70 sm:-inset-6"
                    aria-hidden="true"
                ></span>
                <img
                    src={anaPhoto}
                    alt={hero.photoAlt}
                    className="relative aspect-square w-full rounded-full border border-accent-line bg-surface object-cover p-1.5 shadow-xl shadow-accent/10"
                />
            </figure>
        </Screen>
    );
};

export default Hero;
