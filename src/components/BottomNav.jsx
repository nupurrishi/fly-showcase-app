import React from "react";

function BottomNav({
  items = [],
  active = "",
  onNavigate,
  className = "",
}) {
  return (
    <nav
      className={`bottom-nav ${className}`}
      style={{
        "--bottom-nav-columns": Math.max(items.length, 1),
      }}
    >
      {items.map((item) => {
        const isActive = active === item.id;

        return (
          <button
            key={item.id}
            type="button"
            className={`bottom-nav-item ${
              isActive ? "active" : ""
            }`}
            onClick={() => {
              if (onNavigate) {
                onNavigate(item);
              }
            }}
          >
            {item.icon && (
              <span className="bottom-nav-icon">
                {item.icon}
              </span>
            )}

            <span className="bottom-nav-label">
              {item.label}
            </span>
          </button>
        );
      })}
    </nav>
  );
}

export default BottomNav;