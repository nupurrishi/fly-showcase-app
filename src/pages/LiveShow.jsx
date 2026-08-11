import { useState } from "react";

const stages = [
  "PREP",
  "HAIR & MAKEUP",
  "BACKSTAGE LINEUP",
  "LIVE ON RUNWAY",
  "RUNWAY ENDED",
];

const models = [
  {
    id: 1,
    name: "Model 01",
    designer: "Designer 01",
    look: "Look 01",
    status: "READY",
  },
  {
    id: 2,
    name: "Model 02",
    designer: "Designer 02",
    look: "Look 04",
    status: "READY",
  },
  {
    id: 3,
    name: "Model 03",
    designer: "Designer 03",
    look: "Look 02",
    status: "BACKSTAGE",
  },
  {
    id: 4,
    name: "Model 04",
    designer: "Designer 04",
    look: "Look 07",
    status: "READY",
  },
  {
    id: 5,
    name: "Model 05",
    designer: "Designer 05",
    look: "Look 03",
    status: "WAITING",
  },
];

function LiveShow() {
  const [currentStage, setCurrentStage] =
    useState("HAIR & MAKEUP");

  const [currentModel, setCurrentModel] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const currentStageIndex =
    stages.indexOf(currentStage);

  function showMessage(text) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  function nextStage() {
    if (currentStageIndex < stages.length - 1) {
      const nextStage =
        stages[currentStageIndex + 1];

      setCurrentStage(nextStage);
      showMessage(`Show moved to ${nextStage}`);
    }
  }

  function previousStage() {
    if (currentStageIndex > 0) {
      const previousStage =
        stages[currentStageIndex - 1];

      setCurrentStage(previousStage);
      showMessage(`Show moved to ${previousStage}`);
    }
  }

  function callModel(model) {
    setCurrentModel(model);
    showMessage(`${model.name} has been called`);
  }

  return (
    <main className="page">
      <div className="brand-bar" />

      <div className="page-container">
        {/* HEADER */}

        <header className="page-header">
          <div className="logo">
            <div className="logo-wordmark">
              FLY
            </div>

            <div className="logo-tagline">
              SHOWCASE
            </div>
          </div>

          <div className="page-header-info">
            <div className="eyebrow">
              MANAGER CONTROL
            </div>

            <div className="page-header-title">
              Live Show
            </div>
          </div>
        </header>

        {/* HERO */}

        <section className="hero hero-dark">
          <div className="hero-top">
            <div>
              <div className="eyebrow eyebrow-gold">
                LIVE SHOW CONTROL
              </div>

              <h1 className="hero-title">
                The Show Is
                <br />
                Moving.
              </h1>
            </div>

            <div className="badge badge-live">
              ● LIVE
            </div>
          </div>

          <p className="hero-description">
            Keep the entire production moving from
            preparation through the final runway.
          </p>
        </section>

        {/* CURRENT STAGE */}

        <section className="section">
          <div className="eyebrow">
            CURRENT SHOW STATUS
          </div>

          <h2 className="section-title">
            {currentStage}
          </h2>

          <div className="stage-grid">
            {stages.map((stage, index) => {
              const active =
                index === currentStageIndex;

              const completed =
                index < currentStageIndex;

              return (
                <div
                  key={stage}
                  className={`stage-card ${
                    active
                      ? "stage-active"
                      : completed
                      ? "stage-completed"
                      : ""
                  }`}
                >
                  <div className="stage-number">
                    {completed
                      ? "✓"
                      : `0${index + 1}`}
                  </div>

                  <div className="stage-name">
                    {stage}
                  </div>
                </div>
              );
            })}
          </div>

          <div className="button-row">
            <button
              className="button button-ghost"
              onClick={previousStage}
              disabled={currentStageIndex === 0}
            >
              ← PREVIOUS
            </button>

            <button
              className="button button-primary"
              onClick={nextStage}
              disabled={
                currentStageIndex ===
                stages.length - 1
              }
            >
              MOVE TO NEXT STAGE →
            </button>
          </div>
        </section>

        {/* RUNWAY */}

        <section className="two-column">
          <div className="card card-dark">
            <div className="eyebrow eyebrow-gold">
              CURRENTLY ON RUNWAY
            </div>

            <h2 className="card-title">
              {currentModel
                ? currentModel.name
                : "No Model"}
            </h2>

            <p className="card-text">
              {currentModel
                ? `${currentModel.designer} • ${currentModel.look}`
                : "Waiting for runway call"}
            </p>
          </div>

          <div className="card card-purple">
            <div className="eyebrow">
              NEXT MODEL
            </div>

            <h2 className="card-title">
              Model 02
            </h2>

            <p className="card-text">
              Call time • 6:50 PM
            </p>
          </div>
        </section>

        {/* MODEL LINEUP */}

        <section className="section">
          <div className="section-heading">
            <div>
              <div className="eyebrow">
                MODEL LINEUP
              </div>

              <h2 className="section-title">
                Runway Queue
              </h2>
            </div>

            <div className="muted">
              {models.length} MODELS
            </div>
          </div>

          <div className="list">
            {models.map((model, index) => (
              <article
                key={model.id}
                className="list-item"
              >
                <div
                  className={`list-number ${
                    index === 0
                      ? "list-number-active"
                      : ""
                  }`}
                >
                  {String(index + 1).padStart(
                    2,
                    "0"
                  )}
                </div>

                <div className="list-content">
                  <div className="list-title">
                    {model.name}
                  </div>

                  <div className="list-meta">
                    {model.designer} •{" "}
                    {model.look}
                  </div>
                </div>

                <div
                  className={`status status-${model.status.toLowerCase()}`}
                >
                  ● {model.status}
                </div>

                <button
                  className="button button-dark button-small"
                  onClick={() =>
                    callModel(model)
                  }
                >
                  CALL MODEL
                </button>
              </article>
            ))}
          </div>
        </section>

        {/* QUICK ACTIONS */}

        <section className="section">
          <div className="eyebrow">
            QUICK ACTIONS
          </div>

          <div className="quick-actions">
            <button
              className="quick-action"
              onClick={() =>
                (window.location.href =
                  "/hair-makeup")
              }
            >
              HAIR & MAKEUP →
            </button>

            <button
              className="quick-action"
              onClick={() =>
                (window.location.href =
                  "/schedule")
              }
            >
              SCHEDULE →
            </button>

            <button
              className="quick-action"
              onClick={() =>
                (window.location.href =
                  "/model")
              }
            >
              MODEL DASHBOARD →
            </button>
          </div>
        </section>

        {/* FOOTER */}

        <footer className="page-footer">
          <div className="footer-title">
            First Love Yourself
          </div>

          <div className="footer-subtitle">
            FLY SHOWCASE
          </div>
        </footer>
      </div>

      {message && (
        <div className="toast">
          {message}
        </div>
      )}
    </main>
  );
}

export default LiveShow;
