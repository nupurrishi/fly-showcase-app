import React from "react";

function Model({
  name,
  image,
  designer = "",
  look = "",
  status = "",
  onClick,
  className = "",
}) {
  const statusClass =
    status === "READY"
      ? "status-ready"
      : status === "WAITING"
      ? "status-waiting"
      : status === "LIVE"
      ? "status-live"
      : status === "ENDED"
      ? "status-ended"
      : "status-backstage";

  return (
    <article
      className={`model-card ${className}`}
      onClick={onClick}
      style={{
        display: "flex",
        alignItems: "center",
        gap: "var(--space-3)",
        width: "100%",
        padding: "var(--space-4)",
        background: "var(--color-white)",
        border:
          "var(--border-width) solid var(--border-color)",
        borderRadius: "var(--border-radius-md)",
        cursor: onClick ? "pointer" : "default",
      }}
    >
      {image ? (
        <img
          src={image}
          alt={name}
          style={{
            width: "48px",
            height: "48px",
            borderRadius: "50%",
            objectFit: "cover",
            flexShrink: 0,
          }}
        />
      ) : (
        <div
          style={{
            width: "48px",
            height: "48px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            background:
              "var(--color-purple-light)",
            color: "var(--color-purple)",
            fontFamily: "var(--font-heading)",
            fontSize: "20px",
            flexShrink: 0,
          }}
        >
          {name
            ? name.charAt(0).toUpperCase()
            : "M"}
        </div>
      )}

      <div
        style={{
          flex: 1,
          minWidth: 0,
        }}
      >
        <div
          style={{
            fontFamily: "var(--font-heading)",
            fontSize: "var(--font-size-xl)",
            lineHeight: "1",
          }}
        >
          {name}
        </div>

        {(designer || look) && (
          <div
            style={{
              marginTop: "4px",
              color: "var(--color-gray-500)",
              fontSize: "var(--font-size-sm)",
            }}
          >
            {[designer, look]
              .filter(Boolean)
              .join(" • ")}
          </div>
        )}
      </div>

      {status && (
        <div
          className={`status-badge ${statusClass}`}
        >
          {status}
        </div>
      )}
    </article>
  );
}

export default Model;