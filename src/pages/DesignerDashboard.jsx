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
  red: "#B33A3A",
};

const STARTING_LOOKS = [
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

export default function DesignerDashboard() {
  const [looks, setLooks] = useState(STARTING_LOOKS);
  const [showForm, setShowForm] = useState(false);
  const [editingLook, setEditingLook] = useState(null);
  const [message, setMessage] = useState("");

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  const showMessage = (text) => {
    setMessage(text);
    setTimeout(() => setMessage(""), 2500);
  };

  const clearForm = () => {
    setNumber("");
    setName("");
    setModel("");
    setDescription("");
    setNotes("");
    setEditingLook(null);
  };

  const addLook = () => {
    if (!name.trim()) {
      showMessage("Please enter a look name.");
      return;
    }

    const newLook = {
      id: Date.now(),
      number: number || String(looks.length + 1).padStart(2, "0"),
      name,
      model: model || "Unassigned",
      description,
      notes,
    };

    setLooks([...looks, newLook]);
    setShowForm(false);
    clearForm();
    showMessage("Look added.");
  };

  const updateLook = () => {
    setLooks(
      looks.map((look) =>
        look.id === editingLook.id
          ? {
              ...look,
              number,
              name,
              model: model || "Unassigned",
              description,
              notes,
            }
          : look
      )
    );

    setShowForm(false);
    clearForm();
    showMessage("Look updated.");
  };

  const saveLook = () => {
    if (editingLook) {
      updateLook();
    } else {
      addLook();
    }
  };

  const editLook = (look) => {
    setEditingLook(look);
    setNumber(look.number);
    setName(look.name);
    setModel(look.model);
    setDescription(look.description);
    setNotes(look.notes);
    setShowForm(true);
  };

  const deleteLook = (id) => {
    setLooks(looks.filter((look) => look.id !== id));
    showMessage("Look deleted.");
  };

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
              DESIGNER
            </div>

            <div style={{ fontSize: "22px" }}>
              Designer Studio
            </div>
          </div>
        </header>

        {/* PROFILE */}
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
            YOUR DESIGNER PROFILE
          </div>

          <h1
            style={{
              margin: "8px 0 0",
              fontSize: "40px",
              fontWeight: "normal",
            }}
          >
            Designer A
          </h1>

          <p
            style={{
              color: "#BBBBBB",
              fontSize: "11px",
            }}
          >
            Fly Showcase • Main Fashion Show
          </p>
        </section>

        {/* SHOW INFO */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "10px",
            marginBottom: "30px",
          }}
        >
          <InfoBox title="SHOW DATE" value="November 11" />
          <InfoBox title="RUNWAY" value="Main Stage" />
          <InfoBox title="YOUR LOOKS" value={looks.length} />
        </section>

        {/* PERMISSION NOTICE */}
        <section
          style={{
            background: COLORS.lightPurple,
            borderLeft: `5px solid ${COLORS.purple}`,
            padding: "18px",
            marginBottom: "30px",
          }}
        >
          <strong
            style={{
              color: COLORS.purple,
              fontSize: "9px",
            }}
          >
            DESIGNER ACCESS
          </strong>

          <p style={{ fontSize: "11px", lineHeight: "1.5" }}>
            You can manage your lookbook and designer
            information. The official show schedule is
            managed by the Stage Manager.
          </p>
        </section>

        {/* LOOKBOOK HEADER */}
        <section
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "15px",
          }}
        >
          <div>
            <strong style={{ fontSize: "10px", letterSpacing: "2px" }}>
              MY LOOKBOOK
            </strong>

            <div
              style={{
                color: COLORS.gray,
                fontSize: "10px",
                marginTop: "4px",
              }}
            >
              Manage your runway looks
            </div>
          </div>

          <button
            onClick={() => {
              clearForm();
              setShowForm(true);
            }}
            style={buttonStyle}
          >
            + ADD LOOK
          </button>
        </section>

        {/* LOOKS */}
        <section
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "15px",
            marginBottom: "35px",
          }}
        >
          {looks.map((look) => (
            <div
              key={look.id}
              style={{
                border: `1px solid ${COLORS.border}`,
              }}
            >
              {/* IMAGE PLACEHOLDER */}
              <div
                style={{
                  height: "200px",
                  background: COLORS.black,
                  color: COLORS.gold,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  fontSize: "60px",
                  position: "relative",
                }}
              >
                {look.number}

                <span
                  style={{
                    position: "absolute",
                    top: "12px",
                    left: "12px",
                    background: COLORS.gold,
                    color: COLORS.black,
                    padding: "6px 8px",
                    fontSize: "8px",
                    fontWeight: "bold",
                  }}
                >
                  LOOK {look.number}
                </span>
              </div>

              {/* DETAILS */}
              <div style={{ padding: "18px" }}>
                <h2
                  style={{
                    margin: 0,
                    fontSize: "27px",
                    fontWeight: "normal",
                  }}
                >
                  {look.name}
                </h2>

                <div
                  style={{
                    color: COLORS.purple,
                    fontSize: "9px",
                    fontWeight: "bold",
                    marginTop: "8px",
                  }}
                >
                  MODEL: {look.model}
                </div>

                <p
                  style={{
                    color: COLORS.gray,
                    fontSize: "10px",
                    lineHeight: "1.5",
                  }}
                >
                  {look.description}
                </p>

                <div
                  style={{
                    background: COLORS.lightGold,
                    padding: "12px",
                    fontSize: "10px",
                  }}
                >
                  <strong
                    style={{
                      color: "#806313",
                      fontSize: "8px",
                    }}
                  >
                    DESIGNER NOTES
                  </strong>

                  <div style={{ marginTop: "5px" }}>
                    {look.notes}
                  </div>
                </div>

                {/* BUTTONS */}
                <div
                  style={{
                    display: "flex",
                    gap: "8px",
                    marginTop: "15px",
                  }}
                >
                  <button
                    onClick={() => editLook(look)}
                    style={{
                      ...outlineButton,
                      flex: 1,
                    }}
                  >
                    EDIT
                  </button>

                  <button
                    onClick={() => deleteLook(look.id)}
                    style={{
                      ...outlineButton,
                      flex: 1,
                      color: COLORS.red,
                    }}
                  >
                    DELETE
                  </button>
                </div>
              </div>
            </div>
          ))}
        </section>

        {/* ASSIGNED MODELS */}
        <section style={{ marginBottom: "35px" }}>
          <strong
            style={{
              fontSize: "10px",
              letterSpacing: "2px",
            }}
          >
            YOUR ASSIGNED MODELS
          </strong>

          {["Model One", "Model Two", "Model Three"].map(
            (modelName, index) => (
              <div
                key={modelName}
                style={{
                  borderBottom: `1px solid ${COLORS.border}`,
                  padding: "15px 0",
                  display: "flex",
                  justifyContent: "space-between",
                }}
              >
                <div>
                  <div style={{ fontSize: "20px" }}>
                    {modelName}
                  </div>

                  <div
                    style={{
                      color: COLORS.gray,
                      fontSize: "9px",
                    }}
                  >
                    Look {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <span
                  style={{
                    background: COLORS.lightPurple,
                    color: COLORS.purple,
                    padding: "7px 10px",
                    fontSize: "8px",
                    fontWeight: "bold",
                  }}
                >
                  {index === 0
                    ? "READY"
                    : index === 1
                    ? "STANDBY"
                    : "MAKEUP"}
                </span>
              </div>
            )
          )}
        </section>

        {/* SHOW NOTES */}
        <section
          style={{
            border: `1px solid ${COLORS.border}`,
            padding: "20px",
          }}
        >
          <strong
            style={{
              fontSize: "10px",
              letterSpacing: "2px",
            }}
          >
            SHOW NOTES
          </strong>

          <textarea
            defaultValue="Please ensure all looks are steamed before backstage call. Finale look should remain with the designer until final fitting."
            rows="5"
            style={{
              width: "100%",
              boxSizing: "border-box",
              marginTop: "12px",
              padding: "12px",
              border: `1px solid ${COLORS.border}`,
              fontFamily: "Arial, sans-serif",
            }}
          />

          <button
            onClick={() => showMessage("Notes saved.")}
            style={{
              ...buttonStyle,
              width: "100%",
              marginTop: "10px",
            }}
          >
            SAVE NOTES
          </button>
        </section>
      </div>

      {/* ADD / EDIT MODAL */}
      {showForm && (
        <div style={modalBackground}>
          <div style={modal}>
            <div
              style={{
                color: COLORS.purple,
                fontSize: "9px",
                fontWeight: "bold",
                letterSpacing: "2px",
              }}
            >
              {editingLook ? "EDIT LOOK" : "ADD NEW LOOK"}
            </div>

            <h2
              style={{
                fontSize: "32px",
                fontWeight: "normal",
                margin: "8px 0 20px",
              }}
            >
              Lookbook Details
            </h2>

            <Input
              label="LOOK NUMBER"
              value={number}
              setValue={setNumber}
              placeholder="01"
            />

            <Input
              label="LOOK NAME"
              value={name}
              setValue={setName}
              placeholder="Opening Look"
            />

            <Input
              label="ASSIGNED MODEL"
              value={model}
              setValue={setModel}
              placeholder="Model name"
            />

            <TextArea
              label="DESCRIPTION"
              value={description}
              setValue={setDescription}
              placeholder="Describe the look..."
            />

            <TextArea
              label="DESIGNER NOTES"
              value={notes}
              setValue={setNotes}
              placeholder="Hair, shoes, accessories, fitting notes..."
            />

            <div style={{ display: "flex", gap: "10px" }}>
              <button
                onClick={() => {
                  setShowForm(false);
                  clearForm();
                }}
                style={{ ...outlineButton, flex: 1 }}
              >
                CANCEL
              </button>

              <button
                onClick={saveLook}
                style={{ ...buttonStyle, flex: 1 }}
              >
                {editingLook ? "SAVE CHANGES" : "ADD LOOK"}
              </button>
            </div>
          </div>
        </div>
      )}

      {/* MESSAGE */}
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

/* SMALL REUSABLE COMPONENTS */

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
          fontSize: "8px",
          fontWeight: "bold",
          letterSpacing: "1.5px",
        }}
      >
        {title}
      </div>

      <div
        style={{
          fontSize: "23px",
          marginTop: "6px",
        }}
      >
        {value}
      </div>
    </div>
  );
}

