
export interface QuestionOption {
  text: string;
  type: "A" | "B" | "C" | "D";
}

export interface Question {
  question: string;
  options: QuestionOption[];
}

export type AnswerScores = Record<"A" | "B" | "C" | "D", number>;

export type ResultType = "A" | "B" | "C" | "D";

export interface ResultVisual {
  color: string;
  text: string;
  class: string;
}

export type ResultVisuals = Record<ResultType, ResultVisual>;

export interface ResultPhrase {
  jsx: React.ReactNode;
}

export type ResultPhrases = Record<ResultType, ResultPhrase>;

export enum ModalType {
    None,
    Diagnostic,
    Manifiesto,
    Rabia,
    Invisibilidad,
    Abandono
}
