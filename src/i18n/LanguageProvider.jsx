import { useEffect, useMemo, useState } from 'react';
import { LanguageContext } from './LanguageContext';
import { ui } from './ui';

const STORAGE_KEY = 'portfolio-lang';

const getInitialLang = () => {
    try {
        const saved = localStorage.getItem(STORAGE_KEY);
        if (saved === 'es' || saved === 'en') return saved;
    } catch {
        /* almacenamiento no disponible */
    }
    return 'es';
};

const LanguageProvider = ({ children }) => {
    const [lang, setLang] = useState(getInitialLang);

    useEffect(() => {
        document.documentElement.lang = lang;
        document.title = ui[lang].title;
        try {
            localStorage.setItem(STORAGE_KEY, lang);
        } catch {
            /* almacenamiento no disponible */
        }
    }, [lang]);

    const value = useMemo(() => ({ lang, setLang, t: ui[lang] }), [lang]);

    return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
};

export default LanguageProvider;
