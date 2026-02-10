
import { useLanguage } from '../../context/LanguageContext';
import { AccordionItem } from '../ui/Accordion';

const Faq: React.FC = () => {
    const { t } = useLanguage();

    return (
        <section id="faq" className="py-20 bg-slate-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl">
                        {t.faq.title}
                    </h2>
                </div>
                <div className="max-w-3xl mx-auto bg-white rounded-2xl shadow-sm border border-slate-200 px-6 sm:px-8">
                    {t.faq.items.map((item, index) => (
                        <AccordionItem key={index} question={item.q} answer={item.a} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Faq;
