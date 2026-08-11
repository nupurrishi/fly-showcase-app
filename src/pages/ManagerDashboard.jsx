import React from "react";

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

function ManagerDashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        backgroundColor: COLORS.white,
        color: COLORS.black,
        fontFamily: '"PT Sans", Arial, sans-serif',
      }}
    >
      {/* TOP PURPLE BAR */}

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

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                color: COLORS.purple,
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "1.5px",
              }}
            >
              MANAGEMENT
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "23px",
                marginTop: "4px",
              }}
            >
              Manager Dashboard
            </div>
          </div>
        </header>

        {/* WELCOME HERO */}

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
              color: COLORS.gold,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            FLY SHOWCASE • CONTROL CENTER
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "42px",
              lineHeight: "0.95",
            }}
          >
            Good evening,
            <br />
            Manager.
          </div>

          <div
            style={{
              color: "#BBBBBB",
              fontSize: "10px",
              marginTop: "10px",
              lineHeight: "1.5",
            }}
          >
            Everything happening backstage
            and on stage, in one place.
          </div>
        </section>

        {/* LIVE SHOW STATUS */}

        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            padding: "20px",
            marginBottom: "20px",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "10px",
              marginBottom: "15px",
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
                LIVE SHOW
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "30px",
                  marginTop: "4px",
                }}
              >
                Hair & Makeup
              </div>
            </div>

            <div
              style={{
                backgroundColor: COLORS.lightPurple,
                color: COLORS.purple,
                padding: "8px 10px",
                fontSize: "7px",
                fontWeight: "700",
              }}
            >
              ● LIVE
            </div>
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(120px, 1fr))",
              gap: "10px",
            }}
          >
            <div
              style={{
                backgroundColor: COLORS.lightGold,
                padding: "15px",
              }}
            >
              <div
                style={{
                  fontSize: "7px",
                  color: "#806313",
                  fontWeight: "700",
                }}
              >
                WAITING
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "28px",
                  marginTop: "3px",
                }}
              >
                2
              </div>
            </div>

            <div
              style={{
                backgroundColor: COLORS.lightPurple,
                padding: "15px",
              }}
            >
              <div
                style={{
                  fontSize: "7px",
                  color: COLORS.purple,
                  fontWeight: "700",
                }}
              >
                IN CHAIR
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "28px",
                  marginTop: "3px",
                }}
              >
                4
              </div>
            </div>

            <div
              style={{
                backgroundColor: COLORS.lightGreen,
                padding: "15px",
              }}
            >
              <div
                style={{
                  fontSize: "7px",
                  color: COLORS.green,
                  fontWeight: "700",
                }}
              >
                READY
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "28px",
                  marginTop: "3px",
                }}
              >
                18
              </div>
            </div>
          </div>

          <button
            type="button"
            onClick={() =>
              (window.location.href = "/live-show")
            }
            style={{
              width: "100%",
              minHeight: "46px",
              marginTop: "15px",
              border: "none",
              backgroundColor: COLORS.purple,
              color: COLORS.white,
              cursor: "pointer",
              fontSize: "8px",
              fontWeight: "700",
            }}
          >
            OPEN LIVE SHOW TRACKER →
          </button>
        </section>

        {/* TWO COLUMN AREA */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(280px, 1fr))",
            gap: "15px",
            marginBottom: "20px",
          }}
        >
          {/* NEXT CALL */}

          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              padding: "20px",
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
              NEXT CALL
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "31px",
                marginTop: "6px",
              }}
            >
              Model 24
            </div>

            <div
              style={{
                fontSize: "9px",
                marginTop: "4px",
              }}
            >
              Runway Call
            </div>

            <div
              style={{
                color: COLORS.purple,
                fontSize: "18px",
                fontWeight: "700",
                marginTop: "14px",
              }}
            >
              6:45 PM
            </div>

            <button
              type="button"
              onClick={() =>
                (window.location.href = "/model-calls")
              }
              style={{
                width: "100%",
                minHeight: "42px",
                marginTop: "15px",
                border: `1px solid ${COLORS.purple}`,
                backgroundColor: COLORS.white,
                color: COLORS.purple,
                cursor: "pointer",
                fontSize: "8px",
                fontWeight: "700",
              }}
            >
              VIEW CALL BOARD
            </button>
          </div>

          {/* SCHEDULE */}

          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              padding: "20px",
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
              TODAY'S SCHEDULE
            </div>

            <div
              style={{
                marginTop: "14px",
              }}
            >
              {[
                ["6:00 PM", "Designer Lineup"],
                ["6:30 PM", "Backstage Lineup"],
                ["7:00 PM", "Show Start"],
              ].map(([time, event]) => (
                <div
                  key={time}
                  style={{
                    display: "flex",
                    justifyContent: "space-between",
                    gap: "10px",
                    padding: "9px 0",
                    borderBottom:
                      `1px solid ${COLORS.border}`,
                  }}
                >
                  <span
                    style={{
                      color: COLORS.purple,
                      fontSize: "8px",
                      fontWeight: "700",
                    }}
                  >
                    {time}
                  </span>

                  <span
                    style={{
                      fontSize: "8px",
                      textAlign: "right",
                    }}
                  >
                    {event}
                  </span>
                </div>
              ))}
            </div>

            <button
              type="button"
              onClick={() =>
                (window.location.href = "/schedule")
              }
              style={{
                width: "100%",
                minHeight: "42px",
                marginTop: "15px",
                border: `1px solid ${COLORS.purple}`,
                backgroundColor: COLORS.white,
                color: COLORS.purple,
                cursor: "pointer",
                fontSize: "8px",
                fontWeight: "700",
              }}
            >
              VIEW FULL SCHEDULE
            </button>
          </div>
        </section>

        {/* ALERTS */}

        <section
          style={{
            backgroundColor: COLORS.lightGold,
            padding: "20px",
            marginBottom: "20px",
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
            ATTENTION
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "29px",
              marginTop: "4px",
            }}
          >
            Active Alerts
          </div>

          <div
            style={{
              marginTop: "12px",
            }}
          >
            {[
              "Model 18 has not checked in.",
              "Chair 03 is running 10 minutes late.",
              "Designer 07 fitting is complete.",
            ].map((alert) => (
              <div
                key={alert}
                style={{
                  display: "flex",
                  gap: "9px",
                  alignItems: "flex-start",
                  padding: "9px 0",
                  borderBottom:
                    `1px solid rgba(128,99,19,0.15)`,
                  fontSize: "9px",
                }}
              >
                <span
                  style={{
                    color: COLORS.red,
                    fontSize: "11px",
                  }}
                >
                  !
                </span>

                <span>{alert}</span>
              </div>
            ))}
          </div>
        </section>

        {/* QUICK ACTIONS */}

        <section>
          <div
            style={{
              color: COLORS.purple,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              marginBottom: "12px",
            }}
          >
            QUICK ACTIONS
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(140px, 1fr))",
              gap: "9px",
            }}
          >
            {[
              {
                label: "CALL MODEL",
                path: "/model-calls",
              },
              {
                label: "SEND ALERT",
                path: "/notifications",
              },
              {
                label: "SCHEDULE",
                path: "/schedule",
              },
              {
                label: "PEOPLE",
                path: "/people",
              },
            ].map((action) => (
              <button
                key={action.label}
                type="button"
                onClick={() =>
                  (window.location.href =
                    action.path)
                }
                style={{
                  minHeight: "52px",
                  border:
                    `1px solid ${COLORS.border}`,
                  backgroundColor: COLORS.white,
                  color: COLORS.black,
                  cursor: "pointer",
                  fontSize: "8px",
                  fontWeight: "700",
                }}
              >
                {action.label}
              </button>
            ))}
          </div>
        </section>

        {/* FOOTER */}

        <div
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
        </div>
      </div>
    </main>
  );
}

export default ManagerDashboard;