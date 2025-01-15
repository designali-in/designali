import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Radar = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M19.08,4.92c-3.2-3.21-8.16-3.86-12.08-1.59" />
        <path d="M4.01,5.99h.01" />
        <path d="M2.3,9.61c-1.32,5.36,1.96,10.78,7.33,12.1,5.36,1.32,10.78-1.96,12.1-7.33.49-2.01.35-4.12-.4-6.04" />
        <path d="M16.25,7.75c-2.34-2.35-6.14-2.36-8.49-.02-2.35,2.34-2.36,6.14-.02,8.49.16.16.32.31.5.45" />
        <path d="M12.01,17.99h.01" />
        <path d="M18,11.65c.11,1.93-.72,3.8-2.22,5.01" />
        <circle cx="12.01" cy="11.99" r="2" />
        <path d="M13.42,10.58l5.66-5.66" />
      </svg>
    );
  },
);

export default Radar;
