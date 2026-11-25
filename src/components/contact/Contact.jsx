import { contactData } from './contactData';
import SectionHeading from '../ui/SectionHeading';

const Contact = () => {
    return (
        <section id="contact" aria-labelledby="contact-title" className="px-5 py-24 sm:px-8">
            <article className="glass mx-auto max-w-3xl px-6 py-14 text-center sm:px-12">
                <SectionHeading id="contact-title" eyebrow="05 · Hablemos" title="Contacto">
                    Si deseas colaborar o necesitas más información, puedes ponerte en contacto conmigo.
                </SectionHeading>

                <ul className="flex flex-wrap justify-center gap-4" aria-label="Enlaces de contacto">
                    {contactData.map((contact, index) => (
                        <li key={contact.name}>
                            <a
                                href={contact.href}
                                {...(contact.external && { target: '_blank', rel: 'noopener noreferrer' })}
                                className={index === 0 ? 'btn-primary' : 'btn-ghost'}
                                aria-label={contact.ariaLabel}
                            >
                                {contact.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </article>
        </section>
    );
};

export default Contact;
