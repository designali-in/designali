import * as React from "react";

import type { DesignaliProps } from "../../types";

export const Text = React.forwardRef<SVGSVGElement, DesignaliProps>(
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
        <path d="M17.56,5.39H2" />
        <path d="M22,12.06H2" />
        <path d="M15.44,18.61H2" />
      </svg>
    );
  },
);

export default Text;
