import { useNavigate } from "react-router-dom";

function Schedule() {
  const navigate = useNavigate();

  const schedule = [
    {
      time: "8:30",
      period: "AM",
      title: "Talent Check-In",
      location: "Main Entrance",
      type: "CHECK-IN",
      status: "completed",
    },
    {
      time: "10:00",
      period: "AM",
      title: "Hair & Makeup",
      location: "Beauty Room A",
      type: "BEAUTY",
      status: "current",
    },
    {
      time: "12:00",
      period: "PM",
      title: "Designer Fitting",
      location: "Fitting Room 2",
      type: "FITTING",
      status: "upcoming",
    },
    {
      time: "1:30",
      period: "PM",
      title: "Runway Rehearsal",
      location: "Main Stage",
      type: "REHEARSAL",
      status: "upcoming",
    },
    {
      time: "4:30",
      period: "PM",
      title: "Final Look Check",
      location: "Backstage",
      type: "BACKSTAGE",
      status: "upcoming",
    },
    {
      time: "6:45",
      period: "PM",
      title: "Backstage Lineup",
      location: "Stage Entrance",
      type: "IMPORTANT",
      status: "upcoming",
    },
    {
      time: "7:00",
      period: "PM",
      title: "FLY Showcase",
      location: "Main Stage",
      type: "LIVE",
      status: "upcoming",
    },
  ];

  return (
    <main className="schedule-page">

      {/* HEADER */}

      <header className="schedule-header">

        <button
          className="back-button"
          onClick={() => navigate("/model")}
        >
          ←
        </button>

        <div>
          <span className="dashboard-brand">
            FLY SHOWCASE
          </span>

          <h1>
            My Schedule
          </h1>
        </div>

        <button className="calendar-button">
          ◫
        </button>

      </header>


      {/* DATE */}

      <section className="date-card">

        <div>
          <span>
            SATURDAY
          </span>

          <strong>
            AUGUST 8
          </strong>

          <small>
            2026
          </small>
        </div>

        <div className="date-number">
          08
        </div>

      </section>


      {/* SHOW STATUS */}

      <section className="schedule-status-banner">

        <div className="status-dot">
          ●
        </div>

        <div>
          <span>
            SHOW STATUS
          </span>

          <strong>
            PREPARATION
          </strong>
        </div>

        <span className="status-label">
          ON TRACK
        </span>

      </section>


      {/* TIMELINE */}

      <section className="timeline">

        {schedule.map((item, index) => (

          <div
            className={`timeline-item ${item.status}`}
            key={index}
          >

            {/* TIME */}

            <div className="timeline-time">

              <strong>
                {item.time}
              </strong>

              <span>
                {item.period}
              </span>

            </div>


            {/* LINE */}

            <div className="timeline-marker">

              <div className="timeline-dot">
                {item.status === "completed"
                  ? "✓"
                  : item.status === "current"
                  ? "•"
                  : ""}
              </div>

              {index !== schedule.length - 1 && (
                <div className="timeline-line" />
              )}

            </div>


            {/* EVENT */}

            <div className="timeline-card">

              <div className="timeline-card-top">

                <span className="event-type">
                  {item.type}
                </span>

                {item.status === "current" && (
                  <span className="now-label">
                    NOW
                  </span>
                )}

                {item.status === "completed" && (
                  <span className="completed-label">
                    DONE
                  </span>
                )}

              </div>

              <h2>
                {item.title}
              </h2>

              <p>
                ◇ {item.location}
              </p>

            </div>

          </div>

        ))}

      </section>


      {/* FOOTER NOTE */}

      <section className="schedule-note">

        <span>
          ✦
        </span>

        <div>
          <strong>
            Stay runway ready
          </strong>

          <p>
            You'll receive a notification when your
            next call time is approaching.
          </p>
        </div>

      </section>


      {/* BOTTOM NAV */}

      <nav className="bottom-nav">

        <button
          onClick={() => navigate("/model")}
        >
          <span>⌂</span>
          Home
        </button>

        <button className="active">
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

export default Schedule;