import React from "react";

function Button({
  children,
  variant = "primary",
  size = "medium",
  fullWidth = false,
  type = "button",
  onClick,
  disabled = false,
  className = "",
}) {
  const classes = [
    "button",
    `button-${variant}`,
    size === "small" ? "button-small" : "",
    fullWidth ? "button-full" : "",
    className,
  ]
    .filter(Boolean)
    .join(" ");

  return (
    <button
      type={type}
      className={classes}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

export default Button;