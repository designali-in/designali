import * as React from "react";

import type { DesignaliProps } from "../../types";

export const House04 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <line x1="2.88" y1="22" x2="21.12" y2="22" />

        <path d="M7,9.5l4.77-4.26c1.29-1.16,1.94-1.74,2.73-1.74s1.44.58,2.73,1.74l4.77,4.26" />
        <path d="M3.66,22v-7.66" />
        <path d="M7.53,22v-12.98" />
        <path d="M21.47,22v-12.98" />
        <ellipse cx="3.66" cy="11.85" rx="1.66" ry="2.49" />
        <path d="M13.75,8.77h1.5" />
        <path d="M13.75,11.23h1.5" />
        <path d="M11.5,22v-5h6v5" />
      </svg>
    );
  },
);

export default House04;
