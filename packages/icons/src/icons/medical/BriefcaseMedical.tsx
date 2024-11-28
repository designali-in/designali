import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BriefcaseMedical = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
      >
        <path d="M12 11v4" />
        <path d="M14 13h-4" />
        <path d="M16 6V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
        <path d="M18 6v14" />
        <path d="M6 6v14" />
        <rect width="20" height="14" x="2" y="6" rx="2" />
      </svg>
    );
  },
);

export default BriefcaseMedical;
