import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Turtle = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M12,10l2,4v3c0,.55.45,1,1,1h2c.55,0,1-.45,1-1v-3c0-4.42-3.58-8-8-8S2,9.58,2,14v3c0,.55.45,1,1,1h2c.55,0,1-.45,1-1v-3l2-4h4Z" />

        <path d="M15.18,7.9l-3.18,2.1" />
        <path d="M4.82,7.9l3.18,2.1" />
        <path d="M16.93,10h3.07c1.1,0,2,.9,2,2s-.9,2-2,2H2" />
      </svg>
    );
  },
);

export default Turtle;
