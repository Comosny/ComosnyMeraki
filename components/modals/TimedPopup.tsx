
import React from 'react';

interface TimedPopupProps {
  isVisible: boolean;
  onClose: () => void;
}

const TimedPopup: React.FC<TimedPopupProps> = ({ isVisible, onClose }) => {
  if (!isVisible) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-[1000]">
      <div className="bg-white p-6 rounded-lg max-w-md relative mx-4">
        <h3 className="text-lg font-bold text-blue-900">Manual Resonancia Humana</h3>
        <p className="text-gray-600 mb-4">Descarga gratis: Tips para colapso laboral.</p>
        <a href="#" className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600">Descargar</a>
        <button
          className="absolute top-2 right-4 cursor-pointer text-gray-600 text-2xl"
          onClick={onClose}
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default TimedPopup;
