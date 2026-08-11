import React, { useState } from "react";

const COLORS = {
  purple: "#81247C",
  gold: "#DEB64B",
  black: "#161616",
  white: "#FFFFFF",
  lightPurple: "#F5EAF4",
  lightGold: "#F8F3E5",
  border: "#E8E8E8",
  gray: "#777777",
  green: "#2F7D5B",
  lightGreen: "#EAF5EF",
  red: "#B33A3A",
};

function AdminDashboard() {
  // =========================
  // SAMPLE DATA
  // =========================

  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Model One",
      email: "model.one@example.com",
      role: "MODEL",
    },
    {
      id: 2,
      name: "Designer A",
      email: "designer.a@example.com",
      role: "DESIGNER",
    },
    {
      id: 3,
      name: "Stage Manager",
      email: "stage@example.com",
      role: "STAGE MANAGER",
    },
    {
      id: 4,
      name: "Backstage Manager",
      email: "backstage@example.com",
      role: "BACKSTAGE",
    },
  ]);

  const [events, setEvents] = useState([
    {
      id: 1,
      name: "Fly Showcase",
      date: "November 11",
      location: "Main Stage",
      status: "ACTIVE",
    },
    {
      id: 2,
      name: "Designer Preview",
      date: "November 9",
      location: "Studio",
      status: "UPCOMING",
    },
  ]);

  // =========================
  // PAGE STATE
  // =========================

  const [activePage, setActivePage] = useState("OVERVIEW");

  const [showUserModal, setShowUserModal] =
    useState(false);

  const [showEventModal, setShowEventModal] =
    useState(false);

  // =========================
  // FORM STATE
  // =========================

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userRole, setUserRole] = useState("MODEL");

  const [eventName, setEventName] = useState("");
  const [eventDate, setEventDate] = useState("");
  const [eventLocation, setEventLocation] =
    useState("");

  // =========================
  // MESSAGE
  // =========================

  const [message, setMessage] = useState("");

  function showMessage(text) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  // =========================
  // USER FUNCTIONS
  // =========================

  function addUser() {
    if (!userName || !userEmail) {
      showMessage("Please enter a name and email.");
      return;
    }

    const newUser = {
      id: Date.now(),
      name: userName,
      email: userEmail,
      role: userRole,
    };

    setUsers([...users, newUser]);

    setUserName("");
    setUserEmail("");
    setUserRole("MODEL");
    setShowUserModal(false);

    showMessage("User added successfully.");
  }

  function deleteUser(id) {
    setUsers(
      users.filter((user) => user.id !== id)
    );

    showMessage("User removed.");
  }

  // =========================
  // EVENT FUNCTIONS
  // =========================

  function addEvent() {
    if (
      !eventName ||
      !eventDate ||
      !eventLocation
    ) {
      showMessage(
        "Please complete all event fields."
      );
      return;
    }

    const newEvent = {
      id: Date.now(),
      name: eventName,
      date: eventDate,
      location: eventLocation,
      status: "UPCOMING",
    };

    setEvents([...events, newEvent]);

    setEventName("");
    setEventDate("");
    setEventLocation("");
    setShowEventModal(false);

    showMessage("Event created successfully.");
  }

  function deleteEvent(id) {
    setEvents(
      events.filter((event) => event.id !== id)
    );

    showMessage("Event removed.");
  }

  // =========================
  // NAVIGATION
  // =========================

  const pages = [
    "OVERVIEW",
    "USERS",
    "EVENTS",
    "SCHEDULE",
    "MAKEUP",
    "LOOKS",
    "NOTIFICATIONS",
  ];

  return (
    <main style={styles.page}>
      <div style={styles.container}>

        {/* TOP BAR */}
        <div style={styles.topBar}></div>

        {/* HEADER */}
        <header style={styles.header}>
          <div>
            <div style={styles.logo}>FLY</div>
            <div style={styles.logoText}>
              SHOWCASE
            </div>
          </div>

          <div style={styles.headerRight}>
            <div style={styles.adminLabel}>
              ADMIN
            </div>

            <div style={styles.headerTitle}>
              Control Center
            </div>
          </div>
        </header>

        {/* HERO */}
        <section style={styles.hero}>
          <div style={styles.heroLabel}>
            FLY SHOWCASE ADMINISTRATION
          </div>

          <h1 style={styles.heroTitle}>
            Control Center
          </h1>

          <p style={styles.heroText}>
            Manage your events, team, schedules
            and show operations.
          </p>
        </section>

        {/* NAVIGATION */}
        <nav style={styles.nav}>
          {pages.map((page) => (
            <button
              key={page}
              onClick={() => setActivePage(page)}
              style={{
                ...styles.navButton,
                ...(activePage === page
                  ? styles.navButtonActive
                  : {}),
              }}
            >
              {page}
            </button>
          ))}
        </nav>

        {/* =========================
            OVERVIEW
        ========================= */}

        {activePage === "OVERVIEW" && (
          <>
            <section style={styles.stats}>
              <Stat
                title="USERS"
                number={users.length}
                color={COLORS.purple}
              />

              <Stat
                title="EVENTS"
                number={events.length}
                color={COLORS.gold}
              />

              <Stat
                title="MODELS"
                number={
                  users.filter(
                    (user) =>
                      user.role === "MODEL"
                  ).length
                }
                color={COLORS.green}
              />

              <Stat
                title="DESIGNERS"
                number={
                  users.filter(
                    (user) =>
                      user.role === "DESIGNER"
                  ).length
                }
                color={COLORS.black}
              />
            </section>

            <section style={styles.quickActions}>
              <button
                onClick={() =>
                  setShowUserModal(true)
                }
                style={{
                  ...styles.quickCard,
                  background:
                    COLORS.lightPurple,
                }}
              >
                <div style={styles.quickLabel}>
                  + ADD USER
                </div>

                <div style={styles.quickTitle}>
                  Add a team member
                </div>
              </button>

              <button
                onClick={() =>
                  setShowEventModal(true)
                }
                style={{
                  ...styles.quickCard,
                  background: COLORS.lightGold,
                }}
              >
                <div
                  style={{
                    ...styles.quickLabel,
                    color: "#806313",
                  }}
                >
                  + CREATE EVENT
                </div>

                <div style={styles.quickTitle}>
                  Start a new show
                </div>
              </button>
            </section>
          </>
        )}

        {/* =========================
            USERS
        ========================= */}

        {activePage === "USERS" && (
          <section>
            <SectionHeader
              title="USER MANAGEMENT"
              text="Manage access to Fly Showcase."
              button="+ ADD USER"
              onClick={() =>
                setShowUserModal(true)
              }
            />

            {users.map((user) => (
              <div
                key={user.id}
                style={styles.userRow}
              >
                <div style={styles.userInfo}>
                  <div style={styles.userName}>
                    {user.name}
                  </div>

                  <div style={styles.userEmail}>
                    {user.email}
                  </div>
                </div>

                <div style={styles.role}>
                  {user.role}
                </div>

                <div style={styles.active}>
                  ● ACTIVE
                </div>

                <button
                  onClick={() =>
                    deleteUser(user.id)
                  }
                  style={styles.deleteButton}
                >
                  REMOVE
                </button>
              </div>
            ))}
          </section>
        )}

        {/* =========================
            EVENTS
        ========================= */}

        {activePage === "EVENTS" && (
          <section>
            <SectionHeader
              title="EVENT MANAGEMENT"
              text="Create and manage your shows."
              button="+ CREATE EVENT"
              onClick={() =>
                setShowEventModal(true)
              }
            />

            <div style={styles.eventGrid}>
              {events.map((event) => (
                <div
                  key={event.id}
                  style={styles.eventCard}
                >
                  <div
                    style={{
                      ...styles.eventStatus,
                      color:
                        event.status === "ACTIVE"
                          ? COLORS.green
                          : COLORS.purple,
                    }}
                  >
                    ● {event.status}
                  </div>

                  <div style={styles.eventName}>
                    {event.name}
                  </div>

                  <div style={styles.eventInfo}>
                    {event.date}
                  </div>

                  <div style={styles.eventInfo}>
                    {event.location}
                  </div>

                  <button
                    onClick={() =>
                      deleteEvent(event.id)
                    }
                    style={styles.deleteButton}
                  >
                    REMOVE EVENT
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* =========================
            OTHER PAGES
        ========================= */}

        {[
          "SCHEDULE",
          "MAKEUP",
          "LOOKS",
          "NOTIFICATIONS",
        ].includes(activePage) && (
          <section style={styles.comingSoon}>
            <div style={styles.comingSoonLabel}>
              ADMIN CONTROL
            </div>

            <div style={styles.comingSoonTitle}>
              {activePage}
            </div>

            <p style={styles.comingSoonText}>
              This section will connect to your
              live event data.
            </p>
          </section>
        )}

      </div>

      {/* =========================
          ADD USER MODAL
      ========================= */}

      {showUserModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={styles.modalLabel}>
              USER MANAGEMENT
            </div>

            <h2 style={styles.modalTitle}>
              Add Team Member
            </h2>

            <label style={styles.label}>
              NAME
            </label>

            <input
              value={userName}
              onChange={(e) =>
                setUserName(e.target.value)
              }
              placeholder="Full name"
              style={styles.input}
            />

            <label style={styles.label}>
              EMAIL
            </label>

            <input
              value={userEmail}
              onChange={(e) =>
                setUserEmail(e.target.value)
              }
              placeholder="Email address"
              type="email"
              style={styles.input}
            />

            <label style={styles.label}>
              ROLE
            </label>

            <select
              value={userRole}
              onChange={(e) =>
                setUserRole(e.target.value)
              }
              style={styles.input}
            >
              <option value="MODEL">Model</option>
              <option value="DESIGNER">
                Designer
              </option>
              <option value="STAGE MANAGER">
                Stage Manager
              </option>
              <option value="BACKSTAGE">
                Backstage Manager
              </option>
              <option value="ADMIN">Admin</option>
            </select>

            <ModalButtons
              cancel={() =>
                setShowUserModal(false)
              }
              save={addUser}
              saveText="ADD USER"
            />
          </div>
        </div>
      )}

      {/* =========================
          ADD EVENT MODAL
      ========================= */}

      {showEventModal && (
        <div style={styles.overlay}>
          <div style={styles.modal}>
            <div style={styles.modalLabel}>
              EVENT MANAGEMENT
            </div>

            <h2 style={styles.modalTitle}>
              Create New Event
            </h2>

            <label style={styles.label}>
              EVENT NAME
            </label>

            <input
              value={eventName}
              onChange={(e) =>
                setEventName(e.target.value)
              }
              placeholder="Event name"
              style={styles.input}
            />

            <label style={styles.label}>
              DATE
            </label>

            <input
              value={eventDate}
              onChange={(e) =>
                setEventDate(e.target.value)
              }
              placeholder="November 11"
              style={styles.input}
            />

            <label style={styles.label}>
              LOCATION
            </label>

            <input
              value={eventLocation}
              onChange={(e) =>
                setEventLocation(e.target.value)
              }
              placeholder="Main Stage"
              style={styles.input}
            />

            <ModalButtons
              cancel={() =>
                setShowEventModal(false)
              }
              save={addEvent}
              saveText="CREATE EVENT"
            />
          </div>
        </div>
      )}

      {/* MESSAGE */}
      {message && (
        <div style={styles.message}>
          {message}
        </div>
      )}
    </main>
  );
}


/* =========================
   SMALL COMPONENTS
========================= */

function Stat({ title, number, color }) {
  return (
    <div
      style={{
        ...styles.stat,
        borderTop: `4px solid ${color}`,
      }}
    >
      <div style={styles.statTitle}>
        {title}
      </div>

      <div style={styles.statNumber}>
        {number}
      </div>
    </div>
  );
}


function SectionHeader({
  title,
  text,
  button,
  onClick,
}) {
  return (
    <div style={styles.sectionHeader}>
      <div>
        <div style={styles.sectionTitle}>
          {title}
        </div>

        <div style={styles.sectionSubtitle}>
          {text}
        </div>
      </div>

      <button
        onClick={onClick}
        style={styles.primaryButton}
      >
        {button}
      </button>
    </div>
  );
}


function ModalButtons({
  cancel,
  save,
  saveText,
}) {
  return (
    <div style={styles.modalButtons}>
      <button
        onClick={cancel}
        style={styles.cancelButton}
      >
        CANCEL
      </button>

      <button
        onClick={save}
        style={styles.primaryButton}
      >
        {saveText}
      </button>
    </div>
  );
}


/* =========================
   STYLES
   EDIT COLORS HERE
========================= */

const styles = {
  page: {
    minHeight: "100vh",
    background: COLORS.white,
    color: COLORS.black,
    fontFamily: '"PT Sans", Arial, sans-serif',
    padding: "0 20px 80px",
  },

  container: {
    maxWidth: "1100px",
    margin: "0 auto",
  },

  topBar: {
    height: "7px",
    background: COLORS.purple,
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 0",
    marginBottom: "30px",
  },

  logo: {
    fontFamily:
      '"Cormorant Garamond", Georgia, serif',
    color: COLORS.purple,
    fontSize: "38px",
    fontWeight: "600",
    lineHeight: "0.8",
  },

  logoText: {
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "3px",
    marginTop: "9px",
  },

  headerRight: {
    textAlign: "right",
  },

  adminLabel: {
    color: COLORS.purple,
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "1.5px",
  },

  headerTitle: {
    fontFamily:
      '"Cormorant Garamond", Georgia, serif',
    fontSize: "23px",
    marginTop: "4px",
  },

  hero: {
    background: COLORS.black,
    color: COLORS.white,
    padding: "30px",
    marginBottom: "20px",
  },

  heroLabel: {
    color: COLORS.gold,
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  heroTitle: {
    fontFamily:
      '"Cormorant Garamond", Georgia, serif',
    fontSize: "44px",
    fontWeight: "500",
    margin: "10px 0",
  },

  heroText: {
    color: "#BBBBBB",
    fontSize: "10px",
    margin: 0,
  },

  nav: {
    display: "flex",
    gap: "7px",
    overflowX: "auto",
    paddingBottom: "10px",
    marginBottom: "30px",
  },

  navButton: {
    flexShrink: 0,
    minHeight: "40px",
    border: `1px solid ${COLORS.border}`,
    background: COLORS.white,
    color: COLORS.black,
    padding: "0 14px",
    cursor: "pointer",
    fontSize: "8px",
    fontWeight: "700",
  },

  navButtonActive: {
    background: COLORS.purple,
    color: COLORS.white,
    border: `1px solid ${COLORS.purple}`,
  },

  stats: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(150px, 1fr))",
    gap: "10px",
    marginBottom: "30px",
  },

  stat: {
    border: `1px solid ${COLORS.border}`,
    padding: "18px",
  },

  statTitle: {
    color: COLORS.gray,
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "1.5px",
  },

  statNumber: {
    fontFamily:
      '"Cormorant Garamond", Georgia, serif',
    fontSize: "38px",
    marginTop: "5px",
  },

  quickActions: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(240px, 1fr))",
    gap: "12px",
  },

  quickCard: {
    border: "none",
    padding: "20px",
    textAlign: "left",
    cursor: "pointer",
  },

  quickLabel: {
    color: COLORS.purple,
    fontSize: "9px",
    fontWeight: "700",
  },

  quickTitle: {
    fontFamily:
      '"Cormorant Garamond", Georgia, serif',
    fontSize: "27px",
    marginTop: "6px",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    gap: "15px",
    flexWrap: "wrap",
    marginBottom: "15px",
  },

  sectionTitle: {
    fontSize: "9px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  sectionSubtitle: {
    color: COLORS.gray,
    fontSize: "9px",
    marginTop: "4px",
  },

  primaryButton: {
    minHeight: "44px",
    border: "none",
    background: COLORS.purple,
    color: COLORS.white,
    padding: "0 15px",
    cursor: "pointer",
    fontSize: "8px",
    fontWeight: "700",
  },

  userRow: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    gap: "15px",
    padding: "16px 0",
    borderTop: `1px solid ${COLORS.border}`,
    flexWrap: "wrap",
  },

  userInfo: {
    flex: 1,
    minWidth: "180px",
  },

  userName: {
    fontFamily:
      '"Cormorant Garamond", Georgia, serif',
    fontSize: "23px",
  },

  userEmail: {
    color: COLORS.gray,
    fontSize: "8px",
    marginTop: "3px",
  },

  role: {
    background: COLORS.lightPurple,
    color: COLORS.purple,
    padding: "6px 8px",
    fontSize: "7px",
    fontWeight: "700",
  },

  active: {
    color: COLORS.green,
    fontSize: "7px",
    fontWeight: "700",
  },

  deleteButton: {
    minHeight: "38px",
    border: `1px solid ${COLORS.border}`,
    background: COLORS.white,
    color: COLORS.red,
    padding: "0 11px",
    cursor: "pointer",
    fontSize: "7px",
    fontWeight: "700",
  },

  eventGrid: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(250px, 1fr))",
    gap: "12px",
  },

  eventCard: {
    border: `1px solid ${COLORS.border}`,
    padding: "18px",
  },

  eventStatus: {
    fontSize: "7px",
    fontWeight: "700",
    letterSpacing: "1px",
  },

  eventName: {
    fontFamily:
      '"Cormorant Garamond", Georgia, serif',
    fontSize: "28px",
    marginTop: "7px",
  },

  eventInfo: {
    color: COLORS.gray,
    fontSize: "9px",
    marginTop: "4px",
  },

  comingSoon: {
    background: COLORS.lightPurple,
    padding: "35px 20px",
    textAlign: "center",
  },

  comingSoonLabel: {
    color: COLORS.purple,
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  comingSoonTitle: {
    fontFamily:
      '"Cormorant Garamond", Georgia, serif',
    fontSize: "34px",
    marginTop: "7px",
  },

  comingSoonText: {
    color: COLORS.gray,
    fontSize: "10px",
  },

  overlay: {
    position: "fixed",
    inset: 0,
    background: "rgba(22,22,22,0.65)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "20px",
    zIndex: 1000,
  },

  modal: {
    width: "100%",
    maxWidth: "500px",
    background: COLORS.white,
    padding: "25px",
    boxSizing: "border-box",
  },

  modalLabel: {
    color: COLORS.purple,
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  modalTitle: {
    fontFamily:
      '"Cormorant Garamond", Georgia, serif',
    fontSize: "34px",
    fontWeight: "500",
    margin: "7px 0 22px",
  },

  label: {
    display: "block",
    fontSize: "8px",
    fontWeight: "700",
    marginBottom: "6px",
  },

  input: {
    width: "100%",
    height: "46px",
    border: `1px solid ${COLORS.border}`,
    padding: "0 12px",
    boxSizing: "border-box",
    marginBottom: "14px",
    background: COLORS.white,
  },

  modalButtons: {
    display: "flex",
    gap: "9px",
    marginTop: "5px",
  },

  cancelButton: {
    flex: 1,
    minHeight: "44px",
    border: `1px solid ${COLORS.border}`,
    background: COLORS.white,
    cursor: "pointer",
    fontSize: "8px",
    fontWeight: "700",
  },

  message: {
    position: "fixed",
    left: "50%",
    bottom: "25px",
    transform: "translateX(-50%)",
    width: "calc(100% - 40px)",
    maxWidth: "450px",
    background: COLORS.black,
    color: COLORS.white,
    padding: "15px",
    textAlign: "center",
    fontSize: "10px",
    fontWeight: "700",
    zIndex: 1200,
    boxSizing: "border-box",
  },
};

export default AdminDashboard;
