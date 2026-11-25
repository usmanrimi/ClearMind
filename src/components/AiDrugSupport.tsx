import { type FormEvent, useEffect, useRef, useState } from 'react';
import { Loader2, RotateCcw, Send } from 'lucide-react';
import type { TranslationPack } from '../data/translations';
import type { ChatMessage, LanguageCode } from '../types';
import type { ReadAloudState } from '../hooks/useReadAloud';
import { ReadAloudButton } from './ReadAloudButton';

interface AiDrugSupportProps {
  t: TranslationPack;
  language: LanguageCode;
  audio: ReadAloudState;
}

export function AiDrugSupport({ t, language, audio }: AiDrugSupportProps) {
  const [messages, setMessages] = useState<ChatMessage[]>(() => [
    {
      id: 'welcome',
      role: 'assistant',
      text: t.aiSupport.welcomeMessage,
      language,
    },
  ]);
  const [input, setInput] = useState('');
  const [isSending, setIsSending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const threadEndRef = useRef<HTMLDivElement | null>(null);

  // Keep initial welcome message synced if user switches language before sending any messages
  useEffect(() => {
    setMessages((prev) => {
      if (prev.length === 1 && prev[0].id === 'welcome') {
        return [
          {
            id: 'welcome',
            role: 'assistant',
            text: t.aiSupport.welcomeMessage,
            language,
          },
        ];
      }
      return prev;
    });
  }, [language, t.aiSupport.welcomeMessage]);

  useEffect(() => {
    threadEndRef.current?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  }, [messages.length, isSending]);

  const sendMessage = async (rawText: string) => {
    const trimmed = rawText.trim();
    if (!trimmed) {
      setError(t.aiSupport.emptyError);
      return;
    }
    if (isSending) return;

    setError(null);
    const userMsg: ChatMessage = {
      id: `user-${Date.now()}`,
      role: 'user',
      text: trimmed,
      language,
    };

    const historyForApi = messages
      .filter((m) => m.id !== 'welcome')
      .map((m) => ({ role: m.role, text: m.text }));

    setMessages((prev) => [...prev, userMsg]);
    setInput('');
    setIsSending(true);

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          message: trimmed,
          language,
          history: historyForApi,
        }),
      });

      const payload = (await response.json()) as { reply?: string; error?: string };
      if (!response.ok || !payload.reply) {
        throw new Error(payload.error || 'Could not get a reply from AI Support.');
      }

      const aiMsg: ChatMessage = {
        id: `ai-${Date.now()}`,
        role: 'assistant',
        text: payload.reply,
        language,
      };
      setMessages((prev) => [...prev, aiMsg]);
    } catch (err: unknown) {
      setError(err instanceof Error ? err.message : 'Unable to reach AI Support right now.');
    } finally {
      setIsSending(false);
    }
  };

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    void sendMessage(input);
  };

  const handleClearChat = () => {
    audio.stop();
    setError(null);
    setMessages([
      {
        id: 'welcome',
        role: 'assistant',
        text: t.aiSupport.welcomeMessage,
        language,
      },
    ]);
  };

  return (
    <div className="space-y-8">
      <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
        <div className="max-w-3xl space-y-2">
          <h1 className="text-3xl font-extrabold text-[#0F3D6E] sm:text-4xl">
            {t.aiSupport.title}
          </h1>
          <p className="text-base leading-relaxed text-slate-600">
            {t.aiSupport.subtitle}
          </p>
        </div>

        <button
          type="button"
          onClick={handleClearChat}
          className="inline-flex min-h-[40px] items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-[#0F3D6E] whitespace-nowrap shrink-0 hover:bg-slate-50 transition-colors"
        >
          <RotateCcw className="h-4 w-4 shrink-0" aria-hidden="true" />
          <span>{t.aiSupport.clearButton}</span>
        </button>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-12">
        {/* Main Chat Workspace */}
        <section
          aria-label="AI Drug Support conversation"
          className="lg:col-span-8 flex flex-col rounded-2xl border border-slate-200 bg-white overflow-hidden"
        >
          {/* Messages list */}
          <div className="flex-1 min-h-[380px] max-h-[520px] overflow-y-auto p-5 sm:p-6 space-y-4 bg-[#F8FAFC]">
            {messages.map((msg) => {
              const isUser = msg.role === 'user';
              return (
                <div
                  key={msg.id}
                  className={`flex flex-col ${isUser ? 'items-end' : 'items-start'}`}
                >
                  <div
                    className={`max-w-[85%] rounded-2xl px-4 py-3.5 text-sm sm:text-base leading-relaxed whitespace-pre-line ${
                      isUser
                        ? 'bg-[#0F3D6E] text-white'
                        : 'bg-white text-[#0B2545] border border-slate-200'
                    }`}
                  >
                    {msg.text}
                  </div>
                  {!isUser && (
                    <div className="mt-2">
                      <ReadAloudButton
                        id={`chat-msg-${msg.id}`}
                        text={msg.text}
                        language={msg.language}
                        audio={audio}
                        label={t.audioControls.listen}
                        loadingLabel={t.audioControls.loading}
                        stopLabel={t.audioControls.stop}
                        variant="subtle"
                      />
                    </div>
                  )}
                </div>
              );
            })}

            {isSending && (
              <div className="flex items-start">
                <div className="inline-flex items-center gap-2 rounded-2xl border border-slate-200 bg-white px-4 py-3 text-sm font-medium text-[#0F766E]">
                  <Loader2 className="h-4 w-4 animate-spin shrink-0" aria-hidden="true" />
                  <span>{t.aiSupport.sendingLabel}</span>
                </div>
              </div>
            )}
            <div ref={threadEndRef} />
          </div>

          {/* Error alert */}
          {error && (
            <div
              role="alert"
              className="border-t border-rose-200 bg-rose-50 px-5 py-3 text-sm font-medium text-rose-800"
            >
              {error}
            </div>
          )}

          {/* Input form */}
          <form
            onSubmit={handleSubmit}
            className="border-t border-slate-200 bg-white p-4 sm:p-5"
          >
            <label htmlFor="ai-question-input" className="sr-only">
              {t.aiSupport.inputLabel}
            </label>
            <div className="flex flex-col gap-3 sm:flex-row">
              <input
                id="ai-question-input"
                type="text"
                value={input}
                onChange={(e) => {
                  setInput(e.target.value);
                  if (error) setError(null);
                }}
                placeholder={t.aiSupport.inputPlaceholder}
                disabled={isSending}
                className="min-h-[44px] flex-1 rounded-lg border border-slate-300 bg-white px-4 py-2.5 text-sm sm:text-base text-[#0B2545] placeholder:text-slate-400 focus:border-[#0D9488] focus:outline-none"
              />
              <button
                type="submit"
                disabled={isSending}
                className="inline-flex min-h-[44px] items-center justify-center gap-2 rounded-lg bg-[#0F3D6E] px-5 py-2.5 text-sm font-semibold text-white whitespace-nowrap shrink-0 hover:bg-[#155293] disabled:opacity-60 transition-colors"
              >
                <Send className="h-4 w-4 shrink-0" aria-hidden="true" />
                <span>{t.aiSupport.sendButton}</span>
              </button>
            </div>
          </form>
        </section>

        {/* Side Column: Starter Questions & Safety Notice */}
        <aside className="lg:col-span-4 space-y-6">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 space-y-4">
            <h2 className="text-base font-bold text-[#0F3D6E]">
              {t.aiSupport.starterHeading}
            </h2>
            <div className="flex flex-col gap-2.5">
              {t.aiSupport.starters.map((prompt) => (
                <button
                  key={prompt}
                  type="button"
                  disabled={isSending}
                  onClick={() => void sendMessage(prompt)}
                  className="min-h-[44px] w-full rounded-xl border border-slate-200 bg-[#F8FAFC] px-4 py-3 text-left text-sm font-medium text-[#0B2545] hover:border-[#0D9488] hover:bg-[#F0FDFA] hover:text-[#0F3D6E] disabled:opacity-60 transition-colors"
                >
                  {prompt}
                </button>
              ))}
            </div>
          </div>

          <div className="rounded-2xl border border-[#0D9488]/30 bg-[#F0FDFA] p-6 space-y-2">
            <p className="text-sm leading-relaxed text-[#0B2545]">
              {t.aiSupport.safetyNotice}
            </p>
          </div>
        </aside>
      </div>
    </div>
  );
}
