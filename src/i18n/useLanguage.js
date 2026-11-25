import { useContext } from 'react';
import { LanguageContext } from './LanguageContext';

/** Devuelve el idioma actual, la función para cambiarlo y los textos de la interfaz. */
export const useLanguage = () => useContext(LanguageContext);
