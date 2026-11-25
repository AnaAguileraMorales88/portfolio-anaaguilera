import Icon from '../ui/Icon';
import { useLanguage } from '../../i18n/useLanguage';

const DownloadCV = () => {
    const { t } = useLanguage();

    return (
        <a href="/cv-ana-aguilera.pdf" download="CV-Ana-Aguilera.pdf" className="btn-secondary" aria-label={t.cv.aria}>
            <Icon name="download" className="size-4" />
            {t.cv.label}
        </a>
    );
};

export default DownloadCV;
