import React from 'react';

interface StickyCTAProps {
  onCTAClick: () => void;
}

const StickyCTA: React.FC<StickyCTAProps> = ({ onCTAClick }) => {
  return (
    <div className="sticky bottom-0 w-full z-40 bg-blue-900 text-white p-4 text-center">
      <p className="inline-block mr-4">Transforma tu fricción ahora</p>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600"
        onClick={onCTAClick}
      >
        Diagnóstico Xpress
      </button>
    </div>
  );
};

export default StickyCTA;