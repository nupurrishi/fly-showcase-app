import React from "react";

function LookCard({
  image,
  title,
  designer = "",
  description = "",
  onClick,
  className = "",
}) {
  return (
    <article
      className={`look-card ${onClick ? "look-card-clickable" : ""} ${className}`}
      onClick={onClick}
    >
      {image && (
        <div className="look-card-image">
          <img
            src={image}
            alt={title || "Look"}
          />
        </div>
      )}

      <div className="look-card-content">
        <div className="look-card-title">
          {title}
        </div>

        {designer && (
          <div className="look-card-designer">
            {designer}
          </div>
        )}

        {description && (
          <div className="look-card-description">
            {description}
          </div>
        )}
      </div>
    </article>
  );
}

export default LookCard;