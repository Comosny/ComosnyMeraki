
import React from 'react';

const Methodology: React.FC = () => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Metodología Helicoidal MERAKI</h2>
        <svg className="mx-auto mb-6" width="300" height="300" viewBox="0 0 300 300">
          <circle cx="150" cy="150" r="100" fill="none" stroke="#1e3a8a" strokeWidth="5" className="helicoid-path"/>
          <circle cx="200" cy="150" r="100" fill="none" stroke="#1e3a8a" strokeWidth="5" className="helicoid-path" style={{animationDelay: '0.5s'}}/>
          <text x="175" y="150" textAnchor="middle" dominantBaseline="middle" fill="#1e3a8a" fontSize="20">Vesica Piscis</text>
        </svg>
        <p className="text-gray-600">1. Vesica Piscis: Umbral de dolor. 2. Sintergia: Lógica viva. 3. Biocampo: Sostén automatización. 4. Salto Cuántico: Expansión sin caos.</p>
      </div>
    </section>
  );
};

export default Methodology;
