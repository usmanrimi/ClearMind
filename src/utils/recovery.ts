import type { CheckInEntry, MoodType, QuizQuestion } from '../types';

export const MILESTONE_DAYS = [1, 7, 14, 30, 60, 90] as const;

export function toIsoDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

export function addDaysIso(isoDate: string, deltaDays: number): string {
  const [y, m, d] = isoDate.split('-').map(Number);
  const dt = new Date(Date.UTC(y, m - 1, d + deltaDays));
  const year = dt.getUTCFullYear();
  const month = String(dt.getUTCMonth() + 1).padStart(2, '0');
  const day = String(dt.getUTCDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}

/**
 * Computes consecutive daily check-in streak ending on `referenceDate` (or yesterday if not yet checked in today).
 */
export function calculateStreak(entries: CheckInEntry[], referenceDate: string): number {
  if (entries.length === 0) return 0;
  const dateSet = new Set(entries.map((e) => e.date));

  let cursor = referenceDate;
  if (!dateSet.has(cursor)) {
    const yesterday = addDaysIso(referenceDate, -1);
    if (!dateSet.has(yesterday)) {
      return 0;
    }
    cursor = yesterday;
  }

  let streak = 0;
  while (dateSet.has(cursor)) {
    streak += 1;
    cursor = addDaysIso(cursor, -1);
  }
  return streak;
}

export interface MilestoneProgress {
  currentDays: number;
  targetDays: number;
  percent: number;
  daysRemaining: number;
}

export function getMilestoneProgress(streakDays: number): MilestoneProgress {
  const safeDays = Math.max(0, Math.floor(streakDays));
  const targetDays =
    MILESTONE_DAYS.find((m) => safeDays < m) ?? MILESTONE_DAYS[MILESTONE_DAYS.length - 1];
  const percent =
    safeDays >= targetDays
      ? 100
      : Math.min(100, Math.round((safeDays / targetDays) * 100));
  const daysRemaining = Math.max(0, targetDays - safeDays);

  return {
    currentDays: safeDays,
    targetDays,
    percent,
    daysRemaining,
  };
}

export interface CheckInValidationResult {
  valid: boolean;
  errorKey?: 'moodRequired' | 'habitOrNoteRequired';
}

export function validateCheckInInput(
  mood: MoodType | null,
  habits: string[],
  note: string,
): CheckInValidationResult {
  if (!mood) {
    return { valid: false, errorKey: 'moodRequired' };
  }
  if (habits.length === 0 && note.trim().length === 0) {
    return { valid: false, errorKey: 'habitOrNoteRequired' };
  }
  return { valid: true };
}

/**
 * Inserts or updates a check-in for its ISO date and returns entries sorted newest-first.
 */
export function upsertCheckIn(entries: CheckInEntry[], next: CheckInEntry): CheckInEntry[] {
  const filtered = entries.filter((item) => item.date !== next.date);
  return [next, ...filtered].sort((a, b) => (a.date < b.date ? 1 : a.date > b.date ? -1 : 0));
}

export function hasCheckedInOnDate(entries: CheckInEntry[], isoDate: string): boolean {
  return entries.some((entry) => entry.date === isoDate);
}

/**
 * Creates deterministic starter seed check-ins for the 3 days before `todayIso`
 * so a student sees a live 3-day streak and can immediately log today's check-in.
 */
export function createStarterCheckIns(todayIso: string): CheckInEntry[] {
  return [
    {
      date: addDaysIso(todayIso, -1),
      mood: 'hopeful',
      habits: ['adult', 'water', 'school'],
      note: 'Finished my Basic Science homework and played football after school.',
      createdAt: `${addDaysIso(todayIso, -1)}T17:30:00.000Z`,
    },
    {
      date: addDaysIso(todayIso, -2),
      mood: 'strong',
      habits: ['water', 'avoid'],
      note: 'Walked home with my classmates and stayed focused.',
      createdAt: `${addDaysIso(todayIso, -2)}T16:45:00.000Z`,
    },
    {
      date: addDaysIso(todayIso, -3),
      mood: 'hopeful',
      habits: ['adult', 'school'],
      note: 'Started my fresh start plan and talked with my older sister.',
      createdAt: `${addDaysIso(todayIso, -3)}T18:10:00.000Z`,
    },
  ];
}

export interface QuizGrade {
  correctCount: number;
  totalCount: number;
  percent: number;
  passed: boolean;
}

export function gradeQuiz(
  questions: QuizQuestion[],
  selectedAnswers: Record<string, number>,
): QuizGrade {
  const totalCount = questions.length;
  if (totalCount === 0) {
    return { correctCount: 0, totalCount: 0, percent: 0, passed: false };
  }
  let correctCount = 0;
  for (const q of questions) {
    if (selectedAnswers[q.id] === q.correctIndex) {
      correctCount += 1;
    }
  }
  const percent = Math.round((correctCount / totalCount) * 100);
  return {
    correctCount,
    totalCount,
    percent,
    passed: correctCount >= Math.ceil(totalCount * 0.66),
  };
}
