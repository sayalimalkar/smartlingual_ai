import { useState } from "react";
import { Link } from "react-router-dom";
import photorealisticEarth from "../assets/photorealistic-earth.jpg";
import "./Landingpage.css";

function Landingpage() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen((prev) => !prev);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <div className="smartlingual">
      {/* NAVBAR */}
      <header className="navbar">
        <div className="brand">
          <span className="brand-star">✦</span>
          Smartlingual <span>AI</span>
        </div>

        {/* Desktop Navigation */}
        <nav className="desktop-nav">
          <a href="#home">Home</a>
          <Link to="/lessons">📚 German Lessons (A1-C2)</Link>
          <Link to="/profile">🎓 Education & Profile</Link>
          <Link to="/recommendations">🏛️ University & Jobs</Link>
          <a href="#languages">Languages</a>
          <a href="#features">Features</a>
        </nav>

        <div className="navbar-actions">
          <Link to="/login" className="login-btn">
            Login
          </Link>
          <Link to="/signup" className="signup-nav-btn">
            Get Started
          </Link>

          {/* Mobile Hamburger Toggle */}
          <button
            className={`hamburger ${isMobileMenuOpen ? "active" : ""}`}
            onClick={toggleMobileMenu}
            aria-label="Toggle navigation menu"
            aria-expanded={isMobileMenuOpen}
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <div className={`mobile-nav-drawer ${isMobileMenuOpen ? "open" : ""}`}>
        <div className="mobile-nav-links">
          <a href="#home" onClick={closeMobileMenu}>
            🏠 Home
          </a>
          <Link to="/lessons" onClick={closeMobileMenu}>
            📚 German Lessons (A1-C2)
          </Link>
          <Link to="/profile" onClick={closeMobileMenu}>
            🎓 Education & Profile
          </Link>
          <Link to="/recommendations" onClick={closeMobileMenu}>
            🏛️ University & Career Recommendations
          </Link>
          <Link to="/dashboard" onClick={closeMobileMenu}>
            📊 Dashboard
          </Link>
          <a href="#languages" onClick={closeMobileMenu}>
            🌍 Languages
          </a>
          <a href="#features" onClick={closeMobileMenu}>
            ✨ Features
          </a>
        </div>
        <div className="mobile-nav-auth">
          <Link to="/login" className="mobile-btn-login" onClick={closeMobileMenu}>
            Login
          </Link>
          <Link to="/signup" className="mobile-btn-signup" onClick={closeMobileMenu}>
            Start Free Trial →
          </Link>
        </div>
      </div>
      {isMobileMenuOpen && (
        <div className="mobile-nav-backdrop" onClick={closeMobileMenu}></div>
      )}

      {/* HERO SECTION */}
      <main className="hero" id="home">
        {/* LEFT CONTENT */}
        <section className="hero-left">
          <div className="tag">
            <span className="tag-sparkle">✦</span> AI-POWERED LANGUAGE LEARNING
          </div>

          <h1>
            Learn Languages.
            <br />
            <span className="hero-gradient-text">Explore the World.</span>
          </h1>

          <p className="description">
            Master multiple languages on one intelligent platform. Learn, speak,
            practice and track your progress with personalized AI guidance, accredited CEFR curricula, and direct international pathways.
          </p>

          <div className="hero-buttons">
            <Link to="/signup" className="start-btn">
              Start Learning Free <span className="btn-arrow">→</span>
            </Link>

            <Link to="/lessons" className="explore-btn lessons-btn">
              📚 Explore German (A1–C2)
            </Link>

            <Link to="/recommendations" className="explore-btn uni-btn">
              🏛️ University Pathways
            </Link>
          </div>

          <div className="stats">
            <div className="stat">
              <strong>5+</strong>
              <span>Global Languages</span>
            </div>

            <div className="stat">
              <strong>A1–C2</strong>
              <span>CEFR Curriculum</span>
            </div>

            <div className="stat">
              <strong>4.9★</strong>
              <span>Student Rating</span>
            </div>

            <div className="stat">
              <strong>10K+</strong>
              <span>Active Learners</span>
            </div>
          </div>
        </section>

        {/* RIGHT GLOBE */}
        <section className="hero-right">
          <div className="globe-wrapper">
            {/* Deep Cosmic Background Aura & Atmospheric Pulse */}
            <div className="globe-aura"></div>
            <div className="globe-cosmic-glow"></div>

            {/* Orbiting Orbital Rings */}
            <div className="orbit-ring ring-horizontal"></div>
            <div className="orbit-ring ring-diagonal"></div>

            {/* PHOTOREALISTIC 3D PLANET EARTH GLOBE */}
            <div className="globe realistic-earth-globe">
              {/* Photorealistic 3D Earth High-Res Graphic */}
              <img
                src={photorealisticEarth}
                alt="Photorealistic 3D planet Earth featuring deep oceanic blues, lush continents, volumetric clouds and atmospheric glow"
                className="earth-render-img"
              />

              {/* 3D Atmospheric Depth & Curvature Shading */}
              <div className="earth-atmosphere-glow"></div>
              <div className="earth-specular-light"></div>
              <div className="earth-shadow-gradient"></div>

              {/* Center Orbital AI Core Badge */}
              <div className="globe-center">
                <span className="pulse-ring"></span>
                <b>AI</b>
                <small>SMARTLINGUAL</small>
                <span className="globe-center-status">● 8K ACTIVE</span>
              </div>
            </div>

            {/* SLEEK FROSTED-GLASS (GLASSMORPHISM) FLOATING UI TAGS */}
            <div
              className="glass-tag tag-germany"
              title="Click to explore German A1-C2 Lessons"
            >
              <span className="glass-flag">🇩🇪</span>
              <div className="glass-meta">
                <b>German</b>
                <small>Deutsch • A1–C2</small>
              </div>
              <span className="glass-pill pill-active">● Active</span>
            </div>

            <div className="glass-tag tag-korean">
              <span className="glass-flag">🇰🇷</span>
              <div className="glass-meta">
                <b>Korean</b>
                <small>한국어 • Hangul</small>
              </div>
              <span className="glass-pill pill-popular">Popular</span>
            </div>

            <div className="glass-tag tag-japan">
              <span className="glass-flag">🇯🇵</span>
              <div className="glass-meta">
                <b>Japanese</b>
                <small>日本語 • JLPT</small>
              </div>
              <span className="glass-pill pill-neutral">N5–N1</span>
            </div>

            <div className="glass-tag tag-england">
              <span className="glass-flag">🇬🇧</span>
              <div className="glass-meta">
                <b>English</b>
                <small>Global • IELTS 8.5</small>
              </div>
              <span className="glass-pill pill-neutral">Fluent</span>
            </div>

            <div className="glass-tag tag-india">
              <span className="glass-flag">🇮🇳</span>
              <div className="glass-meta">
                <b>Hindi</b>
                <small>हिन्दी • Devanagari</small>
              </div>
              <span className="glass-pill pill-neutral">Native</span>
            </div>

            {/* AI INFORMATION BOX (FROSTED CHARCOAL GLASS) */}
            <div className="ai-info-box glassmorphism-box">
              <div className="ai-info-item">
                <div className="ai-info-icon">🎙️</div>
                <div className="ai-info-text">
                  <b>AI Speaking Coach</b>
                  <small>Real-time phonetic accent feedback</small>
                </div>
              </div>

              <div className="ai-info-divider"></div>

              <div className="ai-info-item">
                <div className="ai-info-icon progress-icon">✓</div>
                <div className="ai-info-text">
                  <b>CEFR Adaptive Curriculum</b>
                  <small>A1 Beginner to C2 Mastery</small>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* LANGUAGES SECTION */}
      <section className="languages" id="languages">
        <div className="section-label">CHOOSE YOUR LANGUAGE</div>

        <h2>
          One Platform.
          <br />
          <span>Multiple Languages.</span>
        </h2>

        <p>
          Choose a language and follow a structured CEFR-aligned learning journey
          from beginner (A1) to mastery (C2).
        </p>

        <div className="language-grid">
          <Link to="/signup" className="language-box">
            <span>🇩🇪</span>
            <div>
              <b>German</b>
              <small>Deutsch</small>
            </div>
            <strong>→</strong>
          </Link>

          <Link to="/signup" className="language-box">
            <span>🇬🇧</span>
            <div>
              <b>English</b>
              <small>Global English</small>
            </div>
            <strong>→</strong>
          </Link>

          <Link to="/signup" className="language-box">
            <span>🇯🇵</span>
            <div>
              <b>Japanese</b>
              <small>日本語</small>
            </div>
            <strong>→</strong>
          </Link>

          <Link to="/signup" className="language-box">
            <span>🇰🇷</span>
            <div>
              <b>Korean</b>
              <small>한국어</small>
            </div>
            <strong>→</strong>
          </Link>

          <Link to="/signup" className="language-box">
            <span>🇮🇳</span>
            <div>
              <b>Hindi</b>
              <small>हिन्दी</small>
            </div>
            <strong>→</strong>
          </Link>
        </div>
      </section>

      {/* FEATURES SECTION */}
      <section className="features" id="features">
        <div className="section-label">SMART LEARNING</div>

        <h2>
          Everything you need to
          <span> learn faster & speak fluently.</span>
        </h2>

        <div className="feature-grid">
          <div className="feature-box">
            <div className="feature-icon">🎙️</div>
            <h3>AI Speaking Coach</h3>
            <p>
              Practice real conversations 24/7 with interactive AI partner feedback.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">🔊</div>
            <h3>Pronunciation Analysis</h3>
            <p>
              Instant phonetic guidance to perfect your accent and intonation.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">📚</div>
            <h3>Structured Lessons & Quizzes</h3>
            <p>
              Comprehensive grammar, vocabulary flashcards, and chapter tests.
            </p>
          </div>

          <div className="feature-box">
            <div className="feature-icon">🏆</div>
            <h3>Tests & Verified Certificates</h3>
            <p>
              Complete CEFR benchmark tests and earn shareable certificates.
            </p>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="about">
        <div className="footer-content">
          <div className="footer-brand">
            <h3>✦ Smartlingual AI</h3>
            <p>
              Empowering global learners with intelligent, personalized language education.
            </p>
          </div>
          <div className="footer-links">
            <a href="#home">Home</a>
            <a href="#languages">Languages</a>
            <a href="#features">Features</a>
            <Link to="/login">Login</Link>
            <Link to="/signup">Register</Link>
          </div>
        </div>
        <div className="footer-bottom">
          <small>© 2026 Smartlingual AI. All rights reserved.</small>
        </div>
      </footer>
    </div>
  );
}

export default Landingpage;