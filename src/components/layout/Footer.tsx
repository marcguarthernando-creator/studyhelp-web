
import { Link } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-slate-300 py-12">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center border-b border-slate-800 pb-8 mb-8">
                    <div className="mb-6 md:mb-0">
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-slate-400">
                            Study Help
                        </span>
                        <p className="text-sm mt-2 text-slate-400 max-w-xs">
                            {t.hero.subtitle.split('.')[0]}. {t.footer.rights}
                        </p>
                    </div>
                    <div className="flex flex-wrap justify-center gap-6">
                        <Link to="/aviso-legal" className="hover:text-white transition-colors text-sm">
                            {t.footer.legal}
                        </Link>
                        <Link to="/politica-privacidad" className="hover:text-white transition-colors text-sm">
                            {t.footer.privacy}
                        </Link>
                        <a href="mailto:contacto.studyhelp@gmail.com" className="hover:text-white transition-colors text-sm">
                            contacto.studyhelp@gmail.com
                        </a>
                    </div>
                </div>
                <div className="text-center text-xs text-slate-500">
                    &copy; {currentYear} Study Help. {t.hero.badge}
                </div>
            </div>
        </footer>
    );
};

export default Footer;
