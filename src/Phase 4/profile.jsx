import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./profile.css";
import VirtualLearning from "../Phase 5/VirtualLearning";
import studentsTechImg from "../assets/students-tech.jpg";

function Profile() {
  const navigate = useNavigate();

  // Safely read saved user information
  let savedUser = {};
  try {
    const storedUser = localStorage.getItem("smartlingualUser");
    if (storedUser) {
      savedUser = JSON.parse(storedUser);
    }
  } catch (error) {
    console.error("Unable to read saved user data:", error);
    savedUser = {};
  }

  // 1. User details
  const [name, setName] = useState(savedUser.name || "");
  const [email, setEmail] = useState(savedUser.email || "");

  // 2. Education
  const [education, setEducation] = useState(savedUser.education || "B.Tech");
  const [specialization, setSpecialization] = useState(
    savedUser.specialization || "Computer Science"
  );
  const [gradYear, setGradYear] = useState(savedUser.gradYear || "2026");

  // 3. Skills
  const [skills, setSkills] = useState(
    savedUser.skills && savedUser.skills.length > 0
      ? savedUser.skills
      : ["Python", "React", "Data Science"]
  );
  const [customSkill, setCustomSkill] = useState("");

  // 4. Target Language & Country
  const [language, setLanguage] = useState(
    savedUser.selectedLanguage || "German"
  );
  const [country, setCountry] = useState(savedUser.targetCountry || "Germany");

  // 5. Language Level
  const [level, setLevel] = useState(savedUser.level || "A1");

  // 6. Career Goal
  const [careerGoal, setCareerGoal] = useState(
    savedUser.careerGoal || "Work Overseas"
  );

  /* =====================================================
     PRE-DEFINED POPULAR SKILLS
  ===================================================== */
  const POPULAR_SKILLS = [
    "Python",
    "JavaScript",
    "React",
    "Java",
    "C++",
    "SQL & Databases",
    "Cloud & AWS",
    "Data Science",
    "Machine Learning",
    "UI/UX Design",
    "DevOps",
    "CAD / SolidWorks",
    "Embedded Systems",
    "Robotics",
    "Project Management",
    "Digital Marketing",
    "Business Analytics",
    "Communication"
  ];

  const toggleSkill = (skillName) => {
    if (skills.includes(skillName)) {
      setSkills(skills.filter((s) => s !== skillName));
    } else {
      setSkills([...skills, skillName]);
    }
  };

  const handleAddCustomSkill = (e) => {
    e.preventDefault();
    const trimmed = customSkill.trim();
    if (trimmed && !skills.includes(trimmed)) {
      setSkills([...skills, trimmed]);
      setCustomSkill("");
    }
  };

  const removeSkill = (skillName) => {
    setSkills(skills.filter((s) => s !== skillName));
  };

  /* =====================================================
     LANGUAGES LIST
  ===================================================== */
  const languages = [
    { name: "German", flag: "🇩🇪", country: "Germany", description: "Germany & Europe" },
    { name: "English", flag: "🇬🇧", country: "United Kingdom", description: "Global Communication" },
    { name: "Japanese", flag: "🇯🇵", country: "Japan", description: "Japan & High-Tech" },
    { name: "Korean", flag: "🇰🇷", country: "South Korea", description: "Korea & Culture" },
    { name: "Hindi", flag: "🇮🇳", country: "India", description: "India & South Asia" },
    { name: "French", flag: "🇫🇷", country: "France", description: "France & Global" }
  ];

  /* =====================================================
     LEVELS (CEFR)
  ===================================================== */
  const levels = [
    { code: "A1", title: "Beginner", description: "Basic everyday phrases" },
    { code: "A2", title: "Elementary", description: "Simple daily routines" },
    { code: "B1", title: "Intermediate", description: "Independent conversational" },
    { code: "B2", title: "Upper Intermediate", description: "Professional fluency" },
    { code: "C1", title: "Advanced", description: "Complex academic & work" },
    { code: "C2", title: "Mastery", description: "Near-native precision" }
  ];

  /* =====================================================
     CAREER GOALS
  ===================================================== */
  const careerGoals = [
    {
      id: "work",
      title: "Work Overseas",
      icon: "💼",
      description: "Land a high-paying job in international tech or engineering"
    },
    {
      id: "study",
      title: "Master's / Higher Studies",
      icon: "🎓",
      description: "Gain admission to top tuition-free or prestigious global universities"
    },
    {
      id: "remote",
      title: "Global Remote Career",
      icon: "🌐",
      description: "Work with international teams and earn in foreign currency"
    },
    {
      id: "relocation",
      title: "Relocation & PR",
      icon: "✈️",
      description: "Migrate and build a long-term future abroad with language fluency"
    }
  ];

  /* =====================================================
     SAVE & RUN AI RECOMMENDATION ENGINE
  ===================================================== */
  const handleSaveAndRecommend = (e) => {
    e.preventDefault();

    if (!name.trim()) {
      alert("Please enter your name.");
      return;
    }

    if (skills.length === 0) {
      alert("Please select or add at least one skill.");
      return;
    }

    const updatedUser = {
      ...savedUser,
      name: name.trim(),
      email,
      education,
      specialization: specialization.trim(),
      gradYear,
      skills,
      selectedLanguage: language,
      level,
      targetCountry: country,
      careerGoal,
      progress: savedUser.progress || 35,
      completedLessons: savedUser.completedLessons || 4,
      learningStreak: savedUser.learningStreak || 3,
      learningTime: savedUser.learningTime || 2.5,
      certificates: savedUser.certificates || []
    };

    localStorage.setItem("smartlingualUser", JSON.stringify(updatedUser));

    // Route directly to Step 7 & 8: AI Recommendation Engine
    navigate("/recommendations");
  };

  return (
    <div className="profile-page">
      <div className="profile-wrapper">
        {/* HEADER */}
        <header className="profile-header">
          <div
            className="profile-brand"
            onClick={() => navigate("/")}
            style={{ cursor: "pointer" }}
          >
            ✦ Smartlingual <span>AI</span>
          </div>

          <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <button
              type="button"
              onClick={() => navigate("/dashboard")}
              className="dash-link-btn"
            >
              ← Dashboard
            </button>
            <div className="profile-step">AI PIPELINE WIZARD</div>
          </div>
        </header>

        {/* CONTENT */}
        <div className="profile-content">
          {/* INTRODUCTION */}
          <div className="profile-intro">
            <div className="profile-tag">✦ STEP 1 TO 6: PROFILE ENGINE INPUTS</div>
            <h1>
              Complete your profile.
              <br />
              <span>Unlock AI Recommendations.</span>
            </h1>
            <p>
              Your education, technical skills, and language goals feed directly into
              our AI Recommendation Engine to match you with verified international
              Jobs, Universities, and Bridge Courses.
            </p>
          </div>

          <VirtualLearning />

          {/* PIPELINE FORM */}
          <form className="profile-form" onSubmit={handleSaveAndRecommend}>
            {/* 01 - USER BASIC INFORMATION */}
            <div className="form-section">
              <div className="section-heading">
                <span>01</span>
                <div>
                  <h2>User Information</h2>
                  <p>Confirm your identity for certificate and recommendation generation.</p>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Full Name *</label>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="e.g. Alex Johnson"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Email Address</label>
                  <input
                    type="email"
                    value={email || "learner@smartlingual.ai"}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="learner@smartlingual.ai"
                  />
                </div>
              </div>
            </div>

            {/* 02 - EDUCATION */}
            <div className="form-section education-section">
              <div className="section-heading">
                <span>02</span>
                <div>
                  <h2>Education Credentials</h2>
                  <p>Used to verify degree eligibility for universities and international work visas.</p>
                </div>
              </div>

              {/* STUDENT LEARNING SPOTLIGHT IN EDUCATION DASHBOARD */}
              <div className="education-visual-banner">
                <div className="edu-banner-image-wrap">
                  <img
                    src={studentsTechImg}
                    alt="University students collaborating in modern campus lab"
                    className="edu-banner-img"
                  />
                  <div className="edu-image-overlay">
                    <span className="edu-image-badge">🎓 Higher Education & Global Placements</span>
                  </div>
                </div>
                <div className="edu-banner-text">
                  <h3>Academic Credentials & Degree Verification</h3>
                  <p>
                    Connecting your <strong>{education || "Degree"}</strong> in <strong>{specialization || "Field of Study"}</strong> with 
                    accredited European and global degree equivalencies (Anabin, ZAB, ECTS standards).
                  </p>
                  <div className="edu-stats-mini">
                    <span className="edu-check-pill">✓ Tuition-free EU Universities</span>
                    <span className="edu-check-pill">✓ Fast-track STEM Work Permits</span>
                  </div>
                </div>
              </div>

              <div className="form-grid">
                <div className="form-group">
                  <label>Degree / Level of Study *</label>
                  <select
                    value={education}
                    onChange={(e) => setEducation(e.target.value)}
                  >
                    <option value="B.Tech">B.Tech / Engineering</option>
                    <option value="B.E.">B.E.</option>
                    <option value="BCA">BCA / Computer Applications</option>
                    <option value="B.Sc.">B.Sc. (Science / IT)</option>
                    <option value="B.Com">B.Com / Commerce</option>
                    <option value="BBA">BBA / Management</option>
                    <option value="M.Tech">M.Tech / M.E.</option>
                    <option value="MCA">MCA</option>
                    <option value="MBA">MBA</option>
                    <option value="High School">High School (12th)</option>
                  </select>
                </div>

                <div className="form-group">
                  <label>Field of Specialization *</label>
                  <input
                    type="text"
                    value={specialization}
                    onChange={(e) => setSpecialization(e.target.value)}
                    placeholder="e.g. Computer Science, Mechanical, AI"
                    required
                  />
                </div>

                <div className="form-group">
                  <label>Graduation Year *</label>
                  <select
                    value={gradYear}
                    onChange={(e) => setGradYear(e.target.value)}
                  >
                    <option value="2024">2024 (Graduated)</option>
                    <option value="2025">2025 (Final Year)</option>
                    <option value="2026">2026 (Upcoming)</option>
                    <option value="2027">2027+</option>
                  </select>
                </div>
              </div>
            </div>

            {/* 03 - SKILLS */}
            <div className="form-section">
              <div className="section-heading">
                <span>03</span>
                <div>
                  <h2>Skills & Competencies</h2>
                  <p>Select your top skills or add custom ones. Used by the AI to match specific job descriptions.</p>
                </div>
              </div>

              {/* ACTIVE SKILLS LIST */}
              <div className="active-skills-box">
                <label className="sub-label">Your Selected Skills ({skills.length}):</label>
                <div className="skills-pill-wrap">
                  {skills.map((s) => (
                    <span key={s} className="skill-pill active">
                      {s}
                      <button
                        type="button"
                        className="remove-pill-btn"
                        onClick={() => removeSkill(s)}
                        title={`Remove ${s}`}
                      >
                        ×
                      </button>
                    </span>
                  ))}
                </div>
              </div>

              {/* POPULAR SKILL CHIPS */}
              <div className="suggested-skills-box">
                <label className="sub-label">Tap to add popular skills:</label>
                <div className="skills-pill-wrap">
                  {POPULAR_SKILLS.map((s) => {
                    const isSelected = skills.includes(s);
                    return (
                      <button
                        key={s}
                        type="button"
                        className={`skill-pill ${isSelected ? "selected" : "unselected"}`}
                        onClick={() => toggleSkill(s)}
                      >
                        {isSelected ? "✓ " : "+ "}
                        {s}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* CUSTOM SKILL ADDER */}
              <div className="custom-skill-input-row">
                <input
                  type="text"
                  value={customSkill}
                  onChange={(e) => setCustomSkill(e.target.value)}
                  placeholder="Add another skill (e.g., Kubernetes, Flutter, Blender)"
                  onKeyDown={(e) => {
                    if (e.key === "Enter") {
                      handleAddCustomSkill(e);
                    }
                  }}
                />
                <button
                  type="button"
                  className="add-skill-btn"
                  onClick={handleAddCustomSkill}
                >
                  + Add Skill
                </button>
              </div>
            </div>

            {/* 04 - TARGET LANGUAGE & COUNTRY */}
            <div className="form-section">
              <div className="section-heading">
                <span>04</span>
                <div>
                  <h2>Target Language & Destination Country</h2>
                  <p>Choose the language you wish to master and the country you are targeting.</p>
                </div>
              </div>

              <div className="language-grid">
                {languages.map((item) => {
                  const isSelected = language === item.name;
                  return (
                    <button
                      type="button"
                      key={item.name}
                      className={`language-card ${isSelected ? "selected" : ""}`}
                      onClick={() => {
                        setLanguage(item.name);
                        setCountry(item.country);
                      }}
                    >
                      <span className="language-flag">{item.flag}</span>
                      <span className="language-name">{item.name}</span>
                      <span className="language-description">{item.description}</span>
                      {isSelected && <span className="language-check">✓</span>}
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 05 - LANGUAGE LEVEL */}
            <div className="form-section">
              <div className="section-heading">
                <span>05</span>
                <div>
                  <h2>Current Language Level (CEFR)</h2>
                  <p>The AI calculates the gap between your current level and job/university requirements.</p>
                </div>
              </div>

              <div className="level-grid">
                {levels.map((item) => {
                  const isSelected = level === item.code;
                  return (
                    <button
                      type="button"
                      key={item.code}
                      className={`level-card ${isSelected ? "selected" : ""}`}
                      onClick={() => setLevel(item.code)}
                    >
                      <strong>{item.code}</strong>
                      <span>{item.title}</span>
                      <small>{item.description}</small>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* 06 - CAREER GOAL */}
            <div className="form-section">
              <div className="section-heading">
                <span>06</span>
                <div>
                  <h2>Primary Career Goal</h2>
                  <p>This tells the AI engine whether to prioritize job postings or university admissions.</p>
                </div>
              </div>

              <div className="goal-grid">
                {careerGoals.map((g) => {
                  const isSelected = careerGoal === g.title;
                  return (
                    <div
                      key={g.id}
                      className={`goal-card ${isSelected ? "selected" : ""}`}
                      onClick={() => setCareerGoal(g.title)}
                    >
                      <span className="goal-icon">{g.icon}</span>
                      <div>
                        <h3>{g.title}</h3>
                        <p>{g.description}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* SUBMIT BUTTON -> TRIGGERS AI ENGINE */}
            <div className="profile-submit">
              <button type="submit" className="save-profile-btn run-engine-btn">
                ✦ Run AI Recommendation Engine →
              </button>
              <p>
                Matches your Education, Skills, and Language Level against verified Jobs, Universities, and Courses.
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Profile;