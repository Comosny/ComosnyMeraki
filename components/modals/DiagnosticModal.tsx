import React, { useState, useEffect } from 'react';
import { questions, resultPhrases, resultVisuals } from '../../constants';
import { AnswerScores, Question, ResultType } from '../../types';

interface DiagnosticModalProps {
  isOpen: boolean;
  onClose: () => void;
  onQuizComplete: (resultType: ResultType) => void;
}

type QuizStage = 'welcome' | 'questions' | 'email' | 'results';

const DiagnosticModal: React.FC<DiagnosticModalProps> = ({ isOpen, onClose, onQuizComplete }) => {
  const [stage, setStage] = useState<QuizStage>('welcome');
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<AnswerScores>({ A: 0, B: 0, C: 0, D: 0 });
  const [finalResult, setFinalResult] = useState<ResultType | null>(null);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [statusMessage, setStatusMessage] = useState({ text: '', isSuccess: true });
  const [isSubmitting, setIsSubmitting] = useState(false);

  useEffect(() => {
    if (isOpen) {
      // Reset state when modal opens
      setStage('welcome');
      setCurrentQuestionIndex(0);
      setAnswers({ A: 0, B: 0, C: 0, D: 0 });
      setFinalResult(null);
      setName('');
      setEmail('');
      setStatusMessage({ text: '', isSuccess: true });
      setIsSubmitting(false);
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const startQuiz = () => setStage('questions');

  const handleOptionSelect = (type: ResultType) => {
    setAnswers(prev => ({ ...prev, [type]: prev[type] + 1 }));
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prev => prev + 1);
    } else {
      setStage('email');
    }
  };

  const calculateResults = (): ResultType => {
    return (Object.keys(answers) as ResultType[]).reduce((a, b) => (answers[a] > answers[b] ? a : b));
  };
  
  const handleEmailSubmit = async () => {
    if (!name.trim()) {
        setStatusMessage({ text: "⚠️ Ingresa tu nombre o empresa.", isSuccess: false});
        return;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!email.trim() || !emailRegex.test(email)) {
        setStatusMessage({ text: "⚠️ Ingresa un correo válido.", isSuccess: false});
        return;
    }

    setIsSubmitting(true);
    setStatusMessage({ text: "Enviando tu análisis...", isSuccess: true });

    const resultType = calculateResults();
    const scoreOperacional = (answers.A * 3) + (answers.B * 2) + (answers.C * 1);
    const payload = {
        user_name: name,
        user_email: email,
        frecuencia_tipo: resultType,
        frecuencia_nombre: resultVisuals[resultType].text,
        score_operacional: scoreOperacional,
        respuestas_raw: answers,
    };
    
    try {
        const n8nWebhookUrl = 'https://comosnycloea.app.n8n.cloud/webhook/ComosnyMERAKI';
        const response = await fetch(n8nWebhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(payload)
        });

        if (!response.ok) {
            console.error(`Error en Webhook: ${response.status}`);
        }
        
        setFinalResult(resultType);
        onQuizComplete(resultType);
        setStage('results');

    } catch (error) {
        console.error("Error n8n:", error);
        setFinalResult(resultType);
        onQuizComplete(resultType);
        setStage('results');
    } finally {
        setIsSubmitting(false);
    }
  };

  const currentQuestion: Question = questions[currentQuestionIndex];
  const progressPercentage = ((currentQuestionIndex + 1) / questions.length) * 100;

  const renderContent = () => {
    switch (stage) {
      case 'welcome':
        return (
          <div className="text-center">
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4">Descubre tu Frecuencia Operativa</h1>
            <p className="text-gray-600 mb-8">Responde 8 preguntas clave para entender tu ritmo actual y cómo MERAKI puede ayudarte a sintonizarlo.</p>
            <button onClick={startQuiz} className="inline-flex items-center gap-2 px-8 py-3 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition-colors">
              Comenzar Diagnóstico
              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
              </svg>
            </button>
          </div>
        );
      case 'questions':
        return (
          <div>
            <div className="w-full bg-gray-200 rounded-full h-2.5 mb-2">
              <div className="h-2.5 bg-blue-600 rounded-full transition-all duration-300 ease-in-out" style={{ width: `${progressPercentage}%` }}></div>
            </div>
            <p className="text-sm font-semibold text-blue-600 mb-6">Pregunta {currentQuestionIndex + 1} de {questions.length}</p>
            <h2 className="text-xl font-semibold text-gray-800 mb-8">{currentQuestion.question}</h2>
            <div className="space-y-3">
              {currentQuestion.options.map(option => (
                <button
                  key={option.text}
                  onClick={() => handleOptionSelect(option.type)}
                  className="w-full text-left py-3 px-4 bg-slate-100 text-gray-700 font-medium rounded-lg border border-slate-200 hover:bg-blue-600 hover:text-white hover:border-blue-600 transition-all duration-200"
                >
                  {option.text}
                </button>
              ))}
            </div>
          </div>
        );
       case 'email':
        return (
            <div className="pt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4">Desbloquea tu Frecuencia Operativa</h3>
                <p className="text-gray-600 mb-6">Ingresa tus datos para revelar tu arquetipo y recibir un plan personalizado para transformar fricción en claridad.</p>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholder="Tu nombre o el de tu Startup/PyME" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"/>
                <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Tu correo para el análisis completo" className="w-full px-4 py-3 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-indigo-500"/>
                <button onClick={handleEmailSubmit} disabled={isSubmitting} className="w-full py-3 bg-indigo-600 text-white font-semibold rounded-lg shadow-lg hover:bg-indigo-700 disabled:bg-indigo-300 disabled:cursor-not-allowed">
                    {isSubmitting ? 'Revelando...' : 'Revelar mi Frecuencia'}
                </button>
                {statusMessage.text && (
                    <div className={`mt-4 p-3 rounded-lg text-sm ${statusMessage.isSuccess ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                        {statusMessage.text}
                    </div>
                )}
            </div>
        );
      case 'results':
        if (!finalResult) return null;
        const resultData = resultVisuals[finalResult];
        const phraseData = resultPhrases[finalResult];
        return (
          <div className="result-area text-center">
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">Tu Frecuencia Actual es:</h2>
            <div className={`result-visual w-40 h-40 rounded-full mx-auto flex items-center justify-center font-extrabold text-white text-2xl mb-8 ${resultData.color}`}>
              {resultData.text}
            </div>
            <div className="result-phrase italic text-xl sm:text-2xl text-gray-700 mb-8">{phraseData.jsx}</div>
            <p className="text-gray-600 mb-8">Hemos enviado tu análisis completo a tu correo. ¡Revisa tu bandeja para el siguiente paso!</p>
            <button className="bg-green-500 text-white py-2 px-4 rounded-lg hover:bg-green-600" onClick={() => alert('Función de compartir no implementada')}>
              Comparte y desbloquea un módulo bonus
            </button>
          </div>
        );
    }
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50 p-4">
      <div className="bg-white p-6 sm:p-8 rounded-2xl w-full max-w-lg relative max-h-[90vh] overflow-y-auto shadow-2xl">
        <button className="absolute top-3 right-3 text-3xl text-gray-400 hover:text-gray-700" onClick={onClose} aria-label="Cerrar modal">&times;</button>
        {renderContent()}
      </div>
    </div>
  );
};

export default DiagnosticModal;