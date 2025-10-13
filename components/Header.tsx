import React from 'react';

interface HeaderProps {
  onCTAClick: () => void;
}

const Header: React.FC<HeaderProps> = ({ onCTAClick }) => {
  return (
    <header className="relative bg-gray-900 bg-gradient-to-br from-gray-900 to-gray-800 text-white text-center lg:text-left overflow-hidden rounded-b-3xl">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-indigo-500 rounded-full mix-blend-multiply filter blur-3xl opacity-25 animate-blob"></div>
        
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-32">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-4">De Colapso Laboral a <span className="text-indigo-400">Salto Cuántico</span>: MERAKI.</h1>
            <p className="text-lg md:text-xl mb-8 max-w-3xl mx-auto lg:mx-0">Arquitectura de Resonancia Humana para Startups y PyMEs. Transforma <strong>invisibilidad, rabia y abandono</strong> en claridad y expansión.</p>
            <button
                className="bg-green-500 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-green-600 transition-colors"
                onClick={onCTAClick}
            >
                Inicia Diagnóstico Xpress
            </button>
        </div>
    </header>
  );
};

export default Header;