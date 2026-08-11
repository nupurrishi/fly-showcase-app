import { useState } from "react";
import Button from "../components/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");

  const handleLogin = (event) => {
    event.preventDefault();

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    // Temporary UI behavior.
    // Supabase authentication will be connected later.
    setMessage("Login system coming next.");
  };

  const handleForgotPassword = () => {
    setMessage("Password recovery will be connected with Supabase.");
  };

  const handleRequestAccess = () => {
    setMessage("Registration will be available soon.");
  };

  return (
    <main className="login-page">
      <div className="login-brand-bar" />

      <div className="login-container">
        {/* BRAND */}
        <header className="login-header">
          <div className="login-logo">FLY</div>

          <div className="login-logo-subtitle">
            SHOWCASE
          </div>
        </header>

        {/* INTRO */}
        <section className="login-intro">
          <div className="login-eyebrow">
            WELCOME BACK
          </div>

          <h1 className="login-title">
            Your fashion
            <br />
            <span>world awaits.</span>
          </h1>

          <p className="login-description">
            Sign in to access your schedule, runway calls,
            lookbooks and backstage updates.
          </p>
        </section>

        {/* LOGIN CARD */}
        <section className="login-card">
          <div className="login-card-title">
            SIGN IN
          </div>

          <form onSubmit={handleLogin}>
            {/* EMAIL */}
            <div className="login-field">
              <label
                htmlFor="email"
                className="login-label"
              >
                EMAIL ADDRESS
              </label>

              <input
                id="email"
                type="email"
                value={email}
                onChange={(event) => {
                  setEmail(event.target.value);
                  setMessage("");
                }}
                placeholder="Enter your registered email"
                autoComplete="email"
                className="login-input"
              />
            </div>

            {/* PASSWORD */}
            <div className="login-field login-password-field">
              <label
                htmlFor="password"
                className="login-label"
              >
                PASSWORD
              </label>

              <div className="login-password-wrapper">
                <input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(event) => {
                    setPassword(event.target.value);
                    setMessage("");
                  }}
                  placeholder="Enter your password"
                  autoComplete="current-password"
                  className="login-input login-password-input"
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword(!showPassword)
                  }
                  className="login-show-password"
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {/* FORGOT PASSWORD */}
            <div className="login-forgot-wrapper">
              <button
                type="button"
                onClick={handleForgotPassword}
                className="login-forgot-button"
              >
                FORGOT PASSWORD?
              </button>
            </div>

            {/* SIGN IN */}
            <Button
              type="submit"
              variant="gold"
              fullWidth
            >
              SIGN IN
            </Button>
          </form>

          {/* MESSAGE */}
          {message && (
            <div className="login-message">
              {message}
            </div>
          )}
        </section>

        {/* ACCESS INFORMATION */}
        <div className="login-access-info">
          <p>
            Your access is managed by the Fly Showcase
            team. Your role, designer and event access
            will be assigned to your registered email.
          </p>
        </div>

        {/* REQUEST ACCESS */}
        <section className="login-request">
          <p>
            Don't have access yet?
          </p>

          <Button
            type="button"
            variant="secondary"
            size="small"
            onClick={handleRequestAccess}
          >
            REQUEST ACCESS
          </Button>
        </section>

        {/* FOOTER */}
        <footer className="login-footer">
          <span>FLY</span>
          {" "}• FIRST LOVE YOURSELF
        </footer>
      </div>
    </main>
  );
}

export default Login;