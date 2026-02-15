
import { useLanguage } from '../../context/LanguageContext';
import { AccordionItem } from '../ui/Accordion';

const Faq: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="faq" className="py-24 bg-slate-900 relative overflow-hidden">
            {/* Background Pattern - Large Logo Watermark */}
            <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.03]">
                <img
                    src="/logo.png"
                    alt="Background Pattern"
                    className="w-[800px] max-w-none grayscale blur-sm"
                />
            </div>

            {/* Decorative Graduate/Orb (Optional, subtle blue glow in bottom right) */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-primary/20 rounded-full blur-3xl pointer-events-none"></div>
            <div className="absolute -top-24 -left-24 w-72 h-72 bg-accent/10 rounded-full blur-3xl pointer-events-none"></div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        {t.faq.title}
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto bg-slate-800/80 backdrop-blur-md rounded-2xl shadow-xl border border-slate-700/50 px-6 sm:px-8">
                    {t.faq.items.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.q}
                            answer={item.a}
                            questionClassName="text-white hover:text-primary-light"
                            answerClassName="text-slate-300"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
