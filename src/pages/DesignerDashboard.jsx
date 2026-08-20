import React, { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

export default function DesignerDashboard() {
  const [designer, setDesigner] = useState(null);
  const [event, setEvent] = useState(null);
  const [looks, setLooks] = useState([]);
  const [assignedModels, setAssignedModels] = useState([]);
  const [showForm, setShowForm] = useState(false);
  const [editingLook, setEditingLook] = useState(null);
  const [message, setMessage] = useState("");
  const [loading, setLoading] = useState(true);

  const [number, setNumber] = useState("");
  const [name, setName] = useState("");
  const [model, setModel] = useState("");
  const [description, setDescription] = useState("");
  const [notes, setNotes] = useState("");

  useEffect(() => {
    loadDesignerDashboard();
  }, []);

  async function loadDesignerDashboard() {
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

      // DESIGNER PROFILE
      const {
        data: profile,
        error: profileError,
      } = await supabase
        .from("profiles")
        .select("*")
        .eq("id", user.id)
        .single();

      if (profileError) throw profileError;

      setDesigner(profile);

      // GET EVENTS THIS DESIGNER BELONGS TO
      const {
        data: designerMemberships,
        error: membershipError,
      } = await supabase
        .from("event_members")
        .select("event_id")
        .eq("user_id", user.id);

      if (membershipError) throw membershipError;

      if (!designerMemberships?.length) {
        throw new Error(
          "This designer is not assigned to an event."
        );
      }

      const eventId =
        designerMemberships[0].event_id;

      // EVENT
      const {
        data: eventData,
        error: eventError,
      } = await supabase
        .from("events")
        .select("*")
        .eq("id", eventId)
        .single();

      if (eventError) throw eventError;

      setEvent(eventData);

      // GET EVERY USER IN THIS EVENT
      const {
        data: eventMembers,
        error: eventMembersError,
      } = await supabase
        .from("event_members")
        .select("user_id")
        .eq("event_id", eventId);

      if (eventMembersError) {
        throw eventMembersError;
      }

      const memberIds =
        eventMembers?.map(
          (member) => member.user_id
        ) || [];

      console.log(
        "EVENT ID:",
        eventId
      );

      console.log(
        "EVENT MEMBER IDS:",
        memberIds
      );

      if (memberIds.length > 0) {
        // GET PROFILES
        const {
          data: memberProfiles,
          error: memberProfilesError,
        } = await supabase
          .from("profiles")
          .select("id, full_name, role")
          .in("id", memberIds);

        if (memberProfilesError) {
          throw memberProfilesError;
        }

        console.log(
          "EVENT MEMBER PROFILES:",
          memberProfiles
        );

        // ONLY MODELS
        const models =
          memberProfiles?.filter(
            (person) =>
              String(person.role)
                .trim()
                .toLowerCase() ===
              "model"
          ) || [];

        console.log(
          "MODELS FOUND:",
          models
        );

        setAssignedModels(models);
      } else {
        setAssignedModels([]);
      }

      // DESIGNER LOOKS
      const {
        data: lookData,
        error: lookError,
      } = await supabase
        .from("designer_looks")
        .select("*")
        .eq("designer_id", user.id)
        .eq("event_id", eventId)
        .order("look_number", {
          ascending: true,
        });

      if (
        lookError &&
        lookError.code !== "42P01"
      ) {
        throw lookError;
      }

      setLooks(lookData || []);
    } catch (error) {
      console.error(
        "Designer dashboard error:",
        error
      );

      setMessage(
        error.message ||
          "Unable to load designer dashboard."
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

  function clearForm() {
    setNumber("");
    setName("");
    setModel("");
    setDescription("");
    setNotes("");
    setEditingLook(null);
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

  function getModelName(modelId) {
    const found = assignedModels.find(
      (item) => item.id === modelId
    );

    return found?.full_name || "Unassigned";
  }

  async function addLook() {
    if (!name.trim()) {
      showMessage(
        "Please enter a look name."
      );
      return;
    }

    try {
      const {
        data: { user },
      } = await supabase.auth.getUser();

      if (!user || !event) {
        throw new Error(
          "Unable to identify designer or event."
        );
      }

      const nextNumber =
        number ||
        String(
          looks.length + 1
        ).padStart(2, "0");

      const { data, error } =
        await supabase
          .from("designer_looks")
          .insert({
            designer_id: user.id,
            event_id: event.id,
            look_number: nextNumber,
            name: name.trim(),
            model_id: model || null,
            description:
              description.trim(),
            notes: notes.trim(),
          })
          .select()
          .single();

      if (error) throw error;

      setLooks([
        ...looks,
        data,
      ]);

      setShowForm(false);
      clearForm();

      showMessage("Look added.");
    } catch (error) {
      console.error(
        "Add look error:",
        error
      );

      showMessage(
        error.message ||
          "Unable to add look."
      );
    }
  }

  async function updateLook() {
    if (!editingLook) return;

    try {
      const { data, error } =
        await supabase
          .from("designer_looks")
          .update({
            look_number: number,
            name: name.trim(),
            model_id: model || null,
            description:
              description.trim(),
            notes: notes.trim(),
          })
          .eq(
            "id",
            editingLook.id
          )
          .select()
          .single();

      if (error) throw error;

      setLooks(
        looks.map((look) =>
          look.id === editingLook.id
            ? data
            : look
        )
      );

      setShowForm(false);
      clearForm();

      showMessage(
        "Look updated."
      );
    } catch (error) {
      console.error(
        "Update look error:",
        error
      );

      showMessage(
        error.message ||
          "Unable to update look."
      );
    }
  }

  async function deleteLook(id) {
    try {
      const { error } =
        await supabase
          .from("designer_looks")
          .delete()
          .eq("id", id);

      if (error) throw error;

      setLooks(
        looks.filter(
          (look) => look.id !== id
        )
      );

      showMessage(
        "Look deleted."
      );
    } catch (error) {
      console.error(
        "Delete look error:",
        error
      );

      showMessage(
        error.message ||
          "Unable to delete look."
      );
    }
  }

  function editLook(look) {
    setEditingLook(look);

    setNumber(
      look.look_number || ""
    );

    setName(
      look.name || ""
    );

    setModel(
      look.model_id || ""
    );

    setDescription(
      look.description || ""
    );

    setNotes(
      look.notes || ""
    );

    setShowForm(true);
  }

  function saveLook() {
    if (editingLook) {
      updateLook();
    } else {
      addLook();
    }
  }

  if (loading) {
    return (
      <main className="designer-page designer-loading">
        Loading designer dashboard...
      </main>
    );
  }

  return (
    <main className="designer-page">

      <div className="designer-top-bar" />

      <div className="designer-container">

        <header className="designer-header">

          <div>
            <div className="designer-logo">
              FLY
            </div>

            <div className="designer-logo-subtitle">
              SHOWCASE
            </div>
          </div>

          <div className="designer-header-user">

            <div className="designer-role">
              DESIGNER
            </div>

            <div className="designer-user-name">
              {designer?.full_name ||
                "Designer"}
            </div>

          </div>

        </header>

        <section className="designer-hero">

          <div className="designer-eyebrow">
            YOUR DESIGNER PROFILE
          </div>

          <h1>
            {designer?.full_name ||
              "Designer"}
          </h1>

          <p>
            {event?.name ||
              "Fly Showcase"}
          </p>

        </section>

        <section className="designer-info-grid">

          <InfoBox
            title="SHOW DATE"
            value={formatDate(
              event?.event_date
            )}
          />

          <InfoBox
            title="RUNWAY"
            value={
              event?.location ||
              "Main Stage"
            }
          />

          <InfoBox
            title="YOUR LOOKS"
            value={looks.length}
          />

        </section>

        <section className="designer-access">

          <strong>
            DESIGNER ACCESS
          </strong>

          <p>
            You can manage your lookbook
            and designer information.
            The official show schedule
            is managed by the Stage
            Manager.
          </p>

        </section>

        <section className="designer-section-header">

          <div>

            <strong>
              MY LOOKBOOK
            </strong>

            <div className="designer-section-subtitle">
              Manage your runway looks
            </div>

          </div>

          <button
            type="button"
            onClick={() => {
              clearForm();
              setShowForm(true);
            }}
            className="designer-primary-button"
          >
            + ADD LOOK
          </button>

        </section>

        <section className="designer-look-grid">

          {looks.length === 0 ? (

            <div className="designer-empty">
              You haven't added any looks yet.
            </div>

          ) : (

            looks.map((look) => (

              <div
                key={look.id}
                className="designer-look-card"
              >

                <div className="designer-look-image">

                  {look.look_number}

                  <span>
                    LOOK{" "}
                    {look.look_number}
                  </span>

                </div>

                <div className="designer-look-details">

                  <h2>
                    {look.name}
                  </h2>

                  <div className="designer-model-label">
                    MODEL:{" "}
                    {getModelName(
                      look.model_id
                    )}
                  </div>

                  <p>
                    {look.description ||
                      "No description added."}
                  </p>

                  <div className="designer-notes">

                    <strong>
                      DESIGNER NOTES
                    </strong>

                    <div>
                      {look.notes ||
                        "No notes added."}
                    </div>

                  </div>

                  <div className="designer-card-buttons">

                    <button
                      type="button"
                      onClick={() =>
                        editLook(look)
                      }
                      className="designer-outline-button"
                    >
                      EDIT
                    </button>

                    <button
                      type="button"
                      onClick={() =>
                        deleteLook(
                          look.id
                        )
                      }
                      className="designer-outline-button designer-delete-button"
                    >
                      DELETE
                    </button>

                  </div>

                </div>

              </div>

            ))

          )}

        </section>

        {/* ASSIGNED MODELS */}

        <section className="designer-assigned-section">

          <strong className="designer-section-label">
            YOUR ASSIGNED MODELS
          </strong>

          {assignedModels.length === 0 ? (

            <div className="designer-empty-small">
              No models are currently
              assigned to this event.
            </div>

          ) : (

            assignedModels.map(
              (modelProfile) => {

                const modelLook =
                  looks.find(
                    (look) =>
                      look.model_id ===
                      modelProfile.id
                  );

                return (
                  <div
                    key={modelProfile.id}
                    className="designer-model-row"
                  >

                    <div>

                      <div className="designer-model-name">
                        {modelProfile.full_name}
                      </div>

                      <div className="designer-model-look">
                        {modelLook
                          ? `Look ${modelLook.look_number}`
                          : "No look assigned"}
                      </div>

                    </div>

                    <span className="designer-assigned-badge">
                      ASSIGNED
                    </span>

                  </div>
                );
              }
            )

          )}

        </section>

        <section className="designer-show-notes">

          <strong className="designer-section-label">
            SHOW NOTES
          </strong>

          <textarea
            defaultValue="Please ensure all looks are steamed before backstage call. Finale look should remain with the designer until final fitting."
            rows="5"
          />

          <button
            type="button"
            onClick={() =>
              showMessage(
                "Notes saved."
              )
            }
            className="designer-primary-button designer-full-button"
          >
            SAVE NOTES
          </button>

        </section>

      </div>

      {/* MODAL */}

      {showForm && (

        <div className="designer-modal-background">

          <div className="designer-modal">

            <div className="designer-modal-eyebrow">
              {editingLook
                ? "EDIT LOOK"
                : "ADD NEW LOOK"}
            </div>

            <h2>
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

            <div className="designer-form-group">

              <label>
                ASSIGNED MODEL
              </label>

              <select
                value={model}
                onChange={(e) =>
                  setModel(
                    e.target.value
                  )
                }
              >

                <option value="">
                  Select a model
                </option>

                {assignedModels.map(
                  (modelProfile) => (

                    <option
                      key={modelProfile.id}
                      value={
                        modelProfile.id
                      }
                    >
                      {modelProfile.full_name}
                    </option>

                  )
                )}

              </select>

              {assignedModels.length ===
                0 && (
                <div
                  style={{
                    marginTop: "8px",
                    fontSize: "10px",
                    color: "#B33A3A",
                  }}
                >
                  No models are assigned
                  to this event yet.
                </div>
              )}

            </div>

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

            <div className="designer-modal-buttons">

              <button
                type="button"
                onClick={() => {
                  setShowForm(false);
                  clearForm();
                }}
                className="designer-outline-button"
              >
                CANCEL
              </button>

              <button
                type="button"
                onClick={saveLook}
                className="designer-primary-button"
              >
                {editingLook
                  ? "SAVE CHANGES"
                  : "ADD LOOK"}
              </button>

            </div>

          </div>

        </div>

      )}

      {message && (
        <div className="designer-toast">
          {message}
        </div>
      )}

    </main>
  );
}

function InfoBox({ title, value }) {
  return (
    <div className="designer-info-box">

      <div className="designer-info-title">
        {title}
      </div>

      <div className="designer-info-value">
        {value}
      </div>

    </div>
  );
}

function Input({
  label,
  value,
  setValue,
  placeholder,
}) {
  return (
    <div className="designer-form-group">

      <label>
        {label}
      </label>

      <input
        value={value}
        onChange={(e) =>
          setValue(
            e.target.value
          )
        }
        placeholder={placeholder}
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
    <div className="designer-form-group">

      <label>
        {label}
      </label>

      <textarea
        value={value}
        onChange={(e) =>
          setValue(
            e.target.value
          )
        }
        placeholder={placeholder}
        rows="3"
      />

    </div>
  );
}