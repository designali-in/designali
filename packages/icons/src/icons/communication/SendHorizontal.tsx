import * as React from "react";

import type { DesignaliProps } from "../../types";

export const SendHorizontal = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="m3 3 3 9-3 9 19-9Z" />
        <path d="M6 12h16" />
      </svg>
    );
  },
);

export default SendHorizontal;
