import * as React from "react";

import type { DesignaliProps } from "../types";

export const Webcam = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="12" cy="10" r="8" />
        <circle cx="12" cy="10" r="3" />
        <path d="M7 22h10" />
        <path d="M12 22v-4" />
      </svg>
    );
  },
);

export default Webcam;
