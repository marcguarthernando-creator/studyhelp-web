
import { MessageCircle, Mail } from 'lucide-react';
import { useLanguage } from '../../context/LanguageContext';

const FloatingContact: React.FC = () => {
    const { t } = useLanguage();

    // Replace with actual number
    const phoneNumber = '34600000000'; // Placeholder
    const emailAddress = 'contact@studyhelp.es';

    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(t.contact.whatsappMessage)}`;
    const mailtoUrl = `mailto:${emailAddress}`;

    return (
        <div className="fixed bottom-6 right-6 flex flex-col space-y-4 z-50">
            <a
                href={mailtoUrl}
                className="bg-slate-600 hover:bg-slate-700 text-white p-3 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center"
                aria-label="Email"
            >
                <Mail size={24} />
            </a>
            <a
                href={whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg transition-transform hover:scale-110 flex items-center justify-center animate-bounce-subtle"
                aria-label="WhatsApp"
            >
                <MessageCircle size={28} />
            </a>
        </div>
    );
};

export default FloatingContact;
