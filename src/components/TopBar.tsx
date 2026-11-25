import { useEffect, useRef, useState } from 'react';
import { Check, ChevronDown, Globe, Menu, X } from 'lucide-react';
import { LANGUAGES, type TranslationPack } from '../data/translations';
import type { LanguageCode, SectionId } from '../types';

interface TopBarProps {
  activeSection: SectionId;
  onSelectSection: (section: SectionId) => void;
  language: LanguageCode;
  onSelectLanguage: (lang: LanguageCode) => void;
  t: TranslationPack;
}

export function TopBar({
  activeSection,
  onSelectSection,
  language,
  onSelectLanguage,
  t,
}: TopBarProps) {
  const [langMenuOpen, setLangMenuOpen] = useState(false);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);

  const currentLang = LANGUAGES.find((l) => l.code === language) ?? LANGUAGES[0];

  const navItems: { id: SectionId; label: string }[] = [
    { id: 'home', label: t.nav.home },
    { id: 'education', label: t.nav.education },
    { id: 'ai-support', label: t.nav.aiSupport },
    { id: 'recovery', label: t.nav.recovery },
    { id: 'audio', label: t.nav.audio },
  ];

  useEffect(() => {
    function handleOutsideClick(event: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setLangMenuOpen(false);
      }
    }
    function handleEscape(event: KeyboardEvent) {
      if (event.key === 'Escape') {
        setLangMenuOpen(false);
        setMobileNavOpen(false);
      }
    }
    document.addEventListener('mousedown', handleOutsideClick);
    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('mousedown', handleOutsideClick);
      document.removeEventListener('keydown', handleEscape);
    };
  }, []);

  const handleNavClick = (section: SectionId) => {
    onSelectSection(section);
    setMobileNavOpen(false);
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-sm border-b border-slate-200">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:gap-8">
        {/* Zone 1: Single-element brand wordmark */}
        <button
          type="button"
          onClick={() => handleNavClick('home')}
          className="font-display text-xl font-extrabold tracking-tight text-[#0F3D6E] whitespace-nowrap shrink-0 hover:text-[#0D9488] transition-colors"
        >
          {t.brandName}
        </button>

        {/* Zone 2: Clean single-line navigation links */}
        <nav aria-label="Main navigation" className="hidden md:flex items-center gap-6">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleNavClick(item.id)}
                aria-current={isActive ? 'page' : undefined}
                className={`relative py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors ${
                  isActive
                    ? 'text-[#0F3D6E] after:absolute after:inset-x-0 after:-bottom-[13px] after:h-[2px] after:bg-[#0D9488]'
                    : 'text-slate-600 hover:text-[#0F3D6E]'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* Zone 3: Language & Audio Switcher (single primary header control) + mobile drawer trigger */}
        <div className="flex items-center gap-2 shrink-0">
          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setLangMenuOpen((prev) => !prev)}
              aria-expanded={langMenuOpen}
              aria-haspopup="menu"
              aria-label={t.languageSwitcher.buttonAria}
              className="inline-flex min-h-[40px] items-center gap-2 rounded-lg bg-[#0F3D6E] px-3.5 py-2 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#155293] transition-colors"
            >
              <Globe className="h-4 w-4 shrink-0" aria-hidden="true" />
              <span>{currentLang.nativeLabel}</span>
              <ChevronDown
                className={`h-4 w-4 shrink-0 transition-transform duration-150 ${langMenuOpen ? 'rotate-180' : ''}`}
                aria-hidden="true"
              />
            </button>

            {langMenuOpen && (
              <div
                role="menu"
                aria-label={t.languageSwitcher.menuHeading}
                className="absolute right-0 mt-2 w-60 rounded-xl border border-slate-200 bg-white p-2 shadow-lg"
              >
                <div className="px-3 py-2 border-b border-slate-100">
                  <p className="text-xs font-semibold text-[#0F3D6E]">
                    {t.languageSwitcher.menuHeading}
                  </p>
                  <p className="text-xs text-slate-500 mt-0.5">
                    {t.languageSwitcher.readAloudReady}
                  </p>
                </div>
                <div className="mt-1 flex flex-col gap-0.5">
                  {LANGUAGES.map((lang) => {
                    const selected = lang.code === language;
                    return (
                      <button
                        key={lang.code}
                        type="button"
                        role="menuitemradio"
                        aria-checked={selected}
                        onClick={() => {
                          onSelectLanguage(lang.code);
                          setLangMenuOpen(false);
                        }}
                        className={`flex min-h-[40px] w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium transition-colors ${
                          selected
                            ? 'bg-[#F0FDFA] text-[#0F766E] font-semibold'
                            : 'text-slate-700 hover:bg-slate-50'
                        }`}
                      >
                        <span>
                          {lang.nativeLabel}
                          {lang.nativeLabel !== lang.name ? ` (${lang.name})` : ''}
                        </span>
                        {selected && <Check className="h-4 w-4 text-[#0D9488] shrink-0" aria-hidden="true" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}
          </div>

          <button
            type="button"
            onClick={() => setMobileNavOpen((prev) => !prev)}
            aria-expanded={mobileNavOpen}
            aria-label={mobileNavOpen ? 'Close menu' : 'Open menu'}
            className="inline-flex md:hidden min-h-[40px] min-w-[40px] items-center justify-center rounded-lg border border-slate-200 text-[#0F3D6E] hover:bg-slate-50"
          >
            {mobileNavOpen ? <X className="h-5 w-5" aria-hidden="true" /> : <Menu className="h-5 w-5" aria-hidden="true" />}
          </button>
        </div>
      </div>

      {/* Mobile slide-down navigation drawer */}
      {mobileNavOpen && (
        <nav
          aria-label="Mobile navigation"
          className="md:hidden border-t border-slate-200 bg-white px-4 py-3"
        >
          <div className="flex flex-col gap-1">
            {navItems.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleNavClick(item.id)}
                  aria-current={isActive ? 'page' : undefined}
                  className={`flex min-h-[44px] w-full items-center justify-between rounded-lg px-3 py-2 text-left text-base font-semibold transition-colors ${
                    isActive
                      ? 'bg-[#F0FDFA] text-[#0F766E]'
                      : 'text-[#0B2545] hover:bg-slate-50'
                  }`}
                >
                  <span>{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
