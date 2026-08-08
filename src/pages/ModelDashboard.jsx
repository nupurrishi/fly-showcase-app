import { useNavigate } from "react-router-dom";

function ModelDashboard() {
  // Temporary test model.
  // Later, Supabase will provide this information automatically.
  const model = {
    firstName: "Maya",
    initial: "M",
  };

  const navigate = useNavigate();

  return (
    <main className="dashboard-page">

      {/* HEADER */}
      <header className="dashboard-header">
        <div>
          <span className="dashboard-brand">
            FLY SHOWCASE
          </span>

          <h1>
            Good evening, {model.firstName}.
          </h1>

          <p className="welcome-text">
            Here's what's happening with your showcase.
          </p>
        </div>

        <button className="profile-circle">
          {model.initial}
        </button>
      </header>


      {/* LIVE SHOW STATUS */}
      <section className="live-banner">
        <div>
          <span className="live-dot">●</span>
          <span> SHOW STATUS</span>
        </div>

        <strong>PREPARATION</strong>

        <p>
          The team is getting ready for the showcase.
        </p>
      </section>


      {/* NEXT SHOW */}
      <section className="show-card">

        <span className="eyebrow">
          NEXT SHOW
        </span>

        <h2>
          FLY Showcase — Season 4
        </h2>

        <p>
          Your runway experience begins soon.
        </p>

        <div className="countdown">

          <div>
            <strong>02</strong>
            <span>DAYS</span>
          </div>

          <div>
            <strong>14</strong>
            <span>HOURS</span>
          </div>

          <div>
            <strong>36</strong>
            <span>MIN</span>
          </div>

        </div>

      </section>


      {/* QUICK ACTIONS */}
      <section className="quick-actions">

        <button onClick={() => navigate("/schedule")}>
          <span>◷</span>
          <strong>My Schedule</strong>
          <small>View your day</small>
        </button>

        <button onClick={() => navigate("/lookbook")}>
          <span>◇</span>
          <strong>My Lookbook</strong>
          <small>View your outfits</small>
        </button>

        <button>
          <span>♢</span>
          <strong>Notifications</strong>
          <small>3 new updates</small>
        </button>

      </section>


      {/* TODAY'S SCHEDULE */}
      <section className="dashboard-section">

        <div className="section-heading">

          <div>
            <span className="eyebrow dark">
              TODAY
            </span>

            <h2>
              Your Schedule
            </h2>
          </div>

          <button
            className="view-button"
            onClick={() => navigate("/schedule")}
          >
            View all
          </button>

        </div>


        <div className="schedule-list">

          {/* HAIR & MAKEUP */}
          <div className="schedule-item">

            <div className="time">
              <strong>10:00</strong>
              <span>AM</span>
            </div>

            <div className="schedule-icon">
              ✦
            </div>

            <div className="schedule-info">
              <h3>Hair & Makeup</h3>
              <p>Beauty Room A</p>
            </div>

            <span className="schedule-status">
              UPCOMING
            </span>

          </div>


          {/* RUNWAY REHEARSAL */}
          <div className="schedule-item">

            <div className="time">
              <strong>1:30</strong>
              <span>PM</span>
            </div>

            <div className="schedule-icon">
              ◇
            </div>

            <div className="schedule-info">
              <h3>Runway Rehearsal</h3>
              <p>Main Stage</p>
            </div>

            <span className="schedule-status">
              UPCOMING
            </span>

          </div>


          {/* BACKSTAGE */}
          <div className="schedule-item">

            <div className="time">
              <strong>6:45</strong>
              <span>PM</span>
            </div>

            <div className="schedule-icon">
              ◆
            </div>

            <div className="schedule-info">
              <h3>Backstage Lineup</h3>
              <p>Stage Entrance</p>
            </div>

            <span className="schedule-status urgent">
              IMPORTANT
            </span>

          </div>

        </div>

      </section>


      {/* TODAY'S LOOK */}
      <section className="outfit-card">

        <div>

          <span className="eyebrow dark">
            TODAY'S LOOK
          </span>

          <h2>
            Designer Look #07
          </h2>

          <p>
            Your assigned runway look.
          </p>

          <button
            onClick={() => navigate("/lookbook")}
          >
            Open Lookbook →
          </button>

        </div>

        <div className="outfit-placeholder">
          FLY
        </div>

      </section>


      {/* BOTTOM NAVIGATION */}
      <nav className="bottom-nav">

        <button className="active">
          <span>⌂</span>
          Home
        </button>

        <button
          onClick={() => navigate("/schedule")}
        >
          <span>◷</span>
          Schedule
        </button>

        <button
          onClick={() => navigate("/lookbook")}
        >
          <span>◇</span>
          Lookbook
        </button>

        <button>
          <span>♢</span>
          Alerts
        </button>

      </nav>

    </main>
  );
}

export default ModelDashboard;