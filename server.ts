import 'dotenv/config';
import express from 'express';
import path from 'path';
import { fileURLToPath } from 'url';
import { GoogleGenAI, ThinkingLevel } from '@google/genai';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const PORT = Number(process.env.PORT) || 3000;
const app = express();
app.use(express.json({ limit: '1mb' }));

const LANGUAGE_LABELS: Record<string, string> = {
  en: 'simple English',
  ha: 'clear, everyday Hausa',
  yo: 'clear, everyday Yoruba',
  ig: 'clear, everyday Igbo',
};

const VALID_LANGUAGES = new Set(['en', 'ha', 'yo', 'ig']);

function getGenAiClient(): GoogleGenAI {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not configured on the server.');
  }
  return new GoogleGenAI({
    apiKey,
    httpOptions: {
      headers: {
        'User-Agent': 'aistudio-build',
      },
    },
  });
}

// Simple bounded in-memory TTS cache so repeated clicks on educational lessons respond immediately
const ttsCache = new Map<string, string>();
const MAX_TTS_CACHE = 64;

function cacheTts(key: string, audioBase64: string) {
  if (ttsCache.size >= MAX_TTS_CACHE) {
    const oldestKey = ttsCache.keys().next().value;
    if (oldestKey) ttsCache.delete(oldestKey);
  }
  ttsCache.set(key, audioBase64);
}

app.post('/api/chat', async (req, res) => {
  try {
    const { message, language = 'en', history = [] } = req.body ?? {};
    if (typeof message !== 'string' || message.trim().length === 0) {
      res.status(400).json({ error: 'Please write a question before sending.' });
      return;
    }
    const cleanMessage = message.trim().slice(0, 600);
    const langCode = VALID_LANGUAGES.has(language) ? language : 'en';
    const langName = LANGUAGE_LABELS[langCode];

    const ai = getGenAiClient();

    const safeHistory = Array.isArray(history)
      ? history
          .slice(-8)
          .filter(
            (item): item is { role: 'user' | 'assistant'; text: string } =>
              Boolean(item) &&
              (item.role === 'user' || item.role === 'assistant') &&
              typeof item.text === 'string' &&
              item.text.trim().length > 0,
          )
      : [];

    const contents = [
      ...safeHistory.map((item) => ({
        role: item.role === 'assistant' ? 'model' : 'user',
        parts: [{ text: item.text.slice(0, 800) }],
      })),
      {
        role: 'user',
        parts: [{ text: cleanMessage }],
      },
    ];

    const systemInstruction = [
      'You are ClearMind Support, a warm, kind, and trustworthy drug education guide built for a JSS 1 (12-year-old) student in Nigeria.',
      `Always reply ONLY in ${langName}.`,
      'Use very clear, simple, short sentences that a 12-year-old can easily read aloud or understand.',
      'Explain clearly why hard drugs (like cannabis/Indian hemp, tramadol, codeine syrup, methamphetamine/mkpuru mmiri, cocaine, heroin, and inhalants) harm the brain, body, feelings, and future.',
      'Be encouraging, supportive, and never judgmental or scary.',
      'If someone asks for help stopping drugs or feels pressured, encourage them to talk to a trusted adult (parent, teacher, school counselor, or doctor) and mention Nigeria\'s free 24/7 NDLEA helpline (0800 1020 3040).',
      'Never give instructions on how to find, make, mix, or take any drug.',
      'Keep replies concise: 3 to 5 short sentences or up to 3 simple bullet points. Avoid complex medical jargon and avoid markdown headers.',
    ].join(' ');

    const response = await ai.models.generateContent({
      model: 'gemini-4-hydrogen',
      contents,
      config: {
        systemInstruction,
        thinkingConfig: {
          thinkingLevel: ThinkingLevel.LOW,
        },
      },
    });

    const reply = response.text?.trim();
    if (!reply) {
      res.status(502).json({ error: 'The assistant did not return a reply. Please try again.' });
      return;
    }

    res.json({ reply });
  } catch (err: unknown) {
    console.error('[ClearMind /api/chat error]', err);
    const errObj = err as { status?: number; message?: string };
    const errMessage = errObj?.message ?? 'Unable to reach AI Support right now.';
    const rawStatus = typeof errObj?.status === 'number' ? errObj.status : 0;
    const status =
      rawStatus === 429 || errMessage.includes('429') || errMessage.includes('RESOURCE_EXHAUSTED')
        ? 429
        : rawStatus === 403 ||
            rawStatus === 401 ||
            errMessage.includes('403') ||
            errMessage.includes('API_KEY') ||
            errMessage.includes('PERMISSION_DENIED')
          ? 403
          : rawStatus === 404
            ? 404
            : 500;
    res.status(status).json({
      error:
        status === 403
          ? 'AI Support needs a valid Gemini API key in Settings > Secrets.'
          : status === 429
            ? 'AI Support is busy right now. Please wait a moment and try again.'
            : 'Could not connect to AI Support right now. Please try again.',
    });
  }
});

