import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./login.css";
import studentSoloImg from "../assets/student-solo.jpg";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();
    setError("");

    // Get saved user
    const savedUser = localStorage.getItem("smartlingualUser");

    if (!savedUser) {
      setError("No account found. Please create an account first.");
      return;
    }

    const user = JSON.parse(savedUser);

    // Check email
    if (email !== user.email) {
      setError("Email address is incorrect.");
      return;
    }

    // Check password
    if (password !== user.password) {
      setError("Password is incorrect.");
      return;
    }

    // Login successful
    localStorage.setItem("smartlingualLoggedIn", "true");

    // Go to dashboard
    navigate("/dashboard");
  };

  return (
    <div className="login-page">
      <div className="login-container">
        {/* LEFT SIDE */}
        <div className="login-left">
          <div className="login-brand" onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
            <span>✦</span> Smartlingual <b>AI</b>
          </div>

          <div className="login-content">
            <div className="login-tag">✦ WELCOME BACK</div>

            <h1>
              Continue your
              <br />
              <span>language journey.</span>
            </h1>

            <p>
              Sign in to continue learning, practice with AI,
              track your progress and explore verified opportunities.
            </p>

            {/* STUDENT LEARNING SPOTLIGHT CARD */}
            <div className="login-student-spotlight">
              <img
                src={studentSoloImg}
                alt="Student studying with Smartlingual AI"
                className="login-student-img"
              />
              <div className="spotlight-overlay">
                <span className="spotlight-tag">🇩🇪 German B1 Certified</span>
                <p>"The AI speaking feedback helped me pass my Goethe-Zertifikat on first attempt!"</p>
                <small>— Sarah K., Engineering Graduate</small>
              </div>
            </div>
          </div>
        </div>


        {/* RIGHT SIDE */}
        <div className="login-right">

          <div className="login-card">

            <h2>Welcome back</h2>

            <p className="login-subtitle">
              Sign in to your Smartlingual AI account
            </p>


            <form onSubmit={handleLogin}>

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

                <div className="password-label">

                  <label>Password</label>

                  <a href="#">
                    Forgot password?
                  </a>

                </div>

                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                />

              </div>


              {/* ERROR */}
              {error && (
                <p className="login-error">
                  {error}
                </p>
              )}


              {/* LOGIN BUTTON */}
              <button
                type="submit"
                className="login-submit"
              >
                Login →
              </button>

            </form>


            {/* DIVIDER */}
            <div className="login-divider">
              <span>or</span>
            </div>


            {/* GOOGLE */}
            <button className="google-btn">
              <span>G</span>
              Continue with Google
            </button>


            {/* SIGNUP */}
            <p className="signup-text">

              Don't have an account?

              {" "}

              <Link to="/signup">
                Create account
              </Link>

            </p>

          </div>

        </div>

      </div>

    </div>
  );
}

export default Login;