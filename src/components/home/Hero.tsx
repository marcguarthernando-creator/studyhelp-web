import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Hero: React.FC = () => {
    const { t } = useLanguage();

    return (
        <div id="home" className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">
            {/* Background Image & Overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    src="https://images.unsplash.com/photo-1456513080510-7bf3a84b82f8?q=80&w=2673&auto=format&fit=crop"
                    alt="Background"
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-slate-900/85"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center max-w-4xl mx-auto">
                    <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl md:text-6xl mb-8 leading-tight">
                        <span className="block">{t.hero.title}</span>
                    </h1>
                    <p className="mt-4 max-w-2xl mx-auto text-xl md:text-2xl text-slate-200 leading-relaxed font-light">
                        {t.hero.subtitle}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Hero;
