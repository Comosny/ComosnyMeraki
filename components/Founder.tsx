import React from 'react';

interface FounderProps {
    onManifiestoClick: () => void;
}

const Founder: React.FC<FounderProps> = ({ onManifiestoClick }) => {
  return (
    <section className="py-16 sm:py-20">
      <div className="max-w-4xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-8 items-center">
        <div className="md:col-span-1 flex justify-center">
          {/* A more professional placeholder image */}
          <img src="https://images.unsplash.com/photo-1580852300654-0348f0914d3a?q=80&w=400&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Jhovanny Sánchez" className="rounded-full w-40 h-40 object-cover mx-auto border-4 border-blue-200" />
        </div>
        <div className="md:col-span-2 text-center md:text-left">
            <h2 className="text-2xl font-semibold text-gray-800">Jhovanny Sánchez, Chief of Clarity</h2>
            <p className="text-gray-600 italic my-4">Lidero con empatía, reordeno con precisión, transformo con estrategia. Fusiono alma y estructura para líderes en fricción.</p>
            <button className="text-blue-500 font-semibold underline hover:text-blue-700" onClick={onManifiestoClick}>
                Lee el Manifiesto
            </button>
        </div>
      </div>
    </section>
  );
};

export default Founder;