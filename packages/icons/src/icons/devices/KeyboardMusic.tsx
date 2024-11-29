import * as React from "react";

import type { DesignaliProps } from "../../types";

export const KeyboardMusic = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <rect width="20" height="16" x="2" y="4" rx="2" />
        <path d="M6 8h4" />
        <path d="M14 8h.01" />
        <path d="M18 8h.01" />
        <path d="M2 12h20" />
        <path d="M6 12v4" />
        <path d="M10 12v4" />
        <path d="M14 12v4" />
        <path d="M18 12v4" />
      </svg>
    );
  },
);

export default KeyboardMusic;
