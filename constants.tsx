
import React from 'react';
import { Question, ResultPhrases, ResultVisuals } from './types';

export const questions: Question[] = [
  { question: "Cuando todo se acumula, tú...", options: [
    { text: "Resuelves rápido, aunque duela.", type: "A" },
    { text: "Saltas entre tareas buscando aire.", type: "B" },
    { text: "Te frustras, pero sigues.", type: "C" },
    { text: "Tomas más de lo que puedes.", type: "D" }
  ]},
  { question: "Tu calendario es...", options: [
    { text: "Una lista viva de fuegos.", type: "A" },
    { text: "Una fantasía que nunca se cumple.", type: "B" },
    { text: "Un campo de batalla de reuniones.", type: "C" },
    { text: "Mantienes a punta de esfuerzo.", type: "D" }
  ]},
  { question: "Cuando alguien pide algo urgente...", options: [
    { text: "Lo haces tú mismo.", type: "A" },
    { text: "Delegas, pero supervisas todo.", type: "B" },
    { text: "Lo agendas aunque no cabe.", type: "C" },
    { text: "Resuelves sin reconocimiento.", type: "D" }
  ]},
  { question: "¿Qué pasa si no estás un día?", options: [
    { text: "Todo se detiene.", type: "A" },
    { text: "Nadie sabe qué hacer.", type: "B" },
    { text: "Siguen, pero desordenados.", type: "C" },
    { text: "Nada cambia, pero tú hiciste todo.", type: "D" }
  ]},
  { question: "¿Qué parte del día drena tu energía?", options: [
    { text: "Corregir errores evitables.", type: "A" },
    { text: "Pensar en tareas pendientes.", type: "B" },
    { text: "Reuniones sin decisión.", type: "C" },
    { text: "Recordar tareas no documentadas.", type: "D" }
  ]},
  { question: "¿Qué no puedes decir en voz alta?", options: [
    { text: "“Si paro, todo se cae.”", type: "A" },
    { text: "“No sé si esto está bien.”", type: "B" },
    { text: "“No tengo tiempo para pensar.”", type: "C" },
    { text: "“Hago más de lo que me pagan.”", type: "D" }
  ]},
  { question: "¿Cómo te reconocen en tu equipo?", options: [
    { text: "El que resuelve todo.", type: "A" },
    { text: "El de mil ideas.", type: "B" },
    { text: "El siempre disponible.", type: "C" },
    { text: "El que está, pero no se escucha.", type: "D" }
  ]},
  { question: "Si rediseñas tu sistema, ¿qué haces primero?", options: [
    { text: "Eliminar tareas que queman.", type: "A" },
    { text: "Tener claridad sobre qué importa.", type: "B" },
    { text: "Hacer que lo delegado no regrese.", type: "C" },
    { text: "Sentirme visto en mi rol.", type: "D" }
  ]}
];

export const resultPhrases: ResultPhrases = {
  A: { jsx: <>Frecuencia <b>Intensa</b> y Centralizada. No es débil, está mal sintonizada. Necesitas <b>Arquitectura Operativa</b> para soltar y escalar.</> },
  B: { jsx: <>Frecuencia <b>Creativa</b> y Dispersa. Tu caos es potencial. Necesitas <b>Claridad Estructural</b> para procesos replicables.</> },
  C: { jsx: <>Frecuencia <b>Conectada</b> y Sobrecargada. Tu sistema está roto, no tú. Necesitas <b>Rediseño Metodológico</b> para liberar tiempo.</> },
  D: { jsx: <>Frecuencia <b>Constante</b> y Subvalorada. Tu dedicación es pilar. Necesitas <b>Métricas Claras</b> para mostrar tu valor.</> }
};

export const resultVisuals: ResultVisuals = {
  A: { color: "bg-red-600", text: "Intensa", class: "bg-red-100" },
  B: { color: "bg-blue-600", text: "Creativa", class: "bg-blue-100" },
  C: { color: "bg-purple-600", text: "Conectada", class: "bg-purple-100" },
  D: { color: "bg-gray-600", text: "Constante", class: "bg-gray-100" }
};
