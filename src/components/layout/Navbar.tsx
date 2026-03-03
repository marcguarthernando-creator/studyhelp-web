
import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
import { useLanguage } from '../../context/LanguageContext';
import clsx from 'clsx';

const Navbar: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    const isHome = location.pathname === '/';

    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
        if (isHome && href.startsWith('#')) {
            e.preventDefault();
            const id = href.substring(1);
            const element = document.getElementById(id);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setIsOpen(false);
            }
        }
    };

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.howItWorks, href: '#how-it-works' },
        { name: t.nav.services, href: '#services' },
        { name: t.nav.limits, href: '#limits' },
        { name: t.nav.faq, href: '#faq' },
        { name: t.nav.reviews, href: '#reviews' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <Link
                        to="/"
                        className="flex-shrink-0 flex items-center gap-2 cursor-pointer"
                        onClick={(e) => {
                            if (isHome) {
                                e.preventDefault();
                                window.scrollTo({ top: 0, behavior: 'smooth' });
                            }
                        }}
                    >
                        <img src="/logo.png" alt="Study Help Logo" className="h-8 w-auto" />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            Study Help
                        </span>
                    </Link>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <Link
                                key={link.name}
                                to={isHome ? link.href : `/${link.href}`}
                                onClick={(e) => handleNavClick(e, link.href)}
                                className="text-slate-600 hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </Link>
                        ))}

                        {/* CTA Button */}
                        <a
                            href={`mailto:contacto.studyhelp@gmail.com?subject=${t.contact.emailSubject}&body=${t.contact.emailBody}`}
                            className="bg-accent hover:bg-accent-hover text-white px-5 py-2 rounded-full font-semibold transition-all shadow-md hover:shadow-lg"
                        >
                            {t.nav.ctaQuote}
                        </a>

                        {/* Language Switcher */}
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-slate-600 hover:text-primary transition-colors ml-4 border-l border-slate-200 pl-4"
                        >
                            <Globe size={18} />
                            <span className="uppercase font-semibold text-sm">{language}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center gap-4">
                        <button
                            onClick={toggleLanguage}
                            className="flex items-center space-x-1 text-slate-600"
                        >
                            <Globe size={16} />
                            <span className="uppercase font-semibold text-sm">{language}</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary p-2 transition-colors"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={clsx("md:hidden bg-white border-t border-slate-100 overflow-hidden transition-all duration-300 ease-in-out", isOpen ? "max-h-screen opacity-100" : "max-h-0 opacity-0")}>
                <div className="px-4 pt-4 pb-6 space-y-2">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            to={isHome ? link.href : `/${link.href}`}
                            className="block px-3 py-3 rounded-xl text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50 transition-colors"
                            onClick={(e) => {
                                handleNavClick(e, link.href);
                                if (!isHome) setIsOpen(false);
                            }}
                        >
                            {link.name}
                        </Link>
                    ))}
                    <div className="pt-4 mt-4 border-t border-slate-100">
                        <a
                            href={`mailto:contacto.studyhelp@gmail.com?subject=${t.contact.emailSubject}&body=${t.contact.emailBody}`}
                            className="block w-full text-center bg-accent text-white py-4 rounded-2xl font-bold shadow-md active:scale-95 transition-transform"
                            onClick={() => setIsOpen(false)}
                        >
                            {t.nav.ctaQuote}
                        </a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
