import * as React from "react";

import type { DesignaliProps } from "../../types";

export const AiMail01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
  ({ color = "currentColor", ...props }, forwardedRef) => {
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
        <path d="M20.52,8.01c1.48,0,1.48,1.36,1.48,1.99v10c0,1.1-.9,2-2,2H4c-1.1,0-2-.9-2-2v-10c0-.63,0-2.17,1.53-2.17" />
        <path fill="none" d="M22,10l-8.97,5.7c-.63.39-1.43.39-2.06,0L2,10" />
        <path d="M3.53,10.97V3.89c0-1.04.84-1.89,1.89-1.89h13.22c1.04,0,1.89.84,1.89,1.89v7.06" />
        <path
          fill="none"
          d="M8,10.11l1.61-4.6c.08-.24.31-.4.58-.4s.49.16.58.4l1.61,4.6M15,5.11v5M8.58,8.45h3.21"
        />
      </svg>
    );
  },
);

export default AiMail01;
