import { useState } from 'react';
import { navLinks } from './navLinks';
import MenuIcon from './MenuIcon';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <header className="fixed w-full top-0 z-50 backdrop-blur-md bg-white/90 border-b border-gray-200">
            <nav
                className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
                aria-label="Navegación principal"
            >
                <ul className="flex items-center justify-between h-16">
                    <li className="flex-shrink-0">
                        <a
                            href="#hero"
                            className="text-2xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent"
                            aria-label="Ir al inicio"
                        >
                            Portfolio
                        </a>
                    </li>

                    <li className="hidden md:block">
                        <ul className="flex items-center space-x-8">
                            {navLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-700 hover:text-purple-600 px-3 py-2 rounded-md text-sm font-medium transition-colors duration-300"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </li>

                    <li className="md:hidden">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-purple-600 hover:bg-purple-50 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-purple-500"
                            aria-expanded={isOpen}
                            aria-label={isOpen ? 'Cerrar menú' : 'Abrir menú'}
                        >
                            <MenuIcon isOpen={isOpen} />
                        </button>
                    </li>
                </ul>
            </nav>

            {isOpen && (
                <nav
                    className="md:hidden bg-white border-t border-gray-200"
                    aria-label="Navegación móvil"
                >
                    <ul className="px-4 pt-2 pb-3 space-y-1">
                        {navLinks.map((link) => (
                            <li key={link.name}>
                                <a
                                    href={link.href}
                                    className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-purple-600 hover:bg-purple-50 transition-colors duration-300"
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
