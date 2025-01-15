import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MedicalMask = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ ...props }, forwardedRef) => {
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
        <path d="M10,8.81h-1.29c-.45,0-.89.18-1.21.5M14,8.81h1.29c.45,0,.89.18,1.21.5" />
        <path d="M7,13.81l-5-1.5M17,13.81l5-1.5M7,17.81l-3.5-.5M17,17.81l3.5-.5" />
        <circle cx="12" cy="12" r="10" />
        <rect x="7" y="12.45" width="10" height="6.68" rx="1.56" ry="1.56" />
      </svg>
    );
  },
);

export default MedicalMask;
