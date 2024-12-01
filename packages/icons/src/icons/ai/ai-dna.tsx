import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiDna = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M7.38,14c-4.49-2.4-4.49-3.6-4.49-4s0-1.6,4.49-4M7.38,14c-4.49,2.4-4.49,3.2-4.49,4M7.38,14c4.49-2.4,4.49-3.6,4.49-4s0-1.6-4.49-4M7.38,6c4.49-2.4,4.49-3.2,4.49-4M7.38,6l-2.18-1.26c-2.31-1.46-2.31-2.1-2.31-2.74" />
        <path d="M14.52,12v1.98M11.04,15.5h2.05M19.06,15.5h2.05M19.06,18.47h2.05M11.04,18.47h2.05M14.52,20.02v1.98M17.55,20.02v1.98M17.54,12v1.98M14.09,19.97h3.97c.55,0,1-.45,1-1v-3.99c0-.55-.45-1-1-1h-3.97c-.55,0-1,.45-1,1v3.99c0,.55.45,1,1,1Z" />
      </svg>
    );
  },
);

export default AiDna;
