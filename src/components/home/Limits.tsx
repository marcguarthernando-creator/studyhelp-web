
import { Check, X } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Limits: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="limits" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        {t.limits.title}
                    </h2>
                    <p className="mt-4 text-xl text-slate-500 max-w-2xl mx-auto">
                        {t.limits.subtitle}
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
                    {/* YES Column */}
                    <div className="bg-green-50/50 rounded-3xl p-8 border border-green-100">
                        <h3 className="text-2xl font-bold text-green-800 mb-6 flex items-center">
                            <span className="bg-green-100 p-2 rounded-full mr-3">
                                <Check className="w-6 h-6 text-green-600" />
                            </span>
                            {t.limits.included}
                        </h3>
                        <ul className="space-y-4">
                            {t.limits.yes.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <Check className="w-5 h-5 text-green-600 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-slate-700 font-medium">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* NO Column */}
                    <div className="bg-red-50/50 rounded-3xl p-8 border border-red-100">
                        <h3 className="text-2xl font-bold text-red-800 mb-6 flex items-center">
                            <span className="bg-red-100 p-2 rounded-full mr-3">
                                <X className="w-6 h-6 text-red-600" />
                            </span>
                            {t.limits.excluded}
                        </h3>
                        <ul className="space-y-4">
                            {t.limits.no.map((item, index) => (
                                <li key={index} className="flex items-start">
                                    <X className="w-5 h-5 text-red-500 mt-1 mr-3 flex-shrink-0" />
                                    <span className="text-slate-600">{item}</span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Limits;
