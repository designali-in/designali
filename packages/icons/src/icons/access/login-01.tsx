import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Login01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polyline points="15.14 7.1 10.23 12 15.14 16.9" />
        <line x1="10.23" y1="12" x2="22" y2="12" />

        <path d="M12,22c-5.52,0-10-4.48-10-10,0-5.52,4.48-10,10-10" />
      </svg>
    );
  },
);

export default Login01;
