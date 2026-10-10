import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./signup.css";
import studentsGroupImg from "../assets/students-group.jpg";

function Signup() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [error, setError] = useState("");

  const handleSignup = (e) => {
    e.preventDefault();
    setError("");

    // Basic validation
    if (!name || !email || !password || !confirmPassword) {
      setError("Please fill in all fields.");
      return;
    }

    if (password.length < 6) {
      setError("Password must be at least 6 characters.");
      return;
    }

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    // User object
    const user = {
      name: name,
      email: email,
      password: password,

      // Initial Smartlingual data
      selectedLanguage: null,
      level: "A1",
      progress: 0,
      completedLessons: 0,
      learningStreak: 0,
      learningTime: 0,
      certificates: [],
    };

    // Store user temporarily in browser
    localStorage.setItem("smartlingualUser", JSON.stringify(user));

    // Save logged-in user
    localStorage.setItem("smartlingualLoggedIn", "true");

    // Go to profile onboarding to select language and level
    navigate("/profile");
  };

  return (
    <div className="signup-page">
      <div className="signup-container">
        {/* LEFT SIDE */}
        <div className="signup-left">
          <div className="signup-brand" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <span>✦</span> Smartlingual <b>AI</b>
          </div>

          <div className="signup-content">
            <div className="signup-tag">✦ START YOUR JOURNEY</div>

            <h1>
              Learn languages.
              <br />
              <span>Unlock opportunities.</span>
            </h1>

            <p>
              Learn languages with AI-powered lessons,
              speaking practice, personalized guidance
              and verified international university & job pathways.
            </p>

            {/* STUDENT LEARNING SPOTLIGHT */}
            <div className="signup-student-spotlight">
              <img
                src={studentsGroupImg}
                alt="Students studying together in university campus"
                className="signup-student-img"
              />
              <div className="spotlight-overlay">
                <span className="spotlight-tag">10,000+ Active Global Students</span>
                <p>"Matched with TU Munich engineering program after reaching B2 German!"</p>
                <div className="spotlight-stats-row">
                  <span>🇩🇪 German</span>
                  <span>🇰🇷 Korean</span>
                  <span>🇯🇵 Japanese</span>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="signup-right">

          <div className="signup-card">

            <h2>Create your account</h2>

            <p className="signup-subtitle">
              Start your language journey with Smartlingual AI
            </p>

            <form onSubmit={handleSignup}>

              {/* NAME */}
              <div className="input-group">

                <label>Full Name</label>

                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                />

              </div>


              {/* EMAIL */}
              <div className="input-group">

                <label>Email Address</label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email"
                />

              </div>


              {/* PASSWORD */}
              <div className="input-group">

                <label>Password</label>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Create a password"
                />

              </div>


              {/* CONFIRM PASSWORD */}
              <div className="input-group">

                <label>Confirm Password</label>

                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) =>
                    setConfirmPassword(e.target.value)
                  }
                  placeholder="Confirm your password"
                />

              </div>


              {/* ERROR */}
              {error && (
                <p className="signup-error">
                  {error}
                </p>
              )}


              {/* BUTTON */}
              <button
                type="submit"
                className="signup-submit"
              >
                Create Account →
              </button>

            </form>


            <div className="signup-divider">
              <span>or</span>
            </div>


            <button className="google-btn">
              <span>G</span>
              Continue with Google
            </button>


            <p className="login-text">

              Already have an account?{" "}

              <Link to="/login">
                Login
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Signup;