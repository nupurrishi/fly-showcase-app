import { useState } from "react";
import { supabase } from "../lib/supabase";
import Button from "../components/Button";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async (event) => {
    event.preventDefault();

    setMessage("");

    if (!email || !password) {
      setMessage("Please enter your email and password.");
      return;
    }

    setIsLoading(true);

    try {
      // Sign the user in through Supabase Authentication
      const { data: authData, error: authError } =
        await supabase.auth.signInWithPassword({
          email: email.trim(),
          password,
        });

      if (authError) {
        console.error("Login error:", authError);
        setMessage(authError.message);
        setIsLoading(false);
        return;
      }

      if (!authData.user) {
        setMessage("Unable to sign you in. Please try again.");
        setIsLoading(false);
        return;
      }

      // Get the user's profile and role
      const { data: profile, error: profileError } = await supabase
        .from("profiles")
        .select("id, full_name, email, role")
        .eq("id", authData.user.id)
        .single();

      if (profileError) {
        console.error("Profile error:", profileError);

        setMessage(
          "Your account was found, but your Fly Showcase profile could not be loaded."
        );

        await supabase.auth.signOut();
        setIsLoading(false);
        return;
      }

      console.log("Logged in user:", profile);

      // Send the user to the correct dashboard based on their role
      switch (profile.role) {
        case "model":
          window.location.href = "/model";
          break;

        case "designer":
          window.location.href = "/designer";
          break;

        case "manager":
          window.location.href = "/manager";
          break;

        case "admin":
          window.location.href = "/admin";
          break;

        default:
          setMessage(
            "Your account does not have a valid Fly Showcase role."
          );

          await supabase.auth.signOut();
          setIsLoading(false);
      }
    } catch (error) {
      console.error("Unexpected login error:", error);
      setMessage("Something went wrong. Please try again.");
      setIsLoading(false);
    }
  };

  const handleForgotPassword = async () => {
    setMessage("");

    if (!email) {
      setMessage("Enter your email address first, then select Forgot Password.");
      return;
    }

    setIsLoading(true);

    try {
      const { error } = await supabase.auth.resetPasswordForEmail(
        email.trim(),
        {
          redirectTo: `${window.location.origin}/reset-password`,
        }
      );

      if (error) {
        console.error("Password reset error:", error);
        setMessage(error.message);
        setIsLoading(false);
        return;
      }

      setMessage(
        "If an account exists for this email, a password reset link has been sent."
      );
    } catch (error) {
      console.error("Unexpected password reset error:", error);
      setMessage("Unable to send the password reset email.");
    }

    setIsLoading(false);
  };

  const handleRequestAccess = () => {
    setMessage(
      "Access is managed by the Fly Showcase team. Please contact the team to request an account."
    );
  };

  return (
    <main className="login-page">
      {/* BRAND BAR */}

      <div className="login-container">
        {/* ================================
            BRAND
        ================================= */}

        <header className="login-header">
          <div className="login-logo">FLY</div>

          <div className="login-logo-subtitle">
            SHOWCASE
          </div>
        </header>

        {/* ================================
            INTRO
        ================================= */}

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

        {/* ================================
            LOGIN CARD
        ================================= */}

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
                disabled={isLoading}
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
                  disabled={isLoading}
                />

                <button
                  type="button"
                  onClick={() =>
                    setShowPassword((current) => !current)
                  }
                  className="login-show-password"
                  disabled={isLoading}
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
                disabled={isLoading}
              >
                FORGOT PASSWORD?
              </button>
            </div>

            {/* SIGN IN */}

            <Button
              type="submit"
              variant="gold"
              fullWidth
              disabled={isLoading}
            >
              {isLoading ? "SIGNING IN..." : "SIGN IN"}
            </Button>
          </form>

          {/* MESSAGE */}

          {message && (
            <div className="login-message">
              {message}
            </div>
          )}
        </section>

        {/* ================================
            ACCESS INFORMATION
        ================================= */}

        <div className="login-access-info">
          <p>
            Your access is managed by the Fly Showcase
            team. Your role, designer and event access
            will be assigned to your registered email.
          </p>
        </div>

        {/* ================================
            REQUEST ACCESS
        ================================= */}

        <section className="login-request">
          <p>
            Don't have access yet?
          </p>

          <Button
            type="button"
            variant="secondary"
            size="small"
            onClick={handleRequestAccess}
            disabled={isLoading}
          >
            REQUEST ACCESS
          </Button>
        </section>

        {/* ================================
            FOOTER
        ================================= */}

        <footer className="login-footer">
          <span>FLY</span>
          {" "}• FIRST LOVE YOURSELF
        </footer>
      </div>
    </main>
  );
}

export default Login;