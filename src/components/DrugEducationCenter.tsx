import { useMemo, useState } from 'react';
import { Check, RotateCcw } from 'lucide-react';
import type { TranslationPack } from '../data/translations';
import type { DrugFilter, ImpactTab, LanguageCode } from '../types';
import type { ReadAloudState } from '../hooks/useReadAloud';
import { gradeQuiz } from '../utils/recovery';
import { ReadAloudButton } from './ReadAloudButton';

interface DrugEducationCenterProps {
  t: TranslationPack;
  language: LanguageCode;
  audio: ReadAloudState;
}

export function DrugEducationCenter({
  t,
  language,
  audio,
}: DrugEducationCenterProps) {
  const [filter, setFilter] = useState<DrugFilter>('all');
  const [selectedDrugId, setSelectedDrugId] = useState<string>(t.education.drugs[0].id);
  const [activeTab, setActiveTab] = useState<ImpactTab>('brain');

  // Mini-quiz state
  const [answers, setAnswers] = useState<Record<string, number>>({});
  const [quizSubmitted, setQuizSubmitted] = useState(false);
  const [quizError, setQuizError] = useState<string | null>(null);

  const filteredDrugs = useMemo(() => {
    if (filter === 'all') return t.education.drugs;
    return t.education.drugs.filter((d) => d.category === filter);
  }, [filter, t.education.drugs]);

  const activeDrug = useMemo(() => {
    return (
      filteredDrugs.find((d) => d.id === selectedDrugId) ??
      filteredDrugs[0] ??
      t.education.drugs[0]
    );
  }, [filteredDrugs, selectedDrugId, t.education.drugs]);

  const filterButtons: { id: DrugFilter; label: string }[] = [
    { id: 'all', label: t.education.filters.all },
    { id: 'brain', label: t.education.filters.brain },
    { id: 'body', label: t.education.filters.body },
    { id: 'addiction', label: t.education.filters.addiction },
  ];

  const impactTabs: { id: ImpactTab; label: string; content: string }[] = [
    { id: 'brain', label: t.education.tabs.brain, content: activeDrug.brainEffect },
    { id: 'body', label: t.education.tabs.body, content: activeDrug.bodyEffect },
    { id: 'behavior', label: t.education.tabs.behavior, content: activeDrug.behaviorEffect },
    { id: 'safety', label: t.education.tabs.safety, content: activeDrug.staySafeTip },
  ];

  const activeTabContent =
    impactTabs.find((item) => item.id === activeTab) ?? impactTabs[0];

  const quizGrade = useMemo(
    () => gradeQuiz(t.education.quiz, answers),
    [t.education.quiz, answers],
  );

  const handleCheckQuiz = () => {
    if (Object.keys(answers).length < t.education.quiz.length) {
      setQuizError(t.education.quizSelectAllPrompt);
      return;
    }
    setQuizError(null);
    setQuizSubmitted(true);
  };

  const handleResetQuiz = () => {
    setAnswers({});
    setQuizSubmitted(false);
    setQuizError(null);
  };

  return (
    <div className="space-y-14">
      {/* Header & Interactive Filter Controls */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <h1 className="text-3xl font-extrabold text-[#0F3D6E] sm:text-4xl">
            {t.education.title}
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            {t.education.subtitle}
          </p>
        </div>

        <div
          role="group"
          aria-label="Filter substances by primary harm"
          className="inline-flex flex-wrap items-center gap-1 rounded-xl bg-slate-100 p-1"
        >
          {filterButtons.map((btn) => {
            const isSelected = filter === btn.id;
            return (
              <button
                key={btn.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => {
                  setFilter(btn.id);
                  const nextList =
                    btn.id === 'all'
                      ? t.education.drugs
                      : t.education.drugs.filter((d) => d.category === btn.id);
                  if (nextList.length > 0 && !nextList.some((d) => d.id === selectedDrugId)) {
                    setSelectedDrugId(nextList[0].id);
                  }
                }}
                className={`min-h-[40px] rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  isSelected
                    ? 'bg-[#0F3D6E] text-white'
                    : 'text-slate-700 hover:text-[#0F3D6E]'
                }`}
              >
                {btn.label}
              </button>
            );
          })}
        </div>
      </section>

      {/* Two-Zone Educational Explorer */}
      <section className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Left Zone: Substance Selector List */}
        <div className="lg:col-span-4 space-y-3">
          <h2 className="text-sm font-semibold text-slate-500">
            {t.education.listHeading}
          </h2>
          <div className="flex flex-col gap-2">
            {filteredDrugs.map((drug) => {
              const isSelected = drug.id === activeDrug.id;
              return (
                <button
                  key={drug.id}
                  type="button"
                  aria-pressed={isSelected}
                  onClick={() => {
                    setSelectedDrugId(drug.id);
                    setActiveTab('brain');
                  }}
                  className={`w-full rounded-xl border p-4 text-left transition-colors ${
                    isSelected
                      ? 'border-[#0D9488] bg-[#F0FDFA]'
                      : 'border-slate-200 bg-white hover:border-slate-300 hover:bg-[#F8FAFC]'
                  }`}
                >
                  <p className={`text-base font-bold ${isSelected ? 'text-[#0F3D6E]' : 'text-[#0B2545]'}`}>
                    {drug.name}
                  </p>
                  <p className="mt-1 text-xs text-slate-500">
                    {drug.localNames}
                  </p>
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Zone: Interactive Body & Brain Impact Stage */}
        <div className="lg:col-span-8">
          <article className="rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 space-y-6">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
              <div className="space-y-1.5">
                <h2 className="text-2xl font-extrabold text-[#0F3D6E]">
                  {activeDrug.name}
                </h2>
                <p className="text-sm text-slate-500">
                  <span>{t.education.alsoCalledLabel}: {activeDrug.localNames}</span>
                  <span aria-hidden="true"> · </span>
                  <span className="font-semibold text-[#0F766E]">{activeDrug.riskLevel}</span>
                </p>
              </div>

              <ReadAloudButton
                id={`drug-${activeDrug.id}-${language}`}
                text={activeDrug.audioScript}
                language={language}
                audio={audio}
                label={t.audioControls.listenInLang}
                loadingLabel={t.audioControls.loading}
                stopLabel={t.audioControls.stop}
                variant="primary"
              />
            </div>

            <p className="text-base leading-relaxed text-slate-700">
              {activeDrug.shortSummary}
            </p>

            {/* Interactive Impact Tabs */}
            <div className="space-y-4">
              <div
                role="tablist"
                aria-label="How this substance affects you"
                className="flex flex-wrap gap-2 border-b border-slate-200 pb-3"
              >
                {impactTabs.map((tab) => {
                  const selected = tab.id === activeTab;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      role="tab"
                      aria-selected={selected}
                      onClick={() => setActiveTab(tab.id)}
                      className={`min-h-[40px] rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                        selected
                          ? 'bg-[#0D9488] text-white'
                          : 'bg-[#F8FAFC] text-slate-700 hover:bg-slate-100'
                      }`}
                    >
                      {tab.label}
                    </button>
                  );
                })}
              </div>

              <div
                role="tabpanel"
                className="rounded-xl bg-[#F8FAFC] p-6 space-y-2"
              >
                <h3 className="text-lg font-bold text-[#0F3D6E]">
                  {activeTabContent.label}
                </h3>
                <p className="text-base leading-relaxed text-slate-700">
                  {activeTabContent.content}
                </p>
              </div>
            </div>

            {/* Clean overview of the other impact areas not currently active */}
            <div className="grid grid-cols-1 gap-4 border-t border-slate-100 pt-5 sm:grid-cols-3">
              {impactTabs
                .filter((item) => item.id !== activeTab)
                .map((item) => (
                  <button
                    key={item.id}
                    type="button"
                    onClick={() => setActiveTab(item.id)}
                    className="rounded-xl border border-slate-100 bg-white p-3.5 text-left hover:border-[#0D9488]/50 hover:bg-[#F0FDFA]/50 transition-colors"
                  >
                    <p className="text-xs font-semibold text-[#0F766E]">{item.label}</p>
                    <p className="mt-1 text-xs leading-relaxed text-slate-600 line-clamp-3">
                      {item.content}
                    </p>
                  </button>
                ))}
            </div>
          </article>
        </div>
      </section>

      {/* Interactive 3-Question Knowledge Check */}
      <section className="rounded-2xl border border-slate-200 bg-[#F8FAFC] p-6 sm:p-8 space-y-6">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-2xl font-bold text-[#0F3D6E]">{t.education.quizTitle}</h2>
            <p className="text-sm text-slate-600 mt-1">{t.education.quizSubtitle}</p>
          </div>
          {quizSubmitted && (
            <button
              type="button"
              onClick={handleResetQuiz}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-300 bg-white px-4 py-2 text-sm font-semibold text-[#0F3D6E] whitespace-nowrap shrink-0 hover:bg-slate-50"
            >
              <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{t.education.quizResetButton}</span>
            </button>
          )}
        </div>

        <div className="space-y-6">
          {t.education.quiz.map((q, qIdx) => {
            const chosen = answers[q.id];
            return (
              <fieldset key={q.id} className="space-y-3 border-t border-slate-200 pt-5 first:border-t-0 first:pt-0">
                <legend className="text-base font-bold text-[#0B2545]">
                  <span className="font-mono text-[#0D9488] mr-2 tabular-nums">0{qIdx + 1}.</span>
                  {q.question}
                </legend>
                <div className="grid grid-cols-1 gap-2.5">
                  {q.options.map((opt, optIdx) => {
                    const isSelected = chosen === optIdx;
                    const isCorrectOption = optIdx === q.correctIndex;
                    let optionStyle = 'border-slate-200 bg-white text-slate-700 hover:border-[#0F3D6E]/40';
                    if (quizSubmitted) {
                      if (isCorrectOption) {
                        optionStyle = 'border-[#0D9488] bg-[#F0FDFA] text-[#0F766E] font-semibold';
                      } else if (isSelected && !isCorrectOption) {
                        optionStyle = 'border-rose-400 bg-rose-50 text-rose-900';
                      }
                    } else if (isSelected) {
                      optionStyle = 'border-[#0F3D6E] bg-[#0F3D6E]/5 text-[#0F3D6E] font-semibold';
                    }

                    return (
                      <button
                        key={opt}
                        type="button"
                        disabled={quizSubmitted}
                        aria-pressed={isSelected}
                        onClick={() => {
                          setAnswers((prev) => ({ ...prev, [q.id]: optIdx }));
                          setQuizError(null);
                        }}
                        className={`flex min-h-[44px] w-full items-center justify-between gap-3 rounded-xl border px-4 py-3 text-left text-sm transition-colors ${optionStyle}`}
                      >
                        <span>{opt}</span>
                        {quizSubmitted && isCorrectOption && (
                          <Check className="h-4 w-4 text-[#0D9488] shrink-0" aria-hidden="true" />
                        )}
                      </button>
                    );
                  })}
                </div>
                {quizSubmitted && (
                  <p className="text-sm text-slate-600 pt-1">
                    {q.explanation}
                  </p>
                )}
              </fieldset>
            );
          })}
        </div>

        {quizError && (
          <p role="alert" className="text-sm font-semibold text-rose-700">
            {quizError}
          </p>
        )}

        {!quizSubmitted ? (
          <div>
            <button
              type="button"
              onClick={handleCheckQuiz}
              className="inline-flex min-h-[44px] items-center justify-center rounded-lg bg-[#0F3D6E] px-6 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#155293] transition-colors"
            >
              {t.education.quizCheckButton}
            </button>
          </div>
        ) : (
          <div
            role="status"
            className="rounded-xl border border-[#0D9488]/40 bg-[#F0FDFA] p-5 flex flex-col gap-1 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-[#0F766E]">
                {t.education.quizScorePrefix}:{' '}
                <span className="font-mono tabular-nums">
                  {quizGrade.correctCount} / {quizGrade.totalCount} ({quizGrade.percent}%)
                </span>
              </p>
              <p className="text-sm text-[#0B2545] mt-1">
                {quizGrade.passed ? t.education.quizGreatFeedback : t.education.quizTryAgainFeedback}
              </p>
            </div>
          </div>
        )}
      </section>
    </div>
  );
}
