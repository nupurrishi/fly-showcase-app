import { useNavigate } from "react-router-dom";

function AdminDashboard() {
  const navigate = useNavigate();

  return (
    <main className="admin-page">

      {/* HEADER */}
      <header className="admin-header">

        <div>
          <span className="dashboard-brand">
            FLY SHOWCASE
          </span>

          <h1>
            Production Hub
          </h1>

          <p>
            Manage today's showcase.
          </p>
        </div>

        <div className="admin-profile">
          A
        </div>

      </header>


      {/* LIVE SHOW CONTROL */}

      <section className="show-control">

        <div className="control-header">

          <div>
            <span className="eyebrow">
              LIVE SHOW CONTROL
            </span>

            <h2>
              PREPARATION
            </h2>

            <p>
              The team is preparing for today's showcase.
            </p>
          </div>

          <span className="control-live">
            ● LIVE
          </span>

        </div>


        <div className="show-phases">

          <button className="phase active">
            <span>01</span>
            Preparation
          </button>

          <button className="phase">
            <span>02</span>
            Hair & Makeup
          </button>

          <button className="phase">
            <span>03</span>
            Backstage
          </button>

          <button className="phase">
            <span>04</span>
            Runway
          </button>

          <button className="phase">
            <span>05</span>
            Finale
          </button>

        </div>

      </section>


      {/* QUICK STATS */}

      <section className="admin-stats">

        <div className="stat-card">
          <span>✦</span>
          <strong>84</strong>
          <p>Models & Talent</p>
        </div>

        <div className="stat-card">
          <span>◇</span>
          <strong>13</strong>
          <p>Designers</p>
        </div>

        <div className="stat-card">
          <span>◷</span>
          <strong>27</strong>
          <p>Scheduled Calls</p>
        </div>

        <div className="stat-card">
          <span>♢</span>
          <strong>03</strong>
          <p>Pending Alerts</p>
        </div>

      </section>


      {/* MAIN TOOLS */}

      <section className="admin-tools">

        <div className="admin-section-heading">
          <div>
            <span className="eyebrow dark">
              BACKSTAGE
            </span>

            <h2>
              Production Tools
            </h2>
          </div>
        </div>


        <div className="tool-grid">

          <button className="tool-card">

            <div className="tool-icon">
              ✦
            </div>

            <div>
              <h3>
                Model Call Board
              </h3>

              <p>
                See who needs to be backstage
                and when.
              </p>
            </div>

            <span className="tool-arrow">
              →
            </span>

          </button>


          <button
            className="tool-card"
            onClick={() => navigate("/schedule")}
          >

            <div className="tool-icon">
              ◷
            </div>

            <div>
              <h3>
                Schedule Builder
              </h3>

              <p>
                Create and manage show schedules.
              </p>
            </div>

            <span className="tool-arrow">
              →
            </span>

          </button>


          <button className="tool-card">

            <div className="tool-icon">
              ◇
            </div>

            <div>
              <h3>
                Talent Management
              </h3>

              <p>
                View models, designers and assignments.
              </p>
            </div>

            <span className="tool-arrow">
              →
            </span>

          </button>


          <button className="tool-card">

            <div className="tool-icon">
              ♢
            </div>

            <div>
              <h3>
                Send Announcement
              </h3>

              <p>
                Send an update to the entire team.
              </p>
            </div>

            <span className="tool-arrow">
              →
            </span>

          </button>


          <button className="tool-card">

            <div className="tool-icon">
              ▣
            </div>

            <div>
              <h3>
                Check-In
              </h3>

              <p>
                Monitor talent arrivals and attendance.
              </p>
            </div>

            <span className="tool-arrow">
              →
            </span>

          </button>


          <button className="tool-card">

            <div className="tool-icon">
              ◎
            </div>

            <div>
              <h3>
                Show Reports
              </h3>

              <p>
                Review performance and production data.
              </p>
            </div>

            <span className="tool-arrow">
              →
            </span>

          </button>

        </div>

      </section>


      {/* UPCOMING CALLS */}

      <section className="admin-calls">

        <div className="admin-section-heading">

          <div>
            <span className="eyebrow dark">
              NEXT UP
            </span>

            <h2>
              Upcoming Calls
            </h2>
          </div>

          <button>
            View all
          </button>

        </div>


        <div className="call-list">

          <div className="call-row">

            <div className="call-time">
              10:00
              <small>AM</small>
            </div>

            <div>
              <strong>
                Hair & Makeup
              </strong>

              <p>
                18 models • Beauty Room A
              </p>
            </div>

            <span>
              IN 24 MIN
            </span>

          </div>


          <div className="call-row">

            <div className="call-time">
              1:30
              <small>PM</small>
            </div>

            <div>
              <strong>
                Runway Rehearsal
              </strong>

              <p>
                All models • Main Stage
              </p>
            </div>

            <span>
              UPCOMING
            </span>

          </div>


          <div className="call-row">

            <div className="call-time">
              6:45
              <small>PM</small>
            </div>

            <div>
              <strong>
                Backstage Lineup
              </strong>

              <p>
                First 20 models • Stage Entrance
              </p>
            </div>

            <span className="important">
              IMPORTANT
            </span>

          </div>

        </div>

      </section>


      {/* BOTTOM NAV */}

      <nav className="bottom-nav admin-nav">

        <button className="active">
          <span>⌂</span>
          Overview
        </button>

        <button>
          <span>✦</span>
          Talent
        </button>

        <button
          onClick={() => navigate("/schedule")}
        >
          <span>◷</span>
          Schedule
        </button>

        <button>
          <span>♢</span>
          Alerts
        </button>

      </nav>

    </main>
  );
}

export default AdminDashboard;