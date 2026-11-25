import { navLinks } from './navLinks';
import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/useLanguage';

const LANGS = ['es', 'en'];

/**
 * Cabecera: logo, menú de iconos y selector de idioma.
 * En móvil el menú baja a una barra inferior, como en una app.
 */
const Navbar = ({ active }) => {
    const { t, lang, setLang } = useLanguage();

    return (
        <header className="fixed inset-x-0 top-0 z-50 flex h-16 items-center justify-between gap-4 border-b border-accent-line/50 bg-canvas/95 px-5 sm:h-20 md:bg-canvas/75 md:backdrop-blur-xl sm:px-8 xl:px-[calc((100%-72rem)/2)]">
            <a href="#hero" className="flex items-center gap-3" aria-label={t.home}>
                <span
                    className="grid size-10 place-items-center rounded-xl text-lg font-bold text-white shadow-md"
                    style={{ background: 'linear-gradient(135deg, #6366f1, var(--color-accent))' }}
                    aria-hidden="true"
                >
                    A
                </span>
                <span className="hidden text-lg font-bold text-brand lg:inline">Ana Aguilera</span>
            </a>

            <nav aria-label={t.navLabel} className="fixed inset-x-4 bottom-4 z-50 md:static md:inset-auto">
                <ul className="flex items-center justify-between gap-1 rounded-full border border-accent-line/70 bg-surface/90 p-1.5 shadow-lg shadow-accent/10 backdrop-blur-xl md:shadow-none">
                    {navLinks.map(({ id, icon }) => {
                        const isActive = active === id;
                        return (
                            <li key={id}>
                                <a
                                    href={`#${id}`}
                                    aria-current={isActive ? 'page' : undefined}
                                    className={`group relative grid size-11 place-items-center rounded-full transition-colors duration-300 ${
                                        isActive
                                            ? 'bg-accent-bright text-white shadow-md shadow-accent/30'
                                            : 'text-ink-muted hover:bg-accent-soft hover:text-accent'
                                    }`}
                                >
                                    <Icon name={icon} />
                                    <span className="pointer-events-none absolute bottom-full mb-3 whitespace-nowrap rounded-lg bg-brand px-2.5 py-1 text-xs font-medium text-white opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100 max-md:sr-only md:bottom-auto md:top-full md:mb-0 md:mt-3">
                                        {t.nav[id]}
                                    </span>
                                </a>
                            </li>
                        );
                    })}
                </ul>
            </nav>

            <menu aria-label={t.langLabel} className="flex rounded-full border border-accent-line/70 bg-surface/90 p-1">
                {LANGS.map((code) => (
                    <li key={code}>
                        <button
                            type="button"
                            lang={code}
                            onClick={() => setLang(code)}
                            aria-pressed={lang === code}
                            className={`rounded-full px-3 py-1.5 text-xs font-bold uppercase transition-colors ${
                                lang === code ? 'bg-accent-soft text-accent' : 'text-ink-muted hover:text-accent'
                            }`}
                        >
                            {code}
                        </button>
                    </li>
                ))}
            </menu>
        </header>
    );
};

export default Navbar;
