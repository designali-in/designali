import * as React from "react";

import type { DesignaliProps } from "../../types";

export const HighHeels01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M18,17.99c-.97.67-2.31,1.87-1.94,4" />

        <path d="M5,5.99c.75,2.5,3.94,3.44,2.73,4.68-.44.44-1.14.88-2.29,1.32" />
        <path d="M13,21.96c-3,0-3.3-7.27-8.36-10.37-.8-.49-1.76-1.14-1.62-2.22.21-1.61,1.67-3.23,3.14-3.99,1.1-.57,1.57-2.1,1.74-2.94.05-.22.02-.37.1-.42,0,0,0,0,.05,0,.05,0,.07,0,.1.02,4.89,1.96,7.4,1.5,7.44,1.7.14.71.35,2.49-.23,5.16-.97,4.51-.21,7.91,1.94,9.02.97.5,4.84,1,3.39,3.01-.99,1.36-7.68,1.05-7.68,1.05Z" />
        <path d="M7.48,4.02c.7.55,1.91,1.35,3.62,1.82,2.05.56,3.78.35,4.69.16" />
      </svg>
    );
  },
);

export default HighHeels01;
