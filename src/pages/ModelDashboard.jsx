import React from "react";

const colors = {
  black: "#161616",
  purple: "#81247C",
  gold: "#DEB64B",
  white: "#FFFFFF",
  lightPurple: "#F5EAF4",
  lightGold: "#F8F3E5",
  border: "#E8E8E8",
  gray: "#777777",
  lightGray: "#F7F7F7",
};

const schedule = [
  {
    time: "4:00 PM",
    title: "Hair & Makeup",
    location: "Makeup Room A",
    type: "MAKEUP",
    color: "purple",
  },
  {
    time: "5:45 PM",
    title: "Designer Fitting",
    location: "Designer Studio",
    type: "FITTING",
    color: "gold",
  },
  {
    time: "6:30 PM",
    title: "Backstage Lineup",
    location: "Stage 2",
    type: "CALL TIME",
    color: "purple",
  },
  {
    time: "7:00 PM",
    title: "Runway",
    location: "Main Stage • Look 03",
    type: "RUNWAY",
    color: "dark",
  },
];

const updates = [
  {
    type: "IMPORTANT",
    time: "JUST NOW",
    title: "All models to Stage 2",
    message: "Please report to backstage for lineup.",
    important: true,
  },
  {
    type: "SCHEDULE UPDATE",
    time: "5 MIN AGO",
    title: "Fitting moved to 5:45 PM",
    message: "Designer Studio • Updated by Stage Manager",
    important: false,
  },
  {
    type: "SHOW UPDATE",
    time: "12 MIN AGO",
    title: "Runway begins at 7:00 PM",
    message: "Main Stage",
    important: false,
  },
];

function ScheduleItem({ item }) {
  const isGold = item.color === "gold";
  const isDark = item.color === "dark";

  return (
    <div
      style={{
        display: "flex",
        gap: "16px",
        padding: "19px 0",
        borderTop: `1px solid ${colors.border}`,
      }}
    >
      <div
        style={{
          width: "58px",
          flexShrink: 0,
          color: colors.purple,
          fontSize: "10px",
          fontWeight: "700",
          paddingTop: "3px",
        }}
      >
        {item.time}
      </div>

      <div style={{ flex: 1 }}>
        <div
          style={{
            fontFamily: '"Cormorant Garamond", Georgia, serif',
            fontSize: "24px",
            lineHeight: "1.05",
            color: colors.black,
          }}
        >
          {item.title}
        </div>

        <div
          style={{
            color: colors.gray,
            fontSize: "9px",
            marginTop: "6px",
          }}
        >
          {item.location}
        </div>

        <span
          style={{
            display: "inline-block",
            marginTop: "9px",
            padding: "5px 8px",
            backgroundColor: isDark
              ? colors.purple
              : isGold
              ? colors.lightGold
              : colors.lightPurple,
            color: isDark
              ? colors.white
              : isGold
              ? "#806313"
              : colors.purple,
            fontSize: "8px",
            fontWeight: "700",
            letterSpacing: "0.5px",
          }}
        >
          {item.type}
        </span>
      </div>
    </div>
  );
}

