import { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import clsx from 'clsx';

interface AccordionItemProps {
    question: string;
    answer: string;
    questionClassName?: string;
    answerClassName?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({ question, answer, questionClassName, answerClassName }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="border-b border-slate-700/50 last:border-0">
            <button
                className="w-full py-6 flex justify-between items-center text-left focus:outline-none group"
                onClick={() => setIsOpen(!isOpen)}
            >
                <span className={clsx("text-lg font-medium transition-colors", questionClassName || "text-slate-900")}>{question}</span>
                <span className={clsx("ml-6 flex-shrink-0 transition-transform duration-300", isOpen ? "rotate-180" : "", questionClassName ? "text-white/70 group-hover:text-white" : "text-slate-500")}>
                    <ChevronDown size={20} />
                </span>
            </button>
            <div
                className={clsx(
                    "overflow-hidden transition-all duration-300 ease-in-out",
                    isOpen ? "max-h-96 opacity-100 mb-6" : "max-h-0 opacity-0"
                )}
            >
                <p className={clsx("leading-relaxed", answerClassName || "text-slate-600")}>{answer}</p>
            </div>
        </div>
    );
};
