import React, { useState } from "react";

const COLORS = {
  black: "#161616",
  purple: "#81247C",
  gold: "#DEB64B",
  white: "#FFFFFF",
  lightPurple: "#F5EAF4",
  lightGold: "#F8F3E5",
  border: "#E8E8E8",
  gray: "#777777",
  green: "#2F7D5B",
  lightGreen: "#EAF5EF",
  red: "#B33A3A",
};

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

const modelStatusStyles = {
  READY: {
    background: COLORS.lightGreen,
    color: COLORS.green,
  },
  BACKSTAGE: {
    background: COLORS.lightPurple,
    color: COLORS.purple,
  },
  WAITING: {
    background: COLORS.lightGold,
    color: "#806313",
  },
  LIVE: {
    background: COLORS.black,
    color: COLORS.gold,
  },
  ENDED: {
    background: "#EEEEEE",
    color: COLORS.gray,
  },
};

function LiveShow() {
  const [currentStage, setCurrentStage] = useState(
    "HAIR & MAKEUP"
  );

  const [currentModel, setCurrentModel] = useState(null);

  const [showMessage, setShowMessage] = useState("");

  function moveToNextStage() {
    const currentIndex = stages.indexOf(currentStage);

    if (currentIndex < stages.length - 1) {
      const nextStage = stages[currentIndex + 1];

      setCurrentStage(nextStage);

      setShowMessage(`Show moved to ${nextStage}.`);

      setTimeout(() => {
        setShowMessage("");
      }, 2500);
    }
  }

  function moveToPreviousStage() {
    const currentIndex = stages.indexOf(currentStage);

    if (currentIndex > 0) {
      const previousStage = stages[currentIndex - 1];

      setCurrentStage(previousStage);

      setShowMessage(`Show moved to ${previousStage}.`);

      setTimeout(() => {
        setShowMessage("");
      }, 2500);
    }
  }

  function callModel(model) {
    setCurrentModel(model);

    setShowMessage(`${model.name} has been called.`);

    setTimeout(() => {
      setShowMessage("");
    }, 2500);
  }

  const currentStageIndex =
    stages.indexOf(currentStage);

  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: COLORS.white,
        color: COLORS.black,
        fontFamily:
          '"PT Sans", Arial, sans-serif',
      }}
    >
      {/* PURPLE TOP BAR */}

      <div
        style={{
          height: "7px",
          width: "100%",
          backgroundColor: COLORS.purple,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1050px",
          margin: "0 auto",
          padding: "24px 20px 80px",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}

        <header
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "20px",
            marginBottom: "30px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                color: COLORS.purple,
                fontSize: "38px",
                lineHeight: "0.8",
                fontWeight: "600",
              }}
            >
              FLY
            </div>

            <div
              style={{
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "3px",
                marginTop: "9px",
              }}
            >
              SHOWCASE
            </div>
          </div>

          <div
            style={{
              textAlign: "right",
            }}
          >
            <div
              style={{
                color: COLORS.purple,
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "1.5px",
              }}
            >
              MANAGER CONTROL
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "23px",
                marginTop: "4px",
              }}
            >
              Live Show
            </div>
          </div>
        </header>

        {/* LIVE HERO */}

        <section
          style={{
            backgroundColor: COLORS.black,
            color: COLORS.white,
            padding: "28px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "flex-start",
              gap: "15px",
            }}
          >
            <div>
              <div
                style={{
                  color: COLORS.gold,
                  fontSize: "8px",
                  fontWeight: "700",
                  letterSpacing: "2px",
                  marginBottom: "8px",
                }}
              >
                LIVE SHOW CONTROL
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "43px",
                  lineHeight: "0.95",
                }}
              >
                The Show Is
                <br />
                Moving.
              </div>
            </div>

            <div
              style={{
                backgroundColor: COLORS.purple,
                padding: "9px 12px",
                fontSize: "7px",
                fontWeight: "700",
                whiteSpace: "nowrap",
              }}
            >
              ● LIVE
            </div>
          </div>

          <div
            style={{
              color: "#BBBBBB",
              fontSize: "9px",
              lineHeight: "1.5",
              marginTop: "12px",
              maxWidth: "500px",
            }}
          >
            Use this screen to keep the entire
            production moving from preparation
            through the final runway.
          </div>
        </section>

        {/* CURRENT STAGE */}

        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            padding: "22px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              color: COLORS.purple,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "1.5px",
            }}
          >
            CURRENT SHOW STATUS
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "38px",
              marginTop: "5px",
              lineHeight: "1",
            }}
          >
            {currentStage}
          </div>

          <div
            style={{
              display: "flex",
              gap: "5px",
              marginTop: "20px",
              overflowX: "auto",
              paddingBottom: "5px",
            }}
          >
            {stages.map((stage, index) => {
              const active = index === currentStageIndex;
              const completed =
                index < currentStageIndex;

              return (
                <div
                  key={stage}
                  style={{
                    flex: "1 0 105px",
                    minHeight: "50px",
                    padding: "9px",
                    boxSizing: "border-box",
                    backgroundColor: active
                      ? COLORS.purple
                      : completed
                      ? COLORS.lightPurple
                      : "#F7F7F7",
                    color: active
                      ? COLORS.white
                      : completed
                      ? COLORS.purple
                      : COLORS.gray,
                    border:
                      `1px solid ${
                        active
                          ? COLORS.purple
                          : COLORS.border
                      }`,
                  }}
                >
                  <div
                    style={{
                      fontSize: "7px",
                      fontWeight: "700",
                    }}
                  >
                    {index + 1}
                  </div>

                  <div
                    style={{
                      fontSize: "7px",
                      fontWeight: "700",
                      marginTop: "5px",
                      lineHeight: "1.2",
                    }}
                  >
                    {stage}
                  </div>
                </div>
              );
            })}
          </div>

          {/* STAGE CONTROLS */}

          <div
            style={{
              display: "flex",
              gap: "8px",
              marginTop: "18px",
            }}
          >
            <button
              type="button"
              onClick={moveToPreviousStage}
              disabled={currentStageIndex === 0}
              style={{
                flex: 1,
                minHeight: "44px",
                border:
                  `1px solid ${COLORS.border}`,
                backgroundColor:
                  COLORS.white,
                color:
                  currentStageIndex === 0
                    ? "#BBBBBB"
                    : COLORS.black,
                cursor:
                  currentStageIndex === 0
                    ? "default"
                    : "pointer",
                fontSize: "8px",
                fontWeight: "700",
              }}
            >
              ← PREVIOUS
            </button>

            <button
              type="button"
              onClick={moveToNextStage}
              disabled={
                currentStageIndex ===
                stages.length - 1
              }
              style={{
                flex: 2,
                minHeight: "44px",
                border: "none",
                backgroundColor:
                  currentStageIndex ===
                  stages.length - 1
                    ? "#CCCCCC"
                    : COLORS.purple,
                color: COLORS.white,
                cursor:
                  currentStageIndex ===
                  stages.length - 1
                    ? "default"
                    : "pointer",
                fontSize: "8px",
                fontWeight: "700",
              }}
            >
              MOVE TO NEXT STAGE →
            </button>
          </div>
        </section>

        {/* RUNWAY NOW */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(260px, 1fr))",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              backgroundColor:
                COLORS.lightPurple,
              padding: "22px",
            }}
          >
            <div
              style={{
                color: COLORS.purple,
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "1.5px",
              }}
            >
              CURRENTLY ON RUNWAY
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "34px",
                marginTop: "8px",
              }}
            >
              {currentModel
                ? currentModel.name
                : "No Model"}
            </div>

            <div
              style={{
                fontSize: "9px",
                color: COLORS.gray,
                marginTop: "5px",
              }}
            >
              {currentModel
                ? `${currentModel.designer} • ${currentModel.look}`
                : "Waiting for runway call"}
            </div>
          </div>

          <div
            style={{
              backgroundColor:
                COLORS.lightGold,
              padding: "22px",
            }}
          >
            <div
              style={{
                color: "#806313",
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "1.5px",
              }}
            >
              NEXT MODEL
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "34px",
                marginTop: "8px",
              }}
            >
              Model 02
            </div>

            <div
              style={{
                fontSize: "9px",
                color: COLORS.gray,
                marginTop: "5px",
              }}
            >
              Call time • 6:50 PM
            </div>
          </div>
        </section>

        {/* MODEL LINEUP */}

        <section>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              marginBottom: "12px",
            }}
          >
            <div>
              <div
                style={{
                  color: COLORS.purple,
                  fontSize: "8px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                }}
              >
                MODEL LINEUP
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "29px",
                  marginTop: "3px",
                }}
              >
                Runway Queue
              </div>
            </div>

            <div
              style={{
                color: COLORS.gray,
                fontSize: "8px",
              }}
            >
              {models.length} models
            </div>
          </div>

          {models.map((model, index) => {
            const status =
              modelStatusStyles[
                model.status
              ];

            return (
              <article
                key={model.id}
                style={{
                  border:
                    `1px solid ${COLORS.border}`,
                  padding: "17px",
                  marginBottom: "9px",
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "13px",
                  }}
                >
                  {/* NUMBER */}

                  <div
                    style={{
                      width: "34px",
                      height: "34px",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                      backgroundColor:
                        index === 0
                          ? COLORS.purple
                          : COLORS.lightPurple,
                      color:
                        index === 0
                          ? COLORS.white
                          : COLORS.purple,
                      fontFamily:
                        '"Cormorant Garamond", Georgia, serif',
                      fontSize: "19px",
                      flexShrink: 0,
                    }}
                  >
                    {String(index + 1).padStart(
                      2,
                      "0"
                    )}
                  </div>

                  {/* MODEL INFO */}

                  <div
                    style={{
                      flex: 1,
                      minWidth: 0,
                    }}
                  >
                    <div
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", Georgia, serif',
                        fontSize: "24px",
                        lineHeight: "1",
                      }}
                    >
                      {model.name}
                    </div>

                    <div
                      style={{
                        color: COLORS.gray,
                        fontSize: "8px",
                        marginTop: "5px",
                      }}
                    >
                      {model.designer} •{" "}
                      {model.look}
                    </div>
                  </div>

                  {/* STATUS */}

                  <div
                    style={{
                      backgroundColor:
                        status.background,
                      color: status.color,
                      padding:
                        "7px 9px",
                      fontSize: "7px",
                      fontWeight: "700",
                      flexShrink: 0,
                    }}
                  >
                    {model.status}
                  </div>
                </div>

                {/* CALL BUTTON */}

                <button
                  type="button"
                  onClick={() =>
                    callModel(model)
                  }
                  style={{
                    width: "100%",
                    minHeight: "40px",
                    marginTop: "13px",
                    border:
                      `1px solid ${COLORS.purple}`,
                    backgroundColor:
                      COLORS.white,
                    color: COLORS.purple,
                    cursor: "pointer",
                    fontSize: "7px",
                    fontWeight: "700",
                  }}
                >
                  CALL {model.name.toUpperCase()}
                </button>
              </article>
            );
          })}
        </section>

        {/* QUICK ACTIONS */}

        <section
          style={{
            marginTop: "25px",
          }}
        >
          <div
            style={{
              color: COLORS.purple,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              marginBottom: "11px",
            }}
          >
            QUICK ACTIONS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "8px",
            }}
          >
            <button
              type="button"
              onClick={() =>
                (window.location.href =
                  "/model-calls")
              }
              style={{
                minHeight: "48px",
                border:
                  `1px solid ${COLORS.border}`,
                backgroundColor:
                  COLORS.white,
                cursor: "pointer",
                fontSize: "8px",
                fontWeight: "700",
              }}
            >
              MODEL CALLS
            </button>

            <button
              type="button"
              onClick={() =>
                (window.location.href =
                  "/hair-makeup")
              }
              style={{
                minHeight: "48px",
                border:
                  `1px solid ${COLORS.border}`,
                backgroundColor:
                  COLORS.white,
                cursor: "pointer",
                fontSize: "8px",
                fontWeight: "700",
              }}
            >
              HAIR & MAKEUP
            </button>

            <button
              type="button"
              onClick={() =>
                (window.location.href =
                  "/schedule")
              }
              style={{
                minHeight: "48px",
                border:
                  `1px solid ${COLORS.border}`,
                backgroundColor:
                  COLORS.white,
                cursor: "pointer",
                fontSize: "8px",
                fontWeight: "700",
              }}
            >
              SCHEDULE
            </button>
          </div>
        </section>

        {/* FOOTER */}

        <footer
          style={{
            marginTop: "35px",
            paddingTop: "20px",
            borderTop:
              `1px solid ${COLORS.border}`,
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              color: COLORS.purple,
              fontSize: "24px",
            }}
          >
            First Love Yourself
          </div>

          <div
            style={{
              color: COLORS.gray,
              fontSize: "7px",
              letterSpacing: "1.5px",
              marginTop: "4px",
            }}
          >
            FLY SHOWCASE
          </div>
        </footer>
      </div>

      {/* TOAST */}

      {showMessage && (
        <div
          style={{
            position: "fixed",
            left: "50%",
            bottom: "25px",
            transform:
              "translateX(-50%)",
            width:
              "calc(100% - 40px)",
            maxWidth: "440px",
            backgroundColor:
              COLORS.black,
            color: COLORS.white,
            padding: "15px 18px",
            textAlign: "center",
            fontSize: "9px",
            fontWeight: "700",
            zIndex: 1000,
            boxSizing: "border-box",
          }}
        >
          {showMessage}
        </div>
      )}
    </main>
  );
}

export default LiveShow;