import React from 'react';

// Icons as separate components for clarity
const VesicaIcon = () => (
  <svg className="w-8 h-8 text-indigo-600" viewBox="0 0 60 60" fill="none" stroke="currentColor" strokeWidth="3">
    <circle cx="22" cy="30" r="15" />
    <circle cx="38" cy="30" r="15" />
  </svg>
);

const ArchitectureIcon = () => (
  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2V6zM14 6a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V6zM4 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2H6a2 2 0 01-2-2v-2zM14 16a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z"></path>
  </svg>
);

const MentorshipIcon = () => (
  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"></path>
  </svg>
);

const AutomationIcon = () => (
  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"></path>
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
  </svg>
);

const MetricsIcon = () => (
  <svg className="w-8 h-8 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"></path>
  </svg>
);

const ServiceBox: React.FC<{icon: React.ReactNode; title: string; children: React.ReactNode; className?: string;}> = ({icon, title, children, className=""}) => (
    <div className={`bento-box bg-white p-6 rounded-xl shadow-lg flex flex-col items-start text-left ${className}`}>
        <div className="w-12 h-12 bg-indigo-100 rounded-xl flex items-center justify-center mb-4">
            {icon}
        </div>
        <h3 className="text-xl font-bold text-gray-800">{title}</h3>
        <p className="text-gray-600 mt-2">{children}</p>
    </div>
);

const Services: React.FC = () => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">Qué hacemos</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ServiceBox 
                icon={<VesicaIcon />} 
                title="Diagnóstico Xpress"
                className="lg:col-span-2"
            >
                Evalúa arquetipos: colapso, invisibilidad, rabia, abandono.
            </ServiceBox>
            <ServiceBox 
                icon={<ArchitectureIcon />} 
                title="Arquitectura Operativa"
            >
                Ordena procesos con sintergia humana.
            </ServiceBox>
            <ServiceBox 
                icon={<MentorshipIcon />} 
                title="Mentoría Ejecutiva"
            >
                Sesiones para escalar con coherencia.
            </ServiceBox>
            <ServiceBox 
                icon={<AutomationIcon />} 
                title="Automatización Humanizada"
            >
                Herramientas que sostienen biocampo.
            </ServiceBox>
            <ServiceBox 
                icon={<MetricsIcon />} 
                title="Cultura de Métricas Claras"
            >
                Datos intuitivos para salto cuántico.
            </ServiceBox>
        </div>
      </div>
    </section>
  );
};

export default Services;