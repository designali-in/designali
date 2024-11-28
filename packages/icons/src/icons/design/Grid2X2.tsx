import * as React from "react";

import { DesignaliProps } from "../types";

export const Grid2X2 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="18" height="18" x="3" y="3" rx="2" />
        <path d="M3 12h18" />
        <path d="M12 3v18" />
      </svg>
    );
  },
);

export default Grid2X2;
