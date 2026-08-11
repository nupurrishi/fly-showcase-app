import React from "react";

function NotificationCard({
  title,
  message,
  time = "",
  type = "default",
  onClick,
  className = "",
}) {
  const typeClass =
    type === "alert"
      ? "status-alert"
      : type === "success"
      ? "status-ready"
      : type === "warning"
      ? "status-waiting"
      : "status-backstage";

  return (
    <article
      className={`notification-card ${
        onClick ? "notification-card-clickable" : ""
      } ${className}`}
      onClick={onClick}
    >
      <div
        className={`notification-indicator ${typeClass}`}
      />

      <div className="notification-content">
        <div className="notification-title">
          {title}
        </div>

        {message && (
          <div className="notification-message">
            {message}
          </div>
        )}

        {time && (
          <div className="notification-time">
            {time}
          </div>
        )}
      </div>
    </article>
  );
}

export default NotificationCard;