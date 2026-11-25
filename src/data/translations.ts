import type { AudioLesson, DrugEntry, LanguageCode, MoodType, QuizQuestion } from '../types';

export const ASSET_IMAGES = {
  hero: '/src/assets/images/hero_fresh_start_1795603481731.jpg',
  brain: '/src/assets/images/lesson_brain_health_1795603482923.jpg',
  peerPressure: '/src/assets/images/lesson_peer_pressure_1795603482924.jpg',
  recoveryHope: '/src/assets/images/lesson_recovery_hope_1795603486435.jpg',
} as const;

export interface LanguageMeta {
  code: LanguageCode;
  name: string;
  nativeLabel: string;
  greeting: string;
  welcomeAudio: string;
}

export const LANGUAGES: LanguageMeta[] = [
  {
    code: 'en',
    name: 'English',
    nativeLabel: 'English',
    greeting: 'Welcome! You deserve a healthy mind and a bright future.',
    welcomeAudio:
      'Welcome to ClearMind. Here, you can learn why hard drugs are dangerous, ask helpful questions, and track every healthy day of your fresh start.',
  },
  {
    code: 'ha',
    name: 'Hausa',
    nativeLabel: 'Hausa',
    greeting: 'Barka da zuwa! Lafiyar kwakwalwarka da makomarka suna da muhimmanci.',
    welcomeAudio:
      'Barka da zuwa ClearMind. A nan za ka koyi illolin miyagun kwayoyi, ka yi tambayoyi ga mataimakin AI, kuma ka bibiyi ci gaban warkewarka kowace rana.',
  },
  {
    code: 'yo',
    name: 'Yoruba',
    nativeLabel: 'Yorùbá',
    greeting: 'Káàbọ̀! Ọpọlọ rẹ tí ó ní ìlera àti ọjọ́ iwájú rẹ ṣe pàtàkì.',
    welcomeAudio:
      'Káàbọ̀ sí ClearMind. Níbí yìí, o lè kọ́ nípa ewu oògùn olóró, béèrè ìbéèrè lọ́wọ́ olùrànlọ́wọ́ AI, kí o sì tọ́pa ìlọsíwájú rẹ lójoojúmọ́.',
  },
  {
    code: 'ig',
    name: 'Igbo',
    nativeLabel: 'Igbo',
    greeting: 'Nnọọ! Ụbụrụ gị dị mma na ọdịnihu gị mara mma dị mkpa.',
    welcomeAudio:
      'Nnọọ na ClearMind. Ebe a ka ị ga-amụta ihe ize ndụ dị n’ọgwụ ike, jụọ onye inyeaka AI ajụjụ, ma na-edekọ ụbọchị ọ bụla dị mma na mbido ọhụrụ gị.',
  },
];

export interface TranslationPack {
  brandName: string;
  nav: {
    home: string;
    education: string;
    aiSupport: string;
    recovery: string;
    audio: string;
  };
  languageSwitcher: {
    buttonAria: string;
    menuHeading: string;
    readAloudReady: string;
  };
  audioControls: {
    listen: string;
    loading: string;
    stop: string;
    listenInLang: string;
    dismissError: string;
  };
  home: {
    kicker: string;
    headline: string;
    subheadline: string;
    primaryCta: string;
    listenWelcome: string;
    heroAlt: string;
    problemTitle: string;
    problemBody: string;
    problemPoints: { title: string; text: string }[];
    exploreTitle: string;
    exploreSubtitle: string;
    cards: {
      educationTitle: string;
      educationDesc: string;
      educationAction: string;
      aiTitle: string;
      aiDesc: string;
      aiAction: string;
      recoveryTitle: string;
      recoveryDesc: string;
      recoveryAction: string;
      audioTitle: string;
      audioDesc: string;
      audioAction: string;
    };
    streakBannerLabel: string;
    streakDaysSuffix: string;
    streakAction: string;
    encouragementLabel: string;
    encouragementQuote: string;
  };
  education: {
    title: string;
    subtitle: string;
    filters: {
      all: string;
      brain: string;
      body: string;
      addiction: string;
    };
    listHeading: string;
    tabs: {
      brain: string;
      body: string;
      behavior: string;
      safety: string;
    };
    alsoCalledLabel: string;
    riskLabel: string;
    quizTitle: string;
    quizSubtitle: string;
    quizCheckButton: string;
    quizResetButton: string;
    quizScorePrefix: string;
    quizGreatFeedback: string;
    quizTryAgainFeedback: string;
    quizSelectAllPrompt: string;
    drugs: DrugEntry[];
    quiz: QuizQuestion[];
  };
  aiSupport: {
    title: string;
    subtitle: string;
    welcomeMessage: string;
    starterHeading: string;
    starters: string[];
    inputLabel: string;
    inputPlaceholder: string;
    sendButton: string;
    sendingLabel: string;
    clearButton: string;
    safetyNotice: string;
    emptyError: string;
  };
  recovery: {
    title: string;
    subtitle: string;
    streakLabel: string;
    daysLabel: string;
    milestoneHeading: string;
    milestoneGoalPrefix: string;
    daysLeftLabel: string;
    milestoneReached: string;
    checkInTitle: string;
    alreadyCheckedInNotice: string;
    moodLabel: string;
    moods: Record<MoodType, { label: string; encouragement: string }>;
    habitsLabel: string;
    habits: { id: string; label: string }[];
    noteLabel: string;
    notePlaceholder: string;
    saveButton: string;
    updateButton: string;
    savedFeedbackTitle: string;
    validationMood: string;
    validationHabitOrNote: string;
    historyTitle: string;
    historyEmpty: string;
    habitSingular: string;
    habitPlural: string;
    resetButton: string;
    resetConfirmText: string;
    helpTitle: string;
    helpBody: string;
    helplineLabel: string;
    helplineNumber: string;
    helplineNote: string;
  };
  audioHub: {
    title: string;
    subtitle: string;
    languageSectionTitle: string;
    languageSectionSubtitle: string;
    activeLanguageLabel: string;
    switchButton: string;
    hearWelcomeButton: string;
    lessonsSectionTitle: string;
    lessonsSectionSubtitle: string;
    slideLabel: string;
    previousSlide: string;
    nextSlide: string;
    playSlideAudio: string;
    playFullLesson: string;
    keyTakeawayLabel: string;
    lessons: AudioLesson[];
  };
  footer: {
    note: string;
    colorsLegend: string;
  };
}

