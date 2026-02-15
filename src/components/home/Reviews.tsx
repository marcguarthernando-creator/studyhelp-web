import React from 'react';
import { useLanguage } from '../../context/LanguageContext';
import { Star, Quote } from 'lucide-react';

const Reviews: React.FC = () => {
    const { t } = useLanguage();

    interface Review {
        name: string;
        degree: string;
        text: string;
    }

    return (
        <section id="reviews" className="py-20 bg-white border-t border-slate-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-extrabold text-slate-900 sm:text-4xl mb-4">
                        {t.reviews.title}
                    </h2>
                    <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {t.reviews.items.map((review: Review, index: number) => (
                        <div
                            key={index}
                            className="bg-slate-50 p-8 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 border border-slate-100 flex flex-col"
                        >
                            <div className="flex items-center mb-4">
                                <div className="flex text-accent">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} size={18} fill="currentColor" strokeWidth={0} />
                                    ))}
                                </div>
                            </div>

                            <div className="flex-grow mb-6 relative">
                                <Quote size={40} className="absolute -top-2 -left-2 text-primary/10" />
                                <p className="text-slate-600 relative z-10 italic pl-4">
                                    "{review.text}"
                                </p>
                            </div>

                            <div className="flex items-center mt-auto pt-4 border-t border-slate-200">
                                <div className="h-10 w-10 bg-primary/10 rounded-full flex items-center justify-center text-primary font-bold mr-3">
                                    {review.name.charAt(0)}
                                </div>
                                <div>
                                    <h4 className="font-bold text-slate-900">{review.name}</h4>
                                    <p className="text-sm text-slate-500">{review.degree}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Reviews;
