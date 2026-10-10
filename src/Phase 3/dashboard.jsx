import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./dashboard.css";
import studentsGroupImg from "../assets/students-group.jpg";
import studentSoloImg from "../assets/student-solo.jpg";

function Dashboard() {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("smartlingualUser");
      if (savedUser) {
        return JSON.parse(savedUser);
      }
    } catch (e) {
      console.error(e);
    }

    return {
      name: "Learner",
      email: "",
      selectedLanguage: "German",
      level: "A1",
      progress: 35,
      completedLessons: 4,
      learningStreak: 3,
      learningTime: 2.5,
      certificates: [],
    };
  });

  const languageFlags = {
    German: "🇩🇪",
    English: "🇬🇧",
    Japanese: "🇯🇵",
    Korean: "🇰🇷",
    Hindi: "🇮🇳",
  };

  const activeLanguage = user.selectedLanguage || "German";
  const activeFlag = languageFlags[activeLanguage] || "🌍";

  const firstName = user.name ? user.name.split(" ")[0] : "Learner";

  const handleLogout = () => {
    localStorage.removeItem("smartlingualLoggedIn");
    navigate("/login");
  };

  const closeSidebarOnMobile = () => {
    setIsSidebarOpen(false);
  };

  return (
    <div className="dashboard">
      {/* MOBILE BACKDROP OVERLAY */}
      {isSidebarOpen && (
        <div className="sidebar-backdrop" onClick={closeSidebarOnMobile}></div>
      )}

      {/* SIDEBAR */}
      <aside className={`sidebar ${isSidebarOpen ? "open" : ""}`}>
        <div className="sidebar-header">
          <div className="dashboard-logo">
            ✦ Smartlingual <span>AI</span>
          </div>
          <button
            className="sidebar-close-btn"
            onClick={closeSidebarOnMobile}
            aria-label="Close sidebar"
          >
            ✕
          </button>
        </div>

        <nav className="menu">
          <div
            className="menu-item active"
            onClick={closeSidebarOnMobile}
          >
            🏠 Dashboard
          </div>

          <div
            className="menu-item"
            onClick={() => {
              closeSidebarOnMobile();
              navigate("/profile");
            }}
          >
            🌍 My Languages
          </div>

          <div
            className="menu-item"
            onClick={() => {
              closeSidebarOnMobile();
              navigate("/lessons");
            }}
          >
            📚 Lessons & Quizzes
          </div>

          <div
            className="menu-item"
            onClick={() => {
              closeSidebarOnMobile();
              navigate("/practice");
            }}
          >
            🎙 Speaking Practice
          </div>

          <div
            className="menu-item"
            onClick={() => {
              closeSidebarOnMobile();
              navigate("/recommendations");
            }}
          >
            🎯 AI Recommendations
          </div>

          <div
            className="menu-item"
            onClick={() => {
              closeSidebarOnMobile();
              navigate("/profile");
            }}
          >
            ⚙️ Account & Goals
          </div>
        </nav>

        {/* Sidebar Footer / Logout */}
        <div className="sidebar-footer">
          <div className="user-mini-badge">
            <div className="mini-avatar">
              {firstName.charAt(0).toUpperCase()}
            </div>
            <div className="mini-info">
              <strong>{firstName}</strong>
              <small>{user.email || "Learner"}</small>
            </div>
          </div>
          <button className="logout-btn" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="dashboard-main">
        {/* HEADER */}
        <header className="dashboard-header">
          <div className="header-left">
            <button
              className="dashboard-menu-toggle"
              onClick={() => setIsSidebarOpen(true)}
              aria-label="Open sidebar"
            >
              ☰
            </button>
            <div>
              <p className="welcome-small">WELCOME BACK 👋</p>
              <h1>Welcome, {firstName}</h1>
            </div>
          </div>

          <div className="profile-actions">
            <div
              className="active-lang-badge"
              onClick={() => navigate("/profile")}
              title="Change language preferences"
            >
              <span className="badge-flag">{activeFlag}</span>
              <span className="badge-name">{activeLanguage} ({user.level || "A1"})</span>
            </div>

            <div
              className="profile-circle"
              onClick={() => navigate("/profile")}
              title="View profile"
            >
              {firstName.charAt(0).toUpperCase()}
            </div>
          </div>
        </header>

        {/* AI RECOMMENDATION BANNER */}
        <div
          className="ai-rec-alert-banner"
          onClick={() => navigate("/recommendations")}
        >
          <div className="ai-alert-left">
            <span className="sparkle-icon">✦</span>
            <div>
              <strong>AI Recommendations Synthesized for {firstName}</strong>
              <p>
                Jobs, Universities, and Bridge Courses matched to your {user.education || "Degree"} and {activeLanguage} {user.level || "A1"} level.
              </p>
            </div>
          </div>
          <button
            className="view-matches-btn"
            onClick={(e) => {
              e.stopPropagation();
              navigate("/recommendations");
            }}
          >
            View Matches →
          </button>
        </div>

        {/* CURRENT LEARNING CARD */}
        <section className="learning-card">
          <div className="learning-info">
            <span className="current-language">
              {activeFlag} CURRENT COURSE
            </span>

            <h2>{activeLanguage} Language</h2>

            <p>
              Master {activeLanguage} with structured interactive lessons, AI
              pronunciation feedback, and vocabulary tests.
            </p>

            <div className="progress-info">
              <div className="progress-text">
                <span>Level {user.level || "A1"} Progress</span>
                <strong>{user.progress || 35}%</strong>
              </div>

              <div className="progress-bar">
                <div
                  className="progress-fill"
                  style={{ width: `${user.progress || 35}%` }}
                ></div>
              </div>
            </div>

            <button
              className="continue-btn"
              onClick={() => navigate("/lessons")}
            >
              Continue Learning →
            </button>
          </div>

          <div className="language-visual">
            <div className="language-circle">{activeFlag}</div>
          </div>
        </section>

        {/* STATS GRID */}
        <section className="dashboard-grid">
          <div className="dashboard-box">
            <div className="box-icon">🔥</div>
            <div>
              <span>Learning Streak</span>
              <h3>{user.learningStreak || 3} Days</h3>
            </div>
          </div>

          <div className="dashboard-box">
            <div className="box-icon">⏱</div>
            <div>
              <span>Study Time</span>
              <h3>{user.learningTime || 2.5} Hours</h3>
            </div>
          </div>

          <div className="dashboard-box">
            <div className="box-icon">🏆</div>
            <div>
              <span>Completed Lessons</span>
              <h3>{user.completedLessons || 4} Lessons</h3>
            </div>
          </div>
        </section>

        {/* CONTINUE LEARNING SECTION */}
        <section className="continue-section">
          <div className="section-title">
            <div>
              <p>RECOMMENDED FOR YOU</p>
              <h2>Continue Learning</h2>
            </div>

            <button
              className="view-all"
              onClick={() => navigate("/lessons")}
            >
              View All Lessons →
            </button>
          </div>

          {/* LESSON CARDS */}
          <div className="lesson-cards">
            <div className="lesson-card">
              <div className="lesson-number">01</div>
              <h3>Essentials & Greetings</h3>
              <p>Say hello, introduce yourself and use polite expressions.</p>
              <div className="lesson-status completed">Completed ✓</div>
            </div>

            <div className="lesson-card">
              <div className="lesson-number">02</div>
              <h3>Everyday Vocabulary</h3>
              <p>Learn core words for numbers, food, directions, and time.</p>
              <button
                className="lesson-action-btn"
                onClick={() => navigate("/lessons")}
              >
                Start Lesson →
              </button>
            </div>

            <div className="lesson-card">
              <div className="lesson-number">03</div>
              <h3>AI Pronunciation Practice</h3>
              <p>Practice speaking with simulated AI audio feedback.</p>
              <button
                className="lesson-action-btn"
                onClick={() => navigate("/practice")}
              >
                Practice Speaking →
              </button>
            </div>
          </div>
        </section>

        {/* ACTIVE STUDENTS PEER LEARNING SECTION */}
        <section className="community-section">
          <div className="section-title">
            <div>
              <p>CAMPUS COMMUNITY</p>
              <h2>Active Learners & Study Pods</h2>
            </div>
            <span className="live-pulse-badge">● 1,420 Online Now</span>
          </div>

          <div className="community-grid">
            <div className="community-card">
              <div className="community-img-wrap">
                <img src={studentsGroupImg} alt="Students studying languages in campus library" />
                <span className="comm-tag">🇩🇪 Berlin Study Pod</span>
              </div>
              <div className="community-card-body">
                <h4>German A2/B1 Conversational Group</h4>
                <p>Collaborative study session reviewing Goethe B1 speaking prompts and engineering vocabulary.</p>
                <div className="comm-footer">
                  <span className="comm-members">👥 18 Students Active</span>
                  <button className="join-pod-btn" onClick={() => navigate("/practice")}>
                    Practice Together →
                  </button>
                </div>
              </div>
            </div>

            <div className="community-card">
              <div className="community-img-wrap">
                <img src={studentSoloImg} alt="Student learning Japanese script with audio" />
                <span className="comm-tag">🇯🇵 Tokyo Sprint</span>
              </div>
              <div className="community-card-body">
                <h4>JLPT N5 Grammar & Accent Lab</h4>
                <p>Practicing conversational greetings with real-time AI pronunciation scoring.</p>
                <div className="comm-footer">
                  <span className="comm-members">👥 24 Students Active</span>
                  <button className="join-pod-btn" onClick={() => navigate("/lessons")}>
                    Start Module →
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Dashboard;