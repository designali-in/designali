import * as React from "react";

import { DesignaliProps } from "../types";

export const Captions = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="18" height="14" x="3" y="5" rx="2" ry="2" />
        <path d="M7 15h4M15 15h2M7 11h2M13 11h4" />
      </svg>
    );
  },
);

export default Captions;
