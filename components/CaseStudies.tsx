
import React from 'react';

const CaseStudyCard: React.FC<{title: string; quote: string; description: string}> = ({title, quote, description}) => (
    <div className="bg-white p-6 rounded-lg shadow-lg">
        <h3 className="text-xl font-bold text-blue-800 mb-2">{title}</h3>
        <p className="text-gray-600 italic mb-2">"{quote}"</p>
        <p className="text-gray-600">{description}</p>
    </div>
);

const CaseStudies: React.FC = () => {
  return (
    <section className="py-12 bg-gray-100">
      <h2 className="text-3xl font-bold text-center text-gray-800 mb-6">Sistemas CLOEA en Acción</h2>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
        <CaseStudyCard 
          title="SOPs Modulares"
          quote="Onboarding en Notion: checklists y sesiones humanas redujeron cuellos de botella en un 30%."
          description="Startup tecnológica con 20 empleados estandarizó procesos modulares, alineando equipos sin microgestión."
        />
        <CaseStudyCard 
          title="Automatización Humanizada"
          quote="Flujo n8n para e-commerce: emails personalizados subieron conversiones un 15% sin intervención."
          description="PyME implementó seguimiento de leads automatizado, liberando tiempo y manteniendo conexión emocional."
        />
        <CaseStudyCard 
          title="Sintergia de Equipos"
          quote="Dashboard en ClickUp y reuniones de 30 minutos cortaron reuniones innecesarias en un 50%."
          description="Fundador sobrecargado sincronizó marketing, ventas y operaciones con métricas claras."
        />
        <CaseStudyCard 
          title="Gestión de Fricción"
          quote="Sistema en Asana detectó cuellos de botella, mejorando entrega de proyectos en un 25%."
          description="Consultoría transformó caos operativo en flujos organizados con alertas automáticas."
        />
      </div>
    </section>
  );
};

export default CaseStudies;
