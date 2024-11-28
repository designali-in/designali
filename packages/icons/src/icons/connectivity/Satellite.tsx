import * as React from "react";

import { DesignaliProps } from "../types";

export const Satellite = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M13 7 9 3 5 7l4 4" />
        <path d="m17 11 4 4-4 4-4-4" />
        <path d="m8 12 4 4 6-6-4-4Z" />
        <path d="m16 8 3-3" />
        <path d="M9 21a6 6 0 0 0-6-6" />
      </svg>
    );
  },
);

export default Satellite;
