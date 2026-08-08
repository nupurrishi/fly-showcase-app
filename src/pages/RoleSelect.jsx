import { useNavigate } from "react-router-dom";

function RoleSelect() {
  const navigate = useNavigate();

  return (
    <main className="role-page">

      <div className="role-container">

        <div className="brand-small">
          FLY SHOWCASE
        </div>

        <h1>Welcome to FLY</h1>

        <p>
          How will you be joining us?
        </p>

        <div className="role-grid">

          <button
            className="role-card"
            onClick={() => navigate("/model")}
          >
            <span className="role-icon">✦</span>

            <h2>Model / Talent</h2>

            <p>
              View your schedule, looks,
              call times and runway details.
            </p>
          </button>

          <button
            className="role-card"
            onClick={() => navigate("/admin")}
          >
            <span className="role-icon">◆</span>

            <h2>Production / Admin</h2>

            <p>
              Manage talent, schedules,
              backstage and live show updates.
            </p>
          </button>

        </div>

      </div>

    </main>
  );
}

export default RoleSelect;