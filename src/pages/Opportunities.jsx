import React from "react";

const COLORS = {
  black: "#161616",
  purple: "#81247C",
  gold: "#DEB64B",
  white: "#FFFFFF",
  gray: "#777777",
  lightPurple: "#F5EAF4",
  lightGold: "#F8F3E5",
  border: "#E8E8E8",
};

function Opportunities() {
  const opportunities = [
    {
      city: "LOS ANGELES",
      event: "FLY LA",
      date: "COMING SOON",
      description:
        "A future Fly fashion showcase opportunity.",
    },
    {
      city: "NEW YORK",
      event: "FLY NEW YORK",
      date: "COMING SOON",
      description:
        "Fashion, runway and networking opportunities.",
    },
    {
      city: "MILAN",
      event: "FLY MILAN",
      date: "COMING SOON",
      description:
        "An international fashion experience.",
    },
    {
      city: "PARIS",
      event: "FLY PARIS",
      date: "COMING SOON",
      description:
        "Discover future fashion opportunities through FLY.",
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
          maxWidth: "900px",
          margin: "0 auto",
          padding: "24px 20px 70px",
        }}
      >
        <Header />

        <section
          style={{
            background: COLORS.black,
            color: COLORS.white,
            padding: "30px",
            marginBottom: "30px",
          }}
        >
          <div style={goldLabel}>
            THE FUTURE OF FASHION
          </div>

          <h1
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "48px",
              fontWeight: "500",
              lineHeight: "0.9",
              margin: "8px 0",
            }}
          >
            More fashion.
            <br />
            More opportunities.
          </h1>

          <p
            style={{
              color: "#BBBBBB",
              fontSize: "10px",
              lineHeight: "1.6",
              maxWidth: "500px",
            }}
          >
            Explore upcoming Fly opportunities
            around the world.
          </p>
        </section>

        <div style={labelStyle}>
          UPCOMING OPPORTUNITIES
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "12px",
            marginTop: "15px",
          }}
        >
          {opportunities.map((item) => (
            <article
              key={item.city}
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
                  letterSpacing: "2px",
                }}
              >
                {item.city}
              </div>

              <h2
                style={{
                  fontFamily:
                    '"Cormorant Garamond", Georgia, serif',
                  fontSize: "29px",
                  fontWeight: "500",
                  margin: "7px 0",
                }}
              >
                {item.event}
              </h2>

              <div
                style={{
                  display: "inline-block",
                  background: COLORS.lightGold,
                  color: "#806313",
                  padding: "6px 8px",
                  fontSize: "7px",
                  fontWeight: "700",
                }}
              >
                {item.date}
              </div>

              <p
                style={{
                  color: COLORS.gray,
                  fontSize: "9px",
                  lineHeight: "1.6",
                }}
              >
                {item.description}
              </p>

              <button
                disabled
                style={{
                  width: "100%",
                  height: "42px",
                  border: "none",
                  background: COLORS.lightPurple,
                  color: COLORS.purple,
                  fontSize: "8px",
                  fontWeight: "700",
                  cursor: "not-allowed",
                }}
              >
                DETAILS COMING SOON
              </button>
            </article>
          ))}
        </div>

        <section
          style={{
            background: COLORS.lightPurple,
            padding: "22px",
            marginTop: "30px",
            textAlign: "center",
          }}
        >
          <div style={purpleText}>
            STAY CONNECTED
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "28px",
              marginTop: "6px",
            }}
          >
            Your next runway could be anywhere.
          </div>

          <p
            style={{
              color: COLORS.gray,
              fontSize: "9px",
              lineHeight: "1.6",
            }}
          >
            New opportunities will appear here as
            they become available.
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
        <div style={headerTitle}>Opportunities</div>
      </div>
    </header>
  );
}

const labelStyle = {
  color: COLORS.purple,
  fontSize: "8px",
  fontWeight: "700",
  letterSpacing: "2px",
};

const goldLabel = {
  color: COLORS.gold,
  fontSize: "8px",
  fontWeight: "700",
  letterSpacing: "2px",
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

export default Opportunities;
