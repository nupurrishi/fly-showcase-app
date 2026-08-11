import React from "react";
import Button from "./Button";

function Modal({
  open = false,
  title = "",
  children,
  onClose,
  confirmText = "",
  onConfirm,
  showConfirm = false,
}) {
  if (!open) {
    return null;
  }

  return (
    <div
      role="dialog"
      aria-modal="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1200,

        display: "flex",
        alignItems: "center",
        justifyContent: "center",

        padding: "var(--space-5)",

        background:
          "rgba(22, 22, 22, 0.65)",
      }}
      onClick={onClose}
    >
      <div
        style={{
          width: "100%",
          maxWidth: "520px",

          maxHeight:
            "calc(100vh - 40px)",
          overflowY: "auto",

          background:
            "var(--color-white)",

          padding: "var(--space-6)",

          borderRadius:
            "var(--border-radius-md)",

          boxShadow:
            "var(--shadow-lg)",
        }}
        onClick={(event) =>
          event.stopPropagation()
        }
      >
        <div
          style={{
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "space-between",
            gap: "var(--space-4)",
            marginBottom: "var(--space-5)",
          }}
        >
          <h2
            style={{
              fontFamily:
                "var(--font-heading)",
              fontSize:
                "var(--font-size-2xl)",
            }}
          >
            {title}
          </h2>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close"
            style={{
              border: "none",
              background: "transparent",
              color: "var(--color-gray-500)",
              fontSize: "22px",
              cursor: "pointer",
              lineHeight: 1,
            }}
          >
            ×
          </button>
        </div>

        <div>{children}</div>

        {(showConfirm || onConfirm) && (
          <div
            style={{
              display: "flex",
              gap: "var(--space-3)",
              marginTop: "var(--space-6)",
            }}
          >
            <Button
              variant="secondary"
              fullWidth
              onClick={onClose}
            >
              Cancel
            </Button>

            <Button
              fullWidth
              onClick={onConfirm}
            >
              {confirmText || "Confirm"}
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;