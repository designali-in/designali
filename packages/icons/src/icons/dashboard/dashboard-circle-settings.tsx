import * as React from "react";

import type { DesignaliProps } from "../../types";

export const DashboardCircleSettings = React.forwardRef<
  SVGSVGElement,
  DesignaliProps
>(({ ...props }, forwardedRef) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
      ref={forwardedRef}
    >
      <circle cx="6.25" cy="6.25" r="4.25" />
      <circle cx="6.25" cy="17.75" r="4.25" />
      <circle cx="17.75" cy="17.75" r="4.25" />

      <circle cx="17.8" cy="6.25" r="3.45" />
      <path d="M22.05,7.86l-1.03-.34" />
      <path d="M14.58,4.99l-1.03-.34" />
      <path d="M16.19,10.5l.34-1.03" />
      <path d="M19.06,3.03l.34-1.03" />
      <path d="M19.63,10.5l-.46-1.15" />
      <path d="M16.42,3.15l-.46-1.15" />
      <path d="M13.55,8.09l1.15-.46" />
      <path d="M20.9,4.87l1.15-.46" />
    </svg>
  );
});

export default DashboardCircleSettings;
