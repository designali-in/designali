import * as React from "react";

import { DesignaliProps } from "../types";

export const LayoutTemplate = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="18" height="7" x="3" y="3" rx="1" />
        <rect width="9" height="7" x="3" y="14" rx="1" />
        <rect width="5" height="7" x="16" y="14" rx="1" />
      </svg>
    );
  },
);

export default LayoutTemplate;
