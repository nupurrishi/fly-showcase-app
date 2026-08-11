import React from "react";

function EventSelect() {
  function goToLogin() {
    window.location.href = "/login";
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
            <div style={styles.logoSubtitle}>SHOWCASE</div>
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
              01 EVENT
            </span>
          </div>

          {/* EVENT CARD */}
          <button
            onClick={goToLogin}
            style={styles.eventCard}
          >
            <div style={styles.eventStripe}></div>

            <div style={styles.eventContent}>

              <div style={styles.eventTop}>
                <span style={styles.featured}>
                  FEATURED EVENT
                </span>

                <span style={styles.year}>
                  2026
                </span>
              </div>

              <h2 style={styles.eventName}>
                Fly
                <br />
                Showcase
              </h2>

              <div style={styles.goldLine}></div>

              <p style={styles.tagline}>
                FIRST LOVE YOURSELF
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
   Change colors and sizes here.
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
    lineHeight: "0.82",
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
