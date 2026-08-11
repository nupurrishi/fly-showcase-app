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
};

const initialAppointments = [
  {
    id: 1,
    time: "08:30 AM",
    model: "Model 01",
    service: "Hair",
    artist: "Sophia",
    chair: "Chair 01",
    status: "WAITING",
  },
  {
    id: 2,
    time: "08:45 AM",
    model: "Model 02",
    service: "Makeup",
    artist: "Maya",
    chair: "Chair 02",
    status: "IN CHAIR",
  },
  {
    id: 3,
    time: "09:00 AM",
    model: "Model 03",
    service: "Hair + Makeup",
    artist: "Sophia + Maya",
    chair: "Chair 03",
    status: "WAITING",
  },
  {
    id: 4,
    time: "09:15 AM",
    model: "Model 04",
    service: "Makeup",
    artist: "Aisha",
    chair: "Chair 04",
    status: "COMPLETE",
  },
  {
    id: 5,
    time: "09:30 AM",
    model: "Model 05",
    service: "Hair",
    artist: "Sophia",
    chair: "Chair 01",
    status: "WAITING",
  },
];

const statusColors = {
  WAITING: {
    background: COLORS.lightGold,
    color: "#806313",
  },
  "IN CHAIR": {
    background: COLORS.lightPurple,
    color: COLORS.purple,
  },
  COMPLETE: {
    background: COLORS.lightGreen,
    color: COLORS.green,
  },
};

