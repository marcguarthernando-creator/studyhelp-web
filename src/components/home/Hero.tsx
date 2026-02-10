import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div id="home" className="relative bg-gradient-to-b from-slate-50 to-white pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-3xl mx-auto">
                    <div className="inline-flex items-center rounded-full px-3 py-1 text-sm leading-6 text-primary ring-1 ring-primary/20 bg-primary/5 mb-8">
                        {t.hero.badge}
                    </div>
                    <h1 className="text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl md:text-6xl mb-6">
                        <span className="block">{t.hero.title}</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl text-slate-500 mb-10">
                        {t.hero.subtitle}
                    </p>
                    <div className="flex flex-col sm:flex-row justify-center gap-4">
                        <a
                            href={`https://wa.me/34600000000?text=${encodeURIComponent(t.contact.whatsappMessage)}`}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-full text-white bg-green-600 hover:bg-green-700 md:text-lg transition-all shadow-lg hover:shadow-xl group"
                        >
                            {t.hero.cta1}
                            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={20} />
                        </a>
                        <a
                            href="#services"
                            className="inline-flex items-center justify-center px-8 py-3 border border-slate-300 text-base font-medium rounded-full text-slate-700 bg-white hover:bg-slate-50 md:text-lg transition-all"
                        >
                            {t.hero.cta2}
                        </a>
                    </div>
                </div>
            </div>

            {/* Background Decor */}
            <div className="absolute top-0 left-0 -z-10 transform-gpu overflow-hidden blur-3xl opacity-30" aria-hidden="true">
                <div className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#1e3a8a] to-[#0ea5e9] sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"></div>
            </div>
        </div>
    );
};

export default Hero;
