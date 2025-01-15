import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AlarmClockOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M6.87,6.87c-3.41,2.81-3.91,7.85-1.1,11.26,2.81,3.41,7.85,3.91,11.26,1.1.4-.33.77-.7,1.1-1.1" />
        <path d="M19.9,14.25c.69-4.36-2.29-8.46-6.65-9.15-.83-.13-1.67-.13-2.5,0" />
        <path d="M22,6l-3-3" />
        <path d="M6.26,18.67l-2.26,2.33" />
        <path d="M2,2l20,20" />
        <path d="M4,4l-2,2" />
      </svg>
    );
  },
);

export default AlarmClockOff;
