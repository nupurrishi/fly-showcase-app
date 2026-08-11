import React from "react";

function QuickAction({
  label,
  description = "",
  icon = "",
  onClick,
  className = "",
}) {
  return (
    <button
      type="button"
      className={`quick-action ${className}`}
      onClick={onClick}
    >
      {icon && (
        <span className="quick-action-icon">
          {icon}
        </span>
      )}

      <span className="quick-action-content">
        <span className="quick-action-label">
          {label}
        </span>

        {description && (
          <span className="quick-action-description">
            {description}
          </span>
        )}
      </span>

      <span className="quick-action-arrow">
        →
      </span>
    </button>
  );
}

export default QuickAction;