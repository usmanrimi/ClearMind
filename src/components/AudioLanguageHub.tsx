import { useState } from 'react';
import { Check, ChevronLeft, ChevronRight } from 'lucide-react';
import { LANGUAGES, type TranslationPack } from '../data/translations';
import type { LanguageCode } from '../types';
import type { ReadAloudState } from '../hooks/useReadAloud';
import { ReadAloudButton } from './ReadAloudButton';

interface AudioLanguageHubProps {
  t: TranslationPack;
  language: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  audio: ReadAloudState;
}

export function AudioLanguageHub({
  t,
  language,
  onSelectLanguage,
  audio,
}: AudioLanguageHubProps) {
  const [selectedLessonIndex, setSelectedLessonIndex] = useState(0);
  const [slideIndex, setSlideIndex] = useState(0);
  const [brokenImages, setBrokenImages] = useState<Record<string, boolean>>({});

  const lessons = t.audioHub.lessons;
  const activeLesson = lessons[selectedLessonIndex] ?? lessons[0];
  const activeSlide = activeLesson.slides[slideIndex] ?? activeLesson.slides[0];

  const handleSelectLesson = (idx: number) => {
    audio.stop();
    setSelectedLessonIndex(idx);
    setSlideIndex(0);
  };

  const fullLessonScript = activeLesson.slides
    .map((s) => `${s.title}. ${s.caption} ${s.keyTakeaway}`)
    .join(' ');

  const currentSlideScript = `${activeSlide.title}. ${activeSlide.caption} ${activeSlide.keyTakeaway}`;

  return (
    <div className="space-y-14">
      {/* Header */}
      <div className="max-w-3xl space-y-2">
        <h1 className="text-3xl font-extrabold text-[#0F3D6E] sm:text-4xl">
          {t.audioHub.title}
        </h1>
        <p className="text-base leading-relaxed text-slate-600">
          {t.audioHub.subtitle}
        </p>
      </div>

      {/* Section 1: 4 Nigerian Languages Switcher Cards */}
      <section className="space-y-5">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0F3D6E]">
            {t.audioHub.languageSectionTitle}
          </h2>
          <p className="text-sm text-slate-600">
            {t.audioHub.languageSectionSubtitle}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {LANGUAGES.map((lang) => {
            const isActive = lang.code === language;
            return (
              <div
                key={lang.code}
                className={`flex flex-col justify-between rounded-2xl border p-5 transition-colors ${
                  isActive
                    ? 'border-[#0D9488] bg-[#F0FDFA]'
                    : 'border-slate-200 bg-white'
                }`}
              >
                <div className="space-y-2">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="text-lg font-bold text-[#0F3D6E]">
                      {lang.nativeLabel}
                    </h3>
                    {isActive && (
                      <span className="inline-flex items-center gap-1 text-xs font-semibold text-[#0F766E]">
                        <Check className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>{t.audioHub.activeLanguageLabel}</span>
                      </span>
                    )}
                  </div>
                  <p className="text-sm leading-relaxed text-slate-600">
                    {lang.greeting}
                  </p>
                </div>

                <div className="mt-5 flex flex-col gap-2">
                  <button
                    type="button"
                    onClick={() => onSelectLanguage(lang.code)}
                    disabled={isActive}
                    className={`min-h-[40px] w-full rounded-lg px-3.5 py-2 text-sm font-semibold whitespace-nowrap transition-colors ${
                      isActive
                        ? 'bg-[#0D9488] text-white cursor-default'
                        : 'bg-[#0F3D6E] text-white hover:bg-[#155293]'
                    }`}
                  >
                    {isActive ? t.audioHub.activeLanguageLabel : t.audioHub.switchButton}
                  </button>

                  <ReadAloudButton
                    id={`lang-welcome-${lang.code}`}
                    text={lang.welcomeAudio}
                    language={lang.code}
                    audio={audio}
                    label={t.audioHub.hearWelcomeButton}
                    loadingLabel={t.audioControls.loading}
                    stopLabel={t.audioControls.stop}
                    variant="subtle"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Section 2: Illustrated Audio-Visual Story Lessons */}
      <section className="space-y-6">
        <div className="space-y-1">
          <h2 className="text-2xl font-bold text-[#0F3D6E]">
            {t.audioHub.lessonsSectionTitle}
          </h2>
          <p className="text-sm text-slate-600">
            {t.audioHub.lessonsSectionSubtitle}
          </p>
        </div>

        {/* Lesson selector tabs */}
        <div className="grid grid-cols-1 gap-3 md:grid-cols-3">
          {lessons.map((lesson, idx) => {
            const isSelected = idx === selectedLessonIndex;
            return (
              <button
                key={lesson.id}
                type="button"
                aria-pressed={isSelected}
                onClick={() => handleSelectLesson(idx)}
                className={`rounded-xl border p-4 text-left transition-colors ${
                  isSelected
                    ? 'border-[#0D9488] bg-[#F0FDFA]'
                    : 'border-slate-200 bg-white hover:bg-[#F8FAFC]'
                }`}
              >
                <p className="text-xs font-medium text-slate-500">
                  0{idx + 1} · {lesson.durationLabel}
                </p>
                <p className="mt-1 text-base font-bold text-[#0F3D6E]">
                  {lesson.title}
                </p>
              </button>
            );
          })}
        </div>

        {/* Two-Zone Narrated Slide Stage */}
        <div className="grid grid-cols-1 items-stretch gap-6 rounded-2xl border border-slate-200 bg-white p-6 sm:p-8 lg:grid-cols-12">
          {/* Visual Frame */}
          <div className="lg:col-span-6 flex flex-col justify-between gap-4">
            <div className="overflow-hidden rounded-xl border border-slate-200 bg-[#F8FAFC]">
              {!brokenImages[activeLesson.id] ? (
                <img
                  src={activeLesson.imagePath}
                  alt={activeLesson.imageAlt}
                  referrerPolicy="no-referrer"
                  onError={() =>
                    setBrokenImages((prev) => ({ ...prev, [activeLesson.id]: true }))
                  }
                  className="aspect-[16/10] w-full object-cover"
                />
              ) : (
                <div className="flex aspect-[16/10] w-full items-center justify-center bg-[#F0FDFA] p-6 text-center">
                  <p className="font-display text-lg font-bold text-[#0F3D6E]">
                    {activeLesson.title}
                  </p>
                </div>
              )}
            </div>

            {/* Slide Step Indicator Bar */}
            <div className="flex items-center gap-2" aria-label="Lesson progress">
              {activeLesson.slides.map((s, idx) => (
                <button
                  key={s.title}
                  type="button"
                  onClick={() => {
                    audio.stop();
                    setSlideIndex(idx);
                  }}
                  aria-label={`${t.audioHub.slideLabel} ${idx + 1}`}
                  aria-current={idx === slideIndex ? 'step' : undefined}
                  className={`h-2.5 flex-1 rounded-full transition-colors ${
                    idx <= slideIndex ? 'bg-[#0D9488]' : 'bg-slate-200 hover:bg-slate-300'
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Caption, Takeaway & Audio Playback Controls */}
          <div className="lg:col-span-6 flex flex-col justify-between space-y-6">
            <div className="space-y-4">
              <p className="font-mono text-xs font-semibold tabular-nums text-[#0F766E]">
                {t.audioHub.slideLabel} {slideIndex + 1} / {activeLesson.slides.length}
              </p>

              <h3 className="text-2xl font-extrabold text-[#0F3D6E]">
                {activeSlide.title}
              </h3>

              <p className="text-base leading-relaxed text-slate-700">
                {activeSlide.caption}
              </p>

              <div className="rounded-xl bg-[#F0FDFA] p-4 space-y-1">
                <p className="text-xs font-semibold text-[#0F766E]">
                  {t.audioHub.keyTakeawayLabel}
                </p>
                <p className="text-sm font-medium text-[#0B2545]">
                  {activeSlide.keyTakeaway}
                </p>
              </div>
            </div>

            {/* Playback and Navigation Bar */}
            <div className="space-y-3 border-t border-slate-100 pt-5">
              <div className="flex flex-wrap items-center gap-3">
                <ReadAloudButton
                  id={`lesson-${activeLesson.id}-slide-${slideIndex}-${language}`}
                  text={currentSlideScript}
                  language={language}
                  audio={audio}
                  label={t.audioHub.playSlideAudio}
                  loadingLabel={t.audioControls.loading}
                  stopLabel={t.audioControls.stop}
                  variant="primary"
                  onEnded={() => {
                    if (slideIndex < activeLesson.slides.length - 1) {
                      setSlideIndex((prev) => prev + 1);
                    }
                  }}
                />

                <ReadAloudButton
                  id={`lesson-${activeLesson.id}-full-${language}`}
                  text={fullLessonScript}
                  language={language}
                  audio={audio}
                  label={t.audioHub.playFullLesson}
                  loadingLabel={t.audioControls.loading}
                  stopLabel={t.audioControls.stop}
                  variant="secondary"
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <button
                  type="button"
                  disabled={slideIndex === 0}
                  onClick={() => {
                    audio.stop();
                    setSlideIndex((prev) => Math.max(0, prev - 1));
                  }}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0F3D6E] whitespace-nowrap shrink-0 hover:bg-slate-50 disabled:opacity-40 transition-colors"
                >
                  <ChevronLeft className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span>{t.audioHub.previousSlide}</span>
                </button>

                <button
                  type="button"
                  disabled={slideIndex === activeLesson.slides.length - 1}
                  onClick={() => {
                    audio.stop();
                    setSlideIndex((prev) =>
                      Math.min(activeLesson.slides.length - 1, prev + 1),
                    );
                  }}
                  className="inline-flex min-h-[40px] items-center gap-1.5 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0F3D6E] whitespace-nowrap shrink-0 hover:bg-slate-50 disabled:opacity-40 transition-colors"
                >
                  <span>{t.audioHub.nextSlide}</span>
                  <ChevronRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
