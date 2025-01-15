import * as React from "react";

import type { DesignaliProps } from "../../types";

export const BotMessageSquare = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,6V2h-4" />
        <path d="M8,18l-4,4v-14c0-1.1.9-2,2-2h12c1.1,0,2,.9,2,2v8c0,1.1-.9,2-2,2h-10Z" />
        <path d="M2,12h2" />
        <path d="M9,11v2" />
        <path d="M15,11v2" />
        <path d="M20,12h2" />
      </svg>
    );
  },
);

export default BotMessageSquare;
