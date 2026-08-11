import React from "react";
import Logo from "./Logo";

function PageHeader({
  eyebrow = "",
  title = "",
  subtitle = "",
  showLogo = true,
  className = "",
}) {
  return (
    <header className={`page-header ${className}`}>
      
      {showLogo && (
        <div className="page-header-logo">
          <Logo />
        </div>
      )}

      {eyebrow && (
        <div className="page-header-eyebrow">
          {eyebrow}
        </div>
      )}

      {title && (
        <h1 className="page-header-title">
          {title}
        </h1>
      )}

      {subtitle && (
        <p className="page-header-subtitle">
          {subtitle}
        </p>
      )}

    </header>
  );
}

export default PageHeader;