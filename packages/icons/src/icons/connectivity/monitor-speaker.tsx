import * as React from "react";

import type { DesignaliProps } from "../../types";

export const MonitorSpeaker = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M5.5,20h2.5" />
        <path d="M17,9h.01" />
        <rect x="12" y="4" width="10" height="16" rx="2" ry="2" />
        <path d="M8,6h-4c-1.1,0-2,.9-2,2v6c0,1.1.9,2,2,2h4" />
        <circle cx="17" cy="15" r="1" />
      </svg>
    );
  },
);

export default MonitorSpeaker;
