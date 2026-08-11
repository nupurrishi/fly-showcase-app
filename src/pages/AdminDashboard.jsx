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
  lightRed: "#FBEAEA",
};

const initialUsers = [
  {
    id: 1,
    name: "Model One",
    email: "model.one@example.com",
    role: "MODEL",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Designer A",
    email: "designer.a@example.com",
    role: "DESIGNER",
    status: "ACTIVE",
  },
  {
    id: 3,
    name: "Stage Manager",
    email: "stage@example.com",
    role: "STAGE MANAGER",
    status: "ACTIVE",
  },
  {
    id: 4,
    name: "Backstage Manager",
    email: "backstage@example.com",
    role: "BACKSTAGE",
    status: "ACTIVE",
  },
];

const initialEvents = [
  {
    id: 1,
    name: "Fly Showcase",
    location: "Main Stage",
    date: "November 11",
    status: "ACTIVE",
  },
  {
    id: 2,
    name: "Designer Preview",
    location: "Studio",
    date: "November 9",
    status: "UPCOMING",
  },
];

function AdminDashboard() {
  const [activeSection, setActiveSection] =
    useState("OVERVIEW");

  const [users, setUsers] =
    useState(initialUsers);

  const [events, setEvents] =
    useState(initialEvents);

  const [showUserModal, setShowUserModal] =
    useState(false);

  const [showEventModal, setShowEventModal] =
    useState(false);

  const [message, setMessage] =
    useState("");

  const [userName, setUserName] =
    useState("");

  const [userEmail, setUserEmail] =
    useState("");

  const [userRole, setUserRole] =
    useState("MODEL");

  const [eventName, setEventName] =
    useState("");

  const [eventDate, setEventDate] =
    useState("");

  const [eventLocation, setEventLocation] =
    useState("");

  function showMessage(text) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  function addUser() {
    if (!userName.trim() || !userEmail.trim()) {
      showMessage(
        "Please enter a name and email."
      );
      return;
    }

    const newUser = {
      id: Date.now(),
      name: userName,
      email: userEmail,
      role: userRole,
      status: "ACTIVE",
    };

    setUsers((current) => [
      ...current,
      newUser,
    ]);

    setUserName("");
    setUserEmail("");
    setUserRole("MODEL");
    setShowUserModal(false);

    showMessage("User added successfully.");
  }

  function removeUser(id) {
    setUsers((current) =>
      current.filter((user) => user.id !== id)
    );

    showMessage("User removed.");
  }

  function addEvent() {
    if (
      !eventName.trim() ||
      !eventDate.trim() ||
      !eventLocation.trim()
    ) {
      showMessage(
        "Please complete all event fields."
      );
      return;
    }

    const newEvent = {
      id: Date.now(),
      name: eventName,
      location: eventLocation,
      date: eventDate,
      status: "UPCOMING",
    };

    setEvents((current) => [
      ...current,
      newEvent,
    ]);

    setEventName("");
    setEventDate("");
    setEventLocation("");
    setShowEventModal(false);

    showMessage("Event created successfully.");
  }

  function deleteEvent(id) {
    setEvents((current) =>
      current.filter((event) => event.id !== id)
    );

    showMessage("Event removed.");
  }

  const menuItems = [
    "OVERVIEW",
    "USERS",
    "EVENTS",
    "SCHEDULE",
    "MAKEUP",
    "LOOKS",
    "NOTIFICATIONS",
  ];

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
      {/* BRAND BAR */}

      <div
        style={{
          height: "7px",
          backgroundColor: COLORS.purple,
          width: "100%",
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1100px",
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
                letterSpacing: "1.5px",
                fontWeight: "700",
              }}
            >
              ADMIN
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "23px",
                marginTop: "4px",
              }}
            >
              Control Center
            </div>
          </div>
        </header>

        {/* ADMIN HERO */}

        <section
          style={{
            backgroundColor: COLORS.black,
            color: COLORS.white,
            padding: "25px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              color: COLORS.gold,
              fontSize: "8px",
              letterSpacing: "2px",
              fontWeight: "700",
              marginBottom: "8px",
            }}
          >
            FLY SHOWCASE ADMINISTRATION
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "42px",
              lineHeight: "0.95",
            }}
          >
            Control Center
          </div>

          <div
            style={{
              color: "#BBBBBB",
              fontSize: "10px",
              marginTop: "9px",
            }}
          >
            Manage your events, team, schedules
            and show operations.
          </div>
        </section>

        {/* NAVIGATION */}

        <nav
          style={{
            display: "flex",
            gap: "7px",
            overflowX: "auto",
            paddingBottom: "8px",
            marginBottom: "28px",
          }}
        >
          {menuItems.map((item) => {
            const active =
              activeSection === item;

            return (
              <button
                key={item}
                type="button"
                onClick={() =>
                  setActiveSection(item)
                }
                style={{
                  flexShrink: 0,
                  minHeight: "40px",
                  border: active
                    ? `1px solid ${COLORS.purple}`
                    : `1px solid ${COLORS.border}`,
                  backgroundColor: active
                    ? COLORS.purple
                    : COLORS.white,
                  color: active
                    ? COLORS.white
                    : COLORS.black,
                  padding: "0 14px",
                  cursor: "pointer",
                  fontSize: "8px",
                  fontWeight: "700",
                }}
              >
                {item}
              </button>
            );
          })}
        </nav>

        {/* OVERVIEW */}

        {activeSection === "OVERVIEW" && (
          <>
            <section
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(150px, 1fr))",
                gap: "10px",
                marginBottom: "30px",
              }}
            >
              {[
                [
                  "USERS",
                  users.length,
                  COLORS.purple,
                ],
                [
                  "EVENTS",
                  events.length,
                  COLORS.gold,
                ],
                [
                  "MODELS",
                  users.filter(
                    (user) =>
                      user.role === "MODEL"
                  ).length,
                  COLORS.green,
                ],
                [
                  "DESIGNERS",
                  users.filter(
                    (user) =>
                      user.role === "DESIGNER"
                  ).length,
                  COLORS.black,
                ],
              ].map((stat) => (
                <div
                  key={stat[0]}
                  style={{
                    border: `1px solid ${COLORS.border}`,
                    borderTop: `4px solid ${stat[2]}`,
                    padding: "18px",
                  }}
                >
                  <div
                    style={{
                      color: COLORS.gray,
                      fontSize: "8px",
                      fontWeight: "700",
                      letterSpacing: "1.5px",
                    }}
                  >
                    {stat[0]}
                  </div>

                  <div
                    style={{
                      fontFamily:
                        '"Cormorant Garamond", Georgia, serif',
                      fontSize: "38px",
                      marginTop: "5px",
                    }}
                  >
                    {stat[1]}
                  </div>
                </div>
              ))}
            </section>

            <section
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(240px, 1fr))",
                gap: "14px",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setShowUserModal(true)
                }
                style={{
                  textAlign: "left",
                  border: "none",
                  backgroundColor:
                    COLORS.lightPurple,
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    color: COLORS.purple,
                    fontSize: "9px",
                    fontWeight: "700",
                  }}
                >
                  + ADD USER
                </div>

                <div
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", Georgia, serif',
                    fontSize: "27px",
                    marginTop: "6px",
                  }}
                >
                  Add a team member
                </div>
              </button>

              <button
                type="button"
                onClick={() =>
                  setShowEventModal(true)
                }
                style={{
                  textAlign: "left",
                  border: "none",
                  backgroundColor:
                    COLORS.lightGold,
                  padding: "20px",
                  cursor: "pointer",
                }}
              >
                <div
                  style={{
                    color: "#806313",
                    fontSize: "9px",
                    fontWeight: "700",
                  }}
                >
                  + CREATE EVENT
                </div>

                <div
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", Georgia, serif',
                    fontSize: "27px",
                    marginTop: "6px",
                  }}
                >
                  Start a new show
                </div>
              </button>
            </section>
          </>
        )}

        {/* USERS */}

        {activeSection === "USERS" && (
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                marginBottom: "15px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                  }}
                >
                  USER MANAGEMENT
                </div>

                <div
                  style={{
                    color: COLORS.gray,
                    fontSize: "9px",
                    marginTop: "4px",
                  }}
                >
                  Manage access to Fly Showcase.
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowUserModal(true)
                }
                style={{
                  minHeight: "44px",
                  border: "none",
                  backgroundColor: COLORS.purple,
                  color: COLORS.white,
                  padding: "0 16px",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "8px",
                }}
              >
                + ADD USER
              </button>
            </div>

            <div
              style={{
                borderTop: `1px solid ${COLORS.border}`,
              }}
            >
              {users.map((user) => (
                <div
                  key={user.id}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between",
                    gap: "15px",
                    padding: "16px 0",
                    borderBottom: `1px solid ${COLORS.border}`,
                    flexWrap: "wrap",
                  }}
                >
                  <div style={{ flex: 1 }}>
                    <div
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", Georgia, serif',
                        fontSize: "23px",
                      }}
                    >
                      {user.name}
                    </div>

                    <div
                      style={{
                        color: COLORS.gray,
                        fontSize: "8px",
                        marginTop: "3px",
                      }}
                    >
                      {user.email}
                    </div>
                  </div>

                  <div
                    style={{
                      backgroundColor:
                        COLORS.lightPurple,
                      color: COLORS.purple,
                      padding: "6px 8px",
                      fontSize: "7px",
                      fontWeight: "700",
                    }}
                  >
                    {user.role}
                  </div>

                  <div
                    style={{
                      color: COLORS.green,
                      fontSize: "7px",
                      fontWeight: "700",
                    }}
                  >
                    ● {user.status}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      removeUser(user.id)
                    }
                    style={{
                      border: `1px solid ${COLORS.border}`,
                      backgroundColor:
                        COLORS.white,
                      color: COLORS.red,
                      minHeight: "38px",
                      padding: "0 11px",
                      cursor: "pointer",
                      fontSize: "7px",
                      fontWeight: "700",
                    }}
                  >
                    REMOVE
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* EVENTS */}

        {activeSection === "EVENTS" && (
          <section>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                marginBottom: "15px",
                flexWrap: "wrap",
              }}
            >
              <div>
                <div
                  style={{
                    fontSize: "9px",
                    fontWeight: "700",
                    letterSpacing: "2px",
                  }}
                >
                  EVENT MANAGEMENT
                </div>

                <div
                  style={{
                    color: COLORS.gray,
                    fontSize: "9px",
                    marginTop: "4px",
                  }}
                >
                  Create and manage your shows.
                </div>
              </div>

              <button
                type="button"
                onClick={() =>
                  setShowEventModal(true)
                }
                style={{
                  minHeight: "44px",
                  border: "none",
                  backgroundColor: COLORS.purple,
                  color: COLORS.white,
                  padding: "0 16px",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "8px",
                }}
              >
                + CREATE EVENT
              </button>
            </div>

            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(auto-fit, minmax(250px, 1fr))",
                gap: "12px",
              }}
            >
              {events.map((event) => (
                <div
                  key={event.id}
                  style={{
                    border: `1px solid ${COLORS.border}`,
                    padding: "18px",
                  }}
                >
                  <div
                    style={{
                      color:
                        event.status === "ACTIVE"
                          ? COLORS.green
                          : COLORS.purple,
                      fontSize: "7px",
                      fontWeight: "700",
                      letterSpacing: "1px",
                    }}
                  >
                    ● {event.status}
                  </div>

                  <div
                    style={{
                      fontFamily:
                        '"Cormorant Garamond", Georgia, serif',
                      fontSize: "28px",
                      marginTop: "7px",
                    }}
                  >
                    {event.name}
                  </div>

                  <div
                    style={{
                      color: COLORS.gray,
                      fontSize: "9px",
                      marginTop: "7px",
                    }}
                  >
                    {event.date}
                  </div>

                  <div
                    style={{
                      color: COLORS.gray,
                      fontSize: "9px",
                      marginTop: "3px",
                    }}
                  >
                    {event.location}
                  </div>

                  <button
                    type="button"
                    onClick={() =>
                      deleteEvent(event.id)
                    }
                    style={{
                      marginTop: "15px",
                      minHeight: "38px",
                      border: `1px solid ${COLORS.border}`,
                      backgroundColor:
                        COLORS.white,
                      color: COLORS.red,
                      padding: "0 12px",
                      cursor: "pointer",
                      fontSize: "7px",
                      fontWeight: "700",
                    }}
                  >
                    REMOVE EVENT
                  </button>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* COMING SOON SECTIONS */}

        {[
          "SCHEDULE",
          "MAKEUP",
          "LOOKS",
          "NOTIFICATIONS",
        ].includes(activeSection) && (
          <section
            style={{
              backgroundColor:
                COLORS.lightPurple,
              padding: "30px 20px",
              textAlign: "center",
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
              ADMIN CONTROL
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "34px",
                marginTop: "7px",
              }}
            >
              {activeSection}
            </div>

            <div
              style={{
                color: COLORS.gray,
                fontSize: "10px",
                marginTop: "7px",
              }}
            >
              This control panel will be connected
              to your live event data next.
            </div>
          </section>
        )}
      </div>

      {/* ADD USER MODAL */}

      {showUserModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor:
              "rgba(22,22,22,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              backgroundColor: COLORS.white,
              padding: "25px",
              boxSizing: "border-box",
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
              USER MANAGEMENT
            </div>

            <h2
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "34px",
                fontWeight: "500",
                margin: "7px 0 22px",
              }}
            >
              Add Team Member
            </h2>

            <input
              value={userName}
              onChange={(event) =>
                setUserName(
                  event.target.value
                )
              }
              placeholder="Full name"
              style={{
                width: "100%",
                height: "46px",
                border: `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing: "border-box",
                marginBottom: "12px",
              }}
            />

            <input
              value={userEmail}
              onChange={(event) =>
                setUserEmail(
                  event.target.value
                )
              }
              placeholder="Email address"
              type="email"
              style={{
                width: "100%",
                height: "46px",
                border: `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing: "border-box",
                marginBottom: "12px",
              }}
            />

            <select
              value={userRole}
              onChange={(event) =>
                setUserRole(
                  event.target.value
                )
              }
              style={{
                width: "100%",
                height: "46px",
                border: `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing: "border-box",
                marginBottom: "20px",
                backgroundColor:
                  COLORS.white,
              }}
            >
              <option value="MODEL">
                Model
              </option>
              <option value="DESIGNER">
                Designer
              </option>
              <option value="STAGE MANAGER">
                Stage Manager
              </option>
              <option value="BACKSTAGE">
                Backstage Manager
              </option>
              <option value="ADMIN">
                Admin
              </option>
            </select>

            <div
              style={{
                display: "flex",
                gap: "9px",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setShowUserModal(false)
                }
                style={{
                  flex: 1,
                  minHeight: "48px",
                  border: `1px solid ${COLORS.border}`,
                  backgroundColor:
                    COLORS.white,
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "8px",
                }}
              >
                CANCEL
              </button>

              <button
                type="button"
                onClick={addUser}
                style={{
                  flex: 1,
                  minHeight: "48px",
                  border: "none",
                  backgroundColor:
                    COLORS.purple,
                  color: COLORS.white,
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "8px",
                }}
              >
                ADD USER
              </button>
            </div>
          </div>
        </div>
      )}

      {/* CREATE EVENT MODAL */}

      {showEventModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor:
              "rgba(22,22,22,0.65)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            zIndex: 1000,
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              backgroundColor: COLORS.white,
              padding: "25px",
              boxSizing: "border-box",
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
              EVENT MANAGEMENT
            </div>

            <h2
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "34px",
                fontWeight: "500",
                margin: "7px 0 22px",
              }}
            >
              Create New Event
            </h2>

            <input
              value={eventName}
              onChange={(event) =>
                setEventName(
                  event.target.value
                )
              }
              placeholder="Event name"
              style={{
                width: "100%",
                height: "46px",
                border: `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing: "border-box",
                marginBottom: "12px",
              }}
            />

            <input
              value={eventDate}
              onChange={(event) =>
                setEventDate(
                  event.target.value
                )
              }
              placeholder="Event date"
              style={{
                width: "100%",
                height: "46px",
                border: `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing: "border-box",
                marginBottom: "12px",
              }}
            />

            <input
              value={eventLocation}
              onChange={(event) =>
                setEventLocation(
                  event.target.value
                )
              }
              placeholder="Location"
              style={{
                width: "100%",
                height: "46px",
                border: `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing: "border-box",
                marginBottom: "20px",
              }}
            />

            <div
              style={{
                display: "flex",
                gap: "9px",
              }}
            >
              <button
                type="button"
                onClick={() =>
                  setShowEventModal(false)
                }
                style={{
                  flex: 1,
                  minHeight: "48px",
                  border: `1px solid ${COLORS.border}`,
                  backgroundColor:
                    COLORS.white,
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "8px",
                }}
              >
                CANCEL
              </button>

              <button
                type="button"
                onClick={addEvent}
                style={{
                  flex: 1,
                  minHeight: "48px",
                  border: "none",
                  backgroundColor:
                    COLORS.purple,
                  color: COLORS.white,
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "8px",
                }}
              >
                CREATE EVENT
              </button>
            </div>
          </div>
        </div>
      )}

      {/* TOAST */}

      {message && (
        <div
          style={{
            position: "fixed",
            left: "50%",
            bottom: "25px",
            transform: "translateX(-50%)",
            width: "calc(100% - 40px)",
            maxWidth: "450px",
            backgroundColor: COLORS.black,
            color: COLORS.white,
            padding: "15px 18px",
            textAlign: "center",
            fontSize: "10px",
            fontWeight: "700",
            zIndex: 1200,
            boxSizing: "border-box",
          }}
        >
          {message}
        </div>
      )}
    </main>
  );
}

export default AdminDashboard;