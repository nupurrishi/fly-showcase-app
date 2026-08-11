import React from "react";

const COLORS = {
  black: "#161616",
  purple: "#81247C",
  gold: "#DEB64B",
  white: "#FFFFFF",
  gray: "#777777",
  lightGold: "#F8F3E5",
  border: "#E8E8E8",
};

function Lookbook() {
  const looks = [
    {
      number: "01",
      name: "Opening Look",
      designer: "Designer A",
      description: "Statement opening look.",
      notes: "Hair pulled back. Gold accessories.",
    },
    {
      number: "02",
      name: "Evening Silhouette",
      designer: "Designer A",
      description: "Long structured evening look.",
      notes: "Silver earrings required.",
    },
    {
      number: "03",
      name: "Finale Look",
      designer: "Designer A",
      description: "Final runway statement.",
      notes: "Finale position.",
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
          maxWidth: "1000px",
          margin: "0 auto",
          padding: "24px 20px 70px",
        }}
      >
        <Header />

        <section style={{ marginBottom: "30px" }}>
          <div style={labelStyle}>MODEL LOOKBOOK</div>
          <h1 style={titleStyle}>Your Looks</h1>
          <p style={subTitleStyle}>
            Everything assigned to you for the runway.
          </p>
        </section>

        <div
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
          }}
        >
          {looks.map((look) => (
            <article
              key={look.number}
              style={{
                border: `1px solid ${COLORS.border}`,
              }}
            >
              <div
                style={{
                  height: "230px",
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
                    fontSize: "65px",
                  }}
                >
                  {look.number}
                </div>
              </div>

              <div style={{ padding: "18px" }}>
                <h2 style={cardTitle}>{look.name}</h2>

                <div style={purpleText}>
                  DESIGNER: {look.designer}
                </div>

                <p style={subTitleStyle}>
                  {look.description}
                </p>

                <div
                  style={{
                    background: COLORS.lightGold,
                    padding: "12px",
                    fontSize: "9px",
                    lineHeight: "1.5",
                  }}
                >
                  <strong>NOTES</strong>
                  <br />
                  {look.notes}
                </div>
              </div>
            </article>
          ))}
        </div>
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
        <div style={purpleText}>LOOKBOOK</div>
        <div style={headerTitle}>My Looks</div>
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

const titleStyle = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: "46px",
  fontWeight: "500",
  margin: "6px 0",
};

const subTitleStyle = {
  color: COLORS.gray,
  fontSize: "10px",
  lineHeight: "1.6",
};

const cardTitle = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: "28px",
  fontWeight: "500",
  margin: "0 0 8px",
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
  marginTop: "4px",
};

export default Lookbook;