function HairMakeup() {
  const [appointments, setAppointments] =
    useState(initialAppointments);

  const [filter, setFilter] =
    useState("ALL");

  const [showModal, setShowModal] =
    useState(false);

  const [editingAppointment, setEditingAppointment] =
    useState(null);

  const [message, setMessage] =
    useState("");

  const [time, setTime] =
    useState("");

  const [model, setModel] =
    useState("");

  const [service, setService] =
    useState("Makeup");

  const [artist, setArtist] =
    useState("");

  const [chair, setChair] =
    useState("Chair 01");

  function showMessage(text) {
    setMessage(text);

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  function resetForm() {
    setTime("");
    setModel("");
    setService("Makeup");
    setArtist("");
    setChair("Chair 01");
    setEditingAppointment(null);
  }

  function openAddModal() {
    resetForm();
    setShowModal(true);
  }

  function openEditModal(appointment) {
    setEditingAppointment(appointment);
    setTime(appointment.time);
    setModel(appointment.model);
    setService(appointment.service);
    setArtist(appointment.artist);
    setChair(appointment.chair);
    setShowModal(true);
  }

  function saveAppointment() {
    if (
      !time.trim() ||
      !model.trim() ||
      !artist.trim()
    ) {
      showMessage(
        "Please complete the appointment details."
      );
      return;
    }

    if (editingAppointment) {
      setAppointments((current) =>
        current.map((item) =>
          item.id === editingAppointment.id
            ? {
                ...item,
                time,
                model,
                service,
                artist,
                chair,
              }
            : item
        )
      );

      showMessage(
        "Appointment updated."
      );
    } else {
      const newAppointment = {
        id: Date.now(),
        time,
        model,
        service,
        artist,
        chair,
        status: "WAITING",
      };

      setAppointments((current) => [
        ...current,
        newAppointment,
      ]);

      showMessage(
        "Appointment added."
      );
    }

    setShowModal(false);
    resetForm();
  }

  function deleteAppointment(id) {
    setAppointments((current) =>
      current.filter(
        (item) => item.id !== id
      )
    );

    showMessage(
      "Appointment removed."
    );
  }

  function changeStatus(id) {
    setAppointments((current) =>
      current.map((item) => {
        if (item.id !== id) {
          return item;
        }

        if (item.status === "WAITING") {
          return {
            ...item,
            status: "IN CHAIR",
          };
        }

        if (item.status === "IN CHAIR") {
          return {
            ...item,
            status: "COMPLETE",
          };
        }

        return {
          ...item,
          status: "WAITING",
        };
      })
    );
  }

  const filteredAppointments =
    filter === "ALL"
      ? appointments
      : appointments.filter(
          (item) =>
            item.status === filter
        );

  const waitingCount =
    appointments.filter(
      (item) =>
        item.status === "WAITING"
    ).length;

  const inChairCount =
    appointments.filter(
      (item) =>
        item.status === "IN CHAIR"
    ).length;

  const completeCount =
    appointments.filter(
      (item) =>
        item.status === "COMPLETE"
    ).length;

  const filters = [
    "ALL",
    "WAITING",
    "IN CHAIR",
    "COMPLETE",
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
      {/* TOP PURPLE BAR */}

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
          maxWidth: "1050px",
          margin: "0 auto",
          padding:
            "24px 20px 80px",
          boxSizing: "border-box",
        }}
      >
        {/* HEADER */}

        <header
          style={{
            display: "flex",
            justifyContent:
              "space-between",
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

          <div
            style={{
              textAlign: "right",
            }}
          >
            <div
              style={{
                color: COLORS.purple,
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "1.5px",
              }}
            >
              BACKSTAGE
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "23px",
                marginTop: "4px",
              }}
            >
              Hair & Makeup
            </div>
          </div>
        </header>

        {/* HERO */}

        <section
          style={{
            backgroundColor:
              COLORS.black,
            color: COLORS.white,
            padding: "25px",
            marginBottom: "25px",
          }}
        >
          <div
            style={{
              color: COLORS.gold,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "8px",
            }}
          >
            SHOW DAY BEAUTY
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "42px",
              lineHeight: "0.95",
            }}
          >
            Hair & Makeup
          </div>

          <div
            style={{
              color: "#BBBBBB",
              fontSize: "10px",
              lineHeight: "1.5",
              marginTop: "9px",
              maxWidth: "500px",
            }}
          >
            Keep every model moving through
            beauty smoothly and on time.
          </div>
        </section>

        {/* STATS */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(130px, 1fr))",
            gap: "10px",
            marginBottom: "28px",
          }}
        >
          <div
            style={{
              backgroundColor:
                COLORS.lightGold,
              padding: "18px",
            }}
          >
            <div
              style={{
                color: "#806313",
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "1.5px",
              }}
            >
              WAITING
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "32px",
                marginTop: "3px",
              }}
            >
              {waitingCount}
            </div>
          </div>

          <div
            style={{
              backgroundColor:
                COLORS.lightPurple,
              padding: "18px",
            }}
          >
            <div
              style={{
                color: COLORS.purple,
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "1.5px",
              }}
            >
              IN CHAIR
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "32px",
                marginTop: "3px",
              }}
            >
              {inChairCount}
            </div>
          </div>

          <div
            style={{
              backgroundColor:
                COLORS.lightGreen,
              padding: "18px",
            }}
          >
            <div
              style={{
                color: COLORS.green,
                fontSize: "8px",
                fontWeight: "700",
                letterSpacing: "1.5px",
              }}
            >
              COMPLETE
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "32px",
                marginTop: "3px",
              }}
            >
              {completeCount}
            </div>
          </div>
        </section>

        {/* ACTION BAR */}

        <section
          style={{
            display: "flex",
            justifyContent:
              "space-between",
            alignItems: "center",
            gap: "15px",
            flexWrap: "wrap",
            marginBottom: "15px",
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
              BEAUTY BOARD
            </div>

            <div
              style={{
                color: COLORS.gray,
                fontSize: "9px",
                marginTop: "4px",
              }}
            >
              Today's hair and makeup schedule.
            </div>
          </div>

          <button
            type="button"
            onClick={openAddModal}
            style={{
              minHeight: "44px",
              border: "none",
              backgroundColor:
                COLORS.purple,
              color: COLORS.white,
              padding: "0 17px",
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "8px",
            }}
          >
            + ADD APPOINTMENT
          </button>
        </section>

        {/* FILTERS */}

        <section
          style={{
            display: "flex",
            gap: "7px",
            overflowX: "auto",
            paddingBottom: "8px",
            marginBottom: "20px",
          }}
        >
          {filters.map(
            (filterItem) => {
              const active =
                filter === filterItem;

              return (
                <button
                  key={filterItem}
                  type="button"
                  onClick={() =>
                    setFilter(
                      filterItem
                    )
                  }
                  style={{
                    flexShrink: 0,
                    minHeight: "38px",
                    padding:
                      "0 13px",
                    border: active
                      ? `1px solid ${COLORS.purple}`
                      : `1px solid ${COLORS.border}`,
                    backgroundColor:
                      active
                        ? COLORS.purple
                        : COLORS.white,
                    color: active
                      ? COLORS.white
                      : COLORS.black,
                    cursor: "pointer",
                    fontSize: "7px",
                    fontWeight: "700",
                  }}
                >
                  {filterItem}
                </button>
              );
            }
          )}
        </section>

        {/* APPOINTMENTS */}

        <section>
          {filteredAppointments.map(
            (appointment) => {
              const status =
                statusColors[
                  appointment.status
                ];

              return (
                <article
                  key={appointment.id}
                  style={{
                    border:
                      `1px solid ${COLORS.border}`,
                    marginBottom: "12px",
                    padding: "18px",
                    backgroundColor:
                      COLORS.white,
                  }}
                >
                  {/* TOP ROW */}

                  <div
                    style={{
                      display: "flex",
                      justifyContent:
                        "space-between",
                      alignItems:
                        "flex-start",
                      gap: "15px",
                      flexWrap: "wrap",
                    }}
                  >
                    <div
                      style={{
                        display: "flex",
                        alignItems:
                          "center",
                        gap: "15px",
                      }}
                    >
                      {/* TIME */}

                      <div
                        style={{
                          minWidth: "75px",
                        }}
                      >
                        <div
                          style={{
                            fontFamily:
                              '"Cormorant Garamond", Georgia, serif',
                            fontSize: "22px",
                          }}
                        >
                          {
                            appointment.time
                          }
                        </div>
                      </div>

                      {/* MODEL */}

                      <div>
                        <div
                          style={{
                            color:
                              COLORS.purple,
                            fontSize: "7px",
                            fontWeight:
                              "700",
                            letterSpacing:
                              "1.5px",
                          }}
                        >
                          MODEL
                        </div>

                        <div
                          style={{
                            fontFamily:
                              '"Cormorant Garamond", Georgia, serif',
                            fontSize: "27px",
                            lineHeight:
                              "1",
                            marginTop:
                              "3px",
                          }}
                        >
                          {
                            appointment.model
                          }
                        </div>
                      </div>
                    </div>

                    {/* STATUS */}

                    <button
                      type="button"
                      onClick={() =>
                        changeStatus(
                          appointment.id
                        )
                      }
                      style={{
                        border: "none",
                        backgroundColor:
                          status.background,
                        color:
                          status.color,
                        padding:
                          "8px 11px",
                        cursor: "pointer",
                        fontSize: "7px",
                        fontWeight:
                          "700",
                      }}
                    >
                      ●{" "}
                      {
                        appointment.status
                      }
                    </button>
                  </div>

                  {/* DETAILS */}

                  <div
                    style={{
                      display: "grid",
                      gridTemplateColumns:
                        "repeat(auto-fit, minmax(130px, 1fr))",
                      gap: "15px",
                      borderTop:
                        `1px solid ${COLORS.border}`,
                      marginTop: "15px",
                      paddingTop: "15px",
                    }}
                  >
                    <div>
                      <div
                        style={{
                          color:
                            COLORS.gray,
                          fontSize: "7px",
                          fontWeight:
                            "700",
                          letterSpacing:
                            "1px",
                        }}
                      >
                        SERVICE
                      </div>

                      <div
                        style={{
                          fontSize: "9px",
                          marginTop: "4px",
                        }}
                      >
                        {
                          appointment.service
                        }
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          color:
                            COLORS.gray,
                          fontSize: "7px",
                          fontWeight:
                            "700",
                          letterSpacing:
                            "1px",
                        }}
                      >
                        ARTIST
                      </div>

                      <div
                        style={{
                          fontSize: "9px",
                          marginTop: "4px",
                        }}
                      >
                        {
                          appointment.artist
                        }
                      </div>
                    </div>

                    <div>
                      <div
                        style={{
                          color:
                            COLORS.gray,
                          fontSize: "7px",
                          fontWeight:
                            "700",
                          letterSpacing:
                            "1px",
                        }}
                      >
                        CHAIR
                      </div>

                      <div
                        style={{
                          fontSize: "9px",
                          marginTop: "4px",
                        }}
                      >
                        {
                          appointment.chair
                        }
                      </div>
                    </div>
                  </div>

                  {/* ACTIONS */}

                  <div
                    style={{
                      display: "flex",
                      gap: "8px",
                      marginTop: "15px",
                    }}
                  >
                    <button
                      type="button"
                      onClick={() =>
                        openEditModal(
                          appointment
                        )
                      }
                      style={{
                        minHeight:
                          "38px",
                        border:
                          `1px solid ${COLORS.purple}`,
                        backgroundColor:
                          COLORS.white,
                        color:
                          COLORS.purple,
                        padding:
                          "0 13px",
                        cursor:
                          "pointer",
                        fontSize:
                          "7px",
                        fontWeight:
                          "700",
                      }}
                    >
                      EDIT
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        deleteAppointment(
                          appointment.id
                        )
                      }
                      style={{
                        minHeight:
                          "38px",
                        border:
                          `1px solid ${COLORS.border}`,
                        backgroundColor:
                          COLORS.white,
                        color:
                          COLORS.red,
                        padding:
                          "0 13px",
                        cursor:
                          "pointer",
                        fontSize:
                          "7px",
                        fontWeight:
                          "700",
                      }}
                    >
                      DELETE
                    </button>
                  </div>
                </article>
              );
            }
          )}
        </section>

        {/* INFO CARD */}

        <section
          style={{
            marginTop: "25px",
            backgroundColor:
              COLORS.lightPurple,
            padding: "20px",
          }}
        >
          <div
            style={{
              color: COLORS.purple,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "1.5px",
            }}
          >
            BACKSTAGE BEAUTY
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "28px",
              marginTop: "5px",
            }}
          >
            Keep the glam moving.
          </div>

          <div
            style={{
              color: COLORS.gray,
              fontSize: "9px",
              lineHeight: "1.5",
              marginTop: "5px",
            }}
          >
            Tap a status to move a model
            from waiting, to in-chair, to
            complete.
          </div>
        </section>
      </div>

      {/* MODAL */}

      {showModal && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor:
              "rgba(22,22,22,0.65)",
            zIndex: 1000,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "20px",
            overflowY: "auto",
          }}
        >
          <div
            style={{
              width: "100%",
              maxWidth: "500px",
              backgroundColor:
                COLORS.white,
              padding: "25px",
              boxSizing:
                "border-box",
              margin: "20px 0",
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
              {editingAppointment
                ? "EDIT APPOINTMENT"
                : "NEW APPOINTMENT"}
            </div>

            <h2
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "34px",
                fontWeight: "500",
                margin:
                  "7px 0 22px",
              }}
            >
              Beauty Appointment
            </h2>

            <label
              style={{
                display: "block",
                fontSize: "8px",
                fontWeight: "700",
                marginBottom: "6px",
              }}
            >
              TIME
            </label>

            <input
              value={time}
              onChange={(event) =>
                setTime(
                  event.target.value
                )
              }
              placeholder="08:30 AM"
              style={{
                width: "100%",
                height: "46px",
                border:
                  `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing:
                  "border-box",
                marginBottom:
                  "14px",
              }}
            />

            <label
              style={{
                display: "block",
                fontSize: "8px",
                fontWeight: "700",
                marginBottom: "6px",
              }}
            >
              MODEL NAME
            </label>

            <input
              value={model}
              onChange={(event) =>
                setModel(
                  event.target.value
                )
              }
              placeholder="Model 01"
              style={{
                width: "100%",
                height: "46px",
                border:
                  `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing:
                  "border-box",
                marginBottom:
                  "14px",
              }}
            />

            <label
              style={{
                display: "block",
                fontSize: "8px",
                fontWeight: "700",
                marginBottom: "6px",
              }}
            >
              SERVICE
            </label>

            <select
              value={service}
              onChange={(event) =>
                setService(
                  event.target.value
                )
              }
              style={{
                width: "100%",
                height: "46px",
                border:
                  `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing:
                  "border-box",
                backgroundColor:
                  COLORS.white,
                marginBottom:
                  "14px",
              }}
            >
              <option value="Hair">
                Hair
              </option>

              <option value="Makeup">
                Makeup
              </option>

              <option value="Hair + Makeup">
                Hair + Makeup
              </option>
            </select>

            <label
              style={{
                display: "block",
                fontSize: "8px",
                fontWeight: "700",
                marginBottom: "6px",
              }}
            >
              ARTIST
            </label>

            <input
              value={artist}
              onChange={(event) =>
                setArtist(
                  event.target.value
                )
              }
              placeholder="Artist name"
              style={{
                width: "100%",
                height: "46px",
                border:
                  `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing:
                  "border-box",
                marginBottom:
                  "14px",
              }}
            />

            <label
              style={{
                display: "block",
                fontSize: "8px",
                fontWeight: "700",
                marginBottom: "6px",
              }}
            >
              CHAIR
            </label>

            <select
              value={chair}
              onChange={(event) =>
                setChair(
                  event.target.value
                )
              }
              style={{
                width: "100%",
                height: "46px",
                border:
                  `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing:
                  "border-box",
                backgroundColor:
                  COLORS.white,
                marginBottom:
                  "20px",
              }}
            >
              <option value="Chair 01">
                Chair 01
              </option>

              <option value="Chair 02">
                Chair 02
              </option>

              <option value="Chair 03">
                Chair 03
              </option>

              <option value="Chair 04">
                Chair 04
              </option>

              <option value="Chair 05">
                Chair 05
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
                onClick={() => {
                  setShowModal(false);
                  resetForm();
                }}
                style={{
                  flex: 1,
                  minHeight:
                    "48px",
                  border:
                    `1px solid ${COLORS.border}`,
                  backgroundColor:
                    COLORS.white,
                  cursor:
                    "pointer",
                  fontWeight:
                    "700",
                  fontSize:
                    "8px",
                }}
              >
                CANCEL
              </button>

              <button
                type="button"
                onClick={
                  saveAppointment
                }
                style={{
                  flex: 1,
                  minHeight:
                    "48px",
                  border: "none",
                  backgroundColor:
                    COLORS.purple,
                  color:
                    COLORS.white,
                  cursor:
                    "pointer",
                  fontWeight:
                    "700",
                  fontSize:
                    "8px",
                }}
              >
                {editingAppointment
                  ? "SAVE CHANGES"
                  : "ADD APPOINTMENT"}
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
            transform:
              "translateX(-50%)",
            width:
              "calc(100% - 40px)",
            maxWidth: "440px",
            backgroundColor:
              COLORS.black,
            color:
              COLORS.white,
            padding:
              "15px 18px",
            textAlign:
              "center",
            fontSize: "10px",
            fontWeight:
              "700",
            zIndex: 1200,
            boxSizing:
              "border-box",
          }}
        >
          {message}
        </div>
      )}
    </main>
  );
}

export default HairMakeup;