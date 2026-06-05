import React from "react";

export const LOGO_URL =
  "https://customer-assets.emergentagent.com/job_nutrisnap-demo/artifacts/el4fk3hy_NutriSnap%20logo%203.png";

export const Logo = ({ className = "h-9 w-auto" }) => (
  <img
    src={LOGO_URL}
    alt="NutriSnap"
    className={className}
    draggable={false}
  />
);

export const ApertureMark = ({ className = "h-6 w-6", glow = true }) => (
  <span
    className={`inline-flex items-center justify-center ${className} ${
      glow ? "mint-glow rounded-full" : ""
    }`}
    aria-hidden
  >
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      className="h-full w-full text-mint"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14.31 8 20.05 17.94" />
      <path d="M9.69 8h11.48" />
      <path d="M7.38 12 13.12 2.06" />
      <path d="M9.69 16 3.95 6.06" />
      <path d="M14.31 16H2.83" />
      <path d="M16.62 12 10.88 21.94" />
    </svg>
  </span>
);
