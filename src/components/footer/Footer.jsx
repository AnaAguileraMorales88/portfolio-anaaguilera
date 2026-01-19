import { contactData } from './contactData';

const Footer = () => {
    return (
        <footer id="contact" className="py-12 text-center border-t border-gray-200 bg-gray-50">
            <article className="max-w-7xl mx-auto px-4">
                <article className="mb-6">
                    <h2 className="text-2xl sm:text-4xl font-bold text-gray-900 inline-block border-b-4 border-purple-600 pb-2 mb-4">
                        Contacto
                    </h2>
                    <h3 className="text-gray-800 text-lg">
                        Si deseas colaborar o necesitas más información, puedes ponerte en contacto conmigo.
                    </h3>
                </article>

                <section aria-label="Enlaces de contacto">
                    <ul className="flex flex-wrap justify-center gap-6 mb-8">
                        {contactData.map((contact) => (
                            <li key={contact.name}>
                                <a
                                    href={contact.href}
                                    {...(contact.external && {
                                        target: "_blank",
                                        rel: "noopener noreferrer"
                                    })}
                                    className="inline-flex items-center justify-center px-4 py-2 rounded-lg bg-purple-600 hover:bg-purple-400 text-white transition-all duration-300 text-sm font-medium flex-1 hover:scale-125"

                                    aria-label={contact.ariaLabel}
                                >
                                    {contact.name}
                                </a>
                            </li>
                        ))}
                    </ul>
                </section>

                <p className="text-gray-500 text-sm">
                    © {new Date().getFullYear()} Ana Aguilera. Todos los derechos reservados.
                </p>
            </article>
        </footer>
    );
};

export default Footer;