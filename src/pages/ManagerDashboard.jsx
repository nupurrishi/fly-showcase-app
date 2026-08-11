import React, { useState } from "react";

const COLORS = {
  black: "#161616",
  purple: "#81247C",
  gold: "#DEB64B",
  white: "#FFFFFF",
  gray: "#777777",
  lightPurple: "#F5EAF4",
  lightGold: "#F8F3E5",
  lightGreen: "#EAF5EF",
  green: "#2F7D5B",
  red: "#B33A3A",
  border: "#E8E8E8",
};

const STARTING_CALLS = [
  {
    id: 1,
    time: "5:00 PM",
    name: "Hair & Makeup",
    location: "Backstage",
    status: "UPCOMING",
  },
  {
    id: 2,
    time: "6:15 PM",
    name: "Model Lineup",
    location: "Stage Left",
    status: "UPCOMING",
  },
  {
    id: 3,
    time: "7:00 PM",
    name: "Show Begins",
    location: "Main Stage",
    status: "READY",
  },
];

const STARTING_TASKS = [
  {
    id: 1,
    name: "Confirm all models",
    status: "DONE",
  },
  {
    id: 2,
    name: "Confirm designer looks",
    status: "DONE",
  },
  {
    id: 3,
    name: "Check backstage area",
    status: "PENDING",
  },
  {
    id: 4,
    name: "Final model lineup",
    status: "PENDING",
  },
];

