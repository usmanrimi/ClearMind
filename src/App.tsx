import { useEffect, useMemo, useState } from 'react';
import { X } from 'lucide-react';
import { TRANSLATIONS } from './data/translations';
import { useReadAloud } from './hooks/useReadAloud';
import type { CheckInEntry, LanguageCode, SectionId } from './types';
import {
  calculateStreak,
  createStarterCheckIns,
  toIsoDate,
  upsertCheckIn,
} from './utils/recovery';
import { TopBar } from './components/TopBar';
import { HomeDashboard } from './components/HomeDashboard';
import { DrugEducationCenter } from './components/DrugEducationCenter';
import { AiDrugSupport } from './components/AiDrugSupport';
import { RecoveryTracker } from './components/RecoveryTracker';
import { AudioLanguageHub } from './components/AudioLanguageHub';

const STORAGE_LANG_KEY = 'clearmind_language_v1';
const STORAGE_CHECKINS_KEY = 'clearmind_checkins_v1';

function loadInitialLanguage(): LanguageCode {
  try {
    const saved = window.localStorage.getItem(STORAGE_LANG_KEY);
    if (saved === 'en' || saved === 'ha' || saved === 'yo' || saved === 'ig') {
      return saved;
    }
  } catch {
    // Ignore storage access restrictions
  }
  return 'en';
}

function loadInitialCheckIns(todayIso: string): CheckInEntry[] {
  try {
    const raw = window.localStorage.getItem(STORAGE_CHECKINS_KEY);
    if (raw) {
      const parsed = JSON.parse(raw) as unknown;
      if (Array.isArray(parsed)) {
        return parsed as CheckInEntry[];
      }
    }
  } catch {
    // Fall back to starter seed
  }
  return createStarterCheckIns(todayIso);
}

export default function App() {
  const todayIso = useMemo(() => toIsoDate(new Date()), []);
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [language, setLanguage] = useState<LanguageCode>(() => loadInitialLanguage());
  const [checkIns, setCheckIns] = useState<CheckInEntry[]>(() =>
    loadInitialCheckIns(todayIso),
  );

  const audio = useReadAloud();
  const t = TRANSLATIONS[language];
  const streakDays = useMemo(
    () => calculateStreak(checkIns, todayIso),
    [checkIns, todayIso],
  );

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_LANG_KEY, language);
    } catch {
      // Ignore storage write errors
    }
    document.documentElement.lang = language;
  }, [language]);

  useEffect(() => {
    try {
      window.localStorage.setItem(STORAGE_CHECKINS_KEY, JSON.stringify(checkIns));
    } catch {
      // Ignore storage write errors
    }
  }, [checkIns]);

  const handleSelectLanguage = (nextLang: LanguageCode) => {
    audio.stop();
    setLanguage(nextLang);
  };

  const handleSelectSection = (nextSection: SectionId) => {
    audio.stop();
    setActiveSection(nextSection);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleSaveCheckIn = (entry: CheckInEntry) => {
    setCheckIns((prev) => upsertCheckIn(prev, entry));
  };

  const handleResetCheckIns = () => {
    setCheckIns([]);
  };

  return (
    <div className="min-h-screen flex flex-col bg-white text-[#0B2545]">
      <TopBar
        activeSection={activeSection}
        onSelectSection={handleSelectSection}
        language={language}
        onSelectLanguage={handleSelectLanguage}
        t={t}
      />

      {/* Global audio error banner when TTS returns an error */}
      {audio.error && (
        <div
          role="alert"
          className="border-b border-rose-200 bg-rose-50 px-4 py-3 text-sm text-rose-800"
        >
          <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 sm:px-2">
            <p className="font-medium">{audio.error}</p>
            <button
              type="button"
              onClick={audio.clearError}
              aria-label={t.audioControls.dismissError}
              className="inline-flex min-h-[32px] min-w-[32px] items-center justify-center rounded-md text-rose-700 hover:bg-rose-100"
            >
              <X className="h-4 w-4" aria-hidden="true" />
            </button>
          </div>
        </div>
      )}

      <main className="flex-1 mx-auto w-full max-w-6xl px-4 py-8 sm:px-6 sm:py-12">
        {activeSection === 'home' && (
          <HomeDashboard
            t={t}
            language={language}
            streakDays={streakDays}
            onNavigate={handleSelectSection}
            audio={audio}
          />
        )}

        {activeSection === 'education' && (
          <DrugEducationCenter t={t} language={language} audio={audio} />
        )}

        {activeSection === 'ai-support' && (
          <AiDrugSupport t={t} language={language} audio={audio} />
        )}

        {activeSection === 'recovery' && (
          <RecoveryTracker
            t={t}
            language={language}
            todayIso={todayIso}
            entries={checkIns}
            streakDays={streakDays}
            onSaveCheckIn={handleSaveCheckIn}
            onResetCheckIns={handleResetCheckIns}
            audio={audio}
          />
        )}

        {activeSection === 'audio' && (
          <AudioLanguageHub
            t={t}
            language={language}
            onSelectLanguage={handleSelectLanguage}
            audio={audio}
          />
        )}
      </main>

      <footer className="border-t border-slate-200 bg-[#F8FAFC] py-6">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <p className="font-medium text-slate-600">{t.footer.note}</p>
          <p>{t.footer.colorsLegend}</p>
        </div>
      </footer>
    </div>
  );
}
