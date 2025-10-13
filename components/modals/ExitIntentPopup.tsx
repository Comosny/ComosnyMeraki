import React from 'react';

interface ExitIntentPopupProps {
  isVisible: boolean;
  onCTAClick: () => void;
}

const ExitIntentPopup: React.FC<ExitIntentPopupProps> = ({ isVisible, onCTAClick }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed bottom-8 right-8 bg-gradient-to-r from-blue-800 to-indigo-600 text-white p-6 rounded-lg shadow-2xl z-[1000] max-w-sm">
      <h3 className="text-lg font-bold mb-2 text-white">¡No abandones tu resonancia!</h3>
      <p className="mb-4 text-gray-200">Descubre tu arquetipo con Diagnóstico Xpress y transforma colapso en claridad.</p>
      <button
        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition-transform transform hover:scale-105"
        onClick={onCTAClick}
      >
        Inicia Diagnóstico
      </button>
    </div>
  );
};

export default ExitIntentPopup;