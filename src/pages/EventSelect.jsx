import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function EventSelect() {
  const [events, setEvents] = useState([]);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  useEffect(() => {
    loadEvents();
  }, []);

  async function loadEvents() {
    setLoading(true);
    setMessage("");

    try {
      // Get the currently logged-in user
      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error("User error:", userError);
        setMessage("Unable to verify your account.");
        setLoading(false);
        return;
      }

      // If nobody is logged in, send them to login
      if (!user) {
        window.location.href = "/login";
        return;
      }

      // Get the events assigned to this user
      const { data, error } = await supabase
        .from("event_members")
        .select(`
          event_id,
          events (
            id,
            name,
            description,
            event_date,
            location,
            status
          )
        `)
        .eq("user_id", user.id);

      if (error) {
        console.error("Event loading error:", error);
        setMessage("Unable to load your events. Please try again.");
        setLoading(false);
        return;
      }

      // Pull the actual event objects out of the membership results
      const userEvents = (data || [])
        .map((membership) => membership.events)
        .filter(Boolean);

      setEvents(userEvents);
    } catch (error) {
      console.error("Unexpected event loading error:", error);
      setMessage("Something went wrong while loading your events.");
    }

    setLoading(false);
  }

  async function selectEvent(event) {
    try {
      // Save the selected event locally so the rest of the app
      // knows which Fly Showcase event the user is currently viewing.
      localStorage.setItem("flyShowcaseEventId", event.id);

      localStorage.setItem(
        "flyShowcaseEvent",
        JSON.stringify({
          id: event.id,
          name: event.name,
          event_date: event.event_date,
          location: event.location,
        })
      );

      // Get the user's role
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user) {
        window.location.href = "/login";
        return;
      }

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("role")
        .eq("id", user.id)
        .single();

      if (error) {
        console.error("Profile loading error:", error);
        setMessage("Unable to determine your account role.");
        return;
      }

      // Send the user to the correct dashboard
      switch (profile.role) {
        case "model":
          window.location.href = "/model";
          break;

        case "designer":
          window.location.href = "/designer";
          break;

        case "manager":
          window.location.href = "/manager";
          break;

        case "admin":
          window.location.href = "/admin";
          break;

        default:
          setMessage(
            "Your account does not have a valid Fly Showcase role."
          );
      }
    } catch (error) {
      console.error("Unexpected event selection error:", error);
      setMessage("Unable to enter this event.");
    }
  }

  function goToLogin() {
    window.location.href = "/login";
  }

  function formatEventDate(date) {
    if (!date) {
      return "DATE TBA";
    }

    const formattedDate = new Date(`${date}T00:00:00`);

    return formattedDate.toLocaleDateString("en-US", {
      month: "long",
      day: "numeric",
      year: "numeric",
    });
  }

  function getEventYear(date) {
    if (!date) {
      return "----";
    }

    return new Date(`${date}T00:00:00`).getFullYear();
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>
        {/* TOP PURPLE BAR */}

        <div style={styles.topBar}></div>

        {/* HEADER */}

        <header style={styles.header}>
          <div>
            <div style={styles.logo}>FLY</div>

            <div style={styles.logoSubtitle}>
              SHOWCASE
            </div>
          </div>

          <div style={styles.star}>✦</div>
        </header>

        {/* HERO */}

        <section style={styles.hero}>
          <div style={styles.label}>
            FASHION EVENT PLATFORM
          </div>

          <h1 style={styles.title}>
            Where fashion
            <br />
            <em>comes alive.</em>
          </h1>

          <p style={styles.description}>
            Your backstage home for fashion shows,
            schedules, lookbooks, runway calls and
            everything happening behind the scenes.
          </p>
        </section>

        {/* UPCOMING EVENTS */}

        <section>
          <div style={styles.sectionHeader}>
            <span style={styles.sectionTitle}>
              UPCOMING EVENTS
            </span>

            <span style={styles.eventCount}>
              {loading
                ? "LOADING..."
                : `${events.length
                    .toString()
                    .padStart(2, "0")} ${
                    events.length === 1 ? "EVENT" : "EVENTS"
                  }`}
            </span>
          </div>

          {/* LOADING */}

          {loading && (
            <div style={styles.messageBox}>
              Loading your events...
            </div>
          )}

          {/* ERROR / MESSAGE */}

          {!loading && message && (
            <div style={styles.messageBox}>
              {message}
            </div>
          )}

          {/* NO EVENTS */}

          {!loading && !message && events.length === 0 && (
            <div style={styles.emptyBox}>
              <div style={styles.emptyTitle}>
                No events assigned yet.
              </div>

              <p style={styles.emptyText}>
                Your Fly Showcase team will assign you
                to an event when your access is ready.
              </p>

              <button
                onClick={goToLogin}
                style={styles.exploreButton}
              >
                RETURN TO LOGIN
              </button>
            </div>
          )}

          {/* EVENT CARDS */}

          {!loading &&
            events.map((event) => (
              <button
                key={event.id}
                onClick={() => selectEvent(event)}
                style={styles.eventCard}
              >
                <div style={styles.eventStripe}></div>

                <div style={styles.eventContent}>
                  <div style={styles.eventTop}>
                    <span style={styles.featured}>
                      {event.status === "active"
                        ? "LIVE EVENT"
                        : "FEATURED EVENT"}
                    </span>

                    <span style={styles.year}>
                      {getEventYear(event.event_date)}
                    </span>
                  </div>

                  <h2 style={styles.eventName}>
                    {event.name}
                  </h2>

                  <div style={styles.goldLine}></div>

                  <p style={styles.tagline}>
                    FIRST LOVE YOURSELF
                  </p>

                  <p style={styles.eventDetails}>
                    {formatEventDate(event.event_date)}

                    {event.location
                      ? ` • ${event.location}`
                      : ""}
                  </p>

                  <div style={styles.enterRow}>
                    <span style={styles.enterText}>
                      ENTER EVENT
                    </span>

                    <span style={styles.arrow}>
                      →
                    </span>
                  </div>
                </div>
              </button>
            ))}
        </section>

        {/* FUTURE EVENTS */}

        <section style={styles.futureSection}>
          <div style={styles.futureLabel}>
            THE FUTURE OF FASHION
          </div>

          <div style={styles.futureBox}>
            <div style={styles.futureTitle}>
              More fashion weeks
              <br />
              <em>coming soon.</em>
            </div>

            <p style={styles.futureText}>
              Milan. Los Angeles. New York. Paris.
              <br />
              Discover future opportunities through FLY.
            </p>

            <button
              onClick={goToLogin}
              style={styles.exploreButton}
            >
              EXPLORE OPPORTUNITIES →
            </button>
          </div>
        </section>

        {/* FOOTER */}

        <footer style={styles.footer}>
          <span style={styles.footerLogo}>
            FLY
          </span>{" "}
          • FIRST LOVE YOURSELF
        </footer>
      </div>
    </main>
  );
}

