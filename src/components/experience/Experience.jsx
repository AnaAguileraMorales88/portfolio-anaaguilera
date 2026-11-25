import { useRef, useState } from 'react';
import Screen from '../ui/Screen';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import ExperienceItem from './ExperienceItem';
import EducationItem from './EducationItem';
import { experienceData } from './experienceData';
import { useLanguage } from '../../i18n/useLanguage';

const TABS = [
    { id: 'highlighted', icon: 'sparkles' },
    { id: 'work', icon: 'briefcase' },
    { id: 'education', icon: 'graduation' },
];

/** Experiencia en pestañas: a destacar, profesional y formación. Se ve un bloque cada vez. */
const Experience = ({ state }) => {
    const { lang, t } = useLanguage();
    const data = experienceData[lang];
    const [active, setActive] = useState(TABS[0].id);
    // En escritorio la primera experiencia se muestra abierta; en móvil empiezan cerradas para que quepa en pantalla
    const [isDesktop] = useState(() => window.matchMedia('(min-width: 1024px)').matches);
    const tabRefs = useRef({});

    // Flechas izquierda/derecha para moverse entre pestañas con el teclado
    const onKeyDown = (e, index) => {
        if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
        const next = TABS[(index + (e.key === 'ArrowRight' ? 1 : TABS.length - 1)) % TABS.length].id;
        setActive(next);
        tabRefs.current[next]?.focus();
    };

    return (
        <Screen id="experience" state={state} labelledBy="experience-title" innerClassName="max-w-4xl">
            <SectionHeading id="experience-title" eyebrow={t.experience.eyebrow} mark={t.experience.mark} />

            <menu
                role="tablist"
                aria-label={t.experience.mark}
                className="reveal mx-auto mb-5 flex w-fit max-w-full gap-1 overflow-x-auto rounded-full border border-accent-line/60 bg-surface p-1 lg:mb-6"
                style={{ '--i': 2 }}
            >
                {TABS.map(({ id, icon }, index) => {
                    const selected = active === id;
                    return (
                        <li key={id} role="presentation">
                            <button
                                ref={(el) => (tabRefs.current[id] = el)}
                                type="button"
                                role="tab"
                                id={`tab-${id}`}
                                aria-selected={selected}
                                aria-controls={`panel-${id}`}
                                tabIndex={selected ? 0 : -1}
                                onClick={() => setActive(id)}
                                onKeyDown={(e) => onKeyDown(e, index)}
                                className={`flex items-center gap-2 whitespace-nowrap rounded-full px-3 py-2 text-xs font-bold transition-colors duration-300 sm:px-4 sm:text-sm ${
                                    selected
                                        ? 'bg-accent-bright text-white'
                                        : 'text-ink-muted hover:bg-accent-soft hover:text-accent'
                                }`}
                            >
                                <Icon name={icon} className="hidden size-4 sm:block" />
                                {t.experience[id]}
                            </button>
                        </li>
                    );
                })}
            </menu>

            <section
                key={active}
                role="tabpanel"
                id={`panel-${active}`}
                aria-labelledby={`tab-${active}`}
                className="reveal"
                style={{ '--i': 0 }}
            >
                {active === 'education' ? (
                    <ul className="grid gap-3 md:grid-cols-2">
                        {data.education.map((item) => (
                            <EducationItem key={item.title} {...item} />
                        ))}
                    </ul>
                ) : (
                    <ol className={`grid gap-3 ${active === 'work' ? 'md:grid-cols-2' : ''}`}>
                        {data[active].map((exp, index) => (
                            <ExperienceItem
                                key={exp.role}
                                {...exp}
                                group={active}
                                defaultOpen={isDesktop && active === 'highlighted' && index === 0}
                                compact={active === 'work'}
                                repoLabel={t.experience.repo}
                            />
                        ))}
                    </ol>
                )}
            </section>
        </Screen>
    );
};

export default Experience;
