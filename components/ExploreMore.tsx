
import React from 'react';
import { ModalType } from '../types';

interface ExploreMoreProps {
    openModal: (modalType: ModalType) => void;
}

const ExploreMore: React.FC<ExploreMoreProps> = ({ openModal }) => {
  return (
    <section className="py-8 bg-gray-100">
      <h2 className="text-2xl font-bold text-center text-blue-900 mb-4">Explora Más</h2>
      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-4 px-4">
        <button className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition-colors" onClick={() => openModal(ModalType.Rabia)}>Rabia como Motor</button>
        <button className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition-colors" onClick={() => openModal(ModalType.Invisibilidad)}>Invisibilidad en PyMEs</button>
        <button className="bg-white p-4 rounded-lg shadow hover:bg-blue-50 transition-colors" onClick={() => openModal(ModalType.Abandono)}>Abandono Transformador</button>
      </div>
    </section>
  );
};

export default ExploreMore;
