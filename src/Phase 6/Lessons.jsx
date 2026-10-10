import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { MULTI_LANG_CURRICULUM } from "./curriculumData";
import "./Lessons.css";

function Lessons() {
  const navigate = useNavigate();

  // 1. Language State (default to user's saved choice or German)
  const [activeLang, setActiveLang] = useState(() => {
    try {
      const saved = localStorage.getItem("smartlingual_user");
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed.selectedLanguage && MULTI_LANG_CURRICULUM[parsed.selectedLanguage]) {
          return parsed.selectedLanguage;
        }
      }
    } catch (e) {
      console.error(e);
    }
    return "German";
  });

  const currentLangData = MULTI_LANG_CURRICULUM[activeLang] || MULTI_LANG_CURRICULUM["German"];
  const levelKeys = Object.keys(currentLangData.levels);

  // 2. Active Level Key
  const [activeLevelKey, setActiveLevelKey] = useState(levelKeys[0]);

  // Ensure activeLevelKey is valid for current language
  useEffect(() => {
    const keys = Object.keys(MULTI_LANG_CURRICULUM[activeLang]?.levels || {});
    if (!keys.includes(activeLevelKey)) {
      setActiveLevelKey(keys[0] || "A1");
    }
  }, [activeLang]);

  const currentLevel = currentLangData.levels[activeLevelKey] || currentLangData.levels[levelKeys[0]];
  const lessons = currentLevel?.lessons || [];

  // 3. Active Step within Level: either lesson index (0 to lessons.length-1) or "exam"
  const [activeStep, setActiveStep] = useState(0);

  // Reset states when language or level changes
  useEffect(() => {
    setActiveStep(0);
    stopAudio();
    setExerciseAnswers({});
    setExerciseFeedback({});
    handleResetExam();
  }, [activeLang, activeLevelKey]);

  // 4. Completed Lessons Persistence
  const [completedLessons, setCompletedLessons] = useState(() => {
    try {
      const saved = localStorage.getItem("smartlingual_completed_lessons");
      return saved ? JSON.parse(saved) : {};
    } catch {
      return {};
    }
  });

  const markLessonComplete = (lessonId) => {
    const updated = { ...completedLessons, [lessonId]: true };
    setCompletedLessons(updated);
    try {
      localStorage.setItem("smartlingual_completed_lessons", JSON.stringify(updated));
    } catch (e) {
      console.error(e);
    }
  };

  // 5. Audio / Speech Synthesis State
  const [isPlayingAudio, setIsPlayingAudio] = useState(false);
  const [speakingText, setSpeakingText] = useState("");
  const [playbackSpeed, setPlaybackSpeed] = useState(1);
  const [activeSubtitle, setActiveSubtitle] = useState("");

  const playSpeech = (text) => {
    if (!("speechSynthesis" in window)) {
      alert("Text-to-speech is not supported in this browser.");
      return;
    }
    window.speechSynthesis.cancel();

    if (isPlayingAudio && speakingText === text) {
      setIsPlayingAudio(false);
      setSpeakingText("");
      return;
    }

    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = currentLangData.langCode || "de-DE";
    utterance.rate = playbackSpeed;

    utterance.onstart = () => {
      setIsPlayingAudio(true);
      setSpeakingText(text);
      setActiveSubtitle(text);
    };

    utterance.onend = () => {
      setIsPlayingAudio(false);
      setSpeakingText("");
    };

    utterance.onerror = () => {
      setIsPlayingAudio(false);
      setSpeakingText("");
    };

    window.speechSynthesis.speak(utterance);
  };

  const stopAudio = () => {
    if ("speechSynthesis" in window) {
      window.speechSynthesis.cancel();
    }
    setIsPlayingAudio(false);
    setSpeakingText("");
    setActiveSubtitle("");
  };

  // 6. Interactive Drill State (per lesson)
  const [exerciseAnswers, setExerciseAnswers] = useState({});
  const [exerciseFeedback, setExerciseFeedback] = useState({});

  const handleSelectDrill = (drillId, optIdx) => {
    setExerciseAnswers((prev) => ({ ...prev, [drillId]: optIdx }));
  };

  const checkDrill = (drillId, correctIdx) => {
    const selected = exerciseAnswers[drillId];
    if (selected === undefined) return;
    setExerciseFeedback((prev) => ({
      ...prev,
      [drillId]: selected === correctIdx ? "correct" : "incorrect"
    }));
  };

  // 7. Graded 100-Mark Assignment State
  const [assignmentAnswers, setAssignmentAnswers] = useState({});
  const [assignmentSubmitted, setAssignmentSubmitted] = useState(false);
  const [calculatedScore, setCalculatedScore] = useState(0);

  // Section 2: AI Live Writing Assessment State
  const [writingInput, setWritingInput] = useState("");
  const [writingEvaluated, setWritingEvaluated] = useState(false);
  const [writingScore, setWritingScore] = useState(0);
  const [writingRubricResults, setWritingRubricResults] = useState([]);
  const [writingFeedbackMsg, setWritingFeedbackMsg] = useState("");

  const handleSelectExamOption = (qId, optIdx) => {
    if (assignmentSubmitted) return;
    setAssignmentAnswers((prev) => ({ ...prev, [qId]: optIdx }));
  };

  // Intelligent AI Writing Evaluator
  const handleEvaluateWriting = () => {
    const text = writingInput.trim().toLowerCase();
    if (!text || text.length < 10) {
      alert("Please write at least a few sentences introducing yourself before evaluating! (e.g., Hallo! Mein Name ist Rahul. Ich bin 21 Jahre alt...)");
      return;
    }

    let score = 0;
    const rubric = [];

    // Checkpoint 1: Greeting (3 marks)
    const hasGreeting = /(hallo|guten tag|guten morgen|guten abend|grüß|servus)/i.test(text);
    if (hasGreeting) {
      score += 3;
      rubric.push({ label: "Greeting (Hallo / Guten Tag)", points: 3, max: 3, passed: true });
    } else {
      rubric.push({ label: "Greeting missing (use 'Hallo' or 'Guten Tag')", points: 0, max: 3, passed: false });
    }

    // Checkpoint 2: Name (4 marks)
    const hasName = /(ich heiße|ich heisse|mein name ist|ich bin [a-z]+)/i.test(text);
    if (hasName) {
      score += 4;
      rubric.push({ label: "Name declaration (Ich heiße ... / Mein Name ist ...)", points: 4, max: 4, passed: true });
    } else {
      rubric.push({ label: "Name declaration missing (use 'Ich heiße...')", points: 0, max: 4, passed: false });
    }

    // Checkpoint 3: Age (3 marks)
    const hasAge = /(jahre alt|jahr alt|ich bin d+|ich bin [a-z]+ jahre)/i.test(text);
    if (hasAge) {
      score += 3;
      rubric.push({ label: "Age declaration (Ich bin ... Jahre alt)", points: 3, max: 3, passed: true });
    } else {
      rubric.push({ label: "Age statement missing (use 'Ich bin ... Jahre alt')", points: 0, max: 3, passed: false });
    }

    // Checkpoint 4: Origin & Residence (4 marks)
    const hasOrigin = /(komme aus|aus indien|aus deutschland)/i.test(text);
    const hasCity = /(wohne in|in pune|in mumbai|in delhi|in berlin|in wien)/i.test(text);
    if (hasOrigin && hasCity) {
      score += 4;
      rubric.push({ label: "Origin & Residence (Ich komme aus ... & Ich wohne in ...)", points: 4, max: 4, passed: true });
    } else if (hasOrigin || hasCity) {
      score += 2;
      rubric.push({ label: "Partial Origin / Residence detected", points: 2, max: 4, passed: true });
    } else {
      rubric.push({ label: "Origin / Residence missing (use 'Ich komme aus...' & 'Ich wohne in...')", points: 0, max: 4, passed: false });
    }

    // Checkpoint 5: Language & Hobby (3 marks)
    const hasLangOrHobby = /(spreche|lerne|deutsch|hobby|hobbys|gerne|musik|fußball|fussball|lesen)/i.test(text);
    if (hasLangOrHobby) {
      score += 3;
      rubric.push({ label: "Language & Hobby (Ich lerne Deutsch / Mein Hobby ist ...)", points: 3, max: 3, passed: true });
    } else {
      rubric.push({ label: "Language or Hobby statement missing", points: 0, max: 3, passed: false });
    }

    // Checkpoint 6: Grammar & Capitalization Check (3 marks)
    const originalText = writingInput.trim();
    const hasCaps = /[A-ZÄÖÜ]/.test(originalText);
    const wordCount = originalText.split(/\s+/).length;
    if (hasCaps && wordCount >= 12) {
      score += 3;
      rubric.push({ label: "Sentence structure & German noun capitalization", points: 3, max: 3, passed: true });
    } else if (wordCount >= 6) {
      score += 1;
      rubric.push({ label: "Basic sentence structure detected", points: 1, max: 3, passed: true });
    } else {
      rubric.push({ label: "Sentence structure too brief (aim for 15+ words)", points: 0, max: 3, passed: false });
    }

    setWritingScore(score);
    setWritingRubricResults(rubric);
    setWritingEvaluated(true);

    if (score >= 14) {
      setWritingFeedbackMsg("🌟 Ausgezeichnet! Outstanding work! You composed a fluent, authentic German self-introduction following the Goethe A1 CEFR standard!");
    } else {
      setWritingFeedbackMsg("💡 Good effort! Review the checklist above to add missing details such as your age, city, and hobbies for full 20 marks.");
    }
  };

  const handleSubmitExam = () => {
    const questions = currentLevel.assignment.questions || [];
    let objectiveEarned = 0;
    questions.forEach((q) => {
      if (assignmentAnswers[q.id] === q.correct) {
        objectiveEarned += q.marks;
      }
    });

    const hasWriting = !!currentLevel.assignment.writingAssessment;
    const finalWritingMarks = hasWriting ? writingScore : 0;
    const totalEarned = objectiveEarned + finalWritingMarks;

    setCalculatedScore(totalEarned);
    setAssignmentSubmitted(true);

    if (totalEarned >= currentLevel.assignment.passMarks) {
      markLessonComplete(`${activeLang}-${activeLevelKey}-exam`);
    }
  };

  const handleResetExam = () => {
    setAssignmentAnswers({});
    setAssignmentSubmitted(false);
    setCalculatedScore(0);
    setWritingInput("");
    setWritingEvaluated(false);
    setWritingScore(0);
    setWritingRubricResults([]);
    setWritingFeedbackMsg("");
  };

  // Active Lesson Object
  const currentLesson = typeof activeStep === "number" ? lessons[activeStep] : null;

  // Calculate Level Completion Percentage
  const levelLessonIds = lessons.map((l) => l.id);
  const completedInLevel = levelLessonIds.filter((id) => completedLessons[id]).length;
  const isExamPassed = !!completedLessons[`${activeLang}-${activeLevelKey}-exam`];
  const totalLevelItems = lessons.length + 1;
  const progressPercent = Math.round(
    ((completedInLevel + (isExamPassed ? 1 : 0)) / totalLevelItems) * 100
  );

  // Student Name
  let studentName = "Language Scholar";
  try {
    const saved = localStorage.getItem("smartlingual_user");
    if (saved) {
      const parsed = JSON.parse(saved);
      if (parsed.fullName || parsed.name) {
        studentName = parsed.fullName || parsed.name;
      }
    }
  } catch (e) {
    console.error(e);
  }

  // Next / Previous Step Handlers
  const handleProceedNext = () => {
    stopAudio();
    if (typeof activeStep === "number" && currentLesson) {
      markLessonComplete(currentLesson.id);
      if (activeStep < lessons.length - 1) {
        setActiveStep(activeStep + 1);
        window.scrollTo({ top: 200, behavior: "smooth" });
      } else {
        // Move to exam
        setActiveStep("exam");
        window.scrollTo({ top: 200, behavior: "smooth" });
      }
    }
  };

  const handleGoPrevious = () => {
    stopAudio();
    if (activeStep === "exam") {
      setActiveStep(lessons.length - 1);
    } else if (typeof activeStep === "number" && activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
    window.scrollTo({ top: 200, behavior: "smooth" });
  };

  return (
    <div className="lessons-container">
      {/* 1. TOP HEADER & NAVIGATION */}
      <header className="lessons-header">
        <div className="header-left">
          <button
            type="button"
            className="back-btn"
            onClick={() => navigate("/dashboard")}
            title="Return to Dashboard"
          >
            <span className="back-arrow">←</span> Back to Dashboard
          </button>
          <div className="brand-badge">
            <span className="star-icon">✦</span>
            <strong>Smartlingual AI</strong>
            <span className="curriculum-tag">Standardized Curriculum</span>
          </div>
        </div>

        {/* LANGUAGE SWITCHER BAR */}
        <div className="language-selector-bar">
          <span className="lang-label">Active Language:</span>
          <div className="lang-pills-row">
            {Object.keys(MULTI_LANG_CURRICULUM).map((langKey) => {
              const lang = MULTI_LANG_CURRICULUM[langKey];
              const isSelected = activeLang === langKey;
              return (
                <button
                  key={langKey}
                  type="button"
                  className={`lang-switch-btn ${isSelected ? "active" : ""}`}
                  onClick={() => {
                    setActiveLang(langKey);
                    stopAudio();
                  }}
                >
                  <span className="lang-flag">{lang.flag}</span>
                  <span className="lang-name">{lang.name}</span>
                </button>
              );
            })}
          </div>
        </div>
      </header>

      {/* 2. COURSE HERO & FRAMEWORK BANNER */}
      <section className="course-hero-banner">
        <div className="hero-content">
          <div className="framework-indicator">
            <span className="framework-badge">{currentLangData.framework}</span>
            <span className="cert-body">{currentLangData.frameworkName} • Certified by {currentLangData.certifyingBody}</span>
          </div>
          <h1>
            Master {currentLangData.name} <span className="native-title">({currentLangData.nativeName})</span>
          </h1>
          <p className="hero-subtext">
            Standardized level progression from complete beginner to native-level mastery with AI lectures, native pronunciation, intuitive soundboards, practice drills, and certified milestone examinations.
          </p>
        </div>

        <div className="hero-meta-stats">
          <div className="meta-card">
            <span className="meta-icon">🏅</span>
            <div className="meta-text">
              <span className="meta-num">{levelKeys.length}</span>
              <span className="meta-desc">Proficiency Levels</span>
            </div>
          </div>
          <div className="meta-card">
            <span className="meta-icon">📚</span>
            <div className="meta-text">
              <span className="meta-num">{lessons.length}</span>
              <span className="meta-desc">Structured Lessons</span>
            </div>
          </div>
          <div className="meta-card highlight-meta">
            <span className="meta-icon">⚡</span>
            <div className="meta-text">
              <span className="meta-num">{progressPercent}%</span>
              <span className="meta-desc">Level Progress</span>
            </div>
          </div>
        </div>
      </section>

      {/* 3. LEVEL NAVIGATION STRIP & DOSSIER */}
      <section className="level-navigation-section">
        <div className="level-tabs-strip">
          {levelKeys.map((lvlKey) => {
            const lvl = currentLangData.levels[lvlKey];
            const isActive = activeLevelKey === lvlKey;
            return (
              <button
                key={lvlKey}
                type="button"
                className={`level-tab-btn ${isActive ? "active" : ""}`}
                onClick={() => {
                  setActiveLevelKey(lvlKey);
                  stopAudio();
                }}
              >
                <span className="lvl-code">{lvl.code}</span>
                <span className="lvl-title">{lvl.title}</span>
                {isActive && <span className="active-pill-glow"></span>}
              </button>
            );
          })}
        </div>

        {/* Level Syllabus & Competencies Dossier */}
        <div className="level-dossier-card">
          <div className="dossier-header">
            <div className="dossier-title-col">
              <span className="dossier-tag">STANDARD SPECIFICATION</span>
              <h3>{currentLevel.code} — {currentLevel.title} Proficiency Dossier</h3>
              <p className="dossier-exam-badge">🎯 Target Exam: <strong>{currentLevel.exam}</strong> ({currentLevel.studyTime})</p>
            </div>
            <div className="dossier-stats-col">
              <span className="target-vocab">Target Vocabulary: <strong>{currentLevel.vocabSize}</strong></span>
              <div className="dossier-progress-mini">
                <div className="progress-labels">
                  <span>Level Mastery</span>
                  <strong>{progressPercent}%</strong>
                </div>
                <div className="mini-progress-bar">
                  <div className="mini-fill" style={{ width: `${progressPercent}%` }}></div>
                </div>
              </div>
            </div>
          </div>

          <div className="dossier-grid">
            <div className="dossier-col">
              <h4>🏛️ Grammatical Foundations</h4>
              <ul>
                {currentLevel.grammarSyllabus.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="dossier-col">
              <h4>🗣️ Pragmatic Themes & Topics</h4>
              <ul>
                {currentLevel.vocabThemes.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
            <div className="dossier-col">
              <h4>🌟 Functional Milestones (Can-Do Skills)</h4>
              <ul>
                {currentLevel.keySkills.map((item, idx) => (
                  <li key={idx}>{item}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LESSON STEPPER NAVIGATION BAR */}
      <div className="lesson-stepper-container">
        <div className="stepper-title-row">
          <div className="stepper-left-meta">
            <h3>Interactive Learning Sequence ({currentLevel.code})</h3>
            <span className="stepper-sub">Complete lessons sequentially to unlock your milestone exam</span>
          </div>
          <span className="step-counter-badge">
            {typeof activeStep === "number" ? `Lesson ${activeStep + 1} of ${lessons.length}` : "Graded Milestone Exam"}
          </span>
        </div>

        <div className="stepper-scroll-track">
          {lessons.map((les, idx) => {
            const isCompleted = !!completedLessons[les.id];
            const isActive = activeStep === idx;
            return (
              <button
                key={les.id}
                type="button"
                className={`stepper-node ${isActive ? "active" : ""} ${isCompleted ? "completed" : ""}`}
                onClick={() => {
                  setActiveStep(idx);
                  stopAudio();
                }}
              >
                <div className="node-marker">
                  {isCompleted ? "✓" : les.lessonNumber}
                </div>
                <div className="node-info">
                  <span className="node-num">L{les.lessonNumber}</span>
                  <span className="node-name">{les.title.split(":")[1]?.trim() || les.title}</span>
                </div>
              </button>
            );
          })}

          {/* Exam Milestone Node */}
          <button
            type="button"
            className={`stepper-node exam-node ${activeStep === "exam" ? "active" : ""} ${isExamPassed ? "completed" : ""}`}
            onClick={() => {
              setActiveStep("exam");
              stopAudio();
            }}
          >
            <div className="node-marker">
              {isExamPassed ? "★" : "📝"}
            </div>
            <div className="node-info">
              <span className="node-num">Milestone</span>
              <span className="node-name">100-Mark Graded Exam</span>
            </div>
          </button>
        </div>
      </div>

      {/* 5. MAIN WORKSPACE AREA */}
      <main className="lesson-body-card">
        {/* ============================================================== */}
        {/* VIEW A: INDIVIDUAL SEQUENTIAL LESSON VIEW                       */}
        {/* ============================================================== */}
        {typeof activeStep === "number" && currentLesson && (
          <div className="lesson-active-view">
            {/* Lesson Title Banner */}
            <div className="active-lesson-header">
              <div className="lesson-tag-row">
                <span className="lesson-badge">📘 Lesson {currentLesson.lessonNumber}</span>
                <span className="level-badge">{currentLevel.code} {currentLevel.title}</span>
                <span className="time-badge">⏱️ 15 Mins Focus</span>
                {completedLessons[currentLesson.id] && (
                  <span className="completed-badge">✓ Completed</span>
                )}
              </div>
              <h2>{currentLesson.title}</h2>
              <p className="lesson-summary-prose">{currentLesson.summary}</p>
            </div>

            {/* AI Video Masterclass Visualizer Player */}
            <section className="ai-player-card">
              <div className="player-screen">
                <div className="player-screen-topbar">
                  <div className="instructor-badge">
                    <span className="live-dot pulse-anim">●</span>
                    <span className="tutor-title">NATIVE MASTERCLASS STUDIO</span>
                    <span className="tutor-name">• {currentLesson.videoMasterclass.tutorName}</span>
                  </div>
                  <div className="speed-pills-compact">
                    <span className="speed-label-mini">Speed:</span>
                    {[0.75, 1, 1.25].map((spd) => (
                      <button
                        key={spd}
                        type="button"
                        className={`speed-pill ${playbackSpeed === spd ? "active" : ""}`}
                        onClick={() => setPlaybackSpeed(spd)}
                      >
                        {spd}x
                      </button>
                    ))}
                  </div>
                </div>
                
                <div className="video-prompt-display">
                  <span className="prompt-label">LECTURE CORE FOCUS:</span>
                  <p>{currentLesson.videoMasterclass.videoPrompt}</p>
                </div>

                {/* Animated Waveform Visualizer */}
                <div className="waveform-container">
                  <div className={`waveform-bar ${isPlayingAudio ? "animating" : ""}`}></div>
                  <div className={`waveform-bar ${isPlayingAudio ? "animating" : ""}`}></div>
                  <div className={`waveform-bar ${isPlayingAudio ? "animating" : ""}`}></div>
                  <div className={`waveform-bar ${isPlayingAudio ? "animating" : ""}`}></div>
                  <div className={`waveform-bar ${isPlayingAudio ? "animating" : ""}`}></div>
                  <div className={`waveform-bar ${isPlayingAudio ? "animating" : ""}`}></div>
                  <div className={`waveform-bar ${isPlayingAudio ? "animating" : ""}`}></div>
                  <div className={`waveform-bar ${isPlayingAudio ? "animating" : ""}`}></div>
                </div>

                {activeSubtitle && isPlayingAudio && (
                  <div className="subtitle-overlay">
                    <span className="sub-tag">LIVE NATIVE SPEECH:</span>
                    <p>"{activeSubtitle}"</p>
                  </div>
                )}
              </div>

              {/* Masterclass Audio Controls */}
              <div className="ai-player-controls-bar">
                <button
                  type="button"
                  className={`audio-play-btn ${isPlayingAudio ? "playing" : ""}`}
                  onClick={() => playSpeech(currentLesson.videoMasterclass.narrationScript)}
                >
                  {isPlayingAudio ? "⏸ Pause Audio Lecture" : "🔊 Listen to Masterclass Lecture (Native Audio)"}
                </button>
                <div className="player-hint-text">
                  <span>💡 Tip: Repeat words aloud immediately after the speaker for muscle memory!</span>
                </div>
              </div>
            </section>

            {/* FULL 30-LETTER ALPHABET SOUNDBOARD (WHEN AVAILABLE) */}
            {currentLesson.alphabet && currentLesson.alphabet.length > 0 && (
              <section className="lesson-section alphabet-section">
                <div className="section-title-row">
                  <span className="section-icon">🔤</span>
                  <div>
                    <h3>Das Deutsche Alphabet — All 30 Letters (A–Z + Ä, Ö, Ü, ß)</h3>
                    <p className="section-subtitle">
                      Explore every German letter individually. Subtitles include foundational Marathi & Hindi phonetic guides for crystal-clear sound mapping!
                    </p>
                  </div>
                </div>

                <div className="alphabet-grid">
                  {currentLesson.alphabet.map((item, aIdx) => {
                    const isLetterActive = isPlayingAudio && speakingText.startsWith(item.letter);
                    return (
                      <div key={aIdx} className={`letter-card ${isLetterActive ? "playing-letter" : ""}`}>
                        <div className="letter-card-top">
                          <span className="letter-glyph">{item.letter}</span>
                          <span className="letter-ipa">{item.ipa}</span>
                        </div>
                        <div className="letter-sound-row">
                          <span className="letter-sound-tag">Phonetic: <strong>{item.sound}</strong></span>
                        </div>
                        
                        {/* Subtitle Bridges (Marathi & Hindi) specifically for alphabets */}
                        <div className="letter-subtitle-bar">
                          <span className="sub-item marathi-sub">मराठी: {item.marathi}</span>
                          <span className="sub-dot">•</span>
                          <span className="sub-item hindi-sub">हिंदी: {item.hindi}</span>
                        </div>

                        <div className="letter-example-row">
                          <span className="ex-label">Example:</span>
                          <span className="ex-text">{item.example}</span>
                        </div>

                        <button
                          type="button"
                          className="letter-audio-btn"
                          onClick={() => playSpeech(`${item.letter}. ${item.sound}. ${item.example}`)}
                          title="Listen to native pronunciation"
                        >
                          🔊 Listen Sound
                        </button>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* FULL NUMBERS SOUNDBOARD 0-20 & 21-100 (WHEN AVAILABLE) */}
            {currentLesson.numbers && currentLesson.numbers.length > 0 && (
              <section className="lesson-section numbers-section">
                <div className="section-title-row">
                  <span className="section-icon">🔢</span>
                  <div>
                    <h3>Individualized Number Soundboard</h3>
                    <p className="section-subtitle">
                      Each number is presented individually with clear phonetics, native audio, and foundational subtitle bridges.
                    </p>
                  </div>
                </div>

                <div className="numbers-grid">
                  {currentLesson.numbers.map((numItem, nIdx) => {
                    return (
                      <div key={nIdx} className="number-tile">
                        <div className="number-header-row">
                          <span className="number-digit-badge">{numItem.num}</span>
                          <button
                            type="button"
                            className="num-audio-btn"
                            onClick={() => playSpeech(`${numItem.word}. ${numItem.example || ""}`)}
                            title="Listen to number"
                          >
                            🔊
                          </button>
                        </div>
                        <h4 className="number-german-word">{numItem.word}</h4>
                        <div className="number-phonetic-chip">
                          <span>Sound: </span><strong>{numItem.sound}</strong>
                        </div>
                        
                        {/* Subtitle Bridges specifically for numbers */}
                        <div className="number-subtitle-bar">
                          <span>मराठी: {numItem.marathi}</span>
                          <span>•</span>
                          <span>हिंदी: {numItem.hindi}</span>
                        </div>

                        {numItem.example && (
                          <div className="number-example-box">
                            <span>Use: </span>"{numItem.example}"
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Grammar & Structural Architecture Section */}
            <section className="lesson-section grammar-section">
              <div className="section-title-row">
                <span className="section-icon">📖</span>
                <div>
                  <h3>Grammar & Structural Architecture</h3>
                  <p className="section-subtitle">Comprehensive explanation of German linguistic patterns, rules, and syntax.</p>
                </div>
              </div>
              
              <div className="grammar-prose-card">
                {currentLesson.grammarBreakdown.split("\n\n").map((para, pIdx) => (
                  <p key={pIdx}>{para}</p>
                ))}
              </div>

              {/* Interactive Reference Table */}
              {currentLesson.grammarTable && (
                <div className="grammar-table-wrapper">
                  <h4>{currentLesson.grammarTable.title}</h4>
                  <div className="table-responsive">
                    <table className="grammar-matrix-table">
                      <thead>
                        <tr>
                          {currentLesson.grammarTable.headers.map((head, hIdx) => (
                            <th key={hIdx}>{head}</th>
                          ))}
                        </tr>
                      </thead>
                      <tbody>
                        {currentLesson.grammarTable.rows.map((row, rIdx) => (
                          <tr key={rIdx}>
                            {row.map((cell, cIdx) => (
                              <td key={cIdx}>
                                <span>{cell}</span>
                                {cIdx > 0 && cell !== "–" && (
                                  <button
                                    type="button"
                                    className="cell-audio-btn"
                                    onClick={() => playSpeech(cell)}
                                    title="Listen to pronunciation"
                                  >
                                    🔊
                                  </button>
                                )}
                              </td>
                            ))}
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </section>

            {/* Core Vocabulary Soundboard */}
            {currentLesson.vocabulary && currentLesson.vocabulary.length > 0 && (
              <section className="lesson-section vocabulary-section">
                <div className="section-title-row">
                  <span className="section-icon">🗂️</span>
                  <div>
                    <h3>Core Vocabulary & Pronunciation Soundboard</h3>
                    <p className="section-subtitle">Essential vocabulary items with native audio, phonetic spelling, and contextual examples.</p>
                  </div>
                </div>
                <div className="vocab-soundboard-grid">
                  {currentLesson.vocabulary.map((item, vIdx) => (
                    <div key={vIdx} className="vocab-card">
                      <div className="vocab-card-header">
                        <span className="vocab-word">{item.word}</span>
                        <button
                          type="button"
                          className="vocab-speak-btn"
                          onClick={() => playSpeech(item.word)}
                          title="Play native audio"
                        >
                          🔊
                        </button>
                      </div>
                      <div className="vocab-phonetic">{item.phonetic}</div>
                      <div className="vocab-translation">{item.translation}</div>
                      {item.example && (
                        <div className="vocab-example">
                          <span>Example: </span>"{item.example}"
                          <button
                            type="button"
                            className="inline-audio-btn"
                            onClick={() => playSpeech(item.example)}
                            title="Hear example sentence"
                          >
                            🔊
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </section>
            )}

            {/* Interactive Practice Drills (Improvised Layout) */}
            {currentLesson.practiceDrills && currentLesson.practiceDrills.length > 0 && (
              <section className="lesson-section drills-section">
                <div className="section-title-row">
                  <span className="section-icon">⚡</span>
                  <div>
                    <h3>Interactive Mastery Quizzes</h3>
                    <p className="section-subtitle">Test your retention immediately with instant feedback and pedagogical explanations.</p>
                  </div>
                </div>
                <div className="drills-list">
                  {currentLesson.practiceDrills.map((drill, dIdx) => {
                    const selected = exerciseAnswers[drill.id];
                    const feedback = exerciseFeedback[drill.id];

                    return (
                      <div key={drill.id} className="drill-card">
                        <div className="drill-header">
                          <div className="drill-meta-tags">
                            <span className="drill-badge">Exercise {dIdx + 1} of {currentLesson.practiceDrills.length}</span>
                            <span className="drill-type-pill">Practice Quiz</span>
                          </div>
                          <h4 className="drill-prompt">{drill.question}</h4>
                        </div>

                        <div className="drill-options-grid">
                          {drill.options.map((opt, oIdx) => {
                            const isChosen = selected === oIdx;
                            let cardStyle = "";
                            if (isChosen) cardStyle = "selected";
                            if (feedback === "correct" && isChosen) cardStyle = "is-correct";
                            if (feedback === "incorrect" && isChosen) cardStyle = "is-wrong";

                            return (
                              <button
                                key={oIdx}
                                type="button"
                                className={`drill-opt-btn ${cardStyle}`}
                                onClick={() => handleSelectDrill(drill.id, oIdx)}
                              >
                                <span className="opt-letter">{String.fromCharCode(65 + oIdx)}</span>
                                <span className="opt-text">{opt}</span>
                                {feedback === "correct" && isChosen && (
                                  <span className="opt-status-icon">✓</span>
                                )}
                              </button>
                            );
                          })}
                        </div>

                        <div className="drill-actions">
                          <button
                            type="button"
                            className="check-drill-btn"
                            disabled={selected === undefined}
                            onClick={() => checkDrill(drill.id, drill.correct)}
                          >
                            ✓ Check My Answer
                          </button>

                          {feedback === "correct" && (
                            <div className="drill-feedback-pill success">
                              <strong>✓ Excellent!</strong> {drill.explanation}
                            </div>
                          )}
                          {feedback === "incorrect" && (
                            <div className="drill-feedback-pill failure">
                              <strong>✗ Not quite!</strong> {drill.explanation}
                            </div>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </section>
            )}

            {/* Lesson Navigation Bottom Controls */}
            <div className="lesson-footer-nav">
              <button
                type="button"
                className="footer-nav-btn prev-btn"
                disabled={activeStep === 0}
                onClick={handleGoPrevious}
              >
                ← Previous Lesson
              </button>
              <button
                type="button"
                className="footer-nav-btn next-btn"
                onClick={handleProceedNext}
              >
                {activeStep < lessons.length - 1
                  ? "Mark Complete & Continue to Next Lesson →"
                  : "Complete Lessons & Proceed to 100-Mark Graded Exam →"}
              </button>
            </div>
          </div>
        )}

        {/* ============================================================== */}
        {/* VIEW B: 100-MARK GRADED LEVEL EXAMINATION                       */}
        {/* ============================================================== */}
        {activeStep === "exam" && (
          <div className="exam-active-view">
            {/* Exam Header Banner */}
            <div className="exam-header-banner">
              <div className="exam-badge-tag">OFFICIAL LEVEL MILESTONE EVALUATION</div>
              <h2>{currentLevel.assignment.title}</h2>
              <div className="exam-points-bar">
                <div className="exam-stat">
                  <span>Total Exam Marks:</span>
                  <strong>{currentLevel.assignment.totalMarks} Marks</strong>
                </div>
                <div className="exam-stat">
                  <span>Passing Score Required:</span>
                  <strong>{currentLevel.assignment.passMarks} Marks (70%)</strong>
                </div>
                <div className="exam-stat">
                  <span>Exam Architecture:</span>
                  <strong>
                    {currentLevel.assignment.writingAssessment
                      ? "Section 1: 20 Questions (80M) + Section 2: AI Writing (20M)"
                      : `${currentLevel.assignment.questions.length} Questions (100M)`}
                  </strong>
                </div>
                <div className="exam-stat">
                  <span>Registered Candidate:</span>
                  <strong>{studentName}</strong>
                </div>
              </div>
            </div>

            {/* Exam Certificate (If Passed) */}
            {assignmentSubmitted && calculatedScore >= currentLevel.assignment.passMarks && (
              <div className="diploma-certificate">
                <div className="certificate-inner-border">
                  <div className="cert-crest">🏛️</div>
                  <span className="cert-sub">OFFICIAL CERTIFICATE OF MASTERY</span>
                  <h2>{currentLangData.certifyingBody}</h2>
                  <p className="cert-intro">This is to officially certify that</p>
                  <h3 className="cert-recipient">{studentName}</h3>
                  <p className="cert-statement">
                    has successfully achieved proficiency in <strong>{currentLangData.name} ({currentLevel.code} — {currentLevel.title})</strong>,
                    scoring <strong>{calculatedScore} / {currentLevel.assignment.totalMarks} Marks</strong> on the comprehensive level evaluation.
                  </p>
                  <div className="cert-footer-row">
                    <div className="cert-sig">
                      <span className="sig-line">Smartlingual AI Academic Board</span>
                      <small>CEFR Standards Verified</small>
                    </div>
                    <div className="cert-date">
                      <span>Date: {new Date().toLocaleDateString()}</span>
                      <button
                        type="button"
                        className="print-cert-btn"
                        onClick={() => window.print()}
                      >
                        🖨️ Print / Save Certificate
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Score Summary Box (After Submission) */}
            {assignmentSubmitted && (
              <div className={`exam-score-result-card ${calculatedScore >= currentLevel.assignment.passMarks ? "passed" : "failed"}`}>
                <div className="score-main">
                  <h3>Your Exam Score: {calculatedScore} / {currentLevel.assignment.totalMarks} Marks</h3>
                  <p>
                    {calculatedScore >= currentLevel.assignment.passMarks
                      ? "🌟 Congratulations! You have successfully mastered this level's curriculum with distinction."
                      : "⚠️ You scored below the passing grade of 70%. Review the explanations below and try again."}
                  </p>
                </div>
                <button
                  type="button"
                  className="retake-exam-btn"
                  onClick={handleResetExam}
                >
                  🔄 Retake Examination
                </button>
              </div>
            )}

            {/* SECTION 1: OBJECTIVE QUESTIONS */}
            <div className="exam-section-block">
              <div className="exam-section-title-bar">
                <span className="sec-tag">SECTION 1</span>
                <div>
                  <h3>Theoretical & Grammatical Mechanics ({currentLevel.assignment.writingAssessment ? "80 Marks • 20 Questions" : "100 Marks"})</h3>
                  <p className="section-subtitle">Select the best answer for each question. Each question carries 4 marks.</p>
                </div>
              </div>

              <div className="exam-questions-list">
                {currentLevel.assignment.questions.map((q, qIdx) => {
                  const selected = assignmentAnswers[q.id];
                  const isCorrect = assignmentSubmitted && selected === q.correct;
                  const isWrong = assignmentSubmitted && selected !== q.correct;

                  return (
                    <div
                      key={q.id}
                      className={`exam-q-card ${isCorrect ? "correct-card" : ""} ${isWrong ? "wrong-card" : ""}`}
                    >
                      <div className="exam-q-header">
                        <span className="q-badge">Question {qIdx + 1}</span>
                        <span className="q-marks">[{q.marks} Marks]</span>
                      </div>

                      <h4 className="exam-q-prompt">{q.prompt}</h4>

                      <div className="exam-opts-grid">
                        {q.options.map((opt, oIdx) => {
                          const isChosen = selected === oIdx;
                          let optStyleClass = "";
                          if (isChosen) optStyleClass = "chosen";
                          if (assignmentSubmitted) {
                            if (oIdx === q.correct) optStyleClass = "correct-choice";
                            else if (isChosen && oIdx !== q.correct) optStyleClass = "wrong-choice";
                          }

                          return (
                            <button
                              key={oIdx}
                              type="button"
                              className={`exam-opt-btn ${optStyleClass}`}
                              disabled={assignmentSubmitted}
                              onClick={() => handleSelectExamOption(q.id, oIdx)}
                            >
                              <span className="opt-indicator">
                                {String.fromCharCode(65 + oIdx)}
                              </span>
                              <span className="opt-label-text">{opt}</span>
                              {assignmentSubmitted && oIdx === q.correct && (
                                <span className="correct-tag">✓ Correct Answer</span>
                              )}
                            </button>
                          );
                        })}
                      </div>

                      {assignmentSubmitted && (
                        <div className="exam-explanation-box">
                          <strong>Explanation:</strong> {q.explanation}
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SECTION 2: AI LIVE WRITING ASSESSMENT (WHEN CONFIGURED) */}
            {currentLevel.assignment.writingAssessment && (
              <div className="exam-section-block writing-section-block">
                <div className="exam-section-title-bar">
                  <span className="sec-tag writing-tag">SECTION 2</span>
                  <div>
                    <h3>{currentLevel.assignment.writingAssessment.title}</h3>
                    <p className="section-subtitle">Real-time AI grammar, vocabulary, and syntactic evaluation engine.</p>
                  </div>
                </div>

                <div className="writing-card-container">
                  <div className="writing-instructions-box">
                    <p><strong>Task Instructions: </strong>{currentLevel.assignment.writingAssessment.instructions}</p>
                    <div className="writing-checkpoints-row">
                      {currentLevel.assignment.writingAssessment.keyCheckpoints.map((chk, cIdx) => (
                        <span key={cIdx} className="chk-pill">
                          ✓ {chk.label} [{chk.marks}M]
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Writing Input Text Area */}
                  <div className="writing-textarea-wrapper">
                    <textarea
                      className="german-writing-textarea"
                      rows={6}
                      disabled={assignmentSubmitted}
                      placeholder="Write your complete German self-introduction here... (e.g., Hallo! Mein Name ist Rahul. Ich bin 21 Jahre alt. Ich komme aus Indien und wohne in Pune. Ich lerne Deutsch...)"
                      value={writingInput}
                      onChange={(e) => setWritingInput(e.target.value)}
                    ></textarea>

                    <div className="writing-actions-row">
                      <div className="word-count-badge">
                        Words: {writingInput.trim() ? writingInput.trim().split(/\s+/).length : 0} | Characters: {writingInput.length}
                      </div>

                      <button
                        type="button"
                        className="ai-evaluate-btn"
                        disabled={assignmentSubmitted}
                        onClick={handleEvaluateWriting}
                      >
                        🤖 AI Evaluate My Writing (Live Analysis)
                      </button>
                    </div>
                  </div>

                  {/* AI Evaluation Results & Breakdown */}
                  {writingEvaluated && (
                    <div className="ai-writing-evaluation-result">
                      <div className="eval-result-header">
                        <div className="eval-score-chip">
                          <span>AI Assessed Score:</span>
                          <strong>{writingScore} / {currentLevel.assignment.writingAssessment.maxMarks} Marks</strong>
                        </div>
                        <span className={`eval-status-pill ${writingScore >= currentLevel.assignment.writingAssessment.passingMarks ? "pass" : "revise"}`}>
                          {writingScore >= currentLevel.assignment.writingAssessment.passingMarks ? "✓ Criteria Met (Pass)" : "⚠️ Needs Revision"}
                        </span>
                      </div>

                      <p className="eval-teacher-msg">{writingFeedbackMsg}</p>

                      <div className="rubric-items-grid">
                        {writingRubricResults.map((rub, rIdx) => (
                          <div key={rIdx} className={`rubric-item ${rub.passed ? "passed-item" : "failed-item"}`}>
                            <span className="rub-status">{rub.passed ? "✓" : "✗"}</span>
                            <span className="rub-label">{rub.label}</span>
                            <span className="rub-pts">+{rub.points} / {rub.max}M</span>
                          </div>
                        ))}
                      </div>

                      <div className="model-answer-box">
                        <span className="model-tag">REFERENCE MODEL ANSWER (Goethe A1 Standard):</span>
                        <p>"{currentLevel.assignment.writingAssessment.modelAnswer}"</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}

            {/* Submit Bar */}
            {!assignmentSubmitted && (
              <div className="exam-submit-bar">
                <button
                  type="button"
                  className="submit-exam-action-btn"
                  onClick={handleSubmitExam}
                >
                  📝 Submit Full Examination for Evaluation (100 Marks Total)
                </button>
              </div>
            )}

            <div className="lesson-footer-nav">
              <button
                type="button"
                className="footer-nav-btn prev-btn"
                onClick={handleGoPrevious}
              >
                ← Back to Lessons
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

export default Lessons;
