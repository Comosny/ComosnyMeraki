import React from 'react';

interface TestimonialCardProps {
    quote: string;
    author: string;
    company: string;
}

const QuoteIcon = () => (
    <svg className="w-10 h-10 text-indigo-100 mb-4" fill="currentColor" viewBox="0 0 20 20">
        <path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v8a1 1 0 001 1h2a1 1 0 001-1V6.414l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L8.586 6H7a1 1 0 00-1-1zm8 0a1 1 0 00-1 1v8a1 1 0 001 1h2a1 1 0 001-1V6.414l-1.293 1.293a1 1 0 101.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 00-1.414 1.414L16.586 6H15a1 1 0 00-1-1z" clipRule="evenodd"></path>
    </svg>
)

const TestimonialCard: React.FC<TestimonialCardProps> = ({ quote, author, company }) => (
    <div className="bg-white p-6 rounded-lg shadow-lg flex flex-col h-full border border-slate-200">
        <QuoteIcon />
        <p className="text-gray-700 italic mb-4 flex-grow">"{quote}"</p>
        <div className="mt-auto border-t pt-4">
            <p className="font-bold text-gray-800">{author}</p>
            <p className="text-gray-500 text-sm">{company}</p>
        </div>
    </div>
);

const Testimonials: React.FC = () => {
    const testimonialData = [
        {
            quote: "MERAKI no solo organizó nuestros procesos, sino que nos devolvió la claridad y el propósito. Pasamos de apagar incendios a construir nuestro futuro.",
            author: "Ana López",
            company: "CEO, Innovatech Solutions"
        },
        {
            quote: "El diagnóstico fue un espejo. Ver nuestra 'frecuencia' nos permitió abordar los problemas de raíz. La implementación de la Arquitectura Operativa fue un cambio de juego.",
            author: "Carlos Gómez",
            company: "Founder, Creativos Digitales"
        },
        {
            quote: "Jhovanny tiene una habilidad única para fusionar la empatía con la estrategia. Nos sentimos escuchados y, por primera vez, tenemos un sistema que realmente nos sostiene.",
            author: "Sofía Martínez",
            company: "Directora de Operaciones, HealthCo"
        },
         {
            quote: "Dejamos de ser 'invisibles'. Con las métricas claras, el valor de mi equipo finalmente fue reconocido y pudimos justificar la expansión que tanto necesitábamos.",
            author: "David Rodríguez",
            company: "Líder de Proyectos, BuildRight"
        }
    ];

    return (
        <section className="py-16 sm:py-20">
            <div className="max-w-6xl mx-auto px-4">
                <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">De la Fricción a la Frecuencia Correcta</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {testimonialData.map((testimonial, index) => (
                        <TestimonialCard 
                            key={index}
                            quote={testimonial.quote}
                            author={testimonial.author}
                            company={testimonial.company}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;