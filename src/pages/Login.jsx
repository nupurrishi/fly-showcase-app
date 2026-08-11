import { useState } from "react";

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
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: "#FFFFFF",
        color: "#161616",
        fontFamily: '"PT Sans", Arial, sans-serif',
      }}
    >
      {/* =========================================
          BRAND BAR
      ========================================= */}

      <div
        style={{
          width: "100%",
          height: "7px",
          backgroundColor: "#81247C",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          margin: "0 auto",
          padding: "42px 22px 50px",
        }}
      >
        {/* =========================================
            HEADER / LOGO
        ========================================= */}

        <header
          style={{
            textAlign: "center",
            marginBottom: "52px",
          }}
        >
          <div
            style={{
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "56px",
              lineHeight: "0.8",
              fontWeight: "600",
              color: "#81247C",
            }}
          >
            FLY
          </div>

          <div
            style={{
              marginTop: "12px",
              fontSize: "9px",
              letterSpacing: "4px",
              fontWeight: "700",
              color: "#161616",
            }}
          >
            SHOWCASE
          </div>
        </header>

        {/* =========================================
            INTRO
        ========================================= */}

        <section
          style={{
            marginBottom: "35px",
          }}
        >
          <div
            style={{
              display: "inline-block",
              backgroundColor: "#81247C",
              color: "#FFFFFF",
              padding: "7px 12px",
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "18px",
            }}
          >
            WELCOME BACK
          </div>

          <h1
            style={{
              margin: 0,
              fontFamily: '"Cormorant Garamond", Georgia, serif',
              fontSize: "clamp(48px, 13vw, 62px)",
              lineHeight: "0.85",
              fontWeight: "500",
              color: "#161616",
            }}
          >
            Your fashion
            <br />
            <span style={{ color: "#81247C" }}>
              world awaits.
            </span>
          </h1>

          <p
            style={{
              marginTop: "22px",
              color: "#777777",
              fontSize: "13px",
              lineHeight: "1.7",
            }}
          >
            Sign in to access your schedule, runway calls,
            lookbooks and backstage updates.
          </p>
        </section>

        {/* =========================================
            LOGIN CARD
        ========================================= */}

        <section
          style={{
            backgroundColor: "#161616",
            padding: "26px 22px 25px",
            borderTop: "5px solid #81247C",
          }}
        >
          <div
            style={{
              color: "#DEB64B",
              fontSize: "9px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "25px",
            }}
          >
            SIGN IN
          </div>

          <form onSubmit={handleLogin}>
            {/* EMAIL */}

            <div
              style={{
                marginBottom: "19px",
              }}
            >
              <label
                htmlFor="email"
                style={{
                  display: "block",
                  color: "#FFFFFF",
                  fontSize: "9px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  marginBottom: "8px",
                }}
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
                style={{
                  width: "100%",
                  height: "52px",
                  border: "none",
                  backgroundColor: "#FFFFFF",
                  color: "#161616",
                  padding: "0 14px",
                  fontFamily: '"PT Sans", Arial, sans-serif',
                  fontSize: "13px",
                  outline: "none",
                }}
              />
            </div>

            {/* PASSWORD */}

            <div
              style={{
                marginBottom: "10px",
              }}
            >
              <label
                htmlFor="password"
                style={{
                  display: "block",
                  color: "#FFFFFF",
                  fontSize: "9px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  marginBottom: "8px",
                }}
              >
                PASSWORD
              </label>

              <div
                style={{
                  position: "relative",
                }}
              >
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
                  style={{
                    width: "100%",
                    height: "52px",
                    border: "none",
                    backgroundColor: "#FFFFFF",
                    color: "#161616",
                    padding: "0 70px 0 14px",
                    fontFamily: '"PT Sans", Arial, sans-serif',
                    fontSize: "13px",
                    outline: "none",
                  }}
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  style={{
                    position: "absolute",
                    right: 0,
                    top: 0,
                    height: "52px",
                    width: "65px",
                    border: "none",
                    backgroundColor: "transparent",
                    color: "#81247C",
                    fontSize: "9px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                  }}
                >
                  {showPassword ? "HIDE" : "SHOW"}
                </button>
              </div>
            </div>

            {/* FORGOT PASSWORD */}

            <div
              style={{
                display: "flex",
                justifyContent: "flex-end",
                marginBottom: "24px",
              }}
            >
              <button
                type="button"
                onClick={handleForgotPassword}
                style={{
                  border: "none",
                  backgroundColor: "transparent",
                  color: "#DEB64B",
                  padding: 0,
                  fontSize: "9px",
                  fontWeight: "700",
                  letterSpacing: "1px",
                }}
              >
                FORGOT PASSWORD?
              </button>
            </div>

            {/* SIGN IN BUTTON */}

            <button
              type="submit"
              style={{
                width: "100%",
                height: "54px",
                border: "none",
                backgroundColor: "#DEB64B",
                color: "#161616",
                fontFamily: '"PT Sans", Arial, sans-serif',
                fontSize: "10px",
                fontWeight: "700",
                letterSpacing: "2px",
              }}
            >
              SIGN IN
            </button>
          </form>

          {/* MESSAGE */}

          {message && (
            <div
              style={{
                marginTop: "16px",
                padding: "12px",
                backgroundColor: "#81247C",
                color: "#FFFFFF",
                fontSize: "10px",
                lineHeight: "1.5",
              }}
            >
              {message}
            </div>
          )}
        </section>

        {/* =========================================
            ACCESS INFORMATION
        ========================================= */}

        <div
          style={{
            marginTop: "20px",
            padding: "16px",
            border: "1px solid #EEEEEE",
            borderLeft: "4px solid #DEB64B",
            backgroundColor: "#FFFFFF",
          }}
        >
          <p
            style={{
              margin: 0,
              color: "#777777",
              fontSize: "10px",
              lineHeight: "1.6",
            }}
          >
            Your access is managed by the Fly Showcase
            team. Your role, designer and event access
            will be assigned to your registered email.
          </p>
        </div>

        {/* =========================================
            REQUEST ACCESS
        ========================================= */}

        <section
          style={{
            marginTop: "42px",
            paddingTop: "30px",
            borderTop: "1px solid #EEEEEE",
            textAlign: "center",
          }}
        >
          <p
            style={{
              margin: "0 0 14px",
              color: "#777777",
              fontSize: "11px",
            }}
          >
            Don't have access yet?
          </p>

          <button
            type="button"
            onClick={handleRequestAccess}
            style={{
              border: "1px solid #81247C",
              backgroundColor: "#FFFFFF",
              color: "#81247C",
              padding: "13px 24px",
              fontSize: "9px",
              fontWeight: "700",
              letterSpacing: "1.5px",
            }}
          >
            REQUEST ACCESS
          </button>
        </section>

        {/* =========================================
            FOOTER
        ========================================= */}

        <footer
          style={{
            textAlign: "center",
            marginTop: "55px",
            color: "#777777",
            fontSize: "8px",
            letterSpacing: "2px",
          }}
        >
          <span
            style={{
              color: "#81247C",
              fontWeight: "700",
            }}
          >
            FLY
          </span>

          {" "}• FIRST LOVE YOURSELF
        </footer>
      </div>
    </main>
  );
}

export default Login;