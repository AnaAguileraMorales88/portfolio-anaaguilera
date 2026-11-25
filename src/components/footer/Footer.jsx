import { useLanguage } from '../../i18n/useLanguage';

/** Pie con el copyright: se muestra solo en la pantalla de Contacto para no restar espacio al resto. */
const Footer = ({ visible }) => {
    const { t } = useLanguage();

    return (
        <footer hidden={!visible} className="screen-in fixed inset-x-0 bottom-24 px-5 text-center md:bottom-5">
            <p className="text-xs text-ink-muted sm:text-sm">
                © {new Date().getFullYear()} Ana Aguilera. {t.footer}
            </p>
        </footer>
    );
};

export default Footer;
