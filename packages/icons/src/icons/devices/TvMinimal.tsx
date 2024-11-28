import * as React from "react";

import type { DesignaliProps } from "../../types";

export const TvMinimal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7 21h10" />
        <rect width="20" height="14" x="2" y="3" rx="2" />
      </svg>
    );
  },
);

export default TvMinimal;
