import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Podcast = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M16.85 18.58a9 9 0 1 0-9.7 0" />
        <path d="M8 14a5 5 0 1 1 8 0" />
        <circle cx="12" cy="11" r="1" />
        <path d="M13 17a1 1 0 1 0-2 0l.5 4.5a.5.5 0 1 0 1 0Z" />
      </svg>
    );
  },
);

export default Podcast;
