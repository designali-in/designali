import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiLearning = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M10.46,1.98v1.98M6.98,5.48h2.04M14.97,5.48h2.04M14.97,8.45h2.04M6.98,8.45h2.04M10.46,10v1.98M13.47,10v1.98M13.46,1.98v1.98M10.02,9.94h3.96c.55,0,1-.45,1-1v-3.99c0-.55-.45-1-1-1h-3.96c-.55,0-1,.45-1,1v3.99c0,.55.45,1,1,1Z" />
        <path d="M12,15.05v6.95" />
        <path
          fill="none"
          d="M20.08,4h.92c.55,0,1,.45,1,1v13c0,.55-.45,1-1,1h-6c-1.66,0-3,1.34-3,3,0-1.66-1.34-3-3-3H3c-.55,0-1-.45-1-1V5c0-.55.45-1,1-1h.98"
        />
      </svg>
    );
  },
);

export default AiLearning;