function Input({ label, value, setValue, placeholder }) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label
        style={{
          display: "block",
          fontSize: "8px",
          fontWeight: "bold",
          marginBottom: "6px",
        }}
      >
        {label}
      </label>

      <input
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        style={{
          width: "100%",
          height: "45px",
          boxSizing: "border-box",
          padding: "0 12px",
          border: `1px solid ${COLORS.border}`,
        }}
      />
    </div>
  );
}

function TextArea({
  label,
  value,
  setValue,
  placeholder,
}) {
  return (
    <div style={{ marginBottom: "14px" }}>
      <label
        style={{
          display: "block",
          fontSize: "8px",
          fontWeight: "bold",
          marginBottom: "6px",
        }}
      >
        {label}
      </label>

      <textarea
        value={value}
        onChange={(e) => setValue(e.target.value)}
        placeholder={placeholder}
        rows="3"
        style={{
          width: "100%",
          boxSizing: "border-box",
          padding: "12px",
          border: `1px solid ${COLORS.border}`,
          resize: "vertical",
        }}
      />
    </div>
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

const outlineButton = {
  minHeight: "42px",
  border: `1px solid ${COLORS.border}`,
  background: COLORS.white,
  color: COLORS.purple,
  cursor: "pointer",
  fontWeight: "bold",
  fontSize: "8px",
};

const modalBackground = {
  position: "fixed",
  inset: 0,
  background: "rgba(22,22,22,0.65)",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "20px",
  zIndex: 1000,
};

const modal = {
  width: "100%",
  maxWidth: "500px",
  maxHeight: "90vh",
  overflowY: "auto",
  background: COLORS.white,
  padding: "25px",
  boxSizing: "border-box",
};