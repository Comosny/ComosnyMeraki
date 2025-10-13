
import React from 'react';

const Referral: React.FC = () => {

    const shareReferral = () => {
        const url = 'https://meraki.com'; // Replace with actual URL
        navigator.clipboard.writeText(url).then(() => {
            alert('Link copiado. Compártelo para desbloquear bonus.');
        }).catch(err => {
            console.error('Failed to copy: ', err);
            prompt('Copia este enlace:', url);
        });
    };

    return (
        <section className="py-12 bg-white text-center">
            <div className="p-6 bg-white rounded-lg max-w-4xl mx-auto px-4">
                <p className="text-gray-600 mb-4">Comparte MERAKI y desbloquea módulo bonus.</p>
                <button className="bg-green-500 text-white py-2 px-4 rounded hover:bg-green-600" onClick={shareReferral}>Comparte Ahora</button>
            </div>
        </section>
    );
};

export default Referral;
