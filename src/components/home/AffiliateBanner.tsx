import React from 'react';
import { Rocket, ExternalLink } from 'lucide-react';

const AffiliateBanner: React.FC = () => {
    // Placeholder for product name and affiliate link
    const productName = "Notion para Estudiantes";
    const affiliateLink = "https://www.notion.so/students";

    return (
        <section className="py-12 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50 p-6 md:p-8 shadow-sm transition-all hover:shadow-md hover:border-blue-100">
                    {/* Background decoration */}
                    <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-primary/5 blur-2xl"></div>
                    <div className="absolute bottom-0 left-0 -mb-4 -ml-4 h-24 w-24 rounded-full bg-accent/5 blur-2xl"></div>

                    <div className="relative flex flex-col md:flex-row items-center justify-between gap-6">
                        <div className="flex items-center gap-4 text-center md:text-left">
                            <div className="flex-shrink-0 h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary group">
                                <Rocket size={24} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                            </div>
                            <div>
                                <h3 className="text-lg font-bold text-slate-900">
                                    Potencia tu estudio con <span className="text-primary">{productName}</span>
                                </h3>
                                <p className="text-slate-500 text-sm mt-1">
                                    La herramienta definitiva para organizar tus apuntes y calendario académico.
                                </p>
                            </div>
                        </div>

                        <a
                            href={affiliateLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center justify-center px-6 py-3 border border-transparent text-base font-semibold rounded-full text-white bg-primary hover:bg-primary-dark shadow-sm transition-all duration-300 transform hover:scale-105 active:scale-95 group"
                        >
                            Ver herramienta
                            <ExternalLink size={18} className="ml-2 opacity-70 group-hover:opacity-100 transition-opacity" />
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AffiliateBanner;
