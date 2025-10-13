import React, { useState, useEffect } from 'react';
import Header from './components/Header';
import Services from './components/Services';
import Methodology from './components/Methodology';
import Founder from './components/Founder';
import CaseStudies from './components/CaseStudies';
import Testimonials from './components/Testimonials';
import Resources from './components/Resources';
import ExploreMore from './components/ExploreMore';
import Referral from './components/Referral';
import FinalCTA from './components/FinalCTA';
import StickyCTA from './components/StickyCTA';
import Chatbot from './components/Chatbot';
import DiagnosticModal from './components/modals/DiagnosticModal';
import TimedPopup from './components/modals/TimedPopup';
import ExitIntentPopup from './components/modals/ExitIntentPopup';
import Modal from './components/modals/Modal';
import { ModalType, ResultType } from './types';
import { resultPhrases } from './constants';

const App: React.FC = () => {
  const [activeModal, setActiveModal] = useState<ModalType>(ModalType.None);
  const [quizResult, setQuizResult] = useState<ResultType | null>(null);
  const [personalizedText, setPersonalizedText] = useState<React.ReactNode>("Descubre recursos para optimizar tu flujo de trabajo y bienestar.");
  const [showTimedPopup, setShowTimedPopup] = useState(false);
  const [showExitIntentPopup, setShowExitIntentPopup] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowTimedPopup(true);
    }, 15000); // Show popup after 15 seconds

    const handleMouseLeave = (e: MouseEvent) => {
      if (e.clientY <= 0 && !sessionStorage.getItem('exitIntentShown')) {
        setShowExitIntentPopup(true);
        sessionStorage.setItem('exitIntentShown', 'true');
      }
    };

    document.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      clearTimeout(timer);
      document.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  const openModal = (modalType: ModalType) => setActiveModal(modalType);
  const closeModal = () => setActiveModal(ModalType.None);

  const handleQuizComplete = (result: ResultType) => {
    setQuizResult(result);
    const phrase = resultPhrases[result].jsx;
    setPersonalizedText(<>Basado en tu Frecuencia, aquí tienes recursos curados para ti: {phrase}</>);
  };

  const getModalContent = () => {
    switch (activeModal) {
      case ModalType.Manifiesto:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Manifiesto MERAKI</h2>
            <p className="mb-2"><strong>1. La Fricción es un Umbral, no un Destino:</strong> Vemos el colapso como una señal de que un sistema necesita evolucionar, no como un fracaso del individuo.</p>
            <p className="mb-2"><strong>2. Alma y Estructura son inseparables:</strong> Un proceso sin humanidad es ineficiente. Una visión sin sistema es un sueño.</p>
            <p className="mb-2"><strong>3. Claridad es Coherencia:</strong> Alineamos lo que se piensa, se dice y se hace. La coherencia es el camino más corto a la eficiencia.</p>
            <p className="mb-2"><strong>4. El Salto Cuántico es Metodológico:</strong> La gran transformación no es un acto de magia, sino el resultado de un rediseño consciente y sostenido.</p>
          </div>
        );
      case ModalType.Rabia:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">Rabia como Motor</h2>
            <p>La rabia en el entorno laboral a menudo surge de la impotencia: procesos rotos, falta de reconocimiento o una carga de trabajo insostenible. En MERAKI, no la vemos como una emoción negativa a suprimir, sino como energía mal canalizada. Es el motor que, bien sintonizado, puede impulsar el cambio más radical y necesario. La transformamos en combustible para rediseñar sistemas, establecer límites y construir una operación donde la frustración se convierte en flujo.</p>
          </div>
        );
      case ModalType.Invisibilidad:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">La Invisibilidad en Startups y PyMEs</h2>
            <p>Ser invisible es hacer un trabajo crucial que nadie ve, entiende o valora hasta que falla. Es el pilar silencioso que sostiene la operación. Este arquetipo sufre en silencio, acumulando tareas y responsabilidades sin la estructura para delegar o la visibilidad para ser reconocido. Nuestro enfoque es simple: hacer visible lo invisible. A través de métricas claras, documentación de procesos y sistemas de comunicación, convertimos el esfuerzo silencioso en valor tangible y reconocido.</p>
          </div>
        );
      case ModalType.Abandono:
        return (
          <div>
            <h2 className="text-2xl font-bold mb-4">El Abandono Transformador</h2>
            <p>El sentimiento de abandono ocurre cuando un líder se siente solo en la batalla, tirando del carro mientras el equipo parece desconectado. Es la consecuencia de una delegación fallida y una falta de autonomía real en el equipo. Transformar el abandono significa construir un sistema auto-sostenible. Creamos arquitecturas operativas donde las responsabilidades son claras, los procesos son replicables y el líder puede soltar el control sin que todo se desmorone. Es pasar de "hacerlo todo" a "dirigir un sistema que lo hace".</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="App bg-white">
      <Header onCTAClick={() => openModal(ModalType.Diagnostic)} />
      <main>
        <div className="bg-slate-50"><Services /></div>
        <Methodology />
        <div className="bg-slate-50"><Founder onManifiestoClick={() => openModal(ModalType.Manifiesto)} /></div>
        <CaseStudies />
        <div className="bg-slate-50"><Testimonials /></div>
        <Resources personalizedText={personalizedText} />
        <div className="bg-slate-50"><ExploreMore openModal={openModal} /></div>
        <Referral />
      </main>
      <FinalCTA onCTAClick={() => openModal(ModalType.Diagnostic)} />
      
      <StickyCTA onCTAClick={() => openModal(ModalType.Diagnostic)} />
      <Chatbot onCTAClick={() => openModal(ModalType.Diagnostic)} />

      <DiagnosticModal 
        isOpen={activeModal === ModalType.Diagnostic} 
        onClose={closeModal}
        onQuizComplete={handleQuizComplete}
      />
      
      <Modal isOpen={
          activeModal === ModalType.Manifiesto ||
          activeModal === ModalType.Rabia ||
          activeModal === ModalType.Invisibilidad ||
          activeModal === ModalType.Abandono
        } 
        onClose={closeModal}
      >
        {getModalContent()}
      </Modal>

      <TimedPopup isVisible={showTimedPopup} onClose={() => setShowTimedPopup(false)} />
      <ExitIntentPopup isVisible={showExitIntentPopup} onCTAClick={() => {
        setShowExitIntentPopup(false);
        openModal(ModalType.Diagnostic);
      }} />
    </div>
  );
};

export default App;