import { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';

const SEO = () => {
    const { language, t } = useLanguage();

    useEffect(() => {
        // Dynamic Title
        document.title = language === 'es'
            ? 'Study Help - Ayuda Académica en Trabajos de Desarrollo'
            : 'Study Help - Academic Support for Development Assignments';

        // Dynamic Meta Description
        const metaDescription = document.querySelector('meta[name="description"]');
        if (metaDescription) {
            metaDescription.setAttribute('content', t.hero.subtitle);
        } else {
            // Create if not exists (fallback)
            const meta = document.createElement('meta');
            meta.name = 'description';
            meta.content = t.hero.subtitle;
            document.head.appendChild(meta);
        }

        // Language Attribute
        document.documentElement.lang = language;

    }, [language, t]);

    return null;
};

export default SEO;
