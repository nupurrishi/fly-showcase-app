import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

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

export default function ManagerDashboard() {
  const [manager, setManager] = useState(null);
  const [event, setEvent] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [modelCount, setModelCount] = useState(0);
  const [designerCount, setDesignerCount] = useState(0);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadManagerDashboard();
  }, []);

  async function loadManagerDashboard() {
    try {
      setLoading(true);
      setMessage("");

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) throw userError;

      if (!user) {
        throw new Error("Please log in first.");
      }

      // GET MANAGER PROFILE
      const {
        data: profile,
        error: profileError,
      } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) throw profileError;

      setManager(profile);

      // GET MANAGER'S EVENT
      const {
        data: membership,
        error: membershipError,
      } = await supabase
        .from("event_members")
        .select("event_id")
        .eq("user_id", user.id)
        .limit(1)
        .single();

      if (membershipError) {
        throw new Error(
          "This manager is not assigned to an event."
        );
      }

      // GET EVENT
      const {
        data: eventData,
        error: eventError,
      } = await supabase
        .from("events")
        .select("*")
        .eq("id", membership.event_id)
        .single();

      if (eventError) throw eventError;

      setEvent(eventData);

      // GET SCHEDULE
      const {
        data: scheduleData,
        error: scheduleError,
      } = await supabase
        .from("schedule_items")
        .select("*")
        .eq("event_id", membership.event_id)
        .order("start_time", {
          ascending: true,
        });

      if (scheduleError) throw scheduleError;

      setSchedule(scheduleData || []);

      // GET MODEL + DESIGNER COUNTS
      const {
        data: roleCounts,
        error: roleCountsError,
      } = await supabase.rpc(
        "get_event_role_counts",
        {
          p_event_id: membership.event_id,
        }
      );

      if (roleCountsError) {
        throw roleCountsError;
      }

      const counts = roleCounts?.[0];

      setModelCount(
        Number(counts?.model_count || 0)
      );

      setDesignerCount(
        Number(counts?.designer_count || 0)
      );
    } catch (error) {
      console.error(
        "Manager dashboard error:",
        error
      );

      setMessage(
        error.message ||
          "Unable to load manager dashboard."
      );
    } finally {
      setLoading(false);
    }
  }

  function showMessage(text) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  function formatDate(date) {
    if (!date) return "—";

    return new Date(date).toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );
  }

  function formatTime(time) {
    if (!time) return "—";

    return new Date(time).toLocaleTimeString(
      "en-US",
      {
        hour: "numeric",
        minute: "2-digit",
      }
    );
  }

  if (loading) {
    return (
      <main
        style={{
          minHeight: "100vh",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          background: COLORS.white,
          fontFamily: "Arial, sans-serif",
          fontSize: "18px",
        }}
      >
        Loading manager dashboard...
      </main>
    );
  }

  return (
    <main
      style={{
        minHeight: "100vh",
        background: COLORS.white,
        color: COLORS.black,
        fontFamily: "Arial, sans-serif",
      }}
    >
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
          padding: "25px 20px 80px",
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
                fontSize: "38px",
                fontWeight: "bold",
                color: COLORS.purple,
              }}
            >
              FLY
            </div>

            <div
              style={{
                fontSize: "10px",
                letterSpacing: "3px",
                fontWeight: "bold",
              }}
            >
              SHOWCASE
            </div>
          </div>

          <div
            style={{
              textAlign: "right",
            }}
          >
            <div
              style={{
                color: COLORS.purple,
                fontSize: "11px",
                fontWeight: "bold",
                letterSpacing: "1px",
              }}
            >
              STAGE MANAGER
            </div>

            <div
              style={{
                fontSize: "24px",
              }}
            >
              {manager?.full_name || "Manager"}
            </div>
          </div>
        </header>

        {/* EVENT HERO */}

        <section
          style={{
            background: COLORS.black,
            color: COLORS.white,
            padding: "28px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              color: COLORS.gold,
              fontSize: "11px",
              fontWeight: "bold",
              letterSpacing: "2px",
            }}
          >
            FLY SHOWCASE
          </div>

          <h1
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "44px",
              fontWeight: "normal",
              margin: "8px 0",
            }}
          >
            {event?.name || "Event"}
          </h1>

          <p
            style={{
              color: "#BBBBBB",
              fontSize: "14px",
              lineHeight: "1.5",
              margin: 0,
            }}
          >
            {event?.description ||
              "Manage the runway, model calls and backstage operations."}
          </p>
        </section>

        {/* EVENT INFORMATION */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(200px, 1fr))",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <InfoBox
            title="EVENT DATE"
            value={formatDate(event?.event_date)}
          />

          <InfoBox
            title="LOCATION"
            value={event?.location || "—"}
          />

          <InfoBox
            title="STATUS"
            value={event?.status || "—"}
          />
        </section>

        {/* QUICK STATS */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(150px, 1fr))",
            gap: "10px",
            marginBottom: "35px",
          }}
        >
          <Stat
            title="MODELS"
            value={modelCount}
          />

          <Stat
            title="DESIGNERS"
            value={designerCount}
          />

          <Stat
            title="SCHEDULE ITEMS"
            value={schedule.length}
          />
        </section>

        {/* MODEL CALL BOARD */}

        <section style={{ marginBottom: "35px" }}>
          <SectionTitle
            title="MODEL CALL BOARD"
            subtitle="Live schedule for this event"
          />

          {schedule.length === 0 ? (
            <div
              style={{
                border: `1px solid ${COLORS.border}`,
                padding: "25px",
                fontSize: "15px",
                color: COLORS.gray,
              }}
            >
              No schedule items have been added yet.
            </div>
          ) : (
            <div
              style={{
                borderTop: `1px solid ${COLORS.border}`,
              }}
            >
              {schedule.map((item) => (
                <div
                  key={item.id}
                  style={{
                    display: "flex",
                    justifyContent:
                      "space-between",
                    alignItems: "center",
                    gap: "20px",
                    padding: "18px 0",
                    borderBottom: `1px solid ${COLORS.border}`,
                    flexWrap: "wrap",
                  }}
                >
                  <div>
                    <div
                      style={{
                        color: COLORS.purple,
                        fontSize: "12px",
                        fontWeight: "bold",
                      }}
                    >
                      {formatTime(item.start_time)}
                    </div>

                    <div
                      style={{
                        fontFamily:
                          '"Cormorant Garamond", Georgia, serif',
                        fontSize: "27px",
                        marginTop: "4px",
                      }}
                    >
                      {item.title}
                    </div>

                    <div
                      style={{
                        color: COLORS.gray,
                        fontSize: "13px",
                        marginTop: "4px",
                      }}
                    >
                      {item.location ||
                        "Location TBD"}
                    </div>

                    {item.notes && (
                      <div
                        style={{
                          color: COLORS.gray,
                          fontSize: "12px",
                          marginTop: "6px",
                        }}
                      >
                        {item.notes}
                      </div>
                    )}
                  </div>

                  <Status
                    status={
                      item.status || "UPCOMING"
                    }
                  />
                </div>
              ))}
            </div>
          )}
        </section>

        {/* QUICK ACTIONS */}

        <section>
          <SectionTitle
            title="QUICK ACTIONS"
            subtitle="Manager controls"
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
              title="REFRESH DATA"
              onClick={() => {
                loadManagerDashboard();
                showMessage(
                  "Dashboard refreshed."
                );
              }}
            />

            <ActionButton
              title="VIEW LIVE SHOW"
              onClick={() =>
                (window.location.href =
                  "/live-show")
              }
            />

            <ActionButton
              title="VIEW SCHEDULE"
              onClick={() =>
                (window.location.href =
                  "/schedule")
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
            transform:
              "translateX(-50%)",
            width: "calc(100% - 40px)",
            maxWidth: "500px",
            background: COLORS.black,
            color: COLORS.white,
            padding: "16px 20px",
            textAlign: "center",
            fontSize: "14px",
            zIndex: 2000,
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
        padding: "18px",
      }}
    >
      <div
        style={{
          color: COLORS.purple,
          fontSize: "10px",
          fontWeight: "bold",
          letterSpacing: "1.5px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontFamily:
            '"Cormorant Garamond", Georgia, serif',
          fontSize: "24px",
          marginTop: "7px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

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
          fontSize: "10px",
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

function SectionTitle({
  title,
  subtitle,
}) {
  return (
    <div
      style={{
        marginBottom: "15px",
      }}
    >
      <div
        style={{
          fontSize: "11px",
          fontWeight: "bold",
          letterSpacing: "2px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          color: COLORS.gray,
          fontSize: "13px",
          marginTop: "5px",
        }}
      >
        {subtitle}
      </div>
    </div>
  );
}

function Status({ status }) {
  const normalized =
    status?.toUpperCase() || "UPCOMING";

  const isLive = normalized === "LIVE";
  const isComplete =
    normalized === "COMPLETED";

  return (
    <div
      style={{
        padding: "8px 12px",
        background: isLive
          ? COLORS.green
          : isComplete
          ? COLORS.lightGreen
          : COLORS.lightGold,
        color: isLive
          ? COLORS.white
          : isComplete
          ? COLORS.green
          : "#806313",
        fontSize: "10px",
        fontWeight: "bold",
      }}
    >
      {normalized}
    </div>
  );
}

function ActionButton({
  title,
  onClick,
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      style={{
        minHeight: "50px",
        border: "none",
        background: COLORS.purple,
        color: COLORS.white,
        cursor: "pointer",
        fontWeight: "bold",
        fontSize: "11px",
        letterSpacing: "1px",
      }}
    >
      {title}
    </button>
  );
}