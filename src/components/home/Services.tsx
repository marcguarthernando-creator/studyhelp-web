
import { BookOpen, GraduationCap, FileText, MonitorPlay, Check } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const Services: React.FC = () => {
    const { t } = useLanguage();

    // Icons corresponding to the 4 services mapped in translations
    const icons = [
        <GraduationCap key="tfg" size={32} className="text-primary mb-4" />,
        <FileText key="fp" size={32} className="text-primary mb-4" />,
        <BookOpen key="uni" size={32} className="text-primary mb-4" />,
        <MonitorPlay key="ppt" size={32} className="text-primary mb-4" />
    ];

    return (
        <section id="services" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        {t.services.title}
                    </h2>
                </div>

                {/* Service Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
                    {t.services.items.map((item, index) => (
                        <div key={index} className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-md transition-shadow border border-slate-100">
                            {icons[index] || <FileText size={32} className="text-primary mb-4" />}
                            <h3 className="text-xl font-bold text-slate-900 mb-3">{item.title}</h3>
                            <p className="text-slate-600 leading-relaxed text-sm">
                                {item.desc}
                            </p>
                        </div>
                    ))}
                </div>

                {/* Areas of Expertise */}
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                    <div className="text-center mb-10">
                        <h3 className="text-2xl font-bold text-slate-900">{t.services.areasTitle}</h3>
                    </div>
                    <div className="flex flex-wrap justify-center gap-4">
                        {t.services.areas.map((area, index) => (
                            <span
                                key={index}
                                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium bg-blue-50 text-blue-800 border border-blue-100"
                            >
                                <Check size={16} className="mr-2 text-blue-600" />
                                {area}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
