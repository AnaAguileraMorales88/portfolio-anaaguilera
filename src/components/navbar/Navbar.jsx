import { useState } from 'react';
import { navLinks } from './navLinks';
import MenuIcon from './MenuIcon';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed inset-x-0 top-0 z-50 border-b border-line bg-ink/70 backdrop-blur-xl">
            <nav
                className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8"
                aria-label="Navegación principal"
            >
                <a href="#hero" className="font-serif text-2xl italic text-gradient" aria-label="Ir al inicio">
                    Portfolio
                </a>

                <ul className="hidden items-center gap-1 md:flex">
                    {navLinks.map((link) => (
                        <li key={link.name}>
                            <a
                                href={link.href}
                                className="rounded-full px-4 py-2 text-sm text-muted transition-colors duration-300 hover:bg-white/5 hover:text-fg"
                            >
                                {link.name}
                            </a>
                        </li>
                    ))}
                </ul>

                <button
                    type="button"
                    onClick={() => setIsOpen(!isOpen)}
                    className="inline-flex items-center justify-center rounded-full p-2 text-muted transition-colors hover:bg-white/5 hover:text-fg md:hidden"
                    aria-expanded={isOpen}
                    aria-controls="menu-movil"
                    aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                >
                    <MenuIcon isOpen={isOpen} />
                </button>
            </nav>

            {isOpen && (
                <nav id="menu-movil" className="border-t border-line bg-ink/95 md:hidden" aria-label="Navegación móvil">
                    <ul className="space-y-1 px-5 py-4">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block rounded-xl px-4 py-3 text-base text-muted transition-colors hover:bg-white/5 hover:text-fg"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {link.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </nav>
            )}
        </header>
    );
};

export default Navbar;
