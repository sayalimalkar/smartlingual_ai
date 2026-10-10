import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Recommendations.css";

function Recommendations() {
  const navigate = useNavigate();

  // Read student profile from localStorage
  const [user, setUser] = useState(() => {
    try {
      const saved = localStorage.getItem("smartlingualUser");
      if (saved) return JSON.parse(saved);
    } catch (e) {
      console.error(e);
    }
    return {
      name: "Alex",
      education: "B.Tech",
      specialization: "Computer Science",
      skills: ["Python", "React", "Data Science"],
      selectedLanguage: "German",
      level: "A1",
      targetCountry: "Germany",
      careerGoal: "Work Overseas"
    };
  });

  const language = user.selectedLanguage || "German";
  const country = user.targetCountry || "Germany";
  const level = user.level || "A1";
  const skills = user.skills || ["Python", "Web Development"];
  const education = user.education || "B.Tech";
  const specialization = user.specialization || "Computer Science";

  // State: AI Engine Scanning Simulation
  const [isAnalyzing, setIsAnalyzing] = useState(true);
  const [engineProgress, setEngineProgress] = useState(15);
  const [analysisLogs, setAnalysisLogs] = useState([]);
  const [activeTab, setActiveTab] = useState("all");
  const [savedItems, setSavedItems] = useState({});

  useEffect(() => {
    const logs = [
      `Initializing neural pipeline for ${user.name || "Candidate"}...`,
      `Validating degree credentials: ${education} in ${specialization}...`,
      `Cross-referencing ${skills.length} skills [${skills.slice(0, 3).join(", ")}] against ${country} labor market demand...`,
      `Analyzing visa language threshold for ${country} (CEFR standard)...`,
      `Calculating language delta: Current Level (${level}) -> Target Requirement (B1/B2)...`,
      `Matching top verified university programs and enterprise job openings...`,
      `AI Recommendation Engine complete: 12 high-compatibility matches synthesized!`
    ];

    let currentStep = 0;
    const interval = setInterval(() => {
      currentStep++;
      if (currentStep < logs.length) {
        setAnalysisLogs((prev) => [...prev, logs[currentStep]]);
        setEngineProgress(Math.min(100, Math.round(((currentStep + 1) / logs.length) * 100)));
      } else {
        clearInterval(interval);
        setTimeout(() => setIsAnalyzing(false), 500);
      }
    }, 450);

    return () => clearInterval(interval);
  }, []);

  // Country Flags
  const flagMap = {
    Germany: "🇩🇪",
    Japan: "🇯🇵",
    "United Kingdom": "🇬🇧",
    "South Korea": "🇰🇷",
    India: "🇮🇳",
    France: "🇫🇷"
  };
  const activeFlag = flagMap[country] || "🌍";

  /* =====================================================
     DYNAMIC RECOMMENDATIONS DATABASE
  ===================================================== */
  const JOBS_DATA = [
    {
      id: "job-1",
      type: "job",
      title: `${skills[0] || "Software"} Engineer — Junior/Mid`,
      company: "Siemens AG",
      location: `Munich, ${country}`,
      matchScore: 96,
      requiredLevel: `${language} B1`,
      salary: "€62,000 – €74,000 / year",
      tags: [skills[0] || "Software", skills[1] || "Cloud", "English Working"],
      visaSponsored: true,
      description: `Siemens is hiring an engineer with background in ${specialization} to build scalable industrial IoT solutions.`
    },
    {
      id: "job-2",
      type: "job",
      title: "Data & Systems Analyst",
      company: "BMW Group TechHub",
      location: `Berlin, ${country}`,
      matchScore: 92,
      requiredLevel: `${language} A2/B1`,
      salary: "€58,000 – €68,000 / year",
      tags: [skills[0] || "Data", skills[2] || "Analytics", "Agile"],
      visaSponsored: true,
      description: "Join our automotive AI analytics unit. Fast-track visa sponsorship provided for STEM graduates."
    },
    {
      id: "job-3",
      type: "job",
      title: `Full-Stack Developer (${skills[1] || "React"} / ${skills[0] || "Python"})`,
      company: "Delivery Hero SE",
      location: `Berlin, ${country}`,
      matchScore: 89,
      requiredLevel: `${language} A2`,
      salary: "€65,000 – €78,000 / year",
      tags: [skills[1] || "Frontend", skills[0] || "Backend", "Microservices"],
      visaSponsored: true,
      description: "Fast-paced international engineering team with English as primary working language and German classes sponsored."
    },
    {
      id: "job-4",
      type: "job",
      title: "Graduate Technology Trainee",
      company: "SAP SE",
      location: `Walldorf, ${country}`,
      matchScore: 88,
      requiredLevel: `${language} B1`,
      salary: "€54,000 – €62,000 / year",
      tags: [education, "Cloud Solutions", "International Mobility"],
      visaSponsored: true,
      description: "Rotational graduate program for fresh and upcoming engineering graduates across enterprise cloud architecture."
    }
  ];

  const UNIVERSITIES_DATA = [
    {
      id: "uni-1",
      type: "university",
      program: `M.Sc. in ${specialization} & AI Systems`,
      university: "Technical University of Munich (TUM)",
      location: `Munich, ${country}`,
      matchScore: 97,
      tuition: "Tuition-Free (€150 semester fee)",
      requiredLevel: `${language} B2 or English C1`,
      intake: "Winter 2026 / Spring 2027",
      ranking: "Ranked #1 in Germany (#37 Globally)",
      description: "One of Europe's top tech universities. High placement rate in top European engineering and research labs."
    },
    {
      id: "uni-2",
      type: "university",
      program: `M.Sc. in Advanced Engineering & Computing`,
      university: "RWTH Aachen University",
      location: `Aachen, ${country}`,
      matchScore: 94,
      tuition: "Tuition-Free (€320 semester ticket)",
      requiredLevel: `${language} B1/B2 (Bridge courses offered)`,
      intake: "Winter 2026",
      ranking: "Ranked #3 in Germany for Engineering",
      description: "World-renowned research center with direct tie-ups with Bosch, Airbus, and Fraunhofer Institute."
    },
    {
      id: "uni-3",
      type: "university",
      program: `Master in Informatics & Applied Data`,
      university: "Karlsruhe Institute of Technology (KIT)",
      location: `Karlsruhe, ${country}`,
      matchScore: 90,
      tuition: "Low Semester Contribution",
      requiredLevel: `${language} B2`,
      intake: "Summer & Winter Intakes",
      ranking: "Top German Excellence University",
      description: "Interdisciplinary STEM master program featuring cutting-edge artificial intelligence and high-performance computing."
    },
    {
      id: "uni-4",
      type: "university",
      program: `M.Sc. in International Business & Technology`,
      university: "Technical University of Berlin (TU Berlin)",
      location: `Berlin, ${country}`,
      matchScore: 86,
      tuition: "Tuition-Free (€300 ticket)",
      requiredLevel: `${language} B1`,
      intake: "Winter 2026",
      ranking: "Berlin University Alliance",
      description: "Located in the heart of Europe's startup capital with exceptional industrial networking and research opportunities."
    }
  ];

  const COURSES_DATA = [
    {
      id: "course-1",
      type: "course",
      title: `${language} ${level} → B1 Intensive Fast-Track`,
      provider: "Smartlingual AI Core",
      matchScore: 99,
      duration: "8 Weeks (Self-paced)",
      targetLevel: "B1 Intermediate",
      description: `Bridge your language gap from ${level} to B1 with real-time AI pronunciation feedback and work conversation modules.`,
      isRecommended: true
    },
    {
      id: "course-2",
      type: "course",
      title: `Technical & Workplace ${language} for Engineers`,
      provider: "Smartlingual Career Lab",
      matchScore: 95,
      duration: "4 Weeks",
      targetLevel: "Professional Vocabulary",
      description: `Learn the exact workplace jargon, email etiquette, and interview responses needed for ${country} job applications.`
    },
    {
      id: "course-3",
      type: "course",
      title: `${language} Grammar & B2 University Admission Prep`,
      provider: "Smartlingual Academy",
      matchScore: 91,
      duration: "6 Weeks",
      targetLevel: "B2 Test Prep (TestDaF / JLPT / CEFR)",
      description: `Prepare for official language proficiency exams required by European and international university admissions.`
    },
    {
      id: "course-4",
      type: "course",
      title: `Interactive AI Speaking Partner: Scenario Practice`,
      provider: "Smartlingual Voice AI",
      matchScore: 89,
      duration: "Continuous Practice",
      targetLevel: "Spoken Fluency",
      description: "Practice real-time job interviews, visa inquiries, and daily life dialogue with your simulated AI speaking coach."
    }
  ];

  const toggleSave = (id) => {
    setSavedItems((prev) => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const allItems = [...JOBS_DATA, ...UNIVERSITIES_DATA, ...COURSES_DATA];
  const displayedItems =
    activeTab === "all"
      ? allItems
      : activeTab === "jobs"
      ? JOBS_DATA
      : activeTab === "universities"
      ? UNIVERSITIES_DATA
      : COURSES_DATA;

  return (
    <div className="recommendations-page">
      {/* TOP HEADER */}
      <header className="rec-header">
        <div className="rec-brand" onClick={() => navigate("/dashboard")}>
          ✦ Smartlingual <span>AI</span>
        </div>

        <div className="rec-header-actions">
          <button
            className="re-analyze-btn"
            onClick={() => {
              setIsAnalyzing(true);
              setEngineProgress(15);
              setAnalysisLogs([]);
              setTimeout(() => setIsAnalyzing(false), 2400);
            }}
          >
            Re-run AI Matcher ↺
          </button>
          <button className="nav-dash-btn" onClick={() => navigate("/dashboard")}>
            ← Dashboard
          </button>
        </div>
      </header>

      {/* STATE 1: AI SCANNING ANIMATION */}
      {isAnalyzing ? (
        <div className="engine-loading-view">
          <div className="engine-radar-box">
            <div className="radar-core">✦</div>
            <div className="radar-wave wave-1"></div>
            <div className="radar-wave wave-2"></div>
            <div className="radar-wave wave-3"></div>
          </div>

          <div className="engine-status-text">
            <h2>AI Recommendation Engine Active</h2>
            <p>
              Synthesizing Jobs, Universities, and Courses for <b>{user.name || "Learner"}</b>...
            </p>
          </div>

          <div className="engine-progress-bar-wrap">
            <div className="engine-progress-bar">
              <div
                className="engine-progress-fill"
                style={{ width: `${engineProgress}%` }}
              ></div>
            </div>
            <span className="engine-percentage">{engineProgress}% Completed</span>
          </div>

          <div className="engine-terminal-window">
            <div className="terminal-bar">
              <span className="dot red"></span>
              <span className="dot yellow"></span>
              <span className="dot green"></span>
              <small>neural_matching_engine_v3.8</small>
            </div>
            <div className="terminal-logs">
              {analysisLogs.map((log, idx) => (
                <div key={idx} className="log-line">
                  <span className="log-arrow">›</span> {log}
                </div>
              ))}
            </div>
          </div>
        </div>
      ) : (
        /* STATE 2: RECOMMENDATIONS HUB */
        <div className="rec-container">
          {/* USER CANDIDATE SUMMARY BANNER */}
          <div className="candidate-summary-banner">
            <div className="candidate-info">
              <span className="pipeline-pill">✦ AI PIPELINE COMPLETE</span>
              <h1>Personalized AI Matches for {user.name || "Learner"}</h1>
              <p>
                Based on your <b>{education} in {specialization}</b>,{" "}
                <b>{skills.length} technical skills</b>, and target of{" "}
                <b>{activeFlag} {country} ({language})</b>.
              </p>
            </div>

            <div className="candidate-badges">
              <div className="meta-badge">
                <small>TARGET</small>
                <strong>{activeFlag} {country}</strong>
              </div>
              <div className="meta-badge">
                <small>CURRENT LEVEL</small>
                <strong>{level}</strong>
              </div>
              <div className="meta-badge">
                <small>GOAL</small>
                <strong>{user.careerGoal || "Work Overseas"}</strong>
              </div>
              <button
                className="edit-profile-btn"
                onClick={() => navigate("/profile")}
              >
                ✏️ Edit Profile
              </button>
            </div>
          </div>

          {/* TAB NAVIGATION */}
          <div className="rec-tabs-row">
            <button
              className={`rec-tab ${activeTab === "all" ? "active" : ""}`}
              onClick={() => setActiveTab("all")}
            >
              🔥 All Matches ({allItems.length})
            </button>

            <button
              className={`rec-tab ${activeTab === "jobs" ? "active" : ""}`}
              onClick={() => setActiveTab("jobs")}
            >
              💼 Verified Jobs ({JOBS_DATA.length})
            </button>

            <button
              className={`rec-tab ${activeTab === "universities" ? "active" : ""}`}
              onClick={() => setActiveTab("universities")}
            >
              🎓 Target Universities ({UNIVERSITIES_DATA.length})
            </button>

            <button
              className={`rec-tab ${activeTab === "courses" ? "active" : ""}`}
              onClick={() => setActiveTab("courses")}
            >
              📚 Bridge Courses ({COURSES_DATA.length})
            </button>
          </div>

          {/* RESULTS GRID */}
          <div className="rec-results-grid">
            {displayedItems.map((item) => {
              const isSaved = !!savedItems[item.id];

              if (item.type === "job") {
                return (
                  <div key={item.id} className="rec-card job-card">
                    <div className="card-top-row">
                      <span className="category-tag job-tag">💼 VERIFIED JOB</span>
                      <div className="match-pill">
                        <span className="score-num">{item.matchScore}%</span> Match
                      </div>
                    </div>

                    <h3 className="card-title">{item.title}</h3>
                    <div className="company-location">
                      <strong>{item.company}</strong> • <span>{item.location}</span>
                    </div>

                    <p className="card-desc">{item.description}</p>

                    <div className="card-specs">
                      <div className="spec-item">
                        <small>LANGUAGE REQ</small>
                        <span className="lang-req-badge">🗣️ {item.requiredLevel}</span>
                      </div>
                      <div className="spec-item">
                        <small>EST. SALARY</small>
                        <span className="salary-text">{item.salary}</span>
                      </div>
                    </div>

                    <div className="tags-row">
                      {item.tags.map((t, tidx) => (
                        <span key={tidx} className="mini-tag">
                          {t}
                        </span>
                      ))}
                      {item.visaSponsored && (
                        <span className="mini-tag visa-tag">✓ Visa Sponsored</span>
                      )}
                    </div>

                    <div className="card-actions">
                      <button
                        className="primary-action-btn"
                        onClick={() =>
                          alert(
                            `Applying for ${item.title} at ${item.company}! Your profile credentials and language certificate will be forwarded.`
                          )
                        }
                      >
                        Apply with Smartlingual CV →
                      </button>
                      <button
                        className={`save-btn ${isSaved ? "saved" : ""}`}
                        onClick={() => toggleSave(item.id)}
                        title="Save for later"
                      >
                        {isSaved ? "★ Saved" : "☆ Save"}
                      </button>
                    </div>
                  </div>
                );
              }

              if (item.type === "university") {
                return (
                  <div key={item.id} className="rec-card uni-card">
                    <div className="card-top-row">
                      <span className="category-tag uni-tag">🎓 UNIVERSITY DEGREE</span>
                      <div className="match-pill uni-match">
                        <span className="score-num">{item.matchScore}%</span> Match
                      </div>
                    </div>

                    <h3 className="card-title">{item.program}</h3>
                    <div className="company-location">
                      <strong>{item.university}</strong> • <span>{item.location}</span>
                    </div>

                    <p className="card-desc">{item.description}</p>

                    <div className="card-specs">
                      <div className="spec-item">
                        <small>ADMISSION REQUIREMENT</small>
                        <span className="lang-req-badge uni-lang">🏛️ {item.requiredLevel}</span>
                      </div>
                      <div className="spec-item">
                        <small>TUITION FEE</small>
                        <span className="tuition-text">{item.tuition}</span>
                      </div>
                    </div>

                    <div className="tags-row">
                      <span className="mini-tag ranking-tag">🏆 {item.ranking}</span>
                      <span className="mini-tag">⏳ {item.intake}</span>
                    </div>

                    <div className="card-actions">
                      <button
                        className="primary-action-btn uni-action"
                        onClick={() =>
                          alert(
                            `Viewing eligibility checklist for ${item.program} at ${item.university}. Your ${education} GPA and language level match requirement!`
                          )
                        }
                      >
                        Check Eligibility & Apply →
                      </button>
                      <button
                        className={`save-btn ${isSaved ? "saved" : ""}`}
                        onClick={() => toggleSave(item.id)}
                      >
                        {isSaved ? "★ Saved" : "☆ Save"}
                      </button>
                    </div>
                  </div>
                );
              }

              if (item.type === "course") {
                return (
                  <div key={item.id} className="rec-card course-card">
                    <div className="card-top-row">
                      <span className="category-tag course-tag">📚 ACTION BRIDGE COURSE</span>
                      <div className="match-pill course-match">
                        <span className="score-num">{item.matchScore}%</span> Fit
                      </div>
                    </div>

                    <h3 className="card-title">{item.title}</h3>
                    <div className="company-location">
                      <strong>{item.provider}</strong> • <span>{item.duration}</span>
                    </div>

                    <p className="card-desc">{item.description}</p>

                    <div className="card-specs">
                      <div className="spec-item">
                        <small>TARGET CEFR GOAL</small>
                        <span className="lang-req-badge course-badge">🎯 {item.targetLevel}</span>
                      </div>
                      <div className="spec-item">
                        <small>PRACTICE FORMAT</small>
                        <span className="salary-text">Interactive Audio & Quizzes</span>
                      </div>
                    </div>

                    <div className="card-actions">
                      <button
                        className="primary-action-btn course-action"
                        onClick={() => navigate("/lessons")}
                      >
                        Start Learning This Course →
                      </button>
                      <button
                        className="secondary-action-btn"
                        onClick={() => navigate("/practice")}
                      >
                        AI Voice Practice
                      </button>
                    </div>
                  </div>
                );
              }

              return null;
            })}
          </div>
        </div>
      )}
    </div>
  );
}

export default Recommendations;
