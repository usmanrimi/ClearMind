import { useCallback, useEffect, useRef, useState } from 'react';
import type { LanguageCode } from '../types';

export interface ReadAloudState {
  activeId: string | null;
  status: 'idle' | 'loading' | 'playing';
  error: string | null;
  speak: (id: string, text: string, language: LanguageCode, onEnded?: () => void) => Promise<void>;
  stop: () => void;
  clearError: () => void;
}

export function useReadAloud(): ReadAloudState {
  const [activeId, setActiveId] = useState<string | null>(null);
  const [status, setStatus] = useState<'idle' | 'loading' | 'playing'>('idle');
  const [error, setError] = useState<string | null>(null);

  const audioRef = useRef<HTMLAudioElement | null>(null);
  const abortRef = useRef<AbortController | null>(null);
  const cacheRef = useRef<Map<string, string>>(new Map());
  const requestSeqRef = useRef(0);

  const stop = useCallback(() => {
    requestSeqRef.current += 1;
    if (abortRef.current) {
      abortRef.current.abort();
      abortRef.current = null;
    }
    if (audioRef.current) {
      audioRef.current.pause();
      audioRef.current.currentTime = 0;
      audioRef.current = null;
    }
    setActiveId(null);
    setStatus('idle');
  }, []);

  const clearError = useCallback(() => {
    setError(null);
  }, []);

  const speak = useCallback(
    async (id: string, text: string, language: LanguageCode, onEnded?: () => void) => {
      if (activeId === id && (status === 'playing' || status === 'loading')) {
        stop();
        return;
      }

      stop();
      setError(null);
      setActiveId(id);
      setStatus('loading');

      const currentSeq = ++requestSeqRef.current;
      const cacheKey = `${language}:${text.trim()}`;

      try {
        let audioDataUrl = cacheRef.current.get(cacheKey);

        if (!audioDataUrl) {
          const controller = new AbortController();
          abortRef.current = controller;

          const response = await fetch('/api/tts', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ text, language }),
            signal: controller.signal,
          });

          const payload = (await response.json()) as {
            audioBase64?: string;
            mimeType?: string;
            error?: string;
          };

          if (!response.ok || !payload.audioBase64) {
            throw new Error(payload.error || 'Could not play audio right now.');
          }

          audioDataUrl = `data:${payload.mimeType || 'audio/wav'};base64,${payload.audioBase64}`;
          cacheRef.current.set(cacheKey, audioDataUrl);
        }

        if (currentSeq !== requestSeqRef.current) {
          return;
        }

        const audio = new Audio(audioDataUrl);
        audioRef.current = audio;

        audio.onended = () => {
          if (currentSeq === requestSeqRef.current) {
            setActiveId(null);
            setStatus('idle');
            audioRef.current = null;
            onEnded?.();
          }
        };

        audio.onerror = () => {
          if (currentSeq === requestSeqRef.current) {
            setActiveId(null);
            setStatus('idle');
            audioRef.current = null;
            setError('Audio playback could not start on this device.');
          }
        };

        setStatus('playing');
        await audio.play();
      } catch (err: unknown) {
        if (err instanceof DOMException && err.name === 'AbortError') {
          return;
        }
        if (currentSeq === requestSeqRef.current) {
          setActiveId(null);
          setStatus('idle');
          setError(err instanceof Error ? err.message : 'Unable to play read-aloud audio.');
        }
      }
    },
    [activeId, status, stop],
  );

  useEffect(() => {
    return () => {
      stop();
    };
  }, [stop]);

  return {
    activeId,
    status,
    error,
    speak,
    stop,
    clearError,
  };
}
