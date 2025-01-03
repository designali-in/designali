import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BriefcaseMedical = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,12v4" />
        <path d="M14,14h-4" />
        <path d="M16,7v-2c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v2" />
        <path d="M18,7v14" />
        <path d="M6,7v14" />
        <rect x="2" y="7" width="20" height="14" rx="2" ry="2" />
      </svg>
    );
  },
);

export default BriefcaseMedical;
