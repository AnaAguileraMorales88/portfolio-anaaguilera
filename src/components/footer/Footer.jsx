import { contactData } from './contactData';

const Footer = () => {
    return (
        <footer id="contact" className="py-12 text-center border-t border-gray-200 bg-gray-50">
            <article className="max-w-7xl mx-auto px-4">
                <article className="mb-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-2">
                        Contacto
                    </h2>
                    <p className="text-gray-600">
                        Si deseas colaborar o necesitas más información, puedes ponerte en contacto conmigo.
                    </p>
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
                                    className="text-gray-700 hover:text-purple-600 transition-colors font-medium"
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