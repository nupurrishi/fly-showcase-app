import React, { useState } from "react";

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

function Notifications() {
  const [notifications, setNotifications] = useState([
    {
      id: 1,
      title: "Hair & Makeup Reminder",
      message: "Your hair and makeup call is at 10:00 AM.",
      time: "Today • 8:30 AM",
      type: "IMPORTANT",
      read: false,
    },
    {
      id: 2,
      title: "Designer Fitting",
      message: "Your fitting is scheduled for 12:00 PM.",
      time: "Today • 8:00 AM",
      type: "SCHEDULE",
      read: false,
    },
    {
      id: 3,
      title: "Welcome to Fly Showcase",
      message: "You have been confirmed for the Main Stage.",
      time: "Yesterday",
      type: "UPDATE",
      read: true,
    },
  ]);

  function markRead(id) {
    setNotifications((current) =>
      current.map((item) =>
        item.id === id
          ? { ...item, read: true }
          : item
      )
    );
  }

  function markAllRead() {
    setNotifications((current) =>
      current.map((item) => ({
        ...item,
        read: true,
      }))
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: COLORS.white,
        fontFamily: '"PT Sans", Arial, sans-serif',
        color: COLORS.black,
      }}
    >
      <div style={{ height: "7px", background: COLORS.purple }} />

      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          padding: "24px 20px 70px",
        }}
      >
        <Header />

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "18px",
            gap: "15px",
          }}
        >
          <div>
            <div style={labelStyle}>NOTIFICATIONS</div>
            <h1 style={titleStyle}>Updates</h1>
          </div>

          <button
            onClick={markAllRead}
            style={buttonStyle}
          >
            MARK ALL READ
          </button>
        </div>

        <div>
          {notifications.map((item) => (
            <button
              key={item.id}
              onClick={() => markRead(item.id)}
              style={{
                width: "100%",
                textAlign: "left",
                border: `1px solid ${COLORS.border}`,
                borderLeft: item.read
                  ? `4px solid ${COLORS.border}`
                  : `4px solid ${COLORS.purple}`,
                background: item.read
                  ? COLORS.white
                  : COLORS.lightPurple,
                padding: "18px",
                marginBottom: "10px",
                cursor: "pointer",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  gap: "10px",
                }}
              >
                <div
                  style={{
                    color: COLORS.purple,
                    fontSize: "8px",
                    fontWeight: "700",
                    letterSpacing: "1px",
                  }}
                >
                  {item.type}
                </div>

                {!item.read && (
                  <div
                    style={{
                      color: COLORS.purple,
                      fontSize: "8px",
                      fontWeight: "700",
                    }}
                  >
                    NEW
                  </div>
                )}
              </div>

              <div style={cardTitle}>
                {item.title}
              </div>

              <div
                style={{
                  color: COLORS.gray,
                  fontSize: "10px",
                  lineHeight: "1.5",
                  marginTop: "5px",
                }}
              >
                {item.message}
              </div>

              <div
                style={{
                  color: COLORS.gray,
                  fontSize: "8px",
                  marginTop: "10px",
                }}
              >
                {item.time}
              </div>
            </button>
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
        <div style={purpleText}>MODEL</div>
        <div style={headerTitle}>Notifications</div>
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
  margin: "5px 0",
};

const cardTitle = {
  fontFamily: '"Cormorant Garamond", Georgia, serif',
  fontSize: "24px",
  marginTop: "8px",
};

const buttonStyle = {
  minHeight: "40px",
  border: `1px solid ${COLORS.purple}`,
  background: COLORS.white,
  color: COLORS.purple,
  padding: "0 12px",
  fontSize: "8px",
  fontWeight: "700",
  cursor: "pointer",
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

export default Notifications;