function ModelDashboard() {
  return (
    <main
      style={{
        minHeight: "100vh",
        width: "100%",
        backgroundColor: colors.white,
        color: colors.black,
        fontFamily: '"PT Sans", Arial, sans-serif',
      }}
    >
      {/* TOP BRAND BAR */}

      <div
        style={{
          height: "7px",
          width: "100%",
          backgroundColor: colors.purple,
        }}
      />

      {/* MOBILE APP CONTAINER */}

      <div
        style={{
          width: "100%",
          maxWidth: "520px",
          margin: "0 auto",
          padding: "25px 20px 100px",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}

        <header
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            marginBottom: "42px",
          }}
        >
          <div>
            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "39px",
                lineHeight: "0.8",
                fontWeight: "600",
                color: colors.purple,
              }}
            >
              FLY
            </div>

            <div
              style={{
                marginTop: "9px",
                fontSize: "8px",
                letterSpacing: "3px",
                fontWeight: "700",
                color: colors.black,
              }}
            >
              SHOWCASE
            </div>
          </div>

          {/* PROFILE */}

          <button
            type="button"
            aria-label="Profile"
            style={{
              width: "44px",
              height: "44px",
              borderRadius: "50%",
              border: `2px solid ${colors.gold}`,
              backgroundColor: colors.purple,
              color: colors.white,
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "19px",
              fontWeight: "600",
              cursor: "pointer",
            }}
          >
            M
          </button>
        </header>

        {/* MODEL INTRO */}

        <section>
          <div
            style={{
              display: "inline-block",
              backgroundColor: colors.gold,
              color: colors.black,
              padding: "7px 11px",
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "17px",
            }}
          >
            MODEL
          </div>

          <h1
            style={{
              margin: 0,
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "56px",
              lineHeight: "0.86",
              fontWeight: "500",
            }}
          >
            Hello,
            <br />

            <span style={{ color: colors.purple }}>
              Your Name.
            </span>
          </h1>

          <p
            style={{
              marginTop: "18px",
              color: colors.gray,
              fontSize: "13px",
              lineHeight: "1.6",
            }}
          >
            Here's everything you need for today's show.
          </p>
        </section>

        {/* CURRENT SHOW STATUS */}

        <section
          style={{
            marginTop: "32px",
            backgroundColor: colors.black,
            color: colors.white,
            padding: "22px",
            borderLeft: `5px solid ${colors.purple}`,
          }}
        >
          <div
            style={{
              color: colors.gold,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "12px",
            }}
          >
            CURRENT SHOW STATUS
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "32px",
              lineHeight: "1",
            }}
          >
            Hair & Makeup
          </div>

          <p
            style={{
              color: "#BBBBBB",
              fontSize: "10px",
              lineHeight: "1.5",
              marginBottom: 0,
            }}
          >
            Your backstage team will update this status
            throughout the show.
          </p>
        </section>

        {/* NEXT CALL */}

        <section style={{ marginTop: "30px" }}>
          <div
            style={{
              fontSize: "9px",
              letterSpacing: "2px",
              fontWeight: "700",
              marginBottom: "12px",
            }}
          >
            YOUR NEXT CALL
          </div>

          <div
            style={{
              position: "relative",
              border: `1px solid ${colors.border}`,
              backgroundColor: colors.white,
              padding: "22px 20px 22px 25px",
              boxSizing: "border-box",
            }}
          >
            <div
              style={{
                position: "absolute",
                left: 0,
                top: 0,
                width: "5px",
                height: "100%",
                backgroundColor: colors.gold,
              }}
            />

            <div
              style={{
                color: colors.purple,
                fontSize: "11px",
                fontWeight: "700",
                letterSpacing: "1px",
              }}
            >
              6:30 PM
            </div>

            <h2
              style={{
                margin: "7px 0 6px",
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "30px",
                lineHeight: "1",
                fontWeight: "500",
              }}
            >
              Backstage Lineup
            </h2>

            <p
              style={{
                margin: 0,
                color: colors.gray,
                fontSize: "10px",
                lineHeight: "1.5",
              }}
            >
              Main Stage
            </p>

            <div
              style={{
                marginTop: "16px",
                paddingTop: "13px",
                borderTop: `1px solid ${colors.border}`,
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
              }}
            >
              <span
                style={{
                  color: colors.gray,
                  fontSize: "9px",
                }}
              >
                Be ready 15 minutes early
              </span>

              <span
                style={{
                  color: colors.purple,
                  fontSize: "16px",
                }}
              >
                →
              </span>
            </div>
          </div>
        </section>

        {/* LIVE UPDATES */}

        <section style={{ marginTop: "35px" }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              marginBottom: "14px",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                fontWeight: "700",
              }}
            >
              LIVE UPDATES
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "5px",
                color: colors.purple,
                fontSize: "8px",
                fontWeight: "700",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  backgroundColor: colors.purple,
                }}
              />

              LIVE
            </div>
          </div>

          {updates.map((update, index) => (
            <div
              key={index}
              style={{
                backgroundColor: update.important
                  ? colors.purple
                  : colors.white,
                color: update.important
                  ? colors.white
                  : colors.black,
                border: update.important
                  ? "none"
                  : `1px solid ${colors.border}`,
                padding: "18px",
                marginBottom: "10px",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  marginBottom: "9px",
                }}
              >
                <span
                  style={{
                    color: update.important
                      ? colors.gold
                      : colors.purple,
                    fontSize: "8px",
                    fontWeight: "700",
                    letterSpacing: "1.5px",
                  }}
                >
                  {update.type}
                </span>

                <span
                  style={{
                    color: update.important
                      ? "#E8CDE6"
                      : "#999999",
                    fontSize: "8px",
                  }}
                >
                  {update.time}
                </span>
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "23px",
                  lineHeight: "1.05",
                  marginBottom: "7px",
                }}
              >
                {update.title}
              </div>

              <div
                style={{
                  color: update.important
                    ? "#F0DDF0"
                    : colors.gray,
                  fontSize: "9px",
                  lineHeight: "1.5",
                }}
              >
                {update.message}
              </div>
            </div>
          ))}
        </section>

        {/* TODAY'S SCHEDULE */}

        <section style={{ marginTop: "38px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                fontWeight: "700",
              }}
            >
              TODAY'S SCHEDULE
            </div>

            <div
              style={{
                color: colors.purple,
                fontSize: "9px",
                fontWeight: "700",
              }}
            >
              MY SCHEDULE
            </div>
          </div>

          <div
            style={{
              borderBottom: `1px solid ${colors.border}`,
            }}
          >
            {schedule.map((item, index) => (
              <ScheduleItem
                key={index}
                item={item}
              />
            ))}
          </div>
        </section>

        {/* LOOKBOOK */}

        <section style={{ marginTop: "40px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "15px",
            }}
          >
            <div
              style={{
                fontSize: "9px",
                letterSpacing: "2px",
                fontWeight: "700",
              }}
            >
              MY LOOKBOOK
            </div>

            <div
              style={{
                color: colors.purple,
                fontSize: "9px",
                fontWeight: "700",
              }}
            >
              3 LOOKS
            </div>
          </div>

          {/* LOOK 01 */}

          <div
            style={{
              border: `1px solid ${colors.border}`,
              marginBottom: "12px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "190px",
                backgroundColor: colors.black,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.gold,
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "46px",
              }}
            >
              01
            </div>

            <div style={{ padding: "17px" }}>
              <div
                style={{
                  color: colors.purple,
                  fontSize: "8px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  marginBottom: "7px",
                }}
              >
                DESIGNER
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "25px",
                }}
              >
                Designer Name
              </div>

              <div
                style={{
                  color: colors.gray,
                  fontSize: "9px",
                  marginTop: "5px",
                }}
              >
                Look 03 • Main Runway
              </div>
            </div>
          </div>

          {/* LOOK 02 */}

          <div
            style={{
              border: `1px solid ${colors.border}`,
              marginBottom: "12px",
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "160px",
                backgroundColor: colors.lightPurple,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: colors.purple,
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "42px",
              }}
            >
              02
            </div>

            <div style={{ padding: "17px" }}>
              <div
                style={{
                  color: colors.purple,
                  fontSize: "8px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  marginBottom: "7px",
                }}
              >
                DESIGNER
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "25px",
                }}
              >
                Designer Name
              </div>

              <div
                style={{
                  color: colors.gray,
                  fontSize: "9px",
                  marginTop: "5px",
                }}
              >
                Look 07 • Second Runway
              </div>
            </div>
          </div>

          {/* LOOK 03 */}

          <div
            style={{
              border: `1px solid ${colors.border}`,
              overflow: "hidden",
            }}
          >
            <div
              style={{
                height: "160px",
                backgroundColor: colors.lightGold,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#8A6814",
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "42px",
              }}
            >
              03
            </div>

            <div style={{ padding: "17px" }}>
              <div
                style={{
                  color: colors.purple,
                  fontSize: "8px",
                  fontWeight: "700",
                  letterSpacing: "1.5px",
                  marginBottom: "7px",
                }}
              >
                DESIGNER
              </div>

              <div
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "25px",
                }}
              >
                Designer Name
              </div>

              <div
                style={{
                  color: colors.gray,
                  fontSize: "9px",
                  marginTop: "5px",
                }}
              >
                Look 11 • Finale
              </div>
            </div>
          </div>
        </section>

        {/* BOTTOM APP NAVIGATION */}

        <nav
          style={{
            position: "fixed",
            bottom: 0,
            left: 0,
            right: 0,
            height: "70px",
            backgroundColor: colors.white,
            borderTop: `1px solid ${colors.border}`,
            display: "flex",
            justifyContent: "center",
            zIndex: 100,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "520px",
              display: "flex",
              justifyContent: "space-around",
              alignItems: "center",
            }}
          >
            <button
              type="button"
              style={{
                border: "none",
                background: "none",
                color: colors.purple,
                fontSize: "9px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "20px", marginBottom: "4px" }}>
                ⌂
              </div>
              HOME
            </button>

            <button
              type="button"
              style={{
                border: "none",
                background: "none",
                color: colors.gray,
                fontSize: "9px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "19px", marginBottom: "4px" }}>
                ◷
              </div>
              SCHEDULE
            </button>

            <button
              type="button"
              style={{
                border: "none",
                background: "none",
                color: colors.gray,
                fontSize: "9px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "19px", marginBottom: "4px" }}>
                ♢
              </div>
              LOOKBOOK
            </button>

            <button
              type="button"
              style={{
                border: "none",
                background: "none",
                color: colors.gray,
                fontSize: "9px",
                fontWeight: "700",
                cursor: "pointer",
              }}
            >
              <div style={{ fontSize: "19px", marginBottom: "4px" }}>
                ●
              </div>
              PROFILE
            </button>
          </div>
        </nav>
      </div>
    </main>
  );
}

export default ModelDashboard;