import { Loader2, Square, Volume2 } from 'lucide-react';
import type { LanguageCode } from '../types';
import type { ReadAloudState } from '../hooks/useReadAloud';

interface ReadAloudButtonProps {
  id: string;
  text: string;
  language: LanguageCode;
  audio: ReadAloudState;
  label: string;
  loadingLabel: string;
  stopLabel: string;
  variant?: 'primary' | 'secondary' | 'subtle';
  onEnded?: () => void;
}

export function ReadAloudButton({
  id,
  text,
  language,
  audio,
  label,
  loadingLabel,
  stopLabel,
  variant = 'secondary',
  onEnded,
}: ReadAloudButtonProps) {
  const isCurrent = audio.activeId === id;
  const isLoading = isCurrent && audio.status === 'loading';
  const isPlaying = isCurrent && audio.status === 'playing';

  const variantClasses =
    variant === 'primary'
      ? isPlaying
        ? 'bg-[#0D9488] text-white hover:bg-[#0F766E] border border-transparent'
        : 'bg-[#0F3D6E] text-white hover:bg-[#155293] border border-transparent'
      : variant === 'subtle'
        ? isPlaying
          ? 'bg-[#F0FDFA] text-[#0F766E] border border-[#0D9488]/40'
          : 'bg-white text-[#0F3D6E] border border-slate-200 hover:border-[#0D9488] hover:text-[#0F766E]'
        : isPlaying
          ? 'bg-[#0D9488] text-white border border-[#0D9488] hover:bg-[#0F766E]'
          : 'bg-white text-[#0F3D6E] border border-[#0F3D6E]/25 hover:bg-[#F0FDFA] hover:border-[#0D9488]';

  return (
    <button
      type="button"
      onClick={() => {
        void audio.speak(id, text, language, onEnded);
      }}
      aria-pressed={isPlaying}
      className={`inline-flex min-h-[40px] items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold whitespace-nowrap shrink-0 transition-colors duration-150 ${variantClasses}`}
    >
      {isLoading ? (
        <Loader2 className="h-4 w-4 animate-spin shrink-0" aria-hidden="true" />
      ) : isPlaying ? (
        <Square className="h-3.5 w-3.5 fill-current shrink-0" aria-hidden="true" />
      ) : (
        <Volume2 className="h-4 w-4 shrink-0" aria-hidden="true" />
      )}
      <span>{isLoading ? loadingLabel : isPlaying ? stopLabel : label}</span>
    </button>
  );
}
