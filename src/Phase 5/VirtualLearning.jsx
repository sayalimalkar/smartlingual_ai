import "./VirtualLearning.css";
import studentsGroupImg from "../assets/students-group.jpg";
import studentSoloImg from "../assets/student-solo.jpg";
import studentsTechImg from "../assets/students-tech.jpg";

function VirtualLearning() {
  return (
    <div className="vl-container">
      <div className="virtual-learning">
        {/* Decorative ambient background */}
        <div className="vl-glow"></div>

        {/* Top Header / AI Coach Status */}
        <div className="vl-top-bar">
          <div className="vl-ai-pill">
            <span className="vl-ai-star">✦</span>
            <div className="vl-ai-info">
              <strong>Smartlingual Virtual Campus</strong>
              <small>Interactive AI Study Hub & Global Peer Learning</small>
            </div>
          </div>

          <div className="vl-ai-wave">
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <i></i>
            <span>AI Voice Coach Active</span>
          </div>
        </div>

        {/* Real Students Learning Showcase Gallery */}
        <div className="vl-students-gallery">
          {/* Student 1: University Collaboration */}
          <div className="vl-student-card main-card">
            <div className="vl-img-wrap">
              <img
                src={studentsGroupImg}
                alt="Students learning foreign languages together in university library"
                className="vl-student-img"
              />
              <div className="vl-img-overlay"></div>
              <span className="vl-badge vl-badge-emerald">
                <span>🇩🇪 🇫🇷</span> Language Study Group
              </span>
            </div>
            <div className="vl-card-caption">
              <div className="vl-caption-header">
                <strong>International Campus Library</strong>
                <span className="live-dot">● Active</span>
              </div>
              <p>Multilingual cohort practicing German & French conversational units.</p>
            </div>
          </div>

          {/* Student 2: Focused Solo Digital Learning */}
          <div className="vl-student-card side-card">
            <div className="vl-img-wrap">
              <img
                src={studentSoloImg}
                alt="Student studying Japanese on laptop with headphones and notes"
                className="vl-student-img"
              />
              <div className="vl-img-overlay"></div>
              <span className="vl-badge vl-badge-cyan">
                <span>🇯🇵 🇰🇷</span> AI Speech Studio
              </span>
            </div>
            <div className="vl-card-caption">
              <div className="vl-caption-header">
                <strong>Phonetic Pronunciation Lab</strong>
                <span className="level-tag">CEFR B1</span>
              </div>
              <p>Real-time accent coaching & script recognition for Asian languages.</p>
            </div>
          </div>

          {/* Student 3: Tech & Engineering Seminar */}
          <div className="vl-student-card side-card">
            <div className="vl-img-wrap">
              <img
                src={studentsTechImg}
                alt="Engineering and technology students working in campus lab"
                className="vl-student-img"
              />
              <div className="vl-img-overlay"></div>
              <span className="vl-badge vl-badge-amber">
                <span>🎓 💼</span> Career & Degree Prep
              </span>
            </div>
            <div className="vl-card-caption">
              <div className="vl-caption-header">
                <strong>Global STEM Mobility</strong>
                <span className="visa-tag">Visa Ready</span>
              </div>
              <p>Engineers preparing technical vocabularies for European work permits.</p>
            </div>
          </div>
        </div>

        {/* Floating Language Tags */}
        <div className="vl-floating-badges">
          <div className="vl-lang-tag tag-de">
            <span>🇩🇪</span>
            <div>
              <b>German A1–C2</b>
              <small>Hallo! Wie geht's?</small>
            </div>
          </div>

          <div className="vl-lang-tag tag-kr">
            <span>🇰🇷</span>
            <div>
              <b>Korean Hangul</b>
              <small>안녕하세요</small>
            </div>
          </div>

          <div className="vl-lang-tag tag-jp">
            <span>🇯🇵</span>
            <div>
              <b>Japanese JLPT</b>
              <small>こんにちは</small>
            </div>
          </div>
        </div>

        {/* Progress & Verification Bar */}
        <div className="vl-progress-card">
          <div className="vl-progress-title">
            <strong>Intelligent Curriculum Pipeline</strong>
            <span className="vl-completion-pct">84% Verification Rate</span>
          </div>

          <div className="vl-progress-track">
            <div className="vl-progress-bar-fill"></div>
          </div>

          <div className="vl-progress-steps">
            <span className="step-done">
              <b>✓</b> 01 Education Credentials
            </span>
            <span className="step-done">
              <b>✓</b> 02 Skillset Alignment
            </span>
            <span className="step-active">
              <b>→</b> 03 AI Match Synthesis
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default VirtualLearning;