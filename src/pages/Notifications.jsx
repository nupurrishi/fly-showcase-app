import { useState } from "react";

function Notifications() {

  const [notifications, setNotifications] = useState([
    {
      id: 1,
      type: "URGENT",
      title: "Backstage Call",
      message: "Models 01–10 please report to Stage Entrance A.",
      time: "2 min ago",
      unread: true,
    },
    {
      id: 2,
      type: "SCHEDULE",
      title: "Schedule Updated",
      message: "Your designer fitting has moved from 10:45 AM to 11:00 AM.",
      time: "18 min ago",
      unread: true,
    },
    {
      id: 3,
      type: "EVENT",
      title: "Welcome to Fly Showcase",
      message: "Your event schedule and assignments are now available.",
      time: "Yesterday",
      unread: false,
    },
  ]);

  function markRead(id) {

    setNotifications(
      notifications.map((notification) =>
        notification.id === id
          ? { ...notification, unread: false }
          : notification
      )
    );

  }

  return (
    <main className="notifications-page">

      <header className="page-header">

        <div>

          <span className="eyebrow dark">
            FLY SHOWCASE
          </span>

          <h1>
            Your<br />
            <em>Updates.</em>
          </h1>

        </div>

        <div className="notification-badge">
          {notifications.filter((item) => item.unread).length}
        </div>

      </header>


      <section className="notification-intro">

        <span className="eyebrow dark">
          LIVE EVENT UPDATES
        </span>

        <p>
          Important schedule changes,
          calls and announcements appear here.
        </p>

      </section>


      <section className="notification-list">

        {notifications.map((notification) => (

          <button
            key={notification.id}
            className={`notification-item ${
              notification.unread
                ? "notification-unread"
                : ""
            }`}
            onClick={() => markRead(notification.id)}
          >

            <div className={`notification-icon ${notification.type.toLowerCase()}`}>
              {notification.type === "URGENT"
                ? "!"
                : notification.type === "SCHEDULE"
                ? "◷"
                : "✦"}
            </div>


            <div className="notification-content">

              <div className="notification-top">

                <span>
                  {notification.type}
                </span>

                <small>
                  {notification.time}
                </small>

              </div>

              <h3>
                {notification.title}
              </h3>

              <p>
                {notification.message}
              </p>

            </div>


            {notification.unread && (
              <span className="unread-dot"></span>
            )}

          </button>

        ))}

      </section>

    </main>
  );
}

export default Notifications;