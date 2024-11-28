import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Sun = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        {...props}
        ref={forwardedRef}
      >
        <circle cx="12" cy="12" r="4" />
        <path fill="none" d="M12 2v2" />
        <path fill="none" d="M12 20v2" />
        <path fill="none" d="m4.93 4.93 1.41 1.41" />
        <path fill="none" d="m17.66 17.66 1.41 1.41" />
        <path fill="none" d="M2 12h2" />
        <path fill="none" d="M20 12h2" />
        <path fill="none" d="m6.34 17.66-1.41 1.41" />
        <path fill="none" d="m19.07 4.93-1.41 1.41" />
      </svg>
    );
  },
);

export default Sun;
