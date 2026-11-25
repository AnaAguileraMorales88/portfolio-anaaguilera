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
            innerClassName="grid items-center gap-6 sm:gap-10 lg:grid-cols-[1.3fr_1fr] lg:gap-16"
        >
            <header className="order-2 lg:order-1">
                <p className="eyebrow reveal" style={{ '--i': 0 }}>
                    {hero.eyebrow}
                </p>

                <h1
                    id="hero-title"
                    tabIndex={-1}
                    className="reveal mt-3 text-4xl font-bold uppercase leading-none tracking-tight text-brand min-[400px]:text-5xl sm:mt-5 sm:text-6xl lg:text-7xl"
                    style={{ '--i': 1 }}
                >
                    {hero.name}
                </h1>

                <ul
                    className="reveal mt-4 flex flex-col gap-1 text-base font-medium text-ink-soft sm:mt-6 sm:text-lg md:flex-row md:items-center md:gap-x-4 md:whitespace-nowrap lg:text-base xl:text-lg"
                    style={{ '--i': 2 }}
                >
                    {hero.titles.map((title, i) => (
                        <li key={title} className={i > 0 ? 'md:border-l md:border-accent-line md:pl-4' : undefined}>
                            {title}
                        </li>
                    ))}
                </ul>

                <p
                    className="reveal mt-5 flex min-h-8 items-center gap-3 text-base font-bold text-ink sm:mt-8 sm:text-xl"
                    style={{ '--i': 3 }}
                >
                    <Icon name={ROLE_ICONS[index]} className="size-6 shrink-0 text-accent-bright" />
                    <span className="sr-only">{hero.roles.join('. ')}</span>
                    <span aria-hidden="true">
                        {text}
                        <span className="ml-0.5 inline-block h-[1.1em] w-[2px] translate-y-[3px] animate-pulse rounded-full bg-accent-bright"></span>
                    </span>
                    <button
                        type="button"
                        onClick={() => setPaused(!paused)}
                        aria-label={paused ? hero.play : hero.pause}
                        className="ml-auto grid size-7 shrink-0 place-items-center rounded-full border border-accent-line text-accent transition-colors hover:bg-accent-soft lg:ml-2"
                    >
                        <Icon name={paused ? 'play' : 'pause'} className="size-3" />
                    </button>
                </p>

                <p
                    className="reveal mt-4 max-w-xl text-base leading-relaxed text-ink-soft sm:mt-6 sm:text-lg"
                    style={{ '--i': 4 }}
                >
                    {hero.description}
                </p>

                <p className="reveal mt-6 flex flex-wrap gap-3 sm:mt-9" style={{ '--i': 5 }}>
                    <a href="#projects" className="btn-primary arrow-nudge">
                        {hero.cta}
                        <Icon name="arrowRight" className="size-4" />
                    </a>
                    <DownloadCV />
                </p>
            </header>

            <figure className="relative order-1 mx-auto w-28 sm:w-52 lg:order-2 lg:w-full lg:max-w-sm [@media(max-height:700px)]:w-20">
                <span
                    className="absolute -inset-2.5 rounded-full border border-accent-line/70 sm:-inset-4 lg:-inset-6"
                    aria-hidden="true"
                ></span>
                <img
                    src={anaPhoto}
                    alt={hero.photoAlt}
                    className="relative aspect-square w-full rounded-full border border-accent-line bg-surface object-cover p-1 shadow-xl shadow-accent/10 sm:p-1.5"
                />
            </figure>
        </Screen>
    );
};

export default Hero;
