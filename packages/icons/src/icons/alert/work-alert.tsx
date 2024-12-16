import * as React from "react";

import type { DesignaliProps } from "../../types";

export const WorkAlert = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <circle cx="17.73" cy="17.73" r="4.27" />
        <line x1="17.83" y1="15.93" x2="17.83" y2="17.01" />
        <circle cx="17.83" cy="19.62" r="0" />
        <path d="M16,6v-2c0-1.1-.9-2-2-2h-4c-1.1,0-2,.9-2,2v2" />
        <path
          fill="none"
          d="M10.84,20h-6.84c-1.1,0-2-.9-2-2v-10c0-1.1.9-2,2-2h16c1.1,0,2,.9,2,2v3.76"
        />
      </svg>
    );
  },
);

export default WorkAlert;
