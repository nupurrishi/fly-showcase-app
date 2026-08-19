import { useEffect, useState } from "react";
import { supabase } from "../lib/supabase";

function ModelDashboard() {
  const [profile, setProfile] = useState(null);
  const [event, setEvent] = useState(null);
  const [scheduleItems, setScheduleItems] = useState([]);
  const [assignedItems, setAssignedItems] = useState([]);
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    loadModelDashboard();
  }, []);

  async function loadModelDashboard() {
    setIsLoading(true);
    setMessage("");

    try {
      // ==========================================
      // 1. GET CURRENT USER
      // ==========================================

      const {
        data: { user },
        error: userError,
      } = await supabase.auth.getUser();

      if (userError) {
        console.error("User error:", userError);
        setMessage("Unable to load your account.");
        setIsLoading(false);
        return;
      }

      if (!user) {
        setMessage("You are not signed in.");
        setIsLoading(false);
        return;
      }

      console.log("Logged-in user:", user);

      // ==========================================
      // 2. GET PROFILE
      // ==========================================

      const { data: profileData, error: profileError } =
        await supabase
          .from("profiles")
          .select(
            "id, full_name, email, role, phone, profile_image_url"
          )
          .eq("id", user.id)
          .single();

      if (profileError) {
        console.error("Profile error:", profileError);
        setMessage(
          "Your account was found, but your profile could not be loaded."
        );
        setIsLoading(false);
        return;
      }

      setProfile(profileData);

      // ==========================================
      // 3. GET EVENT MEMBERSHIP
      // ==========================================

      const {
        data: membershipData,
        error: membershipError,
      } = await supabase
        .from("event_members")
        .select("id, event_id, user_id, joined_at")
        .eq("user_id", user.id)
        .limit(1)
        .maybeSingle();

      if (membershipError) {
        console.error(
          "Event membership error:",
          membershipError
        );

        setMessage(
          "Your event assignment could not be loaded."
        );

        setIsLoading(false);
        return;
      }

      if (!membershipData) {
        setEvent(null);
        setScheduleItems([]);
        setAssignedItems([]);
        setIsLoading(false);
        return;
      }

      // ==========================================
      // 4. GET EVENT
      // ==========================================

      const { data: eventData, error: eventError } =
        await supabase
          .from("events")
          .select(
            "id, name, description, event_date, location, status"
          )
          .eq("id", membershipData.event_id)
          .single();

      if (eventError) {
        console.error("Event error:", eventError);
        setMessage(
          "Your event details could not be loaded."
        );
        setIsLoading(false);
        return;
      }

      setEvent(eventData);

      // ==========================================
      // 5. GET EVENT SCHEDULE
      // ==========================================

      const {
        data: scheduleData,
        error: scheduleError,
      } = await supabase
        .from("schedule_items")
        .select(
          "id, event_id, title, location, start_time, end_time, status, notes"
        )
        .eq("event_id", eventData.id)
        .order("start_time", {
          ascending: true,
        });

      if (scheduleError) {
        console.error(
          "Schedule error:",
          scheduleError
        );

        setMessage(
          "The event schedule could not be loaded."
        );

        setIsLoading(false);
        return;
      }

      setScheduleItems(scheduleData || []);

      // ==========================================
      // 6. GET MODEL-SPECIFIC ASSIGNMENTS
      // ==========================================

      const {
        data: assignmentData,
        error: assignmentError,
      } = await supabase
        .from("schedule_assignments")
        .select(
          `
          id,
          schedule_item_id,
          user_id,
          schedule_items (
            id,
            event_id,
            title,
            location,
            start_time,
            end_time,
            status,
            notes
          )
          `
        )
        .eq("user_id", user.id);

      if (assignmentError) {
        console.error(
          "Assignment error:",
          assignmentError
        );

        setMessage(
          "Your assigned schedule could not be loaded."
        );

        setIsLoading(false);
        return;
      }

      console.log(
        "Assigned schedule:",
        assignmentData
      );

      const assignedSchedule = (assignmentData || [])
        .map((assignment) => assignment.schedule_items)
        .filter(
          (item) =>
            item &&
            item.event_id === eventData.id
        )
        .sort(
          (a, b) =>
            new Date(a.start_time) -
            new Date(b.start_time)
        );

      setAssignedItems(assignedSchedule);
    } catch (error) {
      console.error(
        "Unexpected dashboard error:",
        error
      );

      setMessage(
        "Something went wrong while loading your dashboard."
      );
    }

    setIsLoading(false);
  }

  // ==========================================
  // FORMAT DATE
  // ==========================================

  function formatEventDate(date) {
    if (!date) {
      return "Date TBA";
    }

    const formattedDate = new Date(date);

    if (Number.isNaN(formattedDate.getTime())) {
      return date;
    }

    return formattedDate.toLocaleDateString(
      "en-US",
      {
        month: "long",
        day: "numeric",
        year: "numeric",
      }
    );
  }

  // ==========================================
  // FORMAT TIME
  // ==========================================

  function formatTime(time) {
    if (!time) {
      return "TBA";
    }

    const date = new Date(time);

    if (Number.isNaN(date.getTime())) {
      return time;
    }

    return date.toLocaleTimeString("en-US", {
      hour: "numeric",
      minute: "2-digit",
    });
  }

  // ==========================================
  // LOADING
  // ==========================================

  if (isLoading) {
    return (
      <main className="model-dashboard">
        <div className="model-dashboard-top-bar" />

        <div className="model-dashboard-loading">
          <div className="model-dashboard-loading-logo">
            FLY
          </div>

          <div className="model-dashboard-loading-subtitle">
            SHOWCASE
          </div>

          <p>Loading your dashboard...</p>
        </div>
      </main>
    );
  }

  // ==========================================
  // DASHBOARD
  // ==========================================

  return (
    <main className="model-dashboard">

      <div className="model-dashboard-top-bar" />

      <div className="model-dashboard-container">

        {/* HEADER */}

        <header className="model-dashboard-header">

          <div>
            <div className="model-dashboard-logo">
              FLY
            </div>

            <div className="model-dashboard-logo-subtitle">
              SHOWCASE
            </div>
          </div>

          <div className="model-dashboard-heading">

            <div className="model-dashboard-role">
              {profile?.role?.toUpperCase() || "MODEL"}
            </div>

            <div className="model-dashboard-title-small">
              My Dashboard
            </div>

          </div>

        </header>

        {/* MESSAGE */}

        {message && (
          <div className="model-dashboard-message">
            {message}
          </div>
        )}

        {/* PROFILE */}

        <section className="model-profile-card">

          <div className="model-profile-label">
            YOUR MODEL PROFILE
          </div>

          <div className="model-profile-name">
            {profile?.full_name || "Welcome"}
          </div>

          <div className="model-profile-event">
            {profile?.email || ""}
          </div>

        </section>

        {/* EVENT */}

        {event ? (
          <>
            <section className="model-info-grid">

              <div className="model-info-box">
                <div className="model-info-box-title">
                  EVENT
                </div>

                <div className="model-info-box-value">
                  {event.name}
                </div>
              </div>

              <div className="model-info-box">
                <div className="model-info-box-title">
                  SHOW DATE
                </div>

                <div className="model-info-box-value">
                  {formatEventDate(
                    event.event_date
                  )}
                </div>
              </div>

              <div className="model-info-box">
                <div className="model-info-box-title">
                  LOCATION
                </div>

                <div className="model-info-box-value">
                  {event.location || "TBA"}
                </div>
              </div>

              <div className="model-info-box">
                <div className="model-info-box-title">
                  STATUS
                </div>

                <div className="model-info-box-value">
                  {event.status
                    ? event.status.toUpperCase()
                    : "CONFIRMED"}
                </div>
              </div>

            </section>

            {event.description && (
              <section className="model-information-notice">

                <div className="model-information-label">
                  EVENT INFORMATION
                </div>

                <div className="model-information-text">
                  {event.description}
                </div>

              </section>
            )}

          </>
        ) : (
          <section className="model-information-notice">

            <div className="model-information-label">
              EVENT ASSIGNMENT
            </div>

            <div className="model-information-text">
              You have not been assigned to an event yet.
              Please contact the Fly Showcase team.
            </div>

          </section>
        )}

        {/* ==========================================
            YOUR ASSIGNED CALLS
        ========================================== */}

        <section className="model-dashboard-section">

          <div className="model-section-title">

            <div className="model-section-title-main">
              YOUR ASSIGNED CALLS
            </div>

            <div className="model-section-title-subtitle">
              Your personal backstage schedule.
            </div>

          </div>

          {assignedItems.length === 0 ? (
            <div className="model-empty-state">
              No personal schedule assignments yet.
            </div>
          ) : (
            <div className="model-schedule-list">

              {assignedItems.map((item) => (

                <div
                  key={item.id}
                  className="model-schedule-item"
                >

                  <div className="model-schedule-time">
                    {formatTime(item.start_time)}
                  </div>

                  <div className="model-schedule-details">

                    <div className="model-schedule-title">
                      {item.title}
                    </div>

                    {item.location && (
                      <div className="model-schedule-location">
                        {item.location}
                      </div>
                    )}

                    {item.notes && (
                      <div className="model-schedule-notes">
                        {item.notes}
                      </div>
                    )}

                    {item.end_time && (
                      <div className="model-schedule-end">
                        Until {formatTime(item.end_time)}
                      </div>
                    )}

                  </div>

                  <div
                    className={`model-schedule-status ${
                      item.status === "completed"
                        ? "completed"
                        : item.status === "cancelled"
                        ? "cancelled"
                        : "upcoming"
                    }`}
                  >
                    {item.status
                      ? item.status.toUpperCase()
                      : "UPCOMING"}
                  </div>

                </div>

              ))}

            </div>
          )}

        </section>

        {/* ==========================================
            FULL EVENT SCHEDULE
        ========================================== */}

        <section className="model-dashboard-section">

          <div className="model-section-title">

            <div className="model-section-title-main">
              EVENT SCHEDULE
            </div>

            <div className="model-section-title-subtitle">
              Important times for the entire show.
            </div>

          </div>

          {scheduleItems.length === 0 ? (
            <div className="model-empty-state">
              No event schedule has been added yet.
            </div>
          ) : (
            <div className="model-schedule-list">

              {scheduleItems.map((item) => (

                <div
                  key={item.id}
                  className="model-schedule-item"
                >

                  <div className="model-schedule-time">
                    {formatTime(item.start_time)}
                  </div>

                  <div className="model-schedule-details">

                    <div className="model-schedule-title">
                      {item.title}
                    </div>

                    {item.location && (
                      <div className="model-schedule-location">
                        {item.location}
                      </div>
                    )}

                    {item.notes && (
                      <div className="model-schedule-notes">
                        {item.notes}
                      </div>
                    )}

                  </div>

                  <div
                    className={`model-schedule-status ${
                      item.status === "completed"
                        ? "completed"
                        : item.status === "cancelled"
                        ? "cancelled"
                        : "upcoming"
                    }`}
                  >
                    {item.status
                      ? item.status.toUpperCase()
                      : "UPCOMING"}
                  </div>

                </div>

              ))}

            </div>
          )}

        </section>

        {/* ==========================================
            RUNWAY LOOKS
        ========================================== */}

        <section className="model-dashboard-section">

          <div className="model-section-title">

            <div className="model-section-title-main">
              MY RUNWAY LOOKS
            </div>

            <div className="model-section-title-subtitle">
              Your assigned outfits will appear here.
            </div>

          </div>

          <div className="model-empty-state">
            No runway looks have been assigned yet.
          </div>

        </section>

        {/* ==========================================
            CHECKLIST
        ========================================== */}

        <section className="model-dashboard-section">

          <div className="model-section-title">

            <div className="model-section-title-main">
              SHOW DAY CHECKLIST
            </div>

            <div className="model-section-title-subtitle">
              Make sure you are ready.
            </div>

          </div>

          <div className="model-checklist">

            {[
              "Arrive on time",
              "Check in with backstage",
              "Complete hair and makeup",
              "Attend designer fitting",
              "Have all accessories",
              "Be ready for backstage call",
            ].map((item, index) => (

              <label
                key={index}
                className="model-checklist-item"
              >

                <input type="checkbox" />

                <span>{item}</span>

              </label>

            ))}

          </div>

        </section>

        {/* ==========================================
            BACKSTAGE HELP
        ========================================== */}

        <section className="model-backstage-help">

          <div className="model-backstage-label">
            NEED HELP?
          </div>

          <div className="model-backstage-title">
            Ask the backstage team.
          </div>

          <p className="model-backstage-text">
            If you are unsure about your call time,
            location, outfit, or runway position,
            contact your backstage manager.
          </p>

          <button
            type="button"
            className="model-backstage-button"
            onClick={() => {

              setMessage(
                "Backstage team contact feature coming soon."
              );

              setTimeout(() => {
                setMessage("");
              }, 2500);

            }}
          >
            CONTACT BACKSTAGE
          </button>

        </section>

      </div>

      {/* TOAST */}

      {message && (
        <div className="model-dashboard-toast">
          {message}
        </div>
      )}

    </main>
  );
}

export default ModelDashboard;