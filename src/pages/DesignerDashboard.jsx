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

const initialLooks = [
  {
    id: 1,
    number: "01",
    name: "Opening Look",
    model: "Model One",
    description: "Statement opening look.",
    notes: "Hair pulled back. Gold accessories.",
  },
  {
    id: 2,
    number: "02",
    name: "Evening Silhouette",
    model: "Model Two",
    description: "Long structured evening look.",
    notes: "Silver earrings required.",
  },
  {
    id: 3,
    number: "03",
    name: "Finale Look",
    model: "Model Three",
    description: "Final runway statement.",
    notes: "Finale position.",
  },
];

function DesignerDashboard() {
  const [looks, setLooks] = useState(initialLooks);

  const [showAddLook, setShowAddLook] =
    useState(false);

  const [editingLook, setEditingLook] =
    useState(null);

  const [message, setMessage] = useState("");

  const [lookNumber, setLookNumber] =
    useState("");

  const [lookName, setLookName] =
    useState("");

  const [modelName, setModelName] =
    useState("");

  const [description, setDescription] =
    useState("");

  const [notes, setNotes] = useState("");

  function resetForm() {
    setLookNumber("");
    setLookName("");
    setModelName("");
    setDescription("");
    setNotes("");
    setEditingLook(null);
  }

  function openAddLook() {
    resetForm();
    setShowAddLook(true);
  }

  function openEditLook(look) {
    setEditingLook(look);
    setLookNumber(look.number);
    setLookName(look.name);
    setModelName(look.model);
    setDescription(look.description);
    setNotes(look.notes);
    setShowAddLook(true);
  }

  function saveLook() {
    if (!lookName.trim()) {
      setMessage("Please enter a look name.");

      setTimeout(() => {
        setMessage("");
      }, 2500);

      return;
    }

    if (editingLook) {
      setLooks((current) =>
        current.map((look) =>
          look.id === editingLook.id
            ? {
                ...look,
                number:
                  lookNumber ||
                  look.number,
                name: lookName,
                model:
                  modelName ||
                  "Unassigned",
                description,
                notes,
              }
            : look
        )
      );

      setMessage("Lookbook entry updated.");
    } else {
      const newLook = {
        id: Date.now(),
        number:
          lookNumber ||
          String(looks.length + 1).padStart(2, "0"),
        name: lookName,
        model:
          modelName ||
          "Unassigned",
        description,
        notes,
      };

      setLooks((current) => [
        ...current,
        newLook,
      ]);

      setMessage("New look added to your lookbook.");
    }

    setShowAddLook(false);
    resetForm();

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

  function deleteLook(id) {
    setLooks((current) =>
      current.filter((look) => look.id !== id)
    );

    setMessage("Look removed from your lookbook.");

    setTimeout(() => {
      setMessage("");
    }, 2500);
  }

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
          width: "100%",
          backgroundColor: COLORS.purple,
        }}
      />

      <div
        style={{
          width: "100%",
          maxWidth: "1000px",
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
            marginBottom: "32px",
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
                letterSpacing: "1.5px",
                fontWeight: "700",
              }}
            >
              DESIGNER
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "23px",
                marginTop: "4px",
              }}
            >
              Designer Studio
            </div>
          </div>
        </header>

        {/* DESIGNER PROFILE */}

        <section
          style={{
            backgroundColor: COLORS.black,
            color: COLORS.white,
            padding: "24px",
            marginBottom: "24px",
          }}
        >
          <div
            style={{
              color: COLORS.gold,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "9px",
            }}
          >
            YOUR DESIGNER PROFILE
          </div>

          <div
            style={{
              fontFamily:
                '"Cormorant Garamond", Georgia, serif',
              fontSize: "40px",
              lineHeight: "0.95",
            }}
          >
            Designer A
          </div>

          <div
            style={{
              color: "#BBBBBB",
              fontSize: "10px",
              marginTop: "9px",
            }}
          >
            Fly Showcase • Main Fashion Show
          </div>
        </section>

        {/* SHOW INFORMATION */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(170px, 1fr))",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              padding: "17px",
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
              SHOW DATE
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "23px",
                marginTop: "6px",
              }}
            >
              November 11
            </div>
          </div>

          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              padding: "17px",
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
              RUNWAY
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "23px",
                marginTop: "6px",
              }}
            >
              Main Stage
            </div>
          </div>

          <div
            style={{
              border: `1px solid ${COLORS.border}`,
              padding: "17px",
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
              YOUR LOOKS
            </div>

            <div
              style={{
                fontFamily:
                  '"Cormorant Garamond", Georgia, serif',
                fontSize: "23px",
                marginTop: "6px",
              }}
            >
              {looks.length}
            </div>
          </div>
        </section>

        {/* IMPORTANT PERMISSION NOTICE */}

        <section
          style={{
            backgroundColor: COLORS.lightPurple,
            borderLeft: `5px solid ${COLORS.purple}`,
            padding: "17px 18px",
            marginBottom: "32px",
          }}
        >
          <div
            style={{
              color: COLORS.purple,
              fontSize: "8px",
              fontWeight: "700",
              letterSpacing: "1.5px",
              marginBottom: "6px",
            }}
          >
            DESIGNER ACCESS
          </div>

          <div
            style={{
              fontSize: "10px",
              lineHeight: "1.5",
            }}
          >
            You can manage your lookbook and
            designer information. The official
            show schedule is managed by the
            Stage Manager.
          </div>
        </section>

        {/* LOOKBOOK HEADER */}

        <section style={{ marginBottom: "18px" }}>
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "15px",
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
                MY LOOKBOOK
              </div>

              <div
                style={{
                  color: COLORS.gray,
                  fontSize: "9px",
                  marginTop: "4px",
                }}
              >
                Manage your runway looks
              </div>
            </div>

            <button
              type="button"
              onClick={openAddLook}
              style={{
                minHeight: "44px",
                border: "none",
                backgroundColor: COLORS.purple,
                color: COLORS.white,
                padding: "0 17px",
                cursor: "pointer",
                fontWeight: "700",
                fontSize: "9px",
              }}
            >
              + ADD LOOK
            </button>
          </div>
        </section>

        {/* LOOKBOOK GRID */}

        <section
          style={{
            display: "grid",
            gridTemplateColumns:
              "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "14px",
            marginBottom: "35px",
          }}
        >
          {looks.map((look) => (
            <article
              key={look.id}
              style={{
                border: `1px solid ${COLORS.border}`,
                backgroundColor: COLORS.white,
                overflow: "hidden",
              }}
            >
              {/* IMAGE PLACEHOLDER */}

              <div
                style={{
                  height: "210px",
                  backgroundColor: COLORS.black,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <div
                  style={{
                    color: COLORS.gold,
                    fontFamily:
                      '"Cormorant Garamond", Georgia, serif',
                    fontSize: "58px",
                    opacity: 0.9,
                  }}
                >
                  {look.number}
                </div>

                <div
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    backgroundColor: COLORS.gold,
                    color: COLORS.black,
                    padding: "5px 8px",
                    fontSize: "7px",
                    fontWeight: "700",
                  }}
                >
                  LOOK {look.number}
                </div>
              </div>

              {/* LOOK DETAILS */}

              <div style={{ padding: "17px" }}>
                <div
                  style={{
                    fontFamily:
                      '"Cormorant Garamond", Georgia, serif',
                    fontSize: "27px",
                    lineHeight: "1",
                  }}
                >
                  {look.name}
                </div>

                <div
                  style={{
                    color: COLORS.purple,
                    fontSize: "8px",
                    fontWeight: "700",
                    marginTop: "8px",
                  }}
                >
                  MODEL: {look.model}
                </div>

                <div
                  style={{
                    color: COLORS.gray,
                    fontSize: "9px",
                    lineHeight: "1.5",
                    marginTop: "10px",
                  }}
                >
                  {look.description}
                </div>

                <div
                  style={{
                    backgroundColor: COLORS.lightGold,
                    padding: "10px",
                    marginTop: "12px",
                  }}
                >
                  <div
                    style={{
                      fontSize: "7px",
                      fontWeight: "700",
                      color: "#806313",
                      letterSpacing: "1px",
                    }}
                  >
                    DESIGNER NOTES
                  </div>

                  <div
                    style={{
                      fontSize: "9px",
                      marginTop: "4px",
                      lineHeight: "1.4",
                    }}
                  >
                    {look.notes}
                  </div>
                </div>

                {/* ACTIONS */}

                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "14px",
                  }}
                >
                  <button
                    type="button"
                    onClick={() =>
                      openEditLook(look)
                    }
                    style={{
                      flex: 1,
                      minHeight: "42px",
                      border: `1px solid ${COLORS.purple}`,
                      backgroundColor:
                        COLORS.white,
                      color: COLORS.purple,
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "8px",
                    }}
                  >
                    EDIT
                  </button>

                  <button
                    type="button"
                    onClick={() =>
                      deleteLook(look.id)
                    }
                    style={{
                      flex: 1,
                      minHeight: "42px",
                      border: `1px solid ${COLORS.border}`,
                      backgroundColor:
                        COLORS.white,
                      color: COLORS.red,
                      cursor: "pointer",
                      fontWeight: "700",
                      fontSize: "8px",
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </article>
          ))}
        </section>

        {/* ASSIGNED MODELS */}

        <section style={{ marginBottom: "35px" }}>
          <div
            style={{
              fontSize: "9px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "14px",
            }}
          >
            YOUR ASSIGNED MODELS
          </div>

          <div
            style={{
              borderTop: `1px solid ${COLORS.border}`,
            }}
          >
            {[
              ["Model One", "Look 01", "READY"],
              ["Model Two", "Look 02", "STANDBY"],
              ["Model Three", "Look 03", "MAKEUP"],
            ].map((model) => (
              <div
                key={model[0]}
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: "15px",
                  padding: "15px 0",
                  borderBottom: `1px solid ${COLORS.border}`,
                  flexWrap: "wrap",
                }}
              >
                <div>
                  <div
                    style={{
                      fontFamily:
                        '"Cormorant Garamond", Georgia, serif',
                      fontSize: "21px",
                    }}
                  >
                    {model[0]}
                  </div>

                  <div
                    style={{
                      color: COLORS.gray,
                      fontSize: "8px",
                      marginTop: "3px",
                    }}
                  >
                    {model[1]}
                  </div>
                </div>

                <div
                  style={{
                    padding: "6px 9px",
                    backgroundColor:
                      model[2] === "READY"
                        ? COLORS.lightGreen
                        : model[2] ===
                          "STANDBY"
                        ? COLORS.lightGold
                        : COLORS.lightPurple,
                    color:
                      model[2] === "READY"
                        ? COLORS.green
                        : model[2] ===
                          "STANDBY"
                        ? "#806313"
                        : COLORS.purple,
                    fontSize: "7px",
                    fontWeight: "700",
                  }}
                >
                  {model[2]}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* DESIGNER NOTES */}

        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            padding: "20px",
          }}
        >
          <div
            style={{
              fontSize: "9px",
              fontWeight: "700",
              letterSpacing: "2px",
              marginBottom: "10px",
            }}
          >
            SHOW NOTES
          </div>

          <textarea
            defaultValue="Please ensure all looks are steamed before backstage call. Finale look should remain with the designer until final fitting."
            rows={5}
            style={{
              width: "100%",
              boxSizing: "border-box",
              resize: "vertical",
              border: `1px solid ${COLORS.border}`,
              padding: "12px",
              fontFamily:
                '"PT Sans", Arial, sans-serif',
              fontSize: "10px",
              lineHeight: "1.5",
            }}
          />

          <button
            type="button"
            onClick={() => {
              setMessage(
                "Designer notes saved."
              );

              setTimeout(() => {
                setMessage("");
              }, 2500);
            }}
            style={{
              width: "100%",
              minHeight: "46px",
              marginTop: "10px",
              border: "none",
              backgroundColor: COLORS.black,
              color: COLORS.white,
              cursor: "pointer",
              fontWeight: "700",
              fontSize: "9px",
            }}
          >
            SAVE NOTES
          </button>
        </section>
      </div>

      {/* ADD / EDIT LOOK MODAL */}

      {showAddLook && (
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
              backgroundColor: COLORS.white,
              padding: "25px",
              boxSizing: "border-box",
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
              {editingLook
                ? "EDIT LOOK"
                : "ADD NEW LOOK"}
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
              Lookbook Details
            </h2>

            <label
              style={{
                display: "block",
                fontSize: "8px",
                fontWeight: "700",
                marginBottom: "6px",
              }}
            >
              LOOK NUMBER
            </label>

            <input
              value={lookNumber}
              onChange={(event) =>
                setLookNumber(
                  event.target.value
                )
              }
              placeholder="01"
              style={{
                width: "100%",
                height: "46px",
                border: `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing: "border-box",
                marginBottom: "14px",
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
              LOOK NAME
            </label>

            <input
              value={lookName}
              onChange={(event) =>
                setLookName(
                  event.target.value
                )
              }
              placeholder="Opening Look"
              style={{
                width: "100%",
                height: "46px",
                border: `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing: "border-box",
                marginBottom: "14px",
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
              ASSIGNED MODEL
            </label>

            <input
              value={modelName}
              onChange={(event) =>
                setModelName(
                  event.target.value
                )
              }
              placeholder="Model name"
              style={{
                width: "100%",
                height: "46px",
                border: `1px solid ${COLORS.border}`,
                padding: "0 12px",
                boxSizing: "border-box",
                marginBottom: "14px",
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
              DESCRIPTION
            </label>

            <textarea
              value={description}
              onChange={(event) =>
                setDescription(
                  event.target.value
                )
              }
              placeholder="Describe the look..."
              rows={3}
              style={{
                width: "100%",
                border: `1px solid ${COLORS.border}`,
                padding: "12px",
                boxSizing: "border-box",
                resize: "vertical",
                marginBottom: "14px",
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
              DESIGNER NOTES
            </label>

            <textarea
              value={notes}
              onChange={(event) =>
                setNotes(
                  event.target.value
                )
              }
              placeholder="Hair, accessories, shoes, fitting notes..."
              rows={3}
              style={{
                width: "100%",
                border: `1px solid ${COLORS.border}`,
                padding: "12px",
                boxSizing: "border-box",
                resize: "vertical",
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
                onClick={() => {
                  setShowAddLook(false);
                  resetForm();
                }}
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
                onClick={saveLook}
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
                {editingLook
                  ? "SAVE CHANGES"
                  : "ADD LOOK"}
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
            maxWidth: "440px",
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

export default DesignerDashboard;