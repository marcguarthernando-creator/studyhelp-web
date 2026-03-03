
import React, { useEffect } from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Lock } from 'lucide-react';

const PrivacyPolicy: React.FC = () => {
    const { t } = useLanguage();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    return (
        <div className="min-h-screen pt-32 pb-20 bg-slate-50">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-slate-200">
                    <div className="flex items-center mb-8 text-primary">
                        <Lock size={32} className="mr-3" />
                        <h1 className="text-3xl font-bold text-slate-900">{t.privacyPolicy.title}</h1>
                    </div>

                    <div className="prose prose-slate max-w-none">
                        <div className="whitespace-pre-line text-slate-600 leading-relaxed">
                            {t.privacyPolicy.content}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default PrivacyPolicy;
