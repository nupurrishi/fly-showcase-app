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

const modelStatusClasses = {
  READY: "status-ready",
  BACKSTAGE: "status-backstage",
  WAITING: "status-waiting",
  LIVE: "status-live",
  ENDED: "status-ended",
};

function LiveShow() {
  const [currentStage, setCurrentStage] = useState(
    "HAIR & MAKEUP"
  );

  const [currentModel, setCurrentModel] = useState(null);
  const [showMessage, setShowMessage] = useState("");

  const showToast = (message) => {
    setShowMessage(message);

    setTimeout(() => {
      setShowMessage("");
    }, 2500);
  };

  const moveToNextStage = () => {
    const currentIndex = stages.indexOf(currentStage);

    if (currentIndex < stages.length - 1) {
      const nextStage = stages[currentIndex + 1];

      setCurrentStage(nextStage);
      showToast(`Show moved to ${nextStage}.`);
    }
  };

  const moveToPreviousStage = () => {
    const currentIndex = stages.indexOf(currentStage);

    if (currentIndex > 0) {
      const previousStage = stages[currentIndex - 1];

      setCurrentStage(previousStage);
      showToast(`Show moved to ${previousStage}.`);
    }
  };

  const callModel = (model) => {
    setCurrentModel(model);
    showToast(`${model.name} has been called.`);
  };

  const currentStageIndex =
    stages.indexOf(currentStage);

  return (
    <main className="live-show-page">
      {/* =========================================
          TOP BRAND BAR
      ========================================= */}

      <div className="login-brand-bar" />

      <div className="live-show-container">
        {/* =========================================
            HEADER
        ========================================= */}

        <header className="live-show-header">
          <div className="fly-logo">
            <div className="fly-logo-wordmark">
              FLY
            </div>

            <div className="fly-logo-tagline">
              SHOWCASE
            </div>
          </div>

          <div className="live-show-header-info">
            <div className="page-header-eyebrow">
              MANAGER CONTROL
            </div>

            <div className="live-show-header-title">
              Live Show
            </div>
          </div>
        </header>

        {/* =========================================
            LIVE HERO
        ========================================= */}

        <section className="live-show-hero">
          <div className="live-show-hero-top">
            <div>
              <div className="live-show-hero-eyebrow">
                LIVE SHOW CONTROL
              </div>

              <h1 className="live-show-hero-title">
                The Show Is
                <br />
                Moving.
              </h1>
            </div>

            <div className="live-show-live-badge">
              ● LIVE
            </div>
          </div>

          <p className="live-show-hero-description">
            Use this screen to keep the entire
            production moving from preparation
            through the final runway.
          </p>
        </section>

        {/* =========================================
            CURRENT SHOW STATUS
        ========================================= */}

        <section className="live-show-section">
          <div className="page-header-eyebrow">
            CURRENT SHOW STATUS
          </div>

          <h2 className="live-show-stage-title">
            {currentStage}
          </h2>

          {/* STAGE TRACKER */}

          <div className="live-show-stage-list">
            {stages.map((stage, index) => {
              const active =
                index === currentStageIndex;

              const completed =
                index < currentStageIndex;

              let stageClass =
                "live-show-stage";

              if (active) {
                stageClass +=
                  " live-show-stage-active";
              } else if (completed) {
                stageClass +=
                  " live-show-stage-completed";
              }

              return (
                <div
                  key={stage}
                  className={stageClass}
                >
                  <div className="live-show-stage-number">
                    {index + 1}
                  </div>

                  <div className="live-show-stage-name">
                    {stage}
                  </div>
                </div>
              );
            })}
          </div>

          {/* STAGE CONTROLS */}

          <div className="live-show-stage-controls">
            <button
              type="button"
              className="button button-ghost"
              onClick={moveToPreviousStage}
              disabled={currentStageIndex === 0}
            >
              ← PREVIOUS
            </button>

            <button
              type="button"
              className="button button-primary live-show-next-button"
              onClick={moveToNextStage}
              disabled={
                currentStageIndex ===
                stages.length - 1
              }
            >
              MOVE TO NEXT STAGE →
            </button>
          </div>
        </section>

        {/* =========================================
            RUNWAY NOW
        ========================================= */}

        <section className="live-show-runway-grid">
          {/* CURRENT MODEL */}

          <div className="live-show-runway-card live-show-runway-current">
            <div className="page-header-eyebrow">
              CURRENTLY ON RUNWAY
            </div>

            <h2 className="live-show-runway-title">
              {currentModel
                ? currentModel.name
                : "No Model"}
            </h2>

            <p className="live-show-runway-description">
              {currentModel
                ? `${currentModel.designer} • ${currentModel.look}`
                : "Waiting for runway call"}
            </p>
          </div>

          {/* NEXT MODEL */}

          <div className="live-show-runway-card live-show-runway-next">
            <div className="live-show-next-eyebrow">
              NEXT MODEL
            </div>

            <h2 className="live-show-runway-title">
              Model 02
            </h2>

            <p className="live-show-runway-description">
              Call time • 6:50 PM
            </p>
          </div>
        </section>

        {/* =========================================
            MODEL LINEUP
        ========================================= */}

        <section className="live-show-lineup">
          <div className="live-show-lineup-header">
            <div>
              <div className="page-header-eyebrow">
                MODEL LINEUP
              </div>

              <h2 className="live-show-lineup-title">
                Runway Queue
              </h2>
            </div>

            <div className="live-show-model-count">
              {models.length} models
            </div>
          </div>

          {models.map((model, index) => {
            const statusClass =
              modelStatusClasses[model.status] ||
              "status-ended";

            return (
              <article
                key={model.id}
                className="live-show-model-card"
              >
                <div className="live-show-model-info">
                  {/* NUMBER */}

                  <div
                    className={`live-show-model-number ${
                      index === 0
                        ? "live-show-model-number-active"
                        : ""
                    }`}
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  {/* MODEL DETAILS */}

                  <div className="live-show-model-details">
                    <div className="live-show-model-name">
                      {model.name}
                    </div>

                    <div className="live-show-model-meta">
                      {model.designer} •{" "}
                      {model.look}
                    </div>
                  </div>

                  {/* STATUS */}

                  <div
                    className={`status-badge ${statusClass}`}
                  >
                    {model.status}
                  </div>
                </div>

                {/* CALL BUTTON */}

                <button
                  type="button"
                  className="button button-secondary button-full button-small"
                  onClick={() => callModel(model)}
                >
                  CALL{" "}
                  {model.name.toUpperCase()}
                </button>
              </article>
            );
          })}
        </section>

        {/* =========================================
            QUICK ACTIONS
        ========================================= */}

        <section className="live-show-quick-actions">
          <div className="page-header-eyebrow">
            QUICK ACTIONS
          </div>

          <div className="grid grid-auto">
            <button
              type="button"
              className="quick-action"
              onClick={() =>
                (window.location.href =
                  "/model-calls")
              }
            >
              <span className="quick-action-content">
                <span className="quick-action-label">
                  MODEL CALLS
                </span>
              </span>

              <span className="quick-action-arrow">
                →
              </span>
            </button>

            <button
              type="button"
              className="quick-action"
              onClick={() =>
                (window.location.href =
                  "/hair-makeup")
              }
            >
              <span className="quick-action-content">
                <span className="quick-action-label">
                  HAIR & MAKEUP
                </span>
              </span>

              <span className="quick-action-arrow">
                →
              </span>
            </button>

            <button
              type="button"
              className="quick-action"
              onClick={() =>
                (window.location.href =
                  "/schedule")
              }
            >
              <span className="quick-action-content">
                <span className="quick-action-label">
                  SCHEDULE
                </span>
              </span>

              <span className="quick-action-arrow">
                →
              </span>
            </button>
          </div>
        </section>

        {/* =========================================
            FOOTER
        ========================================= */}

        <footer className="live-show-footer">
          <div className="live-show-footer-title">
            First Love Yourself
          </div>

          <div className="live-show-footer-subtitle">
            FLY SHOWCASE
          </div>
        </footer>
      </div>

      {/* =========================================
          TOAST
      ========================================= */}

      {showMessage && (
        <div className="toast">
          {showMessage}
        </div>
      )}
    </main>
  );
}

export default LiveShow;
