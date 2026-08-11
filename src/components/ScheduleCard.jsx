import React from "react";

function ScheduleCard({
  time,
  title,
  description = "",
  status = "",
  onClick,
  className = "",
}) {
  return (
    <article
      className={`schedule-card ${
        onClick ? "schedule-card-clickable" : ""
      } ${className}`}
      onClick={onClick}
    >
      <div className="schedule-card-time">
        {time}
      </div>

      <div className="schedule-card-content">
        <div className="schedule-card-title">
          {title}
        </div>

        {description && (
          <div className="schedule-card-description">
            {description}
          </div>
        )}
      </div>

      {status && (
        <div className="status-badge status-backstage">
          {status}
        </div>
      )}
    </article>
  );
}

export default ScheduleCard;