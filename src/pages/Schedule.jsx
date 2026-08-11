import React from "react";

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
};

function Schedule() {
  const schedule = [
    {
      time: "9:00 AM",
      title: "Model Check-In",
      location: "Main Entrance",
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
      title: "Designer Fitting",
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

  return (
    <main
      style={{
        minHeight: "100vh",
        background: COLORS.white,
        color: COLORS.black,
        fontFamily: '"PT Sans", Arial, sans-serif',
      }}
    >
      <div style={{ height: "7px", background: COLORS.purple }} />

      <div
        style={{
          maxWidth: "850px",
          margin: "0 auto",
          padding: "24px 20px 70px",
        }}
      >
        <Header />

        <section style={{ marginBottom: "30px" }}>
          <div style={labelStyle}>SHOW DAY</div>
          <h1 style={titleStyle}>My Schedule</h1>
          <p style={subTitleStyle}>
            November 11 • Main Stage
          </p>
        </section>

        <div
          style={{
            borderTop: `1px solid ${COLORS.border}`,
          }}
        >
          {schedule.map((item, index) => (
            <div
              key={index}
              style={{
                display: "grid",
                gridTemplateColumns:
                  "100px 1fr auto",
                gap: "20px",
                alignItems: "center",
                padding: "20px 0",
                borderBottom:
                  `1px solid ${COLORS.border}`,
              }}
            >
              <div
                style={{
                  color: COLORS.purple,
                  fontSize: "10px",
                  fontWeight: "700",
                }}
              >
                {item.time}
              </div>

              <div>
                <div style={cardTitle}>
                  {item.title}
                </div>

                <div style={subTitleStyle}>
                  {item.location}
                </div>
              </div>

              <Status status={item.status} />
            </div>
          ))}
        </div>

        <section
          style={{
            background: COLORS.lightGold,
            padding: "20px",
            marginTop: "30px",
          }}
        >
          <div style={goldLabel}>IMPORTANT</div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "25px",
              marginTop: "6px",
            }}
          >
            Stay backstage after your call.
          </div>

          <p style={subTitleStyle}>
            Show times can change. Keep checking your
            notifications for updates from the stage
            manager.
          </p>
        </section>
      </div>
    </main>
  );
}

function Header() {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "45px",
      }}
    >
      <div>
        <div style={logoStyle}>FLY</div>
        <div style={logoSubStyle}>SHOWCASE</div>
      </div>

      <div style={{ textAlign: "right" }}>
        <div style={purpleText}>MODEL</div>
        <div style={headerTitle}>Schedule</div>
      </div>
    </header>
  );
}

function Status({ status }) {
  const completed = status === "COMPLETED";

  return (
    <div
      style={{
        background: completed
          ? COLORS.lightGreen
          : COLORS.lightPurple,
        color: completed
          ? COLORS.green
          : COLORS.purple,
        padding: "7px 9px",
        fontSize: "7px",
        fontWeight: "700",
      }}
    >
      {status}
    </div>
  );
}

const labelStyle = {
  color: COLORS.purple,
  fontSize: "8px",
  fontWeight: "700",
  letterSpacing: "2px",
};

const goldLabel = {
  color: "#806313",
  fontSize: "8px",
  fontWeight: "700",
  letterSpacing: "2px",
};

const titleStyle = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: "46px",
  fontWeight: "500",
  margin: "5px 0",
};

const cardTitle = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: "25px",
};

const subTitleStyle = {
  color: COLORS.gray,
  fontSize: "9px",
  lineHeight: "1.6",
};

const purpleText = {
  color: COLORS.purple,
  fontSize: "8px",
  fontWeight: "700",
};

const logoStyle = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  color: COLORS.purple,
  fontSize: "38px",
  fontWeight: "600",
};

const logoSubStyle = {
  fontSize: "8px",
  fontWeight: "700",
  letterSpacing: "3px",
};

const headerTitle = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: "23px",
};

export default Schedule;
