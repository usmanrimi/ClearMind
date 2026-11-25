export type LanguageCode = 'en' | 'ha' | 'yo' | 'ig';

export type SectionId = 'home' | 'education' | 'ai-support' | 'recovery' | 'audio';

export type DrugFilter = 'all' | 'brain' | 'body' | 'addiction';

export type ImpactTab = 'brain' | 'body' | 'behavior' | 'safety';

export type MoodType = 'strong' | 'hopeful' | 'struggling' | 'need-support';

export interface DrugEntry {
  id: string;
  name: string;
  localNames: string;
  category: Exclude<DrugFilter, 'all'>;
  shortSummary: string;
  brainEffect: string;
  bodyEffect: string;
  behaviorEffect: string;
  staySafeTip: string;
  riskLevel: string;
  audioScript: string;
}

export interface QuizQuestion {
  id: string;
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface LessonSlide {
  title: string;
  caption: string;
  keyTakeaway: string;
}

export interface AudioLesson {
  id: string;
  title: string;
  durationLabel: string;
  imagePath: string;
  imageAlt: string;
  slides: LessonSlide[];
}

export interface CheckInEntry {
  date: string; // YYYY-MM-DD
  mood: MoodType;
  habits: string[];
  note: string;
  createdAt: string;
}

export interface ChatMessage {
  id: string;
  role: 'user' | 'assistant';
  text: string;
  language: LanguageCode;
}
