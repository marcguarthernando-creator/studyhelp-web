
import { useLanguage } from '../../context/LanguageContext';

const HowItWorks: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="how-it-works" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        {t.howItWorks.title}
                    </h2>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {t.howItWorks.steps.map((step, index) => (
                        <div key={index} className="relative p-6 bg-slate-50 rounded-xl border border-slate-100 hover:shadow-md transition-shadow">
                            <div className="absolute -top-4 left-6 bg-primary text-white w-8 h-8 flex items-center justify-center rounded-full font-bold shadow-sm">
                                {index + 1}
                            </div>
                            <h3 className="mt-4 text-xl font-bold text-slate-800 mb-2">{step.title}</h3>
                            <p className="text-slate-600">{step.desc}</p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;
