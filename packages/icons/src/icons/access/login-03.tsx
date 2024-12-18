import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Login03 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M15.33,18.24c-.08,2.06-1.79,3.8-4.09,3.74-.53-.01-1.19-.2-2.51-.57-3.18-.9-5.93-2.4-6.59-5.77-.12-.62-.12-1.32-.12-2.71v-1.86c0-1.4,0-2.09.12-2.71.66-3.37,3.42-4.88,6.59-5.77,1.32-.37,1.98-.56,2.51-.57,2.29-.06,4.01,1.69,4.09,3.74" />
        <g>
          <polyline points="13.72 8.52 10.23 12 13.72 15.48" />
          <line x1="10.23" y1="12" x2="22" y2="12" />
        </g>
      </svg>
    );
  },
);

export default Login03;
