import React from 'react';

interface ResourcesProps {
    // FIX: Changed type from string to React.ReactNode to allow JSX.
    personalizedText: React.ReactNode;
}

const Resources: React.FC<ResourcesProps> = ({ personalizedText }) => {
  return (
    <section className="py-12 bg-white text-center">
      <div className="max-w-4xl mx-auto px-4">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Recursos & Comunidad</h2>
        <p className="text-gray-600 mb-4">{personalizedText}</p>
        <a href="#" className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600">Descarga Manual</a>
      </div>
    </section>
  );
};

export default Resources;