import React, { useState } from "react";

const COLORS = {
  black: "#161616",
  purple: "#81247C",
  gold: "#DEB64B",
  white: "#FFFFFF",
  gray: "#777777",
  lightPurple: "#F5EAF4",
  lightGold: "#F8F3E5",
  green: "#2F7D5B",
  lightGreen: "#EAF5EF",
  border: "#E8E8E8",
  red: "#B33A3A",
};

function ModelDashboard() {
  const [message, setMessage] = useState("");

  // EDIT YOUR MODEL INFORMATION HERE
  const model = {
    name: "Model One",
    number: "MODEL 01",
    event: "Fly Showcase",
    date: "November 11",
  };

  // EDIT YOUR SCHEDULE HERE
  const schedule = [
    {
      time: "9:00 AM",
      title: "Check In",
      location: "Model Check-In",
      status: "COMPLETED",
    },
    {
      time: "10:00 AM",
      title: "Hair & Makeup",
      location: "Beauty Area",
      status: "UPCOMING",
    },
    {
      time: "12:00 PM",
      title: "Fitting",
      location: "Designer Room",
      status: "UPCOMING",
    },
    {
      time: "2:00 PM",
      title: "Backstage Call",
      location: "Backstage",
      status: "UPCOMING",
    },
    {
      time: "3:00 PM",
      title: "Runway",
      location: "Main Stage",
      status: "UPCOMING",
    },
  ];

  // EDIT YOUR LOOKS HERE
  const looks = [
    {
      number: "01",
      name: "Opening Look",
      designer: "Designer A",
      notes: "Gold accessories. Hair pulled back.",
    },
    {
      number: "02",
      name: "Evening Silhouette",
      designer: "Designer A",
      notes: "Silver earrings required.",
    },
    {
      number: "03",
      name: "Finale Look",
      designer: "Designer A",
      notes: "Finale position.",
    },
  ];

  function showMessage(text) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: COLORS.white,
        color: COLORS.black,
        fontFamily: '"PT Sans", Arial, sans-serif',
      }}
    >
      {/* TOP BRAND BAR */}
      <div
        style={{
          height: "7px",
          background: COLORS.purple,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
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
              MODEL
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "23px",
              }}
            >
              My Dashboard
            </div>
          </div>
        </header>

        {/* MODEL PROFILE */}
        <section
          style={{
            background: COLORS.black,
            color: COLORS.white,
            padding: "25px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              color: COLORS.gold,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            YOUR MODEL PROFILE
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "42px",
              marginTop: "7px",
            }}
          >
            {model.name}
          </div>

          <div
            style={{
              color: "#BBBBBB",
              fontSize: "10px",
              marginTop: "8px",
            }}
          >
            {model.number} • {model.event}
          </div>
        </section>

        {/* SHOW INFORMATION */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(180px, 1fr))",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <InfoBox
            title="SHOW DATE"
            value={model.date}
          />

          <InfoBox
            title="RUNWAY"
            value="Main Stage"
          />

          <InfoBox
            title="STATUS"
            value="CONFIRMED"
          />
        </section>

        {/* IMPORTANT NOTICE */}
        <section
          style={{
            background: COLORS.lightPurple,
            borderLeft: `5px solid ${COLORS.purple}`,
            padding: "17px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              color: COLORS.purple,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              marginBottom: "6px",
            }}
          >
            MODEL INFORMATION
          </div>

          <div
            style={{
              fontSize: "10px",
              lineHeight: "1.5",
            }}
          >
            Please check your schedule regularly.
            Your backstage team may update call
            times during the show.
          </div>
        </section>

        {/* TODAY'S SCHEDULE */}
        <section style={{ marginBottom: "35px" }}>
          <SectionTitle
            title="YOUR SCHEDULE"
            subtitle="Everything you need to know for show day"
          />

          <div
            style={{
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {schedule.map((item, index) => (
              <div
                key={index}
                style={{
                  display: "flex",
                  gap: "15px",
                  alignItems: "center",
                  padding: "16px 0",
                  borderBottom:
                    `1px solid ${COLORS.border}`,
                  flexWrap: "wrap",
                }}
              >
                <div
                  style={{
                    minWidth: "70px",
                    color: COLORS.purple,
                    fontSize: "9px",
                    fontWeight: "700",
                  }}
                >
                  {item.time}
                </div>

                <div style={{ flex: 1 }}>
                  <div
                    style={{
                      fontFamily:
                        '"Cormorant Garamond", Georgia, serif',
                      fontSize: "22px",
                    }}
                  >
                    {item.title}
                  </div>

                  <div
                    style={{
                      color: COLORS.gray,
                      fontSize: "8px",
                      marginTop: "3px",
                    }}
                  >
                    {item.location}
                  </div>
                </div>

                <Status status={item.status} />
              </div>
            ))}
          </div>
        </section>

        {/* MY LOOKS */}
        <section style={{ marginBottom: "35px" }}>
          <SectionTitle
            title="MY RUNWAY LOOKS"
            subtitle="Your assigned outfits"
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(250px, 1fr))",
              gap: "14px",
            }}
          >
            {looks.map((look) => (
              <div
                key={look.number}
                style={{
                  border:
                    `1px solid ${COLORS.border}`,
                  overflow: "hidden",
                }}
              >
                {/* LOOK IMAGE PLACEHOLDER */}
                <div
                  style={{
                    height: "180px",
                    background: COLORS.black,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <div
                    style={{
                      color: COLORS.gold,
                      fontFamily:
                        '"Cormorant Garamond", Georgia, serif',
                      fontSize: "58px",
                    }}
                  >
                    {look.number}
                  </div>
                </div>

                <div style={{ padding: "17px" }}>
                  <div
                    style={{
                      fontFamily:
                        '"Cormorant Garamond", Georgia, serif',
                      fontSize: "27px",
                    }}
                  >
                    {look.name}
                  </div>

                  <div
                    style={{
                      color: COLORS.purple,
                      fontSize: "8px",
                      fontWeight: "700",
                      marginTop: "7px",
                    }}
                  >
                    DESIGNER: {look.designer}
                  </div>

                  <div
                    style={{
                      background: COLORS.lightGold,
                      padding: "10px",
                      marginTop: "12px",
                      fontSize: "9px",
                      lineHeight: "1.5",
                    }}
                  >
                    {look.notes}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MODEL CHECKLIST */}
        <section style={{ marginBottom: "35px" }}>
          <SectionTitle
            title="SHOW DAY CHECKLIST"
            subtitle="Make sure you are ready"
          />

          <div
            style={{
              display: "grid",
              gap: "8px",
            }}
          >
            {[
              "Arrive on time",
              "Check in with backstage",
              "Complete hair and makeup",
              "Attend designer fitting",
              "Have all accessories",
              "Be ready for backstage call",
            ].map((item, index) => (
              <label
                key={index}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  padding: "13px",
                  border:
                    `1px solid ${COLORS.border}`,
                  fontSize: "10px",
                  cursor: "pointer",
                }}
              >
                <input
                  type="checkbox"
                  onChange={() =>
                    showMessage(
                      `${item} updated.`
                    )
                  }
                />

                {item}
              </label>
            ))}
          </div>
        </section>

        {/* BACKSTAGE HELP */}
        <section
          style={{
            background: COLORS.lightGold,
            padding: "22px",
          }}
        >
          <div
            style={{
              color: "#806313",
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "2px",
            }}
          >
            NEED HELP?
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "28px",
              marginTop: "6px",
            }}
          >
            Ask the backstage team.
          </div>

          <p
            style={{
              color: COLORS.gray,
              fontSize: "9px",
              lineHeight: "1.5",
            }}
          >
            If you are unsure about your call time,
            location, outfit, or runway position,
            contact your backstage manager.
          </p>

          <button
            type="button"
            onClick={() =>
              showMessage(
                "Backstage team contact feature coming soon."
              )
            }
            style={{
              width: "100%",
              minHeight: "45px",
              border: "none",
              background: COLORS.black,
              color: COLORS.white,
              fontSize: "8px",
              fontWeight: "700",
              cursor: "pointer",
            }}
          >
            CONTACT BACKSTAGE
          </button>
        </section>
      </div>

      {/* TOAST */}
      {message && (
        <div
          style={{
            position: "fixed",
            left: "50%",
            bottom: "25px",
            transform: "translateX(-50%)",
            width: "calc(100% - 40px)",
            maxWidth: "440px",
            background: COLORS.black,
            color: COLORS.white,
            padding: "15px",
            textAlign: "center",
            fontSize: "10px",
            fontWeight: "700",
            zIndex: 1000,
          }}
        >
          {message}
        </div>
      )}
    </main>
  );
}

function InfoBox({ title, value }) {
  return (
    <div
      style={{
        border: `1px solid ${COLORS.border}`,
        padding: "17px",
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
        {title}
      </div>

      <div
        style={{
          fontFamily:
            '"Cormorant Garamond", Georgia, serif',
          fontSize: "23px",
          marginTop: "6px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function Status({ status }) {
  const completed = status === "COMPLETED";

  return (
    <div
      style={{
        padding: "6px 9px",
        background: completed
          ? COLORS.lightGreen
          : COLORS.lightGold,
        color: completed
          ? COLORS.green
          : "#806313",
        fontSize: "7px",
        fontWeight: "700",
      }}
    >
      {status}
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <div
        style={{
          fontSize: "9px",
          fontWeight: "700",
          letterSpacing: "2px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: COLORS.gray,
          fontSize: "9px",
          marginTop: "4px",
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}

export default ModelDashboard;
