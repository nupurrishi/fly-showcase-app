import React, { useState } from "react";

function HairMakeup() {
  const [appointments, setAppointments] = useState([
    {
      id: 1,
      model: "Model One",
      time: "8:00 AM",
      service: "Hair",
      artist: "Hair Team",
      status: "READY",
    },
    {
      id: 2,
      model: "Model Two",
      time: "8:30 AM",
      service: "Makeup",
      artist: "Makeup Team",
      status: "WAITING",
    },
    {
      id: 3,
      model: "Model Three",
      time: "9:00 AM",
      service: "Hair & Makeup",
      artist: "Beauty Team",
      status: "WAITING",
    },
  ]);

  const [showForm, setShowForm] = useState(false);
  const [model, setModel] = useState("");
  const [time, setTime] = useState("");
  const [service, setService] = useState("Hair");
  const [artist, setArtist] = useState("");

  function addAppointment() {
    if (!model || !time || !artist) {
      alert("Please complete all fields.");
      return;
    }

    const newAppointment = {
      id: Date.now(),
      model,
      time,
      service,
      artist,
      status: "WAITING",
    };

    setAppointments([...appointments, newAppointment]);

    setModel("");
    setTime("");
    setService("Hair");
    setArtist("");
    setShowForm(false);
  }

  function updateStatus(id) {
    setAppointments(
      appointments.map((appointment) => {
        if (appointment.id !== id) return appointment;

        const nextStatus =
          appointment.status === "WAITING"
            ? "IN PROGRESS"
            : appointment.status === "IN PROGRESS"
            ? "DONE"
            : "DONE";

        return {
          ...appointment,
          status: nextStatus,
        };
      })
    );
  }

  function deleteAppointment(id) {
    setAppointments(
      appointments.filter(
        (appointment) => appointment.id !== id
      )
    );
  }

  return (
    <main style={styles.page}>
      <div style={styles.container}>

        {/* TOP BAR */}
        <div style={styles.topBar}></div>

        {/* HEADER */}
        <header style={styles.header}>
          <div>
            <div style={styles.logo}>FLY</div>
            <div style={styles.logoText}>SHOWCASE</div>
          </div>

          <div style={styles.headerRight}>
            <div style={styles.smallPurple}>
              BACKSTAGE
            </div>

            <div style={styles.headerTitle}>
              Hair & Makeup
            </div>
          </div>
        </header>

        {/* HERO */}
        <section style={styles.hero}>
          <div style={styles.heroLabel}>
            BEAUTY SCHEDULE
          </div>

          <h1 style={styles.heroTitle}>
            Hair &
            <br />
            <em>Makeup.</em>
          </h1>

          <p style={styles.description}>
            Manage model beauty appointments,
            artists, timing and backstage readiness.
          </p>
        </section>

        {/* SUMMARY */}
        <section style={styles.summary}>
          <div style={styles.stat}>
            <div style={styles.statLabel}>
              APPOINTMENTS
            </div>

            <div style={styles.statNumber}>
              {appointments.length}
            </div>
          </div>

          <div style={styles.stat}>
            <div style={styles.statLabel}>
              READY
            </div>

            <div style={styles.statNumber}>
              {
                appointments.filter(
                  (item) => item.status === "READY"
                ).length
              }
            </div>
          </div>

          <div style={styles.stat}>
            <div style={styles.statLabel}>
              COMPLETE
            </div>

            <div style={styles.statNumber}>
              {
                appointments.filter(
                  (item) => item.status === "DONE"
                ).length
              }
            </div>
          </div>
        </section>

        {/* SECTION HEADER */}
        <section style={styles.sectionHeader}>
          <div>
            <div style={styles.sectionTitle}>
              BEAUTY SCHEDULE
            </div>

            <div style={styles.sectionSubtitle}>
              Today's model appointments
            </div>
          </div>

          <button
            onClick={() => setShowForm(true)}
            style={styles.primaryButton}
          >
            + ADD APPOINTMENT
          </button>
        </section>

        {/* APPOINTMENTS */}
        <section>
          {appointments.length === 0 ? (
            <div style={styles.empty}>
              No appointments scheduled yet.
            </div>
          ) : (
            appointments.map((appointment) => (
              <div
                key={appointment.id}
                style={styles.appointment}
              >
                {/* TIME */}
                <div style={styles.time}>
                  {appointment.time}
                </div>

                {/* DETAILS */}
                <div style={styles.details}>
                  <div style={styles.model}>
                    {appointment.model}
                  </div>

                  <div style={styles.service}>
                    {appointment.service}
                  </div>

                  <div style={styles.artist}>
                    Artist: {appointment.artist}
                  </div>
                </div>

                {/* STATUS */}
                <div style={styles.actions}>
                  <button
                    onClick={() =>
                      updateStatus(appointment.id)
                    }
                    style={getStatusStyle(
                      appointment.status
                    )}
                  >
                    {appointment.status}
                  </button>

                  <button
                    onClick={() =>
                      deleteAppointment(appointment.id)
                    }
                    style={styles.deleteButton}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            ))
          )}
        </section>

        {/* BACKSTAGE NOTE */}
        <section style={styles.note}>
          <div style={styles.noteTitle}>
            BACKSTAGE NOTE
          </div>

          <div style={styles.noteText}>
            Models should arrive at their beauty
            appointment on time and remain backstage
            until their look is complete.
          </div>
        </section>

        {/* ADD APPOINTMENT MODAL */}
        {showForm && (
          <div style={styles.overlay}>
            <div style={styles.modal}>

              <div style={styles.modalLabel}>
                BEAUTY SCHEDULE
              </div>

              <h2 style={styles.modalTitle}>
                Add Appointment
              </h2>

              <label style={styles.label}>
                MODEL
              </label>

              <input
                value={model}
                onChange={(e) =>
                  setModel(e.target.value)
                }
                placeholder="Model name"
                style={styles.input}
              />

              <label style={styles.label}>
                TIME
              </label>

              <input
                value={time}
                onChange={(e) =>
                  setTime(e.target.value)
                }
                placeholder="8:00 AM"
                style={styles.input}
              />

              <label style={styles.label}>
                SERVICE
              </label>

              <select
                value={service}
                onChange={(e) =>
                  setService(e.target.value)
                }
                style={styles.input}
              >
                <option>Hair</option>
                <option>Makeup</option>
                <option>Hair & Makeup</option>
              </select>

              <label style={styles.label}>
                ARTIST / TEAM
              </label>

              <input
                value={artist}
                onChange={(e) =>
                  setArtist(e.target.value)
                }
                placeholder="Artist or team"
                style={styles.input}
              />

              <div style={styles.modalButtons}>
                <button
                  onClick={() => setShowForm(false)}
                  style={styles.cancelButton}
                >
                  CANCEL
                </button>

                <button
                  onClick={addAppointment}
                  style={styles.primaryButton}
                >
                  ADD APPOINTMENT
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </main>
  );
}


/* ============================
   EASY-TO-EDIT STYLES
============================ */

const styles = {
  page: {
    minHeight: "100vh",
    background: "#FFFFFF",
    color: "#161616",
    fontFamily: '"PT Sans", Arial, sans-serif',
    padding: "0 20px 60px",
  },

  container: {
    maxWidth: "1000px",
    margin: "0 auto",
  },

  topBar: {
    height: "7px",
    background: "#81247C",
  },

  header: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "25px 0",
    marginBottom: "35px",
  },

  logo: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    color: "#81247C",
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

  smallPurple: {
    color: "#81247C",
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "1.5px",
  },

  headerTitle: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "23px",
    marginTop: "4px",
  },

  hero: {
    background: "#161616",
    color: "#FFFFFF",
    padding: "30px",
    marginBottom: "20px",
  },

  heroLabel: {
    color: "#DEB64B",
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  heroTitle: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "52px",
    fontWeight: "500",
    lineHeight: "0.85",
    margin: "12px 0 0",
  },

  description: {
    color: "#BBBBBB",
    fontSize: "11px",
    lineHeight: "1.6",
    maxWidth: "500px",
    marginTop: "15px",
  },

  summary: {
    display: "grid",
    gridTemplateColumns:
      "repeat(auto-fit, minmax(160px, 1fr))",
    gap: "10px",
    marginBottom: "35px",
  },

  stat: {
    border: "1px solid #E8E8E8",
    padding: "18px",
  },

  statLabel: {
    color: "#777777",
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "1.5px",
  },

  statNumber: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "36px",
    marginTop: "5px",
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
    color: "#777777",
    fontSize: "9px",
    marginTop: "4px",
  },

  primaryButton: {
    minHeight: "44px",
    border: "none",
    background: "#81247C",
    color: "#FFFFFF",
    padding: "0 15px",
    cursor: "pointer",
    fontSize: "8px",
    fontWeight: "700",
  },

  appointment: {
    display: "flex",
    alignItems: "center",
    gap: "18px",
    borderTop: "1px solid #E8E8E8",
    padding: "18px 0",
    flexWrap: "wrap",
  },

  time: {
    width: "75px",
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "20px",
  },

  details: {
    flex: 1,
    minWidth: "180px",
  },

  model: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
    fontSize: "23px",
  },

  service: {
    color: "#81247C",
    fontSize: "8px",
    fontWeight: "700",
    marginTop: "4px",
  },

  artist: {
    color: "#777777",
    fontSize: "8px",
    marginTop: "4px",
  },

  actions: {
    display: "flex",
    gap: "8px",
    alignItems: "center",
  },

  deleteButton: {
    minHeight: "36px",
    border: "1px solid #E8E8E8",
    background: "#FFFFFF",
    color: "#B33A3A",
    padding: "0 10px",
    cursor: "pointer",
    fontSize: "7px",
    fontWeight: "700",
  },

  empty: {
    border: "1px solid #E8E8E8",
    padding: "30px",
    textAlign: "center",
    color: "#777777",
    fontSize: "10px",
  },

  note: {
    background: "#F5EAF4",
    borderLeft: "5px solid #81247C",
    padding: "18px",
    marginTop: "30px",
  },

  noteTitle: {
    color: "#81247C",
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "1.5px",
  },

  noteText: {
    fontSize: "10px",
    lineHeight: "1.5",
    marginTop: "7px",
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
    background: "#FFFFFF",
    padding: "25px",
    boxSizing: "border-box",
  },

  modalLabel: {
    color: "#81247C",
    fontSize: "8px",
    fontWeight: "700",
    letterSpacing: "2px",
  },

  modalTitle: {
    fontFamily: '"Cormorant Garamond", Georgia, serif',
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
    border: "1px solid #E8E8E8",
    padding: "0 12px",
    boxSizing: "border-box",
    marginBottom: "14px",
    background: "#FFFFFF",
  },

  modalButtons: {
    display: "flex",
    gap: "9px",
    marginTop: "5px",
  },

  cancelButton: {
    flex: 1,
    minHeight: "48px",
    border: "1px solid #E8E8E8",
    background: "#FFFFFF",
    cursor: "pointer",
    fontWeight: "700",
    fontSize: "8px",
  },
};


function getStatusStyle(status) {
  if (status === "DONE") {
    return {
      minHeight: "36px",
      border: "none",
      background: "#EAF5EF",
      color: "#2F7D5B",
      padding: "0 10px",
      cursor: "pointer",
      fontSize: "7px",
      fontWeight: "700",
    };
  }

  if (status === "IN PROGRESS") {
    return {
      minHeight: "36px",
      border: "none",
      background: "#F8F3E5",
      color: "#806313",
      padding: "0 10px",
      cursor: "pointer",
      fontSize: "7px",
      fontWeight: "700",
    };
  }

  if (status === "READY") {
    return {
      minHeight: "36px",
      border: "none",
      background: "#EAF5EF",
      color: "#2F7D5B",
      padding: "0 10px",
      cursor: "pointer",
      fontSize: "7px",
      fontWeight: "700",
    };
  }

  return {
    minHeight: "36px",
    border: "none",
    background: "#F5EAF4",
    color: "#81247C",
    padding: "0 10px",
    cursor: "pointer",
    fontSize: "7px",
    fontWeight: "700",
  };
}

export default HairMakeup;
