import React from "react";

function Logo({
  showTagline = true,
  light = false,
  className = "",
}) {
  return (
    <div
      className={`fly-logo ${
        light ? "fly-logo-light" : ""
      } ${className}`}
    >
      <div className="fly-logo-wordmark">
        FLY
      </div>

      {showTagline && (
        <div className="fly-logo-tagline">
          SHOWCASE
        </div>
      )}
    </div>
  );
}

export default Logo;