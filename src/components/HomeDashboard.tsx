import { useState } from 'react';
import { ArrowRight } from 'lucide-react';
import { ASSET_IMAGES, LANGUAGES, type TranslationPack } from '../data/translations';
import type { LanguageCode, SectionId } from '../types';
import type { ReadAloudState } from '../hooks/useReadAloud';
import { ReadAloudButton } from './ReadAloudButton';

interface HomeDashboardProps {
  t: TranslationPack;
  language: LanguageCode;
  streakDays: number;
  onNavigate: (section: SectionId) => void;
  audio: ReadAloudState;
}

export function HomeDashboard({
  t,
  language,
  streakDays,
  onNavigate,
  audio,
}: HomeDashboardProps) {
  const [heroError, setHeroError] = useState(false);
  const currentLangMeta = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  const sectionCards: {
    id: SectionId;
    index: string;
    title: string;
    desc: string;
    action: string;
  }[] = [
    {
      id: 'education',
      index: '01',
      title: t.home.cards.educationTitle,
      desc: t.home.cards.educationDesc,
      action: t.home.cards.educationAction,
    },
    {
      id: 'ai-support',
      index: '02',
      title: t.home.cards.aiTitle,
      desc: t.home.cards.aiDesc,
      action: t.home.cards.aiAction,
    },
    {
      id: 'recovery',
      index: '03',
      title: t.home.cards.recoveryTitle,
      desc: t.home.cards.recoveryDesc,
      action: t.home.cards.recoveryAction,
    },
    {
      id: 'audio',
      index: '04',
      title: t.home.cards.audioTitle,
      desc: t.home.cards.audioDesc,
      action: t.home.cards.audioAction,
    },
  ];

  return (
    <div className="space-y-14">
      {/* Hero Split Section */}
      <section className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-12 lg:gap-10">
        <div className="flex flex-col justify-center lg:col-span-6 space-y-6">
          <p className="text-sm font-semibold text-[#0D9488]">
            {t.home.kicker}
          </p>
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-[#0F3D6E] sm:text-4xl lg:text-[2.75rem]">
            {t.home.headline}
          </h1>
          <p className="max-w-xl text-base leading-relaxed text-slate-600 sm:text-lg">
            {t.home.subheadline}
          </p>

          <div className="flex flex-wrap items-center gap-3 pt-1">
            <button
              type="button"
              onClick={() => onNavigate('education')}
              className="inline-flex min-h-[44px] items-center gap-2 rounded-lg bg-[#0F3D6E] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#155293] transition-colors"
            >
              <span>{t.home.primaryCta}</span>
              <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
            </button>

            <ReadAloudButton
              id={`home-welcome-${language}`}
              text={currentLangMeta.welcomeAudio}
              language={language}
              audio={audio}
              label={t.home.listenWelcome}
              loadingLabel={t.audioControls.loading}
              stopLabel={t.audioControls.stop}
              variant="secondary"
            />
          </div>
        </div>

        <div className="lg:col-span-6">
          <div className="h-full overflow-hidden rounded-2xl border border-slate-200 bg-[#F8FAFC]">
            {!heroError ? (
              <img
                src={ASSET_IMAGES.hero}
                alt={t.home.heroAlt}
                referrerPolicy="no-referrer"
                onError={() => setHeroError(true)}
                className="h-full w-full object-cover aspect-[16/10] lg:aspect-auto"
              />
            ) : (
              <div className="flex h-full min-h-[260px] flex-col items-center justify-center bg-gradient-to-br from-[#F0FDFA] to-slate-100 p-8 text-center">
                <p className="font-display text-xl font-bold text-[#0F3D6E]">{t.brandName}</p>
                <p className="mt-2 max-w-xs text-sm text-slate-600">{t.home.encouragementQuote}</p>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Recovery & Daily Encouragement Strip (full-width row below hero) */}
      <section className="grid grid-cols-1 gap-6 rounded-2xl border border-slate-200 bg-[#F0FDFA] p-6 sm:p-7 md:grid-cols-12 md:items-center">
        <div className="md:col-span-5 flex items-baseline gap-3">
          <div>
            <p className="text-xs font-semibold text-[#0F766E]">
              {t.home.streakBannerLabel}
            </p>
            <p className="mt-1 flex items-baseline gap-2">
              <span className="font-mono text-3xl font-semibold tabular-nums text-[#0F3D6E]">
                {streakDays}
              </span>
              <span className="text-sm font-medium text-slate-700">
                {t.home.streakDaysSuffix}
              </span>
            </p>
          </div>
        </div>

        <div className="md:col-span-5 border-t border-[#0D9488]/20 pt-4 md:border-t-0 md:border-l md:pl-6 md:pt-0">
          <p className="text-xs font-semibold text-[#0F766E]">
            {t.home.encouragementLabel}
          </p>
          <p className="mt-1 text-sm leading-relaxed text-[#0B2545]">
            {t.home.encouragementQuote}
          </p>
        </div>

        <div className="md:col-span-2 flex md:justify-end">
          <button
            type="button"
            onClick={() => onNavigate('recovery')}
            className="inline-flex min-h-[42px] items-center justify-center gap-2 rounded-lg bg-[#0D9488] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#0F766E] transition-colors"
          >
            <span>{t.home.streakAction}</span>
            <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
          </button>
        </div>
      </section>

      {/* Core Problem Explanation (from student notebook) */}
      <section className="space-y-6">
        <div className="max-w-3xl space-y-2">
          <h2 className="text-2xl font-bold text-[#0F3D6E] sm:text-3xl">
            {t.home.problemTitle}
          </h2>
          <p className="text-base leading-relaxed text-slate-600">
            {t.home.problemBody}
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {t.home.problemPoints.map((point, idx) => (
            <div
              key={point.title}
              className="rounded-xl border border-slate-200 bg-white p-6 space-y-2"
            >
              <p className="font-mono text-xs font-semibold tabular-nums text-[#0D9488]">
                0{idx + 1}.
              </p>
              <h3 className="text-lg font-bold text-[#0F3D6E]">{point.title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{point.text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 4 Main App Sections Quick Menu */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-2xl font-bold text-[#0F3D6E] sm:text-3xl">
            {t.home.exploreTitle}
          </h2>
          <p className="text-base text-slate-600">{t.home.exploreSubtitle}</p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
          {sectionCards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col justify-between rounded-xl border border-slate-200 bg-[#F8FAFC] p-6 transition-colors hover:border-[#0D9488]/60"
            >
              <div className="space-y-2">
                <p className="font-mono text-xs font-semibold tabular-nums text-[#0D9488]">
                  {card.index}
                </p>
                <h3 className="text-xl font-bold text-[#0F3D6E]">{card.title}</h3>
                <p className="text-sm leading-relaxed text-slate-600">{card.desc}</p>
              </div>
              <div className="mt-6">
                <button
                  type="button"
                  onClick={() => onNavigate(card.id)}
                  className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#0F3D6E] px-4 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#155293] transition-colors"
                >
                  <span>{card.action}</span>
                  <ArrowRight className="h-4 w-4 shrink-0" aria-hidden="true" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