/* ================================
   STYLES
   ================================ */

const styles = {
  page: {
    width: "100%",
    minHeight: "100vh",
    background: "#FFFFFF",
    color: "#161616",
    fontFamily: '"PT Sans", Arial, sans-serif',
    padding: "0 20px 45px",
    display: "flex",
    justifyContent: "center",
    boxSizing: "border-box",
  },

  container: {
    width: "100%",
    maxWidth: "520px",
  },

  topBar: {
    height: "7px",
    width: "100%",
    background: "#81247C",
    marginBottom: "32px",
  },

  header: {
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: "55px",
  },

  logo: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "34px",
    lineHeight: "0.8",
    fontWeight: "600",
    color: "#81247C",
  },

  logoSubtitle: {
    marginTop: "8px",
    fontSize: "9px",
    letterSpacing: "3px",
    fontWeight: "700",
  },

  star: {
    width: "45px",
    height: "45px",
    borderRadius: "50%",
    background: "#DEB64B",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    fontSize: "20px",
  },

  hero: {
    marginBottom: "42px",
  },

  label: {
    display: "inline-block",
    background: "#81247C",
    color: "#FFFFFF",
    padding: "7px 11px",
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "2px",
    marginBottom: "18px",
  },

  title: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "clamp(48px, 14vw, 68px)",
    lineHeight: "0.86",
    fontWeight: "500",
    margin: 0,
  },

  description: {
    marginTop: "24px",
    maxWidth: "420px",
    color: "#777777",
    fontSize: "13px",
    lineHeight: "1.7",
  },

  sectionHeader: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "14px",
  },

  sectionTitle: {
    fontSize: "9px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  eventCount: {
    fontSize: "9px",
    color: "#81247C",
    fontWeight: "700",
  },

  eventCard: {
    width: "100%",
    border: "none",
    background: "#161616",
    color: "#FFFFFF",
    padding: "28px",
    textAlign: "left",
    position: "relative",
    overflow: "hidden",
    cursor: "pointer",
    boxSizing: "border-box",
    display: "block",
    marginBottom: "16px",
  },

  eventStripe: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "7px",
    height: "100%",
    background: "#81247C",
  },

  eventContent: {
    paddingLeft: "8px",
  },

  eventTop: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "32px",
  },

  featured: {
    background: "#81247C",
    color: "#FFFFFF",
    padding: "6px 9px",
    fontSize: "7px",
    letterSpacing: "1.5px",
    fontWeight: "700",
  },

  year: {
    fontSize: "8px",
    color: "#AAAAAA",
    letterSpacing: "1px",
  },

  eventName: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "46px",
    fontWeight: "500",
    lineHeight: "0.9",
    margin: 0,
  },

  goldLine: {
    width: "55px",
    height: "2px",
    background: "#DEB64B",
    margin: "22px 0",
  },

  tagline: {
    margin: 0,
    fontSize: "10px",
    letterSpacing: "2px",
    fontWeight: "700",
  },

  eventDetails: {
    margin: "12px 0 0",
    color: "#AAAAAA",
    fontSize: "10px",
    lineHeight: "1.5",
  },

  enterRow: {
    marginTop: "35px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
  },

  enterText: {
    color: "#AAAAAA",
    fontSize: "8px",
    letterSpacing: "1.5px",
  },

  arrow: {
    width: "42px",
    height: "42px",
    borderRadius: "50%",
    background: "#DEB64B",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    color: "#161616",
    fontSize: "20px",
    fontWeight: "700",
  },

  messageBox: {
    background: "#F4F4F4",
    padding: "22px",
    textAlign: "center",
    fontSize: "12px",
    color: "#777777",
  },

  emptyBox: {
    background: "#F4F4F4",
    padding: "28px",
    textAlign: "center",
  },

  emptyTitle: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "27px",
    marginBottom: "10px",
  },

  emptyText: {
    color: "#777777",
    fontSize: "12px",
    lineHeight: "1.6",
    marginBottom: "20px",
  },

  futureSection: {
    marginTop: "42px",
  },

  futureLabel: {
    fontSize: "9px",
    letterSpacing: "2px",
    fontWeight: "700",
    color: "#81247C",
    marginBottom: "14px",
  },

  futureBox: {
    background: "#81247C",
    color: "#FFFFFF",
    padding: "26px",
  },

  futureTitle: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "31px",
    lineHeight: "0.95",
  },

  futureText: {
    margin: "18px 0",
    fontSize: "11px",
    lineHeight: "1.6",
    opacity: 0.85,
  },

  exploreButton: {
    border: "1px solid #DEB64B",
    background: "#DEB64B",
    color: "#161616",
    padding: "12px 16px",
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "1.5px",
    cursor: "pointer",
  },

  footer: {
    textAlign: "center",
    marginTop: "55px",
    color: "#777777",
    fontSize: "8px",
    letterSpacing: "2px",
  },

  footerLogo: {
    color: "#81247C",
    fontWeight: "700",
  },
};

export default EventSelect;