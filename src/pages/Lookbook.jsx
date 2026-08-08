import { useNavigate } from "react-router-dom";

function Lookbook() {
  const navigate = useNavigate();

  const looks = [
    {
      number: "01",
      designer: "Designer One",
      title: "Opening Look",
      category: "RUNWAY",
      status: "READY",
      description: "Your opening runway look.",
    },
    {
      number: "02",
      designer: "Designer Two",
      title: "Editorial Look",
      category: "EDITORIAL",
      status: "FITTING",
      description: "Second look for the showcase.",
    },
    {
      number: "03",
      designer: "Designer Three",
      title: "Finale Look",
      category: "FINALE",
      status: "UPCOMING",
      description: "Your finale runway look.",
    },
  ];

  return (
    <main className="lookbook-page">

      {/* HEADER */}

      <header className="lookbook-header">

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
            My Lookbook
          </h1>
        </div>

        <div className="look-count">
          03
          <span>LOOKS</span>
        </div>

      </header>


      {/* INTRO */}

      <section className="lookbook-intro">

        <span className="eyebrow dark">
          YOUR RUNWAY
        </span>

        <h2>
          Every look tells a story.
        </h2>

        <p>
          Keep track of your assigned looks,
          fittings and runway details.
        </p>

      </section>


      {/* LOOKS */}

      <section className="lookbook-grid">

        {looks.map((look) => (

          <article
            className="look-card"
            key={look.number}
          >

            {/* IMAGE PLACEHOLDER */}

            <div className="look-image">

              <span>
                FLY
              </span>

              <div className="look-number">
                {look.number}
              </div>

            </div>


            {/* DETAILS */}

            <div className="look-details">

              <div className="look-top">

                <span className="event-type">
                  {look.category}
                </span>

                <span
                  className={`look-status ${look.status
                    .toLowerCase()
                    .replace(" ", "-")}`}
                >
                  {look.status}
                </span>

              </div>

              <h2>
                {look.title}
              </h2>

              <h3>
                {look.designer}
              </h3>

              <p>
                {look.description}
              </p>

              <button className="details-button">
                VIEW DETAILS →
              </button>

            </div>

          </article>

        ))}

      </section>


      {/* RUNWAY NOTE */}

      <section className="lookbook-note">

        <div className="note-icon">
          ✦
        </div>

        <div>
          <strong>
            Fitting reminder
          </strong>

          <p>
            Your next fitting is scheduled for
            12:00 PM in Fitting Room 2.
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

        <button
          onClick={() => navigate("/schedule")}
        >
          <span>◷</span>
          Schedule
        </button>

        <button className="active">
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

export default Lookbook;