export const TRANSLATIONS: Record<LanguageCode, TranslationPack> = {
  en: {
    brandName: 'ClearMind',
    nav: {
      home: 'Home',
      education: 'Learn',
      aiSupport: 'AI Support',
      recovery: 'Recovery',
      audio: 'Audio & Lessons',
    },
    languageSwitcher: {
      buttonAria: 'Switch app language and read-aloud audio language',
      menuHeading: 'Choose your language',
      readAloudReady: 'Text & Read-Aloud Audio',
    },
    audioControls: {
      listen: 'Listen',
      loading: 'Preparing audio...',
      stop: 'Stop Audio',
      listenInLang: 'Listen in English',
      dismissError: 'Dismiss',
    },
    home: {
      kicker: 'Health & Drug Education Guide',
      headline: 'Protect your mind, choose a bright and healthy future.',
      subheadline:
        'Welcome to ClearMind. Learn simple facts about how hard drugs harm the brain and body, ask safe questions anytime, and track every step of a fresh start.',
      primaryCta: 'Explore Drug Facts',
      listenWelcome: 'Hear Welcome Message',
      heroAlt: 'Nigerian junior secondary school students walking happily together toward school',
      problemTitle: 'What are hard drugs?',
      problemBody:
        'Hard drugs are dangerous substances that damage the brain and body, cause addiction, and change how a person thinks, feels, and behaves.',
      problemPoints: [
        {
          title: 'Brain Damage',
          text: 'They confuse memory, slow down learning in school, and make safe decisions harder.',
        },
        {
          title: 'Addiction Trap',
          text: 'Once a person starts, the body keeps craving more even when it hurts their health.',
        },
        {
          title: 'Healing Is Possible',
          text: 'With truthful information, trusted adults, and daily steps, anyone can choose a fresh start.',
        },
      ],
      exploreTitle: 'Choose where to start',
      exploreSubtitle: 'Four simple tools built to help you learn, ask questions, and stay strong.',
      cards: {
        educationTitle: 'Drug Education Center',
        educationDesc: 'Read clear facts about common hard drugs and how they affect your brain and body.',
        educationAction: 'Open Library',
        aiTitle: 'AI Drug Support',
        aiDesc: 'Ask friendly questions and get simple, honest explanations in your preferred language.',
        aiAction: 'Start Chat',
        recoveryTitle: 'Recovery Tracker',
        recoveryDesc: 'Check in each day, record healthy habits, and watch your drug-free progress grow.',
        recoveryAction: 'Open Tracker',
        audioTitle: 'Audio & Lessons',
        audioDesc: 'Switch between English, Hausa, Yoruba, and Igbo with narrated story lessons.',
        audioAction: 'Watch & Listen',
      },
      streakBannerLabel: 'Your Current Recovery Streak',
      streakDaysSuffix: 'drug-free days',
      streakAction: 'Log Today',
      encouragementLabel: 'Daily Encouragement',
      encouragementQuote: 'Every healthy choice you make today protects your dreams for tomorrow.',
    },
    education: {
      title: 'Drug Education Center',
      subtitle: 'Select any substance below to see how it affects the brain, body, and behavior in simple words.',
      filters: {
        all: 'All Drugs',
        brain: 'Brain Harm',
        body: 'Body Harm',
        addiction: 'High Addiction',
      },
      listHeading: 'Select a substance',
      tabs: {
        brain: 'The Brain',
        body: 'The Body',
        behavior: 'Feelings & Behavior',
        safety: 'How to Say No',
      },
      alsoCalledLabel: 'Also known as',
      riskLabel: 'Danger level',
      quizTitle: 'Quick Knowledge Check',
      quizSubtitle: 'Test what you learned with three quick questions.',
      quizCheckButton: 'Check My Answers',
      quizResetButton: 'Try Again',
      quizScorePrefix: 'Your score',
      quizGreatFeedback: 'Well done! You know how to protect your mind and stay safe.',
      quizTryAgainFeedback: 'Good effort! Review the facts above and try the quiz again.',
      quizSelectAllPrompt: 'Please choose an answer for all 3 questions before checking.',
      drugs: [
        {
          id: 'cannabis',
          name: 'Cannabis (Indian Hemp)',
          localNames: 'Igbo, Wee-wee, Kush, Loud',
          category: 'brain',
          shortSummary: 'A strong plant drug often smoked or mixed in snacks that slows down a growing teenage brain.',
          brainEffect:
            'Because a young student’s brain is still growing, cannabis harms memory, focus in class, and problem-solving skills.',
          bodyEffect:
            'Smoking it irritates the lungs, causes a fast heartbeat, red eyes, and makes sports or running much harder.',
          behaviorEffect:
            'It can cause sudden fear, confusion, laziness toward schoolwork, and pulling away from family and true friends.',
          staySafeTip:
            'Never accept unwrapped sweets, brownies, or rolled sticks from strangers or peers. Say calmly: "No thanks, I protect my brain."',
          riskLevel: 'High risk for young brains',
          audioScript:
            'Cannabis, also called Indian hemp, harms a growing student brain. It hurts memory and focus in school, weakens the lungs, and can cause sudden fear or confusion. Always say no to unknown snacks or smoke.',
        },
        {
          id: 'tramadol-codeine',
          name: 'Tramadol & Codeine Syrup',
          localNames: 'Trams, Cough Syrup abuse, Lean',
          category: 'addiction',
          shortSummary: 'Strong prescription pain and cough medicines that become very dangerous when misused without a doctor.',
          brainEffect:
            'Misusing tramadol or codeine tricks the brain into needing larger doses quickly and can trigger sudden seizures.',
          bodyEffect:
            'It slows down breathing to dangerous levels, damages the liver and kidneys, and can stop the heart in an overdose.',
          behaviorEffect:
            'People become very drowsy, angry when they do not have it, and lose interest in school, sports, and family life.',
          staySafeTip:
            'Only take medicine given by a parent, qualified doctor, or nurse. Never drink mixed soft drinks offered at parties.',
          riskLevel: 'Very high addiction & overdose risk',
          audioScript:
            'Tramadol and codeine cough syrup are strong medicines that become very dangerous when misused. They cause fast addiction, sudden seizures, and dangerous breathing problems. Only take medicine from a parent or doctor.',
        },
        {
          id: 'meth',
          name: 'Methamphetamine',
          localNames: 'Mkpuru Mmiri, Ice, Crystal',
          category: 'brain',
          shortSummary: 'An extremely harsh chemical drug that overworks the brain and body rapidly.',
          brainEffect:
            'It destroys healthy brain cells, causes terrifying hallucinations (seeing or hearing things that are not real), and ruins sleep.',
          bodyEffect:
            'It causes extreme weight loss, severe tooth damage, overheating, and can trigger strokes or heart failure even in young people.',
          behaviorEffect:
            'Users may suddenly become restless, panicked, confused, or act dangerously without realizing what they are doing.',
          staySafeTip:
            'Walk away immediately if anyone offers glowing crystals or bitter white powder. Tell a trusted adult right away.',
          riskLevel: 'Severe danger to brain & heart',
          audioScript:
            'Methamphetamine, sometimes called Mkpuru Mmiri, is an extremely dangerous chemical drug. It damages brain cells, causes scary hallucinations, and puts the heart in serious danger. Stay far away from it.',
        },
        {
          id: 'cocaine',
          name: 'Cocaine',
          localNames: 'Coke, Snow, Crack',
          category: 'body',
          shortSummary: 'A powerful stimulant drug that forces the heart and blood vessels to work dangerously fast.',
          brainEffect:
            'It creates a brief fake rush followed by a deep crash of sadness, worry, and intense cravings for more.',
          bodyEffect:
            'It squeezes blood vessels tight, spikes blood pressure, damages the nose and lungs, and can cause a sudden heart attack.',
          behaviorEffect:
            'It makes people impatient, irritable, secretive, and willing to take unsafe risks just to get another dose.',
          staySafeTip:
            'Choose friends who support your school goals and hobbies. Real friends never pressure you to try white powders or smoke.',
          riskLevel: 'Severe heart & addiction risk',
          audioScript:
            'Cocaine forces the heart to beat dangerously fast and tightens blood vessels. After a short fake rush, it leaves a person feeling deeply sad and trapped in addiction.',
        },
        {
          id: 'heroin',
          name: 'Heroin',
          localNames: 'Smack, Brown Sugar',
          category: 'addiction',
          shortSummary: 'An illegal opioid drug that causes one of the fastest and most painful addictions.',
          brainEffect:
            'It takes over the brain’s comfort system so the person feels sick and panicked whenever the drug wears off.',
          bodyEffect:
            'It slows breathing until the body runs out of oxygen, weakens the immune system, and spreads severe infections.',
          behaviorEffect:
            'Addiction quickly takes over daily life, making school attendance, honesty, and healthy relationships very difficult.',
          staySafeTip:
            'Never experiment "just once." If you know someone struggling with addiction, encourage them to reach a doctor or NDLEA counselor.',
          riskLevel: 'Extreme overdose & addiction risk',
          audioScript:
            'Heroin is an illegal opioid drug that causes very fast addiction. It can slow breathing until it stops completely. Never try it even once, and always seek medical help for anyone who is struggling.',
        },
        {
          id: 'inhalants',
          name: 'Inhalants & Solvents',
          localNames: 'Sniffing Glue, Petrol, Paint Thinner',
          category: 'body',
          shortSummary: 'Everyday chemical fumes that poison the brain and lungs immediately when breathed in on purpose.',
          brainEffect:
            'Chemical fumes starve the brain of fresh oxygen, causing dizziness, memory loss, and permanent nerve damage.',
          bodyEffect:
            'Even one session can damage the liver, kidneys, and lungs, or cause the heart to stop beating suddenly.',
          behaviorEffect:
            'Users may have slurred speech, frequent headaches, sudden mood swings, and trouble keeping up in school.',
          staySafeTip:
            'Use glue, markers, and cleaners only in open fresh air for school crafts, and never breathe in fumes directly.',
          riskLevel: 'Immediate oxygen & organ danger',
          audioScript:
            'Inhalants like glue, petrol, or paint fumes are toxic chemicals. Breathing them in on purpose starves the brain of oxygen and can harm the heart and lungs right away.',
        },
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Why are hard drugs especially harmful to a 12-year-old student?',
          options: [
            'Because a young student’s brain is still growing and learning',
            'Because they only affect adults',
            'Because they make homework disappear',
          ],
          correctIndex: 0,
          explanation: 'Your brain keeps growing into your twenties, so protecting it now protects your memory and future.',
        },
        {
          id: 'q2',
          question: 'When is it safe to take strong medicine like codeine or tramadol?',
          options: [
            'Whenever a friend offers it at a party',
            'Only when prescribed by a qualified doctor and given by a trusted parent or nurse',
            'Whenever you feel bored after school',
          ],
          correctIndex: 1,
          explanation: 'Prescription medicines are only safe under a qualified doctor’s care in the exact right dose.',
        },
        {
          id: 'q3',
          question: 'What is the best step if someone pressures you to try a hard drug?',
          options: [
            'Try a little bit so they do not laugh',
            'Keep it a secret forever',
            'Say no firmly, walk away, and tell a trusted parent, teacher, or counselor',
          ],
          correctIndex: 2,
          explanation: 'Saying no calmly, leaving the situation, and speaking with a trusted adult keeps you safe.',
        },
      ],
    },
    aiSupport: {
      title: 'AI Drug Support',
      subtitle: 'Ask any question about hard drugs, peer pressure, or recovery. Answers are written in simple, friendly words.',
      welcomeMessage:
        'Hello! I am ClearMind AI Support. You can ask me anything about how hard drugs affect the brain and body, how to say no to peer pressure, or how recovery works.',
      starterHeading: 'Try asking a question',
      starters: [
        'Why are hard drugs dangerous to my brain?',
        'How do I say no when friends pressure me?',
        'What does addiction mean in simple words?',
        'How can someone begin recovering from drugs?',
      ],
      inputLabel: 'Type your question',
      inputPlaceholder: 'Ask a simple question about drugs or staying healthy...',
      sendButton: 'Send',
      sendingLabel: 'Thinking...',
      clearButton: 'New Chat',
      safetyNotice: 'This assistant provides friendly educational support. In an emergency, always tell a trusted adult or call Nigeria’s free NDLEA helpline: 0800 1020 3040.',
      emptyError: 'Please type a question first before pressing Send.',
    },
    recovery: {
      title: 'Recovery Tracker',
      subtitle: 'Every drug-free day is a victory. Check in once a day, celebrate your healthy habits, and watch your progress grow.',
      streakLabel: 'Drug-Free Streak',
      daysLabel: 'Days',
      milestoneHeading: 'Next Healing Milestone',
      milestoneGoalPrefix: 'Goal',
      daysLeftLabel: 'days to reach this milestone',
      milestoneReached: 'Milestone reached! Keep going strong.',
      checkInTitle: 'Today’s Daily Check-In',
      alreadyCheckedInNotice: 'You already checked in today! You can still update your mood, habits, or note below.',
      moodLabel: 'How are you feeling today?',
      moods: {
        strong: {
          label: 'Strong',
          encouragement: 'Amazing work! Your strength today builds a healthier, brighter future.',
        },
        hopeful: {
          label: 'Hopeful',
          encouragement: 'Hope is a powerful guide. Keep taking one positive step at a time!',
        },
        struggling: {
          label: 'Struggling',
          encouragement: 'Hard days happen, and checking in proves your courage. Take a deep breath and talk with someone you trust today.',
        },
        'need-support': {
          label: 'Need Support',
          encouragement: 'You are never alone. Reaching out to a parent, school counselor, or the NDLEA helpline (0800 1020 3040) is a brave and smart step.',
        },
      },
      habitsLabel: 'Healthy habits I practiced today',
      habits: [
        { id: 'adult', label: 'Talked with a trusted adult or supportive friend' },
        { id: 'water', label: 'Drank clean water, ate well, and rested' },
        { id: 'avoid', label: 'Stayed away from risky places or peer pressure' },
        { id: 'school', label: 'Focused on schoolwork, sports, or a positive hobby' },
      ],
      noteLabel: 'One good thing I did today (optional)',
      notePlaceholder: 'Example: I studied with my friend and said no to a risky invitation.',
      saveButton: 'Save Daily Check-In',
      updateButton: 'Update Today’s Check-In',
      savedFeedbackTitle: 'Check-In Saved',
      validationMood: 'Please select how you are feeling today.',
      validationHabitOrNote: 'Please check at least one healthy habit or write a short note about your day.',
      historyTitle: 'Recent Check-In Log',
      historyEmpty: 'No check-ins recorded yet. Complete your first daily check-in to start your streak!',
      habitSingular: 'habit',
      habitPlural: 'habits',
      resetButton: 'Start Fresh (Reset)',
      resetConfirmText: 'Click again to confirm reset',
      helpTitle: 'Need Real-Life Support?',
      helpBody: 'If you or someone you care about is finding it hard to stop using drugs, talking to a trusted adult makes a huge difference.',
      helplineLabel: 'Nigeria NDLEA 24/7 Free Helpline',
      helplineNumber: '0800 1020 3040',
      helplineNote: 'Free, private, and supportive counseling across Nigeria.',
    },
    audioHub: {
      title: 'Language, Videos & Audio Lessons',
      subtitle: 'Learn in the Nigerian language you understand best. Switch languages anytime and listen to illustrated story lessons.',
      languageSectionTitle: 'Choose Your Learning Language',
      languageSectionSubtitle: 'Switching language updates every screen and all read-aloud audio across ClearMind.',
      activeLanguageLabel: 'Active Language',
      switchButton: 'Use This Language',
      hearWelcomeButton: 'Hear Welcome',
      lessonsSectionTitle: 'Illustrated Audio-Visual Lessons',
      lessonsSectionSubtitle: 'Pick a story below, step through the slides, and press Listen for guided voice narration.',
      slideLabel: 'Slide',
      previousSlide: 'Previous',
      nextSlide: 'Next',
      playSlideAudio: 'Listen to This Slide',
      playFullLesson: 'Play Full Lesson Audio',
      keyTakeawayLabel: 'Key Lesson',
      lessons: [
        {
          id: 'brain-power',
          title: 'How Hard Drugs Affect a Young Brain',
          durationLabel: '3 slides · 2 min',
          imagePath: ASSET_IMAGES.brain,
          imageAlt: 'Educational illustration of a healthy glowing brain with blue and teal pathways',
          slides: [
            {
              title: '1. Your Brain Is Your Superpower',
              caption:
                'At age 12, your brain is growing fast like a young tree. It helps you remember school lessons, enjoy music, play sports, and dream about your future career.',
              keyTakeaway: 'A growing brain needs clean air, good sleep, healthy food, and learning.',
            },
            {
              title: '2. How Hard Drugs Confuse the Brain',
              caption:
                'Hard drugs flood the brain with unnatural chemicals. They scramble clear thinking, slow down memory, and trick the brain into craving the drug again and again.',
              keyTakeaway: 'Addiction happens when the brain starts demanding a harmful substance.',
            },
            {
              title: '3. Protecting Your Bright Future',
              caption:
                'Saying no keeps your mind sharp and independent. When you stay drug-free, you stay in full control of your feelings, choices, and goals.',
              keyTakeaway: 'Choosing health keeps you in charge of your own story.',
            },
          ],
        },
        {
          id: 'peer-pressure',
          title: 'Saying No to Peer Pressure with Confidence',
          durationLabel: '3 slides · 2 min',
          imagePath: ASSET_IMAGES.peerPressure,
          imageAlt: 'Confident Nigerian student choosing supportive friends studying and playing football',
          slides: [
            {
              title: '1. Spotting Peer Pressure Early',
              caption:
                'Sometimes people say "everyone is trying it" or "just one taste will not hurt." Remember: true friends care about your safety and will never push you into danger.',
              keyTakeaway: 'Real friendship never requires risking your health.',
            },
            {
              title: '2. Three Easy Ways to Say No',
              caption:
                'Keep it simple and calm: "No thanks, I have training tomorrow," "I do not use drugs," or simply change the topic and walk toward a safe place or trusted friend.',
              keyTakeaway: 'A calm, firm "No" and walking away shows real courage.',
            },
            {
              title: '3. Build a Positive Circle',
              caption:
                'Spend time with classmates who enjoy sports, reading, coding, art, or music. Tell a parent or teacher immediately if anyone keeps pressuring you.',
              keyTakeaway: 'Good friends and trusted adults make staying safe much easier.',
            },
          ],
        },
        {
          id: 'healing-hope',
          title: 'Healing, Hope & a Fresh Start',
          durationLabel: '3 slides · 2 min',
          imagePath: ASSET_IMAGES.recoveryHope,
          imageAlt: 'Stepping stones crossing a calm blue stream toward a thriving teal green tree',
          slides: [
            {
              title: '1. Every Fresh Start Begins with One Step',
              caption:
                'If someone has already tried hard drugs, there is still hope. Recovery is not about being perfect overnight—it starts with deciding to ask for help today.',
              keyTakeaway: 'No matter yesterday’s mistake, today can be day one of healing.',
            },
            {
              title: '2. Reaching Out for Support',
              caption:
                'Doctors, school counselors, caring parents, and the free Nigerian NDLEA helpline (0800 1020 3040) help people recover safely and kindly without shame.',
              keyTakeaway: 'Asking a trusted adult for help is a sign of strength.',
            },
            {
              title: '3. Celebrating Daily Progress',
              caption:
                'Using the Recovery Tracker each day helps replace harmful habits with healthy routines like drinking water, resting well, and talking with supportive people.',
              keyTakeaway: 'One healthy day at a time builds a whole new life.',
            },
          ],
        },
      ],
    },
    footer: {
      note: 'ClearMind — Student Health & Drug Prevention Project',
      colorsLegend: 'Teal for healing · Deep Blue for trust · White for a fresh start',
    },
  },

  ha: {
    brandName: 'ClearMind',
    nav: {
      home: 'Gida',
      education: 'Koyo',
      aiSupport: 'Taimakon AI',
      recovery: 'Warkewa',
      audio: 'Sauti da Darasi',
    },
    languageSwitcher: {
      buttonAria: 'Sauya harshen manhaja da sautin karatu',
      menuHeading: 'Zaɓi harshenka',
      readAloudReady: 'Rubutu da Sautin Karatu',
    },
    audioControls: {
      listen: 'Saurara',
      loading: 'Ana shirya sauti...',
      stop: 'Tsayar da Sauti',
      listenInLang: 'Saurara da Hausa',
      dismissError: 'Rufe',
    },
    home: {
      kicker: 'Jagorar Lafiya da Kariya daga Miyagun Kwayoyi',
      headline: 'Kare kwakwalwarka, ka zaɓi kyakkyawar makoma mai lafiya.',
      subheadline:
        'Barka da zuwa ClearMind. Koyi bayani mai sauƙi kan yadda miyagun kwayoyi ke cutar da kwakwalwa da jiki, yi tambayoyi cikin kwanciyar hankali, kuma ka bibiyi sabon farawa kowace rana.',
      primaryCta: 'Koyi Gaskiyar Kwayoyi',
      listenWelcome: 'Saurari Saƙon Maraba',
      heroAlt: 'Daliban makarantar sakandare a Najeriya suna tafiya cikin farin ciki zuwa makaranta',
      problemTitle: 'Mene ne miyagun kwayoyi?',
      problemBody:
        'Miyagun kwayoyi abubuwa ne masu haɗari da ke lalata kwakwalwa da jiki, su haifar da jaraba, kuma su sauya yadda mutum ke tunani, ji, da hali.',
      problemPoints: [
        {
          title: 'Lalacewar Kwakwalwa',
          text: 'Suna rikita ƙwaƙwalwa, su rage fahimtar karatu a makaranta, su kuma hana yin tunani mai kyau.',
        },
        {
          title: 'Tarkon Jaraba',
          text: 'Da zarar mutum ya fara, jiki zai riƙa neman ƙari ko da yana cutar da lafiyarsa.',
        },
        {
          title: 'Ana Iya Warkewa',
          text: 'Da sahihin ilimi, taimakon manya masu amana, da matakai na yau da kullum, kowa zai iya samun sabon farawa.',
        },
      ],
      exploreTitle: 'Zaɓi inda za ka fara',
      exploreSubtitle: 'Kayan aiki guda huɗu masu sauƙi don taimaka maka koyo, tambaya, da zama lafiya.',
      cards: {
        educationTitle: 'Cibiyar Ilimin Kwayoyi',
        educationDesc: 'Karanta bayani mai sauƙi kan miyagun kwayoyi da illolinsu ga kwakwalwa da jiki.',
        educationAction: 'Buɗe Laburare',
        aiTitle: 'Taimakon AI',
        aiDesc: 'Yi tambayoyi masu sauƙi ka sami amsa mai gaskiya cikin harshen da ka fi fahimta.',
        aiAction: 'Fara Hira',
        recoveryTitle: 'Mai Bibiyar Warkewa',
        recoveryDesc: 'Yi rajista kowace rana, ka rubuta kyawawan halaye, ka ga ci gabanka.',
        recoveryAction: 'Buɗe Bibiyar',
        audioTitle: 'Sauti da Darussa',
        audioDesc: 'Sauya tsakanin Turanci, Hausa, Yoruba, da Igbo tare da darussan sauti.',
        audioAction: 'Kalla da Saurara',
      },
      streakBannerLabel: 'Kwanakinka na Warkewa',
      streakDaysSuffix: 'kwanaki ba tare da kwayoyi ba',
      streakAction: 'Rubuta na Yau',
      encouragementLabel: 'Ƙarfafa Gwiwa ta Yau',
      encouragementQuote: 'Kowane kyakkyawan zaɓi da ka yi yau yana kare burinka na gobe.',
    },
    education: {
      title: 'Cibiyar Ilimin Kwayoyi',
      subtitle: 'Zaɓi kowace kwaya a ƙasa don ganin yadda take shafar kwakwalwa, jiki, da hali.',
      filters: {
        all: 'Duka Kwayoyi',
        brain: 'Illar Kwakwalwa',
        body: 'Illar Jiki',
        addiction: 'Tsananin Jaraba',
      },
      listHeading: 'Zaɓi kwaya',
      tabs: {
        brain: 'Kwakwalwa',
        body: 'Jiki',
        behavior: 'Hali da Tunani',
        safety: 'Yadda Za Ka Ce A’a',
      },
      alsoCalledLabel: 'Ana kiranta da',
      riskLabel: 'Matsayin haɗari',
      quizTitle: 'Gwajin Fahimta Mai Sauri',
      quizSubtitle: 'Gwada abin da ka koya da tambayoyi uku masu sauƙi.',
      quizCheckButton: 'Duba Amsoshina',
      quizResetButton: 'Sake Gwadawa',
      quizScorePrefix: 'Makinka',
      quizGreatFeedback: 'Madalla! Ka san yadda za ka kare kwakwalwarka da lafiyarka.',
      quizTryAgainFeedback: 'Ƙoƙari mai kyau! Sake duba bayanai a sama sannan ka gwada kuma.',
      quizSelectAllPrompt: 'Don Allah zaɓi amsa ga duka tambayoyin guda 3 kafin dubawa.',
      drugs: [
        {
          id: 'cannabis',
          name: 'Wiwi (Tabar Wiwi)',
          localNames: 'Wiwi, Igbo, Kush, Loud',
          category: 'brain',
          shortSummary: 'Tsiro ne mai ƙarfi da ake sha ko a zuba a abinci wanda ke rage ƙarfin kwakwalwar yaro mai girma.',
          brainEffect:
            'Saboda kwakwalwar ɗalibi tana ci gaba da girma, wiwi tana lalata ƙwaƙwalwa, hankali a aji, da saurin fahimta.',
          bodyEffect:
            'Shanta yana cutar da huhu, ya sa zuciya ta buga da sauri, idanu su yi ja, ya kuma rage ƙarfin wasanni.',
          behaviorEffect:
            'Tana iya sa tsoro na bazata, ruɗani, ƙyamar karatu, da nisantar iyali da abokai na gari.',
          staySafeTip:
            'Kada ka karɓi alewa ko abin sha da ba ka sani ba daga baƙi ko abokai. Ce cikin nutsuwa: "A’a na gode, ina kare lafiyata."',
          riskLevel: 'Babban haɗari ga kwakwalwar matasa',
          audioScript:
            'Tabar wiwi tana cutar da kwakwalwar matasa masu girma. Tana lalata fahimta a makaranta, tana raunana huhu, kuma tana iya kawo tsoro da ruɗani. Koyaushe ka ce a’a.',
        },
        {
          id: 'tramadol-codeine',
          name: 'Tramadol da Maganin Tari (Codeine)',
          localNames: 'Trams, Shaye-shayen Syrup',
          category: 'addiction',
          shortSummary: 'Magungunan ciwo da tari masu ƙarfi da ke zama masu tsananin haɗari idan aka sha ba da umarnin likita ba.',
          brainEffect:
            'Shan su ba bisa ƙa’ida ba yana sa kwakwalwa ta buƙaci ƙari da sauri kuma yana iya kawo farfaɗiya.',
          bodyEffect:
            'Yana rage numfashi zuwa matakin haɗari, yana lalata hanta da koda, kuma yana iya tsayar da zuciya.',
          behaviorEffect:
            'Yana sa yawan barci, fushi idan ba a samu ba, da rasa sha’awar karatu da iyali.',
          staySafeTip:
            'Ka sha magani ne kawai wanda iyaye, likita, ko ma’aikaciyar jinya ta ba ka. Kada ka sha haɗaɗɗen lemo a biki.',
          riskLevel: 'Tsananin jaraba da haɗarin mutuwa',
          audioScript:
            'Tramadol da maganin tari na codeine suna da matuƙar haɗari idan aka sha su ba tare da umarnin likita ba. Suna kawo jaraba da sauri da matsalar numfashi.',
        },
        {
          id: 'meth',
          name: 'Methamphetamine',
          localNames: 'Mkpuru Mmiri, Ice, Crystal',
          category: 'brain',
          shortSummary: 'Mummunan sinadari ne mai ƙarfi da ke tilasta wa kwakwalwa da zuciya aiki fiye da kima.',
          brainEffect:
            'Yana kashe ƙwayoyin kwakwalwa, yana sa ganin abubuwan tsoro da ba su wanzu ba, ya kuma hana barci.',
          bodyEffect:
            'Yana kawo tsananin ramewa, lalacewar haƙora, zafin jiki, da haɗarin bugun zuciya ko shanyewa.',
          behaviorEffect:
            'Masu shansa kan yi rashin nutsuwa, tsananin tsoro, ko su aikata abin haɗari ba tare da sun sani ba.',
          staySafeTip:
            'Bar wurin nan take idan wani ya nuna maka farin sinadari ko ƙwaya mai kyalli. Sanar da babba mai amana.',
          riskLevel: 'Mummunan haɗari ga kwakwalwa da zuciya',
          audioScript:
            'Methamphetamine ko Mkpuru Mmiri sinadari ne mai tsananin haɗari. Yana lalata ƙwayoyin kwakwalwa, yana hana barci, kuma yana jefa zuciya cikin haɗari.',
        },
        {
          id: 'cocaine',
          name: 'Cocaine',
          localNames: 'Coke, Snow, Crack',
          category: 'body',
          shortSummary: 'Kwaya ce mai tsananin ƙarfi da ke sa zuciya ta buga da sauri fiye da yadda ya kamata.',
          brainEffect:
            'Tana kawo ɗan gajeren jin daɗin ƙarya sannan ta bar mutum cikin tsananin baƙin ciki da damuwa.',
          bodyEffect:
            'Tana matse magudanan jini, ta ƙara hawan jini, ta cutar da hanci da huhu, kuma tana iya sa ciwon zuciya.',
          behaviorEffect:
            'Tana sa rashin haƙuri, yawan fushi, ɓoye-ɓoye, da jefa kai cikin haɗari.',
          staySafeTip:
            'Yi abota da abokan da ke son ci gabanka a makaranta. Abokai na gari ba za su taɓa tilasta maka shan kwaya ba.',
          riskLevel: 'Babban haɗarin zuciya da jaraba',
          audioScript:
            'Cocaine tana sa zuciya ta buga da sauri sosai kuma tana matse jijiyoyin jini. Tana jefa mutum cikin baƙin ciki da jaraba mai wuyar fita.',
        },
        {
          id: 'heroin',
          name: 'Heroin',
          localNames: 'Smack, Brown Sugar',
          category: 'addiction',
          shortSummary: 'Kwaya ce haramtacciya da ke haddasa ɗaya daga cikin jarabobin da suka fi wuya da zafi.',
          brainEffect:
            'Tana mamaye tsarin kwakwalwa har mutum ya ji ciwo sosai da zarar kwayar ta ƙare a jikinsa.',
          bodyEffect:
            'Tana rage numfashi har jiki ya rasa iskar oxygen, tana raunana garkuwar jiki, kuma tana yaɗa cututtuka.',
          behaviorEffect:
            'Jaraba tana hana zuwa makaranta, ta lalata gaskiya da dangantaka mai kyau da iyali.',
          staySafeTip:
            'Kada ka taɓa gwadawa ko sau ɗaya. Idan wani yana cikin matsala, taimaka masa ya tuntuɓi likita ko NDLEA.',
          riskLevel: 'Tsananin haɗarin jaraba da rasa rai',
          audioScript:
            'Heroin kwaya ce haramtacciya mai haddasa jaraba cikin sauri. Tana iya tsayar da numfashi gaba ɗaya. Kada ka taɓa gwadawa ko sau ɗaya.',
        },
        {
          id: 'inhalants',
          name: 'Abubuwan Shaƙa (Inhalants)',
          localNames: 'Shaƙar Gulu, Fetur, Fenti',
          category: 'body',
          shortSummary: 'Tirin sinadarai ne na yau da kullum da ke zama guba ga kwakwalwa da huhu idan aka shaƙa da gangan.',
          brainEffect:
            'Tirin sinadarai yana hana kwakwalwa samun iska mai kyau, ya sa jiri, mantuwa, da lalacewar jijiyoyi.',
          bodyEffect:
            'Ko gwaji ɗaya yana iya lalata hanta, koda, da huhu, ko ya sa zuciya ta tsaya nan take.',
          behaviorEffect:
            'Yana sa kasa magana da kyau, yawan ciwon kai, da rashin maida hankali a karatu.',
          staySafeTip:
            'Yi amfani da gulu da fenti a wuri mai iska kawai don aikin makaranta, kada ka shaƙi ƙamshinsu kai tsaye.',
          riskLevel: 'Haɗarin gaggawa ga iskar oxygen da gabobi',
          audioScript:
            'Shaƙar gulu, fetur, ko fenti yana zama guba ga kwakwalwa. Yana hana kwakwalwa iska mai kyau kuma yana cutar da zuciya da huhu nan take.',
        },
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Me ya sa miyagun kwayoyi suka fi cutar da ɗalibi mai shekaru 12?',
          options: [
            'Saboda kwakwalwar yaro tana ci gaba da girma da koyo',
            'Saboda manya kaɗai suke shafa',
            'Saboda suna sa aikin gida ya ƙare',
          ],
          correctIndex: 0,
          explanation: 'Kwakwalwarka tana ci gaba da girma har zuwa shekaru ashirin, don haka kare ta yanzu yana kare makomarka.',
        },
        {
          id: 'q2',
          question: 'Yaushe ne ya dace a sha magani mai ƙarfi kamar codeine ko tramadol?',
          options: [
            'Duk lokacin da aboki ya bayar a biki',
            'Sai lokacin da ƙwararren likita ya rubuta kuma iyaye ko ma’aikacin lafiya ya bayar',
            'Idan ana jin gajiya bayan makaranta',
          ],
          correctIndex: 1,
          explanation: 'Magungunan asibiti suna da lafiya ne kawai idan likita ya ba da umarni da daidaitaccen adadi.',
        },
        {
          id: 'q3',
          question: 'Wane mataki ya fi kyau idan wani ya tilasta maka gwada kwaya?',
          options: [
            'Gwada kaɗan don kada su yi dariya',
            'Ɓoye maganar har abada',
            'Ce a’a da ƙarfin gwiwa, bar wurin, kuma ka faɗa wa iyaye ko malami mai amana',
          ],
          correctIndex: 2,
          explanation: 'Faɗin a’a cikin nutsuwa, barin wurin, da sanar da babba mai amana yana kare ka.',
        },
      ],
    },
    aiSupport: {
      title: 'Taimakon AI kan Kwayoyi',
      subtitle: 'Yi kowace tambaya game da miyagun kwayoyi, matsin lamba na abokai, ko warkewa cikin kalmomi masu sauƙi.',
      welcomeMessage:
        'Sannu! Ni ne Mataimakin ClearMind AI. Za ka iya tambaya ta komai game da illolin miyagun kwayoyi, yadda za ka ce a’a ga abokai marasa kyau, ko yadda ake warkewa.',
      starterHeading: 'Gwada ɗaya daga cikin tambayoyin nan',
      starters: [
        'Me ya sa miyagun kwayoyi ke da haɗari ga kwakwalwata?',
        'Yaya zan ce a’a idan abokai suka matsa mini?',
        'Mene ne ma’anar jaraba cikin kalmomi masu sauƙi?',
        'Ta yaya mutum zai fara warkewa daga shan kwayoyi?',
      ],
      inputLabel: 'Rubuta tambayarka',
      inputPlaceholder: 'Yi tambaya mai sauƙi game da kwayoyi ko zama lafiya...',
      sendButton: 'Aika',
      sendingLabel: 'Ana tunani...',
      clearButton: 'Sabuwar Hira',
      safetyNotice: 'Wannan mataimaki yana ba da ilimi mai sauƙi. A lokacin gaggawa, sanar da babba mai amana ko kira layin NDLEA kyauta: 0800 1020 3040.',
      emptyError: 'Don Allah rubuta tambaya kafin ka danna Aika.',
    },
    recovery: {
      title: 'Mai Bibiyar Warkewa',
      subtitle: 'Kowace rana ba tare da kwayoyi ba nasara ce. Yi rajista sau ɗaya a rana don ganin ci gabanka.',
      streakLabel: 'Kwanakin Nasara',
      daysLabel: 'Kwanaki',
      milestoneHeading: 'Matakin Warkewa na Gaba',
      milestoneGoalPrefix: 'Manufa',
      daysLeftLabel: 'kwanaki suka rage zuwa wannan manufa',
      milestoneReached: 'An cimma manufa! Ci gaba da ƙoƙari.',
      checkInTitle: 'Rajistar Yau',
      alreadyCheckedInNotice: 'Ka riga ka yi rajistar yau! Za ka iya sabunta yanayinka ko rubutunka a ƙasa.',
      moodLabel: 'Yaya kake ji yau?',
      moods: {
        strong: {
          label: 'Mai Ƙarfi',
          encouragement: 'Madalla! Ƙarfin zuciyarka yau yana gina makoma mai haske.',
        },
        hopeful: {
          label: 'Mai Fata',
          encouragement: 'Fata jagora ce mai ƙarfi. Ci gaba da ɗaukar mataki mai kyau kowace rana!',
        },
        struggling: {
          label: 'Da Wahala',
          encouragement: 'Ranaku masu wahala suna zuwa, amma rajistarka ta nuna jarumta. Yi magana da wanda ka amince da shi yau.',
        },
        'need-support': {
          label: 'Ina Buƙatar Taimako',
          encouragement: 'Ba ka kaɗai ba. Tuntuɓar iyaye, malami, ko layin NDLEA (0800 1020 3040) mataki ne na wayo da jarumta.',
        },
      },
      habitsLabel: 'Kyawawan halayen da na yi yau',
      habits: [
        { id: 'adult', label: 'Na yi magana da babba mai amana ko aboki na gari' },
        { id: 'water', label: 'Na sha ruwa mai tsabta, na ci abinci mai kyau, na huta' },
        { id: 'avoid', label: 'Na guji wurare masu haɗari da abokai marasa kyau' },
        { id: 'school', label: 'Na maida hankali kan karatu, wasanni, ko sana’a mai kyau' },
      ],
      noteLabel: 'Abu ɗaya mai kyau da na yi yau (ba dole ba)',
      notePlaceholder: 'Misali: Na yi karatu tare da abokina kuma na guji wurin haɗari.',
      saveButton: 'Ajiye Rajistar Yau',
      updateButton: 'Sabunta Rajistar Yau',
      savedFeedbackTitle: 'An Ajiye Rajista',
      validationMood: 'Don Allah zaɓi yadda kake ji yau.',
      validationHabitOrNote: 'Don Allah zaɓi aƙalla hali guda ɗaya mai kyau ko rubuta ɗan bayani.',
      historyTitle: 'Tarihin Rajistar Kwanan Nan',
      historyEmpty: 'Babu rajista tukuna. Cika rajistarka ta farko don fara ƙidaya.',
      habitSingular: 'hali',
      habitPlural: 'halaye',
      resetButton: 'Fara Sabo (Reset)',
      resetConfirmText: 'Sake danna don tabbatarwa',
      helpTitle: 'Kana Buƙatar Taimako?',
      helpBody: 'Idan kai ko wani da ka sani yana fama da daina kwayoyi, tattaunawa da babba mai amana tana taimakawa sosai.',
      helplineLabel: 'Layin Taimako na NDLEA (Kyauta 24/7)',
      helplineNumber: '0800 1020 3040',
      helplineNote: 'Taimako mai sirri kuma kyauta a faɗin Najeriya.',
    },
    audioHub: {
      title: 'Harsuna, Bidiyo da Darussan Sauti',
      subtitle: 'Koyi cikin harshen Najeriya da ka fi fahimta. Sauya harshe kowane lokaci ka saurari darussa masu hoto.',
      languageSectionTitle: 'Zaɓi Harshen Koyo',
      languageSectionSubtitle: 'Sauya harshe yana canza dukkan rubutu da sautin karatu a cikin ClearMind.',
      activeLanguageLabel: 'Harshen Yanzu',
      switchButton: 'Yi Amfani da Wannan',
      hearWelcomeButton: 'Saurari Maraba',
      lessonsSectionTitle: 'Darussan Labari Masu Hoto da Sauti',
      lessonsSectionSubtitle: 'Zaɓi labari a ƙasa, duba kowane shafi, ka danna Saurara don jin bayani.',
      slideLabel: 'Shafi',
      previousSlide: 'Baya',
      nextSlide: 'Gaba',
      playSlideAudio: 'Saurari Wannan Shafin',
      playFullLesson: 'Saurari Dukan Darasin',
      keyTakeawayLabel: 'Babban Darasi',
      lessons: [
        {
          id: 'brain-power',
          title: 'Yadda Miyagun Kwayoyi Ke Cutar da Kwakwalwar Yaro',
          durationLabel: 'Shafuka 3 · Minti 2',
          imagePath: ASSET_IMAGES.brain,
          imageAlt: 'Hoton kwakwalwa mai lafiya da haske cikin launin shuɗi da kore',
          slides: [
            {
              title: '1. Kwakwalwarka Ita Ce Ƙarfinka',
              caption:
                'A shekaru 12, kwakwalwarka tana girma da sauri kamar ƙaramar bishiya. Tana taimaka maka tuna karatu, jin daɗin wasanni, da gina burinka na gaba.',
              keyTakeaway: 'Kwakwalwa mai girma tana buƙatar iska mai kyau, barci, abinci mai gina jiki, da karatu.',
            },
            {
              title: '2. Yadda Kwayoyi Ke Rikita Kwakwalwa',
              caption:
                'Miyagun kwayoyi suna cika kwakwalwa da sinadarai masu illa. Suna rikita tunani, rage ƙwaƙwalwa, su kuma yaudari kwakwalwa ta riƙa neman ƙari.',
              keyTakeaway: 'Jaraba tana faruwa ne idan kwakwalwa ta fara buƙatar abin da ke cutar da ita.',
            },
            {
              title: '3. Kare Kyakkyawar Makomarka',
              caption:
                'Faɗin a’a yana kiyaye hankalinka da ’yancinka. Idan ba ka shan kwayoyi, kai ne za ka riƙa jagorantar rayuwarka da burinka.',
              keyTakeaway: 'Zaɓar lafiya yana ba ka ikon gina rayuwarka.',
            },
          ],
        },
        {
          id: 'peer-pressure',
          title: 'Faɗin A’a ga Matsin Lambar Abokai',
          durationLabel: 'Shafuka 3 · Minti 2',
          imagePath: ASSET_IMAGES.peerPressure,
          imageAlt: 'Ɗalibi mai ƙarfin gwiwa yana zaɓar abokan karatu da wasan ƙwallo',
          slides: [
            {
              title: '1. Gane Matsin Lamba da Wuri',
              caption:
                'Wani lokaci mutane kan ce "kowa yana yi" ko "ɗanɗano ɗaya ba zai yi komai ba." Abokai na gari ba za su taɓa tura ka cikin haɗari ba.',
              keyTakeaway: 'Abotar gaskiya ba ta buƙatar jefa lafiyarka cikin haɗari.',
            },
            {
              title: '2. Hanyoyi Uku Masu Sauƙi na Ce A’a',
              caption:
                'Ce cikin nutsuwa: "A’a na gode, ina da wasa gobe," "Ba na shan kwaya," ko kuma ka sauya zancen ka tafi wurin abokai masu kyau.',
              keyTakeaway: 'Ce a’a da ƙarfin gwiwa sannan ka bar wurin alama ce ta jarumta.',
            },
            {
              title: '3. Zaɓi Abokai Nagari',
              caption:
                'Kasance tare da abokan da ke son karatu, wasanni, da fasaha. Faɗa wa iyaye ko malami nan take idan wani ya ci gaba da matsa maka.',
              keyTakeaway: 'Abokai nagari da manya masu amana suna taimaka maka ka zauna lafiya.',
            },
          ],
        },
        {
          id: 'healing-hope',
          title: 'Warkewa, Fata da Sabon Farawa',
          durationLabel: 'Shafuka 3 · Minti 2',
          imagePath: ASSET_IMAGES.recoveryHope,
          imageAlt: 'Duwatsun tsallaka kogi mai kwanciyar hankali zuwa bishiya mai kore',
          slides: [
            {
              title: '1. Kowane Sabon Farawa Yana Fara da Mataki Ɗaya',
              caption:
                'Idan wani ya taɓa gwada miyagun kwayoyi, har yanzu akwai fata. Warkewa tana farawa ne da yanke shawarar neman taimako a yau.',
              keyTakeaway: 'Ko da an yi kuskure jiya, yau za ta iya zama ranar farko ta warkewa.',
            },
            {
              title: '2. Neman Taimako',
              caption:
                'Likitoci, malaman makaranta, iyaye, da layin taimako na NDLEA (0800 1020 3040) suna taimaka wa mutane su warke cikin mutunci da sirri.',
              keyTakeaway: 'Neman taimakon babba mai amana alama ce ta ƙarfi.',
            },
            {
              title: '3. Murnar Ci Gaban Yau da Kullum',
              caption:
                'Amfani da Mai Bibiyar Warkewa kowace rana yana taimakawa wajen gina kyawawan halaye kamar shan ruwa, hutu, da tattaunawa da masu ƙaunarka.',
              keyTakeaway: 'Rana ɗaya mai lafiya bayan rana tana gina sabuwar rayuwa.',
            },
          ],
        },
      ],
    },
    footer: {
      note: 'ClearMind — Aikin Makaranta na Lafiya da Kariya daga Kwayoyi',
      colorsLegend: 'Koren Teal don warkewa · Shuɗi mai zurfi don amana · Fari don sabon farawa',
    },
  },

  yo: {
    brandName: 'ClearMind',
    nav: {
      home: 'Ilé',
      education: 'Ìkẹ́kọ̀ọ́',
      aiSupport: 'Ìrànlọ́wọ́ AI',
      recovery: 'Ìwòsàn',
      audio: 'Ohùn àti Ẹ̀kọ́',
    },
    languageSwitcher: {
      buttonAria: 'Yí èdè àpù àti ohùn kíkà padà',
      menuHeading: 'Yan èdè rẹ',
      readAloudReady: 'Ọ̀rọ̀ àti Ohùn Kíkà',
    },
    audioControls: {
      listen: 'Gbọ́',
      loading: 'Ń pèsè ohùn...',
      stop: 'Dá Ohùn Dúró',
      listenInLang: 'Gbọ́ ní Yorùbá',
      dismissError: 'Pa á tì',
    },
    home: {
      kicker: 'Ìtọ́sọ́nà Ìlera àti Ìkẹ́kọ̀ọ́ Oògùn Olóró',
      headline: 'Dáàbò bo ọpọlọ rẹ, yan ọjọ́ iwájú tó dára tí ó sì ní ìlera.',
      subheadline:
        'Káàbọ̀ sí ClearMind. Kọ́ òtítọ́ tó rọrùn nípa bí oògùn olóró ṣe ń ba ọpọlọ àti ara jẹ́, béèrè ìbéèrè nígbàkúgbà, kí o sì tọ́pa ìbẹ̀rẹ̀ tuntun rẹ.',
      primaryCta: 'Kọ́ Nípa Oògùn Olóró',
      listenWelcome: 'Gbọ́ Ọ̀rọ̀ Ìkíni',
      heroAlt: 'Àwọn akẹ́kọ̀ọ́ ilé-ìwé gírámà ní Nàìjíríà tí wọ́n ń rìn papọ̀ pẹ̀lú ayọ̀ lọ sí ilé-ìwé',
      problemTitle: 'Kí ni oògùn olóró?',
      problemBody:
        'Oògùn olóró jẹ́ àwọn nǹkan eléwu tí ó ń ba ọpọlọ àti ara jẹ́, tí ó ń fa àfẹ́mọ́jú (ìbarakú), tí ó sì ń yí bí ènìyàn ṣe ń rònú, ní ìmọ̀lára, àti hùwà padà.',
      problemPoints: [
        {
          title: 'Ìbàjẹ́ Ọpọlọ',
          text: 'Wọ́n ń da ìrántí rú, wọ́n ń dín ẹ̀kọ́ kù ní ilé-ìwé, wọ́n sì ń mú kí ìpinnu rere ṣòro.',
        },
        {
          title: 'Tàkúté Ìbarakú',
          text: 'Nígbà tí ènìyàn bá bẹ̀rẹ̀, ara máa ń fẹ́ sí i kódà nígbà tí ó ń pa ìlera lára.',
        },
        {
          title: 'Ìwòsàn Ṣeé Ṣe',
          text: 'Pẹ̀lú ìmọ̀ tòótọ́, àwọn àgbàlagbà tí a fọkàn tán, àti ìgbésẹ̀ ojoojúmọ́, ẹnikẹ́ni lè bẹ̀rẹ̀ tuntun.',
        },
      ],
      exploreTitle: 'Yan ibi tí o fẹ́ bẹ̀rẹ̀',
      exploreSubtitle: 'Àwọn irinṣẹ́ mẹ́rin tó rọrùn láti ràn ọ́ lọ́wọ́ láti kọ́, béèrè, kí o sì dúró ṣinṣin.',
      cards: {
        educationTitle: 'Ilé-Ìkẹ́kọ̀ọ́ Oògùn',
        educationDesc: 'Ka òtítọ́ tó ṣe kedere nípa oògùn olóró àti bí wọ́n ṣe ń ṣe ọpọlọ àti ara ní ibi.',
        educationAction: 'Ṣí Ilé-Ìwé',
        aiTitle: 'Ìrànlọ́wọ́ AI',
        aiDesc: 'Béèrè ìbéèrè kí o sì gba àlàyé tó rọrùn ní èdè tí ó yé ọ jùlọ.',
        aiAction: 'Bẹ̀rẹ̀ Ìfọ̀rọ̀wérọ̀',
        recoveryTitle: 'Olùtọ́pa Ìwòsàn',
        recoveryDesc: 'Ṣe àyẹ̀wò lójoojúmọ́, kọ àwọn ìwà rere sílẹ̀, kí o sì wo ìlọsíwájú rẹ.',
        recoveryAction: 'Ṣí Olùtọ́pa',
        audioTitle: 'Ohùn àti Ẹ̀kọ́',
        audioDesc: 'Yí padà láàárín Gẹ̀ẹ́sì, Hausa, Yorùbá, àti Igbo pẹ̀lú àwọn ẹ̀kọ́ oní-ohùn.',
        audioAction: 'Wò àti Gbọ́',
      },
      streakBannerLabel: 'Ọjọ́ Ìwòsàn Rẹ Lọ́wọ́lọ́wọ́',
      streakDaysSuffix: 'ọjọ́ láìlo oògùn olóró',
      streakAction: 'Kọ ti Òní',
      encouragementLabel: 'Ìṣírí Ojoojúmọ́',
      encouragementQuote: 'Gbogbo ìpinnu ìlera tí o bá ṣe lónìí ń dáàbò bo àlá rẹ fún ọ̀la.',
    },
    education: {
      title: 'Ilé-Ìkẹ́kọ̀ọ́ Oògùn Olóró',
      subtitle: 'Yan oògùn kọ̀ọ̀kan ní ìsàlẹ̀ láti rí bí ó ṣe ń nípa lórí ọpọlọ, ara, àti ìwà ní ọ̀rọ̀ rọrùn.',
      filters: {
        all: 'Gbogbo Oògùn',
        brain: 'Ìpalára Ọpọlọ',
        body: 'Ìpalára Ara',
        addiction: 'Ìbarakú Gíga',
      },
      listHeading: 'Yan oògùn kan',
      tabs: {
        brain: 'Ọpọlọ',
        body: 'Ara',
        behavior: 'Ìmọ̀lára àti Ìwà',
        safety: 'Bí A Ṣe Ń Sọ Bẹ́ẹ̀ Kọ́',
      },
      alsoCalledLabel: 'Orúkọ mìíràn',
      riskLabel: 'Ìwọ̀n ewu',
      quizTitle: 'Ìdánwò Kékeré',
      quizSubtitle: 'Dán ohun tí o kọ́ wò pẹ̀lú ìbéèrè mẹ́ta rọrùn.',
      quizCheckButton: 'Ṣàyẹ̀wò Ìdáhùn Mi',
      quizResetButton: 'Gbìyànjú Lẹ́ẹ̀kan Si',
      quizScorePrefix: 'Máàkì rẹ',
      quizGreatFeedback: 'O ṣeun púpọ̀! O mọ bí a ṣe ń dáàbò bo ọpọlọ àti ìlera rẹ.',
      quizTryAgainFeedback: 'Ìgbìyànjú tó dára! Tún àwọn òtítọ́ òkè yẹ̀wò kí o sì tún dánwò.',
      quizSelectAllPrompt: 'Jọ̀wọ́ yan ìdáhùn fún gbogbo ìbéèrè mẹ́ta kí o tó ṣàyẹ̀wò.',
      drugs: [
        {
          id: 'cannabis',
          name: 'Igbó (Cannabis)',
          localNames: 'Igbó, Wee-wee, Kush, Loud',
          category: 'brain',
          shortSummary: 'Ewéko eléwu tí a máa ń mu tàbí pò mọ́ oúnjẹ tí ó ń fa ọpọlọ ọmọdé sẹ́yìn.',
          brainEffect:
            'Nítorí pé ọpọlọ akẹ́kọ̀ọ́ ṣì ń dàgbà, igbó ń ba ìrántí, àfiyèsí ní kíláàsì, àti òye ẹ̀kọ́ jẹ́.',
          bodyEffect:
            'Mímu rẹ̀ ń pa ẹ̀dọ̀fóró lára, ó ń mú ọkàn lù kíákíá, ojú ń pọ́n, ó sì ń dín agbára eré ìdárayá kù.',
          behaviorEffect:
            'Ó lè fa ìbẹ̀rù òjijì, ìdàrúdàpọ̀, ọ̀lẹ sí iṣẹ́ ilé-ìwé, àti yíyẹra fún ẹbí àti ọ̀rẹ́ rere.',
          staySafeTip:
            'Má gba àwọn oúnjẹ ìpanu tàbí sìgá tí o kò mọ̀ lọ́wọ́ àlejò tàbí ẹlẹgbẹ́. Sọ pẹ̀lú ìfọ̀kànbalẹ̀: "Rárá o, mo ń tọ́jú ọpọlọ mi."',
          riskLevel: 'Ewu gíga fún ọpọlọ ọ̀dọ́',
          audioScript:
            'Igbó máa ń ba ọpọlọ akẹ́kọ̀ọ́ tó ń dàgbà jẹ́. Ó ń dí ìrántí àti ẹ̀kọ́ lọ́wọ́, ó ń sọ ẹ̀dọ̀fóró di aláìlera, ó sì lè fa ìbẹ̀rù. Máa sọ bẹ́ẹ̀ kọ́ nígbà gbogbo.',
        },
        {
          id: 'tramadol-codeine',
          name: 'Tramadol àti Oògùn Ikọ́ Codeine',
          localNames: 'Trams, Oògùn Ikọ́ Olóró',
          category: 'addiction',
          shortSummary: 'Àwọn oògùn ìrora àti ikọ́ líle tí ó di eléwu púpọ̀ nígbà tí a bá lò wọ́n láìsí àṣẹ dókítà.',
          brainEffect:
            'Lílo wọ́n ní ìlòkulò ń tan ọpọlọ láti fẹ́ púpọ̀ sí i kíákíá, ó sì lè fa gìrì òjijì.',
          bodyEffect:
            'Ó ń dín mímí kù sí ìpele ewu, ó ń ba ẹ̀dọ̀ àti kíndìnrín jẹ́, ó sì lè dá ọkàn dúró.',
          behaviorEffect:
            'Ó ń fa oorun àsìkò, ìbínú nígbà tí kò bá sí oògùn náà, àti àìfọkànsí ilé-ìwé.',
          staySafeTip:
            'Lo oògùn tí òbí, dókítà, tàbí nọ́ọ̀sì fún ọ nìkan. Má mu ọtí ẹlẹ́rìndòdò tí a pò ní ibi àríyá.',
          riskLevel: 'Ewu ìbarakú gíga púpọ̀',
          audioScript:
            'Tramadol àti codeine jẹ́ oògùn líle tí ó léwu púpọ̀ bí a bá lò wọ́n láìsí dókítà. Wọ́n ń fa ìbarakú kíákíá àti ìṣòro mímí.',
        },
        {
          id: 'meth',
          name: 'Methamphetamine',
          localNames: 'Mkpuru Mmiri, Ice, Crystal',
          category: 'brain',
          shortSummary: 'Kẹ́míkà eléwu gan-an tí ó ń fi agbára mú ọpọlọ àti ọkàn ṣiṣẹ́ ju bí ó ṣe yẹ lọ.',
          brainEffect:
            'Ó ń pa àwọn sẹ́ẹ̀lì ọpọlọ, ó ń mú kí ènìyàn rí ohun ẹ̀rù tí kò sí níbẹ̀, ó sì ń ba oorun jẹ́.',
          bodyEffect:
            'Ó ń fa rírù gan-an, ìbàjẹ́ eyín, ooru ara gíga, àti ewu àrùn ọkàn kódà fún ọ̀dọ́.',
          behaviorEffect:
            'Àwọn tó ń lò ó máa ń di aláìfarabalẹ̀, wọ́n lè bẹ̀rù tàbí hùwà ewu láìmọ̀.',
          staySafeTip:
            'Kúrò níbẹ̀ lẹ́sẹ̀kẹsẹ̀ bí ẹnikẹ́ni bá fún ọ ní iyẹ̀fun funfun tàbí òkúta dídán. Sọ fún àgbàlagbà tí o fọkàn tán.',
          riskLevel: 'Ewu líle fún ọpọlọ àti ọkàn',
          audioScript:
            'Methamphetamine tàbí Mkpuru Mmiri jẹ́ kẹ́míkà tó léwu púpọ̀. Ó ń pa sẹ́ẹ̀lì ọpọlọ, ó ń da oorun rú, ó sì ń fi ọkàn sínú ewu.',
        },
        {
          id: 'cocaine',
          name: 'Cocaine',
          localNames: 'Coke, Snow, Crack',
          category: 'body',
          shortSummary: 'Oògùn amúni-dàgbà-lójijì tí ó ń mú kí ọkàn àti iṣan ẹ̀jẹ̀ ṣiṣẹ́ pẹ̀lú ewu.',
          brainEffect:
            'Ó ń fúnni ní ayọ̀ èké fún ìgbà díẹ̀, lẹ́yìn náà ó ń fi ìbànújẹ́ àti ìyànjẹ sílẹ̀.',
          bodyEffect:
            'Ó ń fún iṣan ẹ̀jẹ̀, ó ń gbé ẹ̀jẹ̀ ríru sókè, ó ń ba imú jẹ́, ó sì lè fa ìkọlù ọkàn òjijì.',
          behaviorEffect:
            'Ó ń mú ènìyàn di aláìnísùúrù, oníbínú, àti ẹni tí ó ń fi ara rẹ̀ sínú ewu.',
          staySafeTip:
            'Yan àwọn ọ̀rẹ́ tí wọ́n ń ràn ọ́ lọ́wọ́ nínú ẹ̀kọ́ àti eré rere. Ọ̀rẹ́ tòótọ́ kì í tì ọ́ sínú oògùn olóró.',
          riskLevel: 'Ewu ọkàn àti ìbarakú líle',
          audioScript:
            'Cocaine ń mú ọkàn lù kíákíá pẹ̀lú ewu, ó sì ń fún iṣan ẹ̀jẹ̀. Lẹ́yìn ìgbà díẹ̀, ó máa ń fi ìbànújẹ́ ńlá àti ìbarakú sílẹ̀.',
        },
        {
          id: 'heroin',
          name: 'Heroin',
          localNames: 'Smack, Brown Sugar',
          category: 'addiction',
          shortSummary: 'Oògùn olóró tí òfin kà léèwọ̀ tí ó ń fa ìbarakú tó yára jùlọ tí ó sì ní ìrora.',
          brainEffect:
            'Ó ń gba ìṣàkóso ọpọlọ títí ènìyàn fi ń ṣàìsàn nígbà tí oògùn náà bá tán ní ara.',
          bodyEffect:
            'Ó ń dín mímí kù títí atẹ́gùn fi ń tán ní ara, ó sì ń sọ ààbò ara di aláìlera.',
          behaviorEffect:
            'Ìbarakú máa ń dí lílọ sí ilé-ìwé, òtítọ́, àti ìbáṣepọ̀ rere pẹ̀lú ẹbí lọ́wọ́.',
          staySafeTip:
            'Má dán an wò kódà lẹ́ẹ̀kan ṣoṣo. Ràn ẹnikẹ́ni tó bá ń tiraka lọ́wọ́ láti kàn sí dókítà tàbí NDLEA.',
          riskLevel: 'Ewu ìbarakú àti ikú tó ga jùlọ',
          audioScript:
            'Heroin jẹ́ oògùn olóró tí ó ń fa ìbarakú kíákíá. Ó lè dá mímí dúró pátápátá. Má ṣe dán an wò rárá.',
        },
        {
          id: 'inhalants',
          name: 'Àwọn Èéfín Kẹ́míkà (Inhalants)',
          localNames: 'Fífà Gúlúù, Epo Bẹntiróòlù, Ọ̀dà',
          category: 'body',
          shortSummary: 'Èéfín kẹ́míkà ojoojúmọ́ tí ó jẹ́ májèlé fún ọpọlọ àti ẹ̀dọ̀fóró nígbà tí a bá mọ̀ọ́mọ̀ fà á.',
          brainEffect:
            'Ó ń gba atẹ́gùn rere kúrò ní ọpọlọ, ó ń fa òyì, ìgbàgbé, àti ìbàjẹ́ iṣan títí láé.',
          bodyEffect:
            'Ìgbà kan ṣoṣo lè ba ẹ̀dọ̀, kíndìnrín, àti ẹ̀dọ̀fóró jẹ́, tàbí dá ọkàn dúró lójijì.',
          behaviorEffect:
            'Ó lè fa ọ̀rọ̀ tí kò ṣe kedere, ẹ̀fọ́rí nígbà gbogbo, àti ìṣòro nínú ẹ̀kọ́.',
          staySafeTip:
            'Lo gúlúù àti ọ̀dà níbi tí atẹ́gùn wà fún iṣẹ́ ọnà ilé-ìwé nìkan, má fà èéfín wọn sí imú.',
          riskLevel: 'Ewu kíákíá fún atẹ́gùn àti ẹ̀yà ara',
          audioScript:
            'Fífà gúlúù, epo, tàbí ọ̀dà jẹ́ májèlé. Ó ń gba atẹ́gùn kúrò ní ọpọlọ, ó sì lè pa ọkàn àti ẹ̀dọ̀fóró lára lẹ́sẹ̀kẹsẹ̀.',
        },
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Kí ló dé tí oògùn olóró fi léwu púpọ̀ fún akẹ́kọ̀ọ́ ọmọ ọdún méjìlá?',
          options: [
            'Nítorí pé ọpọlọ akẹ́kọ̀ọ́ ṣì ń dàgbà tí ó sì ń kẹ́kọ̀ọ́',
            'Nítorí pé àwọn àgbàlagbà nìkan ló ń ṣe ní ibi',
            'Nítorí pé ó ń parí iṣẹ́ ilé',
          ],
          correctIndex: 0,
          explanation: 'Ọpọlọ rẹ ṣì ń dàgbà títí di ogún ọdún síwájú, nítorí náà títọ́jú rẹ̀ báyìí ń dáàbò bo ọjọ́ iwájú rẹ.',
        },
        {
          id: 'q2',
          question: 'Ìgbà wo ni ó dára láti lo oògùn líle bí codeine tàbí tramadol?',
          options: [
            'Nígbà tí ọ̀rẹ́ bá fúnni ní ibi àríyá',
            'Nígbà tí dókítà tó kàwé gboyè bá kọ ọ́, tí òbí tàbí nọ́ọ̀sì sì fúnni nìkan',
            'Nígbà tí àárẹ̀ bá múni lẹ́yìn ilé-ìwé',
          ],
          correctIndex: 1,
          explanation: 'Oògùn ilé-ìwòsàn wà fún ìtọ́jú lábẹ́ àṣẹ dókítà pẹ̀lú ìwọ̀n tó yẹ nìkan.',
        },
        {
          id: 'q3',
          question: 'Kí ni ìgbésẹ̀ tó dára jù bí ẹnikẹ́ni bá rọ̀ ọ́ láti dán oògùn olóró wò?',
          options: [
            'Dán díẹ̀ wò kí wọ́n má baà rẹ́rìn-ín rẹ',
            'Pa á mọ́ ní ìkọ̀kọ̀ títí láé',
            'Sọ bẹ́ẹ̀ kọ́ dájú, rìn kúrò níbẹ̀, kí o sì sọ fún òbí, olùkọ́, tàbí olùdámọ̀ràn',
          ],
          correctIndex: 2,
          explanation: 'Sísọ bẹ́ẹ̀ kọ́ pẹ̀lú ìgboyà, kíkúrò níbẹ̀, àti sísọ fún àgbàlagbà ń pa ọ́ mọ́ ní ààbò.',
        },
      ],
    },
    aiSupport: {
      title: 'Ìrànlọ́wọ́ AI fún Oògùn Olóró',
      subtitle: 'Béèrè ìbéèrè nípa oògùn olóró, ìkìmọ́lẹ̀ ẹlẹgbẹ́, tàbí ìwòsàn ní ọ̀rọ̀ tó rọrùn.',
      welcomeMessage:
        'Pẹ̀lẹ́ o! Èmi ni Olùrànlọ́wọ́ AI ClearMind. O lè béèrè ohunkóhun nípa bí oògùn olóró ṣe ń ṣe ara ní ibi, bí a ṣe ń sọ bẹ́ẹ̀ kọ́ fún ẹlẹgbẹ́, tàbí bí ìwòsàn ṣe ń ṣiṣẹ́.',
      starterHeading: 'Gbìyànjú ìbéèrè kan níbí',
      starters: [
        'Kí ló dé tí oògùn olóró fi léwu fún ọpọlọ mi?',
        'Báwo ni mo ṣe lè sọ bẹ́ẹ̀ kọ́ bí àwọn ọ̀rẹ́ bá ń rọ̀ mí?',
        'Kí ni ìtumọ̀ ìbarakú ní ọ̀rọ̀ rọrùn?',
        'Báwo ni ènìyàn ṣe lè bẹ̀rẹ̀ ìwòsàn kúrò nínú oògùn olóró?',
      ],
      inputLabel: 'Kọ ìbéèrè rẹ',
      inputPlaceholder: 'Béèrè ìbéèrè rọrùn nípa oògùn tàbí ìlera...',
      sendButton: 'Firánṣẹ́',
      sendingLabel: 'Ń rònú...',
      clearButton: 'Ìfọ̀rọ̀wérọ̀ Tuntun',
      safetyNotice: 'Olùrànlọ́wọ́ yìí ń fúnni ní ẹ̀kọ́ ìlera. Ní àkókò pàjáwìrì, sọ fún àgbàlagbà tàbí pe ìlà NDLEA lọ́fẹ̀ẹ́: 0800 1020 3040.',
      emptyError: 'Jọ̀wọ́ kọ ìbéèrè rẹ kí o tó tẹ Firánṣẹ́.',
    },
    recovery: {
      title: 'Olùtọ́pa Ìwòsàn',
      subtitle: 'Gbogbo ọjọ́ láìlo oògùn olóró jẹ́ ìṣẹ́gun. Ṣe àyẹ̀wò lẹ́ẹ̀kan lójúmọ́ kí o sì wo ìlọsíwájú rẹ.',
      streakLabel: 'Ọjọ́ Ìṣẹ́gun',
      daysLabel: 'Ọjọ́',
      milestoneHeading: 'Àfojúsùn Ìwòsàn Tókàn',
      milestoneGoalPrefix: 'Àfojúsùn',
      daysLeftLabel: 'ọjọ́ tó kù láti dé àfojúsùn yìí',
      milestoneReached: 'O ti dé àfojúsùn! Máa bá a lọ.',
      checkInTitle: 'Àyẹ̀wò Òní',
      alreadyCheckedInNotice: 'O ti ṣe àyẹ̀wò òní tẹ́lẹ̀! O sì lè ṣe àtúnṣe ìmọ̀lára tàbí àkọsílẹ̀ rẹ ní ìsàlẹ̀.',
      moodLabel: 'Báwo ni ara rẹ ṣe rí lónìí?',
      moods: {
        strong: {
          label: 'Alágbára',
          encouragement: 'Iṣẹ́ takuntakun! Agbára rẹ lónìí ń kọ́ ọjọ́ iwájú tó dán mọ́rán.',
        },
        hopeful: {
          label: 'Onírètí',
          encouragement: 'Ìrètí jẹ́ ìmọ́lẹ̀ tó lágbára. Máa gbé ìgbésẹ̀ rere lọ́kọ̀ọ̀kan!',
        },
        struggling: {
          label: 'Ń Tiraka',
          encouragement: 'Àwọn ọjọ́ líle máa ń wáyé, ṣùgbọ́n àyẹ̀wò rẹ fi ìgboyà hàn. Bá ẹni tí o fọkàn tán sọ̀rọ̀ lónìí.',
        },
        'need-support': {
          label: 'Mo Nílò Ìrànlọ́wọ́',
          encouragement: 'O kò dá wà. Bíbá òbí, olùkọ́, tàbí ìlà NDLEA (0800 1020 3040) sọ̀rọ̀ jẹ́ ìgbésẹ̀ ọlọ́gbọ́n.',
        },
      },
      habitsLabel: 'Àwọn ìwà ìlera tí mo ṣe lónìí',
      habits: [
        { id: 'adult', label: 'Mo bá àgbàlagbà tàbí ọ̀rẹ́ rere sọ̀rọ̀' },
        { id: 'water', label: 'Mo mu omi mímọ́, mo jẹun dáadáa, mo sì sinmi' },
        { id: 'avoid', label: 'Mo yẹra fún àwọn ibi eléwu àti ẹlẹgbẹ́ búburú' },
        { id: 'school', label: 'Mo fọkàn sí ẹ̀kọ́, eré ìdárayá, tàbí iṣẹ́ ọwọ́ rere' },
      ],
      noteLabel: 'Ohun rere kan tí mo ṣe lónìí (àṣàyàn)',
      notePlaceholder: 'Àpẹẹrẹ: Mo kàwé pẹ̀lú ọ̀rẹ́ mi, mo sì kọ̀ láti lọ sí ibi eléwu.',
      saveButton: 'Fi Àyẹ̀wò Òní Pamọ́',
      updateButton: 'Ṣe Àtúnṣe Àyẹ̀wò Òní',
      savedFeedbackTitle: 'A Ti Fi Àyẹ̀wò Pamọ́',
      validationMood: 'Jọ̀wọ́ yan bí ara rẹ ṣe rí lónìí.',
      validationHabitOrNote: 'Jọ̀wọ́ yan ó kéré jù ìwà rere kan tàbí kọ ọ̀rọ̀ kúkúrú nípa òní.',
      historyTitle: 'Àkọsílẹ̀ Àyẹ̀wò Lọ́wọ́lọ́wọ́',
      historyEmpty: 'Kò tíì sí àkọsílẹ̀ kankan. Ṣe àyẹ̀wò àkọ́kọ́ rẹ láti bẹ̀rẹ̀.',
      habitSingular: 'ìwà rere',
      habitPlural: 'ìwà rere',
      resetButton: 'Bẹ̀rẹ̀ Tuntun',
      resetConfirmText: 'Tẹ̀ ẹ́ lẹ́ẹ̀kan si láti fìdí rẹ̀ múlẹ̀',
      helpTitle: 'Ṣé O Nílò Ìrànlọ́wọ́?',
      helpBody: 'Bí ìwọ tàbí ẹni tí o mọ̀ bá ń tiraka láti fi oògùn olóró sílẹ̀, sísọ fún àgbàlagbà ṣe pàtàkì.',
      helplineLabel: 'Ìlà Ìrànlọ́wọ́ NDLEA (Ọ̀fẹ́ 24/7)',
      helplineNumber: '0800 1020 3040',
      helplineNote: 'Ìmọ̀ràn ọ̀fẹ́ àti ìkọ̀kọ̀ jákèjádò Nàìjíríà.',
    },
    audioHub: {
      title: 'Èdè, Fídíò àti Ẹ̀kọ́ Ohùn',
      subtitle: 'Kẹ́kọ̀ọ́ ní èdè Nàìjíríà tí ó yé ọ jùlọ. Yí èdè padà nígbàkúgbà kí o sì gbọ́ àwọn ẹ̀kọ́ oní-àwòrán.',
      languageSectionTitle: 'Yan Èdè Ìkẹ́kọ̀ọ́ Rẹ',
      languageSectionSubtitle: 'Yíyí èdè padà ń yí gbogbo ọ̀rọ̀ àti ohùn kíkà padà ní gbogbo ClearMind.',
      activeLanguageLabel: 'Èdè Lọ́wọ́lọ́wọ́',
      switchButton: 'Lo Èdè Yìí',
      hearWelcomeButton: 'Gbọ́ Ìkíni',
      lessonsSectionTitle: 'Àwọn Ẹ̀kọ́ Ìtàn Oní-Àwòrán àti Ohùn',
      lessonsSectionSubtitle: 'Yan ìtàn kan ní ìsàlẹ̀, wo àwọn ojú-ìwé rẹ̀, kí o sì tẹ Gbọ́ láti tẹ́tí sí àlàyé.',
      slideLabel: 'Ojú-ìwé',
      previousSlide: 'Tẹ́lẹ̀',
      nextSlide: 'Tókàn',
      playSlideAudio: 'Gbọ́ Ojú-ìwé Yìí',
      playFullLesson: 'Gbọ́ Gbogbo Ẹ̀kọ́',
      keyTakeawayLabel: 'Kókó Ẹ̀kọ́',
      lessons: [
        {
          id: 'brain-power',
          title: 'Bí Oògùn Olóró Ṣe Ń Ṣe Ọpọlọ Ọ̀dọ́ Ní Ibi',
          durationLabel: 'Ojú-ìwé 3 · Ìṣẹ́jú 2',
          imagePath: ASSET_IMAGES.brain,
          imageAlt: 'Àwòrán ọpọlọ tí ó ní ìlera pẹ̀lú àwọ̀ búlúù àti aláwọ̀ ewé',
          slides: [
            {
              title: '1. Ọpọlọ Rẹ Ni Agbára Rẹ',
              caption:
                'Ní ọmọ ọdún méjìlá, ọpọlọ rẹ ń dàgbà kíákíá bí igi kékeré. Ó ń ràn ọ́ lọ́wọ́ láti rántí ẹ̀kọ́, gbádùn eré, àti lá àlá ọjọ́ iwájú.',
              keyTakeaway: 'Ọpọlọ tó ń dàgbà nílò atẹ́gùn mímọ́, oorun tó pé, oúnjẹ rere, àti ẹ̀kọ́.',
            },
            {
              title: '2. Bí Oògùn Olóró Ṣe Ń Da Ọpọlọ Rú',
              caption:
                'Oògùn olóró ń kún ọpọlọ pẹ̀lú kẹ́míkà eléwu. Ó ń da ìrònú rú, ó ń dín ìrántí kù, ó sì ń tan ọpọlọ láti máa fẹ́ oògùn náà sí i.',
              keyTakeaway: 'Ìbarakú máa ń ṣẹlẹ̀ nígbà tí ọpọlọ bá bẹ̀rẹ̀ sí í béèrè fún ohun tó ń pa á lára.',
            },
            {
              title: '3. Dídáàbò Bo Ọjọ́ Iwájú Rẹ',
              caption:
                'Sísọ bẹ́ẹ̀ kọ́ ń jẹ́ kí ọpọlọ rẹ dán mọ́rán. Nígbà tí o kò bá lo oògùn olóró, ìwọ ni olórí ìpinnu àti àlá rẹ.',
              keyTakeaway: 'Yíyan ìlera ń jẹ́ kí o ṣàkóso ìtàn ayé rẹ.',
            },
          ],
        },
        {
          id: 'peer-pressure',
          title: 'Sísọ Bẹ́ẹ̀ Kọ́ fún Ìkìmọ́lẹ̀ Ẹlẹgbẹ́',
          durationLabel: 'Ojú-ìwé 3 · Ìṣẹ́jú 2',
          imagePath: ASSET_IMAGES.peerPressure,
          imageAlt: 'Akẹ́kọ̀ọ́ onígboyà tí ó ń yan àwọn ọ̀rẹ́ rere tí wọ́n ń kàwé tí wọ́n sì ń gbá bọ́ọ̀lù',
          slides: [
            {
              title: '1. Dídá Ìkìmọ́lẹ̀ Ẹlẹgbẹ́ Mọ̀',
              caption:
                'Nígbà míì ènìyàn lè sọ pé "gbogbo ènìyàn ló ń ṣe é." Rántí: ọ̀rẹ́ tòótọ́ máa ń bìkítà fún ààbò rẹ, kò ní tì ọ́ sínú ewu.',
              keyTakeaway: 'Ọ̀rẹ́ tòótọ́ kì í fi ìlera rẹ sínú ewu.',
            },
            {
              title: '2. Ọ̀nà Mẹ́ta Rọrùn Láti Sọ Bẹ́ẹ̀ Kọ́',
              caption:
                'Sọ pẹ̀lú ìfọ̀kànbalẹ̀: "Rárá o, mo ní eré lọ́la," "Mi ò kì í lo oògùn olóró," tàbí kí o yí ọ̀rọ̀ padà kí o sì rìn lọ sí ibi ààbò.',
              keyTakeaway: 'Sísọ bẹ́ẹ̀ kọ́ àti rírìn kúrò fi ìgboyà tòótọ́ hàn.',
            },
            {
              title: '3. Yan Àwọn Ọ̀rẹ́ Rere',
              caption:
                'Máa bá àwọn ẹlẹgbẹ́ tí wọ́n fẹ́ràn eré ìdárayá, ìwé kíkà, tàbí orin rìn. Sọ fún òbí tàbí olùkọ́ bí ẹnikẹ́ni bá ń yọ ọ́ lẹ́nu.',
              keyTakeaway: 'Ọ̀rẹ́ rere àti àgbàlagbà olóòótọ́ ń mú kí ààbò rọrùn.',
            },
          ],
        },
        {
          id: 'healing-hope',
          title: 'Ìwòsàn, Ìrètí àti Ìbẹ̀rẹ̀ Tuntun',
          durationLabel: 'Ojú-ìwé 3 · Ìṣẹ́jú 2',
          imagePath: ASSET_IMAGES.recoveryHope,
          imageAlt: 'Àwọn òkúta ìṣísẹ̀ lórí odò búlúù tútù tí ó lọ sí igi aláwọ̀ ewé',
          slides: [
            {
              title: '1. Gbogbo Ìbẹ̀rẹ̀ Tuntun Ń Bẹ̀rẹ̀ pẹ̀lú Ìgbésẹ̀ Kan',
              caption:
                'Bí ẹnikẹ́ni bá ti dán oògùn olóró wò tẹ́lẹ̀, ìrètí ṣì wà. Ìwòsàn ń bẹ̀rẹ̀ pẹ̀lú ìpinnu láti béèrè fún ìrànlọ́wọ́ lónìí.',
              keyTakeaway: 'Láìka àṣìṣe àná sí, òní lè jẹ́ ọjọ́ àkọ́kọ́ ìwòsàn.',
            },
            {
              title: '2. Wíwá Ìrànlọ́wọ́',
              caption:
                'Àwọn dókítà, olùdámọ̀ràn ilé-ìwé, òbí, àti ìlà NDLEA (0800 1020 3040) ń ran àwọn ènìyàn lọ́wọ́ láti gba ìwòsàn pẹ̀lú ọ̀wọ̀.',
              keyTakeaway: 'Bíbá àgbàlagbà sọ̀rọ̀ fún ìrànlọ́wọ́ jẹ́ àmì agbára.',
            },
            {
              title: '3. Àyẹyẹ Ìlọsíwájú Ojoojúmọ́',
              caption:
                'Lílo Olùtọ́pa Ìwòsàn lójoojúmọ́ ń ràn ọ́ lọ́wọ́ láti rọ́pò ìwà burúkú pẹ̀lú ìwà ìlera bí mímu omi àti ìsinmi tó pé.',
              keyTakeaway: 'Ọjọ́ ìlera kan lẹ́yìn èkejì ń kọ́ ìgbésí ayé tuntun.',
            },
          ],
        },
      ],
    },
    footer: {
      note: 'ClearMind — Iṣẹ́ Ilé-Ìwé lórí Ìlera àti Ìdènà Oògùn Olóró',
      colorsLegend: 'Aláwọ̀ Teal fún ìwòsàn · Búlúù fún ìgbẹ́kẹ̀lé · Funfun fún ìbẹ̀rẹ̀ tuntun',
    },
  },

  ig: {
    brandName: 'ClearMind',
    nav: {
      home: 'Ụlọ',
      education: 'Mmụta',
      aiSupport: 'Nkwado AI',
      recovery: 'Ngwọta',
      audio: 'Olu na Ihe Mmụta',
    },
    languageSwitcher: {
      buttonAria: 'Gbanwee asụsụ ngwa na olu ọgụgụ',
      menuHeading: 'Họrọ asụsụ gị',
      readAloudReady: 'Ederede na Olu Ọgụgụ',
    },
    audioControls: {
      listen: 'Gee ntị',
      loading: 'Na-akwadebe olu...',
      stop: 'Kwụsị Olu',
      listenInLang: 'Gee ntị n’Igbo',
      dismissError: 'Mechie',
    },
    home: {
      kicker: 'Nduzi Ahụike na Mgbochi Ọgwụ Ike',
      headline: 'Chekwaa uche gị, họrọ ọdịnihu mara mma ma dị mma.',
      subheadline:
        'Nnọọ na ClearMind. Mụta eziokwu dị mfe banyere otu ọgwụ ike si emebi ụbụrụ na ahụ, jụọ ajụjụ n’enweghị nsogbu, ma dekọọ nzọụkwụ ọ bụla nke mbido ọhụrụ.',
      primaryCta: 'Mụta Banyere Ọgwụ Ike',
      listenWelcome: 'Gee Ozi Nnọọ',
      heroAlt: 'Ụmụ akwụkwọ sekọndrị na Naịjirịa na-aga akwụkwọ ọnụ n’ọṅụ',
      problemTitle: 'Gịnị bụ ọgwụ ike?',
      problemBody:
        'Ọgwụ ike bụ ihe ndị dị ize ndụ na-emebi ụbụrụ na ahụ, na-akpata iri ahụ (addiction), ma na-agbanwe otu mmadụ si eche echiche, enwe mmetụta, ma na-akpa agwa.',
      problemPoints: [
        {
          title: 'Mmebi Ụbụrụ',
          text: 'Ha na-agbagwoju ncheta anya, na-ebelata mmụta n’ụlọ akwụkwọ, ma na-eme ka mkpebi ziri ezi sie ike.',
        },
        {
          title: 'Ọnyà Iri Ahụ',
          text: 'Ozugbo mmadụ malitere, ahụ na-achọwanye ya ọbụna mgbe ọ na-emerụ ahụike ya.',
        },
        {
          title: 'Ngwọta Dị N’aka',
          text: 'Site n’ezi mmụta, ndị okenye a tụkwasịrị obi, na nzọụkwụ kwa ụbọchị, onye ọ bụla nwere ike ịmalite mbido ọhụrụ.',
        },
      ],
      exploreTitle: 'Họrọ ebe ị ga-amalite',
      exploreSubtitle: 'Ngwaọrụ anọ dị mfe e mere iji nyere gị aka ịmụta, jụọ ajụjụ, ma sie ike.',
      cards: {
        educationTitle: 'Ebe Mmụta Ọgwụ Ike',
        educationDesc: 'Gụọ eziokwu doro anya banyere ọgwụ ike na otu ha si emetụta ụbụrụ na ahụ gị.',
        educationAction: 'Mepee Ọbá Akwụkwọ',
        aiTitle: 'Nkwado AI',
        aiDesc: 'Jụọ ajụjụ ma nweta nkọwa dị mfe n’asụsụ ị kacha aghọta.',
        aiAction: 'Malite Mkparịta Ụka',
        recoveryTitle: 'Ndekọ Ngwọta',
        recoveryDesc: 'Dekọọ ụbọchị gị kwa ụbọchị, cheta omume dị mma, ma hụ ka ọganihu gị na-eto.',
        recoveryAction: 'Mepee Ndekọ',
        audioTitle: 'Olu na Ihe Mmụta',
        audioDesc: 'Gbanwee n’etiti Bekee, Hausa, Yoruba, na Igbo ya na akụkọ ndị nwere olu.',
        audioAction: 'Lee ma Gee ntị',
      },
      streakBannerLabel: 'Ụbọchị Ngwọta Gị Ugbu A',
      streakDaysSuffix: 'ụbọchị na-enweghị ọgwụ ike',
      streakAction: 'Dekọọ nke Taa',
      encouragementLabel: 'Agbamume Kwa Ụbọchị',
      encouragementQuote: 'Nhọrọ ahụike ọ bụla ị mere taa na-echebe nrọ gị maka echi.',
    },
    education: {
      title: 'Ebe Mmụta Ọgwụ Ike',
      subtitle: 'Họrọ ọgwụ ike ọ bụla n’okpuru iji hụ otu o si emetụta ụbụrụ, ahụ, na agwa n’okwu dị mfe.',
      filters: {
        all: 'Ọgwụ Niile',
        brain: 'Mmebi Ụbụrụ',
        body: 'Mmebi Ahụ',
        addiction: 'Iri Ahụ Ike',
      },
      listHeading: 'Họrọ otu ọgwụ',
      tabs: {
        brain: 'Ụbụrụ',
        body: 'Ahụ',
        behavior: 'Mmetụta na Agwa',
        safety: 'Otu E Si Asị Mba',
      },
      alsoCalledLabel: 'Aha ndị ọzọ',
      riskLabel: 'Ọkwa ize ndụ',
      quizTitle: 'Nnwale Ngwa Ngwa',
      quizSubtitle: 'Nwalee ihe ị mụtara site n’ajụjụ atọ dị mfe.',
      quizCheckButton: 'Lelee Azịza M',
      quizResetButton: 'Nwaa Ọzọ',
      quizScorePrefix: 'Akara gị',
      quizGreatFeedback: 'I mere nke ọma! Ị maara otu esi echekwa uche na ahụike gị.',
      quizTryAgainFeedback: 'Mgbalị dị mma! Leghachi anya n’eziokwu dị n’elu ma nwaa ọzọ.',
      quizSelectAllPrompt: 'Biko họrọ azịza maka ajụjụ atọ niile tupu ị lelee.',
      drugs: [
        {
          id: 'cannabis',
          name: 'Igbo (Cannabis)',
          localNames: 'Igbo, Wee-wee, Kush, Loud',
          category: 'brain',
          shortSummary: 'Ahịhịa ike a na-aṅụ ma ọ bụ tinyere na nri nke na-eme ka ụbụrụ nwatakịrị na-eto eto belata ọsọ.',
          brainEffect:
            'N’ihi na ụbụrụ nwa akwụkwọ ka na-eto, cannabis na-emebi ncheta, itinye uche na klas, na nghọta ihe ọmụmụ.',
          bodyEffect:
            'Ịṅụ ya na-emerụ ngụgụ, na-eme ka obi tie ọsọ ọsọ, anya achaa uhie, ma na-eme ka egwuregwu sie ike.',
          behaviorEffect:
            'Ọ nwere ike ịkpata egwu mberede, mgbagwoju anya, umengwụ n’ọrụ ụlọ akwụkwọ, na izere ezinụlọ.',
          staySafeTip:
            'Anabatala swiiti ma ọ bụ ihe a na-aṅụ ị na-amaghị n’aka ndị ọbịa ma ọ bụ ndị enyi. Sị n’udo: "Mba daalụ, ana m echekwa ụbụrụ m."',
          riskLevel: 'Nnukwu ize ndụ nye ụbụrụ na-eto eto',
          audioScript:
            'Cannabis ma ọ bụ igbo na-emerụ ụbụrụ nwa akwụkwọ na-eto eto. Ọ na-emebi ncheta n’ụlọ akwụkwọ, na-eme ka ngụgụ daa mbà, ma na-akpata mgbagwoju anya. Sị mba mgbe niile.',
        },
        {
          id: 'tramadol-codeine',
          name: 'Tramadol na Ọgwụ Ụkwara Codeine',
          localNames: 'Trams, Ọgwụ Ụkwara Ọjọọ',
          category: 'addiction',
          shortSummary: 'Ọgwụ mgbu na ụkwara siri ike nke na-adị oke egwu ma a ṅụọ ya n’enweghị ntụziaka dọkịta.',
          brainEffect:
            'Iji ha eme ihe n’ụzọ na-ezighị ezi na-eduhie ụbụrụ ịchọwanye ngwa ngwa ma nwee ike ịkpata ọdịdọ mberede.',
          bodyEffect:
            'Ọ na-ebelata iku ume ruo n’ọkwa dị egwu, na-emebi imeju na akụrụ, ma nwee ike ịkwụsị obi.',
          behaviorEffect:
            'Ndị na-aṅụ ya na-enwe ụra mgbe niile, iwe ọkụ mgbe ha enweghị ya, ma hapụ ịhụ ụlọ akwụkwọ n’anya.',
          staySafeTip:
            'Naanị ṅụọ ọgwụ nne na nna, dọkịta, ma ọ bụ nọọsụ nyere gị. Aṅụla ihe ọṅụṅụ a gwakọtara na mmemme.',
          riskLevel: 'Oke ize ndụ nke iri ahụ',
          audioScript:
            'Tramadol na codeine bụ ọgwụ siri ike dị oke egwu ma a ṅụọ ha n’enweghị dọkịta. Ha na-akpata iri ahụ ngwa ngwa na nsogbu iku ume.',
        },
        {
          id: 'meth',
          name: 'Methamphetamine',
          localNames: 'Mkpuru Mmiri, Ice, Crystal',
          category: 'brain',
          shortSummary: 'Kemịkalụ siri oke ike nke na-amanye ụbụrụ na obi ịrụ ọrụ gabiga ókè.',
          brainEffect:
            'Ọ na-ebibi mkpụrụ ndụ ụbụrụ, na-eme ka mmadụ hụ ihe egwu na-adịghị adị, ma na-egbochi ụra.',
          bodyEffect:
            'Ọ na-akpata ịta ahụ nke ukwuu, mmebi ezé, oke okpomọkụ, na ize ndụ ọrịa obi ọbụna na ndị na-eto eto.',
          behaviorEffect:
            'Ọ na-eme ka mmadụ ghara inwe udo, nwee oke egwu, ma mee ihe dị ize ndụ n’amaghị ama.',
          staySafeTip:
            'Pụọ ebe ahụ ozugbo ma ọ bụrụ na onye ọ bụla nyere gị ntụ ọcha ma ọ bụ okwute na-egbuke egbuke. Gwa okenye ị tụkwasịrị obi.',
          riskLevel: 'Oke ize ndụ nye ụbụrụ na obi',
          audioScript:
            'Methamphetamine ma ọ bụ Mkpuru Mmiri bụ kemịkalụ dị oke ize ndụ. Ọ na-emebi mkpụrụ ndụ ụbụrụ, na-egbochi ụra, ma tinye obi n’ize ndụ.',
        },
        {
          id: 'cocaine',
          name: 'Cocaine',
          localNames: 'Coke, Snow, Crack',
          category: 'body',
          shortSummary: 'Ọgwụ ike na-amanye obi na akwara ọbara ịrụ ọrụ ọsọ ọsọ n’ụzọ dị ize ndụ.',
          brainEffect:
            'Ọ na-enye nwa obere ọṅụ ụgha, e mechaa ọ hapụ nnukwu mwute, nchegbu, na agụụ ịṅụ ọzọ.',
          bodyEffect:
            'Ọ na-eme ka akwara ọbara dị warara, bulie ọbara mgbali elu, merụọ imi, ma nwee ike ịkpata nkụchi obi mberede.',
          behaviorEffect:
            'Ọ na-eme ka mmadụ ghara inwe ndidi, nwee iwe ngwa ngwa, ma tinye onwe ya n’ize ndụ.',
          staySafeTip:
            'Họrọ ndị enyi na-akwado ebumnuche ụlọ akwụkwọ gị. Ezigbo enyi agaghị amanye gị ịnwale ọgwụ ike.',
          riskLevel: 'Oke ize ndụ nye obi na iri ahụ',
          audioScript:
            'Cocaine na-amanye obi ịkụ ọsọ ọsọ nke ukwuu ma na-eme ka akwara ọbara sie ike. Ọ na-ahapụ mmadụ n’oké mwute na iri ahụ.',
        },
        {
          id: 'heroin',
          name: 'Heroin',
          localNames: 'Smack, Brown Sugar',
          category: 'addiction',
          shortSummary: 'Ọgwụ ike iwu machibidoro nke na-akpata otu n’ime iri ahụ kacha sie ike ma dị mwute.',
          brainEffect:
            'Ọ na-eweghara usoro ụbụrụ nke na mmadụ na-arịa ọrịa ma tụọ egwu mgbe ọgwụ ahụ gwụrụ n’ahụ.',
          bodyEffect:
            'Ọ na-ebelata iku ume ruo mgbe ikuku oxygen gwụrụ n’ahụ, ma na-eme ka ahụ daa mbà.',
          behaviorEffect:
            'Iri ahụ na-egbochi ịga akwụkwọ, ikwu eziokwu, na ezigbo mmekọrịta n’ezinụlọ.',
          staySafeTip:
            'Anwalela ya ọbụna otu ugboro. Nyere onye na-alụ ọgụ aka iru dọkịta ma ọ bụ onye ndụmọdụ NDLEA.',
          riskLevel: 'Ize ndụ kachasị elu nke iri ahụ na ọnwụ',
          audioScript:
            'Heroin bụ ọgwụ ike iwu machibidoro nke na-akpata iri ahụ ngwa ngwa. Ọ nwere ike ịkwụsị iku ume kpamkpam. Anwalela ya ma ọlị.',
        },
        {
          id: 'inhalants',
          name: 'Anwụrụ Kemịkalụ (Inhalants)',
          localNames: 'Iku Glue, Petrol, Agba',
          category: 'body',
          shortSummary: 'Anwụrụ kemịkalụ kwa ụbọchị nke bụ nsí nye ụbụrụ na ngụgụ ma e jiri ụma kuo ya.',
          brainEffect:
            'Ọ na-anapụ ụbụrụ ikuku ọma, na-akpata isi ọwụwa, nchefu, na mmebi akwara na-adịgide adịgide.',
          bodyEffect:
            'Ọbụna otu oge nwere ike imebi imeju, akụrụ, na ngụgụ, ma ọ bụ mee ka obi kwụsị mberede.',
          behaviorEffect:
            'Ọ na-akpata okwu na-edoghị anya, isi ọwụwa mgbe niile, na nsogbu n’ịmụ ihe n’ụlọ akwụkwọ.',
          staySafeTip:
            'Jiri glue na agba rụọ ọrụ naanị n’ebe ikuku dị maka ọrụ nka ụlọ akwụkwọ, ekula anwụrụ ha.',
          riskLevel: 'Ize ndụ ngwa ngwa nye ikuku na akụkụ ahụ',
          audioScript:
            'Iku glue, petrol, ma ọ bụ agba bụ nsí kemịkalụ. Ọ na-anapụ ụbụrụ ikuku ọma ma nwee ike imerụ obi na ngụgụ ozugbo.',
        },
      ],
      quiz: [
        {
          id: 'q1',
          question: 'Gịnị mere ọgwụ ike ji dị ize ndụ karịsịa nye nwa akwụkwọ dị afọ iri na abụọ?',
          options: [
            'N’ihi na ụbụrụ nwa akwụkwọ ka na-eto ma na-amụ ihe',
            'N’ihi na ọ na-emetụta naanị ndị okenye',
            'N’ihi na ọ na-eme ka ihe omume ụlọ pụọ',
          ],
          correctIndex: 0,
          explanation: 'Ụbụrụ gị na-aga n’ihu na-eto ruo afọ iri abụọ, yabụ ichebe ya ugbu a na-echebe ọdịnihu gị.',
        },
        {
          id: 'q2',
          question: 'Olee mgbe ọ dị mma ịṅụ ọgwụ siri ike dị ka codeine ma ọ bụ tramadol?',
          options: [
            'Mgbe ọ bụla enyi nyere ya na mmemme',
            'Naanị mgbe dọkịta ruru eru dere ya ma nne na nna ma ọ bụ nọọsụ nye ya',
            'Mgbe ike gwụrụ gị mgbe ụlọ akwụkwọ gbasara',
          ],
          correctIndex: 1,
          explanation: 'Ọgwụ ụlọ ọgwụ dị mma naanị n’okpuru nlekọta dọkịta n’oke ziri ezi.',
        },
        {
          id: 'q3',
          question: 'Gịnị bụ nzọụkwụ kacha mma ma mmadụ manye gị ịnwale ọgwụ ike?',
          options: [
            'Nwaa ntakịrị ka ha ghara ịchị gị ọchị',
            'Debe ya na nzuzo ruo mgbe ebighị ebi',
            'Sị mba nke ọma, pụọ ebe ahụ, ma gwa nne na nna, onye nkuzi, ma ọ bụ onye ndụmọdụ',
          ],
          correctIndex: 2,
          explanation: 'Ịsị mba n’udo, ịpụ ebe ahụ, na ịgwa okenye ị tụkwasịrị obi na-echekwa gị.',
        },
      ],
    },
    aiSupport: {
      title: 'Nkwado AI Maka Ọgwụ Ike',
      subtitle: 'Jụọ ajụjụ ọ bụla banyere ọgwụ ike, nrụgide ndị enyi, ma ọ bụ ngwọta n’okwu dị mfe.',
      welcomeMessage:
        'Ndewo! Abụ m Onye Inyeaka AI nke ClearMind. Ị nwere ike ịjụ m ihe ọ bụla banyere otu ọgwụ ike si emetụta ụbụrụ na ahụ, otu esi asị mba, ma ọ bụ otu ngwọta si arụ ọrụ.',
      starterHeading: 'Nwaa ịjụ otu n’ime ajụjụ ndị a',
      starters: [
        'Gịnị mere ọgwụ ike ji dị ize ndụ nye ụbụrụ m?',
        'Olee otu m ga-esi sị mba mgbe ndị enyi manyere m?',
        'Gịnị ka iri ahụ (addiction) pụtara n’okwu dị mfe?',
        'Olee otu mmadụ ga-esi malite ngwọta site n’ọgwụ ike?',
      ],
      inputLabel: 'Dee ajụjụ gị',
      inputPlaceholder: 'Jụọ ajụjụ dị mfe banyere ọgwụ ma ọ bụ ịdị mma...',
      sendButton: 'Ziga',
      sendingLabel: 'Na-eche echiche...',
      clearButton: 'Mkparịta Ụka Ọhụrụ',
      safetyNotice: 'Onye inyeaka a na-enye mmụta ahụike. N’oge mberede, gwa okenye ị tụkwasịrị obi ma ọ bụ kpọọ ahịrị NDLEA n’efu: 0800 1020 3040.',
      emptyError: 'Biko dee ajụjụ gị tupu ị pịa Ziga.',
    },
    recovery: {
      title: 'Ndekọ Ngwọta',
      subtitle: 'Ụbọchị ọ bụla na-enweghị ọgwụ ike bụ mmeri. Dekọọ otu ugboro kwa ụbọchị ma hụ ka ọganihu gị na-eto.',
      streakLabel: 'Ụbọchị Mmeri',
      daysLabel: 'Ụbọchị',
      milestoneHeading: 'Ebumnuche Ngwọta Ọzọ',
      milestoneGoalPrefix: 'Ebumnuche',
      daysLeftLabel: 'ụbọchị fọdụrụ iji ruo ebumnuche a',
      milestoneReached: 'I ruru ebumnuche ahụ! Gaa n’ihu sie ike.',
      checkInTitle: 'Ndekọ nke Taa',
      alreadyCheckedInNotice: 'I dekolara nke taa! Ị ka nwere ike imelite mmetụta ma ọ bụ ndetu gị n’okpuru.',
      moodLabel: 'Kedu ka obi dị gị taa?',
      moods: {
        strong: {
          label: 'Siri Ike',
          encouragement: 'Ọrụ magburu onwe ya! Ike gị taa na-ewu ọdịnihu mara mma.',
        },
        hopeful: {
          label: 'Nwere Olileanya',
          encouragement: 'Olileanya bụ ìhè siri ike. Nọgide na-eme otu nzọụkwụ ọma kwa ụbọchị!',
        },
        struggling: {
          label: 'Na-alụ Ọgụ',
          encouragement: 'Ụbọchị siri ike na-abịa, mana ndekọ gị na-egosi obi ike. Gwa onye ị tụkwasịrị obi okwu taa.',
        },
        'need-support': {
          label: 'Achọrọ M Nkwado',
          encouragement: 'Ị nọghị naanị gị. Ịkpọtụrụ nne na nna, onye ndụmọdụ ụlọ akwụkwọ, ma ọ bụ NDLEA (0800 1020 3040) bụ nzọụkwụ amamihe.',
        },
      },
      habitsLabel: 'Omume ahụike m mere taa',
      habits: [
        { id: 'adult', label: 'Agwara m okenye a tụkwasịrị obi ma ọ bụ ezigbo enyi okwu' },
        { id: 'water', label: 'Aṅụrụ m mmiri dị ọcha, rie nri ọma, ma zuru ike' },
        { id: 'avoid', label: 'Ezere m ebe dị ize ndụ na nrụgide ndị enyi' },
        { id: 'school', label: 'Etinyere m uche n’ọrụ ụlọ akwụkwọ, egwuregwu, ma ọ bụ nkà ọma' },
      ],
      noteLabel: 'Otu ihe ọma m mere taa (nhọrọ)',
      notePlaceholder: 'Ọmụmaatụ: Amụrụ m ihe ya na enyi m ma sị mba n’ebe dị ize ndụ.',
      saveButton: 'Chekwaa Ndekọ Taa',
      updateButton: 'Melite Ndekọ Taa',
      savedFeedbackTitle: 'E Chekwara Ndekọ',
      validationMood: 'Biko họrọ ka obi dị gị taa.',
      validationHabitOrNote: 'Biko họrọ opekata mpe otu omume ahụike ma ọ bụ dee obere ndetu.',
      historyTitle: 'Ndekọ Nso Nso A',
      historyEmpty: 'Ọ dịghị ndekọ e dekọrọ. Mechaa ndekọ mbụ gị iji malite ọnụọgụgụ gị.',
      habitSingular: 'omume',
      habitPlural: 'omume',
      resetButton: 'Malite Ọhụrụ',
      resetConfirmText: 'Pịa ọzọ iji kwado mmalite ọhụrụ',
      helpTitle: 'Ị Chọrọ Enyemaka N’ezie?',
      helpBody: 'Ọ bụrụ na gị ma ọ bụ onye ị maara na-alụ ọgụ ịkwụsị ọgwụ ike, ịgwa okenye a tụkwasịrị obi na-enyere aka nke ukwuu.',
      helplineLabel: 'Ahịrị Enyemaka NDLEA (N’efu 24/7)',
      helplineNumber: '0800 1020 3040',
      helplineNote: 'Ndụmọdụ n’efu na nzuzo n’ofe Naịjirịa.',
    },
    audioHub: {
      title: 'Asụsụ, Vidiyo na Ihe Mmụta Olu',
      subtitle: 'Mụta n’asụsụ Naịjirịa ị kacha aghọta. Gbanwee asụsụ mgbe ọ bụla ma gee ntị n’akụkọ ndị nwere foto.',
      languageSectionTitle: 'Họrọ Asụsụ Mmụta Gị',
      languageSectionSubtitle: 'Ịgbanwe asụsụ na-emelite ihuenyo niile na olu ọgụgụ niile na ClearMind.',
      activeLanguageLabel: 'Asụsụ Ugbu A',
      switchButton: 'Jiri Asụsụ A',
      hearWelcomeButton: 'Gee Nnọọ',
      lessonsSectionTitle: 'Ihe Mmụta Akụkọ Nwere Foto na Olu',
      lessonsSectionSubtitle: 'Họrọ akụkọ n’okpuru, gaa n’ihu na slide, ma pịa Gee ntị maka nkọwa olu.',
      slideLabel: 'Ibe',
      previousSlide: 'Azụ',
      nextSlide: 'Ọzọ',
      playSlideAudio: 'Gee ntị n’Ibe A',
      playFullLesson: 'Gee ntị n’Ihe Mmụta Niile',
      keyTakeawayLabel: 'Isi Ihe Mmụta',
      lessons: [
        {
          id: 'brain-power',
          title: 'Otu Ọgwụ Ike Si Emetụta Ụbụrụ Nwa Akụkwọ',
          durationLabel: 'Ibe 3 · Nkeji 2',
          imagePath: ASSET_IMAGES.brain,
          imageAlt: 'Foto ụbụrụ dị mma na-egbuke egbuke n’acha anụnụ anụnụ na akwụkwọ ndụ',
          slides: [
            {
              title: '1. Ụbụrụ Gị Bụ Ike Gị',
              caption:
                'N’afọ iri na abụọ, ụbụrụ gị na-eto ngwa ngwa dị ka obere osisi. Ọ na-enyere gị aka icheta ihe ọmụmụ, kporie ndụ n’egwuregwu, ma chee nrọ ọdịnihu gị.',
              keyTakeaway: 'Ụbụrụ na-eto eto chọrọ ikuku ọma, ụra zuru oke, nri ọma, na mmụta.',
            },
            {
              title: '2. Otu Ọgwụ Ike Si Agbagwoju Ụbụrụ Anya',
              caption:
                'Ọgwụ ike na-eju ụbụrụ na kemịkalụ ọjọọ. Ha na-agbagwoju echiche anya, belata ncheta, ma duhie ụbụrụ ka ọ na-achọ ọgwụ ahụ ugboro ugboro.',
              keyTakeaway: 'Iri ahụ na-eme mgbe ụbụrụ malitere ịchọ ihe na-emerụ ya ahụ.',
            },
            {
              title: '3. Ichekwa Ọdịnihu Gị Mara Mma',
              caption:
                'Ịsị mba na-eme ka uche gị dị nkọ ma nwere onwe ya. Mgbe ị nọghị n’ọgwụ ike, ọ bụ gị na-achịkwa nhọrọ na ebumnuche gị.',
              keyTakeaway: 'Ịhọrọ ahụike na-eme ka ị bụrụ onye nwe akụkọ ndụ gị.',
            },
          ],
        },
        {
          id: 'peer-pressure',
          title: 'Ịsị Mba N’ihu Nrụgide Ndị Enyi',
          durationLabel: 'Ibe 3 · Nkeji 2',
          imagePath: ASSET_IMAGES.peerPressure,
          imageAlt: 'Nwa akwụkwọ nwere obi ike na-ahọrọ ezigbo ndị enyi na-agụ akwụkwọ na egwu bọọlụ',
          slides: [
            {
              title: '1. Ịchọpụta Nrụgide Ndị Enyi N’oge',
              caption:
                'Mgbe ụfọdụ ndị mmadụ na-asị "onye ọ bụla na-anwa ya." Cheta: ezigbo ndị enyi na-eche banyere nchekwa gị ma agaghị akwali gị n’ize ndụ.',
              keyTakeaway: 'Ezigbo ọbụbụenyi anaghị etinye ahụike gị n’ize ndụ.',
            },
            {
              title: '2. Ụzọ Atọ Dị Mfe Iji Sị Mba',
              caption:
                'Sị n’udo: "Mba daalụ, enwere m egwuregwu echi," "Anaghị m eji ọgwụ ike," ma ọ bụ gbanwee isiokwu ma pụọ gaa ebe dị nchebe.',
              keyTakeaway: 'Ịsị mba siri ike na ịpụ ebe ahụ na-egosi ezi obi ike.',
            },
            {
              title: '3. Wuo Ndị Enyi Ọma',
              caption:
                'Nọnyere ụmụ klas gị hụrụ egwuregwu, ịgụ akwụkwọ, ma ọ bụ egwu n’anya. Gwa nne na nna ma ọ bụ onye nkuzi ozugbo ma onye ọ bụla na-enye gị nsogbu.',
              keyTakeaway: 'Ezigbo ndị enyi na ndị okenye a tụkwasịrị obi na-eme ka nchekwa dị mfe.',
            },
          ],
        },
        {
          id: 'healing-hope',
          title: 'Ngwọta, Olileanya na Mbido Ọhụrụ',
          durationLabel: 'Ibe 3 · Nkeji 2',
          imagePath: ASSET_IMAGES.recoveryHope,
          imageAlt: 'Okwute nzọụkwụ na-agafe iyi dị jụụ ruo osisi akwụkwọ ndụ na-eto nke ọma',
          slides: [
            {
              title: '1. Mbido Ọhụrụ Ọ Bụla Na-amalite N’otu Nzọụkwụ',
              caption:
                'Ọ bụrụ na mmadụ anwalelarị ọgwụ ike, olileanya ka dị. Ngwọta na-amalite site na mkpebi ịrịọ maka enyemaka taa.',
              keyTakeaway: 'N’agbanyeghị mmejọ ụnyaahụ, taa nwere ike ịbụ ụbọchị mbụ nke ngwọta.',
            },
            {
              title: '2. Ịchọ Nkwado',
              caption:
                'Ndị dọkịta, ndị ndụmọdụ ụlọ akwụkwọ, nne na nna, na ahịrị NDLEA (0800 1020 3040) na-enyere ndị mmadụ aka ịgbake n’enweghị ihere.',
              keyTakeaway: 'Ịrịọ okenye a tụkwasịrị obi enyemaka bụ ihe àmà nke ike.',
            },
            {
              title: '3. Ịṅụrị Ọṅụ Maka Ọganihu Kwa Ụbọchị',
              caption:
                'Iji Ndekọ Ngwọta kwa ụbọchị na-enyere aka iji omume ọma dochie omume ọjọọ, dị ka ịṅụ mmiri na izu ike nke ọma.',
              keyTakeaway: 'Otu ụbọchị ahụike mgbe ọ bụla na-ewu ndụ ọhụrụ.',
            },
          ],
        },
      ],
    },
    footer: {
      note: 'ClearMind — Ọrụ Ụlọ Akwụkwọ Maka Ahụike na Mgbochi Ọgwụ Ike',
      colorsLegend: 'Teal maka ngwọta · Blue maka ntụkwasị obi · Ọcha maka mbido ọhụrụ',
    },
  },
};
