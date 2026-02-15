
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
        <section id="services" className="py-20 bg-gradient-to-br from-primary to-accent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
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
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {t.services.areas.map((area, index) => (
                            <div
                                key={index}
                                className="group flex items-center p-4 rounded-xl border border-slate-100 bg-slate-50 hover:bg-white hover:border-blue-100 hover:shadow-md transition-all duration-300"
                            >
                                <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center mr-4 group-hover:bg-primary transition-colors duration-300">
                                    <Check size={20} className="text-primary group-hover:text-white transition-colors duration-300" />
                                </div>
                                <span className="font-semibold text-slate-700 group-hover:text-slate-900">{area}</span>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Services;
