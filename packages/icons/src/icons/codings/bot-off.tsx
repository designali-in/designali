import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BotOff = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M13.67,8h4.33c1.1,0,2,.9,2,2v4.33" />
        <path d="M2,14h2" />
        <path d="M20,14h2" />
        <path d="M22,22L2,2" />
        <path d="M8,8h-2c-1.1,0-2,.9-2,2v8c0,1.1.9,2,2,2h12c.53,0,1.04-.21,1.41-.59" />
        <path d="M9,13v2" />
        <path d="M9.67,4h2.33v2.33" />
      </svg>
    );
  },
);

export default BotOff;
