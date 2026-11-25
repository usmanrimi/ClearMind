import test from 'node:test';
import assert from 'node:assert/strict';
import {
  addDaysIso,
  calculateStreak,
  createStarterCheckIns,
  getMilestoneProgress,
  gradeQuiz,
  hasCheckedInOnDate,
  upsertCheckIn,
  validateCheckInInput,
} from './recovery';
import { LANGUAGES, TRANSLATIONS } from '../data/translations';
import type { CheckInEntry, LanguageCode } from '../types';

test('calculateStreak counts consecutive days ending today or yesterday', () => {
  const today = '2026-11-25';
  const starter = createStarterCheckIns(today);
  assert.equal(calculateStreak(starter, today), 3);

  const withToday = upsertCheckIn(starter, {
    date: today,
    mood: 'strong',
    habits: ['water'],
    note: 'Stayed strong',
    createdAt: '2026-11-25T09:00:00.000Z',
  });
  assert.equal(calculateStreak(withToday, today), 4);
});

test('calculateStreak resets to 0 when there is a gap older than yesterday', () => {
  const today = '2026-11-25';
  const entries: CheckInEntry[] = [
    {
      date: addDaysIso(today, -2),
      mood: 'hopeful',
      habits: ['adult'],
      note: 'Two days ago',
      createdAt: '2026-11-23T09:00:00.000Z',
    },
  ];
  assert.equal(calculateStreak(entries, today), 0);
});

test('upsertCheckIn deduplicates same-day entries and keeps newest-first order', () => {
  const today = '2026-11-25';
  const starter = createStarterCheckIns(today);
  const first = upsertCheckIn(starter, {
    date: today,
    mood: 'hopeful',
    habits: ['water'],
    note: 'Morning check',
    createdAt: '2026-11-25T08:00:00.000Z',
  });
  const updated = upsertCheckIn(first, {
    date: today,
    mood: 'strong',
    habits: ['water', 'school'],
    note: 'Evening update',
    createdAt: '2026-11-25T18:00:00.000Z',
  });

  assert.equal(updated.length, 4);
  assert.equal(updated[0].date, today);
  assert.equal(updated[0].mood, 'strong');
  assert.equal(updated[0].note, 'Evening update');
  assert.equal(hasCheckedInOnDate(updated, today), true);
});

test('getMilestoneProgress advances milestones cleanly from 0 to 90+ days', () => {
  assert.deepEqual(getMilestoneProgress(0), {
    currentDays: 0,
    targetDays: 1,
    percent: 0,
    daysRemaining: 1,
  });
  assert.deepEqual(getMilestoneProgress(3), {
    currentDays: 3,
    targetDays: 7,
    percent: 43,
    daysRemaining: 4,
  });
  assert.deepEqual(getMilestoneProgress(7), {
    currentDays: 7,
    targetDays: 14,
    percent: 50,
    daysRemaining: 7,
  });
  assert.deepEqual(getMilestoneProgress(100), {
    currentDays: 100,
    targetDays: 90,
    percent: 100,
    daysRemaining: 0,
  });
});

test('validateCheckInInput enforces mood and at least one habit or note', () => {
  assert.deepEqual(validateCheckInInput(null, ['water'], ''), {
    valid: false,
    errorKey: 'moodRequired',
  });
  assert.deepEqual(validateCheckInInput('hopeful', [], '   '), {
    valid: false,
    errorKey: 'habitOrNoteRequired',
  });
  assert.deepEqual(validateCheckInInput('strong', ['school'], ''), {
    valid: true,
  });
  assert.deepEqual(validateCheckInInput('struggling', [], 'Spoke with my teacher'), {
    valid: true,
  });
});

test('gradeQuiz computes score and pass threshold accurately', () => {
  const questions = TRANSLATIONS.en.education.quiz;
  const perfect = gradeQuiz(questions, { q1: 0, q2: 1, q3: 2 });
  assert.equal(perfect.correctCount, 3);
  assert.equal(perfect.percent, 100);
  assert.equal(perfect.passed, true);

  const oneRight = gradeQuiz(questions, { q1: 0, q2: 0, q3: 0 });
  assert.equal(oneRight.correctCount, 1);
  assert.equal(oneRight.passed, false);
});

test('all 4 Nigerian languages have complete drug entries, quiz questions, and audio lessons', () => {
  const expectedLangs: LanguageCode[] = ['en', 'ha', 'yo', 'ig'];
  assert.deepEqual(
    LANGUAGES.map((l) => l.code),
    expectedLangs,
  );

  for (const code of expectedLangs) {
    const pack = TRANSLATIONS[code];
    assert.ok(pack, `Missing translation pack for ${code}`);
    assert.equal(pack.education.drugs.length, 6, `${code} should have 6 drug entries`);
    assert.equal(pack.education.quiz.length, 3, `${code} should have 3 quiz questions`);
    assert.equal(pack.audioHub.lessons.length, 3, `${code} should have 3 narrated lessons`);
    assert.equal(pack.aiSupport.starters.length, 4, `${code} should have 4 starter prompts`);
    assert.equal(pack.recovery.habits.length, 4, `${code} should have 4 recovery habits`);
    for (const lesson of pack.audioHub.lessons) {
      assert.equal(lesson.slides.length, 3, `${code} lesson ${lesson.id} should have 3 slides`);
    }
  }
});
