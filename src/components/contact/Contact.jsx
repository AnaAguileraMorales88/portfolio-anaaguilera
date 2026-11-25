import Screen from '../ui/Screen';
import SectionHeading from '../ui/SectionHeading';
import Icon from '../ui/Icon';
import DownloadCV from '../downloadCV/DownloadCV';
import { contactData } from './contactData';
import { useLanguage } from '../../i18n/useLanguage';

const Contact = ({ state }) => {
    const { lang, t } = useLanguage();

    return (
        <Screen
            id="contact"
            state={state}
            labelledBy="contact-title"
            innerClassName="card max-w-4xl px-6 py-14 sm:px-14 sm:py-20"
        >
            <SectionHeading id="contact-title" eyebrow={t.contact.eyebrow} mark={t.contact.mark}>
                {t.contact.intro}
            </SectionHeading>

            <ul className="flex flex-col flex-wrap justify-center gap-3 sm:flex-row" aria-label={t.contact.linksLabel}>
                {contactData.map((contact, index) => (
                    <li key={contact.name}>
                        <a
                            href={contact.href}
                            {...(contact.external && { target: '_blank', rel: 'noopener noreferrer' })}
                            className={`${index === 0 ? 'btn-primary' : 'btn-secondary'} w-full`}
                            aria-label={contact.ariaLabel[lang]}
                        >
                            <Icon name={contact.icon} className="size-4" />
                            {contact.name}
                        </a>
                    </li>
                ))}
                <li>
                    <DownloadCV />
                </li>
            </ul>
        </Screen>
    );
};

export default Contact;
