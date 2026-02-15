import { useState } from 'react';
import { Menu, X, Globe } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';
import clsx from 'clsx';

const Navbar: React.FC = () => {
    const { language, setLanguage, t } = useLanguage();
    const [isOpen, setIsOpen] = useState(false);


    const toggleLanguage = () => {
        setLanguage(language === 'es' ? 'en' : 'es');
    };

    const scrollToSection = (id: string) => {
        const element = document.getElementById(id);
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const navLinks = [
        { name: t.nav.home, href: '#home' },
        { name: t.nav.howItWorks, href: '#how-it-works' },
        { name: t.nav.services, href: '#services' },
        { name: t.nav.reviews, href: '#reviews' },
        { name: t.nav.limits, href: '#limits' },
        { name: t.nav.faq, href: '#faq' },
    ];

    return (
        <nav className="fixed w-full z-50 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16 items-center">
                    {/* Logo */}
                    <div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onClick={() => scrollToSection('home')}>
                        <img src="/logo.png" alt="Study Help Logo" className="h-8 w-auto" />
                        <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                            Study Help
                        </span>
                    </div>

                    {/* Desktop Menu */}
                    <div className="hidden md:flex items-center space-x-8">
                        {navLinks.map((link) => (
                            <a
                                key={link.name}
                                href={link.href}
                                className="text-slate-600 hover:text-primary font-medium transition-colors"
                            >
                                {link.name}
                            </a>
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
                            className="flex items-center space-x-1 text-slate-600 hover:text-primary transition-colors"
                        >
                            <Globe size={18} />
                            <span className="uppercase font-semibold text-sm">{language}</span>
                        </button>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center">
                        <button
                            onClick={toggleLanguage}
                            className="mr-4 flex items-center space-x-1 text-slate-600"
                        >
                            <span className="uppercase font-semibold text-sm">{language}</span>
                        </button>
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="text-slate-600 hover:text-primary p-2"
                        >
                            {isOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu Dropdown */}
            <div className={clsx("md:hidden bg-white border-t", isOpen ? "block" : "hidden")}>
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    {navLinks.map((link) => (
                        <a
                            key={link.name}
                            href={link.href}
                            className="block px-3 py-2 rounded-md text-base font-medium text-slate-700 hover:text-primary hover:bg-slate-50"
                            onClick={() => setIsOpen(false)}
                        >
                            {link.name}
                        </a>
                    ))}
                    <a
                        href={`mailto:contacto.studyhelp@gmail.com?subject=${t.contact.emailSubject}&body=${t.contact.emailBody}`}
                        className="block w-full text-center mt-4 bg-accent text-white py-3 rounded-md font-semibold"
                        onClick={() => setIsOpen(false)}
                    >
                        {t.nav.ctaQuote}
                    </a>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
