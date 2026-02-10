
import { useLanguage } from '../../context/LanguageContext';

const Footer: React.FC = () => {
    const { t } = useLanguage();
    const currentYear = new Date().getFullYear();

    return (
        <footer className="bg-primary-dark text-slate-300 py-8">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div className="mb-4 md:mb-0">
                        <span className="text-xl font-bold text-white">Study Help</span>
                        <p className="text-sm mt-1 text-slate-400">
                            &copy; {currentYear} Study Help. {t.footer.rights}
                        </p>
                    </div>
                    <div className="flex space-x-6">
                        <a href="#" className="hover:text-white transition-colors text-sm">
                            {t.footer.legal}
                        </a>
                        <a href="mailto:contact@studyhelp.es" className="hover:text-white transition-colors text-sm">
                            Email
                        </a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