app.post('/api/tts', async (req, res) => {
  try {
    const { text, language = 'en' } = req.body ?? {};
    if (typeof text !== 'string' || text.trim().length === 0) {
      res.status(400).json({ error: 'No text was provided to read aloud.' });
      return;
    }

    const cleanText = text.trim().slice(0, 1200);
    const langCode = VALID_LANGUAGES.has(language) ? language : 'en';
    const cacheKey = `${langCode}:${cleanText}`;
    const cached = ttsCache.get(cacheKey);
    if (cached) {
      res.json({ audioBase64: cached, mimeType: 'audio/wav', cached: true });
      return;
    }

    const ai = getGenAiClient();
    const langStyle: Record<string, string> = {
      en: 'Warm, friendly Nigerian teacher speaking clear, gentle English at a steady pace for a 12-year-old student',
      ha: 'Warm, friendly teacher speaking clear, natural Hausa at a steady, easy-to-follow pace',
      yo: 'Warm, friendly teacher speaking clear, natural Yoruba with proper tone at a steady pace',
      ig: 'Warm, friendly teacher speaking clear, natural Igbo at a steady, easy-to-follow pace',
    };

    const response = await ai.models.generateContent({
      model: 'gemini-3.8-flash-lite-tts',
      contents: [
        {
          role: 'user',
          parts: [
            {
              text: cleanText,
              speechMetadata: {
                style: langStyle[langCode],
              },
            },
          ],
        },
      ],
      config: {
        responseModalities: ['AUDIO'],
        speechConfig: {
          voiceConfig: {
            prebuiltVoiceConfig: { voiceName: 'Kore' },
          },
        },
      },
    });

    const audioBase64 =
      response.candidates?.[0]?.content?.parts?.[0]?.inlineData?.data;

    if (!audioBase64) {
      res.status(502).json({ error: 'Audio could not be generated for this passage.' });
      return;
    }

    cacheTts(cacheKey, audioBase64);
    res.json({ audioBase64, mimeType: 'audio/wav' });
  } catch (err: unknown) {
    console.error('[ClearMind /api/tts error]', err);
    const errObj = err as { status?: number; message?: string };
    const errMessage = errObj?.message ?? 'Unable to create audio right now.';
    const rawStatus = typeof errObj?.status === 'number' ? errObj.status : 0;
    const status =
      rawStatus === 429 || errMessage.includes('429') || errMessage.includes('RESOURCE_EXHAUSTED')
        ? 429
        : rawStatus === 403 ||
            rawStatus === 401 ||
            errMessage.includes('403') ||
            errMessage.includes('API_KEY') ||
            errMessage.includes('PERMISSION_DENIED')
          ? 403
          : rawStatus === 404
            ? 404
            : 500;
    res.status(status).json({
      error:
        status === 403
          ? 'Audio reading needs a valid Gemini API key in Settings > Secrets.'
          : status === 429
            ? 'Audio reading is busy right now. Please wait a moment and try again.'
            : 'Could not generate read-aloud audio right now. Please try again.',
    });
  }
});

async function startServer() {
  if (process.env.NODE_ENV !== 'production') {
    const { createServer: createViteServer } = await import('vite');
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.resolve(__dirname, 'dist');
    app.use(express.static(distPath));
    app.get('*', (_req, res) => {
      res.sendFile(path.join(distPath, 'index.html'));
    });
  }

  app.listen(PORT, '0.0.0.0', () => {
    console.log(`ClearMind server running on http://localhost:${PORT}`);
  });
}

startServer();
