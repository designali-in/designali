import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiFolder02 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.45,12v1.98M6.96,15.5h2.05M14.99,15.5h2.05M14.99,18.47h2.05M6.96,18.47h2.05M10.45,20.02v1.98M13.48,20.02v1.98M13.46,12v1.98M10.01,19.97h3.97c.55,0,1-.45,1-1v-3.99c0-.55-.45-1-1-1h-3.97c-.55,0-1,.45-1,1v3.99c0,.55.45,1,1,1Z" />
        <path
          fill="none"
          d="M20,17.25c1.1,0,2-.9,2-2V6.77c0-1.1-.9-2-2-2h-7.9c-.68,0-1.32-.33-1.69-.9l-.81-1.2c-.37-.56-1-.9-1.67-.9h-3.93c-1.1,0-2,.9-2,2v11.48c0,1.1.9,2,2,2"
        />
      </svg>
    );
  },
);

export default AiFolder02;
