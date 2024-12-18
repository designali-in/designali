import * as React from "react";

import type { DesignaliProps } from "../../types";

export const LoginCircle01 = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <polyline points="9.6 8.52 6.12 12 9.6 15.48" />
        <line x1="6.12" y1="12" x2="17.88" y2="12" />

        <circle cx="12" cy="12" r="10" />
      </svg>
    );
  },
);

export default LoginCircle01;
