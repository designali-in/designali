import * as React from "react";

import type { DesignaliProps } from "../../types";

export const GitGraph = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="5" cy="6" r="3" />
        <path d="M5 9v6" />
        <circle cx="5" cy="18" r="3" />
        <path d="M12 3v18" />
        <circle cx="19" cy="6" r="3" />
        <path d="M16 15.7A9 9 0 0 0 19 9" />
      </svg>
    );
  },
);

export default GitGraph;
