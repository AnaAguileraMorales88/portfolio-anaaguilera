import { useLanguage } from '../../i18n/useLanguage';

const Footer = () => {
    const { t } = useLanguage();

    return (
        <footer className="px-5 pb-28 text-center md:pb-8">
            <p className="text-sm text-ink-muted">
                © {new Date().getFullYear()} Ana Aguilera. {t.footer}
            </p>
        </footer>
    );
};

export default Footer;
