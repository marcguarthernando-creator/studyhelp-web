
import { useLanguage } from '../../context/LanguageContext';
import { AccordionItem } from '../ui/Accordion';

const Faq: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="faq" className="py-24 bg-slate-950 relative overflow-hidden">
            {/* Ambient Background Glows */}
            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute -top-[20%] -left-[10%] w-[700px] h-[700px] bg-primary/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
                <div className="absolute -bottom-[20%] -right-[10%] w-[700px] h-[700px] bg-accent/20 rounded-full blur-[120px] mix-blend-screen opacity-50"></div>
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        {t.faq.title}
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto bg-slate-900/60 backdrop-blur-xl rounded-2xl shadow-2xl border border-slate-800 px-6 sm:px-8 relative overflow-hidden">
                    {/* Subtle top highlighting for the card */}
                    <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

                    {t.faq.items.map((item, index) => (
                        <AccordionItem
                            key={index}
                            question={item.q}
                            answer={item.a}
                            questionClassName="text-slate-100 hover:text-primary-light font-semibold"
                            answerClassName="text-slate-300 bg-slate-800/50 p-4 rounded-lg border-l-2 border-primary mt-2"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
