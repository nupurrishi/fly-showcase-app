import React, { useState } from "react";

const COLORS = {
  black: "#161616",
  purple: "#81247C",
  gold: "#DEB64B",
  white: "#FFFFFF",
  gray: "#777777",
  border: "#E8E8E8",
  lightPurple: "#F5EAF4",
};

function Profile() {
  const [name, setName] = useState("Model One");
  const [email, setEmail] = useState("model.one@example.com");
  const [phone, setPhone] = useState("(555) 123-4567");
  const [location, setLocation] = useState("Dallas, Texas");
  const [saved, setSaved] = useState(false);

  function saveProfile() {
    setSaved(true);

    setTimeout(() => {
      setSaved(false);
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
      <div style={{ height: "7px", background: COLORS.purple }} />

      <div
        style={{
          maxWidth: "650px",
          margin: "0 auto",
          padding: "24px 20px 70px",
        }}
      >
        <Header />

        <section
          style={{
            background: COLORS.black,
            color: COLORS.white,
            padding: "25px",
            marginBottom: "25px",
          }}
        >
          <div style={goldLabel}>MODEL PROFILE</div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "40px",
              marginTop: "6px",
            }}
          >
            {name}
          </div>

          <div
            style={{
              color: "#BBBBBB",
              fontSize: "9px",
              marginTop: "5px",
            }}
          >
            MODEL 01 • FLY SHOWCASE
          </div>
        </section>

        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            padding: "20px",
          }}
        >
          <div style={labelStyle}>PERSONAL INFORMATION</div>

          <Field
            label="FULL NAME"
            value={name}
            setValue={setName}
          />

          <Field
            label="EMAIL"
            value={email}
            setValue={setEmail}
            type="email"
          />

          <Field
            label="PHONE"
            value={phone}
            setValue={setPhone}
          />

          <Field
            label="LOCATION"
            value={location}
            setValue={setLocation}
          />

          <button
            onClick={saveProfile}
            style={{
              width: "100%",
              height: "48px",
              border: "none",
              background: COLORS.purple,
              color: COLORS.white,
              fontSize: "8px",
              fontWeight: "700",
              cursor: "pointer",
              marginTop: "5px",
            }}
          >
            SAVE PROFILE
          </button>
        </section>
      </div>

      {saved && (
        <div
          style={{
            position: "fixed",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: COLORS.black,
            color: COLORS.white,
            padding: "15px 25px",
            fontSize: "9px",
            fontWeight: "700",
          }}
        >
          PROFILE SAVED
        </div>
      )}
    </main>
  );
}

function Field({
  label,
  value,
  setValue,
  type = "text",
}) {
  return (
    <div style={{ marginTop: "18px" }}>
      <label style={labelStyle}>{label}</label>

      <input
        type={type}
        value={value}
        onChange={(event) =>
          setValue(event.target.value)
        }
        style={{
          width: "100%",
          height: "46px",
          boxSizing: "border-box",
          border: `1px solid ${COLORS.border}`,
          padding: "0 12px",
          marginTop: "6px",
          fontSize: "10px",
        }}
      />
    </div>
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
        <div style={headerTitle}>My Profile</div>
      </div>
    </header>
  );
}

const labelStyle = {
  color: COLORS.purple,
  fontSize: "8px",
  fontWeight: "700",
  letterSpacing: "1.5px",
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

export default Profile;
