import { useNavigate } from "react-router-dom";

function Login() {
  const navigate = useNavigate();

  return (
    <main className="auth-page">

      <div className="auth-card">

        <div className="auth-brand">
          <span>FLY</span>
          <small>SHOWCASE</small>
        </div>

        <h1>Welcome Back</h1>

        <p className="auth-subtitle">
          Your runway journey starts here.
        </p>

        <form
          onSubmit={(event) => {
            event.preventDefault();
            navigate("/roles");
          }}
        >

          <label>Email</label>

          <input
            type="email"
            placeholder="Enter your email"
            required
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            required
          />

          <button type="submit" className="primary-button">
            SIGN IN
          </button>

        </form>

        <button
          className="text-button"
          onClick={() => navigate("/roles")}
        >
          Continue as Guest
        </button>

      </div>

    </main>
  );
}

export default Login;