import React from 'react';

interface FinalCTAProps {
  onCTAClick: () => void;
}

const FinalCTA: React.FC<FinalCTAProps> = ({ onCTAClick }) => {
  return (
    <section className="py-16 bg-blue-900 text-white text-center rounded-t-3xl">
      <div className="px-4">
        <h2 className="text-3xl font-bold mb-4">MERAKI: Resonancia Humana Amplificada</h2>
        <p className="text-lg mb-6 max-w-3xl mx-auto">Vesica muestra dolor, Sintergia resuelve, Biocampo sostiene, Salto manifiesta. Comosny: Alma y Estrategia.</p>
        <button
          className="bg-green-500 text-white py-3 px-6 rounded-full text-lg hover:bg-green-600 transition-colors"
          onClick={onCTAClick}
        >
          Hablemos en tu Frecuencia
        </button>
      </div>
    </section>
  );
};

export default FinalCTA;