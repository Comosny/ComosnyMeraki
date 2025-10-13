
import React from 'react';

interface ChatbotProps {
  onCTAClick: () => void;
}

const Chatbot: React.FC<ChatbotProps> = ({ onCTAClick }) => {
  return (
    <div className="fixed bottom-20 right-5 z-40 bg-blue-900 text-white p-4 rounded-lg shadow-lg max-w-[300px]">
      <p>¿Qué fricción enfrentas? <button onClick={onCTAClick} className="text-green-300 underline">Inicia Diagnóstico</button></p>
    </div>
  );
};

export default Chatbot;
