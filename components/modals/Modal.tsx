
import React from 'react';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<ModalProps> = ({ isOpen, onClose, children }) => {
  if (!isOpen) return null;

  const handleOverlayClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
      onClick={handleOverlayClick}
    >
      <div className="modal-content bg-white p-6 rounded-lg shadow-xl w-11/12 max-w-2xl relative max-h-[90vh] overflow-y-auto">
        <span
          className="absolute top-2 right-4 text-2xl text-gray-500 cursor-pointer hover:text-gray-800"
          onClick={onClose}
        >
          &times;
        </span>
        {children}
      </div>
    </div>
  );
};

export default Modal;