export default function ManagerDashboard() {
  const [calls, setCalls] = useState(STARTING_CALLS);
  const [tasks, setTasks] = useState(STARTING_TASKS);
  const [message, setMessage] = useState("");

  const showMessage = (text) => {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  };

  const changeCallStatus = (id) => {
    setCalls(
      calls.map((call) =>
        call.id === id
          ? {
              ...call,
              status:
                call.status === "UPCOMING"
                  ? "READY"
                  : call.status === "READY"
                  ? "LIVE"
                  : "UPCOMING",
            }
          : call
      )
    );
  };

  const toggleTask = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id
          ? {
              ...task,
              status:
                task.status === "DONE"
                  ? "PENDING"
                  : "DONE",
            }
          : task
      )
    );
  };

  const doneTasks = tasks.filter(
    (task) => task.status === "DONE"
  ).length;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: COLORS.white,
        color: COLORS.black,
        fontFamily: "Arial, sans-serif",
      }}
    >
      {/* TOP BAR */}
      <div
        style={{
          height: "7px",
          background: COLORS.purple,
        }}
      />

      <div
        style={{
          maxWidth: "1000px",
          margin: "auto",
          padding: "25px 20px 70px",
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
                fontSize: "38px",
                fontWeight: "bold",
                color: COLORS.purple,
              }}
            >
              FLY
            </div>

            <div
              style={{
                fontSize: "9px",
                letterSpacing: "3px",
                fontWeight: "bold",
              }}
            >
              SHOWCASE
            </div>
          </div>

          <div style={{ textAlign: "right" }}>
            <div
              style={{
                color: COLORS.purple,
                fontSize: "9px",
                fontWeight: "bold",
              }}
            >
              STAGE MANAGER
            </div>

            <div style={{ fontSize: "22px" }}>
              Show Control
            </div>
          </div>
        </header>

        {/* HERO */}
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
              fontSize: "9px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            FLY SHOWCASE • MAIN STAGE
          </div>

          <h1
            style={{
              fontSize: "42px",
              fontWeight: "normal",
              margin: "8px 0",
            }}
          >
            Show Control
          </h1>

          <p
            style={{
              color: "#BBBBBB",
              fontSize: "11px",
              margin: 0,
            }}
          >
            Manage the runway, model calls and
            backstage operations.
          </p>
        </section>

        {/* SHOW STATUS */}
        <section
          style={{
            background: COLORS.lightPurple,
            padding: "20px",
            marginBottom: "25px",
            borderLeft: `5px solid ${COLORS.purple}`,
          }}
        >
          <div
            style={{
              color: COLORS.purple,
              fontSize: "9px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            CURRENT SHOW STATUS
          </div>

          <div
            style={{
              fontSize: "28px",
              marginTop: "6px",
            }}
          >
            PREPARATION
          </div>

          <div
            style={{
              color: COLORS.gray,
              fontSize: "10px",
              marginTop: "5px",
            }}
          >
            The show has not started yet.
          </div>

          <button
            onClick={() =>
              showMessage("Show status updated.")
            }
            style={{
              ...buttonStyle,
              marginTop: "15px",
            }}
          >
            UPDATE SHOW STATUS
          </button>
        </section>

        {/* QUICK STATS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <Stat
            title="MODELS"
            value="24"
          />

          <Stat
            title="DESIGNERS"
            value="13"
          />

          <Stat
            title="CALLS"
            value={calls.length}
          />

          <Stat
            title="TASKS DONE"
            value={`${doneTasks}/${tasks.length}`}
          />
        </section>

        {/* MODEL CALL BOARD */}
        <section style={{ marginBottom: "35px" }}>
          <SectionTitle
            title="MODEL CALL BOARD"
            subtitle="Control the next important backstage calls."
          />

          <div
            style={{
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {calls.map((call) => (
              <div
                key={call.id}
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  gap: "15px",
                  padding: "16px 0",
                  borderBottom: `1px solid ${COLORS.border}`,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      color: COLORS.purple,
                      fontSize: "9px",
                      fontWeight: "bold",
                    }}
                  >
                    {call.time}
                  </div>

                  <div
                    style={{
                      fontSize: "21px",
                      marginTop: "4px",
                    }}
                  >
                    {call.name}
                  </div>

                  <div
                    style={{
                      color: COLORS.gray,
                      fontSize: "9px",
                      marginTop: "3px",
                    }}
                  >
                    {call.location}
                  </div>
                </div>

                <button
                  onClick={() =>
                    changeCallStatus(call.id)
                  }
                  style={{
                    ...statusButton,
                    background:
                      call.status === "LIVE"
                        ? COLORS.green
                        : call.status === "READY"
                        ? COLORS.lightGold
                        : COLORS.lightPurple,
                    color:
                      call.status === "LIVE"
                        ? COLORS.white
                        : call.status === "READY"
                        ? "#806313"
                        : COLORS.purple,
                  }}
                >
                  {call.status}
                </button>
              </div>
            ))}
          </div>
        </section>

        {/* RUNWAY STATUS */}
        <section style={{ marginBottom: "35px" }}>
          <SectionTitle
            title="RUNWAY STATUS"
            subtitle="Quick controls for the live show."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
            }}
          >
            <StatusCard
              title="PREP"
              description="Models and crew preparing."
              onClick={() =>
                showMessage("Show set to PREP.")
              }
            />

            <StatusCard
              title="BACKSTAGE"
              description="Models lining up."
              onClick={() =>
                showMessage(
                  "Show set to BACKSTAGE."
                )
              }
            />

            <StatusCard
              title="LIVE ON RUNWAY"
              description="Show is currently live."
              onClick={() =>
                showMessage(
                  "Show set to LIVE ON RUNWAY."
                )
              }
            />

            <StatusCard
              title="SHOW ENDED"
              description="Runway has finished."
              onClick={() =>
                showMessage(
                  "Show marked as ended."
                )
              }
            />
          </div>
        </section>

        {/* CHECKLIST */}
        <section style={{ marginBottom: "35px" }}>
          <SectionTitle
            title="SHOW CHECKLIST"
            subtitle="Keep track of important tasks."
          />

          <div
            style={{
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {tasks.map((task) => (
              <button
                key={task.id}
                onClick={() => toggleTask(task.id)}
                style={{
                  width: "100%",
                  border: "none",
                  borderBottom: `1px solid ${COLORS.border}`,
                  background: COLORS.white,
                  padding: "15px 0",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  textAlign: "left",
                  cursor: "pointer",
                }}
              >
                <span
                  style={{
                    width: "22px",
                    height: "22px",
                    border: `1px solid ${
                      task.status === "DONE"
                        ? COLORS.green
                        : COLORS.border
                    }`,
                    background:
                      task.status === "DONE"
                        ? COLORS.green
                        : COLORS.white,
                    color: COLORS.white,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    flexShrink: 0,
                  }}
                >
                  {task.status === "DONE"
                    ? "✓"
                    : ""}
                </span>

                <span
                  style={{
                    fontSize: "11px",
                    textDecoration:
                      task.status === "DONE"
                        ? "line-through"
                        : "none",
                    color:
                      task.status === "DONE"
                        ? COLORS.gray
                        : COLORS.black,
                  }}
                >
                  {task.name}
                </span>
              </button>
            ))}
          </div>
        </section>

        {/* QUICK ACTIONS */}
        <section>
          <SectionTitle
            title="QUICK ACTIONS"
            subtitle="Important tools for show day."
          />

          <div
            style={{
              display: "grid",
              gridTemplateColumns:
                "repeat(auto-fit, minmax(200px, 1fr))",
              gap: "10px",
            }}
          >
            <ActionButton
              title="SEND MODEL CALL"
              onClick={() =>
                showMessage(
                  "Model call notification sent."
                )
              }
            />

            <ActionButton
              title="NOTIFY BACKSTAGE"
              onClick={() =>
                showMessage(
                  "Backstage notification sent."
                )
              }
            />

            <ActionButton
              title="CONTACT ADMIN"
              onClick={() =>
                showMessage(
                  "Admin contact opened."
                )
              }
            />

            <ActionButton
              title="VIEW LIVE SHOW"
              onClick={() =>
                (window.location.href =
                  "/live-show")
              }
            />
          </div>
        </section>
      </div>

      {/* TOAST */}
      {message && (
        <div
          style={{
            position: "fixed",
            bottom: "25px",
            left: "50%",
            transform: "translateX(-50%)",
            background: COLORS.black,
            color: COLORS.white,
            padding: "15px 25px",
            fontSize: "10px",
            zIndex: 2000,
          }}
        >
          {message}
        </div>
      )}
    </main>
  );
}

