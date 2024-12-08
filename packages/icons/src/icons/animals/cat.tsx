import * as React from "react";

import type { DesignaliProps } from "../types";

export const Cat = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M11.17,16.82h1.67l-.83.83-.83-.83Z" />

        <path
          fill="none"
          d="M12.01,4.33c.74,0,1.5.1,2.22.29,1.98-2.22,5.59-3.15,7.13-2.51,1.55.64-.47,7.77-.47,7.77.63,1.19,1.11,2.49,1.11,3.82,0,4.95-4.48,8.4-9.99,8.4S2.01,18.76,2.01,13.7c0-1.39.56-2.67,1.11-3.82,0,0-2.1-7.13-.56-7.77s5.24.26,7.22,2.48c.73-.17,1.47-.25,2.22-.26Z"
        />
        <path d="M7.56,14.32v.56" />
        <path d="M16.45,14.32v.56" />
      </svg>
    );
  },
);

export default Cat;
