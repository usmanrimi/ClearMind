import { type FormEvent, useEffect, useState } from 'react';
import { Check, Phone, RotateCcw } from 'lucide-react';
import type { TranslationPack } from '../data/translations';
import type { CheckInEntry, LanguageCode, MoodType } from '../types';
import type { ReadAloudState } from '../hooks/useReadAloud';
import {
  getMilestoneProgress,
  hasCheckedInOnDate,
  validateCheckInInput,
} from '../utils/recovery';
import { ReadAloudButton } from './ReadAloudButton';

interface RecoveryTrackerProps {
  t: TranslationPack;
  language: LanguageCode;
  todayIso: string;
  entries: CheckInEntry[];
  streakDays: number;
  onSaveCheckIn: (entry: CheckInEntry) => void;
  onResetCheckIns: () => void;
  audio: ReadAloudState;
}

const MOOD_ORDER: MoodType[] = ['strong', 'hopeful', 'struggling', 'need-support'];

export function RecoveryTracker({
  t,
  language,
  todayIso,
  entries,
  streakDays,
  onSaveCheckIn,
  onResetCheckIns,
  audio,
}: RecoveryTrackerProps) {
  const todayEntry = entries.find((e) => e.date === todayIso);
  const alreadyCheckedIn = hasCheckedInOnDate(entries, todayIso);
  const milestone = getMilestoneProgress(streakDays);

  const [mood, setMood] = useState<MoodType | null>(todayEntry?.mood ?? null);
  const [selectedHabits, setSelectedHabits] = useState<string[]>(todayEntry?.habits ?? []);
  const [note, setNote] = useState<string>(todayEntry?.note ?? '');
  const [formError, setFormError] = useState<string | null>(null);
  const [savedMood, setSavedMood] = useState<MoodType | null>(todayEntry?.mood ?? null);
  const [confirmingReset, setConfirmingReset] = useState(false);

  // Keep local form synchronized when entries reset
  useEffect(() => {
    const existing = entries.find((e) => e.date === todayIso);
    if (!existing) {
      setMood(null);
      setSelectedHabits([]);
      setNote('');
      setSavedMood(null);
    }
  }, [entries, todayIso]);

  const toggleHabit = (habitId: string) => {
    setFormError(null);
    setSelectedHabits((prev) =>
      prev.includes(habitId) ? prev.filter((id) => id !== habitId) : [...prev, habitId],
    );
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    const validation = validateCheckInInput(mood, selectedHabits, note);
    if (!validation.valid) {
      setFormError(
        validation.errorKey === 'moodRequired'
          ? t.recovery.validationMood
          : t.recovery.validationHabitOrNote,
      );
      return;
    }

    setFormError(null);
    const confirmedMood = mood!;
    onSaveCheckIn({
      date: todayIso,
      mood: confirmedMood,
      habits: selectedHabits,
      note: note.trim(),
      createdAt: new Date().toISOString(),
    });
    setSavedMood(confirmedMood);
  };

  const handleResetClick = () => {
    if (!confirmingReset) {
      setConfirmingReset(true);
      return;
    }
    setConfirmingReset(false);
    onResetCheckIns();
  };

  const encouragementText = savedMood ? t.recovery.moods[savedMood].encouragement : null;

  return (
    <div className="space-y-12">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-extrabold text-[#0F3D6E] sm:text-4xl">
          {t.recovery.title}
        </h1>
        <p className="text-base leading-relaxed text-slate-600">
          {t.recovery.subtitle}
        </p>
      </div>

      {/* Progress & Streak Banner */}
      <section className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-4 space-y-1">
          <p className="text-xs font-semibold text-[#0F766E]">
            {t.recovery.streakLabel}
          </p>
          <p className="flex items-baseline gap-2.5">
            <span
              data-testid="streak-count"
              className="font-mono text-5xl font-semibold tabular-nums text-[#0F3D6E]"
            >
              {streakDays}
            </span>
            <span className="text-lg font-semibold text-slate-600">
              {t.recovery.daysLabel}
            </span>
          </p>
        </div>

        <div className="lg:col-span-8 space-y-3 border-t border-slate-100 pt-5 lg:border-t-0 lg:border-l lg:pl-8 lg:pt-0">
          <div className="flex flex-wrap items-baseline justify-between gap-2">
            <h2 className="text-base font-bold text-[#0F3D6E]">
              {t.recovery.milestoneHeading}
            </h2>
            <p className="text-sm font-medium text-slate-600 font-mono tabular-nums">
              {t.recovery.milestoneGoalPrefix}: {milestone.currentDays} / {milestone.targetDays}{' '}
              {t.recovery.daysLabel} ({milestone.percent}%)
            </p>
          </div>

          {/* Teal Green Progress Bar */}
          <div
            role="progressbar"
            aria-valuenow={milestone.percent}
            aria-valuemin={0}
            aria-valuemax={100}
            aria-label={t.recovery.milestoneHeading}
            className="h-3.5 w-full overflow-hidden rounded-full bg-slate-100"
          >
            <div
              className="h-full rounded-full bg-[#0D9488] transition-[width] duration-300"
              style={{ width: `${milestone.percent}%` }}
            />
          </div>

          <p className="text-sm text-slate-600">
            {milestone.daysRemaining > 0
              ? `${milestone.daysRemaining} ${t.recovery.daysLeftLabel}.`
              : t.recovery.milestoneReached}
          </p>
        </div>
      </section>

      {/* Main Split: Daily Check-In Form + History & Helpline */}
      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Daily Check-In Form */}
        <section className="lg:col-span-7 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold text-[#0F3D6E]">
              {t.recovery.checkInTitle}
            </h2>
            {alreadyCheckedIn && (
              <p className="text-sm text-[#0F766E] font-medium">
                {t.recovery.alreadyCheckedInNotice}
              </p>
            )}
          </div>

          <form onSubmit={handleSubmit} className="space-y-6" noValidate>
            {/* Mood Selection */}
            <fieldset className="space-y-3">
              <legend className="text-sm font-bold text-[#0B2545]">
                {t.recovery.moodLabel}
              </legend>
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {MOOD_ORDER.map((moodKey) => {
                  const selected = mood === moodKey;
                  return (
                    <button
                      key={moodKey}
                      type="button"
                      aria-pressed={selected}
                      onClick={() => {
                        setMood(moodKey);
                        setFormError(null);
                      }}
                      className={`min-h-[44px] rounded-xl border px-3 py-2.5 text-sm font-semibold transition-colors ${
                        selected
                          ? 'border-[#0D9488] bg-[#F0FDFA] text-[#0F766E]'
                          : 'border-slate-200 bg-[#F8FAFC] text-slate-700 hover:border-[#0F3D6E]/40'
                      }`}
                    >
                      {t.recovery.moods[moodKey].label}
                    </button>
                  );
                })}
              </div>
            </fieldset>

            {/* Healthy Habits Checklist */}
            <fieldset className="space-y-3">
              <legend className="text-sm font-bold text-[#0B2545]">
                {t.recovery.habitsLabel}
              </legend>
              <div className="space-y-2.5">
                {t.recovery.habits.map((habit) => {
                  const checked = selectedHabits.includes(habit.id);
                  return (
                    <label
                      key={habit.id}
                      className={`flex min-h-[44px] cursor-pointer items-center gap-3 rounded-xl border px-4 py-3 text-sm transition-colors ${
                        checked
                          ? 'border-[#0D9488] bg-[#F0FDFA] text-[#0B2545] font-medium'
                          : 'border-slate-200 bg-white text-slate-700 hover:bg-[#F8FAFC]'
                      }`}
                    >
                      <input
                        type="checkbox"
                        checked={checked}
                        onChange={() => toggleHabit(habit.id)}
                        className="sr-only"
                      />
                      <span
                        aria-hidden="true"
                        className={`flex h-5 w-5 items-center justify-center rounded border shrink-0 transition-colors ${
                          checked
                            ? 'border-[#0D9488] bg-[#0D9488] text-white'
                            : 'border-slate-300 bg-white'
                        }`}
                      >
                        {checked && <Check className="h-3.5 w-3.5" />}
                      </span>
                      <span>{habit.label}</span>
                    </label>
                  );
                })}
              </div>
            </fieldset>

            {/* Reflection Note */}
            <div className="space-y-2">
              <label htmlFor="recovery-note" className="block text-sm font-bold text-[#0B2545]">
                {t.recovery.noteLabel}
              </label>
              <textarea
                id="recovery-note"
                rows={3}
                value={note}
                onChange={(e) => {
                  setNote(e.target.value);
                  if (formError) setFormError(null);
                }}
                placeholder={t.recovery.notePlaceholder}
                className="w-full rounded-xl border border-slate-300 bg-white px-4 py-3 text-sm text-[#0B2545] placeholder:text-slate-400 focus:border-[#0D9488] focus:outline-none"
              />
            </div>

            {formError && (
              <p role="alert" className="text-sm font-semibold text-rose-700">
                {formError}
              </p>
            )}

            <button
              type="submit"
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#0F3D6E] px-6 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#155293] transition-colors"
            >
              {alreadyCheckedIn ? t.recovery.updateButton : t.recovery.saveButton}
            </button>
          </form>

          {/* Encouragement Feedback Card */}
          {encouragementText && (
            <div
              role="status"
              className="rounded-xl border border-[#0D9488]/40 bg-[#F0FDFA] p-5 space-y-3"
            >
              <p className="text-xs font-semibold text-[#0F766E]">
                {t.recovery.savedFeedbackTitle}
              </p>
              <p className="text-sm sm:text-base leading-relaxed text-[#0B2545]">
                {encouragementText}
              </p>
              <ReadAloudButton
                id={`recovery-encourage-${savedMood}-${language}`}
                text={encouragementText}
                language={language}
                audio={audio}
                label={t.audioControls.listen}
                loadingLabel={t.audioControls.loading}
                stopLabel={t.audioControls.stop}
                variant="subtle"
              />
            </div>
          )}
        </section>

        {/* Right Column: Check-In History + Real-Life Helpline */}
        <aside className="lg:col-span-5 space-y-6">
          {/* History Log */}
          <div className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 space-y-4">
            <div className="flex items-center justify-between gap-3">
              <h2 className="text-lg font-bold text-[#0F3D6E]">
                {t.recovery.historyTitle}
              </h2>
              {entries.length > 0 && (
                <button
                  type="button"
                  onClick={handleResetClick}
                  onBlur={() => setConfirmingReset(false)}
                  className="inline-flex min-h-[36px] items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 hover:border-rose-300 hover:text-rose-700 transition-colors"
                >
                  <RotateCcw className="h-3.5 w-3.5 shrink-0" aria-hidden="true" />
                  <span>{confirmingReset ? t.recovery.resetConfirmText : t.recovery.resetButton}</span>
                </button>
              )}
            </div>

            {entries.length === 0 ? (
              <p className="text-sm text-slate-600">{t.recovery.historyEmpty}</p>
            ) : (
              <ul className="divide-y divide-slate-200" data-testid="checkin-history">
                {entries.slice(0, 7).map((entry) => (
                  <li key={entry.date} className="py-3.5 first:pt-0 last:pb-0 space-y-1">
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-500">
                      <span className="font-mono font-semibold tabular-nums text-[#0F3D6E]">
                        {entry.date}
                      </span>
                      <span className="font-semibold text-[#0F766E]">
                        {t.recovery.moods[entry.mood].label} · {entry.habits.length}{' '}
                        {entry.habits.length === 1
                          ? t.recovery.habitSingular
                          : t.recovery.habitPlural}
                      </span>
                    </div>
                    {entry.note && (
                      <p className="text-sm text-slate-700 leading-relaxed">{entry.note}</p>
                    )}
                  </li>
                ))}
              </ul>
            )}
          </div>

          {/* Trusted Adult & NDLEA Helpline */}
          <div className="rounded-2xl border border-slate-200 bg-[#0F3D6E] p-6 text-white space-y-3">
            <h2 className="text-lg font-bold text-white">{t.recovery.helpTitle}</h2>
            <p className="text-sm leading-relaxed text-blue-100">{t.recovery.helpBody}</p>
            <div className="rounded-xl bg-white/10 p-4 space-y-1">
              <p className="text-xs font-semibold text-teal-200">
                {t.recovery.helplineLabel}
              </p>
              <a
                href="tel:080010203040"
                className="inline-flex items-center gap-2 font-mono text-2xl font-semibold tabular-nums text-white hover:text-teal-200 transition-colors"
              >
                <Phone className="h-5 w-5 shrink-0" aria-hidden="true" />
                <span>{t.recovery.helplineNumber}</span>
              </a>
              <p className="text-xs text-blue-100">{t.recovery.helplineNote}</p>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
}