/* REUSABLE COMPONENTS */

function Stat({ title, value }) {
  return (
    <div
      style={{
        border: `1px solid ${COLORS.border}`,
        padding: "18px",
      }}
    >
      <div
        style={{
          color: COLORS.gray,
          fontSize: "8px",
          fontWeight: "bold",
          letterSpacing: "1.5px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "34px",
          marginTop: "5px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function SectionTitle({ title, subtitle }) {
  return (
    <div style={{ marginBottom: "15px" }}>
      <div
        style={{
          fontSize: "10px",
          fontWeight: "bold",
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

function StatusCard({
  title,
  description,
  onClick,
}) {
  return (
    <button
      onClick={onClick}
      style={{
        textAlign: "left",
        border: `1px solid ${COLORS.border}`,
        background: COLORS.white,
        padding: "18px",
        cursor: "pointer",
      }}
    >
      <div
        style={{
          color: COLORS.purple,
          fontSize: "9px",
          fontWeight: "bold",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: COLORS.gray,
          fontSize: "10px",
          marginTop: "6px",
          lineHeight: "1.5",
        }}
      >
        {description}
      </div>
    </button>
  );
}

function ActionButton({ title, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        minHeight: "48px",
        border: "none",
        background: COLORS.purple,
        color: COLORS.white,
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "8px",
        letterSpacing: "1px",
      }}
    >
      {title}
    </button>
  );
}

/* STYLES */

const buttonStyle = {
  minHeight: "44px",
  border: "none",
  background: COLORS.purple,
  color: COLORS.white,
  padding: "0 16px",
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "9px",
};

const statusButton = {
  border: "none",
  padding: "8px 12px",
  cursor: "pointer",
  fontSize: "8px",
  fontWeight: "bold",
};
